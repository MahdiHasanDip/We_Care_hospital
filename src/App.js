// import './App.css';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Contact from './Componants/Contact/Contact';
import NotFound from './Componants/NotFound/NotFound';
import Header from './Componants/Sheared/Header/Header';
import Footer from './Componants/Sheared/Footer/Footer';
import Details from './Componants/Details/Details';
import Login from './Componants/Login/Login';
import AuthProvider from './Componants/Context/AuthProvider';
import Registration from './Registration/Registration';
import Services from './Componants/Services/Services';
import PrivateRoute from "./PrivetRoute/PrivetRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
                <Header/>
        
           <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  <Route path="/home">
                      <Home></Home>
                  </Route>
                  <Route path="/services">
                      <Services></Services>
                  </Route>
                  <Route path="/about">
                      <About></About>
                  </Route>
                  <Route path="/contact">
                      <Contact> </Contact>
                  </Route>
                  <PrivateRoute path="/details/:id">
                    <Details></Details>
                  </PrivateRoute>                
                  <Route path="/login">
                    <Login></Login>
                  </Route>                
                  <Route path="/registration">
                    <Registration></Registration>
                  </Route>


                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
             </Switch>

              <Footer/>

          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
