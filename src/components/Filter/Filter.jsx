import { useDispatch } from 'react-redux';
import { setFilter} from 'redux/filter/filtersSlice';
import { useFilterValue } from 'hooks';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
const dispatch = useDispatch();
const filter = useFilterValue();

return (
    <StyledLabel> Find contacts by name
        <StyledInput 
        name="filter"
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value ={filter}/>
    </StyledLabel>
)
}
