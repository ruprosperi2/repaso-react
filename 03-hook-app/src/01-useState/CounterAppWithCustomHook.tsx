import {useCounter} from "../hooks/useCounter.ts";

export const CounterAppWithCustomHook = () => {
  const {counter, increment, reset, decrement}=useCounter(15);

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr/>

      <button className={"btn btn-primary"} onClick={()=>increment(5)}>+Increment</button>
      <button className={"btn btn-primary"} onClick={reset}>Reset</button>
      <button className={"btn btn-primary"} onClick={()=>decrement(7)}>Decrement</button>
    </>
  );
};

