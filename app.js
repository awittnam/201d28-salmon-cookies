'use strict';

var firstAndPike = {
  min : 23,
  max : 65,
  avgSale : 6.3,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiesales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i < this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookiesales() + ' cookies');
      newLi.appendChild(newContent);
      var current = document.getElementById('li1');
      document.body.insertBefore(newLi, current);
    }
    return output;
  },
};
console.log(firstAndPike);
firstAndPike.cookiesPerHour ();



var seaTac = {
  min : 3,
  max : 24,
  avgSale : 1.2,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiesales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i < this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookiesales() + ' cookies');
      newLi.appendChild(newContent);
      var current = document.getElementById('li2');
      document.body.insertBefore(newLi, current);
    }
    return output;
  },
};
console.log(seaTac);
seaTac.cookiesPerHour ();

var seattleCenter = {
  min : 11,
  max : 38,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiesales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i < this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookiesales() + ' cookies');
      newLi.appendChild(newContent);
      var current = document.getElementById('li3');
      document.body.insertBefore(newLi, current);
    }
    return output;
  },
};
console.log(seattleCenter);
seattleCenter.cookiesPerHour ();

var capitolHill = {
  min : 20,
  max : 38,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiesales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i < this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookiesales() + ' cookies');
      newLi.appendChild(newContent);
      var current = document.getElementById('li4');
      document.body.insertBefore(newLi, current);
    }
    return output;
  },
};
console.log(capitolHill);
capitolHill.cookiesPerHour ();

var alki = {
  min : 2,
  max : 16,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiesales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i < this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
      var newLi = document.createElement('li');
      var newContent = document.createTextNode(this.hours[i] + ': ' + this.cookiesales() + ' cookies');
      newLi.appendChild(newContent);
      var current = document.getElementById('li5');
      document.body.insertBefore(newLi, current);
    }
    return output;
  },
};
console.log(alki);
alki.cookiesPerHour ();
