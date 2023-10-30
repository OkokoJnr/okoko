import React, { Profiler } from "react";

// Portfolio section component
function PortfolioList() {
  const [portfolioList, updatePortfolioList] = React.useState([])
  const username = 'OkokoJnr'
  React.useEffect(()=>{
    fetch(`https://api.github.com/users/${username}/repos?ref=codesnippet.io`)
    .then(res=> res.json())
    .then(data=>updatePortfolioList(data))
  },[])
    return (
      <section id="portfolio">
        <div className="container mt-5">
          <h1 className="text-center section-heading">Portfolio</h1>
            <div className="row">
                       {
                        portfolioList.map((port)=>{
                          return <Portfolio portfolio={port}/>
                        })
                       }
            </div>
            <br/>
        </div>
      </section>
    );
  }


  function Portfolio({portfolio}){
    React.useEffect(()=>{
      const imageName = 'repoImage.png'
      const Imageurl = `${portfolio.html_url}/blob/main/Images/${imageName}`;
  
  const backgroundElement = document.querySelector('.background-image-container');
  backgroundElement.style.backgroundImage = `url(${Imageurl})`;
  backgroundElement.style.backgroundSize = 'cover'; // Adjust sizing as needed
  backgroundElement.style.backgroundRepeat = 'no-repeat';
  // You can add more styles as needed
    },[])

    return(
      <>
        <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="card-body background-image-container">
                            <h4 className="card-title">{portfolio.name}</h4>
                            <p className="card-text">{portfolio.description}</p>
                            <div className="text-center link-button">
                                <a href={portfolio.html_url} className="btn btn-success link-button">Link</a>
                            </div>
                        </div>
                    </div>
                </div>  
      </>
    )
  }
  export default PortfolioList;

 