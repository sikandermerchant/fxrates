class UI{
  constructor(){
    this.baseCurrency = document.getElementById('base-currency');
    this.aed = document.getElementById('rate-aed');
    this.chf = document.getElementById('rate-chf');
    this.cny = document.getElementById('rate-cny');
    this.eur = document.getElementById('rate-eur');
    this.gbp = document.getElementById('rate-gbp');
    this.inr = document.getElementById('rate-inr');
    this.jpy = document.getElementById('rate-jpy');
    this.rub = document.getElementById('rate-rub');
  }

  render(rate){
  this.baseCurrency.textContent = `Base Currency: ${rate.base}`;
  this.aed.textContent = rate.conversion_rates.AED;
  this.chf.textContent = rate.conversion_rates.CHF;
  this.cny.textContent = rate.conversion_rates.CNY;
  this.eur.textContent = rate.conversion_rates.EUR;
  this.gbp.textContent = rate.conversion_rates.GBP;
  this.inr.textContent = rate.conversion_rates.INR;
  this.jpy.textContent = rate.conversion_rates.JPY;
  this.rub.textContent = rate.conversion_rates.RUB;
  }
}

