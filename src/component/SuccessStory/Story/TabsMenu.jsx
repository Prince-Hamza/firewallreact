import React, { useState } from 'react';
import "./style.css";
import { Row, Col } from "react-bootstrap";
import img1 from '../../../assets/Services page transparent icons/Icon1.png'
import img2 from '../../../assets/Services page transparent icons/Icon2.png'
import img3 from '../../../assets/Services page transparent icons/Icon3.png'
import img4 from '../../../assets/Services page transparent icons/Icon4.png'
import img5 from '../../../assets/Services page transparent icons/Icon5.png'
import img6 from '../../../assets/Services page transparent icons/Icon6.png'
import img7 from '../../../assets/Services page transparent icons/Icon7.png'

import pic1 from '../img/one.png'
import pic2 from '../img/two.png'
import pic3 from '../img/three.png'
import pic4 from '../img/four.jpg'
import pic5 from '../img/five.png'
import pic6 from '../img/seven.png'
import pic7 from '../img/eight.png'
import icon1 from '../img/1.png'
import icon4 from '../img/4.png'
import icon5 from '../img/5.png'
import icon7 from '../img/7.png'

const TabsMenu = ({ diamond }) => {


    const imgArray = [img1, img2, img3, img4, img5, img6, img7]

    const [active, setActive] = useState(0);
    const [header, setHeader] = useState('IT-inkop');
    const [ddes, setDes] = useState(`Vi är en ledande leverantör av IT- och nätverksprodukter för att stödja ditt SMB, företag, datacenter eller industriella nätverk. Vi tillhandahåller original ny och begagnad nätverksutrustning`)
    const [ddes1, setDes1] = useState('Cisco, Cisco Meraki, Huawei, PaloAlto Networks, CheckPoint, Alcatel-lucent, SonicWALL, WatchGuard, Ubiquiti Networks, Ruckus Wireless, Extreme Networks, Arista Networks, Aruba Networks, AVAYA, Polycom, HPE, Dell, Fortinet, Sophos, Juniper, Honeywell, Linksys, MikroTik, Netgear, TP-Link, NVidia, Seagate, Tripplite, , WD, APC, Schneider, 3M, Kaspersky, Zyxel, Rackmount.IT, Barracuda, Yealink, Grandstream, Moxa, Brocade, EnGenius, ADVA, Digitus etc…')
    const [ddes2, setDes2] = useState('inklusive routrar, switchar, servrar, lagring, telepresence och videokonferenser, videoövervakning, IP-telefoner, brandväggar, trådlösa AP: er och styrenheter, EHWIC / HWIC / VWIC-kort, SFP: er, minne & blixt, hårddisk , Kablar och alla typer av system- eller nätverksrelaterade produkter.')
    const [ddes3, setDes3] = useState('Vi tillhandahåller komplett inköp och inköp av IT-hårdvara och mjukvara till bra priser och prismatchning är garanterad för alla märken som listas i vår portfölj och våra konsulter finns tillgängliga för att ge dig råd om produktval, licensiering, kontrakt, förnyelser och projektkrav.')
    const [pics, setPics] = useState(pic1)
    const [ics, setIcons] = useState(icon1)
    const [selected, setSelected] = useState(0)

    const objectsData = [
        { name: 'IT-inkop', subName: '', is: icon1, pic: pic1, des: 'Vi är en ledande leverantör av IT- och nätverksprodukter för att stödja ditt SMB, företag, datacenter eller industriella nätverk. Vi tillhandahåller original ny och begagnad nätverksutrustning', subdiv1: 'Cisco, Cisco Meraki, Huawei, PaloAlto Networks, CheckPoint, Alcatel-lucent, SonicWALL, WatchGuard, Ubiquiti Networks, Ruckus Wireless, Extreme Networks, Arista Networks, Aruba Networks, AVAYA, Polycom, HPE, Dell, Fortinet, Sophos, Juniper, Honeywell, Linksys, MikroTik, Netgear, TP-Link, NVidia, Seagate, Tripplite, , WD, APC, Schneider, 3M, Kaspersky, Zyxel, Rackmount.IT, Barracuda, Yealink, Grandstream, Moxa, Brocade, EnGenius, ADVA, Digitus etc…', subdiv2: 'inklusive routrar, switchar, servrar, lagring, telepresence och videokonferenser, videoövervakning, IP-telefoner, brandväggar, trådlösa AP: er och styrenheter, EHWIC / HWIC / VWIC-kort, SFP: er, minne & blixt, hårddisk , Kablar och alla typer av system- eller nätverksrelaterade produkter.', subdiv3: 'Vi tillhandahåller komplett inköp och inköp av IT-hårdvara och mjukvara till bra priser och prismatchning är garanterad för alla märken som listas i vår portfölj och våra konsulter finns tillgängliga för att ge dig råd om produktval, licensiering, kontrakt, förnyelser och projektkrav.' },
        { name: 'Omgaende', subName: 'Ingenjorer', pic: pic2, des: 'Vårt motto är ”Team work makes the dream work”. Vi har en av de bästa IT-tekniska konsulter, fält- och fjäringenjörer i varje domän för att planera, designa, integrera, felsöka, projekt vägleda och för att stödja dig och ditt nätverk i alla led. Vi gjorde det enkelt att förvärva och lägga ut ingenjörsgrupper eller enskilda för att slutföra ett uppdrag med 100% framgång och kundnöjdhet. Att anställa och leta efter rätt person för att göra ett perfekt jobb kan vara en utmaning, därför erbjuder vi högkvalificerade tekniska personer till ett pris som du gärna betalar för.', subdiv1: 'Maila oss på ; ', subdiv2: 'info@firewallforce.', subdiv3: 'Se med din tekniska förfrågan så kommer någon från vårt team att kontakta dig omedelbart.' },
        {
            name: 'Teknish', subName: 'Radgivning', pic: pic3, des: 'Vi tillhandahåller teknisk rådgivning när det gäller nätverksdesign och servicearkitektur, produktval och designdokumentation. Anpassad efter dina behov bygger vi nätverksinfrastrukturer från grunden som täcker hela distributionsprocessen och sedan support efter försäljning.', subdiv1: 'Avancerad Nätinfrastrukturanalys och Design',
            subdiv2: `Komplett kartläggning och granskning av nätverkssystem, brandvägg och säkerhetsbehov
        En-mot-en-hjälp och förslag från våra certifierade ingenjörer inom före och efter distribution och installation
        Nätverkssäkerhet (lokalt), policykonsultation`, subdiv3: `Nätverkshårdvara och programvara Produktrekommendationer och försäljning
        Installationsplanering för installation av avancerad säkerhet, trådlös, LAN / WAN-lösning
        Våra ackrediterade experter från flera leverantörer är kvalificerade att ge råd och rekommendationer inom ett brett spektrum av discipliner och tekniker för att uppnå de önskade resultaten för dig.` },
        {
            name: 'Driftsattning Och', subName: 'Konfiguration', is: icon4, pic: pic4, des: `Det är viktigt att konfigurera ny teknikinköp, men det är också tidskrävande. Om du inte gör det korrekt kan du tappa produktiviteten och gå över din budget. Våra kvalificerade ingenjörer kan integrera och konfigurera nätverksutrustning som till exempel routrar, switchar, brandväggar, trådlösa och mycket mer innan de skickas via post, distans eller på plats enligt dina behov.

        Våra distributionstjänster säkerställer att ditt angivna arbetsområde och exakta konfigurationskrav uppfylls helt. Vi tillhandahåller kompletta design- och konfigurationsdokument för din förståelse och dina registreringar.`, subdiv1: 'Prior to Ship', subdiv2: 'tjänster minskar installationstiden, minimerar DOA-problem och fel på plats. Säkerställa att dina resurser inte är bundna och väntar på att systemproblem ska åtgärdas innan lösningen implementeras.', subdiv3: 'Obs: Varje distributionsalternativ har olika serviceavgifter och debiteras enligt arbetsomfånget. Kontakta oss och låt oss hjälpa dig att göra det enkelt för dig.'
        },
        { name: 'Partner', subName: 'Supporttjanster', pic: pic5, is: icon5, des: 'Våra partnersupporttjänster tillhandahåller en enda källa till support för flera varumärken, oberoende av tillverkare, plats och utan SLA eller term. Med ett nummer att ringa finns våra tekniker / ingenjörer är  tillgängliga för att hjälpa dig på så lite som fyra timmar, vilket ger dig en försäkran om att alla problem kommer att lösas snabbt och effektivt.', subdiv1: 'Supportens öppettider är 09:00 – 17:00.', subdiv2: 'Post Deployment Services är den del av partnersupporttjänster som syftar till att ge support efter försäljning. Vi kan tillhandahålla en on-demand ingenjörsupporttjänst som hjälper dig vid eventuella problem eller för att tillhandahålla ytterligare resurser när det behövs.', subdiv3: 'Vår snabba svarstjänst är utformad för att hjälpa dig att lösa alla nätverksrelaterade problem genom att använda vårt certifierade, erfarna team av supporttekniker.' },
        { name: 'Serviceninaavtal', subName: '(SLA)', pic: pic6, des: 'Vi tillhandahåller SLA för att visa ett kontinuerligt engagemang för att erbjuda högkvalitativa nät- och säkerhetstjänster som erbjuds för alla storlekar av organisationer och företag.', subdiv1: 'Med ett nummer att ringa finns våra tekniker', subdiv2: 'SLA finns för nätverksutrustning till avancerade infrastrukturlösningar. Vi har olika SLA-paket från SMB till kritiska företagsnätverk där stilleståndet betyder allt.', subdiv3: 'Ingenjörer är  tillgängliga' },
        {
            name: 'Bevis Pa Koncept', subName: 'Tjanster (POC)', pic: pic7, is: icon7, des: `POC är en fysisk demonstration av din valda teknologilösning för testning och för att bekanta sig innan investeringen. Detta kan kräva lite investering eller tillhandahållande av beräkning och lagring av befintliga infrastrukturer, men när det väl är byggt, ger det en tydlig vision för vad företaget behöver och var du kan hitta ditt befintliga nätverk och säkerhetsfel och många fördelar med den produkten.

        För mer information, mejla oss på`, subdiv1: 'sales@firewallforce.se', subdiv2: 'Tjanster (POC)', subdiv3: 'mejla oss på'
        }
    ]
    return <>
        <section className="d-flex justify-content-center diamond-overflow">
            {
                objectsData.map((item, index) => {
                    return <div style={{ position: "relative" }} onClick={() => {
                        setActive(index);
                        setHeader(`${item.name} ${item.subName}  `);
                        setDes(`${item.des}`)
                        setIcons(`${item.is}`)
                        setDes1(`${item.subdiv1}`)
                        setDes2(`${item.subdiv2}`)
                        setDes3(`${item.subdiv3}`)
                        setPics(`${item.pic}`)
                        // setIcons(`${item.is}`)
                    }} key={index} className={active === index ? "border-bottom-diamond padding-bottom pb-4 d-flex flex-column align-items-center" : "border-gray padding-bottom pb-4 d-flex flex-column align-items-center"}>
                        <div className={active === index ? "diamond active-diamond" : "diamond "}>
                        </div>
                        <div className="text-center text-div mt-3 d-flex flex-column " >
                            <span className={active === index ? "text-danger " : "#575757"} style={{ fontFamily: 'Poppins' }}>{item.name}</span>
                            <span className={active === index ? "text-danger " : "#575757"} style={{ fontFamily: 'Poppins' }}>{item.subName}</span>
                        </div>

                        <div style={{ position: "absolute", width: "55%", display: "flex", justifyContent: "center", alignItems: "center" }}
                            onClick={() => { setSelected(index) }}
                        >
                            <img
                                src={selected === index ? require("../../../assets/Services page transparent icons/ShapeRed.png").default : require("../../../assets/Services page transparent icons/ShapeDark.png").default}
                                style={{ zIndex: 0, width: "100%", height: '100%' }}
                                alt=""
                            />
                            <img src={imgArray[index]} style={{ position: "absolute", left: "25%", width: "50%", height: "50%", zIndex: 1 }} alt="" />
                        </div>


                    </div>
                })
            }
        </section>
        <section className="diamond-detail my-4 p-3">
            <Row>
                <Col lg={5}>
                    <img className="detail-image" src={pics} alt="" />
                </Col>
                <Col lg={7} className="img-text-margin">
                    <h3 className=" pb-3 fw-bold" style={{ fontFamily: 'Poppins', color: '#575757' }}>{header}:</h3>
                    <div>
                        <p style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#575757' }}>{ddes}</p>
                        <p className="text-danger" style={{ fontFamily: 'Poppins', fontSize: '14px' }}><input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" onChange={() => { return }} />{ddes1}</p>
                        <p style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#575757' }}><input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" onChange={() => { return }} />{ddes2}</p>
                        <p style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#575757' }}><input checked type="checkbox" style={{ marginRight: ".5rem" }} name="" id="" onChange={() => { return }} />{ddes3}</p>
                    </div>
                </Col>
            </Row>
        </section>
    </>
}

export default TabsMenu;