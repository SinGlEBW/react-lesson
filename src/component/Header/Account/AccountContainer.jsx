import React from 'react';
import { connect } from 'react-redux';
import Account from './Account';

let mapStateToProps = (state) => {
  return {}
}
let mapDispatchToProps = (dispatch) => {
  return {}
}

let AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;