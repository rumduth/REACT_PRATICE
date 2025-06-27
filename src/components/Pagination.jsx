export default function Pagination({ onNext, onPrev }) {
  return (
    <>
      <button onClick={onPrev}>Prev</button>
      <span> </span>
      <button onClick={onNext}>Next</button>
    </>
  );
}
