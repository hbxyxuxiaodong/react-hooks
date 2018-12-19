//useObservable 案例1 无默认值，不依赖外部状态
import React from 'react';
import {interval} from 'rxjs';
import {useObservable} from 'rxjs-hooks'
 export default function Timer(){
    const val = useObservable(()=>interval(1000))
    return <h1>{val}</h1>
}