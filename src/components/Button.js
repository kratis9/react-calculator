import React from "react";
import PropTypes from "prop-types";

function Button({ content, onButtonClick, type }) {
    return (
        <div
            className={`btn ${content === "0" ? "zero" : ""} ${type || ""}`}
            onClick={() => onButtonClick(content)}
        >
            {content}
        </div>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Button;
