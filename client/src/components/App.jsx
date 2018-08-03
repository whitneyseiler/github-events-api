import React from 'react';
import $ from 'jquery';
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

  onSubmit(event) {
    event.preventDefault();

    var form = document.getElementsByClassName('form');

    for (var i = 0; i < form.length; ++i) {
      let field = form[i].id;
      let value = form[i].value;
      console.log(field, ' : ', value)
      this.setState({
        [field]: value
      }, console.log(this.state));
    } 
  }

  render () {
    return (
      <div>
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