import React from 'react';
import ReactDOM from 'react';
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
      event: '',
      events: ['CheckRunEvent',
        'CheckSuiteEvent',
        'CommitCommentEvent',
        'CreateEvent',
        'DeleteEvent',
        'DeploymentEvent',
        'DeploymentStatusEvent',
        'DownloadEvent',
        'FollowEvent',
        'ForkEvent',
        'ForkApplyEvent',
        'GitHubAppAuthorizationEvent',
        'GistEvent',
        'GollumEvent',
        'InstallationEvent',
        'InstallationRepositoriesEvent',
        'IssueCommentEvent',
        'IssuesEvent',
        'LabelEvent',
        'MarketplacePurchaseEvent',
        'MemberEvent',
        'MembershipEvent',
        'MilestoneEvent',
        'OrganizationEvent',
        'OrgBlockEvent',
        'PageBuildEvent',
        'ProjectCardEvent',
        'ProjectColumnEvent',
        'ProjectEvent',
        'PublicEvent',
        'PullRequestEvent',
        'PullRequestReviewEvent',
        'PullRequestReviewCommentEvent',
        'PushEvent',
        'ReleaseEvent',
        'RepositoryEvent',
        'RepositoryVulnerabilityAlertEvent',
        'StatusEvent',
        'TeamEvent',
        'TeamAddEvent',
        'WatchEvent']
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.dropdown)
        
    $(element).ready(function() {
        $('select').material_select();
    });
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
    
    axios.get(`https://api.github.com/repos/${owner}/${repo}/events`)
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
          events={this.state.events}
        />
        <ResultsContainer />
      </div>
    )
  }
}

export default App;