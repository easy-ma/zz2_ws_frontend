import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./helpers/routing";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
