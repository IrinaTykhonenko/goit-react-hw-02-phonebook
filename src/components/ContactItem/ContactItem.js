import s from "./ContactItem.module.css";

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.contactItem}>
      {name}:{number}
      <button
        className={s.contactButton}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete contact
      </button>
    </li>
  );
};

export default ContactItem;
