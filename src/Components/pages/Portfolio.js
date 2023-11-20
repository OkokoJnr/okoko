import React from "react";
import { WordPressProjects } from "../../utils/data";

// Portfolio section component
function PortfolioList() {
  const [portfolioList, updatePortfolioList] = React.useState(null)

  const [error, setError] = React.useState('')

  //fetch list of all projects from vercel api
  async function result(){
try{
  const response =  await fetch(   'https://api.vercel.com/v6/deployments',
  {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_VERCEL_API_KEY}`,
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
updatePortfolioList(latestDeployments) 
}
catch(err){

}
  } 

  
  React.useEffect(()=>{ 
    //obtain list of all projects 
      result()
  },[])

  //
  if(!portfolioList){
    return (<>
      <h1 className="text-center section-heading">Portfolio</h1>
      <h1><em className='text-center'>Loading...</em></h1>
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

 