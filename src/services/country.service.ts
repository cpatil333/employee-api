import prisma from "../../prisma/prisma.js";

export const getCountry = async () => {
  return await prisma.country.findMany({
    orderBy: {
      name: "asc",
    },
  });
};
