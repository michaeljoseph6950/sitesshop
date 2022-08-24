const tableDataHandler = (includes,balance,price,tbid)=>{
    let newTr = document.createElement("tr");
    //
    let newtdi = document.createElement("td");
    newtdi.innerHTML = includes;
    let newtdb = document.createElement("td");
    newtdb.innerHTML = `$${balance}`;
    let newtdp = document.createElement("td");
    newtdp.innerHTML = `$${price}`;
    let newtdbuy = document.createElement("td");
    let newdiv = document.createElement("div");
    newdiv.setAttribute("class","m-t-small");
    let newa = document.createElement("a");
    newa.addEventListener("click",e=>{
        e.preventDefault();
        sessionStorage.setItem("price",price);
        sessionStorage.setItem("bal",balance);
        window.location.href = "./html/puchase.html";
    });
    newa.setAttribute("class","btn btn-sm btn-info");
    let newi = document.createElement('i');

    newi.setAttribute("class","fa fa-shopping-cart");
    newi.innerText = " Purchase";
    newa.appendChild(newi);
    newdiv.appendChild(newa);
    newtdbuy.appendChild(newdiv);
    newTr.appendChild(newtdi);
    newTr.appendChild(newtdb);
    newTr.appendChild(newtdp);
    newTr.appendChild(newtdbuy);
    document.getElementById(tbid).appendChild(newTr);
}

const data = [
    {
        commonData:"Online access, Email Access, Questions and answers, card information and owner's fullz info"
    },
    //0
  {
    bankName: "Chase Bank",
    bankLogs: {
      balance: [1014.76, 1254.64, 1632.75, 1883.53,2165.53, 2755.02, 3027.01, 3164.56,3674.91,3900.43,4117.86,4684.35,
                4853.57],
      price: [95,100,150,180,203,240,263,299,310,350,380,400,430]
    },
    checkingAccounts: {
      balance: [],
      price: []
    },
  },
  //1
  {
    bankName: "Bank of America",
    bankLogs: {
      balance: [1000.76, 1154.64, 1520.60, 1600.51,1900.53, 2300.12, 2500.44, 2900.56,3250.91,3500.55,3900.91,4000.35,
                4200.44],
      price: [88,99,130,150,180,230,254,270,300,320,340,380,410]
    }
  },
  //2
  {
    bankName: "Suntrust Bank",
    bankLogs: {
      balance: [1100.11, 1350.33, 1500.75, 1753.55,2000.77, 2500.22, 2900.01, 3050.56,3200.60,3500.33,3800.86,4000.35,
                4200.50],
      price: [93,101,130,160,196,223,255,276,290,320,340,370,400]
    }
  },
  //3
  {
    bankName: "Wells-Fargo Bank ",
    bankLogs: {
      balance: [994.70, 1150.55, 1500.15, 1783.55,1900.71, 2000.22, 2900.44, 3023.56,3400.95,3500.55,3900.87,4300.44,
                4453.34],
      price: [102,110,145,174,200,225,245,260,300,320,345,420,450]
    }
  },
  //4
  {
    bankName: "TD Bank ",
    bankLogs: {
      balance: [1054.50, 1150.51, 1500.71, 1655.53,2050.40, 2500.12, 2950.50, 3100.56,3500.90,3800.45,4000.86,4300.35,
                4500.95],
      price: [100,105,140,154,195,220,255,280,300,330,350,380,400]
    }
  },
  //5
  {
    bankName: "RCB Bank ",
    bankLogs: {
      balance: [1000.50, 1300.65, 1400.55, 1773.55,2090.33, 2450.12, 30000.01, 3164.56,3460.90,3400.43,4070.82,4500.35,
                4753.90],
      price: [102,110,130,160,180,235,255,279,300,330,350,400,420]
    }
  },
  //6
  {
    bankName: "Scotia Bank ",
    bankLogs: {
      balance: [1104.55, 1154.65, 1432.54, 1773.13,2100.51, 2600.02, 3057.11, 3100.56,3570.90,3700.41,4217.86,4584.35,
                4803.45],
      price: [99,107,154,175,195,215,245,275,295,315,325,385,400]
    }
  },
  //7
  {
    bankName: "Barclays Bank  ",
    bankLogs: {
      balance: [1020.44, 1254.55, 1430.85, 1993.65,2050.55, 2655.02, 3000.11, 3164.58,3474.90,3995.45,4110.85,4700.45,
                4800.17],
      price: [95,100,150,180,203,240,263,299,310,350,380,400,430]
    }
  },
  //8
  {
    bankName: "Standard Chatered Bank",
    bankLogs: {
      balance: [179, 53, 218, 99,65, 97, 47, 58, 73, 55, 157, 93],
      price: [186, 120, 180, 130,120, 120, 100, 110, 120, 98, 135, 130],
    }
  },
  //9
  {
    bankName: "Citi Bank",
    bankLogs: {
      balance: [1114.52, 1154.65, 1532.45, 1773.59,2000.53, 2664.02, 2800.31, 3000.76,3500.90,3800.45,4000.86,4444.53,
                4653.33],
      price: [99,105,145,175,195,225,243,275,300,320,345,355,375]
    }
  },
  //10
  {
    bankName: "Hsbc Bank",
    bankLogs: {
      balance: [1024.50, 1350.76, 1532.80, 1783.51,2000.51, 2555.12, 3000.70, 3100.55,3574.90,3800.45,4110.11,4584.45,
                4700.57],
      price: [100,110,130,150,199,235,259,279,299,330,375,399,410]
    }
  },
  //11
  {
    bankName: "Huntington Bank ",
    bankLogs: {
      balance: [1100.75, 1354.64, 1532.43, 1783.56,2100.60, 2700.02, 3000.01, 3100.55,3500.90,3500.45,4000.80,4550.55,
                4753.37],
      price: [99,110,145,175,195,235,245,300,325,340,360,375,400]
    }
  },
  //12
  {
    bankName: "Chime Bank",
    bankLogs: {
      balance: [1214.44, 1350.65, 1732.85, 1983.53,2100.50, 2555.02, 3000.01, 3124.56,3000.91,3500.45,4000.86,4584.35,
                4953.37],
      price: [85,99,110,175,199,230,255,299,315,340,370,410,430]
    }
  },
  //13
  {
    bankName: "Woodforest Bank",
    bankLogs: {
      balance: [1014.76, 1254.64, 1632.75, 1883.53,2165.53, 2755.02, 3027.01, 3164.56,3674.91,3900.43,4117.86,4684.35,
                4853.57],
      price: [95,100,150,180,203,240,263,299,310,350,380,400,430]
    }
  },
  //14
  {
    bankName: "HSBC Bank",
    bankLogs: {
      balance: [1114.66, 1354.64, 1430.75, 1783.55,2160.53, 2655.02, 3000.11, 3100.55,3574.80,3800.45,4110.85,4600.54,
                4750.51],
      price: [95,100,140,170,200,230,250,299,310,330,350,400,420]
    }
  },
  {
    bankName: "Cashapp",
    bankLogs: {
      balance: [1114.66, 1354.64, 1430.75, 1783.55,2160.53, 2655.02, 3000.11, 3100.55,3574.80,3800.45,4110.85,4600.54,
                4750.51],
      price: [95,100,140,170,200,230,250,299,310,330,350,400,420]
    }
  },
  //15
];

//
const dataRelayer = (id,id1,index)=>{
  let indexer = data[index].bankLogs.balance.length;
    document.getElementById("shower").innerHTML = `${data[index].bankName} Logs: ${indexer} Logs available`
    document.getElementById("theRealer").innerHTML = `${data[index].bankName}`;
    document.getElementById(id).innerHTML = "";
    for(let i = 0; i <= (data[index].bankLogs.balance.length -1); i++){
        tableDataHandler(data[0].commonData,data[index].bankLogs.balance[i],data[index].bankLogs.price[i],id);
    }
}
dataRelayer("bid","fit",1);
const clickListener = (id,index) =>{
    document.getElementById(id).addEventListener("click",result =>{
        dataRelayer("bid","fit",index);
        document.getElementById(id).addEventListener("click",e=>{
        e.preventDefault();
      });
    });
}
//usa
clickListener("chase",1);
clickListener("boa",2);
clickListener("suntrust",3);
clickListener("wells",4);
clickListener("citi",10);
clickListener("td",5);
clickListener("hs",11);


//canada
clickListener("tdc",12);
clickListener("rcb",6);
clickListener("bmo",13);
clickListener("scotia",7);
clickListener("cibc",14);

//uk
clickListener("hs",15);
clickListener("lolyds",16);
// clickListener("barclays",8);
// clickListener("royal",17);
// clickListener("standard",9);

// Accounts
clickListener("cash",18);
clickListener("paypal",12);