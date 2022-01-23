import React from 'react';
import './style.css'
import img from './img/logo.png'
const Map = () => {

  return <div style={{ width: '85%', height: 'auto', margin: 'auto', paddingBottom: '5%' }}>
    <section className="text-center bygga-parent equip-parent py-5">
      <span className="back-border bygga-text-heading fs-4 fw-bold " style={{fontFamily:'Poppins', color:'#575757'}}>
        Har du en fraga? fraga oss.
      </span>
      <p style={{ lineHeight:'25px', width:'50%', margin:'auto', fontFamily:'Poppins', fontSize:'14px'}}>
      Kom igång idag och släpp loss ditt nätverk. Vi vet att du behöver ditt nätverk för att vara sömlöst, pålitligt, säkert och skalbart för framtida framsteg.

      </p>
    </section>

    <div style={{ width: '100%', margin: 'auto', display: 'flex', border: '12px solid #F1F1F1' }}>
      <div class="mapouter" style={{backgroundColor:'#F1F1F1'}}  >

        <div class=" py-1 p-4 " >
          {/* <Form.Group > */}
          <div className="searchs shadow bg-white d-flex align-items-center" >
            <i className="fa fa-map-marker-alt  text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="FirewallForce Nordic AB" aria-label="Search" />

          </div>
          <div className="searchs shadow bg-white d-flex align-items-center " >
            <i className="fa fa-envelope text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="firewallforce@gmail.com" aria-label="Search" />

          </div>
          <div className="searchs shadow bg-white d-flex align-items-center " >
            <i className="fa fa-phone-square-alt text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="+46 (0) 8517 082 92" aria-label="Search" />

          </div>


          <div class="d-flex align-items-center justify-content-center p-2">
            <img class="imgs"
               src={img} alt="" />
            {/* <h4 style={{ fontFamily: 'bold', fontSize: '2rem', color: 'red' }}>FirewallForce</h4> */}
          </div>


          <div style={{ padding: '0%' }}>
            <div className=" d-flex align-items-center justify-content-center">
              <i className="fa  fa-1x text-danger mx-3 fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-1x text-danger mx-3 fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-1x text-danger mx-3 fa-facebook" aria-hidden="true"></i>
            </div>

          </div>
        </div>

      </div>
      <div class="mapouter ">
        <div class="gmap_canvas" style={{border:'8px solid white'}}>
          <iframe title="Map" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Firewall Force Nordic AB&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

          </iframe>
          <a href="https://www.fridaynightfunkin.net/">

            Friday Night Funkin

          </a>
        </div>
      </div>
    </div>
  </div>
}


export default Map;