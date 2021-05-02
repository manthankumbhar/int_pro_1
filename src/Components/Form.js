import React, { Component } from "react";
import HocCheckbox from "../hoc/HocCheckbox";
import HocForm from "../hoc/HocForm";
import "./Form.css";
import logo from "./logo.png";

class Form extends Component {
  render() {
    return (
      <div className="row col-10 mx-auto">
        <img src={logo} alt="" className="logo col-md-4 col-sm-8 mx-auto" />
        <h1 className="h1-tag col-md-6 col-sm-12 col-xs-12">
          Digitian Hub - Agency Registration
        </h1>
        <p className="col-md-12 p-top">
          We are Asia’s first fully managed marketplace for agencies, providing
          support and services at all fronts from onboarding to client
          interaction.
        </p>
        <form>
          <HocForm title="1. Your Name:" type="text" />
          <HocForm title="2. Name of organization:" type="text" />
          <HocForm title="3. Your role in organization:" type="text" />
          <HocForm title="4. Email address:" type="email" />
          <HocForm title="5. Contact number:" type="number" />
          <label className="col-12">
            6. Which of the following best defines your organization:
            <HocCheckbox title="Digital Marketing Agency" />
            <HocCheckbox title="Creative Agency" />
            <HocCheckbox title="Media Buying Agency" />
            <HocCheckbox title="Print Media Agency" />
            <HocCheckbox title="PR Agency" />
            <HocCheckbox title="HR Consultants" />
            <HocCheckbox title="Other services like CA, Management, Law, Manpower, etc" />
          </label>
          <HocForm
            title="7. Your Address (you may also share the link to business listing):"
            type="text"
          />
          <HocForm title="8. GST Number:" type="text" />
          <HocForm
            title="9. Bank Details (Only share your current account details):"
            type="text"
          />
          <button className="button rounded" onClick={() => {}}>
            Submit
          </button>
        </form>
        <p className="p-foot">
          Never give out your password. <a href="/">Report abuse</a>
        </p>
      </div>
    );
  }
}

export default Form;
