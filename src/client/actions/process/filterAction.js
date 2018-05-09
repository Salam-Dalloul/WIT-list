import {
  FILTER_ACTION,
  ADD_FILTER,
  DROP_FILTER,
  DROP_ALL_FILTERS
} from '../../constants/actionTypes';

import filterHelper from '../../helpers/applyFilter';

const addFilter = filterValue => ({
  type: ADD_FILTER,
  payload: filterValue
});

const dropFilter = filterValue => ({
  type: DROP_FILTER,
  payload: filterValue
});

const dropAllFilter = () => ({
  type: DROP_ALL_FILTERS,
  payload: []
});

const filterAction = filteredOrgs => ({
  type: FILTER_ACTION,
  payload: filteredOrgs
});

export const filter = (orgs, filterValue) => (dispatch, getState) => {
  if (!filterValue) {
    return dispatch(dropAllFilter());
  }

  const { filters } = getState().filterReducer;
  let newFilters = [];
  filters.includes(filterValue) ?
    (
      filters.map(filterId => {
        filterId !== filterValue ?
          newFilters.push(filterId)
          : null;
      }),
      dispatch(dropFilter(newFilters))
    )
    :
    (
      newFilters = filters,
      newFilters.push(filterValue),
      dispatch(addFilter(newFilters))
    );
  const filteredOrgs = filterHelper(orgs, filters);
  dispatch(filterAction(filteredOrgs));
};
