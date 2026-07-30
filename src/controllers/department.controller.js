import { getDepartment, getDepartments, addDepartment, editDepartment, removeDepartment, } from "../services/department.service.js";
export const fetchDepartments = async (req, res) => {
    try {
        const deparment = await getDepartments();
        res.status(200).json(deparment);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Departments",
        });
    }
};
export const fetchDepartment = async (req, res) => {
    try {
        const departmentId = Number(req.params.id);
        const deparment = await getDepartment(departmentId);
        res.status(200).json(deparment);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Department",
        });
    }
};
export const createDepartment = async (req, res) => {
    try {
        const department = {
            ...req.body,
            name: req.body.name,
        };
        const deparment = await addDepartment(department);
        res.status(200).json(deparment);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to save Department",
        });
    }
};
export const updateDepartment = async (req, res) => {
    try {
        const department = {
            ...req.body,
            id: req.params.id,
            name: req.body.name,
        };
        const deparment = await editDepartment(department);
        res.status(200).json(deparment);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update Department",
        });
    }
};
export const deleteDepartment = async (req, res) => {
    try {
        const departmentId = Number(req.params.id);
        const deparment = await removeDepartment(departmentId);
        res.status(200).json(deparment);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete Department",
        });
    }
};
//# sourceMappingURL=department.controller.js.map