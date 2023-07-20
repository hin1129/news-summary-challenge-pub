import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NewsArticleContent from './components/NewsArticleContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* home page*/}
          <Route exact path="/">
            <Body />
          </Route>

          {/* NewsArticleContent page */}
          <Route path="/NewsArticleContent/:id">
            <NewsArticleContent />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;