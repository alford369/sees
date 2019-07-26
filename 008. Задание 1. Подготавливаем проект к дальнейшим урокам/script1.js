let money, time

function start() {
    money = +prompt('Ваш бюджет на месяц?'),
        time = prompt('Введите дату в формате YYYY-MM-DD')

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?')
    }
}

start()


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?')
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 20) {
                appData.expenses[a] = b
                console.log('done')
            } else {
                i = i - 1
            }
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed()
        alert('Ваш бюджет на день: ' + appData.moneyPerDay)
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка')
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?')

            appData.monthIncome = save / 100 / 12 * percent
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome)
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let c = prompt('Статья необязательных расходов?')
            if (typeof (c) === 'string' && typeof (c) != null) {
                appData.optionalExpenses[i] = c
                console.log('done')
            } else {
                i = i - 1
            }
        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)')

        //if (items == 'string' && items != '' && items != null) {
            appData.income = items.split(', ')
            appData.income.push(prompt('Может что-то ещё?'))
            appData.income.sort()
        //}
        console.log('Способы доп. заработка: ')
        appData.income.forEach(function(item, index, array) {
            console.log(`Номер: ${index+1}, способ: ${item}`)
        })
    }

}