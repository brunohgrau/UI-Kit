import React from "react";
import PropTypes from "prop-types";

function Button({ label, backgroundColor, onClick }) {
  const style = {
    backgroundColor,
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "0.375rem"
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: "Default",
  backgroundColor: "rgb(17 99 235)"
};

export default Button;
