const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      {name}:{number}
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactItem;
