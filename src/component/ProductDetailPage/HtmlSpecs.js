import axios from "axios"

export const getStandardHtmlDataSheet = async (link) => {
    // alert(`link :: ${link}`)

    var resp = await axios.get(link).catch((err) => { alert(err) })
    let tableData = resp.data.toString()

    // alert(`table Data : ${tableData}`)

    let tableStart = tableData.indexOf('Main features')
    let tableEnd = tableData.lastIndexOf('/td><td></td></tr>') + 19
    let tableInitString = tableData.substring(tableStart, tableEnd)
    let tableString = tableInitString.substring(tableInitString.indexOf(`<tr height=20`), tableInitString.length - 1)
    let tableRows = tableString.split(`<tr height=20>`)
    let nodes = tableRows.map(item => item.split('</td>'))

    let keys = [], values = [], finalPara = ''

    nodes.map((item) => {
        // alert(`nodes : ${item}`)
        item.map((line, index) => {
            if (line.includes('General')) {
                // finalPara += `<div class=\"ITSg\">General</div>`
            } else {
                if (line.includes('class=h')) {
                    let parseLine = line.substring(line.indexOf('>') + 1, line.length)
                    //console.log(`index : ${index} ___  key : ${parseLine}`)
                    finalPara += `<div class="ITSr1">  <div class= "ITSn"> ${parseLine} </div>`
                }

                if (line.includes('class=b')) {
                    let parseLine = line.substring(line.indexOf('>') + 1, line.length)
                    //console.log(`index : ${index} ___ value: ${parseLine}`)
                    finalPara += `<div class="ITSv" > ${parseLine} </div> </div>`
                }
            }
        })
    })


    finalPara = finalPara.substring(finalPara.indexOf('</div>') + 6, finalPara.length)

    finalPara = `<div id="HTML_SPEC" class="ITSs"><div class="ITSg">General</div>` + finalPara + "</div>"
    alert(`Final : ${finalPara}`)

    console.log(`final Para : ${finalPara}`)
    return finalPara

}

