import { useEffect, useState } from "react";
import Result from "./Result";

const quizData = [
  {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Bộ nhớ Stack dùng để làm gì?",
    options: [
      "Lưu trữ dữ liệu dạng hàng đợi",
      "Lưu trữ các lời gọi hàm (function calls)",
      "Lưu ảnh",
      "Lưu video",
    ],
    answer: "Lưu trữ các lời gọi hàm (function calls)",
  },
  {
    question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    question: "JSON là viết tắt của gì?",
    options: [
      "Java Syntax Object Notation",
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "Java Server Object Notation",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question:
      "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Queue",
  },
  {
    question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
    options: ["print()", "console.log()", "echo()", "show()"],
    answer: "console.log()",
  },
  {
    question:
      "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình để xử lý logic",
      "Ngôn ngữ đánh dấu để tạo cấu trúc website",
      "Framework của JavaScript",
      "Trình duyệt web",
    ],
    answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
  },
  {
    question: "Trong thuật toán, Big O dùng để đo gì?",
    options: [
      "Tốc độ mạng",
      "Thời gian load ảnh",
      "Độ phức tạp của thuật toán",
      "Dung lượng RAM máy tính",
    ],
    answer: "Độ phức tạp của thuật toán",
  },
  // --- Thêm mới ---
  {
    question: "Trong CSS, thuộc tính nào dùng để đổi màu chữ?",
    options: ["background-color", "font-color", "color", "text-style"],
    answer: "color",
  },
  {
    question: "DOM trong JavaScript là gì?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Dynamic Object Mapping",
      "Desktop Oriented Module",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Câu lệnh nào khai báo hằng số trong JavaScript?",
    options: ["let", "var", "const", "define"],
    answer: "const",
  },
  {
    question: "Hàm nào dùng để chuyển JSON string thành object trong JS?",
    options: ["JSON.stringify()", "JSON.parse()", "parseInt()", "toObject()"],
    answer: "JSON.parse()",
  },
  {
    question: "Ký hiệu nào để comment một dòng trong JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: "//",
  },
  {
    question: "Trong SQL, câu lệnh nào dùng để lấy dữ liệu?",
    options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
    answer: "SELECT",
  },
  {
    question: "Trong JavaScript, NaN nghĩa là gì?",
    options: [
      "Not a Null",
      "Not a Number",
      "Negative and Null",
      "New Assigned Number",
    ],
    answer: "Not a Number",
  },
  {
    question: "Phương thức nào dùng để thêm phần tử cuối cùng vào mảng?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "Ngôn ngữ nào chạy ở phía client trong web?",
    options: ["JavaScript", "PHP", "Node.js", "Python"],
    answer: "JavaScript",
  },
  {
    question: "Trong lập trình, từ khóa OOP viết tắt của gì?",
    options: [
      "Object-Oriented Programming",
      "Online Operation Process",
      "Open Optimization Plan",
      "Object Order Protocol",
    ],
    answer: "Object-Oriented Programming",
  },
  {
    question: "Hàm nào dùng để lấy độ dài của chuỗi trong JS?",
    options: ["length()", "count()", "size()", "length"],
    answer: "length",
  },
  {
    question: "CSS viết tắt của gì?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Control Style Syntax",
      "Custom Script Sheet",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "HTTP status code 404 có nghĩa là gì?",
    options: ["Server Error", "Not Found", "Unauthorized", "Bad Request"],
    answer: "Not Found",
  },
  {
    question: "Hàm `setTimeout` trong JS dùng để làm gì?",
    options: [
      "Lặp lại mãi mãi",
      "Chạy code sau một khoảng thời gian",
      "Dừng chương trình",
      "Chạy ngay lập tức",
    ],
    answer: "Chạy code sau một khoảng thời gian",
  },
  {
    question: "Trong Git, lệnh nào để đưa thay đổi lên GitHub?",
    options: ["git pull", "git push", "git commit", "git clone"],
    answer: "git push",
  },
  {
    question: "Nguyên lý hoạt động của Stack là gì?",
    options: [
      "FIFO - First In First Out",
      "LIFO - Last In First Out",
      "Random Access",
      "Binary Search",
    ],
    answer: "LIFO - Last In First Out",
  },
];


const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState("");

  const [userAnswers, setUserAnswer] = useState(
    Array.from({ length: quizData.length })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const [score, setScore] = useState(0);

  const handleSelectOption = (option, index) => {
    setOptionSelected(option);

    const newUserAnswer = [...userAnswers];
    newUserAnswer[currentQuestion] = index;
    setUserAnswer(newUserAnswer);
  };

  const goNext = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsQuizEnded(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
    setOptionSelected("");
    setScore(0);
    setUserAnswer(Array.from({ length: quizData.length }));
  };

  const recordQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
  };

  useEffect(() => {
    const answer = Number(userAnswers[currentQuestion]);
    const pastOptionSelected = quizData[currentQuestion].options[answer];

    if (answer !== undefined) {
      setOptionSelected(pastOptionSelected);
    } else {
      setOptionSelected("");
    }
  }, [currentQuestion, userAnswers]);

  useEffect(() => {
    if (optionSelected === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  }, [optionSelected]);

  if (isQuizEnded) {
    return (
      <Result
        score={score}
        totalQuestionNum={quizData.length}
        restartQuiz={restartQuiz}
        recordQuiz={recordQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Câu {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={`option ${optionSelected === option ? "selected" : ""}`}
          disabled={!!optionSelected && optionSelected !== option}
          onClick={() => handleSelectOption(option, index)}
        >
          {option}
        </button>
      ))}
      {optionSelected ? (
        optionSelected === quizData[currentQuestion].answer ? (
          <p className="correct-answer">Câu trả lời của bạn chính xác</p>
        ) : (
          <p className="incorrect-answer">
            Câu trả lời của bạn không chính xác
          </p>
        )
      ) : (
        ""
      )}
      <div className="nav-buttons">
        <button onClick={goBack} disabled={currentQuestion === 0}>
          Quay lại
        </button>
        <button onClick={goNext} disabled={!optionSelected}>
          {currentQuestion === quizData.length - 1
            ? "Hoàn thành Quiz"
            : "Kế tiếp"}
        </button>
      </div>

      {/* <p>Câu trả lời của bạn: {optionSelected}</p> */}
    </div>
  );
};

export default Quiz;
