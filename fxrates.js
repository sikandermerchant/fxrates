class FxRates{
  constructor(baseCurrency){
    this.baseCurrency = baseCurrency;
    this.apiKey = 'ba02b537b5fc84a26b2d2151';
  }

//Fetch Latest rates
async getLatestRates(){
///await response of the fetch call
const response = await fetch(`https://prime.exchangerate-api.com/v5/ba02b537b5fc84a26b2d2151/latest/${this.baseCurrency}`);
//Only proceed once the fetch is resolved
const resData = await response.json();
return resData;
}
//Change base currency
changeBaseCurrency(baseCurrency){
  this.baseCurrency = baseCurrency;
}
}

