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
      events: [],
      results: [],
      displayResults: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchEventData = this.fetchEventData.bind(this);
    this.fetchEventData = this.debounce(this.fetchEventData);
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
  * update state with user input from search form
  */
  handleChange(event) {
    let id = event.target.id;
    let value = event.target.value;

    this.setState({
      [id] : value
    }, () => {
      if (id === 'repo') {
        this.fetchEventData();
      }
    });
  }

  /*
  * when user finishes typing repo name, populate drop down list of
  * with repo-associated event types returned by API call
  */
  fetchEventData() {
    let owner = this.state.owner;
    let repo = this.state.repo;

    //maintain proper scope when setting state after axios call
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
  * when user clicks display button, check if results are found
  * if results found, populate table with results
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
      //classNames are Materialize classes
      <div className="container grey lighten-2 center-align">
        <h2>GitHub Events API Fetcher</h2>
        <Search 
          onSubmit={this.onSubmit} 
          handleChange={this.handleChange} 
          owner={this.state.owner} 
          repo={this.state.repo} 
          event={this.state.event}
          events={this.state.events}
        />
        <ResultsContainer 
          display={this.state.displayResults} 
          results={this.state.results} 
          eventType={this.state.event}
        />
      </div>
    )
  }
}

export default App;