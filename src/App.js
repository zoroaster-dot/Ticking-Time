import "./App.css";
import ComponentClass from "./components/ComponentClass";
import ComponentFunction from "./components/ComponentFunction";

function App() {
  return (
    <div>
      <h1 className="App">Component Class</h1>
      <ComponentClass />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1 className="App">Component Function</h1>
      <ComponentFunction />
    </div>
  );
}
export default App;
