interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const InputComponent: React.FC<InputProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleInputChange} />
  );
};

export default InputComponent;