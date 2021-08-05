import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      {/* exact - 렌더링 하지 않음 */}
      <Route path="/" exact={true} component={Home} />    
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;