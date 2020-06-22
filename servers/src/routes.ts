import express, { request } from 'express';
//import pacotes de sistemaas.

//importe constancias ou diretorios criados
import PointsController from './controlers/PointsController';
import ItemsController from './controlers/ItemsController';

//constancias
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//rotas items
routes.get('/items', itemsController.index);

//rotas pointes
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;