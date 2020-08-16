import React, { Component, cloneElement, createRef } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }
    componentDidMount() {
        if (this.ref?.current) {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside = (e) => {
        const { onClick } = this.props;
        if (onClick && !this.ref.current.contains(e.target)) {
            onClick(e);
        }
    };
    render() {
        const { children } = this.props;
        return <>{cloneElement(children, { ref: this.ref })}</>;
    }
}
ClickOutside.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default ClickOutside;