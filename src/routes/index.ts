import express from 'express';

import adminRoute from './adminLogin.route';

const router = express.Router();

const defaultRoute = [
    {
        path: '/adminLogin',
        router: adminRoute
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, router.route);
  });
  
  export default router;
