import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './contact.css'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

const Forms = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Message, setMessage] = useState('');

  const sendFormData = async () => {
    let res = {
      fistname: FirstName,
      lastname: LastName,
      email: Email,
      phone: Phone,
      message: Message
    }
    console.log(res)
    await axios.post(`https://firewallforce.se/wp-json/wc/v3/postform?`, res)
      .then(function (response) {

        // handle success
        console.log(JSON.stringify(response.data));
        if (response.data) {

          alert("Submitted your request!")
        }

      })
      .catch(function (error) {

        console.log("error.message", error.message);
      })

  }

  return <div style={{ width: '85%', height: 'auto', margin: 'auto' }}>
    <section className="text-center bygga-parent equip-parent py-5">
      <span className="back-border bygga-text-heading fs-4 fw-bold text-capitalize" style={{ color: '#575757' }}>
        Kontakta Oss
      </span>
      <br />
      <br />

      <span>
        Kom igång idag och släpp loss ditt nätverk. Vi vet att du behöver ditt nätverk för att vara sömlöst, pålitligt, säkert och skalbart för framtida framsteg
      </span>

    </section>


    <Grid container style={{ width: '100%', height: '100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} >

        <div 
        style={{ width: '100%', height: '120%' }}
          class="md lg d-flex flex-row bd-highlight justify-content-evently">
          <div
            style={{ backgroundColor: '#cad3e0', width: '100%', height: '100%' }}
            class="formpage p-5 bd-highlight d-flex justify-content-center" >

            <Grid item xs={12} sm={12} md={12} lg={9} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <form style={{ width: '115%', height: '100%' }} className="form shadow">
                <input onChange={(e) => setFirstName(e.target.value)} class="input rounded-pill" placeholder=" Fornamn" />


                <input onChange={(e) => setLastName(e.target.value)} class="input rounded-pill" placeholder=" Efternamn" />
                <br /> <br />

                <input onChange={(e) => setEmail(e.target.value)} class="input rounded-pill " placeholder=" Skriv in din e-postaddress" />


                <input onChange={(e) => setPhone(e.target.value)} class="input rounded-pill" placeholder=" Telefonnummer" />


                <div class="form-group form bd-highlight d-flex justify-content-center m-auto">

                  <textarea onChange={(e) => setMessage(e.target.value)} class="form-control" style={{ borderColor: '#D32229', color: '#D32229', marginTop: '3%', borderRadius: '10px', padding: '5px', width: '90%' }} placeholder="  Hur can vi hjalpa dig?" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <br />
                <Button onClick={sendFormData} style={{ marginTop: '1%', backgroundColor: '#D32229', width: '100px' }} >Send</Button>
              </form>
            </Grid >

          </div>
          {/* <div className="usb"  >
      </div>
       */}



        </div>



      </Grid>
    </Grid>

    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
  </div >
}

export default Forms;