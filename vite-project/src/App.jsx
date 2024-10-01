import GetName from "./GetName";
import DisplayName from "./DisplayName";
import { useState, createContext } from "react";

export const AppContext = createContext(null);

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <div>
        <h1>App with useContext</h1>
      </div>
      <AppContext.Provider value={{ name, setName }}>
        <GetName />
        <br />
        <DisplayName />
      </AppContext.Provider>
    </div>
  );
}

export default App;
