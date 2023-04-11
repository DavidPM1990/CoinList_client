// import { useEffect, useState } from 'react';
// // import ChartAxios from '../../services/chartAxios';







// import useAxios from '../../hooks/useAxios';
// import { useParams } from 'react-router-dom';

// const OneChart = () => {
//     const { id } = useParams();
//     const { response } = useAxios(`coins/${id}/market_chart?vs_currency=eur&days=365`);

//     console.log('holaaaa segundo intentoooooooooooooooooo', response)

//     return (
//         <div>hola</div>
//     )
// }

// export default OneChart











// -----------------------------------------------------------------------------------
// const OneChart = () => {

//     const axiosChart = new ChartAxios();
//     const [chart, setChart] = useState({});
//     const { id } = useParams();


//     const getOneChart = (id) => {
//         axiosChart
//             .getChart(id)
//             .then((chart) => {
//                 setChart(chart)
//             })
//             .catch((err) => console.log(err))
//     }



//     useEffect(() => {
//         getOneChart(id)
//     }, [])

//     console.log('estoy aquiiiiiii ------>', chart)

// }
// export default OneChart