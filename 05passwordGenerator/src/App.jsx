import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumericAllowed, setIsNumericAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false); // State to track if the button is clicked
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility


  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumericAllowed) str += "0123456789";
    if (isCharactersAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumericAllowed, isCharactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef?.current?.select();
    passwordRef?.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
    setIsCopied(true); // Set the button to active state
    setIsModalOpen(true); // Show the modal

    setTimeout(() => {
      setIsCopied(false); // Revert back to default state after 2 seconds
      setIsModalOpen(false); // Hide the modal after 2 seconds
    }, 1500);

  }, [password, length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumericAllowed, isCharactersAllowed, passwordGenerator]);

  return (
    <div className="bg-rainbow-animation h-screen w-screen flex items-center justify-center pt-10">
      <div className='w-full max-w-6xl mx-auto shadow-lg rounded-2xl px-6 py-10  text-lime-500 bg-gray-800'>
        <h1 className='text-5xl text-center my-6 font-bold'>Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-6">
          <input
            type='text'
            value={password}
            className='outline-none w-screen py-3 px-5 text-2xl'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='bg-slate-600 w-1/3 p-6 text-2xl font-semibold flex items-center justify-center gap-x-2'
            onClick={copyPasswordToClipboard}
          >
            {isCopied ? (
              <div className="text-white flex items-center gap-x-2">
                Copied!
                <img src="../public/copied.svg" alt="Copied Icon" className="size-6" />
              </div>
            ) : (
              <>
                Copy
                <img src="../public/copy.svg" alt="Copied Icon" className="size-6" />
              </>
            )}
          </button>
        </div>
        <div className='flex justify-around text-2xl gap-x-6 bg-slate-600 rounded-lg p-5'>
          <div className='flex items-center gap-x-3'>
            <input
              type="range"
              min={6}
              max={70}
              value={length}
              className='w-96 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[lime]'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span>{length}</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              id='numeric'
              checked={isNumericAllowed}
              onChange={() => setIsNumericAllowed(!isNumericAllowed)}
            />
            <label htmlFor="numeric">Numbers</label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              id='characters'
              checked={isCharactersAllowed}
              onChange={() => setIsCharactersAllowed(!isCharactersAllowed)}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        // <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-slate-600 p-4 rounded-lg shadow-lg fixed bottom-20'>
          <p className='text-lg text-white font-semibold'>Copied to clipboard!</p>
        </div>
        // </div>
      )}
    </div>
  );
}

export default App;
