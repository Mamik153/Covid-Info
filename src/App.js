import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import CountrySelector from './components/CountrySelector/CountrySelector';
import Chart from './components/Chart/Chart';

import { fetchData } from './api';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Home from './components/Home/Home';
import What from './components/QnA/What';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  
  state={
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });

    //console.log(this.state);
  }

  handleCountryChange = async (country) => {
    
    const fetchedData = await fetchData(country);

  
    this.setState({ data: fetchedData, country: country });

    

  }

  render(){
    const { data, country } = this.state;
    
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
          <Route
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
          
          />
          <Route 
            path='/QnA'
            component={What}
          />
        </Nav>
      </Router>
    )
  }
}

export default App;
