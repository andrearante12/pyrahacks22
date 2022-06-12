import { useState } from "react";

import Question from "./Question";
import * as q from "./QuestionsData.js";

function Questions() {
  const [questions] = useState(q.questions);
  const [current, setCurrent] = useState(0);
  const [msg, setMsg] = useState("");
  const [correct, setCorrect] = useState(0);

  return (
    <div>
      {current > 6 ? (
        <div className="row question">
          <h1>
            You got {correct} out of 7 questions right! Hope you learned
            something new!
          </h1>
        </div>
      ) : (
        <Question
          key={questions[current].key}
          id={questions[current].key}
          question={questions[current].question}
          answer={questions[current].answer}
          choices={questions[current].choices}
          explanation={questions[current].explanation}
          msg={msg}
          updateMsg={setMsg}
          current={current}
          correct={correct}
          setCorrect={setCorrect}
          moveOn={setCurrent}
        />
      )}
    </div>
  );
}

export default Questions;
