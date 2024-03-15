import { useDispatch } from "react-redux";

import { changeFilter } from '../../redux/filterSlice';

import css from './Filter.module.scss';

const Filter = () => {
    const despatch = useDispatch();
    const filterValue = event => {
        despatch(changeFilter(event.currentTarget.value));
    };

    return (
        <label className={css['filter-label']}>
            <span>Find contacts by name</span>
            <input
                onChange={filterValue}
                type="text"
                name="filter"
                className={css['filter-input']} />
        </label>
    );
};

export default Filter;