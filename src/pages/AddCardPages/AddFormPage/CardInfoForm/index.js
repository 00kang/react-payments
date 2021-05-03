import { createRef } from 'react';
import { Button, Form } from '../../../../components';
import { CardNumberInput } from './CardNumberInput';
import { ExpirationDateInput } from './ExpirationDateInput';
import { OwnerNameInput } from './OwnerNameInput';
import { SecurityCodeInput } from './SecurityCodeInput';
import { PasswordInput } from './PasswordInput';
import { handleCardInfoSubmit } from './handler';
import { isFormFulFilled } from './validator';

export const CardInfoForm = (props) => {
  const { initialCardInfo, cardInfo, setCardInfo, setIsModalOpen, setRoute } = props;
  const { number, expirationDate, ownerName, securityCode, password } = cardInfo;
  const setNumber = (number) => setCardInfo((prevState) => ({ ...prevState, number }));
  const setCompany = (company) => setCardInfo((prevState) => ({ ...prevState, company }));
  const setExpirationDate = (expirationDate) => setCardInfo((prevState) => ({ ...prevState, expirationDate }));
  const setOwnerName = (ownerName) => setCardInfo((prevState) => ({ ...prevState, ownerName }));
  const setIsOwnerNameFilled = (isOwnerNameFilled) => setCardInfo((prevState) => ({ ...prevState, isOwnerNameFilled }));
  const setSecurityCode = (securityCode) => setCardInfo((prevState) => ({ ...prevState, securityCode }));
  const setPassword = (password) => setCardInfo((prevState) => ({ ...prevState, password }));
  const expirationDateInputRef = createRef();
  const ownerNameInputRef = createRef();
  const passwordInputRef = createRef();

  return (
    <Form className="CardInfoForm">
      <CardNumberInput
        number={number}
        setNumber={setNumber}
        setCompany={setCompany}
        setIsModalOpen={setIsModalOpen}
        expirationDateInputRef={expirationDateInputRef}
      />
      <ExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        ref={expirationDateInputRef}
        ownerNameInputRef={ownerNameInputRef}
      />
      <OwnerNameInput
        initialOwnerName={initialCardInfo.ownerName}
        ownerName={ownerName}
        setOwnerName={setOwnerName}
        setIsOwnerNameFilled={setIsOwnerNameFilled}
        ref={ownerNameInputRef}
      />
      <SecurityCodeInput
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        passwordInputRef={passwordInputRef}
      />
      <PasswordInput password={password} setPassword={setPassword} ref={passwordInputRef} />
      <Button
        disabled={!isFormFulFilled({ cardInfo, initialCardInfo })}
        onClick={(e) => handleCardInfoSubmit({ e, cardInfo, setIsModalOpen, initialCardInfo, setRoute })}
      >
        다음
      </Button>
    </Form>
  );
};
