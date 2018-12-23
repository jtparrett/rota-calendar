import {connect} from 'react-redux'
import {compose} from 'recompose'

// Context
import {withCalendar} from '../../context/calendar'

// View
import View from './view'

// Redux Queries
const mapStateToProps = (store, props) => ({

})

// Compose
export default compose(
  withCalendar,
  connect(mapStateToProps)
)(View)