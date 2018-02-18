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
  var resultsObj = {};
  for (i in salesData) {

    let province = salesData[i].province;
    let name = salesData[i].name;
    let sales = salesData[i].sales;
    let provincialTaxRate = taxRates[province];

    if (resultsObj[name] === undefined) {
      resultsObj[name] = {};
    }
    if (resultsObj[name]['totalSales'] === undefined) {
      resultsObj[name]['totalSales'] = totalSales(sales);
      resultsObj[name]['totalTaxes'] = resultsObj[name]['totalSales'] * provincialTaxRate;
    } else {
      resultsObj[name]['totalTaxes'] = resultsObj[name]['totalTaxes'] + totalSales(sales) * provincialTaxRate;
      resultsObj[name]['totalSales'] += totalSales(sales);
    }
  }

  return resultsObj;
}

const totalSales = (arr) => arr.reduce((sum, newArr) => sum += newArr, 0);

var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results);
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