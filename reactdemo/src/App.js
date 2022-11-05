
import './App.css';
import MyGitHub from "./Components/MyGitHub";
import MyCounter from "./Components/MyCounter";

function App() {
  return (
    <div className="App">
        <h1>Hello, React</h1>
        <h2>Chris Vazquez - k87d362</h2>
        <MyCounter/>
        <h5>Running on server 5002</h5>
        <MyGitHub/>
    </div>
  );
}

export default App;
