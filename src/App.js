import React from 'react';
import './App.css';
import PriceTab from "./PriceTab";

function App() {
  var items = {
    "regular": [
      "SSH Zugang",
      "1 Domain inklusive",
      "50 GB SSD Storage",
      "SSL Zertifikat inklusive",
    ],
    "pro": [
      "SSH Zugang",
      "3 Domains inklusive",
      "150 GB SSD Storage",
      "SSL Zertifikat inklusive",
    ],
    "premium": [
      "SSH Zugang",
      "6 Domains inklusive",
      "500 GB SSD Storage",
      "SSL Zertifikat inklusive",
    ],
    "ultimate": [
      "SSH Zugang",
      "12 Domains inklusive",
      "1000 GB SSD Storage",
      "SSL Zertifikat inklusive"
    ]
  }


  return (
    <div className="App">
     <PriceTab type="REGULAR" price="4.99" list={items.regular}/>
     <PriceTab type="PRO" price="9.99" list={items.pro} isPopular={true} />
     <PriceTab type="PREMIUM" price="19.99" list={items.premium}/>
     <PriceTab type="ULTIMATE" price="24.99" list={items.ultimate}/>
    </div>
  );
}

export default App;
