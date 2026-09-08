let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];
let balanceColor = "green";

for(let i=0;i<expenseEntries.length;i++){
    totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
    console.log("el array es: ", expenseEntries);
    console.log(`el valor total es: ${totalExpensesValue}`);
    if(expenseEntries.length !== 0) {
        return totalExpensesValue / expenseEntries.length;;
    }else{
        return 0;
    }
}

function calculateBalance(){
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor(){
    if(calculateBalance() < 0){
        balanceColor = "red";
    }else if(calculateBalance()<budgetValue*0.25){
        balanceColor = "orange";
    }else{
        balanceColor = "green";
    }
    return balanceColor;
}

function calculateCategoryExpenses(category){
    let totalCategory = 0;
    for(let i=0; i<expenseEntries.length;i++){
        if(expenseEntries[i][0]===category){
            totalCategory += expenseEntries[i][1];
        }
    }
    return totalCategory;
}

function calculateLargestCategory(){
    let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let largestCategory = "";
    let largestValue = 0;
    let categoriesData = [];
    for(let category of categories){
        let categoryTotal = calculateCategoryExpenses(category);
        categoriesData.push([category, categoryTotal]);
        if(categoryTotal > largestValue){
            largestValue = categoryTotal;
            largestCategory = category;
        }
    }
    return largestCategory;
}

function addExpenseEntry(values){
    expenseEntries.push(values);
    totalExpensesValue += values[1];
}