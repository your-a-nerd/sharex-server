import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import mime from 'mime-types';

const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, "../../", "public", "images"),
        filename: (req, file, cb) => {
            crypto.pseudoRandomBytes(4, (err, raw) => {
                const mimeType = mime.lookup(file.originalname);
                const nameSplit = file.originalname.split(".").slice(0, -1);

                const name = nameSplit.join(".").replace(/\s/g, "-");
                cb(null, raw.toString("hex") + name + "." + mime.extension(mimeType));
            });
        },
    }),
});

export default upload