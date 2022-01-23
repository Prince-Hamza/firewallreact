import React from 'react';
import "./style.css";
import MapItems from "./MapItems";
import pic1 from '../img/1.jpg'
import pic2 from '../img/2.png'
import pic3 from '../img/3.jpg'
import pic4 from '../img/4.jpg'
import pic5 from '../img/5.png'
import pic6 from '../img/6.jpg'
import pic7 from '../img/7.jpg'
import pic8 from '../img/8.jpg'
const Detail = () => {


    const array = [{
        pic1: pic1, title: 'Hur köper man?', one: 'Steg-1:', two: 'Steg-2:', three: 'Steg-3:', four: 'Steg-4:', des: ` Hitta din vara i sökfältet genom att sätta modell / del eller SKU. Eller bläddra igenom produktsidan enligt önskat varumärke. Genom att klicka på en produkt visas fliken “Begär offert”. Klicka på den och din begäran dirigeras till sidan “Begär offert”. Var du fyller i formuläret och skickar till oss. En av våra teammedlemmar kommer att kontakta dig via e-post eller telefon inom några timmar.`,

        Steg2: ` Om du inte hittar din önskade modell, skicka bara modellens artikelnummer via e-post till sales@firewallforce.se eller så kan du också skicka offertförfrågan genom att klicka på fliken i det övre navigeringsfältet.`,

        Steg3: `Alla beställningar behandlas vid mottagande av inköpsorder från kunden med överenskomna betalningsvillkor.`,

        Steg4: `När du får din beställning, vänligen bekräfta till relevant försäljningskoordinator.`
    }, {
        pic2: pic2, title: 'Frakt och Leverans', one: `Beställningsplacerings_och_leveranspolicyer:`, two: 'Leverans tidslinje:', three: 'Elektronisk leverans:', four: '*Obs:', des: `
    Beställningar som görs från måndag till fredag ​​och skickas ut nästa arbetsdag. Beställningar som görs på rött dag skickas nästa arbetsdag.`,


        Steg2: `Leveranstid för varor som inte finns i vårt lager vid beställningstillfället tar 1-2 veckor standard leveranstid. Om du behöver brådskande leverans kan vi importera varorna med extra kostnad inom 4-6 dagar med hjälp av Postnord, DHL, UPS eller expressfrakt. Dessutom kan vi använda alla tillgängliga tjänster för att skicka beställningar om leveranstiden inte påverkas negativt.`,


        Steg3: `Vissa produkter kan vara tillgängliga för elektronisk leverans via e-post som programvara, licenser, aktiveringsnycklar etc.`,

        Steg4: `För detaljerad information om frakt och leverans, besök vår kundsupport / FAQ-sida.`
    }, { pic3: pic3, title: 'Return Byte', des: `Om du av någon anledning inte är helt nöjd med ett köp föreslår vi att du granskar vår policy för retur och återbetalning. Vi diskuterade detta ämne i detalj på vår kundtjänst / FAQ-sida. Eller så kan du prata direkt med oss ​​via e-post eller ringa.` }, { pic4: pic4, title: 'Garantier', des: `Kunden måste förstå att “Firewall Force” inte är tillverkaren av de produkter som vi har köpt och de garantierna som erbjuds är tillverkarens garanti, inte “Firewall Force”. Alla produkter levereras med standardgaranti som erbjuds av tillverkaren men garantiperioden går att förlänga genom att köpa relevanta supporttjänster, SMARTnet & licenser.` },
    {
        pic5: pic5, title: 'Kredit Villkor', des: `Vi gjorde det enkelt för dig att förvärva teknik idag så att ditt företag inte kan störas på något sätt. Vi erbjuder kredit till de kunder som kan uppfylla våra villkor och enkelt kan betala utestående betalning före förfallodagen. Betalningsvillkor nämns i detalj på sidan med kundtjänst / FAQ. Vanligtvis erbjuder vi kredit till företagskunder endast i 15 dagar (med 0% ränta) men det kräver kreditkontrollhistorik. Vi kan förlänga denna kreditperiod och för det måste du kontakta vår försäljningsavdelning. Du kan också köpa produkter genom att välja ”AfterPay” kreditalternativ på kassan sidan som ger dig ränta gratis 3 till 6 månader delbetalning och avbetalning alternativ.
    
    Läs mer`}
        , { pic6: pic6, title: 'Enkel Finansiering', des: `Vi erbjuder enkla finansieringsalternativ vid stora order / affärer utan intresse för företagskunder. Genom att skriva ett avtal med oss ​​kommer du att ingå ett hyresalternativ som för tillfället bara tillhandahåller max 12 månader. Denna hyresmetod kräver en avslappnad kredithistorisk kontroll och efter godkännande är det enkelt att skaffa vad du vill. Vi samarbetar med olika finansiella företag för att täcka dig här utan svårigheter.` }, { pic7: pic7, title: 'Karriärer', two: 'info@firewallforce.se      ', Steg2: 'Om du inte ser ett annonserat jobb här är du välkommen att skicka in en spontan ansökan på ovanstående e-post.', des: `Var en del av vårt affärs- och nätverksteam på nationell nivå. Vi letar efter nya anställda för att utöka vårt team. Vill du vara medlem i vår organisation? Om ja. Skicka sedan ditt CV till oss på` }, { pic8: pic8, title: 'Industri Nyheter', des: `Gå till vår “Tekniskt bibliotek” -sida, där du kommer att se dem senaste branschnyheter om produkter och lösningsinformation,pressmeddelanden,tillkännagivanden,tekniska fall och designriktlinjer.` }
    ]

    return <>
        <section className="container bg-danger section-main-items-resources px-5 pt-1 pb-5">
            {
                array.map((item, index) => {
                    return <MapItems index={index} item={item} />
                })
            }

        </section>
    </>
}

export default Detail;