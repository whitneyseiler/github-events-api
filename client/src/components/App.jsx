import React from 'react';
import $ from 'jquery';
import FormOne from './FormOne.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
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

  onSubmit(event) {
    event.preventDefault();

    var form = document.getElementsByClassName(form);

    for (var i = 0; i < form.length; ++i) {
      let field = form[i].id;
      let value = form[i].value;
      this.setState({
        [field]: value
      });
    } 
  }

  render () {
    return (
      <div>
        <h1>GitHub Events API Fetcher</h1>
        <FormOne />
      </div>
    )
  }
}

export default App;