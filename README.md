Currency Converter

A simple Currency Converter web application that allows users to convert between different currencies using real-time exchange rates.

Features
Converts between multiple currencies
Fetches real-time exchange rates using an API
Simple and responsive UI
Built with HTML, CSS, and JavaScript

Demo
Live Demo (Replace # with your deployed link)

Screenshots

 (Replace # with an actual screenshot)

Tech Stack

HTML - Structure of the application

CSS - Styling and responsive design

JavaScript - Logic for fetching exchange rates and performing calculations


Installation

1. Clone the repository
git clone (https://github.com/Santhoshkumar40/currency-converter.git)
cd currency-converter

2. Open index.html in a browser
Simply double-click index.html or use a live server.

Usage
1. Select the base currency (e.g., USD, EUR)
2. Enter the amount to convert.
3. Select the target currency.
4. Click "Convert" to get real-time exchange rates.

API Integration
This app fetches exchange rates using the ExchangeRate-API (or any preferred API).
To use your own API key:
1. Sign up at the API provider's website.
2. Replace the API key in script.js:

const API_KEY = 'your-api-key';

File Structure

currency-converter/
│── index.html        # Main UI
│── style.css         # Stylesheet
│── script.js         # JavaScript logic
└── README.md         # Project documentation

Future Enhancements

Add a currency selection dropdown with flags
Implement historical exchange rates
Support for multiple conversions at once
Dark mode for better UI

License
This project is open-source and available under the MIT License.
