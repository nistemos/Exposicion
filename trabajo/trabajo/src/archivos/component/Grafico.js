import React, { useRef} from 'react';
import {Button, From, FromGroup, label, Imput, FromText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Pie} from 'react-chartjs-2'

const Grafico = () => {
    const myRef=useRef();
    return (
        <div>
            
            <Pie ref={myRef} data={{

                labels:['enero,febreo'],

                datasets:[{

                    label:'',
                    data:[50,25],
                    backgroundColor:['#63B4A3',
                    '#63B4A3'],
                    borderColor:['#B47563',
                    '#B47563'],
                    borderWirdth: 1,
                },{

                    label:'',
                    data:[50,25],
                    backgroudColor:['#63B4A3',
                    '#63B4A3'],
                    borderColor:['#63B4A3',
                    'rgb(#63B4A3)'],
                    borderWirdth: 1,

                }]

            }} height={100}
                width={200} />
    

        </div>

    )


}
export default Grafico