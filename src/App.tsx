import Button  from "./components/Button";  
import React, { useState } from "react"; 
import Alert from "./components/alert";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
      return(
        <>
        {alertVisible && <Alert onClose={()=>setAlertVisible(false)}> This is an alert message!</Alert>}
        <div>
         <Button color='primary' onClick={()=>setAlertVisible(true)}>
            Click Me
          </Button>
        </div>
        </>
      );
    
}
export default App;
    