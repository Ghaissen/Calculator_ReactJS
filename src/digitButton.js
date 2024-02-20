import { ACTIONS } from "./App"
export default function Digitbutton({ dispatch, digit }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.add_digit, payload: { digit } })}>
            {digit}
        </button>
    )
}