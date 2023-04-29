const Modal = ({ won, turn, solution }) => {
  return (
    <div className="modal">
      <div>
        {won ? (
          <>
            <h1>You Won</h1>
            <p className="solution">{solution}</p>
            <p> You won in {turn} guesses !!!!</p>
          </>
        ) : (
          <>
            <h1>You Lose!</h1>
            <p className="solution">{solution}</p>
            <p> GG</p>
          </>
        )}
        <button onClick={() => location.reload()}>Restart </button>
      </div>
    </div>
  );
};

export default Modal;
