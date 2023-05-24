import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';

import moment from 'moment/moment'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartDays } from '../../config/data';
import SelectButton from './DaysButton/DaysButton';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const OneChart = () => {

    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=eur&days=365`);

    if (!response) {
        return <div>Loading ...</div>
    }

    const coinCharData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

    const options = {
        responsive: true,

    }

    const data = {

        labels: coinCharData.map(value => moment(value.x).format('MMM DD')),

        datasets: [
            {
                fill: true,
                label: id,
                data: coinCharData.map(val => val.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]

    }


    return (
        // <div>
        //     <div className="dayButton">
        //         {chartDays?.map((day) =>
        //             <SelectButton key={day.value} onClick={() => setDays(day.value)} selected={day.value === days}>
        //                 {day.label}
        //             </SelectButton>
        //         )}

        //     </div>
        <Line options={options} data={data} />
        // </div >
    )
}

export default OneChart
