import { RouteProps } from "react-router-dom";

import Home from '@/pages/home';
import Products from '@/pages/products';
import About from '@/pages/about';
import JoinUs from '@/pages/join_us';
import OldRegister from '@/pages/register/OldRegister';
import NewRegister from '@/pages/register/NewRegister';

const config: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/about',
    component: About,
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
]

export default config;
