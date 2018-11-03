import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends Component {
  componentWillMount() {
  //   getLoggedUser()
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...this.props} />
          : <Redirect to="/account" />
      }} />
    )
  }
}

export default AuthorizedRoute;

  // const stateToProps = ({ loggedUserState }) => ({
  //   pending: loggedUserState.pending,
  //   logged: loggedUserState.logged
  // })
  //   export default connect(stateToProps)(AuthorizedRoute)