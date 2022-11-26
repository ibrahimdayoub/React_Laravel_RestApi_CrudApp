import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Students from "./Layouts/Students";
import Addstudent from "./Layouts/AddStudent";
import Editstudent from "./Layouts/EditStudent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Students} />
        <Route exact path="/add-student" component={Addstudent} />
        <Route exact path="/edit-student/:id" component={Editstudent} />
      </Switch>
    </Router>
  );
}

export default App;
