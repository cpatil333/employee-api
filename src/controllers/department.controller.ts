import type { Request, Response } from "express";
import {
  getDepartment,
  getDepartments,
  addDepartment,
  editDepartment,
  removeDepartment,
} from "../services/department.service.js";
import type { CreateDepartmentDto } from "../dto/CreateDepartmentDto.js";
import type { UpdateDepartmentDto } from "../dto/UpdateDepartmentDto.js";

export const fetchDepartments = async (req: Request, res: Response) => {
  try {
    const deparment = await getDepartments();
    res.status(200).json(deparment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Departments",
    });
  }
};

export const fetchDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = Number(req.params.id);

    const deparment = await getDepartment(departmentId);
    res.status(200).json(deparment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Department",
    });
  }
};

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const department: CreateDepartmentDto = {
      ...req.body,
      name: req.body.name,
    };

    const deparment = await addDepartment(department);
    res.status(200).json(deparment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to save Department",
    });
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const department: UpdateDepartmentDto = {
      ...req.body,
      id: req.params.id,
      name: req.body.name,
    };

    const deparment = await editDepartment(department);
    res.status(200).json(deparment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update Department",
    });
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    const departmentId = Number(req.params.id);

    const deparment = await removeDepartment(departmentId);
    res.status(200).json(deparment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Department",
    });
  }
};
