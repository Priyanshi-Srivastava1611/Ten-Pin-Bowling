import BowlingGameContainer from './BowlingGameContainer'
import {connect} from 'react-redux'

const mapStateToProps = game => ({
  ...game,
})

export default connect(mapStateToProps)(BowlingGameContainer)
