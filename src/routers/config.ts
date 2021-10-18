import { RouteProps } from 'react-router-dom';

import Home from '@/pages/home';
import Products from '@/pages/products';
import AboutUs from '@/pages/about_us';
import JoinUs from '@/pages/join_us';
import OldRegister from '@/pages/register/old_register';
import NewRegister from '@/pages/register/new_register';

const config: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/about',
    component: AboutUs,
  },
  {
    path: '/join-us',
    component: JoinUs,
  },
  {
    path: '/old-register',
    component: OldRegister,
  },
  {
    path: '/new-register',
    component: NewRegister,
  },
];

export default config;
