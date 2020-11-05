import App from './app'

// Import our controllers / middleware
import IMGController from './controllers/api/img.controller';
import HomeController from './controllers/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new IMGController(),
        new HomeController()
    ],
    middleWares: [
        
    ]
});

app.listen();