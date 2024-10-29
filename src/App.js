import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import { Routes , Route , Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/heading'>Heading</Link>
        </li>
        <li>
          <Link to='/paragraph'>Paragraph</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/heading' element = {<Heading></Heading>}>  </Route>
        <Route path='/paragraph' element = {<Paragraph></Paragraph>}> </Route>
      </Routes>



    </div>
  );
}

export default App;
