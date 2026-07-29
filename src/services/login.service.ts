import prisma from "../../prisma/prisma.js";
import type { CreateEmployeeDto } from "../dto/CreateEmployeeDto.js";
import type { CreateLogin } from "../dto/CreateLoginDto.js";

export const getLogin = async (login: CreateLogin) => {
  return await prisma.employee.findFirst({
    where: {
      email: login.email,
      password: login.pasword,
    },
  });
};

export const forgotPassword = async (email: string) => {
  return await prisma.employee.findUnique({
    where: {
      email: email,
    },
  });
};
