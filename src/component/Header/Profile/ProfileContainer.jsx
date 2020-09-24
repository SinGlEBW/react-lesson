import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { logOutT, refreshTokensT } from 'src/redux/reducer/Header/auth-reducer';

class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    
  }


  render = () => {
    console.dir(this.props);
    return <Profile logOut={this.props.logOutT} 
                    issueTokenPair={this.props.refreshTokensT}/>
  }
}

let mapStateToProps = (props) => ({profile: props.profile, auth: props.auth})

export default connect(mapStateToProps, {
  refreshTokensT,
  logOutT
})(ProfileContainer)
