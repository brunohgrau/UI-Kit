import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  /* box model */
  max-width: 14rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
  background-color: rgb(255 255 255);

  /*   typography */
  font-family: "Montserrat", sans-serif;

  /* misc */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

const SectionHeader = styled.h1`
  /* display */
  display: flex;
  justify-content: center;

  /* box model */
  margin-bottom: 2rem;

  /*   typography */
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const FormWrapper = styled.form`
  /*  sm:grid-cols-2 */

  /* display */
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  /* box model */
  margin-top: 1rem;
`;

const InputLabel = styled.label`
  /* box model */
  margin-top: 1rem;

  font-size: 1rem;
  line-height: 1.75rem;
`;
const InputField = styled.input`
  /* display */
  display: block;
  /* position */
  /* box model */
  width: full;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  background-color: rgb(255 255 255);
  /* typography */
  /* manipulation */
  /* misc */
  border-width: 1px;
  border-color: rgb(229 231 235);
  border-radius: 0.375rem;
`;

const ButtonParent = styled.div`
  /* display */
  display: flex;
  justify-content: center;
`;

const SimpleForm = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader class="text-gray-700 ">Account settings</SectionHeader>
        <FormWrapper>
          <div>
            <InputLabel for="username">Username</InputLabel>
            <InputField
              id="username"
              type="text"
              class=" text-gray-700    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <InputLabel for="username">Email</InputLabel>
            <InputField
              id="username"
              type="text"
              class=" text-gray-700    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <InputLabel for="username">Password</InputLabel>
            <InputField
              id="username"
              type="text"
              class=" text-gray-700    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <InputLabel for="username">Password Confirmation</InputLabel>
            <InputField
              id="username"
              type="text"
              class=" text-gray-700    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <ButtonParent class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </ButtonParent>
        </FormWrapper>
      </SectionWrapper>
    </>
  );
};

export default SimpleForm;
