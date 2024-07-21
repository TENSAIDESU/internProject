import React from "react";
// import CommonAccessMain from "../components/mainCommon";
import { Route,Routes} from "react-router-dom";
import AuthorizationMain from "../components/AuthorizationMain/AuthorizationMain";
// import SearchPageMain from "../components/SearchPageMain/SearchPageMain";
// import ResultPageMain from "../components/ResultPageMain/ResultPageMain";
import UsersPage from "./../components/mainCommon/CommonAccessMain"
import CurrentUser from "../components/mainCommon/selectedUser/selectedUser";


const AppRoutes = () => {
  return  (

        <Routes> 
          <Route path="/" element={< AuthorizationMain/>}/>
            <Route path="/mainPage" element={<UsersPage/>}/>
            <Route path="/mainPage/:id" element={<CurrentUser/>}/>
        </Routes> 
  )
}


export default AppRoutes;
