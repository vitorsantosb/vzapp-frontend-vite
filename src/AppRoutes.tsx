import {BrowserRouter as Router, Route} from 'react-router-dom';


import Home from "../src/pages/home/Home.tsx";
import RoutesWithNotFound from "../src/utils/RoutesWithNotFound.tsx";


function AppRoutes() {
  return (
    <Router>
      <RoutesWithNotFound>
        <Route index path={"/"} element={<Home/>}/>
      </RoutesWithNotFound>
    </Router>
  );
}

export default AppRoutes;