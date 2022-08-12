import React, { useEffect, useState } from "react";

interface Props {
  start: Date;
  end: Date;
}

const timerString = (time: number): string => {
  if (time < 10) {
    return "0" + time.toString();
  }
  return time.toString();
};

const Timer: React.FC<Props> = ({ start, end }) => {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate > today) {
      timeBetweenDates(startDate, endDate);
    } else {
      setTimer(
        setInterval(function () {
          timeBetweenDates(startDate, endDate);
        }, 1000)
      );
    }
  }, []);

  function timeBetweenDates(start, end) {
    const rightNow = new Date().getTime();
    const startTime = start.getTime();
    const endTime = end.getTime();

    const difference =
      start > rightNow ? endTime - startTime : endTime - rightNow;

    if (difference <= 0) {
      // timer finished
      clearInterval(timer);
    } else {
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      //   var days = Math.floor(hours / 24); - no days included in timer

      // calculate mods
      // hours %= 24; // not using days, don't mod hours
      minutes %= 60;
      seconds %= 60;

      // set state
      setSeconds(timerString(seconds));
      setMinutes(timerString(minutes));
      setHours(timerString(hours));
    }
  }

  return (
    <>
      {hours}:{minutes}:{seconds}
    </>
  );
};

export default Timer;
