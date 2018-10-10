import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/organisms/Header'
import * as actions from '../../actions/Header'
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
  render = () => <Header {...this.props} />
}

const mapStateToProps = state => { 
  return {
    drawer: state.getIn(['header', 'drawer']),
    keyboardDrawer: state.getIn(['header', 'keyboardDrawer'])
  }
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)