import {applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import checker from './checker'
import logger from './logger'

export default applyMiddleware(ReduxThunk.default, checker, logger)
