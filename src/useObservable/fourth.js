import React ,{useState}from 'react';
import { timer } from 'rxjs';
import { useObservable } from 'rxjs-hooks';
import {map,combineLatest,tap} from 'rxjs/operators'
function Timer({ a }) {
  const [b, setB] = useState(0);
  const val = useObservable(
    (inputs$, _state$) => timer(1000).pipe(
      tap((a)=>console.log(a)),
      combineLatest(inputs$),
      tap(_=>console.log(_)),
      map(([_, [a, b]]) => a + b),
    ),
    10,
    [a, b],
  );
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={() => setB(b + 10)}>b: +10</button>
    </div>
  )
}
export default function Fourth() {
  const [a, setA] = useState(100);
  return (
    <div>
      <Timer a={a} />
      <button onClick={() => setA(a + 100)}>a: +100</button>
    </div>
  );
}