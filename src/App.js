import React, {useState} from 'react';

function App() {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} logged in`)
    console.log(pass)
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
        <p>Enter Your Credentials</p>
        <form onSubmit={handleSubmit}className="login-form">
          <input className="form-input-name" type="text" placeholder="Username..." required
          onChange={(e) => setName(e.target.value)} />
          <input className="form-input-password" type="password" placeholder="Password..." required 
          onChange={(e) => setPass(e.target.value)} />
          <button className="button" type="submit">Login</button>
          <p>Need an account? <a href='/'>Register here</a></p>
        </form>
    </div>
  )
}

export default App;