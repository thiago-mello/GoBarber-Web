/* eslint-disable camelcase */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailed } from './actions';

function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };
    console.log('profile', profile);

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(`Erro ao atualizar perfil: ${error}`);
    yield put(updateProfileFailed());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
