const header = (props) => {
  return (
    <div className="headers">
      <h1>Memory Game</h1>
      <h3>High score: {props.highScore}</h3>
      <h3>Score: {props.score}</h3>
    </div>
  );
};
export default header;
