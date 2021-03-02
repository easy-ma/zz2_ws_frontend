import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./helpers/routing";
import Layout from "./components/layout/layout";
import { ProvideAuth } from "./helpers/auth";

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Layout>
            <Routing />
          </Layout>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
