//案例2：有默认值
import React from 'react';
import {interval} from 'rxjs';
import {useObservable} from 'rxjs-hooks'
 export default function Timer(){
    const val = useObservable(()=>interval(1000),-1)
    return <h1>{val}</h1>
}