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
import spiceGirlsImg from "./imgs/spicegirls.jpg";
import holyGuacamoleImg from "./imgs/holy-guacamole.jpg";
import hawaiianPunchImg from "./imgs/hawaiianpunch.jpg";
import creativeOutletImg from "./imgs/creativeoutlet.jpg";
import amazonPrimeImg from "./imgs/amazonprime.jpg";

// Categories
export const categories = [
  "Movie Pets",
  "Famous Witches and Wizards",
  "Urban Legends",
  "Costume Puns",
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
  [
    { image: spiceGirlsImg },
    { image: holyGuacamoleImg },
    { image: hawaiianPunchImg },
    { image: creativeOutletImg },
    { image: amazonPrimeImg },
  ],
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
  ["Spice Girls", "Holy guacamole!", "Hawaiian Punch", "Creative outlet", "Amazon Prime"],
];
