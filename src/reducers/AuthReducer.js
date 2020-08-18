import {SIGN_IN, SIGN_OUT} from '../actions/types'
//когато redux app за първи път се стартира, reducer се стартира 1 път, за да се инициализира
// ако първата ст-ст бъде undefined, тогава
//state ще бъде сетната с каквото ѝ подадем във аттр на ф-ята (state = INITIAL_STATE)
//така че вместо да ѝ подаваме просто state = {}, ще ѝ подадем обект за инициализирне
//INITIAL_STATE с главни букви  означава, че този обект никога не трябва да се променя -
//обект за инициализирне!!!
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}
        default:
            return state;
    }
}
