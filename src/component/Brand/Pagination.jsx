import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: "flex",
        justifyContent: "center"
    },
}));

export default function BasicPagination(props) {

    const classes = useStyles()

    const handleChange = (event, value) => {
        // alert(`update Page : ${value}`)
        props.updatePage(value , props.brand)
    }

    return (
        <div className={classes.root}>
            <Pagination count={Math.ceil(100000 / 50)} color="secondary" onChange={handleChange} />
        </div>
    );
}