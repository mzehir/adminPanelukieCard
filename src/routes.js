import React from 'react';
const Register = React.lazy(() => import ('./component/register'));
const Login = React.lazy(() => import ('./component/login'));
const Home = React.lazy(() => import ('./component/home'));

const routes = [
    { path: '/', exact: true, name: 'Admin Paneli' },
]

export default routes