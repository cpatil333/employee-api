import type { Request, Response } from "express";
import { getCountry } from "../services/country.service.js";

export const fetchCountry = async (req: Request, res: Response) => {
  try {
    const country = await getCountry();
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Country",
    });
  }
};
