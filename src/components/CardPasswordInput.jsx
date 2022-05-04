import React from 'react';

import InputField from './common/InputField.jsx';
import Input from './common/Input.jsx';

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from '../constants';

export default function CardPasswordInput({ password, onChange }) {
  return (
    <InputField
      labelText="카드 비밀번호 앞 두 자리"
      wrapperWidth="15%"
      horizontalAlign="flex-start"
      isComplete={password.join('').length === CARD_INFO_RULES.PASSWORD_LENGTH}
      separateEachInput={true}>
      {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map((_, index) => (
        <Input
          key={index}
          type="password"
          value={password[index]}
          maxLength="1"
          onChange={e => onChange(e, index)}
          width="100%"
          placeholder={CREATE_MASKED_CHARACTERS(1)}
          isComplete={password[index].length === 1}
        />
      ))}
    </InputField>
  );
}
