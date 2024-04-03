import { isAxiosError } from "axios";
import api from "../api";
import {
  RegisterDTO,
  LoginAPIDTO,
  LoggedUserDTO,
} from "./DTO";

export const Register = async (params: RegisterDTO.IParams) => {
  try {
    console.log(params);
    const response = await api.post<RegisterDTO.IResponse>("/users", params);

    return {
      success: true,
      message: "MESSAGE",
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const LoginAPI = async (params: LoginAPIDTO.IParams) => {
  try {
    const response = await api.post<LoginAPIDTO.IResponse>(
      "/users/login",
      params
    );

    return {
      success: true,
      message: "MESSAGE",
      code: "CODIGO",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};

export const LoggedUser = async (params: LoggedUserDTO.IParams) => {
  try {
    const { token } = params;
    const response = await api.post<LoggedUserDTO.IResponse>("/users/me", {
      headers: { Authorization: token },
    });

    return {
      success: true,
      message: "MESSAGE",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};