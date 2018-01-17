
function sortOfPriceLow(commodityList) {
   for (var i = 0 ; i < commodityList.length - 1; i ++) {

     for (var k = 0; k < commodityList.length - i - 1; k ++) {
       var temp;
       if (commodityList[k].price > commodityList[k + 1].price) {
         temp = commodityList[k];
         commodityList[k] = commodityList[k + 1];
         commodityList[k + 1] = temp;
       }
     }
   }
   return commodityList;
 }

 function sortOfPriceHigh(commodityList) {
    for (var i = 0 ; i < commodityList.length - 1; i ++) {
      for (var k = 0; k < commodityList.length - i - 1; k ++) {
        var temp;
        if (commodityList[k].price < commodityList[k + 1].price) {
          temp = commodityList[k];
          commodityList[k] = commodityList[k + 1];
          commodityList[k + 1] = temp;
        }
      }
    }
    return commodityList;
  }

 function sortOfSalesHigh(commodityList) {

   for (var i = 0 ; i < commodityList.length - 1; i ++) {
     for (var k = 0; k < commodityList.length - 1 - i; k ++) {
       var temp;
       if (commodityList[k].salesVolume < commodityList[k + 1].salesVolume) {
         temp = commodityList[k];
         commodityList[k] = commodityList[k + 1];
         commodityList[k + 1] = temp;
       }
     }
   }

  return commodityList;

 }

 function sortOfSalesLow(commodityList) {

   for (var i = 0 ; i < commodityList.length - 1; i ++) {
     for (var k = 0; k < commodityList.length - 1 - i; k ++) {
       var temp;
       if (commodityList[k].salesVolume > commodityList[k + 1].salesVolume) {
         temp = commodityList[k];
         commodityList[k] = commodityList[k + 1];
         commodityList[k + 1] = temp;
       }
     }
   }

    return commodityList;

 }

 function sortOfCreditGood(commodityList) {

   for (var i = 0 ; i < commodityList.length - 1; i ++) {
     for (var k = 0; k < commodityList.length - 1 -i; k ++) {
       var temp;
       if (commodityList[k].evaluate < commodityList[k + 1].evaluate) {
         temp = commodityList[k];
         commodityList[k] = commodityList[k + 1];
         commodityList[k + 1] = temp;
       }
     }
   }
   return commodityList;
 }

 function sortOfCreditBad(commodityList) {

   for (var i = 0 ; i < commodityList.length - 1; i ++) {
     for (var k = 0; k < commodityList.length - 1 -i; k ++) {
       var temp;
       if (commodityList[k].evaluate > commodityList[k + 1].evaluate) {
         temp = commodityList[k];
         commodityList[k] = commodityList[k + 1];
         commodityList[k + 1] = temp;
       }
     }
   }
   return commodityList;
 }

 module.exports = {
  sortOfPriceLow: sortOfPriceLow,
  sortOfPriceHigh: sortOfPriceHigh,

  sortOfSalesHigh:sortOfSalesHigh,
  sortOfSalesLow:sortOfSalesLow,

  sortOfCreditGood,sortOfCreditGood,
  sortOfCreditBad:sortOfCreditBad,
}
