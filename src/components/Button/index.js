import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { handleClick, text, ...rest } = this.props;
        return (
            <button onClick={handleClick} {...rest}>
{text}
            </button>
        );
    }
}
Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
    text: PropTypes.string,
  };
  
  Button.defaultProps = {
    className: 'btn btn-primary',
  };
export default Button;