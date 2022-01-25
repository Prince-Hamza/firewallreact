import React, { useContext, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { GlobalContext } from "../../Context/Context";
import QueryString from "query-string";
import { useEffect } from 'react';

// export default function CheckboxList({ categoryList, Brands, sendBrands }) {
//     // const { brandSearch, handleToggle, array } = useContext([]);
//     const [brandSearch, setBrandSearch] = useState([])
//     const [selectedBrands, setSelectedBrands] = useState([])
//     const [selectedBrands, setSelectedBrands] = useState([])

//     var filterBrand = [], once = true

//     filterBrand = Brands && Brands.filter(item => {
//         return item.Brand
//     })

//     return (
//         <List className="listScroll">
//             {
//                 filterBrand ? filterBrand.map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     return <div key={Math.random()}>
//                         {value[0] !== "undefined" &&
//                             <ListItem key={value} role={undefined} dense button onClick={() => {
//                                 let { category } = QueryString.parse(window.location.search);
//                                 // handleToggle(value.Id, category, value.Brand);
//                             }}>
//                                 <ListItemIcon>
//                                     <Checkbox
//                                         edge="start"
//                                         checked={selectedBrands.includes(value) ? true : false}
//                                         tabIndex={-1}
//                                         disableRipple
//                                         inputProps={{ 'aria-labelledby': labelId }}
//                                         onChange={() => {
//                                             alert(value.Brand)
//                                             setSelectedBrands(selectedBrands.push(value.Brand))
//                                             alert(selectedBrands)                                            // alert(sendBrands)
//                                             //sendBrands(selectedBrands)
//                                         }}
//                                     />
//                                 </ListItemIcon>
//                                 <ListItemText id={value.Id} primary={value.Brand} />
//                                 <ListItemSecondaryAction>
//                                     <span >{value.Count}</span>
//                                 </ListItemSecondaryAction>
//                             </ListItem>
//                         }
//                     </div>
//                 }) :
//                     categoryList?.map((item, value) => {
//                         return <ListItem key={value} role={undefined} dense button /*onClick={handleToggle(value[0])}*/ >
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={value.Id ? true : false}
//                                     tabIndex={-1}
//                                     disableRipple
//                                 />
//                             </ListItemIcon>
//                             <ListItemText primary={item.name} />
//                             <ListItemSecondaryAction>
//                                 <span >{value[1]}</span>
//                             </ListItemSecondaryAction>
//                         </ListItem>
//                     })
//             }
//         </List>
//     );
// }


export default class BrandListItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chosenBrands: [],
            chosenCategories: []
        }
    }


    setChecked = (value) => {
        let found = false
        // alert(`${this.state.chosenBrands} includes :: ${JSON.stringify(value)} ?`)
        this.state.chosenBrands.forEach((item) => {
            // alert(`${item}  ==  ${value.name}`)
            if (item == value.name) found = true
        })
        // alert(found)
        return found
    }

    setCatChecked = (value) => {
        let found = false
        // alert(`${this.state.chosenBrands} includes :: ${JSON.stringify(value)} ?`)
        this.state.chosenBrands.forEach((item) => {

            // alert(`${item.name} ==  ${value.name}`)
            if (item.name == value.name) found = true
        })
        // alert(found)
        return found
    }

    render() {

        if (this.props.switch == 'Brands') {
            // alert(JSON.stringify(this.props.Brands))
            return (
                <section>
                    <List style={{maxHeight:'24rem' }} className="listScroll">

                        {this.props.Brands && this.state.chosenBrands && this.props.Brands.map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <div style={{width:'99%'}} key={Math.random()}>
                                    {value[0] !== "undefined" &&
                                    
                                        <ListItem style={{width:'200px'}} key={value} role={undefined} dense button onClick={() => {
                                            // let { category } = QueryString.parse(window.location.search);
                                            // handleToggle(value.Id, category, value.Brand);
                                        }}>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={this.setChecked(value)}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                    onChange={() => {
                                                        // alert(JSON.stringify(value))
                                                        this.state.chosenBrands = []
                                                        this.state.chosenBrands.push(value.name)
                                                        this.setState({ chosenBrands: this.state.chosenBrands })
                                                        // alert(this.state.chosenBrands)
                                                         this.props.sendBrands(value.name)
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={value.id} primary={value.name} />
                                            <ListItemSecondaryAction>
                                                <span >{value.count}</span>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    }
                                </div>
                            )
                        })}
                    </List>

                </section>
            )
        } else {

            return (
                <section>
                    <List className="listScroll">
                        {this.props.categoryList &&
                            this.props.categoryList.map((value) => {
                                const labelId = `checkbox-list-label-${value}`;
                                return (
                                    <div key={Math.random()}>
                                        {value[0] !== "undefined" &&
                                            <ListItem key={value} role={undefined} dense button onClick={() => {
                                                // let { category } = QueryString.parse(window.location.search);
                                                // handleToggle(value.Id, category, value.Brand);
                                            }}>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={this.setCatChecked(value)}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                        onChange={() => {
                                                            this.state.chosenCategories.push(value)
                                                            this.setState({ chosenCategories: this.state.chosenCategories })
                                                            this.props.checkedCategories(this.state.chosenCategories)


                                                            // this.state.chosenBrands.push(value)
                                                            // this.setState({ chosenBrands: this.state.chosenBrands })
                                                            // this.props.sendBrands(this.state.chosenBrands)
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={value.name} primary={value.name} />
                                                <ListItemSecondaryAction>
                                                    {/* <span >{value.Count}</span> */}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        }
                                    </div>
                                )
                            })}
                    </List>

                </section>
            )
        }
    }

}