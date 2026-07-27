import { getStates } from "../services/state.service.js";
export const fetchStates = async (req, res) => {
    try {
        const countryId = Number(req.params.countryId);
        const states = await getStates(countryId);
        res.status(200).json(states);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch States",
        });
    }
};
//# sourceMappingURL=state.controller.js.map