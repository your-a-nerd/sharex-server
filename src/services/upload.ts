import multer from 'multer';
import path from 'path';
import * as config from '../config.json'

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../", "public", "images"),
    filename: (req, file, cb) => {
        if (config.supportedFiles.includes(path.extname(file.originalname).split(".")[1])) {
            cb(null, guidGenerator() + path.extname(file.originalname));
        } else {
            cb("Error: Unsupported file type!");
        };
    },
});

const upload = multer({
    storage: storage,
    limits: {
		fileSize: 10000000
	}
})

function guidGenerator() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

export default upload