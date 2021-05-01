import { Component } from "react";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="row col-10 mx-auto"
          style={{ backgroundColor: "white" }}
        >
          <img src={logo} alt="" className="logo col-md-4 col-sm-8 mx-auto" />
          <h1 className="h1-tag col-md-6 col-sm-12 col-xs-12">
            Digitian Hub - Agency Registration
          </h1>
          <p className="col-md-12 p-top">
            We are Asia’s first fully managed marketplace for agencies,
            providing support and services at all fronts from onboarding to
            client interaction.
          </p>
          <form>
            <label className="col-12">
              1. Your name:
              <input type="text" className="input col-12" />
            </label>
            <label className="col-12">
              2. Name of organization:
              <input type="text" className="input col-12" />
            </label>
            <label className="col-12">
              3. Your role in organization:
              <input type="text" className="input col-12" />
            </label>
            <label className="col-12">
              4. Email address:
              <input type="email" className="input col-12" />
            </label>
            <label className="col-12">
              5. Contact number:
              <input type="number" className="input col-12" />
            </label>
            <label className="col-12">
              6. Which of the following best defines your organization:
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>Digital Marketing Agency</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>Creative Agency</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>Media Buying Agency</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>Print Media Agency</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>PR Agency</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>HR Consultants</span>
              </label>
              <label className="col-12">
                <input type="checkbox" className="checkbox" />
                <span>
                  Other services like CA, Management, Law, Manpower, etc
                </span>
              </label>
            </label>
            <label className="col-12">
              7. Your Address (you may also share the link to business listing):
              <input type="text" className="input col-12" />
            </label>
            <label className="col-12">
              8. GST Number:
              <input type="text" className="input col-12" />
            </label>
            <label className="col-12">
              9. Bank Details (Only share your current account details):
              <input type="text" className="input col-12" />
            </label>
            <button className="button">Submit</button>
          </form>
          <p className="p-foot">
            Never give out your password. <a href="/">Report abuse</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
