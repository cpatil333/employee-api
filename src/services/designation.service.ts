import prisma from "../../prisma/prisma.js";
import type { CreateDesignationDto } from "../dto/CreateDesignationDto.js";
import type { UpdateDesignationDto } from "../dto/UpdateDesignationDto.js";

export const getDesignations = async () => {
  return await prisma.designation.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getDesignation = async (designationId: number) => {
  return await prisma.designation.findFirst({
    where: {
      id: Number(designationId),
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const addDesignation = async (designation: CreateDesignationDto) => {
  const newDesignation = await prisma.designation.create({
    data: designation,
  });

  return newDesignation;
};

export const editDesignation = async (designation: UpdateDesignationDto) => {
  const { id, ...designationData } = designation;

  const updateDesignation = await prisma.designation.update({
    where: {
      id: Number(id),
    },
    data: designationData,
  });

  return updateDesignation;
};

export const removeDesignation = async (designationId: number) => {
  const designation = await prisma.designation.delete({
    where: {
      id: designationId,
    },
  });

  return designation;
};
