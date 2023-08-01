'use client';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isLinkVisited, markLinkAsVisited } from '@/components/LinkTracker';

const fetcher = (key) => fetch(key).then((res) => res.json())

const Page = ({module, link}) => {
  const router = useRouter();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  // const url =  process.env.NEXT_PUBLIC_QUIZ_DATA_URL
  const url =  '/quizData_' + module + '.json'
  const {data, error, isLoading} = useSWR(url, fetcher)
  console.log(module)
  console.log(link)
  // useEffect(() => {
  //   if (data != undefined) {
  //     const { questions } = data;
  //     const { question, answers, correctAnswer, qimage, sequence } = questions[activeQuestion];
  //   }
  // }, data)

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    // console.log(idx)
    // console.log(data.questions)
    // console.log(activeQuestion)
    // console.log(data.questions[activeQuestion].answer)
    // console.log(data.questions[activeQuestion].correctAnswer)
    if (answer === data.questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
      // console.log('true');
    } else {
      setSelectedAnswer(false);
      // console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== data.questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      // setActiveQuestion(0);
      console.log(result.correctAnswers)
      console.log(data.totalQuestions)
      if (result.correctAnswers >= data.totalQuestions - 1)
      {
          console.log('Pass!!')
          markLinkAsVisited(link)
      }
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/80 z-[-5]"></div>
        <div className='pt-[90px] max-w-[1000px] mx-auto'>
          <div className="flex flex-col justify-center items-center"></div>

            <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-start items-center h-screen'>
              <h1 className='text-3xl'>Quiz Page</h1>
              <div className='pb-4'>
                <h2 className='text-2xl'>
                  Question: {activeQuestion + 1}
                  <span>/{data.questions.length}</span>
                </h2>
              </div>
              <div className='p-4'>
                {!showResult ? (
                  <div className='quiz-container'>
                    <div>
                      <h3 className='text-xl flex flex-col  font-bold pb-4'>{data.questions[activeQuestion].question}</h3>
                      <ul id="items">
                      {data.questions[activeQuestion].answers.map((answer, idx) => (
                        <li
                          key={idx}
                          onClick={() => onAnswerSelected(answer, idx)}
                          className={ 
                            selectedAnswerIndex === idx ? 'bg-blue-400 text-white border-2 list-none w-full m-1 p-2' : 'hover:bg-blue-200 border-2 list-none w-full m-1 p-2'
                          }
                        >
                          <span>{answer}</span>
                        </li>
                      ))}
                      {checked ? (
                        <button onClick={nextQuestion} className='bg-green-400  text-gray-800 w-full m-1 p-2'>
                          {activeQuestion === data.questions[activeQuestion].question.length - 1 ? 'Finish' : 'Next'}
                        </button>
                      ) : (
                        <button onClick={nextQuestion} disabled className='border-2 bg-gray-400 text-gray-800 w-full m-1 p-2'>
                          {' '}
                          {activeQuestion === data.questions[activeQuestion].question.length - 1 ? 'Finish' : 'Next'}
                        </button>
                      )}
                      </ul>
                    </div>
                    {data.questions[activeQuestion].qimage && (
                    <div>
                      <img className='mt-8 w-full mx-auto' src={"/" + data.questions[activeQuestion].qimage} alt='image'/>
                    </div>
                    )}
                    {data.questions[activeQuestion].sequence && (
                      <ul className='pt-8'>
                        {data.questions[activeQuestion].sequence.map((list, idx) =>(
                          <li key={idx} className='hover:bg-gray-400 border-2 list-none w-full m-1 p-2'>
                            {list}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className='quiz-container'>
                    <h3>Results</h3>
                    <h3>Overall {((result.score / (5 * data.totalQuestions)) * 100).toFixed(2)}%</h3>
                    <p>
                      Total Questions: <span>{data.questions.length}</span>
                    </p>
                    <p>
                      Total Score: <span>{result.score}</span>
                    </p>
                    <p>
                      Correct Answers: <span>{result.correctAnswers}</span>
                    </p>
                    <p>
                      Wrong Answers: <span>{result.wrongAnswers}</span>
                    </p>
                    <button className="w-[6rem] border-2 mt-4 py-2 px-4 bg-orange-300 mx-4" onClick={() =>{ setShowResult(false); setResult({score:0, correctAnswers:0, wrongAnswers:0}); setActiveQuestion(0) } }>Retry</button>
                    <Link href="/modules"><button className="w-[6rem] border-2 mt-4 py-2 px-4 bg-red-500 text-white mx-4">Return</button></Link>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    )}
    </>
  );
};

export default Page;
