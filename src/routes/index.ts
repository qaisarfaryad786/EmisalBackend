import express from 'express';

import adminRoute from './adminLogin.route';
import getUser from './getUser.route';
import signupRoute from './signupUser.route';
import signinRoute from './userSignin.route';
import logout from './adminlogout.route';

const router = express.Router();

const defaultRoute = [
    {
        path: '/adminLogin',
        route: adminRoute
    },
    {
        path: '/getUsers',
        route:getUser
    },
    {
        path:'/signupUser',
        route: signupRoute
    },
    {
        path:'/login',
        route:signinRoute

    },
    {
        path: '/logout',
        route:logout
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, route.route);
  });
  
  export default router;
