import LeftSideStart from "../components/LeftSideStart";
import RightSideStart from "../components/RightSideStart";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-layout">
      <LeftSideStart />
      <RightSideStart />
    </div>
  );
}
