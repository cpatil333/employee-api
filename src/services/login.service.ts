import prisma from "../../prisma/prisma.js";
import type { CreateLogin } from "../dto/CreateLoginDto.js";
import crypto from "crypto";

export const getLogin = async (login: CreateLogin) => {
  return await prisma.employee.findFirst({
    where: {
      email: login.email,
      password: login.pasword,
    },
  });
};

export const getforgotPassword = async (email: string) => {
  const token = crypto.randomBytes(32).toString("hex");

  await prisma.employee.update({
    where: { email },
    data: {
      resetToken: token,
      resetTokenExpiry: new Date(Date.now() + 30 * 60 * 1000),
    },
  });

  return token;
};

export const getResetPassword = async (
  hashedPassword: string,
  employeeId: number,
) => {
  return await prisma.employee.update({
    where: {
      employeeId: employeeId,
    },
    data: {
      password: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });
};
