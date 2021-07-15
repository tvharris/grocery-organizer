import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import TabBar from './components/TabBar'
import TestAPI from './components/TestAPI.js'

export default function App() {
    return (
        <Router>
            <TabBar/>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/testAPI'>Test GET request</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path='/testAPI'>
                        <TestAPI />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/users'>
                        <Users />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}
