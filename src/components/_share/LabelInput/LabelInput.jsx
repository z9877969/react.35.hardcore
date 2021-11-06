const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
  cbOnChange = null,
  cbOnClick = null,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={cbOnChange}
        onClick={cbOnClick}
        placeholder={placeholder}
      />
    </label>
  );
};

export default LabelInput;
