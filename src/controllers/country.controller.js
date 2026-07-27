import { getCountry } from "../services/country.service.js";
export const fetchCountry = async (req, res) => {
    try {
        const country = await getCountry();
        res.status(200).json(country);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Country",
        });
    }
};
//# sourceMappingURL=country.controller.js.map