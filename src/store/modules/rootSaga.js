import { all } from 'redux-saga/effects';
import authSagas from './auth/sagas';
import userSagas from './user/sagas';

export default function* rootSaga() {
  return yield all([authSagas, userSagas]);
}
