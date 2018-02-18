var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};

var companySalesData = [{
        name: "Telus",
        province: "BC",
        sales: [100, 200, 400]
    },
    {
        name: "Bombardier",
        province: "AB",
        sales: [80, 20, 10, 100, 90, 500]
    },
    {
        name: "Telus",
        province: "SK",
        sales: [500, 100]
    }
];

function calculateSalesTax(salesData, taxRates) {
    // Implement your code here
    var tempObj = {};
    var returnObj = {};
    for (x in salesData) {
        var totalSales = 0;
        for (y in salesData[x].sales) {
            totalSales += salesData[x].sales[y];
        }
        if (tempObj[x] === undefined) {
            tempObj[x] = {};
        }
        tempObj[x].totalSales = totalSales;
        tempObj[x].name = salesData[x].name;
        tempObj[x].province = salesData[x].province;
        tempObj[x].totalTaxes = tempObj[x].totalSales * taxRates[tempObj[x].province];

    }
    //console.log(tempObj);
    for (x in tempObj) {
      var company = tempObj[x];
      if (returnObj[company.name] === undefined ) {
        returnObj[company.name] = {}
        returnObj[company.name].totalSales = company.totalSales;
        returnObj[company.name].totalTaxes = company.totalTaxes;
      } else {
        returnObj[company.name].totalSales += company.totalSales;
        returnObj[company.name].totalTaxes += company.totalTaxes;
      }

    }
    return returnObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/