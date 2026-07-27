import prisma from "../../prisma/prisma.js";
export const getStates = async (countryId) => {
    return prisma.state.findMany({
        where: {
            countryId: countryId,
        },
        orderBy: {
            name: "asc",
        },
    });
};
//# sourceMappingURL=state.service.js.map