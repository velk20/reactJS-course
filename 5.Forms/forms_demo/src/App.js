import {UncontrolledForm} from './components/UncontrolledForm';
import {ControlledForm} from './components/ControlledForm';

function App() {


    return (
      <div className="App">
          UncontrolledForm:
          <UncontrolledForm/>
          <br/>
          ControlledForm
          <ControlledForm/>
      </div>
    );
}

export default App;
