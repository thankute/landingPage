import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import { DefaultLayout } from '../layouts';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/sign-in', component: SignIn, layout: DefaultLayout },
    { path: '/sign-up', component: SignUp, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
