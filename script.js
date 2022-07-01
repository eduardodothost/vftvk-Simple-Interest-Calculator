function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100.00;
    var years = new Date().getFullYear()+parseInt(years);
    if(principal >=0){
    /*Send the interest calculation to the result span */
    document.getElementById("result").innerText=
    "If you deposit "+toUSD(principal)+
    "\nat an interest rate of "+rate+"%"+ 
    "\nYou will recieve an amount of "+
    toUSD(interest) +
    ",\n in the year "+years;
    }
    else {
        alert("Please enter a non-negative number.")
    }
   
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
     /*Send the Rate input to the rate_val span */
    document.getElementById("rate_val").innerText=rateval+"%";
}

function toUSD(money) {
    var value = new Intl.NumberFormat('en-US', 
    { style: 'currency', currency: 'USD' } 
  ).format(money);
        return value;
       
}