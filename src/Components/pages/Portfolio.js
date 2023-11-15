import React, { Profiler } from "react";

// Portfolio section component
function PortfolioList() {
  const [portfolioList, updatePortfolioList] = React.useState(null)

  //

  // async function fetchVercelDeployments() {
  //   const response = await fetch('https://api.vercel.com/v12/now/deployments', {
  //     headers: {
  //       Authorization: `Bearer 9R8E3OADNzGh1pxsOAiWXFcl`,
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data)
  //   return data.deployments;
  // }

  async function result(){
   const response =  await fetch(   'https://api.vercel.com/v6/deployments',
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${'9R8E3OADNzGh1pxsOAiWXFcl'}`,
        }
    }
);
const data = await response.json()
const latestDeploymentsMap = new Map();

  // Iterate through each deployment and update the latest deployment in the Map
  data.deployments.forEach((deployment) => {
    const projectName = deployment.name;

    // If the project is not in the Map or the current deployment is newer, update the Map
    if (!latestDeploymentsMap.has(projectName) || deployment.created > latestDeploymentsMap.get(projectName).created) {
      latestDeploymentsMap.set(projectName, deployment);
    }
  });

  // Convert the Map values (latest deployments) back to an array
  const latestDeployments = Array.from(latestDeploymentsMap.values());
  updatePortfolioList(latestDeployments) ;
  } 

  
  React.useEffect(()=>{
    result()
  // //  fetch(`https://github.com/OkokoJnr`)
  //   .then(res=> res.json())
  //   .then((data)=>{
  //     updatePortfolioList(data)
  //   })
  },[])
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

console.log(portfolio.url)
    return(
      <>
        <div className="col-lg-4 mt-4">
                    <div className="card">
                        <div className="card-body background-image-container">
                            <h4 className="card-title">{portfolio.name}</h4>
                            <p className="card-text">{portfolio.description}</p>
                            <div className="text-center link-button">
                                <a href={`https://${portfolio.url}`} target='_blank' className="btn btn-success link-button">Link</a>
                            </div>
                        </div>
                    </div>
                </div>  
      </>
    )
  }
  export default PortfolioList;

 