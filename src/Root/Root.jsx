import { createBrowserRouter } from 'react-router-dom'
import Banner from '../Components/Banner/Banner';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Banner/> 
  }
]);

export default router;