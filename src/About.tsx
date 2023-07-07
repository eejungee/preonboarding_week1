import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const goToMain = () => navigate("/");

  return (
    <>
      <h1>about</h1>
      <button onClick={goToMain}>go main</button>
    </>
  );
}

export default About;
