import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Actor extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        }
    }
    
    componentDidMount() {
        axios.get(this.props.url)
        .then(response => {
            
            this.setState({
                htmlUrl: response.data.html_url
            });
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    render() {
        if (this.state.htmlUrl) {
            return <a target="_blank" rel="noopener" href={this.state.htmlUrl}>{this.props.login}</a>
        } else {
            return <span>{this.props.login}</span>
        }
    }
}

export default Actor;