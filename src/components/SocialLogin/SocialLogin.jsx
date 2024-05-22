import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const handleGoogleLogIn = () => {
    signInWithGoogle().then((result) => console.log(result.user));
  };
  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={handleGoogleLogIn} className="btn">
          <FaGoogle></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
