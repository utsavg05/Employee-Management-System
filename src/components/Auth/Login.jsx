import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.prevetDefault()
        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-md p-6 bg-zinc-200 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}  className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default Login
