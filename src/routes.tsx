import Home from "./pages/Home";
import Movies from "./pages/Movies";
import User from "./pages/User";
import Users from "./pages/Users";

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
];

export default Routes;
