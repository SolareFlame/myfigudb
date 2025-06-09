import multer from 'multer';
import path from 'path';
import * as fs from "node:fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const figureId = req.params.id;
        const dir = path.join('uploads', figureId);

        fs.mkdirSync(dir, { recursive: true });

        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

export const upload = multer({ storage });