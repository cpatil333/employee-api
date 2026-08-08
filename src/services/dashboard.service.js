import prisma from "../../prisma/prisma.js";
export const getEmployeesByDepartmentService = async (departmentId) => {
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
export const getEmployeesByGenderService = async (gender) => {
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
export const getEmployeesByStatusService = async (status) => {
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
//# sourceMappingURL=dashboard.service.js.map