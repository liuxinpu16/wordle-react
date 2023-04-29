const Modal = ({ won, turn, solution }) => {
  return (
    <div className="modal">
      {won ? (
        <div>
          <h1>You Won</h1>
          <p className="solution">{solution}</p>
          <p> You won in {turn} guesses !!!!</p>
        </div>
      ) : (
        <div>
          <h1>You Lose!</h1>
          <p className="solution">{solution}</p>
          <p> GG</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
