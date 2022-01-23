import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Parser from "react-html-parser"
import { GlobalContext } from "../../Context/Context";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList({ blogData, array }) {
    const classes = useStyles();
    const { blogsToShow, setBlogsToShow, setProductBlog, productBlog } = useContext(GlobalContext);

    const sendData = (index, item) => {
        setBlogsToShow(index);
        setProductBlog(item);
    }

    return (
        <List className={classes.root}>
            {
                blogData?.map((item, index) => {
                    return <ListItem onClick={() => sendData(index, item)} key={index} alignItems="flex-start">
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={blogsToShow === index ? true : false}
                                tabIndex={-1}
                                disableRipple
                            />
                            {console.log(index)}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.title.rendered}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                    </Typography>
                                    {Parser(item.excerpt.rendered)}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                })
            }
        </List>
    );
}