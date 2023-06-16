interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Fetch Data</button>
  );
};


export default ButtonComponent;