import InputStyles from "./styles";

interface InputPropsInterface {
  label: string;
  placeholder: string;
  type: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  value?: string | number;
}

const Input = ({
  label,
  placeholder,
  type,
  onChange,
  maxLength,
  value,
}: InputPropsInterface) => {
  return (
    <InputStyles.Container>
      <InputStyles.Label htmlFor="input">
        {label.toUpperCase()}
      </InputStyles.Label>
      <InputStyles.Input
        type={type}
        id="input"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
      />
    </InputStyles.Container>
  );
};

export default Input;
