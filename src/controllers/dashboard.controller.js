import { getEmployeesByDepartmentService, getEmployeesByGenderService, getEmployeesByStatusService, } from "../services/dashboard.service.js";
export const getEmployeesByDepartment = async (req, res) => {
    try {
        const departmentId = req.params.departmentId;
        const response = await getEmployeesByDepartmentService(Number(departmentId));
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to fetch Employees by Department summary",
        });
    }
};
export const getEmployeesByGender = async (req, res) => {
    try {
        // console.log(req.params.gender);
        const gender = req.params.gender;
        const response = await getEmployeesByGenderService(gender);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to fetch Gender summary",
        });
    }
};
export const getEmployeesByStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const response = await getEmployeesByStatusService(status);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to fetch Status summary",
        });
    }
};
//# sourceMappingURL=dashboard.controller.js.map