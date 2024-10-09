// making active btns
let convertedGtPrice1,convertedGtPrice2;
const allBtn = document.getElementsByClassName("seat");

for(const btn of allBtn){
 btn.addEventListener("click",function(event){
    const name = event.target.innerText;
    const busSeat = document.getElementById("bus-seat").innerText;
    const busSeatNum = parseInt(busSeat);
    const netSeat = busSeatNum - 1;

    const seatNum = document.getElementById("seat-num").innerText;

    const convertedSeat = parseInt(seatNum);
   
    if(convertedSeat + 1 > 4){
        alert("You can't book more than 4 seats");  
       return;
    }
    else{
        createDiv(name);
        event.target.style.backgroundColor = "#1DD100";
        event.target.setAttribute("disabled",false);
        event.target.style.color = "white";
        const totalSeat = convertedSeat + 1; 
        document.getElementById("seat-num").innerText = totalSeat;

        document.getElementById("bus-seat").innerText = netSeat;

        const netPrice = totalSeat*550;
        const gtPrice = totalSeat*550;
        convertedGtPrice1 = gtPrice - (gtPrice*.20);
        convertedGtPrice2 = gtPrice - (gtPrice*.15);

        document.getElementById("total-price").innerText = netPrice;
        document.getElementById("grand-total").innerText = gtPrice;
 
    }
 })
}

const offer = document.getElementById("apply");
offer.addEventListener("click",function name(event) {
    const coupon = document.getElementById("coupon");
    if(coupon.value === "Couple 20"){
        document.getElementById("grand-total").innerText = convertedGtPrice1; 
    }
    if(coupon.value === "NEW15"){
        document.getElementById("grand-total").innerText = convertedGtPrice2;  
    }
})



const next = document.getElementById("next");
next.addEventListener("click",function() {
    const email = document.getElementById("email").value;
    const passenger = document.getElementById("passenger").value;
    const phone = document.getElementById("phone").value;
    // if(email === undefined || passenger === undefined || phone === undefined){
    //     alert("data");
    // }
    console.log(typeof email);
    console.log(typeof passenger);
    console.log(typeof phone);
  
    if(email === ""){
        alert("Enter Email");
        
    }
    else if(passenger === ""){
        alert("Enter Passenger");
        
    }
    else if(phone === ""){
        alert("Enter Phone Number");   
    }
    else{
       
        hideElementById("header");
        hideElementById("footer");
        hideElementById("seat-section");
        hideElementById("paribahan");
        showElementById("success");

     }

   
    
})