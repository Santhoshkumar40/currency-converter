document.addEventListener("DOMContentLoaded", async () => {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result");

    const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

    async function getCurrencies() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return Object.keys(data.rates);
    }
git
    async function populateCurrencies() {
        const currencies = await getCurrencies();
        currencies.forEach(currency => {
            fromCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
            toCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
        });
        fromCurrency.value = "USD";
        toCurrency.value = "EUR";
    }

    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            resultText.innerText = "Please enter a valid amount.";
            return;
        }

        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        const rate = data.rates[toCurrency.value] / data.rates[fromCurrency.value];
        const convertedAmount = (amount * rate).toFixed(2);

        resultText.innerText = `${amount} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
    }

    convertButton.addEventListener("click", convertCurrency);
    await populateCurrencies();
});
