/*
Note that react-mounter automatically mounts the layout component on a
#react-root node, which you can change by using the withOptions() function.
*/

import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { App } from '../../ui/layouts/app.jsx';
//import { Index } from '../../ui/pages/index.jsx';

import { One } from '../../ui/pages/one.jsx';
import { Two } from '../../ui/pages/two.jsx';
import { NotFound } from '../../ui/pages/not-found.jsx';

FlowRouter.notFound = {
  action() {
    mount(App, {
      content: () => <NotFound />,
    });
  },
};

FlowRouter.route('/one', {
  name: 'one',
  action() {
    mount(App, {
      content: () => <One />,
    });
  },
});

FlowRouter.route('/two', {
  name: 'two',
  action() {
    mount(App, {
      content: () => <Two />,
    });
  },
});

FlowRouter.route('/', {
  name: 'index',
  action() {
    FlowRouter.go('one');
  },
});
