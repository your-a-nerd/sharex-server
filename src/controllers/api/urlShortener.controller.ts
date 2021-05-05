import express, { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';
import path from 'path';
import upload from '../../services/upload';

class IMGController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/s/:ID', this.fetchShortenedLink);
        this.router.post("/s/create", upload.single("fdata"), this.shortenLink)
    }

    fetchShortenedLink = (req: Request, res: Response) => {

    };

    shortenLink = (req: any, res: Response) => {

    };
};

export default IMGController