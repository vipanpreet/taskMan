import { DocumentDefinition, FilterQuery } from "mongoose";

import Team, { TeamDocument } from "../model/team.model";
import User, { UserDocument } from "../model/user.model";

export async function addUser(userInput: any, query: FilterQuery<TeamDocument>) {
  let { email } = userInput;
  let { id } = query;

  try {
    let user: any = await User.findOne({ email });
    if (!user) return;

    let i = user.teams.indexOf(id);

    if (i >= 0) {
      user.teams.splice(i, 1);
    } else {
      user.teams.push(id);
    }

    return await user.save();
  } catch (error: any) {
    throw new Error(error);
    // log.error("error", error);
  }
}
