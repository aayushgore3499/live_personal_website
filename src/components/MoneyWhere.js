import { useState, useEffect } from 'react'

const MoneyWhere = () => {
  
  // Function that can be used to update list of cur. symbols
  // const getSymbols = () => {
  //   fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(Object.keys(JSON.parse(result)['symbols']))
  //     })
  //     .catch(error => console.log('error', error));
  // }

  // const currencySymbols = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 
  //   'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 
  //   'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 
  //   'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 
  //   'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 
  //   'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 
  //   'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 
  //   'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 
  //   'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 
  //   'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 
  //   'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 
  //   'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 
  //   'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 
  //   'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 
  //   'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 
  //   'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 
  //   'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 
  //   'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 
  //   'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMK','ZMW', 'ZWL']

  const [conversions, setConversions] = useState({})
  const [list1, setList1] = useState([])
  const [list2, setList2] = useState([])

  // useEffect(() => {
  //   console.log(matched);
  // }, [matched])

  // useEffect(() => {
  //   console.log(nonMatched);
  // }, [nonMatched])
  
  const debuggingCalculateOnClick = () => {
    let input = parseInt(document.getElementById("input").value)
    if (isNaN(input)) {
      console.log("Not a number!")
      return
    }

    const rates = {
      "AED": 3.679091,
      "AFN": 87.476987,
      "ALL": 117.479383,
      "AMD": 400.872018,
      "ANG": 1.783842,
      "AOA": 430.742618,
      "ARS": 140.882952,
      "AUD": 1.49031,
      "AWG": 1.802934,
      "AZN": 1.706747,
      "BAM": 1.955986,
      "BBD": 1.99856,
      "BDT": 94.056612,
      "BGN": 1.961406,
      "BHD": 0.37733,
      "BIF": 2042.913167,
      "BMD": 1.00163,
      "BND": 1.394211,
      "BOB": 6.839546,
      "BRL": 5.26193,
      "BSD": 0.989779,
      "BTC": 4.9944814e-05,
      "BTN": 79.053614,
      "BWP": 12.904931,
      "BYN": 2.4984,
      "BYR": 19631.948,
      "BZD": 1.995159,
      "CAD": 1.328747,
      "CDF": 2044.327192,
      "CHF": 0.966113,
      "CLF": 0.032033,
      "CLP": 883.899497,
      "CNY": 6.995288,
      "COP": 4435.354251,
      "CRC": 648.891827,
      "CUC": 1.00163,
      "CUP": 26.543195,
      "CVE": 110.273808,
      "CZK": 24.523312,
      "DJF": 176.214074,
      "DKK": 7.436907,
      "DOP": 52.504194,
      "DZD": 140.526224,
      "EGP": 19.288541,
      "ERN": 15.02445,
      "ETB": 52.255474,
      "FJD": 2.255975,
      "FKP": 0.866005,
      "GBP": 0.877119,
      "GEL": 2.824988,
      "GGP": 0.866005,
      "GHS": 9.823885,
      "GIP": 0.866005,
      "GMD": 54.592695,
      "GNF": 8554.883277,
      "GTQ": 7.680913,
      "GYD": 207.08654,
      "HKD": 7.86239,
      "HNL": 24.392948,
      "HRK": 7.519942,
      "HTG": 116.302289,
      "HUF": 404.823292,
      "IDR": 15023.648696,
      "ILS": 3.429732,
      "IMP": 0.866005,
      "INR": 79.780334,
      "IQD": 1444.645384,
      "IRR": 42469.112353,
      "ISK": 139.787869,
      "JEP": 0.866005,
      "JMD": 148.471858,
      "JOD": 0.710195,
      "JPY": 143.164017,
      "KES": 119.07401,
      "KGS": 81.183418,
      "KHR": 4074.025392,
      "KMF": 492.405111,
      "KPW": 901.467045,
      "KRW": 1388.750363,
      "KWD": 0.309714,
      "KYD": 0.824866,
      "KZT": 469.217476,
      "LAK": 15570.143584,
      "LBP": 1496.619535,
      "LKR": 356.33146,
      "LRD": 154.251369,
      "LSL": 17.659119,
      "LTL": 2.957553,
      "LVL": 0.605876,
      "LYD": 4.903792,
      "MAD": 10.541142,
      "MDL": 19.202334,
      "MGA": 4168.092905,
      "MKD": 61.619922,
      "MMK": 2078.599217,
      "MNT": 3229.697897,
      "MOP": 8.002939,
      "MRO": 357.581738,
      "MUR": 44.072066,
      "MVR": 15.495595,
      "MWK": 1016.643199,
      "MXN": 20.074572,
      "MYR": 4.542897,
      "MZN": 63.934421,
      "NAD": 17.659115,
      "NGN": 429.579452,
      "NIO": 35.573841,
      "NOK": 10.21284,
      "NPR": 126.486102,
      "NZD": 1.671542,
      "OMR": 0.385411,
      "PAB": 0.989779,
      "PEN": 3.843607,
      "PGK": 3.487679,
      "PHP": 57.103302,
      "PKR": 222.276453,
      "PLN": 4.721071,
      "PYG": 6830.445546,
      "QAR": 3.646973,
      "RON": 4.863318,
      "RSD": 117.349373,
      "RUB": 60.602311,
      "RWF": 1023.831773,
      "SAR": 3.763433,
      "SBD": 8.186707,
      "SCR": 13.805505,
      "SDG": 579.446639,
      "SEK": 10.776027,
      "SGD": 1.408696,
      "SHP": 1.379649,
      "SLL": 14638.822789,
      "SOS": 569.430328,
      "SRD": 27.9976,
      "STD": 20731.718717,
      "SVC": 8.660692,
      "SYP": 2516.625742,
      "SZL": 17.232076,
      "THB": 36.481406,
      "TJS": 10.110908,
      "TMT": 3.515721,
      "TND": 3.205721,
      "TOP": 2.381914,
      "TRY": 18.288677,
      "TTD": 6.704235,
      "TWD": 31.307652,
      "TZS": 2308.234358,
      "UAH": 36.548819,
      "UGX": 3771.201205,
      "USD": 1.00163,
      "UYU": 40.32022,
      "UZS": 10859.41734,
      "VND": 23698.5658,
      "VUV": 119.155785,
      "WST": 2.730021,
      "XAF": 656.009395,
      "XAG": 0.051181,
      "XAU": 0.000598,
      "XCD": 2.706956,
      "XDR": 0.764161,
      "XOF": 656.009395,
      "XPF": 119.769945,
      "YER": 250.783149,
      "ZAR": 17.6339,
      "ZMK": 9015.875555,
      "ZMW": 15.267819,
      "ZWL": 322.524451,
    }

    let local_conversions = {}
    for (const [key, value] of Object.entries(rates)) {
      local_conversions[key] = (input * value).toFixed(3)
      // setConversions({...conversions, [key]: new_val})
    }
    setConversions(local_conversions)

    let local_list_1 = []
    let local_list_2 = []

    for (const [key, value] of Object.entries(local_conversions)) {
      if (value.includes("99")) {
        local_list_1.push(key)
      } else {
        local_list_2.push(key)
      }
    }

    setList1(local_list_1)
    setList2(local_list_2)

    // let searchQuery = "99"
    // let textSearchSpace = document.getElementById("searchBox")
    // let textSearchSpaces = document.getElementsByName("searchArea")
    
    // searchQuery = searchQuery.replace(/[.**?^${}()|[\]\\]/g,"\\$&")

    // let pattern = new RegExp(`${searchQuery}`, "gi")

    // for (let i = 0; i < textSearchSpaces.length; i++) {
    //   // textSearchSpaces[i].innerHTML = textSearchSpaces[i].textContent.replace(pattern, match => `<mark>${match}</mark>`)

    //   if (textSearchSpaces[i].innerHTML.includes("99")) {
    //     // ReactDOM.render(<p>Hello</p>, textSearchSpaces[i]);
    //   }
    // }

    // textSearchSpace.div.innerHTML = textSearchSpace.div.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    
    
  }

  // const calculateOnClick = () => {
    
  //   let input = parseInt(document.getElementById("input").value)
  //   if (isNaN(input)) {
  //     console.log("Not a number!")
  //     return
  //   }

  //   // https://apilayer.com/marketplace/fixer-api#documentation-tab
  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "ZiTf1Tr9ofECVBnFUerJI6bFf50UxrvP");

  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };

  //   console.log("fetching")

  //   const currencySymbolString = "AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BRL,BSD,BTC,BTN,BWP,BYN,BYR,BZD,CAD,CDF,CHF,CLF,CLP,CNY,COP,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EGP,ERN,ETB,FJD,FKP,GBP,GEL,GGP,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,IMP,INR,IQD,IRR,ISK,JEP,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LTL,LVL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRO,MUR,MVR,MWK,MXN,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PKR,PLN,PYG,QAR,RON,RSD,RUB,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SLL,SOS,SRD,STD,SVC,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VND,VUV,WST,XAF,XAG,XAU,XCD,XDR,XOF,XPF,YER,ZAR,ZMK,ZMW,ZWL"

  //   fetch("https://api.apilayer.com/fixer/latest?symbols=" + currencySymbolString + "&base=EUR", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log("fetched")
  //       const rates = JSON.parse(result)['rates']
  //       console.log(rates)
        
  //       let new_val = 0
  //       for (const [key, value] of Object.entries(rates)) {
  //         new_val = (input * value)
  //         tmp_conversions[key] = new_val.toFixed(3)
  //         // setConversions({...conversions, [key]: new_val})
  //       }
  //       setConversions(tmp_conversions)
  //     })
  //     .catch(error => console.log('error', error));
  // }
  
  return (
    <div className="container w-75" style={{marginTop: '30px', backgroundColor: 'white', height: '600px'}}>
      <div className="row" style={{height: '20px'}}></div>
      <div className="row p-3" style={{fontSize: '28px'}}>
        <div className="col-3"></div>
        <div className="col d-flex justify-content-center">
          Money. Where?
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row" style={{height: '60px'}}></div>
      <div className="row">
        <div className="col-7">
          <div className="row" style={{fontSize: '18px', marginLeft: '100px', marginBottom: '20px'}}>Please enter a value in EUR currency into the textbox below</div>
          <div className="row" style={{marginBottom: '50px'}}>
            <div className="col-3"></div>
            <div className="col d-flex align-items-center">
              <input id="input" type="number" style={{marginRight: '15px', width: '100%'}} />
              <div style={{fontSize: '18px'}}>EUR</div>
            </div>
            <div className="col d-flex align-items-center">
              <button style={{backgroundColor: 'black', color: 'white', padding: '5px'}} onClick={debuggingCalculateOnClick}>Calculate</button>
            </div>
          </div>
          <div className="row d-flex justify-content-center" style={{textAlign: 'center', marginLeft: '50px', fontSize: '18px'}}>
            The aim of this program is to convert entered EUROs currency value into multiple foreign currencies
            and find one that is a smoothly rounded figure. <br /> <br /> 
            <a href="https://youtu.be/piuEBiKXph8" style={{color: 'black'}}>View Project Demo</a> <br /> <br /> <br /> This project is inspired and built 
            from the movie: 'Blackhat'.
          </div>
        </div>
        <div className="col">
          <div className="container vertical-scrollable">
            <div id="searchBox" className="row text-center">
              {/* {Object.keys(conversions).map((symbol) => (
                <div name="searchArea" key={symbol} className="col-sm-8">
                  {(conversions[symbol] + " " + symbol)}
                  {(conversions[currency] + " " + currency).includes("99") ? ("<mark>" + (conversions[currency] + " " + currency) + "</mark>") : (conversions[currency] + " " + currency)}
                </div>
              ))} */}
              {list1.map((symbol) => (
                <div name="searchArea" key={symbol} className="col-sm-8">
                  <mark>{(conversions[symbol] + " " + symbol)}</mark>
                  {/* {(conversions[currency] + " " + currency).includes("99") ? ("<mark>" + (conversions[currency] + " " + currency) + "</mark>") : (conversions[currency] + " " + currency)} */}
                </div>
              ))}
              {list2.map((symbol) => (
                <div name="searchArea" key={symbol} className="col-sm-8">
                  {(conversions[symbol] + " " + symbol)}
                  {/* {(conversions[currency] + " " + currency).includes("99") ? ("<mark>" + (conversions[currency] + " " + currency) + "</mark>") : (conversions[currency] + " " + currency)} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyWhere
