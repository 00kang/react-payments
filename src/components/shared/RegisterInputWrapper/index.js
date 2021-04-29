import React from 'react';
import PropTypes from 'prop-types';
import INPUT_TYPE from '../../../constants/inputType';
import * as Style from './style';

const RegisterInputWrapper = (props) => {
  const { type, label, width, currentNameLength, children } = props;

  const isOwnerName = type === INPUT_TYPE.OWNER_NAME.type;
  const wordCount = <Style.WordCount>{`${currentNameLength}/30`}</Style.WordCount>;

  const isCardPassword = type === INPUT_TYPE.PASSWORD.type;

  return (
    <Style.Root>
      {/* TODO: cardPassword일 때 inputHeader width 조정하기 */}
      <Style.InputHeader width={isCardPassword ? '100%' : width}>
        <Style.Label htmlFor={type}>{label}</Style.Label>
        {isOwnerName && wordCount}
      </Style.InputHeader>
      <Style.FlexContainer>{children}</Style.FlexContainer>
    </Style.Root>
  );
};

RegisterInputWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  currentNameLength: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default RegisterInputWrapper;
