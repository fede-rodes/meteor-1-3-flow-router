//import React, { PropTypes } from 'react';
//import { Navigation } from '../components/navigation.jsx';

/*
export const App = ({ children }) => (
  <div>
    <Navigation />
    { children }
  </div>
);
*/
/*App.propTypes = {
  children: PropTypes.object.isRequired,
};*/

import React, { Component, PropTypes } from 'react';
//import { createContainer } from 'meteor/react-meteor-data';
//import { Meteor } from 'meteor/meteor';

import { Navigation } from '../components/navigation.jsx';

//import NotFound from '../../ui/pages/notFound/NotFound.jsx';
//import Collector from '../../ui/pages/collector/Collector.jsx';
//import Curator from '../../ui/pages/curator/Curator.jsx';
//import Login from './login/Login.jsx';
//import Loading from './loading/Loading.jsx';

/**
* @summary Top-most component acting as a general controller for the whole app.
* It takes care of global subscriptions (displaying a loading indicator when
* global subscriptions aren't ready) + handles authentication + handles roles.
* @example <App content={page} />
* @see {@link https://themeteorchef.com/snippets/authentication-with-react-and-flow-router/}
*/

export const App = ({ content }) => (
  <div>
    <Navigation />
    <main>
      {content()}
    </main>
  </div>
);

/*
export default class App extends Component {

  // Handle roles and views
  getView() {
    if (this.props.loggedIn) {
      return this.props.content;
    }
    return <Login />;
  }

  // Handle loading indicator
  render() {
    console.log('props: ', props);
    //return !this.props.subsReady || this.props.loggingIn ? <Loading /> : this.getView();
    return (
      <div>
        <Navigation />
        { this.props.content }
      </div>
    );
  }
}
*/
/*
App.propTypes = {
  subsReady: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  content: PropTypes.func.isRequired,
};*/

/*
export default createContainer(() => {
  return {
    subsReady: true,
    loggingIn: Meteor.loggingIn(),
    loggedIn: !!Meteor.user(),
  };
}, App);*/
