import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('O usuário não é um prestador de serviços.');
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    const { error } = err.response.data;
    toast.error(`Falha na autenticação: ${error}`);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
    yield put(signFailure());
  } catch (err) {
    const { error } = err.response.data;
    toast.error(`Falha no cadastro: ${error}`);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
