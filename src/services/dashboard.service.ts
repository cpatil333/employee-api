import prisma from "../../prisma/prisma.js";
import type { ExportFilter } from "../dto/ExportFilterDto.js";

export const getEmployeesByDepartmentService = async (departmentId: number) => {
  const employees = await prisma.employee.findMany({
    where: {
      departmentId: departmentId,
    },
    select: {
      employeeId: true,
      name: true,
      department: {
        select: {
          id: true,
          name: true,
        },
      },
      designation: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return employees.map((emp) => ({
    employeeId: emp.employeeId,
    name: emp.name,
    department: emp.department.name,
    designation: emp.designation.name,
  }));
};

export const getEmployeesByGenderService = async (gender: string) => {
  const genders = await prisma.employee.findMany({
    where: {
      gender: gender,
    },
    select: {
      employeeId: true,
      name: true,
      department: {
        select: {
          id: true,
          name: true,
        },
      },
      designation: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return genders.map((emp) => ({
    employeeId: emp.employeeId,
    name: emp.name,
    department: emp.department.name,
    designation: emp.designation.name,
  }));
};

export const getEmployeesByStatusService = async (status: string) => {
  const statusData = await prisma.employee.findMany({
    where: {
      status: status,
    },
    select: {
      employeeId: true,
      name: true,
      department: {
        select: {
          id: true,
          name: true,
        },
      },
      designation: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return statusData.map((emp) => ({
    employeeId: emp.employeeId,
    name: emp.name,
    department: emp.department.name,
    designation: emp.designation.name,
  }));
};

export const getEmployeesForExport = async (options: ExportFilter) => {
  const filters = {
    ...(options.departmentId && {
      departmentId: options.departmentId,
    }),
    ...(options.gender && {
      gender: options.gender,
    }),
    ...(options.status && {
      status: options.status,
    }),
  };
  const employees = await prisma.employee.findMany({
    where: filters,
    select: {
      name: true,
      department: true,
      designation: true,
      gender: true,
      status: true,
    },
  });

  return employees.map((emp) => ({
    name: emp.name,
    department: emp.department.name,
    designation: emp.designation.name,
    gender: emp.gender,
    status: emp.status,
  }));
};
