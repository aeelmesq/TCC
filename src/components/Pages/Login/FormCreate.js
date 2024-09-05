export default function FormCreate(formType) {
  function CreateInput(title, ofType) {
    return (
      <div>
        <label>{title}</label>
        <input type={ofType} name={title} id={title + ofType} />
      </div>
    );
  }

  formType = typeof formType === typeof [{}] ? formType : [{}];

  const allInputs = formType.map((item, index) => {
    return <CreateInput title={item.title} ofType={item.ofType} />;
  });

  return <form>{allInputs}</form>;
}
