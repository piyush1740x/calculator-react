import React, { useState } from 'react';

const Calculator = () => {
  const [value, setvalue] = useState('')
  const handle = (e)=>{
    setvalue(value + e.target.innerText)
  }

  const add = ()=>{
  setvalue(eval(value))
  }
  
const Ac = ()=>{
  setvalue("")
}
const slice = ()=>{
  setvalue(value.toString().slice(0,-1))
}
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 bg-white shadow-lg rounded-lg">
      <input 
          type="text" 
          className="w-full bg-gray-800 text-white text-right p-4 text-2xl rounded-t-lg" 
          readOnly 
          value={value}
        />
        <div className="grid grid-cols-4 gap-2 p-4">
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">7</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">8</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">9</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">/</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">4</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">5</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">6</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">*</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">1</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">2</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">3</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">-</button>
          <button onClick={handle} className="bg-gray-200 p-4 text-xl rounded">0</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">.</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">+</button>
          <button onClick={handle} className="bg-yellow-500 p-4 text-xl text-white rounded">^</button>
          <button onClick={add} className="bg-yellow-500 p-4 text-xl text-white rounded col-span-2">=</button>
          <button onClick={Ac} className="bg-red-500 p-4 text-xl text-white rounded">C</button>
          <button onClick={slice} className="bg-red-500 p-4 text-xl text-white rounded">X</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
