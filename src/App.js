import logo from './logo.svg';
import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useContext,useState } from 'react';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import LeftBar from './components/leftBar/leftBar';
import RightBar from './components/rightBar/rightBar';
import { Children } from 'react';
import Profile from './pages/profile/Profile';
import { DarkMode } from '@mui/icons-material';
import { DarkModeContext } from './context/darkModeContext';
import { convertLength } from '@mui/material/styles/cssUtils';


function App() {
  const currentUser = true;
  const {darkMode} = useContext(DarkModeContext);
  console.log("darkMode", darkMode);
  const Layout = ()=> {
    return(
      <div className={`theme-${darkMode?"dark":"light"}`}>
        <Navbar />
        <div>
          <div style={{display: "flex"}}>
            <LeftBar/>
            <div style={{flex:6}}>
              <Outlet />
            </div>
             <RightBar/>
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        },

      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

  ]);
  return (
   <div>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;
