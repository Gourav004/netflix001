import React from "react";
import Body from "./Components/Body";
import {Provider} from "react-redux"
import appStore from "./Utils/AppStore";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden bg-black">
      <Provider store={appStore}>
           <Body/>
      </Provider>
    </div>
  )
}

export default App;
