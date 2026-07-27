import { addDesignation, editDesignation, getDesignation, getDesignations, removeDesignation, } from "../services/designation.service.js";
export const fetchDesignations = async (req, res) => {
    try {
        const designation = await getDesignations();
        res.status(200).json(designation);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Designations",
        });
    }
};
export const fetchDesignation = async (req, res) => {
    try {
        const designationId = Number(req.params.id);
        const designation = await getDesignation(designationId);
        res.status(200).json(designation);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Designation",
        });
    }
};
export const createDesignation = async (req, res) => {
    try {
        const newdesignation = {
            ...req.body,
            name: req.body.name,
        };
        const designation = await addDesignation(newdesignation);
        res.status(200).json(designation);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to save Designation",
        });
    }
};
export const updateDesignation = async (req, res) => {
    try {
        const updatedesignation = {
            ...req.body,
            id: req.params.id,
            name: req.body.name,
        };
        const designation = await editDesignation(updatedesignation);
        res.status(200).json(designation);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update Designation",
        });
    }
};
export const deleteDesignation = async (req, res) => {
    try {
        const designationId = Number(req.params.id);
        const designation = await removeDesignation(designationId);
        res.status(200).json(designation);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete Designation",
        });
    }
};
//# sourceMappingURL=designation.controller.js.map