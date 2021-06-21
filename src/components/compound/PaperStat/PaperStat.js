import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({

    paper: {
        width: "300px",
        height: "300px",
        padding: "1rem",
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        background: props => props.bgColor ? props.bgColor : "inherit",
        color: props => props.color ? props.color : "inherit"
    }
}));
const PaperState = ({data, bgColor, color}) => {
    
    const classes = useStyles({bgColor, color});

    const {title, value} = data;

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="h3">
                {value}
            </Typography>
            
        </Paper>
    )
}
PaperState.propTypes = {
    data: PropTypes.object,
    bgColor: PropTypes.string,
    color: PropTypes.string
};
export default PaperState;
