import prisma from "../../prisma/prisma.js";
import type { CreateLogin } from "../dto/CreateLoginDto.js";

export const getLogin = async (login: CreateLogin) => {
  return await prisma.employee.findFirst({
    where: {
      email: login.email,
      password: login.pasword,
    },
  });
};
