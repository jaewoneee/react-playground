import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import userModel from '../models/uploadModel';

const router = Router();
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'dist/uploads/');
    },
    filename: (req, file, done) => {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        const date = new Date().valueOf();
        done(null, `${basename}_${date}${ext}`);
    }
})
const upload = multer({storage: storage}).single('image');

// 업로드
router.post('/',  (req, res) => {
     upload(req, res, (err) => {
        const file = req.file.filename;
        const text = JSON.parse(JSON.stringify(req.body)).text;

        if (err) {
            return res.status(400).json({
                "msg": "Upload Fail."
            });
        } else {
            const item = userModel.create({ image: `uploads/${file}`, text: text });
            return res.status(201);
        }
    });
});

// 피드 가져오기
router.get('/', async (req, res) => {
    try {
        const items =  await userModel.find({}).lean().exec();
        console.log(items);
        res.status(201).json({ ...items });
    } catch (err) {
        res.status(400).json({ "msg": err });
    }
});
export default router;