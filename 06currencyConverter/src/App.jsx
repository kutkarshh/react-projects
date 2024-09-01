import { useState } from 'react';
import './App.css';

import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(20);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptionList = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convertAmount = () => {
    const amountConverted = amount * currencyInfo[to];
    setConvertedAmount(amountConverted);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat p-10">
      <div className="flex w-full justify-center items-center space-x-40">

        {/* Left Container */}
        <div className="flex-1 max-w-xl  border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/40">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Currency Converter</h1>
          <p className="mb-4">
            Convert currencies easily with our simple and effective currency converter tool.
            Whether you're a traveler, a business owner, or just curious about currency values,
            our converter provides accurate conversion rates in real-time.
          </p>
          <p className="mb-4">
            You can swap between currencies, view detailed conversion rates, and more. Start by
            entering an amount and selecting your desired currencies.
          </p>
          <div className="w-full mt-4">
            <img src="../public/poster.jpg" alt="Currency" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Currency Converter Container */}
        <div className="flex-grow h-full max-w-xl border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptionList}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5 mb-4 p-2">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptionList}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
