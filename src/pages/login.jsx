import LeftSideStart from "../components/leftSideStart.jsx";
import RightSideStart from "../components/rightSideStart.jsx";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-layout">
      <LeftSideStart />
      <RightSideStart />
    </div>
  );
}
