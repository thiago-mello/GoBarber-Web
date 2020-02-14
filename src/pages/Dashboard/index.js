import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
  isEqual,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { Container, Time } from './styles';
import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const response = await api.get('schedule', { params: { date } });
      console.log(response.data);
      const daySchedule = range.map(time => {
        const roundDate = setSeconds(setMinutes(setHours(date, time), 0), 0);
        const [stringDate] = utcToZonedTime(roundDate, timezone)
          .toISOString()
          .split('.');
        const compareDate = parseISO(`${stringDate}.000Z`);

        return {
          time: `${time}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(appointment =>
            isEqual(parseISO(appointment.date), compareDate)
          ),
        };
      });

      setSchedule(daySchedule);
    }

    loadSchedule();
  }, [date]);

  function handleSubDay() {
    setDate(subDays(date, 1));
  }

  function handleAddDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft onClick={handleSubDay} size={36} color="#fff" />
        </button>

        <strong>{formattedDate}</strong>

        <button onClick={handleAddDay} type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
