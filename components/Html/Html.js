/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import { title, description } from '../../config';
import './Html.scss';


class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title || title}</title>
        <meta name="description" content={this.props.description || description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <script src={'app.js?' + new Date().getTime()}></script>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <GoogleAnalytics />
      </body>
      </html>
    );
  }

}

export default Html;
