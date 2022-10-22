import { DocumentDefinition, FilterQuery } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import log from "../logger";
import User, { UserDocument } from "../model/user.model";
import { jwtKeys } from "../config/keys";
const { secret, tokenExp } = jwtKeys;

export async function createUser(input: DocumentDefinition<UserDocument>) {
  let { email, firstName, lastName, password } = input;
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User Already Exists");
    }
    user = new User({
      email,
      password,
      firstName,
      lastName,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    const payload = {
      id: user.id,
    };

    var token = jwt.sign(payload, <string>secret, { expiresIn: "45m" });
    user.token = token;

    await user.save();

    return "User is Created, please Login";
  } catch (error: any) {
    throw new Error(error);
    // log.error("error", error);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function loginSession(input: DocumentDefinition<UserDocument>) {
  let { email, password } = input;
  let user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Credentials");
  }
  // }

  const payload = {
    id: user.id,
  };

  let token = jwt.sign(payload, <string>secret, { expiresIn: <string>tokenExp });

  return {
    success: true,
    token: `Bearer ${token}`,
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    role: user?.role,
  };
}
