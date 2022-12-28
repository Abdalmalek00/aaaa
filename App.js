

import Navbar from "./Navbar/Navbar";
//import AddStudent from "./Pages/";
import { useState  } from "react";
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Login from "./Pages/login/Login";
import Blogs from "./Components/Blogs";
import Error from "./Pages/Error";
import Sginup from "./Pages/sginup/Sginup";
import Addblog from "./Pages/Addblog";
import User from "./Components/User";
import Showblogs from "./Showblogs";


function App() {


    var check = window.localStorage.getItem('isLogedin')
 
  return (
    <>
        <div>
        <BrowserRouter>
        {/* <Navbar /> */}
            
            <Navbar />
          <Routes>
            <Route path="/Sginup" element = {<Sginup /> }/>
            <Route path="/Login" element={   <Login />  } />
            <Route path="/Addblog" element={   <Addblog/>  } />
            <Route path="/Showblogs" element={   <Showblogs/>  } />
         
         </Routes>
        </BrowserRouter>
      
        <h1 style={{marginLeft:1100,fontSize:100}} >مجلة طرابلس</h1>
        <h1 style= {{marginLeft:300,marginInline:50  }}>مجلة الحاضر والمستقبل </h1>
       </div>
    </>
  );
}

export default App;