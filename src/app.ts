import express, { Application } from 'express';
import Logger from './services/logger';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set("view engine", "ejs");
        this.app.use(express.static('public'));

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            Logger(`App listening on the http://localhost:${this.port}`);
        });
    };
};

export default App;