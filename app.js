//Init Local Storage
const storage = new LocalStorage();
//Get Stored baseCurrency data
const storedBaseCurrency = storage.getBaseRateData()

//Init FX rates
const rates = new FxRates(storedBaseCurrency.baseCurrency);

//Init UI
const ui = new UI();

///Get Weather on DOM Load
document.addEventListener('DOMContentLoaded',getLatestRates);


///Change base currency
//event listener
document.getElementById('bc-change-btn').addEventListener('click',(e)=>{
  const baseCurrency = document.getElementById('b-currency').value;
  console.log(baseCurrency);

  //Change baseCurrency by calling the changeBaseCurrency Class
  rates.changeBaseCurrency(baseCurrency);

  ///Set changed baseCurrency to persist localstorage
storage.setBaseRateData(baseCurrency);

  //Get Latest rates using the new base currency
  getLatestRates(baseCurrency);

  ///Close Modal
  $('#baseCurrencyModal').modal('hide'); ///we have use jquery here.

});


///Function for getting latest ratea
function getLatestRates(){
  rates.getLatestRates()
  .then(res =>{
    console.log(res);
    console.log(res.conversion_rates);
    console.log(res.conversion_rates.AED);
    console.log(res.base);
    ui.render(res);
  })
  .catch(err =>{
    console.log(err);
  });
}



