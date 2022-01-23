import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './contact.css'
import axios from 'axios'

const Forms = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Message, setMessage] = useState('');

  const sendFormData = async () => {
    let res={
      fistname:FirstName,
      lastname:LastName,
      email:Email,
      phone:Phone,
      message:Message
    }
    console.log(res)
    await axios.post(`https://firewallforce.se/wp-json/wc/v3/postform?`, res)
    .then(function (response) {
    
      // handle success
      console.log(JSON.stringify(response.data));
      if(response.data){
     
        alert("Submitted your request!")
      }
 
    })
    .catch(function (error) {
    
      console.log("error.message",error.message);
    })
   
  }

  return <div style={{ width: '85%', height: 'auto', margin: 'auto' }}>
    <section className="text-center bygga-parent equip-parent py-5">
      <span  className="back-border bygga-text-heading fs-4 fw-bold text-capitalize" style={{color:'#575757'}}>
        Kontakta Oss
      </span>
    </section>

    <div class="md lg d-flex flex-row bd-highlight justify-content-evently">
      <div class="formpage p-5 bd-highlight d-flex justify-content-center" >

        <form className="form shadow">
          <input onChange={(e) => setFirstName(e.target.value)} class="input rounded-pill" placeholder=" First Name" />


          <input onChange={(e) => setLastName(e.target.value)} class="input rounded-pill" placeholder=" Last Name" />
          <br /> <br />

          <input onChange={(e) => setEmail(e.target.value)} class="input rounded-pill " placeholder=" E-mail Address" />


          <input onChange={(e) => setPhone(e.target.value)} class="input rounded-pill" placeholder=" Phone Number" />


          <div class="form-group form bd-highlight d-flex justify-content-center m-auto">

            <textarea onChange={(e) => setMessage(e.target.value)} class="form-control" style={{ borderColor: '#D32229', color:'#D32229', marginTop: '3%', borderRadius: '10px', padding:'5px', width:'90%' }} placeholder="  How can we help you?" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <br />
          <Button onClick={sendFormData} style={{ marginTop: '1%', backgroundColor:'#D32229', width:'100px' }} >Send</Button>
        </form>

      </div>
      <div className="usb"  >
      </div>
    </div>
   
  </div>
}

export default Forms;