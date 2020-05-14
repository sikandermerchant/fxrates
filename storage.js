class LocalStorage{
  constructor(){
    this.baseCurrency;
    this.defaultBaseCurrency = 'USD';
  }
  getBaseRateData(){
if(localStorage.getItem('baseCurrency') === null){
  this.baseCurrency = this.defaultBaseCurrency;
}else{
  this.baseCurrency = localStorage.getItem('baseCurrency');
}
return {
baseCurrency:this.baseCurrency
} 
  }

  setBaseRateData(baseCurrency){
    localStorage.setItem('baseCurrency',baseCurrency);///since we are setting the baseCurrency which is a string input we dont need to wrap it into JSON.stringify as we did in our earlier tasklist and booklist projects
  }
}