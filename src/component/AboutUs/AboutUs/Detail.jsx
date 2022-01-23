import React from 'react';
import "./style.css";
import MapItems from "./MapItems";

const Detail = () => {
    const array = [1, 2, 3];
    const data=[{
        des:`Firewall Force är en professionell nätverkslösningsintegrator och B2B IT-nätverksproduktleverantör
         baserad i Stockholm, Sverige. Vi är inriktade mot digital affärstransformation och systemintegration 
         där vi tillhandahåller olika företags- och industriella IT-lösningar specifikt inom företagsnätverk 
        inklusive trådlöst, nätverkssäkerhet, brandväggar, samarbete och datacenterdomän.`,
        title:'Vilka är vi?'
            },
        {
        des:`Vårt team består av den finaste nätverkskonsulter och ingenjörer runt om
         i Sverige som har branschens mest avancerade certifieringar och erfarenheter som
          till exempel inom Cisco-servicearkitekturdesigner, Fortinet NSE-8, CCIE & CCDE-certifierade.
           Vi täcker olika områden som LAN/WAN, trådlöst och säkerhet där
         vi tillhandahåller teknisk konsultation i både arbete före och efter försäljning.`,
         title:'Tekniskt Team'
        },
        {
        des:`Vår ovärderliga upplevelse ger alla våra kunder en servicenivå och
         oöverträffat förtroende i branschen. Vi har de färdigheter, 
        erfarenheter och engagemang som krävs för att vara din favoritpartner, tjänsteleverantör och leverantör.`,
        title:'Våra kunder inkluderar:'
        }]
    return <>
        <section className="container bg-dark section-main-items-resources px-5 pt-1 pb-5">
            {
                data.map((item, index) => {
                    return <MapItems key={index} item={item} index={index} />
                })
            }

        </section>
    </>
}

export default Detail;