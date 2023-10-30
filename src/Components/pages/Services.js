import {services} from "../../utils/data";
// Services section component
function ServicesList() {

    return (
      <section id="services">
        <div className="container">
          <h1 className="text-center section-heading">Services</h1>
          <div className="row">
                {
                    services.map((service)=>{
                        return <Service name={service.name} description={service.description}></Service>
                    })
                }
            </div>
        </div>
    </section>
    );
  }



function Service({name, description}){
    console.log('object')
return (
    <>
        <div className="col-lg-4 mt-4">
            <div className="card servicesText">
                <div className="card-body">
                    <i className={`fas servicesIcon`} ></i>
                    <h4 className="card-title mt-3">{name}</h4>
                    <p className="card-text mt-3">
                                {description}
                    </p>
                </div>
            </div>  
        </div>
    </>
)
}
  export default  ServicesList