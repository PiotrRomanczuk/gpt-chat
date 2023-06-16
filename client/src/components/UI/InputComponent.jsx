const InputComponent = (props) => {

  return (
    <input type="text" value={props.value} onChange={props.onChange} />
  );
};

export default InputComponent;