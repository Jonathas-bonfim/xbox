import arrowImg from '../../assets/images/arrow.png';
import arrowActiveImg from '../../assets/images/arrow-active.png';
import { FC, useEffect, useRef, useState } from 'react';

export interface QuestionProps {
  question: string;
  answer: string;
}

export const Questions: FC<QuestionProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current) {
        const clickedElement = e.target;
        const currentValue = ref.current as HTMLElement;
        if (!currentValue.contains(clickedElement as HTMLElement)) {
          setOpen(false);
        }
      }
    });
  }, [])
  function handleClickQuestion() {
    setOpen(!open);
  }
  return (
    <div className="query" ref={ref}>
      <div className="title">
        <h3>{question}</h3>
        <a href={arrowImg} onClick={handleClickQuestion}>
          <img src={open ? arrowActiveImg : arrowImg} alt="Arrow" />
        </a>
      </div>
      {
        open ? <p>{answer}</p> : ''
      }
    </div>
  )
}