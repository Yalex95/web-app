import { useState } from "react";
import Home from "./Home";
import { Login } from "./Login";

const App=()=> {
  const [isValid, setIsValid] = useState(false);
  return (
      
    <>
    {isValid?(
      <Home/>
    ):(
      <Login setIsValid={setIsValid}/>
    )}
    </>
  )
}

export default App
