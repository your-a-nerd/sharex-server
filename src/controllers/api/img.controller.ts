import express, { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';
import upload from '../../services/upload';

class HomeController implements IControllerBase {
    public path = '/api/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/get/:ID', this.FetchImg);
        this.router.post("/upload", upload.single("picture"), this.uploadImg)
    }

    FetchImg = (req: Request, res: Response) => {
        res.send({ status: "ok", msg: req.params.ID})
    };

    uploadImg = (req: Request, res: Response) => {

    };
};

export default HomeController