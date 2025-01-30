export default function ResultModal({result, targetTime}){
    return (
        <dialog className="result-modal" open>
            <h2>{result}</h2>
            <p>
                The target time was <strong>{targetTime} strong.</strong>
            </p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}