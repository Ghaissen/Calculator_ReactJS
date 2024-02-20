import { ACTIONS } from "./App"
export default function OperationButton({ dispatch, operation }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.choose_operation, payload: { operation } })}>
            {operation}
        </button>
    )
}