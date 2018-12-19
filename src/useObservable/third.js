
//案例3：依赖上一次的执行状态
import React from 'react';
import {interval} from 'rxjs';
import {withLatestFrom,map,tap} from 'rxjs/operators'
import {useObservable} from 'rxjs-hooks'
export default function Timer(){
    const val = useObservable(state$=>interval(1000).pipe(
        withLatestFrom(state$),
        tap(_=>console.log(_)),
        map(([index,prevVal])=> {
            console.log(index,prevVal)
            return index+prevVal
        }),
    ),-50)
    return <h1>{val}</h1>
}