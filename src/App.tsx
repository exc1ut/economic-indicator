import { MapContext } from "./context/MapContext";
import Main from "./Main";

function App() {
  return (
    <MapContext>
      <Main />
    </MapContext>
  );
}

export default App;
