import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Center({ children, spacing, direction, wrap }) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
    justifyContent: "center",
    alignContent: "center"
  };
  return <div style={style}>{children}</div>;
}

Center.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool
};

Center.defaultProps = {
  spacing: 2,
  direction: "row",
  wrap: "false"
};

export default Center;
