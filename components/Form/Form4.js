import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";

import "./form.css";

// Utils
const SignupInfo = styled.div`
  padding-bottom: 5.5rem;

  @media (min-width: 90rem) {
    flex: 50%;
    margin-right: 0;
    padding-bottom: 0;
  }

  & > form {
    max-width: 27.75rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: white;
    margin: 0 auto;
    box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);

    @media (min-width: 90rem) {
      margin-right: 0;
      padding: 2.5rem;
    }

    .form__group {
      position: relative;
    }

    .custom-select {
      position: relative;
    }
  }
`;

const Form4 = () => {
  return (
    <SignupInfo>
      <form action="/">
        <div>
          <label for="name" class="hidden-visually">
            Enter name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            class="form__control js-form-name"
            placeholder="Name"
            autocomplete="name"
            required
          />
        </div>
        <div>
          <label for="email" class="hidden-visually">
            Enter email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            class="form__control js-form-email"
            placeholder="Email"
            autocomplete="email"
            required
          />
        </div>

        <div>
          <label for="tel" class="hidden-visually">
            Telephone number
          </label>
          <input
            id="tel"
            type="tel"
            name="telNo"
            class="form__control"
            placeholder="Phone number"
            autocomplete="tel"
          />
        </div>
        <div>
          <label for="company" class="hidden-visually">
            Company name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            class="form__control"
            placeholder="Company"
            autocomplte="organization"
          />
        </div>

        <button type="submit" class="btn form__submit">
          Get on the list
        </button>
      </form>
    </SignupInfo>
  );
};

export default Form4;
