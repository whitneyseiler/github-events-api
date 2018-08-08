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
      events: ['Select...']
    }

    this.handleChange = this.handleChange.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.filterEvents = this.debounce(this.filterEvents)
    this.onSubmit = this.onSubmit.bind(this);
    this.displayResults = this.displayResults.bind(this);
  }

  /*
  * avoid unnecessary API calls by waiting to make call until user
  * finishes typing repo name
  */
  debounce(fn) {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, 500);
    };
  }

  /*
  * update state with user input
  */
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

  /*
  * when user finishes typing repo name, populate drop down list of
  * event types only with events returned by API call
  */
  filterEvents() {
    console.log('API CALL: ', this.state.repo)
    let owner = this.state.owner;
    let repo = this.state.repo;

    axios.get(`https://api.github.com/repos/${owner}/${repo}/events`)
    .then(function (response) {
      let data = response.data;
      let eventList = ['Select Event'];

      data.forEach((event) => {
        if (!events.includes(event.type)) {
          eventList.push(event.type)
        }
      });

      this.setState({
        events: eventList
      });
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  onSubmit() {
    this.displayResults();
  }

  /*
  * render results
  */
  displayResults(data) {
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