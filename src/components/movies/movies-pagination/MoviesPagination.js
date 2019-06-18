import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'material-ui-flat-pagination';

import { searchFilms, setPageOffset } from '../../../redux/actions';

export default function MoviesPagination() {
    
    const dispatch = useDispatch();

    const searchQuery = useSelector(state => state.get('searchQuery'));
    const films = useSelector(state => state.get('films'));
    const offset = useSelector(state => state.get('offset'));

    const handleClick = (offset, page) => {
        dispatch(searchFilms({searchQuery, page}));
        dispatch(setPageOffset(offset));
        window.scrollTo(0, 0);
    };

    return (
        <div>
        { films.size > 0 &&
        <Pagination 
            limit={10}
            offset={offset}
            total={100}
            onClick={(e, offset, page) => handleClick(offset, page)}/> 
            }
        </div>
    );
}