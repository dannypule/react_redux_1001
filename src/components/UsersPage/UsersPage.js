import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export const UsersPage = (props) => {
  return (
    <div className="row">
        <div className="col-md-12">foo</div>
        <div className="col-md-12">bar</div>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     // fuelSavings: state.fuelSavings
//     users: [
//         {
//             id: 0,
//             name: 'Smith',
//             job: 'foo'
//         },
//         {
//             id: 1,
//             name: 'Jones',
//             job: 'bar'
//         }
//     ]
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default UsersPage;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersPage);