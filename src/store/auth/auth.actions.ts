import { LoginRequest } from "@/api/requests/login.request";
import { GeneralResponse } from "@/api/responses/general.response";
import { LoginResponse } from "@/api/responses/login.response";
import { httpApi } from "@/api/services/http-instance";
import { DefaultValues } from "@/global.constants";
import { User } from "@/models/user.model";

export const login = async (data: LoginRequest): Promise<User | null> => {
  try {
    const { data: response } = await httpApi.post<
      GeneralResponse<LoginResponse>
    >("/v1/auth/login", data);
    localStorage.setItem("token", response.data.accessToken);
    return {
      email: response.data.user.email,
      name: response.data.user.name,
      token: response.data.accessToken,
    };
  } catch (error:any) {
    console.error(error);
    const isServerError = error.response && error.response.data
    const isValidationError = Array.isArray(error.response.data.message)
    if(isServerError) {
      throw Error(error.response.data.message)
    }
    if(isValidationError) {
      throw Error(error.response.data.message[0])
    }
    
    throw Error(DefaultValues.INTERNAL_ERROR_MESSAGE)
    
  }
};
