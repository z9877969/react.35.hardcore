import LabelInput from "../LabelInput/LabelInput";

const Form = ({ cbOnSubmit, handleChange, formOpts, formValues, btnTitle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{btnTitle}</button>
      {formOpts.map(({ type, title, name, placeholder }) => (
        <LabelInput
          key={name}
          type={type}
          title={title}
          name={name}
          value={formValues[name]}
          placeholder={placeholder}
          cbOnChange={handleChange}
        />
      ))}
    </form>
  );
};

export default Form;
