import prisma from "../../prisma/prisma.js";

export const getCities = async (stateId: number) => {
  return await prisma.city.findMany({
    where: {
      stateId: stateId,
    },
    orderBy: {
      name: "asc",
    },
  });
};
