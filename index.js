// Get DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmountElement = document.getElementById('total-amount');

// Initialize total amount
let totalAmount = 0;

// Event listener to add expense
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from inputs
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `${expenseName}: $${expenseAmount.toFixed(2)} <span class="remove" onclick="removeExpense(this, ${expenseAmount})">Remove</span>`;
    expenseList.appendChild(listItem);

    // Update total amount
    totalAmount += expenseAmount;
    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Clear form inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});

// Remove expense
function removeExpense(element, amount) {
    element.parentElement.remove();
    totalAmount -= amount;
    totalAmountElement.textContent = totalAmount.toFixed(2);
}
