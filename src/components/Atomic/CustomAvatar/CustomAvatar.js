import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    papavatarContainer: { 
        padding: "1rem",
        justifyItems:"space-between",
    },
    avatar:{ 
        borderRadius: props => props.rounded ? "50%" : "10%",
        width: props => props.size ? theme.spacing(props.size): theme.spacing(8),
        height: props => props.size ? theme.spacing(props.size): theme.spacing(8),
    }
}));

const CustomAvatar = ({src, rounded, size}) => {
    const classes = useStyles({rounded, size});
    return (
        <div className={classes.avatarContainer}>
            <img src={src} alt="Profile Image" className={classes.avatar} />
        </div>
    )
};

CustomAvatar.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.number
};

export default CustomAvatar;
