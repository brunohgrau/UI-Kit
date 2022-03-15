import React from "react";
import "./radio.css";

function Radio2(props) {
  return (
    <>
      <div class="custom-radio">
        <input id="radio-1" name="question" value="1" type="radio" />
        <label for="radio-1">Sim</label>
      </div>

      <div class="custom-radio">
        <input id="radio-2" name="question" value="0" type="radio" />
        <label for="radio-2">Não</label>
      </div>
    </>
  );
}

export default Radio2;
