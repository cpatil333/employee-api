import prisma from "../../prisma/prisma.js";
export const getLogin = async (login) => {
    return await prisma.employee.findFirst({
        where: {
            email: login.email,
            password: login.pasword,
        },
    });
};
//# sourceMappingURL=login.service.js.map