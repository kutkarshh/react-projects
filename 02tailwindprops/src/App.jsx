import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [bgColor, setBgColor] = useState("bg-gray-400")

  const testUser = [{
    id: "1",
    name: "Riene",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint laborum voluptas ipsam obcaecati rerum cum, laboriosam culpa."
  }, {
    id: "2",
    name: "Erene",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex. Quam hic iure dolore ullam possimus veritatis facilis tempore iste!"
  }]

  const bgColorChange = (e) => {
    const newBgColor = e.target.value;
    const colorMapping = {
      red: "bg-red-600",
      lime: "bg-lime-400",
      lavender: "bg-purple-300",
      blue: "bg-blue-600",
      pink: "bg-pink-500",
      black: "bg-black",
      yellow: "bg-yellow-400",
      green: "bg-green-600",
    }
    if (Object.keys(colorMapping).includes(newBgColor)) {
      setBgColor(colorMapping[newBgColor]);
    }
  }

  return (
    <section className={`flex flex-col h-screen ${bgColor}`}>
      {/* Heading at the Top (15% of the total view height) */}
      <div className="flex justify-center items-center flex-wrap flex-shrink bg-yellow-200 text-black p-3 text-1xl rounded-xl m-5">
        <h1>Hello From Vite + React + TailwindCSS</h1>
      </div>

      {/* Cards in the Mid Section (Taking up remaining 85% minus the height of the color buttons) */}
      <div className="flex justify-center items-center overflow-y-auto">
        <div className="inline-flex flex-wrap justify-center items-center">
          {testUser && testUser.map((user) => (
            <Card name={user.name} content={user.content} key={user.id} />
          ))}
        </div>
      </div>

      {/* Color Buttons at the Bottom */}
      <div className="flex justify-center items-center flex-wrap fixed bottom-0 self-center p-4 bg-gray-100 rounded-2xl mb-5" >
        <button onClick={bgColorChange} value="red" className="shadow-lg p-2 m-2 bg-red-600 text-white rounded">Red</button>
        <button onClick={bgColorChange} value="lime" className="shadow-lg p-2 mx-2 bg-lime-600 text-white rounded">Lime</button>
        <button onClick={bgColorChange} value="lavender" className="shadow-lg p-2 mx-2 bg-purple-300 text-black rounded">Lavender</button>
        <button onClick={bgColorChange} value="blue" className="shadow-lg p-2 mx-2 bg-blue-600 text-white rounded">Blue</button>
        <button onClick={bgColorChange} value="pink" className="shadow-lg p-2 mx-2 bg-pink-500 text-white border border-gray-300 rounded">Pink</button>
        <button onClick={bgColorChange} value="yellow" className="shadow-lg p-2 mx-2 bg-yellow-400 text-black rounded">Yellow</button>
        <button onClick={bgColorChange} value="black" className="shadow-lg p-2 mx-2 bg-black text-white rounded">Black</button>
        <button onClick={bgColorChange} value="green" className="shadow-lg p-2 mx-2 bg-green-600 text-white rounded">Green</button>
      </div>
    </section>


  )
}

export default App
