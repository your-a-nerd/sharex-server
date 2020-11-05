import express, { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import path from 'path';

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.home);
    }

    home = (req: Request, res: Response) => {
        res.render("home")
    };
};

export default HomeController