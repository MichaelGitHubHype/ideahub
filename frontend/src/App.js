import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Home />
        <div class="bg"></div>

        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
