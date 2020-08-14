import streams from "../api/streams";

//слагаме types,за да може, ако някога объркаме  и не напишем правилно string types
// error ще излезе и ще ни каже, че имаме грешка
//ако оставим стринг тук в този файл на type
// тогава няма да ни излезе грешка
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,
    CREATE_STREAM
} from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


//createStream ще вземе в аргумента си всички values, които сложим във формата
// ще дефинираме async action creator, всеки път, когато правим
//async action creator ще ползваме redux thunk
//освен dispatch, redux thunk позволява да придадем и getState ф-а, чрез коята да изнесем data от store-a
export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streamy', {...formValues, userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
}


export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streamy');
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streamy/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streamy/${id}`);
    dispatch({type: DELETE_STREAM, payload: id})
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streamy/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})
}

