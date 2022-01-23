import React from 'react'
import Logo from "../img/logo.jpeg";
import './style.css'
const AboutUs = () => {
    return <div style={{ width: '85%', textAlign: 'center', margin: 'auto', paddingTop: '5%' }}>

        <div class="d-flex  new1 justify-content-center text-white w-100"  >

            <div class="lg sec1 p-5  bg-dark w-50" >
                <h4>Syn:</h4>
                <p  class="text-section p-5"  style={{fontSize:'14px', fontFamily:'Poppins'}}>

                    Vår vision är att vara den erkända ledande<br /> nätverks
                    -och cybersäkerhetsleverantören och tjänsteleverantören
                    i Sverige och resten av EU,
                    oavsett bransch.
                    Vårt mål är att tillhandahålla klientinspirerade lösningar och göra ditt nätverk
                    till ett perfekt exempel genom att följa branschstandarder och använda den
                    senaste tekniken och produkterna.
                </p>
            </div>

            <div class="row cns1 d-flex align-items-center justify-content-center  " >
                <img class=" row d-flex justify-content-center justify-text-center  "
                    style={{ height: '6rem', width: '7rem', position: 'absolute', borderRadius: '50%' }} src={Logo} alt="" />
            </div>


            <div class="lg sec2 p-5  bg-danger w-50" >
                <h4>   Uppdrag:  </h4>
                <p class="text-section p-5"  style={{fontSize:'14px', fontFamily:'Poppins'}}>

                    Vi har ett tydligt uppdrag för vår verksamhet, <br />
                    baserat på kundtillfredsställelse,teknisk,
                    operativ och supporteffektivitet som gör det enkelt och möjligt att förvärva IT-produkter.
                    Vi är här för att bygga långsiktiga relationer med våra kunder,
                    för att tillhandahålla exceptionella tjänster som är lättillgängliga.
                </p>
            </div>


        </div>

        <br />
        <br />

        <div class="d-flex new1 justify-content-center text-white w-100"  >

            <div class="lg sec3 p-5  bg-dark w-50" >
            <h4>Allianser:</h4>
                <p class="text-section p-5"  style={{fontSize:'14px', fontFamily:'Poppins'}}>
                Vi är i affärer med branschens mest betrodda <br />leverantörer och
                    levererar pålitligt sina produkter och lösningar med stora rabatter och lätthet.
                    Vår förmåga att leverera Operational Excellence innebär att vi alltid är  redo och kan hjälpa
                    våra kunder att hantera alla  utmaningar de möter.Vi lägger också stor vikt vid att förstå och möta
                    våra kunders behov och prioriteringar.

                  
                </p>
            </div>

            <div class="row cns1 d-flex align-items-center justify-content-center  " >
                <img class=" row d-flex justify-content-center justify-text-center  "
                    style={{ height: '6rem', width: '7rem', position: 'absolute', borderRadius: '50%' }} src={Logo} alt="" />
            </div>


            <div class="lg sec4 p-5  bg-danger w-50" >
            <h4>   Affärsmodell:  </h4>
                <p class="text-section p-5" style={{fontSize:'14px', fontFamily:'Poppins'}}>
                Vår affärsmodell tillhandahåller olika tjänster inom nätverksdomän.<br /> Från IT-sourcing,
                    inköp av hårdvara för att stödja dess konfiguration och implementering,
                    hjälper vårt team och kvalificerade ingenjörer dig att uppfylla dina krav och arbetsomfång.

                    Våra lösningar är högt utvecklade och skalbara för att möta dina nätverksbehov utan att störa din budget.
                    Från planering till att genomföra projektet, vi bedömer, designar, säljer och distribuerar nätverkslösningar.
      
                </p>
            </div>


        </div>
        <br/>
        <br/>

    </div>
}

export default AboutUs