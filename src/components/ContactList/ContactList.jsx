import s from './ContactList.module.scss';

const ContactList = ({ items, onDelete }) => {
  return items.length ? (
    <ul className={s.list}>
      {items.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button onClick={e => onDelete(id)} className={s.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className={s.text}>You don't have any contact yet</p>
  );
};

export default ContactList;
