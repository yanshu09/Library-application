
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from './screens/SignUpScreen';
import LibrarianHomeScreen from './screens/LibrarianHomeScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import HomeScreen from './screens/HomeScreen';

const router = createBrowserRouter([
  {path: "/login", element: <LoginScreen/>}, 
  {path: "/signup", element: <SignUpScreen/>},
  {path: "/", element: <HomeScreen/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
