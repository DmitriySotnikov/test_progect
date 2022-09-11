import React, {FC} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectionCategory, sortCategories } from "../../store/reducer/categorySlice";

export const Sort: FC = () => {

    const dispatch = useAppDispatch();
    const {selector} = useAppSelector(state => state.categories);

    const selectHandler = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        const key: string = e.target.value;
        dispatch(sortCategories(key));
        dispatch(selectionCategory(selector));
    };

    return (
        <div className="sort">
            <form className="sort__form">
                    <select
                        className="selectors__select"
                        onChange={e => selectHandler(e)}
                        defaultValue=""
                    >
                        <option value="" disabled>Выберите сортировку</option>
                        <option value="date">По дате</option>
                        <option value="title">По названию</option>
                    </select>
            </form>
        </div>
    );
};