'use-strict';

// var store={
//     var location;
//     var minCustomer;
//     var maxCustomer;
//     var salesAvg;
// }
var store1={
  location: '1st and pike',
  minCustomer: 23,
  maxCustomer: 65,
  salesAvg: 6.3,
};

var store2 ={
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  salesAvg: 1.2
};

var store3={
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  salesAvg: 3.7
};

var store4={
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  salesAvg: 2.3
};

var store5={
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  salesAvg: 4.6
};

var stores=[store1,store2,store3,store4,store5];

var storeContainer= document.getElementById('stores');

var buildsite=function(stores){
  for(var i = 0; i<stores.length; i++){
    var head=document.createElement('h2');
    head.textContent = stores[i].location;
    var statList =document.createElement('ul');

    storeContainer.appendChild(head);
    head.appendChild(statList);

    for (var j = 1; j<4;j++){
      var stat=document.createElement('li');
      stat.setAttribute('id','stats');
      stat.textContent=(Object.entries(stores[i])[j][0]+' '+Object.entries(stores[i])[j][1]);
      statList.appendChild(stat);
    }
  }

};

buildsite(stores);
