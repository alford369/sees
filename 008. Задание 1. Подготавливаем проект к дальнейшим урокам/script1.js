let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD')

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

let q1 = prompt('Введите обязательную статью расходов в этом месяце'),
    q2 = prompt('Во сколько обойдется?'),
    q3 = prompt('Введите обязательную статью расходов в этом месяце'),
    q4 = prompt('Во сколько обойдется?')

appData.expenses.first = q1
appData.expenses.second = q2

alert('Ваш бюджет на день: ' + appData.budget / 30)

console.log(appData.expenses)