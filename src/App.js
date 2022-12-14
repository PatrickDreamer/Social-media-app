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
import Profile from './pages/profile/Profile';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';


function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);
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
      element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),

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
