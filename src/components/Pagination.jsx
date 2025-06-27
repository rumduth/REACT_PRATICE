export default function Pagination({ onNext, onPrev, btnDisabled }) {
  return (
    <>
      <button onClick={onPrev} disabled={btnDisabled[0]}>
        Prev
      </button>
      <span> </span>
      <button onClick={onNext} disabled={btnDisabled[1]}>
        Next
      </button>
    </>
  );
}
