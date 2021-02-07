
import produce from 'immer'

const initOffset = {
    hover: false,
    amt: 5,
    int: null
}

const OFFSET = {
    ACTION: {
        HOVER: 'hover_alekjral',
        UNHOVER: 'unhover_lajselkrj',

        INCR: 'offset_ljalsejr',
        ASSIGN_INT: 'assign_interval_inerlajser',
        CLEAR_INT: 'clear_interval_alskjerlaj',
        RESET: 'reset_lkajserlkj'
    }
}

const { ACTION } = OFFSET
const { HOVER, UNHOVER, INCR, ASSIGN_INT, CLEAR_INT, RESET } = ACTION

const offsetReducer = (state, { type, payload }) => {

    switch(type) {
        case HOVER:
            return produce(state, draft => {
                draft.hover = true
            })

        case UNHOVER:
            return produce(state, draft => {
                draft.hover = false
            })

        case INCR:
            return produce(state, draft => {
                if (draft.amt < 45) {
                    draft.amt += 1
                } else {
                    draft.amt = 5
                }
            })

        case ASSIGN_INT:
            return produce(state, draft => {
                draft.int = payload
            })

        case CLEAR_INT:
            if(state.int) { clearInterval(state.int) }
            return produce(state, draft => {
                draft.int = null
            })

        case RESET:
            return produce(state, draft => {
                draft.amt = 30
            })

        default:
            return state
    }
}

export {
    initOffset,
    OFFSET,
    offsetReducer
}