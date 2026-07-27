import prisma from "../../prisma/prisma.js";
export const getDesignations = async () => {
    return await prisma.designation.findMany({
        orderBy: {
            name: "asc",
        },
    });
};
export const getDesignation = async (designationId) => {
    return await prisma.designation.findFirst({
        where: {
            id: Number(designationId),
        },
        orderBy: {
            name: "asc",
        },
    });
};
export const addDesignation = async (designation) => {
    const newDesignation = await prisma.designation.create({
        data: designation,
    });
    return newDesignation;
};
export const editDesignation = async (designation) => {
    const { id, ...designationData } = designation;
    const updateDesignation = await prisma.designation.update({
        where: {
            id: Number(id),
        },
        data: designationData,
    });
    return updateDesignation;
};
export const removeDesignation = async (designationId) => {
    const designation = await prisma.designation.delete({
        where: {
            id: designationId,
        },
    });
    return designation;
};
//# sourceMappingURL=designation.service.js.map