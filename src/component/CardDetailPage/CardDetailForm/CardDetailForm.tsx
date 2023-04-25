import React from "react";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";

import St from "./CardDetailFormStyled";

type CardDetailFormProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayNumber: string;

  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;

  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;

  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardCVC: string;

  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => void;
  cardPassword: [string, string];

  submitCreditCard: (e: React.FormEvent<HTMLFormElement>) => void;
};

function CardDetailForm({
  changeCardNumber,
  displayNumber,
  changeCardDate,
  cardDate,
  changeCardOwnerName,
  cardOwnerName,
  changeCardCVC,
  cardCVC,
  changeCardPassword,
  cardPassword,
  submitCreditCard,
}: CardDetailFormProps) {
  return (
    <St.Form onSubmit={submitCreditCard}>
      <CardNumberInput
        changeCardNumber={changeCardNumber}
        displayNumber={displayNumber}
      />
      <CardDateInput changeCardDate={changeCardDate} cardDate={cardDate} />
      <CardOwnerNameInput
        changeCardOwnerName={changeCardOwnerName}
        cardOwnerName={cardOwnerName}
      />
      <CardCVCInput changeCardCVC={changeCardCVC} cardCVC={cardCVC} />
      <CardPasswordInput
        changeCardPassword={changeCardPassword}
        cardPassword={cardPassword}
      />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
