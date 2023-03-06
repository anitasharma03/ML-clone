import React, { useState, useEffect } from "react";
import "./form.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../redux/slices/formSlice";

function FormComponent() {
  const formDetails = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  console.log("form details are - ", formDetails);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch('https://demo5216204.mockable.io/formdata',{
    //   method: 'POST',
    //   body: JSON.stringify(inputs)
    // })
    axios
      .post(
        "https://demo5216204.mockable.io/formdata",
        JSON.stringify(formDetails, null, 2)
      )
      .then(() => {
        console.log("Data submitted successfully");
      });
  };

  return (
    <div className="Main-elementor-container">
      <div className="col-lg-4 col-md-12 col-sm-12 pb-3 col-xs-12 help-element-widget-container">
        <h2 className="help-heading-title">Need Help With</h2>
        <p className="help-element-content">
          Designing an experience? <br />
          Building a product? <br />
          Scaling technology? <br />
          Need to grow your digital business?
        </p>
        <p className="help-element-contact-content">
          <a href="mailto:contact@mobilelive.ca">contact@mobilelive.ca</a>
        </p>
        <p className="help-element-contact-content">
          <a href="tel:+16474995585">+1 (647) 499-5585</a>
        </p>
      </div>

      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 form-element-container" id="letsConnect">
        <form onSubmit={handleSubmit}>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label className="form-label">
              First Name<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="firstName"
                value={formDetails && formDetails.firstName || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({name: event.target.name, value: event.target.value})
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Last Name<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="lastName"
                value={formDetails.lastName || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Job Title<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="jobTitle"
                value={formDetails.jobTitle || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Department<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="department"
                value={formDetails.department || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Business Email<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="businessEmail"
                value={formDetails.businessEmail || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Business Name<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="businessName"
                value={formDetails.businessName || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              Industry<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="industry"
                value={formDetails.industry || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12">
            <label className="form-label">
              How did you hear about us?<span>*</span>
            </label>
            <div>
              <input
                className="form-text-field"
                type="text"
                name="hearingSource"
                value={formDetails.hearingSource || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              />
            </div>
          </div>
          <div className="form-element-holder col-lg-6 col-md-6 col-sm-12 w-100">
            <label className="form-label">
              Your Message<span>*</span>
            </label>
            <div>
              <textarea
                className="form-textarea"
                name="messageContent"
                value={formDetails.messageContent || ""}
                onChange={(event) =>
                  dispatch(
                    setFormData({
                      value: event.target.value,
                      name: event.target.name,
                    })
                  )
                }
                required
              ></textarea>
            </div>
          </div>
          <div className="checkbox-holder">
            <input
              type="checkbox"
              name="newsLetter"
              id="form-checkbox"
              onChange={(event) =>
                dispatch(
                  setFormData({
                    value: event.target.value,
                    name: event.target.name,
                  })
                )
              }
              required
            />
            <label className="form-message">
              Yes, I would like to receive the latest content from your website.
            </label>
          </div>
          <button className="form-button" type="submit">
            <span>Submit</span>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
