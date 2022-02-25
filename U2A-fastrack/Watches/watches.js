const data = [
    {
        id: 1,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP01_1.jpg?impolicy=pqmed&imwidth=320',
        h4: "REFLEX VOX DIGITAL SILICONE BL...",
        rate:4559,
        strike:6995,
        offer:"(29% off)",
        button1:"NO COST EMI",
        button2:"SMART WATCH"
    },
    {
        id: 2,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP03_1.jpg?impolicy=pqmed&imwidth=320',
        h4: "REFLEX VOX DIGITAL SILICONE PL...",
        rate:4595,
        strike:6995,
        offer:"(29% off)",
        button1:"NO COST EMI",
        button2:"SMART WATCH"
    },
    {
        id: 3,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP02_1.jpg?impolicy=pqmed&imwidth=320',
        h4: "REFLEX VOX DIGITAL SILICONE BL...",
        rate:4559,
        strike:6995,
        offer:"(29% off)",
        button1:"NO COST EMI",
        button2:"SMART WATCH"
    },
    {
        id: 4,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP04_1.jpg?impolicy=pqmed&imwidth=320',
        h4: "REFLEX VOX DIGITAL SILICONE ...",
        rate:4395,
        strike:6995,
        offer:"(40% off)",
        button1:"NO COST EMI",
        button2:"SMART WATCH"
    },
    {
        id: 5,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/SWD90067PP01A_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & BL...",
        rate:2045,
        strike:2995,
        offer:"(32% off)",
        button1:"NO COST EMI",
        button2:"TOUCH DISPLAY"
    },
    {
        id: 6,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/SWD90067PP02A_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & TU...",
        rate:2045,
        strike:2995,
        offer:"(30% off)",
        button1:"NO COST EMI",
        button2:"FULL TOUCH DISPLAY"
    },
    {
        id: 7,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/SWD90067PP03A_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & GR...",
        rate:2045,
        strike:2995,
        offer:"(32% off)",
        button1:"NO COST EMI",
        button2:"TOUCH DISPLAY"
    },
    
    {
        id: 8,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/SWD90067PP04A_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & BL...",
        rate:2049,
        strike:2995,
        offer:"(32% off)",
        button1:"NO COST EMI",
        button2:"COLOR DISPLAY"
    },  
    {
        id: 9,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38068PP03_1.jpg?pView=listing',
        h4: "REFLEX BEAT PURPLE SMART BAND IN MIDLIGHT BLACK & MO....",
        rate:1865,
        strike:2195,
        offer:"(15% off)",
        button1:"NO COST EMI",
        button2:"NEW ARRIVAL"
    },
    
];

// var popitems = JSON.parse(localStorage.getItem("cartItems")) || []


data.map(function(elem){
   var image = document.createElement("img")
   var h4 = document.createElement("h4")
   var rate = document.createElement("p")
   var strike = document.createElement("del")
   var offer = document.createElement("p")
   var btn1 = document.createElement("button")
   var btn2 = document.createElement("button")

   var card = document.createElement("div")
   card.className = "mens-watch"
   var price = document.createElement("div")
   price.className = "rate"
   var btns = document.createElement("div")
   btns.className = "btn"

   image.setAttribute("src",elem.image)
   h4.textContent = elem.h4
   
   rate.textContent = `₹${elem.rate}`
   rate.className = "rupee"
   
   strike.textContent = `₹${elem.strike}`

   offer.textContent = elem.offer
   offer.className = "offer"

   btn1.textContent = elem.button1
   btn2.textContent = elem.button2


   card.addEventListener("click", function(){
    popup(elem);
    window.location.href = "../popup/popup.html"
  })

   price.append(rate,strike,offer);
   btns.append(btn1,btn2)
  card.append(image,h4,price,btns)
    document.querySelector("#product").append(card);
})




const data2 = [
    {
        id: 1,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38062PP03W_1.jpg?pView=listing',
        h4: "MONOCHROME PINK DIAL WATCH...",
        rate:715,
        strike:795,
        offer:"(10% off)",
        button1:"QUARTZ MOVEMENT",
        button2:"DIAL WATCH"
    },
    {
        id: 2,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/6256SP01_1.jpg?pView=listing',
        h4: "MONOCHROME GREEN DIAL WATCH...",
        rate:1465,
        strike:2095,
        offer:"(30% off)",
        button1:"SUPER TRENDY WATCH",
        button2:"TOUCH"
    },
    {
        id: 3,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/6256NP01_1.jpg?pView=listing',
        h4: "STUNNERS MULTICOLOR DIAL YELLOW LEATHER BL...",
        rate:2000,
        strike:2500,
        offer:"(25% off)",
        button1:"HIGH QUARTZ MOVEMENT",
        button2:"TOUCH"

    },
    {
        id: 4,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3263SP01_1.jpg?pView=listing',
        h4: "COCA-COLA EDITION BLACK WATCH ...",
        rate:2515,
        strike:3959,
        offer:"(40% off)",
        button1:"HIGH QUARTZ MOVEMENT",
        button2:"TOUCH"

    },
    {
        id: 5,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3260SP01_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & BL...",
        rate:2045,
        strike:2995,
        offer:"(32% off)",
        button1:"NO COST EMI",
        button2:"TOUCH DISPLAY"
    },
    {
        id: 6,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3260NP01_1.jpg?pView=listing',
        h4: "COCA-COLA EDITION WHITE WATCH & TU...",
        rate:1885,
        strike:2695,
        offer:"(40% off)",
        button1:"SILVER DIAL WATCH",
        button2:"TOUCH"

    },
    {
        id: 7,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3220SL03_1.jpg?pView=listing',
        h4: "REFLEX 3.0 DUAL TONED SMART BAND IN MIDLIGHT BLACK & GR...",
        rate:1995,
        strike:2995,
        offer:"(45% off)",
        button1:"RED DIAL WATCH",
        button2:"TOUCH"

    },
    
    {
        id: 8,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/68023PP06W_1.jpg?pView=listing',
        h4: "TEES CAFE BROWN PLASTIC STRAP & BL...",
        rate:2049,
        strike:2995,
        offer:"(32% off)",
        button1:"BROWN DIAL WATCH",
        button2:"TOUCH"

    },  
    {
        id: 9,
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/68023PP05W_1.jpg?pView=listing',
        h4: "REFLEX BEAT PURPLE SMART BAND IN MIDLIGHT BLACK & MO....",
        rate:805,
        strike:895,
        offer:"(10% off)",
        button1:"HIGH QUARTZ MOVEMENT",
        button2:"TOUCH"

    },
    
];



data2.map(function(elem){      
   var image = document.createElement("img")
   var h4 = document.createElement("h4")
   var rate = document.createElement("p")
   var strike = document.createElement("del")
   var offer = document.createElement("p")
   var btn1 = document.createElement("button")
   var btn2 = document.createElement("button")

   var card = document.createElement("div")
   card.className = "mens-watch"
   var price = document.createElement("div")
   price.className = "rate"
   var btns = document.createElement("div")
   btns.className = "btn"

   image.setAttribute("src",elem.image)
   h4.textContent = elem.h4
   
   rate.textContent = `₹${elem.rate}`
   rate.className = "rupee"
   
   strike.textContent = `₹${elem.strike}`

   offer.textContent = elem.offer
   offer.className = "offer"

   btn1.textContent = elem.button1
   btn2.textContent = elem.button2

   card.addEventListener("click", function(){
    popup(elem);
    window.location.href = "../popup/popup.html"
  })


   price.append(rate,strike,offer);
   btns.append(btn1,btn2)
   card.append(image,h4,price,btns)
   document.querySelector("#products-2").append(card);
})
    



function popup(elem){
     localStorage.setItem("popitems",JSON.stringify(elem));
     }
    






    //  function showtotal(){
    //     var total = popitems.reduce(function(acc, item){
    //         return acc + (cartdata.rate);
    //     },0)
    //     document.getElementById("total").textContent = total
    // }
  
    // function increase(index){
    //     cartdata[index].quan++;
    //     localStorage.setItem("cartitems", JSON.stringify(cartdata));
    //     displaydata(cartdata)
    //   showtotal()
    // }
  
    // function decrement(index){
    //     cartdata[index].quan--;
    //     localStorage.setItem("cartitems",JSON.stringify(cartdata));
    //     displaydata(cartdata)
    //   showtotal();
    // }
  
  //   var sorting = document.getElementById("sorter").value
  // console.log(sorting)
  
  // if(sorting == 'h2l'){
  //     cartdata.sort(function(a,b){
  //         return b.price - a.price;
  //     })
  //     displaydata(cartdata);
  // }else if(sorting == 'l2h'){
  //     cartdata.sort(function(a,b){
  //         return a.price - b.price;
  //     })
  //     displaydata(cartdata)
  // }
  
  // function search(){
  //     var searchText = document.getElementById("search").value;
  //     console.log(searchText);
  //     var filterdata = cartdata.filter(function(item){
  //         return cartdata.name.includes(searchText);
  //     });
  //     console.log(filterdata);
  //     displaydata(filterdata);
  // }