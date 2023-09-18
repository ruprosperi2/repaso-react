import {useState} from "react";

interface useCounterResponse {
  counter: number,
  increment: (value?:number) => void
  reset: () => void
  decrement: (value?:number) => void
}

export const useCounter = (initialValue =10):useCounterResponse=>{
  const [counter, setCouter] = useState(initialValue);

  const increment = (value=1):void=>{
    setCouter(counter+value);
  };

  const reset = ():void=>{
    setCouter(initialValue);
  };

  const decrement = (value=1):void=>{
    if(counter < 0){
      return;
    }
    setCouter(counter-value);
  };
  return {
    counter,
    increment,
    reset,
    decrement
  };
};