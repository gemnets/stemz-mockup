import logo from './logo.svg';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      <header className="App-header text-center p-4 bg-white shadow-xl rounded-lg">
        <img src={logo} className="App-logo w-32 h-32 mx-auto" alt="logo" />
        <p className="text-xl mt-4 text-gray-700">
          Edit <code className="font-mono font-bold text-blue-600">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link mt-4 text-blue-500 hover:text-blue-700"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
