import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then( result=>{
            const loggedUser =result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });

        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center py-5">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-blue-600">
          <FaGoogle></FaGoogle></button>
      </div>
    </div>
  );
};

export default SocialLogin;
