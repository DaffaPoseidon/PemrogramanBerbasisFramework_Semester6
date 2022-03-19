// // NOMOR 1
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Dashboard from "./Pages/Dashboard";

// export default function BasicExample() {
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Routes>
//           <Route exact path="/" element={<Home />}/>
//           <Route path="/about" element={<About />}/>
//           <Route path="/dashboard" element={<Dashboard />}/>
//         </Routes>
//       </div>
//     </Router>
// 	);
// }

// // NOMOR 2
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";
// import Child from "./Pages/Child";

// export default function ParamsExample(){
//   return(
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/:id" element={<Child />}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // NOMOR 3 
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
// 	Route,
// 	Link,
// } from 'react-router-dom';
// import Home from "./Pages/Home";
// import Topics from "./Pages/Topics/Topics";
// import Kuliner from "./Pages/Topics/Kuliner";
// import ReviewHotel from "./Pages/Topics/ReviewHotel";
// import Travelling from "./Pages/Topics/Travelling";

// export default function NestingExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/topics" element={<Topics/>}>
//             <Route path="kuliner" element={<Kuliner/>}/>
//             <Route path="review-hotel" element={<ReviewHotel/>}/>
//             <Route path="travelling" element={<Travelling/>}/>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// NOMOR 4
import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";

// Pages
import PublicPage from "./Pages/PublicPage";
import ProtectedPage from "./Pages/ProtectedPage";
import LoginPage from "./Pages/LoginPage";

export default function AuthExample(){
  return(
    <Router>
      <div>
        <AuthButton>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
          </ul>
        </AuthButton>
        <Routes>
          <Route path="/public" element={<PublicPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/private" element={<ProtectedPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); //fake async
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useNavigate();
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// Pembungkus untuk <Route> yang mengarahkan ke login
// Tampilkan jika Anda belum terkonfirmasi

function PrivateRoute({ children, ...rest}){
  return(
    <Route
      {... rest}
      render={({location}) => 
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}