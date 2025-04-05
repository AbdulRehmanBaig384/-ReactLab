import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('')
  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllow) str += '1234567890'
    if (charAllow) str += '~!@#$%^&*()_+:{}[]'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  const copyPassword = useCallback(() => {
    passRef.current?.select();// all the value in the input box is elected
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllow, charAllow, generatePassword])

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Password Generator</h1>
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            value={password}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4 text-gray-700">
          <div className="flex items-center justify-between">
            <label className="text-sm">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="checkbox"
              checked={numberAllow}
              id="numberinput"
              onChange={() => setNumberAllow((prev) => !prev)}
              className="h-4 w-4"
            />
            <label htmlFor="numberinput" className="text-sm">Include Numbers</label>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="checkbox"
              checked={charAllow}
              id="charinput"
              onChange={() => setCharAllow((prev) => !prev)}
              className="h-4 w-4"
            />
            <label htmlFor="charinput" className="text-sm">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


