import prisma from "../../prisma/prisma.js";

export const getDepartments = async () => {
    return await prisma.department.findMany({
        orderBy: {
            name: "asc",
        },
    });
};

export const getDepartment = async (departmentId) => {
    return await prisma.department.findFirst({
        where: {
            id: departmentId,
        },
        orderBy: {
            name: "asc",
        },
    });
};
export const addDepartment = async (depatment) => {
    const newDepartment = await prisma.department.create({
        data: depatment,
    });
    return newDepartment;
};
export const editDepartment = async (depatment) => {
    try {
        const { id, ...depatmentData } = depatment;
        const updateDepartment = await prisma.department.update({
            where: {
                id: Number(id),
            },
            data: depatmentData,
        });
        return updateDepartment;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const removeDepartment = async (departmentId) => {
    const department = await prisma.department.delete({
        where: {
            id: departmentId,
        },
    });
    return department;
};
//# sourceMappingURL=department.service.js.map