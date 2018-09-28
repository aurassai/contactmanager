import React, { Component } from "react"; // eslint-disable-line
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // eslint-disable-line
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // required for development
import Contacts from "./components/contacts/Contacts"; // eslint-disable-line
import AddContact from "./components/contacts/addContact"; // eslint-disable-line
import EditContact from "./components/contacts/EditContact"; // eslint-disable-line
import Header from "./components/layout/Header"; // eslint-disable-line
import About from "./components/pages/About"; // eslint-disable-line
import NotFound from "./components/pages/NotFound"; // eslint-disable-line
import Test from "./components/test/Test"; // eslint-disable-line

import { Provider } from "./context"; // eslint-disable-line

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/test" component={Test} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
