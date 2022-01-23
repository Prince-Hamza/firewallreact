import React from 'react';

const TabDetail = ({ subheadings, heading, detail }) => {

    return (
        <div className="mt-4">
            <h3 style={{fontFamily: 'Poppins', color:'#575757'}}>{heading}</h3>
            <span className="detail-text" style={{fontFamily: 'Poppins',fontSize: '14px', color:'#575757'}}>{detail}</span>
            {
                subheadings?.map((item, index)=>{
                    return(
                        <div className="mt-4" key={index}>
                             <h5 className=" text-danger" style={{fontFamily: 'Poppins',fontSize: '14px', color:'#575757'}}><input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" />{item.subheading}</h5>
            <span className="detail-text " style={{fontFamily: 'Poppins',fontSize: '14px', color:'#575757'}}>{item.para}</span>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default TabDetail;
