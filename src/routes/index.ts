import express from 'express';

import adminRoute from './adminLogin.route';
import getUser from './getUser.route';
import signupRoute from './signupUser.route';
import signinRoute from './userSignin.route';
import logout from './adminlogout.route';
import firSystem  from './firSystem.route';

const router = express.Router();

const defaultRoute = [
    {
        path: '/adminLogin',
        route: adminRoute
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
    },
    {
        path: '/getUsers',
        route:getUser
    },
    {
        path:'/firSystem/addNewFir',
        route:firSystem
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, route.route);
  });
  
  export default router;
