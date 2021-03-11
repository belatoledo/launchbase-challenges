const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0  
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if(transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }       
}

createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

console.log(`balance: ${user.balance}`)

//Relatórios - PARTE 1

function getHigherTransactionByType(type) {

    let higherTransaction
    let higherValue = 0

    for(let transaction of user.transactions) {
        if(type == transaction.type && higherValue < transaction.value) {
          higherValue = transaction.value
          higherTransaction = transaction
        }        
    } 
    return higherTransaction
}

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

//PARTE 2

function getAverageTransactionValue() {
      
    let sumOfTransactions = 0

    for(let transaction of user.transactions) {
        sumOfTransactions += transaction.value
    } 
    return sumOfTransactions / user.transactions.length            
}
getAverageTransactionValue()

console.log(getAverageTransactionValue())

//PARTE 3

function getTransactionsCount() {
  let countCredit = 0
  let countDebit = 0

  for(let transaction of user.transactions) {

    if(transaction.type == 'credit') {
      countCredit++
    } else {
      countDebit++
    }   
  }

  return {
    credit: countCredit,
    debit: countDebit
  }
}

console.log(getTransactionsCount())