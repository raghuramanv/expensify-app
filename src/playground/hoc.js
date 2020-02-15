// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse Code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is confidential information. Please don't share or print!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthenticationInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> Please login to view the information </p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthenticationInfo(Info)

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Health Warning! According to CDC..." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Health Warning! According to CDC..." />, document.getElementById('app'));