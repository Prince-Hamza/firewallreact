import React from 'react'
import { Grid } from '@material-ui/core'
import Info from './Begar.json'
import { IoMdPerson } from 'react-icons/io'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
// import { AiFillMessage } from 'react-icons/AiFill'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { IoBasket } from 'react-icons/io5'
import { BsClockHistory } from 'react-icons/bs'

var Icons = [
    <IoMdPerson />,
    <FaGlobeAmericas />,
    <FaEnvelope />,
    <BsTelephoneFill />,
    <IoChatbubbleEllipsesSharp />,
    <IoBasket />,
    <BsClockHistory />
]

class Begar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Grid direction={"column"} style={Styles.container}>

                <br />
                <br />
                <br />


                <div style={{ ...Styles.center, ...Styles.column, width: '100%' }}>
                    <h3> {Info.Heading}  </h3>
                    <div style={{ ...Styles.redLine, width: '10%' }} >         </div>
                </div>

                <br />
                <br />
                <Grid container direction={'column'} style={Styles.Form} >
                    <br />
                    <br />

                    <h3>  {Info.FormHeading}     </h3>
                    <div style={{ ...Styles.redLine, width: '30%' }} >         </div>

                    <br />

                    <div style={Styles.paraContainer} >
                        <p style={Styles.para} > {Info.FormPara} </p>
                    </div>

                    <br />


                    {Info.FormRows.map((row, rowIndex) => {
                        return (
                            <Grid container item direction={'row'} style={{ ...Styles.center, ...Styles.row, width: '100%', marginBottom: '2%' }} >
                                {row.items.map((item, itemIndex) => {
                                    return (
                                        <Grid item direction={'row'} style={{ width: row.type !== "Textbox" ? '50%' : '100%' }}  >

                                            <Grid item direction={"row"} style={{ ...Styles.InputsContainer, alignItems: rowIndex == 4 ? 'flex-start' : 'center' }} >
                                                <div style={{ ...Styles.IconContainer, marginLeft: row.type !== "Textbox" ? '3%' : '1.3%' }} >
                                                    {Icons[item.icon]}
                                                </div>
                                                <div>
                                                    {row.type !== "Textbox" && <input style={{ height: row.height, width: '90%', border: 'none', marginLeft: '5%' }} type="text" placeholder={item.name} />}
                                                    {row.type == "Textbox" && <input style={{ height: row.height, width: '90%', border: 'none', marginLeft: '3%' }} type="text" placeholder={item.name} />}
                                                </div>

                                            </Grid>


                                        </Grid>
                                    )
                                })}


                            </Grid>

                        )
                    })}


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <button style={Styles.SubmitButton} >
                        SICKA IN NU
                    </button>

                    <br />
                    <br />
                    <br />
                    <br />

                </Grid>
                <br />
                <br />
                <br />
                <br />
            </Grid >

        )
    }
}

export default Begar


const Styles = ({
    container: {
        width: '100%',
        height: 'auto',
        // border: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    center: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    IconContainer: {
        marginLeft: '3%',
    },
    Form: {
        width: '86%',
        height: 'auto',
        marginLeft: '5vh',
        marginTop: '5vh',
        marginRight: '15vh',

        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1.5px lightgray',
        marginLeft: '8%'
    },
    InputsContainer: {
        width: '100%',
        height: '100%',
        border: 'solid 0.1px lightgray',
        font: '14px poppins',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    paraContainer: {
        width: '80%',
    },
    para: {
        font: '14px poppins',
        color: 'gray'
    },
    SubmitButton: {
        width: '90%',
        height: '50px',
        backgroundColor: '#DD0004',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        font: 'bold 16px times new roman',
        color: 'white'
    },
    redLine: {
        height: '0.5%',
        border: 'solid 2px #DD0004'
    }
})