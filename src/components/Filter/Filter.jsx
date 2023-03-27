import s from './Filter.module.scss';

const Filter = ({ onFilterChange }) => {
  return (
    <input className={s.input} type="text" onChange={e => onFilterChange(e)} />
  );
};

export default Filter;
