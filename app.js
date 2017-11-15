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

// Store.prototype.cookiesPerHour = function() {
//   for(var i = 0; i < 15; i++) {
//     var cookieSales = this.cookieSales();
//     var newLi = document.createElement('li');
//     var newContent = document.createTextNode(cookieSales + ' cookies');
//     newLi.appendChild(newContent);
//     var current = document.getElementById('li1');
//     document.body.insertBefore(newLi, current);
//   }
// };

// for(var i = 0; i < 5; i++)
//   stores[i].cookiesPerHour();


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


// Store.prototype.cookiesPerHour = function() {
//   for(var i = 0; i < 15; i++) {
//     if (i < 15){
//       var cookieSales = this.cookieSales();
//       this.totalDay += cookieSales;
//       //this.saleResults(cookieSales);
//       var newLi = document.createElement('li');
//       var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//       newLi.appendChild(newContent);
//       var current = document.getElementById('li1');
//       document.body.insertBefore(newLi, current);
//     } else {
//       var newLiZ = document.createElement('li');
//       var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//       newLiZ.appendChild(newContentZ);
//       var currentZ = document.getElementById('li1');
//       document.body.insertBefore(newLiZ, currentZ);
//       break;
//     }
//   }
// };
//
// stores[0].cookiesPerHour();
//  custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;

// Do not use this syntax for creating instance methods


// Person.sayAge = function() {
//   console.log('Constructor this', this);
// };



// Create all of your prototype methods

// Iterate through your methods to populate all of your dynamic store data

// Iterate through your list of Stores to render each to the DOM
// Don't forget to create you tables!! ;-)
// var firstAndPike = {
//   min : 23,
//   max : 65,
//   avgSale : 6.3,
//   saleResults: [],
//   totalDay:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   cookieSales: function() {
//     return Math.round(this.custPerHr() * this.avgSale);
//   },
//   cookiesPerHour: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15){
//         var cookieSales = this.cookieSales();
//         this.totalDay += cookieSales;
//         this.saleResults.push(cookieSales);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLiZ = document.createElement('li');
//         var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//         newLiZ.appendChild(newContentZ);
//         var currentZ = document.getElementById('li1');
//         document.body.insertBefore(newLiZ, currentZ);
//         break;
//       }
//     }
//   },
// };
// console.log(firstAndPike);
// firstAndPike.cookiesPerHour ();
//
//
//
// var seaTac = {
//   min: 3,
//   max: 24,
//   avgSale: 1.2,
//   saleResults: [],
//   totalDay:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   cookieSales: function() {
//     return Math.round(this.custPerHr() * this.avgSale);
//   },
//   cookiesPerHour: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15){
//         var cookieSales = this.cookieSales();
//         this.totalDay += cookieSales;
//         this.saleResults.push(cookieSales);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLiZ = document.createElement('li');
//         var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//         newLiZ.appendChild(newContentZ);
//         var currentZ = document.getElementById('li2');
//         document.body.insertBefore(newLiZ, currentZ);
//         break;
//       }
//     }
//   },
// };
// console.log(seaTac);
// seaTac.cookiesPerHour ();
//
// var seattleCenter = {
//   min: 11,
//   max: 38,
//   avgSale: 3.7,
//   saleResults: [],
//   totalDay:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   cookieSales: function() {
//     return Math.round(this.custPerHr() * this.avgSale);
//   },
//   cookiesPerHour: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15){
//         var cookieSales = this.cookieSales();
//         this.totalDay += cookieSales;
//         this.saleResults.push(cookieSales);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li3');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLiZ = document.createElement('li');
//         var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//         newLiZ.appendChild(newContentZ);
//         var currentZ = document.getElementById('li3');
//         document.body.insertBefore(newLiZ, currentZ);
//         break;
//       }
//     }
//   },
// };
// console.log(seattleCenter);
// seattleCenter.cookiesPerHour ();
//
// var capitolHill = {
//   min : 20,
//   max : 38,
//   avgSale : 2.3,
//   saleResults: [],
//   totalDay:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   cookieSales: function() {
//     return Math.round(this.custPerHr() * this.avgSale);
//   },
//   cookiesPerHour: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15){
//         var cookieSales = this.cookieSales();
//         this.totalDay += cookieSales;
//         this.saleResults.push(cookieSales);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLiZ = document.createElement('li');
//         var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//         newLiZ.appendChild(newContentZ);
//         var currentZ = document.getElementById('li4');
//         document.body.insertBefore(newLiZ, currentZ);
//         break;
//       }
//     }
//   },
// };
// console.log(capitolHill);
// capitolHill.cookiesPerHour ();
//
// var alki = {
//   min: 2,
//   max: 16,
//   avgSale: 4.6,
//   saleResults: [],
//   totalDay:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   custPerHr: function() {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   cookieSales: function() {
//     return Math.round(this.custPerHr() * this.min);
//   },
//   cookiesPerHour: function() {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15){
//         var cookieSales = this.cookieSales();
//         this.totalDay += cookieSales;
//         this.saleResults.push(cookieSales);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         document.body.insertBefore(newLi, current);
//       } else {
//         var newLiZ = document.createElement('li');
//         var newContentZ = document.createTextNode('Total: ' + this.totalDay);
//         newLiZ.appendChild(newContentZ);
//         var currentZ = document.getElementById('li5');
//         document.body.insertBefore(newLiZ, currentZ);
//         break;
//       }
//     }
//   },
// };
// console.log(alki);
// alki.cookiesPerHour ();
