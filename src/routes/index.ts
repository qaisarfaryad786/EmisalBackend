import express from 'express';

import adminRoute from './adminLogin.route';
import getUser from './getUser.route';

const router = express.Router();

const defaultRoute = [
    {
        path: '/adminLogin',
        route: adminRoute
    },
    {
        path: '/userDashboard',
        route:getUser
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, route.route);
  });
  
  export default router;
