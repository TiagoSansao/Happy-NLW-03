import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orfanatos', upload.array('images'), OrphanagesController.create);
routes.get('/orfanatos', OrphanagesController.index);
routes.get('/orfanatos/:id', OrphanagesController.show);

export default routes;