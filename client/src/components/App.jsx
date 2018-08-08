import React from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import ResultsContainer from './ResultsContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: '',
      repo: '',
      event: '',
      events: ['Select...'],
      results: [],
      displayResults: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.filterEvents = this.debounce(this.filterEvents);
    this.onSubmit = this.onSubmit.bind(this);
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
    let context = this;

    axios.get(`https://api.github.com/repos/${owner}/${repo}/events`)
    .then(function (response) {
      let eventList = ['Select Event'];
      let data = [];

      response.data.forEach((event) => {
        if (!eventList.includes(event.type)) {
          eventList.push(event.type)
        }
        let obj = {};
        obj.id = event.id;
        obj.type = event.type;
        obj.created_at = event.created_at;
        obj.actor = event.actor.login;
        obj.actor_id = event.actor.id;
        obj.actor_url = event.actor.url;
        data.push(obj)
      });

      context.setState({
        events: eventList,
        results: data
      });
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  /*
  * render results
  */
  onSubmit() {
    if (this.state.results.length) {
      this.setState({
        displayResults: true,
      })
    }
  }

  render () {
    return (
      <div className="container grey lighten-2 center-align">
        <h1>GitHub Events API Fetcher</h1>
        <Search 
          onSubmit={this.onSubmit} 
          handleChange={this.handleChange} 
          owner={this.state.owner} 
          repo={this.state.repo} 
          event={this.state.event}
          events={this.state.events}
        />
        <ResultsContainer display={this.state.displayResults} results={this.state.results}/>
      </div>
    )
  }
}

export default App;