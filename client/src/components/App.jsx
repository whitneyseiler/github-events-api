import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import FormOne from './FormOne.jsx';
import ResultsContainer from './ResultsContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: '',
      repo: '',
      event: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '', 
    //   success: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleChange(event) {
    let id = event.target.id;
    let value = event.target.value;
  
    this.setState({
      [id] : value
    });
  }

  onSubmit() {
    let owner = this.state.owner;
    let repo = this.state.repo;
    let event = this.state.event;
    
    axios.get(`https://api.github.com/users/${owner}/${repo}/`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }

  render () {
    return (
      <div className="container grey lighten-2 center-align">
        <h1>GitHub Events API Fetcher</h1>
        <FormOne 
          onSubmit={this.onSubmit} 
          handleChange={this.handleChange} 
          owner={this.state.owner} 
          repo={this.state.repo} 
          event={this.state.event}
        />
        <ResultsContainer />
      </div>
    )
  }
}

export default App;