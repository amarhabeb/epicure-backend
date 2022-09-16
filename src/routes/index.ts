import express from 'express';
import chefsRoutes from './chefs.routes';
import restaurantsRoutes from './restaurants.routes';
import dishesRoutes from './dishesh.routs';

const router = express.Router();

router.use('/api/chefs/', chefsRoutes);
router.use('/api/restaurants/', restaurantsRoutes);
router.use('/api/dishes/', dishesRoutes);

export default router;


