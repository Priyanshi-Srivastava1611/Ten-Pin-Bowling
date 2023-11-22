import {connect} from 'react-redux'
import {actions} from '../reducer/BowlingReducer'

import UserInputComponent from './UserInputComponent'

const mapDispatchToProps = {
  enterScore: actions.enterScore,
  restart: actions.restart,
  updateTotalScore: actions.updateTotalScore,
}

export default connect(null, mapDispatchToProps)(UserInputComponent)
