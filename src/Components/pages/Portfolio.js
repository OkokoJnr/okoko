import React, { Profiler } from "react";

// Portfolio section component
function PortfolioList() {
  const [portfolioList, updatePortfolioList] = React.useState(null)

  // React.useEffect(()=>{
  //   fetch(`https://api.github.com/users/${process.env.USERNAME}/repos?ref=codesnippet.io`)
  //   .then(res=> res.json())
  //   .then(data=>updatePortfolioList(data))
  // },[])

  if(!portfolioList){
    return (<>
      <h1 className="text-center section-heading">Portfolio</h1>
    </>)
  }
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

 