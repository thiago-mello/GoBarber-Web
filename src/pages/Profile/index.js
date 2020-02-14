import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from './AvatarInput';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    console.log('before action:', data);
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input placeholder="Nome Completo" name="name" />
        <Input placeholder="Seu e-mail" name="email" />
        <hr />

        <Input
          type="password"
          placeholder="Sua senha atual"
          name="oldPassword"
        />
        <Input type="password" placeholder="Nova Senha" name="password" />
        <Input
          type="password"
          placeholder="Confirmação de senha"
          name="confirmPassword"
        />

        <button type="submit">Salvar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
