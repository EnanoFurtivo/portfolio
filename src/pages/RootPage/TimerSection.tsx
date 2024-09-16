import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const proExperienceStart = new Date('2021-08-01');

const calculateTimeDifference = () => {
  const now = new Date();
  return {
    years: differenceInYears(now, proExperienceStart),
    months: differenceInMonths(now, proExperienceStart) % 12,
    days: differenceInDays(now, proExperienceStart) % 30,
    hours: differenceInHours(now, proExperienceStart) % 24,
    minutes: differenceInMinutes(now, proExperienceStart) % 60,
    seconds: differenceInSeconds(now, proExperienceStart) % 60
  };
};

const DigitCard = ({ digit }: { digit: number }) => {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (prevDigit !== digit) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setPrevDigit(digit);
      }, 500);
    }
  }, [digit, prevDigit]);

  return (
    <div className={`digit-card-wrapper ${animate ? 'animate' : ''}`}>
      <Card className="digit-card new-card">{digit}</Card>
      {animate && <Card className="digit-card old-card">{prevDigit}</Card>}
    </div>
  );
};

export const TimerSection: React.FC = () => {
  const [timeDiff, setTimeDiff] = useState(calculateTimeDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiff(calculateTimeDifference());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {Object.values(timeDiff).map((value, index) => (
        <DigitCard key={index} digit={value} />
      ))}
    </div>
  );
};
