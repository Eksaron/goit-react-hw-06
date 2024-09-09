const Contact = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;

  return (
    <>
      <p>
        id:<small>{id}</small>
      </p>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
      <button onClick={() => deleteContact(id)}>delete</button>
    </>
  );
};

export default Contact;
