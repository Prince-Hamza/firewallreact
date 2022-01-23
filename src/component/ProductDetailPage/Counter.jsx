import React, { useState } from 'react'
import upArrow from '../../assets/QarrowUp.png'
import downArrow from '../../assets/icons/up.ico'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function Counter(props) {

    const [count, setCount] = useState(1)

    const up = (e) => {
        setCount(count + 1)
        props.onChange(e)
    }

    const down = (e) => {
        setCount(count - 1)
        props.onChange(e)
    }

    return (
        <section style={styles.couterContainer} >
            <div style={styles.halfSection} >
                {count}
            </div>

            <div style={{
                ...styles.halfSection, backgroundColor: 'rgb(90,90,90)', border: 'none', height: '100%', cursor: 'pointer'
            }}>

                <div style={styles.couterArrowContainer} onClick={(e) => { up(e) }} >
                    <BsChevronUp />
                </div>


                <div style={{ ...styles.couterArrowContainer, width: '100%', cursor: 'pointer' }} onClick={(e) => { down(e) }} >
                    <BsChevronDown />

                </div>

            </div>
        </section>
    )
}

const styles = ({
    couterContainer: {
        width: '5%',
        height: '40px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid black 0.1px'
    },
    halfSection: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    couterArrowContainer: {
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }

})