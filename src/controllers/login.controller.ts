import type { Request, Response } from "express";
import {
  getforgotPassword,
  getLogin,
  getResetPassword,
} from "../services/login.service.js";
import type { CreateLogin } from "../dto/CreateLoginDto.js";
import prisma from "../../prisma/prisma.js";
import * as bcrypt from "bcryptjs";

export const fetchLogin = async (req: Request, res: Response) => {
  try {
    const existingEmployee = await prisma.employee.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!existingEmployee) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }
    const login: CreateLogin = {
      ...req.body,
      email: req.body.email,
      password: req.body.password,
    };

    const isPasswordValid = await bcrypt.compare(
      String(req.body.password),
      String(existingEmployee.password),
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }

    const userLogin = await getLogin(login);

    // Don't return the password
    const user = {
      employeeId: existingEmployee.employeeId,
      name: existingEmployee.name,
      email: existingEmployee.email,
      role: existingEmployee.role,
      profileImage: existingEmployee.profileImage,
    };

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error,
    });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const existingEmployee = await prisma.employee.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!existingEmployee) {
      return res.status(400).json({
        message: "Invalid email.",
      });
    }

    const token = await getforgotPassword(existingEmployee.email);

    return res.status(200).json({
      message: "Reset token generated",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;

    const employee = await prisma.employee.findFirst({
      where: {
        resetToken: token,
      },
    });

    if (!employee) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    if (employee.resetTokenExpiry && employee.resetTokenExpiry < new Date()) {
      return res.status(400).json({
        message: "Token expired",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await getResetPassword(hashedPassword, employee.employeeId);

    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
