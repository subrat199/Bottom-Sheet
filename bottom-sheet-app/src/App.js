import { Box, CSSReset } from "@chakra-ui/react";
import "./App.css";
import BottomSheet from "./components/BottomSheet";

function App() {
  return (
    <div className="App">
    
    <CSSReset />
        <Box>
          <BottomSheet />
          {/* Your main content */}
        </Box>
      
    </div>
  );
}

export default App;
