import { useSelector, useDispatch } from 'react-redux';
import { setFilter} from 'redux/filter/filtersSlice';
import { selectFilterValue } from 'redux/selectors';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
const dispatch = useDispatch();
const filterValue = useSelector(selectFilterValue);

return (
    <StyledLabel> Find contacts by name
        <StyledInput 
        name="filter"
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value ={filterValue}/>
    </StyledLabel>
)
}
