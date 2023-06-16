interface ButtonProps {
  onClick: () => void;
  title: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button onClick={onClick}>{ title }</button>
  );
};


export default ButtonComponent;