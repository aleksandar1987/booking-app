import { useState } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import Times from './Times';

function CalendarB() {

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState();
    const param = useParams();

    return (
        <div className="home">
            <div >
                <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
            </div>

            {date.length > 0 ? (
                <p>
                    <span>Start:</span>
                    {date[0].toDateString()}
                    &nbsp;
                    &nbsp;
                    <span>End:</span>{date[1].toDateString()}
                </p>
            ) : (
                <p>
                    <span>Default selected date:</span>{date.toDateString()}
                </p>
            )
            }
            {showTime ? <Times date={date} id={param.id} /> : null}

        </div>
    )
}

export default CalendarB;