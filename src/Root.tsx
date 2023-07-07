import { useNavigate } from "react-router-dom";
import "./Root.css";

function Root() {
  const navigate = useNavigate();
  const goToAbout = () => navigate("/about");

  return (
    <>
      <h1>root</h1>
      <button onClick={goToAbout}>about</button>
    </>
  );
}

export default Root;
