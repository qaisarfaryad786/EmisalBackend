import express from 'express';

import adminRoute from './adminLogin.route';

const router = express.Router();

const defaultRoute = [
    {
        path: '/adminLogin',
        route: adminRoute
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, route.route);
  });
  
  export default router;
