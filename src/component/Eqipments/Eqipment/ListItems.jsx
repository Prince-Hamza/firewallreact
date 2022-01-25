import React, { useContext, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { GlobalContext } from "../../Context/Context";
import QueryString from "query-string";

export default function CheckboxList({ categoryList, Brands, sendBrands }) {
    const { brandSearch, handleToggle, array } = useContext(GlobalContext);
    const category = window.location.href.split(`/`)[4].split('-').join(' ')

    const filterBrand = Brands && Brands.filter(item => {
        return item.Brand.toLowerCase().includes(brandSearch.toLowerCase());
    })

    return (
        <List className="listScroll">
            {
                filterBrand ? filterBrand.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return <>
                        {value[0] !== "undefined" &&
                            <ListItem key={value} role={undefined} dense button onClick={() => {
                                let { category } = QueryString.parse(window.location.search);
                                handleToggle(value.Id, category, value.Brand);
                            }}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={array === value.Id ? true : false}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        onChange={() => { sendBrands(category, value.Brand, 1) }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={value.Id} primary={value.Brand} />
                                <ListItemSecondaryAction>
                                    <span >{value.Count}</span>
                                </ListItemSecondaryAction>
                            </ListItem>
                        }
                    </>
                }) :
                    categoryList?.map((item, value) => {
                        return <ListItem key={value} role={undefined} dense button onClick={handleToggle(value[0])}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={array === value.Id ? true : false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <span >{value[1]}</span>
                            </ListItemSecondaryAction>
                        </ListItem>
                    })
            }
        </List>
    );
}