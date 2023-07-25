import {useState} from "react";

interface CounterAppProps {
    value: number
}


export const CounterApp = ({value}: CounterAppProps) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = (): void => {
        setCounter((current: number) => current + 1)
    }

    const handleSubtract = (): void => {
        if (counter === 0) {
            return
        }
        setCounter((current: number) => current - 1)
    }

    const handleReset = (): void => {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubtract}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );
};

