import prisma from "../../prisma/prisma.js";

export const getStates = async (countryId: number) => {
  return prisma.state.findMany({
    where: {
      countryId: countryId,
    },
    orderBy: {
      name: "asc",
    },
  });
};
