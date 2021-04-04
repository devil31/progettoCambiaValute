
class UI{
    constructor(){
        this.one = document.getElementById("valute-one").value;
        this.two = document.getElementById("valute-two").value;
        this.rate = document.getElementById('rate');  
      this.amountOne = document.getElementById("amount-one").value;
      this.amountTwo= document.getElementById("amount-two").value;
      
    }
    getData(data){
        this.rate.textContent = `1 ${this.one} = ${data.conversion_rates[this.two].toFixed(3)} ${this.two}`;
   document.getElementById("amount-two").value = (data.conversion_rates[this.two]* this.amountOne).toFixed(2);
      
        
    }
}