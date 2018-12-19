import React from 'react';
import {map,tap} from 'rxjs/operators';
import  {useEventCallback} from 'rxjs-hooks';

export default function Fifth() {
    const [clickCallback, [description, x, y]] = useEventCallback((event$) =>
  
      event$.pipe(
        tap(_=>console.log(_.target,description,x,y)),
        map((event) => [event.target.innerHTML, event.clientX, event.clientY]),
      ),
      ["nothing", 0, 0],
    )
    
    return (
      <div className="App">
        <h1>click position: {x}, {y}</h1>
        <h1>"{description}" was clicked.</h1>
        <button onClick={clickCallback}>click me</button>
        <button onClick={clickCallback}>click you</button>
        <button onClick={clickCallback}>click him</button>
      </div>
    );
  }