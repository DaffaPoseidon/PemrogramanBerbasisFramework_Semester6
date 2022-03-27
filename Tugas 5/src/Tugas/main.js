import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
  Outlet
} from "react-router-dom";
import style from "./style.css";
import gambar_lightning from "./images/lightning.png";

function Main() {
  return (
    <ProvideAuth>
      <Router>
        <div className="body">
            <header className="header">
              <nav className="navbar">
                <ul className="nav-list">
                    <li>
                      <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                      <Link to="/protected">Protected Page</Link>
                    </li>
                    <li>
                      <AuthButton/>
                    </li>
                </ul>
              </nav>
              <div className="content">
                  <img src={gambar_lightning} alt=""/>
              </div>
              <main className="main">

                  <div className="content-1">
                      <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" className="search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                  </div>
                  <div className="content-2">
                      <h1>Lightning</h1>
                      <div className="sub-content-2">
                          <hr className="line"/>
                          <h4>A Heroine</h4>
                      </div>
                      <p>Seorang protagonis dari Final Fantasy 13, kini telah muncul di majalah model
                          paling bergaya di Paris, menampilkan busana eksklusif yang sempurna dikenakan
                          Lightning!
                      </p>
                      <button className="button-1"><p>SEE COLLECTION</p></button>
                      <LoginPage/>
                  </div>
                  <div className="content-3">
                      <p><i>" Lightning. It flashes bright, then fades away. It can't protect. It can only destroy. "</i></p>
                      <div className="sub-content-3">
                          <hr className="line"/>
                          <h4>Lightning</h4>
                      </div>
                  </div>
              </main>
          </header>
          <Routes>
            <Route path="/public" element={<PublicPage/>}/>
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            <Route element={<PrivateRoute/>}>
              <Route path="/protected" element={<ProtectedPage/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let navigate = useNavigate();
  let auth = useAuth();

  return auth.user ? (
    <span>
      Welcome!{" "}
    </span>
    
  ) : (
    <span>You are not logged in.</span>
  );
}

function PrivateRoute({ children, ...rest}){
  let auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

function PublicPage() {
  return <h3 className="welcome">Public</h3>;
}

function ProtectedPage() {
  return(
    <h3 className="welcome">Protected</h3>
  );
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/protected" } };
  let login = () => {
    auth.signin(() => {
      navigate("/", {replace: true});
    });
  };

  return (
    <div className="login">
      <p className="welcome">You must log in to view the page at {from.pathname}</p>
      {!auth.user ? (<button className="button-2" onClick={login}>Log in</button>) : 
        (<button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        className="button">
          Sign out
        </button>)}
    </div>
  );
}

export default Main;