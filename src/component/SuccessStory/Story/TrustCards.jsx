import React from "react";
import Carousel from 'react-elastic-carousel';

export default function App() {
    const array = [{
        name:'Ian Neil', title:'Good Company', des:'Fantastiska! Mycket bra kundservice. Leveransen var snabb och priset var också rimligt. Tack', d:'1 maj 2021'}
        ,{name:'Simon Max',title:'Perfekt affär', des:'Vi köpte flera Cisco SFP-moduler. Var och en var originell och ny, inte OEM. De gav 70% rabatt på GPL vilket var bra. Frakten tog en vecka, men det är okej.', d:'30 apr 2021' }
    ,{name:'Stefan Bengtsson', title:'Verkligen hjälpte oss', des:'Inte bara de gjorde en första bedömning av mitt nätverk för att se vad som krävs, men FirewallForce kommer också upp med en arkitektonisk design och implementering som verkligen hjälpte oss i för- och efterförsäljningsarbete.', d:'22 okt. 2020'},
    {name:'Gunilla Källnere', title:'Jag ser FirewallForce som en…', des:'Jag ser FirewallForce som en förlängning av mitt team inte som leverantör. De levererade utrustningen i tid och vi fick det bästa priset och därmed sparade vi mycket. De konfigurerade vår brandvägg före skeppet och det fungerade precis enligt arbetets omfattning.', d:'2 dec. 2020'},
    {name:'Pontus Fredrik', title:'De har allt du behöver för att uppfylla…', des:'De har allt du behöver för att uppfylla dina affärs- och IT-krav. Efter en fantastisk första upplevelse med företaget har de blivit mina pålitliga IT-leverantörer. Stabilitet, anpassningsbar högkvalitativ, kostnadseffektiv, du får valuta för pengarna.', d:'23 nov. 2020'},
    {name:'Goran Sporre', title:'Den övergripande erfarenheten har varit…', des:'Den övergripande erfarenheten har varit mycket trevlig för min organisation. Cisco-routern jag fick var anpassad med säkerhetslicens för att tillgodose kraven i vårt nätverk och den stöder verksamheten. Tack, FirewallForce för ett väl utfört arbete.', d:'5 nov. 2020'},
{name:'Robin Nyberg', title:'Deras priser och rabatter är helt enkelt fantastiska', des:'Även om de är nya inom affärsområdet men de vet hur man arbetar. Vi köpte några avancerade modeller till vårt datacenter tillsammans med programvarulicenser. Det som är bra är att deras priser och rabatter är helt enkelt fantastiskt. Vi jämförde deras priser med andra leverantörer men de sticker ut från andra.', d:'26 okt. 2020'}
];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 4 },
    ]
    return <>
        <Carousel breakPoints={breakPoints} pagination={false}>
            {
                array.map((item, index) => {
                    return <div key={index} className="mx-1 ">
                        <div className="card-body card-width mt-4">
                            <section className="d-flex justify-content-between card-text-trust mt-4">
                                <div className="">
                                    <i className="fa fa-star text-success"></i>
                                    <i className="fa fa-star text-success"></i>
                                    <i className="fa fa-star text-success"></i>
                                    <i className="fa fa-star text-success"></i>
                                    <i className="fa fa-star text-success"></i>
                                </div>
                                <span>{item.d}</span>
                            </section>
                            <h3 className="card-title heading-trust mt-3 " style={{color:'#575757', fontFamily:'Poppins'}}>{item.title}</h3>
                            <p className="card-text card-text-trust mt-2 " style={{color:'#575757', fontFamily:'Poppins'}}>{item.des}</p>
                            <p className="card-text card-text-trust mt-2 " style={{color:'#575757', fontFamily:'Poppins'}}><small >{item.name}</small></p>
                        </div>
                    </div>
                })
            }
        </Carousel>
    </>
}