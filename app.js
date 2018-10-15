
'use-strict';


var storeContainer = document.getElementById('salesData');
var stores=[];
var totalArr=[];
var truTotal=0;

var Store=function(name,minPatrons,maxPatrons,avgSales){
  this.name=name;
  this.minPatrons=minPatrons;
  this.maxPatrons=maxPatrons;
  this.avgSales=avgSales;
  this.hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  this.day=[];
  this.total=0;
  stores.push(this);
};

Store.prototype.customersOneHour=function(){//this function runs one hour
  var thisVisitors=Math.floor(Math.random()*(this.maxPatrons-this.minPatrons+1)+this.minPatrons);
  var thisSales=Math.round(thisVisitors*this.avgSales);
  this.total+=thisSales;
  return thisSales;
};

Store.prototype.run1Day=function(){
  if (!this.day[0]){
    for (var i = 0; i <this.hours.length; i++){
      this.day.push(this.customersOneHour());
    }
  }
};

Store.prototype.render = function(){
  var tableTop=document.getElementById('tHeader');
  var trEl=document.createElement('tr'); //each store will be its own table row
  var thEl=document.createElement('th');
  trEl.setAttribute('id','storeName');
  thEl.textContent = this.name;
  tableTop.appendChild(trEl);
  trEl.appendChild(thEl);

  for (var j = 0; j<this.hours.length;j++){ //creates cells for each hour and appends them to the table
    var stat=document.createElement('td');
    stat.setAttribute('id','stats');
    stat.textContent=`${this.day[j]}`;
    trEl.appendChild(stat);
  }
  var fullSales = document.createElement('td');
  fullSales.textContent=(this.total);
  trEl.appendChild(fullSales);
};

new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capitol Hill',20,38,2.3);
new Store('Alki',2,16,4.6);


var buildFooter=function(){
  var tFoot=document.createElement('tfoot');//create footer row
  var th=document.createElement('th');//create row header
  th.textContent=('Total sales per hour');//assign a title
  tFoot.appendChild(th);//append the header to the row
  totalArr=[];
  truTotal=0;

  for (var i=0; i<=stores[0].hours.length; i++){//to get 14 indeces
    var total=0;
    var tdEl= document.createElement('td');
    for (var j=0;j<stores.length;j++){//to add all stores at each index
      total+=stores[j].day[i];
    }
    if (i===stores[0].hours.length){
      tdEl.textContent=truTotal;
      tFoot.appendChild(tdEl);
    }else{
      totalArr[i]=total;
      tdEl.textContent=(totalArr[i]);
      tFoot.appendChild(tdEl);//append the cell to the row
    }
  }
  storeContainer.appendChild(tFoot);
};

var buildTable = function(){

  //fencepost the top row to ensure it only creates one header line
  var tTop = document.createElement('thead');
  tTop.setAttribute('id','tHeader');
  storeContainer.appendChild(tTop);
  var title = document.createElement('th');
  title.textContent=('Store Location');
  tTop.appendChild(title);
  for (var i = 0; i<stores[0].hours.length; i++){
    var hrTd = document.createElement('th');
    hrTd.textContent=(stores[0].hours[i]);
    console.log('appending hour'+stores[0].hours[i]);
    tTop.appendChild(hrTd);
  }
  var total= document.createElement('th');
  total.textContent=('Total Sales');
  tTop.appendChild(total);

  //render each store and append it to the table.
  for (i= 0;i<stores.length; i++){
    stores[i].run1Day();
    console.log(stores);
    stores[i].render();
  }
  buildFooter();
};


buildTable();


var form = document.getElementById('newStoreForm');

console.log(form);

var newStore = function (submit) {
  submit.preventDefault();
  var location=submit.target.location.value;
  var minCustomer=submit.target.minCustomers.value;
  var maxCustomer=submit.target.maxCustomers.value;
  var averageSales=submit.target.averageSales.value;
  var x = new Store(location,minCustomer,maxCustomer,averageSales);
  x.run1Day();
  stores.push(x);
  storeContainer.deleteTFoot();
  x.render();
  buildFooter();
};

form.addEventListener('submit', newStore, false);


// // var store={
// //     var location;
// //     var minCustomer;
// //     var maxCustomer;
// //     var salesAvg;
// var hours;
// var hourlyStats;
// // }

// var store1={
//   location: '1st and pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   salesAvg: 6.3,
//   hourlyStats:[],
//   dailyStats:[],
//   openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
// };

// var store2 ={
//   location: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   salesAvg: 1.2,
//   hourlyStats:[],
//   dailyStats:[],
//   openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
// };

// var store3={
//   location: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   salesAvg: 3.7,
//   hourlyStats:[],
//   dailyStats:[],
//   openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
// };

// var store4={
//   location: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   salesAvg: 2.3,
//   hourlyStats:[],
//   dailyStats:[],
//   openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
// };

// var store5={
//   location: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   salesAvg: 4.6,
//   hourlyStats:[],
//   dailyStats:[],
//   openHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
// };

// var customersPerHour=function(passed){
//   var reStore=passed;
//   console.log(reStore.length);
//   for (var x=0;x<reStore.length;x++){
//     var store=reStore[x];
//     console.log (store);
//     var customersPerDay=[];
//     var cookiesPerDay=[];
//     //var totalcustomers;
//     //var totalcookies;
//     for (var i=0;i<store.openHours.length;i++){
//       customersPerDay[i]= Math.floor(Math.random()*(store.maxCustomer-store.minCustomer+1)+store.minCustomer);
//       cookiesPerDay[i]=Math.round(customersPerDay[i]*store.salesAvg);
//       //totalcookies+=cookiesPerDay[i];
//       //totalcustomers+=customersPerDay[i];
//     }
//     // store.dailyStats=[totalcustomers,totalcookies];
//     store.hourlyStats=[customersPerDay,cookiesPerDay];
//     reStore[i]=store;
//     if (x===5){
//       break;
//     }
//   }
//   return reStore;
// };
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==//



// var incStores=[store1,store2,store3,store4,store5];

// var stores=customersPerHour(incStores);

// var storeContainer= document.getElementById('stores');

// var buildsite=function(stores){

//   for(var i = 0; i<stores.length; i++){ // creates a new entry per store that  we have
//     var head=document.createElement('h2'); //each store will be its own  h2
//     head.textContent = stores[i].location;
//     var statList =document.createElement('ul');

//     storeContainer.appendChild(head);
//     head.appendChild(statList);

//     for (var j = 1; j<stores[i].openHours.length;j++){ //prints the information of each store to the webpage, as an unordered list
//       var stat=document.createElement('li');
//       stat.setAttribute('id','stats');
//       stat.textContent=`${stores[i].openHours[j]}: ${stores[i].hourlyStats[1][j]}`;
//       statList.appendChild(stat);
//     }
//     // for (var n = 0; n<stores[i].hours; n++){// prints an unordered list containing the daily sales stats of each store as an unordered list
//     //   var sales=document.createElement('li');
//     //   stat.setAttribute('id','stats');
//     //   stat.textcontent=(companyLeger.storesEOD[i]'');
//     // }
//   }

// };

// buildsite(stores);
