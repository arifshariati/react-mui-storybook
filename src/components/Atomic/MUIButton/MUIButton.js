import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const MUIButton = ({
    onClick,
    children,
    ...args
    
}) => {
    return (
        <Button
            onClick={onClick}
            style={{ borderRadius: args.rounded ? "2rem" : null }}
            {...args}
        >
            {children}
        </Button>
    )
};

MUIButton.propTypes = {
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    color: PropTypes.string
};

export default MUIButton;
