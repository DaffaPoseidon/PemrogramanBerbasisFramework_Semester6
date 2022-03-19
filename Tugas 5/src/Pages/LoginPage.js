import React from "react-router-dom";
import{
    useNavigate,
    useLocation
} from "react-router-dom";

function LoginPage(){
    let history = useNavigate();
    let location = useLocation();
  
    let{from} = location.state || {from: {pathname: "/"}};
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return(
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }

export default LoginPage;