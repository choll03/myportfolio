import React, { Component } from 'react';
import axios from 'axios';
import ChatComponent from './Components/ChatComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const LoadHomeComponent = Loadable({
  loader: () => import('./Components/HomeComponent'),
  loading : Loading,
  
});


const LoadPortfolioComponent = Loadable({
  loader: () => import('./Components/PortfolioComponent'),
  loading : Loading,
  
});

const LoadCvComponent = Loadable({
  loader: () => import('./Components/CvComponent'),
  loading : Loading,
  
});

const LoadChatComponent = Loadable({
  loader: () => import('./Components/ChatComponent'),
  loading : Loading,
  
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users : []
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    // axios.get('https://jsonplaceholder.typicode.com/users/')
    // .then((res) => {
    //   this.setState({users : res.data})
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  render() {
    return (
     <Router>
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white d-flex portfolio-navbar gradient">
            <div className="container"><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav mx-auto">
                        <li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/"><i className="fa fa-home"></i>Home</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/cv">CV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <ChatComponent />
        <Route exact path="/" component={LoadHomeComponent} />
        <Route exact path="/portfolio" component={LoadPortfolioComponent} />
        <Route exact path="/cv" component={LoadCvComponent} />
        
      </div>
      </Router>
    );
  }
}

export default App;
