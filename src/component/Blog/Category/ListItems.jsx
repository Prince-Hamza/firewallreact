import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Parser from "react-html-parser"
// import { GlobalContext } from "../../Context/Context";
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

    // const { blogsToShow, setBlogsToShow, setProductBlog, productBlog } = useContext(GlobalContext);

    const [blogsToShow, setBlogsToShow] = useState([])
    const sendData = (index, item) => {
        // setBlogsToShow(index);
        // setProductBlog(item);
    }

    const setChecked = (index) => {
        if (blogsToShow && blogsToShow.length) {
            var result = blogsToShow.includes(index) ? true : false
            return result
        }
    }

    const Insert = (item, index) => {
        if (blogsToShow && blogsToShow.length) {
            setBlogsToShow(blogsToShow.push(index))
        }
        if (item) {
            //  alert(item.title.rendered)
            //    history.push(`/blogdetail?name=${item.title.rendered}&feature=1`)
            localStorage.setItem('currentBlog' , JSON.stringify(item))
            window.location.replace(`/blogdetail?name=${item.title.rendered.split(' ').join('-')}`)

        }
    }

    return (
        <List className={classes.root}>
            {
                blogData?.map((item, index) => {
                    return <ListItem onClick={() => sendData(index, item)} key={index} alignItems="flex-start">
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={setChecked(index)}
                                tabIndex={-1}
                                disableRipple
                                onChange={() => { Insert(item, index) }}
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