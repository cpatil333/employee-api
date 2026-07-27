import prisma from "../../prisma/prisma.js";
import type { CreateDepartmentDto } from "../dto/CreateDepartmentDto.js";
import type { UpdateDepartmentDto } from "../dto/UpdateDepartmentDto.js";

export const getDepartments = async () => {
  return await prisma.department.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getDepartment = async (departmentId: number) => {
  return await prisma.department.findFirst({
    where: {
      id: departmentId,
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const addDepartment = async (depatment: CreateDepartmentDto) => {
  const newDepartment = await prisma.department.create({
    data: depatment,
  });

  return newDepartment;
};

export const editDepartment = async (depatment: UpdateDepartmentDto) => {
  //console.log(depatment);
  try {
    const { id, ...depatmentData } = depatment;

    const updateDepartment = await prisma.department.update({
      where: {
        id: Number(id),
      },
      data: depatmentData,
    });

    console.log(updateDepartment);
    return updateDepartment;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const removeDepartment = async (departmentId: number) => {
  const department = await prisma.department.delete({
    where: {
      id: departmentId,
    },
  });

  return department;
};
