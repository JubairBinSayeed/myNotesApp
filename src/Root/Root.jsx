import { createBrowserRouter } from 'react-router-dom'
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import Notes from '../Components/Notes/Notes';
import PinnedNotes from '../Components/PinnedNotes/PinnedNotes';
import Register from '../Components/Register/Register';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Navbar/> ,
    children: [
      {
        path:'/',
        element: <Banner/>,
      },
      {
        path:'/notes',
        element: <Notes/>,
      },
      {
        path:'/pinnednotes',
        element: <PinnedNotes/>,
      },
      {
        path:'/register',
        element: <Register/>,
      }
    ]
  }
]);

export default router;