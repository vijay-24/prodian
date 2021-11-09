
import './App.css';


import {BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Header from './page/header';
import Home from './page/home';
import About from './page/about';
import Login from './page/login';
import Form from './page/form';
import Form2 from './page/form2';
import Feedback from './page/feedback';
import Employee  from './page/employee';
import Sports from './page/sports';
import Form3 from './page/form3';
import Employee2 from './page/employee2';


import EmpAddForm from './page/empAddForm';


// import { MDBBtn } from 'mdb-react-ui-kit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/form2" element={<Form2/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/empadd" element={<EmpAddForm/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/form3" element={<Form3/>}/>
        <Route path="/employee2" element={<Employee2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
