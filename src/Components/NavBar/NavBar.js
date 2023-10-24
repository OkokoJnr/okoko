import { useEffect } from "react";

// Navigation component
function Navigation() {

 useEffect(()=>{
 const handleScroll = ()=>{
  const header = document.getElementById('navbar')
  if(header){
    var top = window.scrollY;
    if(top>=100){
      header.classList.add('navbarDark');
    }else{
      header.classList.remove('navbarDark');
    }
  }
 }
 //Adds scroll event listener when component mount 
  window.addEventListener('scroll', handleScroll)
  //Remove event listener when component unmounts
  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }

 }
 ,[]
 
 )
  
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll" id="navbar">
      <div className="container">
        <a href="#" className="navbar-brand nav-link">&lt;Okoko/&gt;</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation