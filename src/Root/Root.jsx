import { createBrowserRouter } from 'react-router-dom'
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import Notes from '../Components/Notes/Notes';
import Register from '../Components/Register/Register';
import AboutUs from '../Components/AboutUs/AboutUs';
import Login from '../Components/Login/Login';
import ErrorElement from '../Components/ErrorElement/ErrorElement';
import Accounts from '../Components/Accounts/Accounts';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Navbar/> ,
    errorElement: <ErrorElement/>,
    children: [
      {
        path:'/',
        element: <Banner/>,
      },
      {
        path:'/notes',
        element: <PrivateRoute><Notes/></PrivateRoute>,
      },
      {
        path:'/register',
        element: <Register/>,
      },
      {
        path:'/aboutUs',
        element: <AboutUs/>,
      },
      {
        path:'/login',
        element: <Login/>,
      },
      {
        path:'/accounts',
        element: <Accounts/>,
      }
    ]
  }
]);

export default router;