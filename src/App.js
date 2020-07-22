import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Home from './components/Home/Home';
import What from './components/QnA/What';
import Stats from './components/Stats/Stats';

const App = () => {
  return (
    <Router>
      <Nav>
        <Route 
          path='/'
          exact={true}
          component={Home}
        />
        <Route 
          path='/news'
          component={News}
        />
        {/*<Route
          path='/stats'
          render={() => {
            return(
              <div className="container-fluid col-12" style={{ margin:0, padding:'0px', width: '100vw', height: '100vh' }}>
                <div className='container-fluid mb-5 ml-0 text-center' style={{ marginTop: '150px', padding:'0px'}}>
                  <span style={{ border: '0',borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success mb-3'>COVID-19 Stats</span>
                  <h1 className='mt-3 pl-3 pr-3 ml-3 mr-3'>COVID-19 Statistics</h1>
                  <Cards data={data} />
                  <CountrySelector handleCountryChange={this.handleCountryChange} />
                  <Chart data={data} country={country} />
                </div>
                <Footer />
              </div>
            )
          }}
        
        />*/}
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route 
          path='/QnA'
          component={What}
        />
      </Nav>
    </Router>
  )
}

export default App;
