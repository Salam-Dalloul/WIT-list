import {
  GET_ORGS_SUB_CATS_IN_PROGRESS,
  GET_ORGS_SUB_CATS_SUCCESS,
  GET_ORGS_SUB_CATS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  orgsSubCats: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORGS_SUB_CATS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };

    case GET_ORGS_SUB_CATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        orgsSubCats: payload
      };

    case GET_ORGS_SUB_CATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    default:
      return state;
  }
};
