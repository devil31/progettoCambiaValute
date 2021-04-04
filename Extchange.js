class Extchange{
    constructor(valuta){
        this.valuta = valuta;
        this.key = 'e63123711c4e9dfdfe1310b4';
    }
    async getExtchange(){
        const responce = await fetch(`https://v6.exchangerate-api.com/v6/${this.key}/latest/${this.valuta}`)
        const data = await responce.json();
        return data
    }

}
