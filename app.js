'use-strict';

// var store={
//     var location;
//     var minCustomer;
//     var maxCustomer;
//     var salesAvg;
var hours;
var hourlyStats;
// }

var store1={
  location: '1st and pike',
  minCustomer: 23,
  maxCustomer: 65,
  salesAvg: 6.3,
  hourlyStats:[],
  dailyStats:[],
  openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
};

var store2 ={
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  salesAvg: 1.2,
  hourlyStats:[],
  dailyStats:[],
  openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
};

var store3={
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  salesAvg: 3.7,
  hourlyStats:[],
  dailyStats:[],
  openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
};

var store4={
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  salesAvg: 2.3,
  hourlyStats:[],
  dailyStats:[],
  openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
};

var store5={
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  salesAvg: 4.6,
  hourlyStats:[],
  dailyStats:[],
  openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
};

var customersPerHour=function(passed){
  var reStore=passed;
  console.log(reStore.length);
  for (var x=0;x<reStore.length-1;x++){
    var store=reStore[x];
    console.log (store);
    var customersPerDay=[];
    var cookiesPerDay=[];
    //var totalcustomers;
    //var totalcookies;
    for (var i=0;i<store.openHours.length;i++){
      customersPerDay[i]= Math.floor(Math.random()*(store.maxCustomer-store.minCustomer+1)+store.minCustomer);
      cookiesPerDay[i]=Math.round(customersPerDay[i]*store.salesAvg);
      //totalcookies+=cookiesPerDay[i];
      //totalcustomers+=customersPerDay[i];
    }
    // store.dailyStats=[totalcustomers,totalcookies];
    store.hourlyStats=[customersPerDay,cookiesPerDay];
    reStore[i]=store;
    if (x===4){
      break;
    }
  }
  return reStore;
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==//



var incStores=[store1,store2,store3,store4,store5];

var stores=customersPerHour(incStores);

var storeContainer= document.getElementById('stores');

var buildsite=function(stores){

  for(var i = 0; i<stores.length; i++){ // creates a new entry per store that  we have
    var head=document.createElement('h2'); //each store will be its own  h2
    head.textContent = stores[i].location;
    var statList =document.createElement('ul');

    storeContainer.appendChild(head);
    head.appendChild(statList);

    for (var j = 1; j<stores[i].openHours.length;j++){ //prints the information of each store to the webpage, as an unordered list
      var stat=document.createElement('li');
      stat.setAttribute('id','stats');
      stat.textContent=`${stores[i].openHours[j]}: ${stores[i].hourlyStats[1][j]}`;
      statList.appendChild(stat);
    }
    // for (var n = 0; n<stores[i].hours; n++){// prints an unordered list containing the daily sales stats of each store as an unordered list
    //   var sales=document.createElement('li');
    //   stat.setAttribute('id','stats');
    //   stat.textcontent=(companyLeger.storesEOD[i]'');
    // }
  }

};

buildsite(stores);
