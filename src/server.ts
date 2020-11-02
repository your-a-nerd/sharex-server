import App from './app'

// Import our controllers / middleware
import Logger from './middleware/logger'
import IMGController from './controllers/api/img.controller';

const app = new App({
    port: 5000,
    controllers: [
        new IMGController()
    ],
    middleWares: [
        Logger
    ]
});

app.listen();