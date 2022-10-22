import { UserDocument } from "../../model/user.model";
declare global {
  namespace Express {
    interface Request {
      user: UserDocument; //or other type you would like to use
    }
  }
}
