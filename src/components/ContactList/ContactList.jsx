import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      ContactList
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} deleteContact={deleteContact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
