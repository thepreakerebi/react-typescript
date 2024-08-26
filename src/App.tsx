import Box from "./components/Context/Box";
import { ThemeContextProvider } from "./components/Context/ThemeContext";





function App() {

 

  return (
    <div className="App">
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
