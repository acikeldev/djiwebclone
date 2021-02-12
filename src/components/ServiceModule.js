import React from "react";
import "./ServiceModule.css";
function ServiceModule() {
  return (
    <div className="service-module">
      <div className="service-content">
        <div className="service">
          <img
            src="https://www1.djicdn.com/cms/uploads/94964ecb1bc4c100c42c93a814bd4733.svg"
            alt=""
          />
          <h1>Where to buy</h1>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
        <div className="service">
          <img
            src="https://www1.djicdn.com/cms/uploads/60ff58dae8a3fffc6a6e292ce587ca46.svg"
            alt=""
          />
          <h1>Support</h1>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
        <div className="service">
          <img
            src="https://www1.djicdn.com/cms/uploads/e5878a0a23f0c8b05878dac1e0293dfd.svg"
            alt=""
          />
          <h1>Fly Safe</h1>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceModule;
