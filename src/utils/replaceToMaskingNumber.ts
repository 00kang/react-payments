const replaceToMaskingNumber = (value: string | null): string => {
  if (!value) return "";

  const maskingChar = "●";

  return maskingChar.repeat(value.toString().length);
};

export default replaceToMaskingNumber;
