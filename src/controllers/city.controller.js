import { getCities } from "../services/city.service.js";
export const fetchCities = async (req, res) => {
    try {
        const stateId = Number(req.params.stateId);
        const cities = await getCities(stateId);
        res.status(200).json(cities);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Cities",
        });
    }
};
//# sourceMappingURL=city.controller.js.map