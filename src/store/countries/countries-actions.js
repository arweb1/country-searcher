export const SET_COUNTRY = '@@countries/SET_COUNTRY';
export const SET_LOADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';

export const setCountry = country => ({
    type: SET_COUNTRY,
    payload: country
})

export const setLoading = () => ({
    type: SET_LOADING
})

export const setError = error => ({
    type: SET_ERROR,
    payload: error
})

export const loadCountries = () => (dispatch, _, {client, api}) => {
    dispatch(setLoading());

    client.get(api.ALL_COUNTRIES)
        .then(({data}) => dispatch(setCountry(data)))
        .catch(error => dispatch(setError(error)))
}