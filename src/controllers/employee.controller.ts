import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import {
  addEmployee,
  deleteEmployeeById,
  getEmployeeById,
  getEmployees,
  udpateEmployee,
} from "../services/employee.service.js";
import type { CreateEmployeeDto } from "../dto/CreateEmployeeDto.js";
import type { UpdateEmployeeDto } from "../dto/UpdateEmployeeDto.js";
import prisma from "../../prisma/prisma.js";

export const fetchEmployees = async (req: Request, res: Response) => {
  try {
    console.log("Employees API called");
    const employees = await getEmployees();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch Employees",
    });
  }
};

export const fetchEmployeeById = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.employeeId);

    const employees = await getEmployeeById(employeeId);

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Employee",
    });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const existingEmployee = await prisma.employee.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (existingEmployee) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const employee: CreateEmployeeDto = {
      ...req.body,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      role: req.body.role,
      departmentId: Number(req.body.departmentId),
      designationId: Number(req.body.designationId),
      status: req.body.status,
      joiningDate: req.body.joiningDate,
      salary: Number(req.body.salary),
      gender: req.body.gender,
      maritalStatus: req.body.maritalStatus,
      address1: req.body.address1,
      address2: req.body.address2,
      countryId: Number(req.body.countryId),
      stateId: Number(req.body.stateId),
      cityId: Number(req.body.cityId),
      pincode: req.body.pincode,
      //profileImage: req.file?.filename ?? null,
      profileImage: req.file?.path,
    };

    const employees = await addEmployee(employee);

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save employee",
      error,
    });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee: UpdateEmployeeDto = {
      ...req.body,
      employeeId: Number(req.params.employeeId),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      departmentId: Number(req.body.departmentId),
      designationId: Number(req.body.designationId),
      status: req.body.status,
      joiningDate: req.body.joiningDate,
      salary: Number(req.body.salary),
      gender: req.body.gender,
      maritalStatus: req.body.maritalStatus,
      address1: req.body.address1,
      address2: req.body.address2,
      countryId: Number(req.body.countryId),
      stateId: Number(req.body.stateId),
      cityId: Number(req.body.cityId),
      pincode: req.body.pincode,
      //profileImage: req.file?.filename ?? null,
      profileImage: req.file?.path,
    };

    const employees = await udpateEmployee(employee);
    res.status(201).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update Employee",
    });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.employeeId);

    const employees = await deleteEmployeeById(employeeId);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Employee",
    });
  }
};
