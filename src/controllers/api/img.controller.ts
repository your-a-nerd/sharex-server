import express, { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';

import multer from 'multer';
import path from 'path';
import upload from '../../services/upload';

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/img/:ID', this.FetchImg);
        this.router.post("/api/upload", upload.single("fdata"), this.uploadImg)
    }

    FetchImg = (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "../../../", "public", "images", req.params.ID))
    };

    uploadImg = (req: any, res: Response) => {
        res.send(`http://localhost:5000/img/${req.file.filename}`)
    };
};

export default HomeController