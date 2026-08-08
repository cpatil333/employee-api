import type { Request, Response } from "express";
import {
  getEmployeesByDepartmentService,
  getEmployeesByGenderService,
  getEmployeesByStatusService,
} from "../services/dashboard.service.js";

export const getEmployeesByDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.departmentId;

    const response = await getEmployeesByDepartmentService(
      Number(departmentId),
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch Employees by Department summary",
    });
  }
};

export const getEmployeesByGender = async (req: Request, res: Response) => {
  try {
    // console.log(req.params.gender);
    const gender = req.params.gender;
    const response = await getEmployeesByGenderService(gender as string);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch Gender summary",
    });
  }
};

export const getEmployeesByStatus = async (req: Request, res: Response) => {
  try {
    const status = req.params.status;
    const response = await getEmployeesByStatusService(status as string);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch Status summary",
    });
  }
};
