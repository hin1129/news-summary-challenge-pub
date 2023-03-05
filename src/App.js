import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './css/style.css';

function App() {
  // structure
  return (
    <Router>
      <div className="App">
        {/* not using switch as theres no interactive functions */}
        {/* <Switch> */}

        <Route exact path="/">
          <Header />
          {/* <header>
            <h1>news</h1>
            <p>loading</p>
          </header> */}
        </Route>

        <Route exact path="/">
          <Body />
          {/* <body>
            <img />my image
            <p>my headlines</p>
          </body> */}
        </Route>

        <Route exact path="/">
          <Footer />
          {/* <footer>
            <h3>more news..</h3>
          </footer> */}
        </Route>

        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
