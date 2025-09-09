const Result = (props) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">
        Bạn trả lời đúng {props.score}/{props.totalQuestionNum} câu 👏👏👏
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={props.recordQuiz}>
          Xem lại
        </button>
        <button className="result-button" onClick={props.restartQuiz}>
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Result;
