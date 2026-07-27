import prisma from "../../prisma/prisma.js";
export const getEmployees = async () => {
    return prisma.employee.findMany({
        orderBy: {
            name: "asc",
        },
    });
};
export const getEmployeeById = async (employeeId) => {
    const employee = prisma.employee.findFirst({
        where: {
            employeeId,
        },
    });
    return employee;
};
export const addEmployee = async (employee) => {
    //console.log(employee);
    const newEmployee = await prisma.employee.create({
        data: employee,
    });
    // console.log(newEmployee);
    return newEmployee;
};
export const udpateEmployee = async (employee) => {
    // console.log(employee);
    const { employeeId, ...employeeData } = employee;
    const updateEmployee = await prisma.employee.update({
        where: {
            employeeId: employeeId,
        },
        data: employeeData,
    });
    return updateEmployee;
};
export const deleteEmployeeById = async (employeeId) => {
    const employee = prisma.employee.delete({
        where: {
            employeeId,
        },
    });
    return employee;
};
//# sourceMappingURL=employee.service.js.map