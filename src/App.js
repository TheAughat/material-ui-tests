import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from './pages/Notes';
import Create from './pages/Create';
import Create2 from './pages/Create2';

function App() {
    return (
        <Router>
            <Switch>

                <Route exact path='/'>
                    <Notes/>
                </Route>

                <Route path='/create'>
                    <Create/>
                </Route>
                <Route path='/create2'>
                    <Create2/>
                </Route>
                
            </Switch>
        </Router>
    );
}

export default App;
