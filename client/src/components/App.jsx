import React from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import FormOne from './FormOne.jsx';
import ResultsContainer from './ResultsContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: '',
      repo: '',
      event: '',
      events: ['PushEvent']
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.filterEvents.bind(this);
    this.displayResults = this.displayResults.bind(this);
  }

  // componentDidMount() {
  // }

  handleChange(event) {
    let id = event.target.id;
    let value = event.target.value;
  
    this.setState({
      [id] : value
    }, () => {
      if (id === 'repo') {
        this.filterEvents();
      }
    });
  }

  onSubmit() {
    this.displayResults();
  }

  filterEvents() {
    let owner = this.state.owner;
    let repo = this.state.repo;

    axios.get(`https://api.github.com/repos/${owner}/${repo}/events`)
    .then(function (response) {
      let data = response.data;
      let eventList = [];

      data.forEach((event) => {
        if (!events.includes(event.type)) {
          eventList.push(event.type)
        }
      });

      console.log(eventList);

      this.setState({
        events: eventList
      });
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  displayResults(data) {
    //event type, actor information, and timestamp
    data.forEach((event) => {
      console.log(event.actor.login);
      console.log(event.actor.id);
      console.log(event.actor.url);
      console.log(event.type);
      console.log(event.created_at)
    })
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
          events={this.state.events}
        />
        <ResultsContainer />
      </div>
    )
  }
}

export default App;