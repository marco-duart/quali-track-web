import { isAxiosError } from "axios";
import api from "../api";
import {
  GetCandiesDTO,
  CreateCandyDTO,
  DeleteCandyDTO,
} from "./DTO";

export const GetCandies = async (params: GetCandiesDTO.IParams) => {
  try {
    const { prefix, token } = params;
    const response = await api.get<GetCandiesDTO.IResponse>(
      `/${prefix}/candies`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      candies: response.data,
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

export const CreateCandy = async (params: CreateCandyDTO.IParams) => {
  try {
    const { token, ...restParams } = params;
    const response = await api.post<CreateCandyDTO.IResponse>("/admins/candies", {
      params: restParams,
      headers: { Authorization: token },
    });

    return {
      success: true,
      message: "MESSAGE",
      candy: response.data,
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

export const DeleteCandy = async (params: DeleteCandyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.delete<DeleteCandyDTO.IResponse>(
      `/admins/candies/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: "MESSAGE",
      candy: response.data,
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
