const myForm = [
  {
    title: "E-mail",
    ofType: "email",
  },
  {
    title: "Senha",
    ofType: "password",
  },
];

function CreateInput({ title, ofType }) {
  return (
    <div className="FormDiv">
      <label htmlFor={title}>{title}:</label>
      <input type={ofType} name={title} id={title + ofType} />
    </div>
  );
}

export default function FormSingIn() {
  return (
    <form>
      {myForm.map((obj) => {
        return <CreateInput title={obj.title} ofType={obj.ofType} />;
      })}
    </form>
  );
}
