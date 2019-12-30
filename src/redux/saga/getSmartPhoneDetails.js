import { put, takeEvery } from 'redux-saga/effects'
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_SMARTPHONE_DETAILS_STARTED,
  // GET_SMARTPHONE_DETAILS_SUCCESS,
  GET_SMARTPHONE_DETAILS_FAILED
} from '../../common/action'

export const GET_SMARTPHONE_DETAILS = function* getSmartphoneDetails() {
  yield takeEvery('GET_SMARTPHONE_DETAILS', function*(action) {
    yield put({ type: GET_SMARTPHONE_DETAILS_STARTED })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({
      //   type: GET_SMARTPHONE_DETAILS_SUCCESS,
      //   payload: DATA
      // });
    } catch (error) {
      yield put({ type: GET_SMARTPHONE_DETAILS_FAILED, payload: error })
    }
  })
}
