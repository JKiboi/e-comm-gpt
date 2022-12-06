
import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import EmailSubscriptionForm from './components/EmailSubscriptionForm';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />
      </main>
      <footer>
        <EmailSubscriptionForm/>
      </footer>
    </Router>
  );
};
export default App;







