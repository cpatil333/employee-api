import type { Request, Response } from "express";
import { getLogin } from "../services/login.service.js";
import type { CreateLogin } from "../dto/CreateLoginDto.js";
import prisma from "../../prisma/prisma.js";
import * as bcrypt from "bcrypt";

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
