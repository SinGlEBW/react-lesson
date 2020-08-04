import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';

class ProfileContainer extends React.Component {

  render = () => <Profile />
}

let mapStateToProps = (state) => ({profile: state.profile})

export default connect(mapStateToProps, {

})(ProfileContainer)