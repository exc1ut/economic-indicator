import { MapContext } from "./context/MapContext";
import Main from "./Main";

import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserContext>
        <MapContext>
          <Main />
        </MapContext>
      </UserContext>
    </Router>
  );
}

export default App;
