import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "../services/user";
import { UserLogin, UserRegister } from "../types/user";

const MutationKeyCreateUser = "CREATE_USER_KEY";
const MutationKeyGetUser = "GET_USER_KEY";

export const useUserCreate = () =>
  useMutation({
    mutationKey: [MutationKeyCreateUser],
    mutationFn: (newUser: UserRegister) => userService.CreateUser(newUser),
    onSuccess: () => {
      console.log("User created successfully");
    },
    onError: (error: any) => {
      console.error("Error creating user", error);
    },
  });

export const useUserLogin = () =>
  useMutation({
    mutationKey: [MutationKeyCreateUser],
    mutationFn: (data: UserLogin) => userService.UserLogin(data),
    onSuccess: () => {
      console.log("User logged successfully");
    },
    onError: (error: any) => {
      console.error("Error login user", error);
    },
  });

export const useGetUser = () =>
  useQuery({
    queryKey: [MutationKeyGetUser],
    queryFn: userService.GetUserInfo,
    retry: 0,
  });
