import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  passedDownRef
) {
  const dialog = useRef();

  useImperativeHandle(passedDownRef, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <>
      <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>X seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;
