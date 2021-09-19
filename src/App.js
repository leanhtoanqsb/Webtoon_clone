import 'App.css';
import Header from "Header/Header";
import Footer from "Footer/Footer";
import routerConfig, {generateRoutes} from "routerConfig"; 
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import useFontAwesome from "hooks/useFontAwesome";



function App() {
  useFontAwesome()
  return (
    <Router>
      <Header />
      <div id="container">
        <Switch>
          {generateRoutes(routerConfig)}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
