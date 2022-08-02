import { RequestHandler } from "express";

import { Drivers } from "../models/app-data";

export const returnDriver: RequestHandler = (req, res, next) => {
    const newDriver = new Drivers(
        'Charles Leclerc', 'Ferrari',16,5, 18
        );

    res.status(200).json(newDriver);
};
