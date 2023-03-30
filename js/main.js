// Get the canvas element
var ctx = document.getElementById('expenseChart').getContext('2d');
let perData = [];
let datalabel = 'lastMonth';
let filterExpenses = document.getElementById('filter-expenses')
let myDoughnutChart = null;
let totalCash = document.getElementById('total-cash');
let incomeTotal = document.getElementById('incomeTotal');
let expenseTotal = document.getElementById('expenseTotal');



let apiData = {
  lastMonth: {
    total: 7400,
    income: 4441.20,
    expense: 2959.80
  },
  lastYear: {
    total: 74000,
    income: 50000,
    expense: 24000
  }
}



const renderChart = (perData) => {
  var data = {
    labels: ['Income', 'Expense'],
    datasets: [{
      label: datalabel,
      data: perData,
      backgroundColor: [
        '#2b3eb1',
        '#fc7100',
      ],
      borderColor: [
        '#fff',
        '#fff',
      ],
      borderWidth: 5,
      hoverBorderColor: '#fff'
    }]
  };

  if (myDoughnutChart !== null) {
    myDoughnutChart.destroy();
  }

  myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      cutout: '90%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });


}


function calcData(val = 'Month') {
  perData = [];
  if (val === 'Month') {
    perData.push(apiData.lastMonth.income)
    perData.push(apiData.lastMonth.expense)
    totalCash.innerHTML = apiData.lastMonth.total + '$';
    incomeTotal.innerHTML = apiData.lastMonth.income + '$';
    expenseTotal.innerHTML = apiData.lastMonth.expense + '$';
  }
  else if (val === 'Year') {
    perData.push(apiData.lastYear.income)
    perData.push(apiData.lastYear.expense)
    totalCash.innerHTML = apiData.lastYear.total + '$';
    incomeTotal.innerHTML = apiData.lastYear.income + '$';
    expenseTotal.innerHTML = apiData.lastYear.expense + '$';
  }

  renderChart(perData)
  console.log(val)
}
calcData()


filterExpenses.addEventListener('change', function (e) {
  calcData(e.target.value)
})




let mainNav = document.getElementById('mainNav')
let showMenu = document.getElementById('showMenu')
let hidemenu = document.getElementById('hidemenu')

showMenu.addEventListener('click',function(){
  mainNav.className = 'menu-opened';
})
hidemenu.addEventListener('click',function(){
  mainNav.className = 'menu-closed';
})