import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
        ;
}

export default App;
