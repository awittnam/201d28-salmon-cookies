'use strict';

var stores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
console.log(stores);

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  stores.push(this);
}
console.log(Store);

//store info
new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

//customers per hour
Store.prototype.custPerHr = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};

stores[0].custPerHr();

//cookie sales per hour
Store.prototype.cookieSales = function() {
  return Math.round(this.custPerHr() * this.avgSale);
};

stores[0].cookieSales();


Store.tableHours = function(){
  var tblEl = document.getElementById('main-tbl');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbod';
  tblEl.appendChild(tbodyEl);
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    tdEl = document.createElement('td');
    var time = hours[i];
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};
Store.tableHours();

j = 0;

Store.prototype.cookiesPerHour = function(){
  var totalDay = 0;
  var tblEl = document.getElementById('main-tbl');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbod';
  tblEl.appendChild(tbodyEl);
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = stores[j].name;
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    var cookieSale = this.cookieSales();
    totalDay += cookieSale;
    tdEl = document.createElement('td');
    var cookies = cookieSale;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  var trTotal = document.createElement('tr');
  tdEl.textContent = totalDay;
  tblEl.appendChild(trTotal);
};

for(var j = 0; j < 5; j++){
  stores[j].cookiesPerHour();
}
var formEl = document.getElementById('main-form');

function onSubmit(event) {
  event.preventDefault();
  var myFormData = {
    name: event.target.name.value,
    min: parseInt(event.target.min.value),
    max: parseInt(event.target.max.value),
    avg: parseInt(event.target.avg.value),
  };
  new Store(myFormData.name, myFormData.min, myFormData.max, myFormData.avg);
  stores[j].cookiesPerHour();
  j++;
}
formEl.addEventListener('submit', onSubmit);
