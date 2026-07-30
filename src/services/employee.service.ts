import prisma from "../../prisma/prisma.js";
import type { CreateEmployeeDto } from "../dto/CreateEmployeeDto.js";
import type { UpdateEmployeeDto } from "../dto/UpdateEmployeeDto.js";

export const getEmployees = async () => {
  return prisma.employee.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getEmployeeById = async (employeeId: number) => {
  const employee = prisma.employee.findFirst({
    where: {
      employeeId,
    },
  });
  return employee;
};

export const addEmployee = async (employee: CreateEmployeeDto) => {
  const newEmployee = await prisma.employee.create({
    data: employee,
  });

  return newEmployee;
};

export const udpateEmployee = async (employee: UpdateEmployeeDto) => {
  const { employeeId, ...employeeData } = employee;

  const updateEmployee = await prisma.employee.update({
    where: {
      employeeId: employeeId,
    },
    data: employeeData,
  });
  return updateEmployee;
};

export const deleteEmployeeById = async (employeeId: number) => {
  const employee = prisma.employee.delete({
    where: {
      employeeId,
    },
  });
  return employee;
};
