import Navbar from "../components/Navbar";
function Project() {
  const skillList = localStorage.getItem("skill");
  return (
    <>
    <Navbar/>
    <h1>{skillList}</h1>
    </>
    
  )
  
}

export default Project;
