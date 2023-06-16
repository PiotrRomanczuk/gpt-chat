const ButtonComponent = ({ onClick, title }) => {
  return (
    <button onClick={onClick}>{ title }</button>
  );
};


export default ButtonComponent;