import React from "react";

// Portfolio section component
function Portfolio() {
    return (
      <section id="portfolio">
        <div className="container mt-3">
          <h1 className="text-center section-heading">Portfolio</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <img className="card-img-top" src="images/portfolioImage1.jpg" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">YouTube Clone</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            <br/>
        </div>
      </section>
    );
  }

  export default Portfolio;

 