import React from 'react'
import { certifications } from '../../utils/data'






// Services section component

function CertificationsList() {


    return (
      <section id="certifications">
        <div className="container mt-4">
          <h1 className="text-center section-heading">Certifications</h1>
          <div className="row">
                {
                    React.Children.toArray(certifications.map((certificate)=>{
                        return <CertificationsItem certificate={certificate}></CertificationsItem>
                    }))
                }
            </div>
        </div>
    </section>
    );
  }



function CertificationsItem({certificate}){
return (
    <>
        <div className="col-lg-4 mt-4">
            <div className="card servicesText">
                <div className="card-body">
                    <i className={`fas servicesIcon`} ></i>
                    <h5 className="card-title">{certificate.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ID:{certificate.ID}</h6>
                    <p className="card-text">{certificate.description}</p>
                    <a href={certificate.url} target="_blank" className="card-link">Show Credential</a>
                </div>
            </div>  
        </div>
    </>
)
}

<div className="card-body">

{/* <a href="#" className="card-link">Another link</a> */}
</div>
export default CertificationsList
