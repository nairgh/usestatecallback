import './App.css'
import useLocalStorage from './components/useLocalStorage';
function App() {
  // Use the custom hook to manage a "myValue" key in localStorage
  const [storedValue, setStoredValue] = useLocalStorage("myValue", "");

  const handleChange = (e) => {
    setStoredValue(e.target.value); // Update localStorage and state
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React LocalStorage Example with Custom Hook</h2>
      <p>
        Stored Value: <strong>{storedValue}</strong>
      </p>
      <input
        type="text"
        value={storedValue}
        onChange={handleChange}
        placeholder="Enter a value"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
    </div>
  );
}

export default App;
