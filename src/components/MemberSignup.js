import React from 'react';
import MemberSignupDesign from './MemberSignupDesign'
// import { connect } from 'react-redux';

const MemberSignup = (props) => {
  return (
    <div>
      <MemberSignupDesign
        history={props.history}
      />
    </div>
  )
}

export default MemberSignup;
