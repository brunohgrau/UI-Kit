import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;

function Checkbox2(props) {
  return (
    <CheckboxContainer>
      <div class="custom-checkbox">
        <input id="checkbox-1" type="checkbox" />
        <label for="checkbox-1">Checkbox 1</label>
      </div>
    </CheckboxContainer>
  );
}

export default Checkbox2;
