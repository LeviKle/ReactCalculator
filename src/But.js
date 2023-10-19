import logo from './logo.svg';
import './App.css';
import calculate from './calculation'

import calculateMath from './CalculationStack';

import { useState } from 'react';


// import "bootstrap/dist/css/bootstrap.min.css"

const But = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    //   const [isLoading, setIsLoading] = useState(false);


    const handleClick_lbrac = async () => {
        setData(data + '(');
        setError('');
    };
    const handleClick_rbrac = async () => {
        setData(data + ')');
        setError('');
    };
    const handleClick_C = async () => {
        setData(data.slice(0, data.length - 1));
        setError('');
    };
    const handleClick_div = async () => {
        setData(data + '/');
        setError('');
    };
    const handleClick_7 = async () => {
        setData(data + '7');
        setError('');
    };
    const handleClick_8 = async () => {
        setData(data + '8');
        setError('');
    };
    const handleClick_9 = async () => {
        setData(data + '9');
        setError('');
    };
    const handleClick_multi = async () => {
        setData(data + 'X');
        setError('');
    };
    const handleClick_4 = async () => {
        setData(data + '4');
        setError('');
    };
    const handleClick_5 = async () => {
        setData(data + '5');
        setError('');
    };
    const handleClick_6 = async () => {
        setData(data + '6');
        setError('');
    };
    const handleClick_minus = async () => {
        setData(data + '-');
        setError('');
    };
    const handleClick_1 = async () => {
        setData(data + '1');
        setError('');
    };
    const handleClick_2 = async () => {
        setData(data + '2');
        setError('');
    };
    const handleClick_3 = async () => {
        setData(data + '3');
        setError('');
    };
    const handleClick_plus = async () => {
        setData(data + '+');
        setError('');
    };
    const handleClick_0 = async () => {
        setData(data + '0');
        setError('');
    };
    const handleClick_dot = async () => {
        setData(data + '.');
        setError('');
    };
    const handleClick_AC = async () => {
        setData('');
        setError('');
    };

    const handleClick_equal = async () => {
        //try to calculate, if error: throw error message
        // try {
        setData(calculate(data));
        setError('');
        // } catch (err) {
        //     setError(err.message);
        // }
    };



    return (
        <div className='But' >

            {/* screen */}
            <div class="screen">
                <h1 class="calculation">{data}</h1>
                <h1 class="calculation">{error}</h1>
            </div>

            {/* buttons in order */}
            <button type="button" class="btn " onClick={handleClick_lbrac}>(</button>
            <button type="button" class="btn " onClick={handleClick_rbrac}>)</button>
            <button type="button" class="btn " onClick={handleClick_C}>C</button>
            <button type="button" class="btn " onClick={handleClick_div}>/</button>

            <button type="button" class="btn" onClick={handleClick_7}>7</button>
            <button type="button" class="btn" onClick={handleClick_8}>8</button>
            <button type="button" class="btn" onClick={handleClick_9}>9</button>
            <button type="button" class="btn" onClick={handleClick_multi}>X</button>

            <button type="button" class="btn" onClick={handleClick_4}>4</button>
            <button type="button" class="btn" onClick={handleClick_5}>5</button>
            <button type="button" class="btn" onClick={handleClick_6}>6</button>
            <button type="button" class="btn" onClick={handleClick_minus}>-</button>

            <button type="button" class="btn" onClick={handleClick_1}>1</button>
            <button type="button" class="btn" onClick={handleClick_2}>2</button>
            <button type="button" class="btn" onClick={handleClick_3}>3</button>
            <button type="button" class="btn" onClick={handleClick_plus}>+</button>

            <button type="button" class="btn" onClick={handleClick_0}>0</button>
            <button type="button" class="btn" onClick={handleClick_dot}>.</button>
            <button type="button" class="btn-thin btn" onClick={handleClick_AC}>AC</button>
            <button type="button" class="btn" onClick={handleClick_equal}>=</button>


        </div>
    );
};

export default But;

