import { DefaultValues } from "@/global.constants";
import { LoginRequest } from "../../../../api/requests/login.request";

export const INITIAL_LOGIN_DATA: LoginRequest = {
  email: DefaultValues.EMPTY_STRING,
  password: DefaultValues.EMPTY_STRING,
};
