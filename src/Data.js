import hocusPocusQuestionImg from "./imgs/hocuspocus-question.jpg";
import hocusPocusAnswerImg from "./imgs/hocuspocus-answer.jpg";
import gremlinsQuestionImg from "./imgs/gremlins-question.jpg";
import gremlinsAnswerImg from "./imgs/gremlins-answer.jpg";
import silenceOfTheLambsQuestionImg from "./imgs/silenceofthelambs-question.jpg";
import silenceOfTheLambsAnswerImg from "./imgs/silenceofthelambs-answer.jpg";
import alienQuestionImg from "./imgs/alien-question.jpg";
import alienAnswerImg from "./imgs/alien-answer.jpg";
import cujoQuestionImg from "./imgs/cujo2-question.jpg";
import cujoAnswerImg from "./imgs/cujo2-answer.jpg";

// Categories
export const categories = [
  "Movie Pets",
  "Famous Witches and Wizards",
  "Urban Legends",
  "Costumes",
];

// Questions and choices
export const questions = [
  [
    { image: hocusPocusQuestionImg },
    { image: silenceOfTheLambsQuestionImg },
    { image: cujoQuestionImg },
    { image: gremlinsQuestionImg },
    { image: alienQuestionImg },
  ],
  ["Q1 Cat2", "Q2 Cat2", "Q3 Cat2", "Q4 Cat2", "Q5 Cat 2"],
  [
    // Urban Legends category
    {
      question: "question 1",
      choices: [
        "A) ",
        "B) ",
        "C) ",
        "D) "
      ],
    },
    {
      question: "question 2",
      choices: [
        "A) ",
        "B) ",
        "C) ",
        "D) "
      ],
    },
    {
      question: "question 3",
      choices: [
        "A) ",
        "B) ",
        "C) ",
        "D) "
      ],
    },
    {
      question: "question 4",
      choices: [
        "A) ",
        "B) ",
        "C) ",
        "D) "
      ],
    },
    {
      question: "question 5",
      choices: [
        "A) ",
        "B) ",
        "C) ",
        "D) "
      ],
    },
  ],
  ["Q1 Cat4", "Q2 Cat4", "Q3 Cat4", "Q4 Cat4", "Q5 Cat 4"],
];

// Answers
export const answers = [
  [
    { image: hocusPocusAnswerImg },
    { image: silenceOfTheLambsAnswerImg },
    { image: cujoAnswerImg },
    { image: gremlinsAnswerImg },
    { image: alienAnswerImg },
  ],
  ["A1 Cat2", "A2 Cat2", "A3 Cat2", "A4 Cat2", "A5 Cat2"],
  ["A1 Cat2", "A2 Cat2", "A3 Cat2", "A4 Cat2", "A5 Cat2"],
  ["A1 Cat4", "A2 Cat4", "A3 Cat4", "A4 Cat4", "A5 Cat4"],
];
