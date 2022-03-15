import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

function Image6(props) {
  return (
    <>
      <div class="bg-gradient-to-tr from-blue-500 to-green-400 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
        <img
          class="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1552318317-ee6689754024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
      </div>
    </>
  );
}

export default Image6;
