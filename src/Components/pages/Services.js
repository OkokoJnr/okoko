// Services section component
function Services() {
    return (
      <section id="services">
        <div className="container">
          <h1 className="text-center section-heading">Services</h1>
          <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className={`fas servicesIcon`} ></i>
                            <h4 className="card-title mt-3">Website Development</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    </section>
     
    );
  }

  export default  Services