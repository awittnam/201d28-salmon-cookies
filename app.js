'use strict'

var firstAndPike = {
  min : 23,
  max : 65,
  avgSale : 6.3,
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHour: function() {
    var output = [];
    for(var i = 0; i <= this.hours.length; i++) {
      output.push (Math.round(this.avgSale * this.custPerHr()));
    }
    return output; //push output to array
  }

  parent : document.getElementById('parent'),
  child : document.createElement(il),
  child.textContent : this.output,
  parent.appendChild(child),
};
console.log(firstAndPike);


var seaTac = {
  min : 3,
  max : 24,
  avgSale : 1.2,
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};

var seattleCenter = {
  min : 11,
  max : 38,
  avgSale : 3.7,
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};

var capitolHill = {
  min : 20,
  max : 38,
  avgSale : 2.3,
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};

var alki = {
  min : 2,
  max : 16,
  avgSale : 4.6,
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};
