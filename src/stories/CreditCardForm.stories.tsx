import { Meta, StoryObj } from "@storybook/react";
import CreditCardForm from "../components/creditCardForm";
import InputCreditCardNumber from "../components/input/InputCreditCardNumber";
import InputExpirationPeriod from "../components/input/InputExpirationPeriod";
import InputOwnerName from "../components/input/InputOwnerName";

const meta: Meta<typeof CreditCardForm> = {
  title: "Components/CreditCardForm",
  component: CreditCardForm,
  argTypes: {
    title: {
      control: "text",
      description: "입력폼 타이틀",
    },
    description: {
      control: "text",
      description: "입력폼 설명",
    },
    inputError: {
      control: "boolean",
      description: "입력 에러 상태 여부",
    },
  },
};

export default meta;

const dummyHandleChange = () => {};

export const CardNumberInput: StoryObj<typeof meta> = {
  name: "카드번호 입력",
  args: {
    title: "카드 번호",
    description: "카드 번호를 입력해주세요.",
    inputError: false,
    children: (
      <InputCreditCardNumber
        inputValue={{ firstValue: "", secondValue: "", thirdValue: "", fourthValue: "" }}
        handleChange={dummyHandleChange}
        inputError={false}
      />
    ),
  },
};

export const ExpirationDateInput: StoryObj<typeof meta> = {
  name: "유효기간 입력",
  args: {
    title: "유효기간",
    description: "카드의 유효기간을 입력해주세요.",
    inputError: false,
    children: (
      <InputExpirationPeriod
        inputValue={{ month: "", year: "" }}
        handleChange={dummyHandleChange}
        inputError={false}
      />
    ),
  },
};

export const OwnerNameInput: StoryObj<typeof meta> = {
  name: "소유자 이름 입력",
  args: {
    title: "소유자 이름",
    description: "카드 소유자의 이름을 입력해주세요.",
    inputError: false,
    children: <InputOwnerName inputValue="" handleChange={dummyHandleChange} inputError={false} />,
  },
};
