import React from 'react';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Preview from './components/Preview';



function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-snapyellow h-screen">
      <Router>
        <Switch>

          <Route path="/preview">
            <Preview className="bg-snapyellow h-screen"/>
          </Route>

          <Route exact path="/">            
            <WebcamCapture className=""/> 
          </Route>
          
          </Switch>
      </Router>
    </div>
  );
}

export default App;
