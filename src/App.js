import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Landingpg from './Pages/Landingpg';
import LoginForm from './Pages/LoginForm';
import FAQ from './Pages/FAQ';
import Resources from './Pages/Resourcepg';
import Signup from './Components/Signup';
import Home from './Components/Home';
import AuthDetails from './API/AuthDetails';




const router = createBrowserRouter ([
  {
    path: "/",
    element:<Landingpg/>
  },
  {
    path: "/Pages/LoginForm.js",
    element: <LoginForm/>
  },
  {
    path:"/Pages/FAQ.js",
    element:<FAQ/>
  },
  {
    path: "/Pages/Resourcepg.js",
    element: <Resources/>
  },
{
  path:"/sign-up",
  element: <Signup/>
},
{
  path:"/home",
  element:<Home/>
},
{
  path: "/auth-details",
  element: <AuthDetails/>
}

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
