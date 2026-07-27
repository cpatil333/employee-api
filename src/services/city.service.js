import prisma from "../../prisma/prisma.js";
export const getCities = async (stateId) => {
    return await prisma.city.findMany({
        where: {
            stateId: stateId,
        },
        orderBy: {
            name: "asc",
        },
    });
};
//# sourceMappingURL=city.service.js.map