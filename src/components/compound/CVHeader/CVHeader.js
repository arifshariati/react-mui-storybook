import React, { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: { 
        padding: "1rem",
        justifyItems:"space-between",
    },
    CVHeader_left:{
        display: "flex",
        alignItems: "center"
    },
    avatarLarge: { 
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight:"1rem"
    }
}));


const CVHeader = (props) => {

    console.log('props =', props);

    const { data, makeDense } = props;

    const classes = useStyles();

    const [dense, setDense] = useState(false);

    useEffect(() =>{
        if(makeDense) setDense(true);
    },[]);

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={4}>
                {/* Avatar and Name */}
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className={classes.CVHeader_left}>
                    <Avatar src={data.image} className={classes.avatarLarge} />
                    <Typography>
                        <pre style={{ fontFamily: "inherit", fontSize:"1.5rem", margin:"0rem" }}>{data.name}</pre>
                        <pre style={{ fontFamily: "inherit", fontSize:"1rem", margin:"0rem" }}>{data.position}</pre>
                    </Typography>
                </Grid>
                {/* Contacts */}
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <List dense={dense}>

                        <ListItem>
                            <ListItemIcon>
                                <CallIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={data.phone}
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={data.email}
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={data.address}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CVHeader;
