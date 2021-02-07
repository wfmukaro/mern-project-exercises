import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercisesList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import Createuser from "./components/Createuser";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Switch>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user">
        <Createuser/>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;