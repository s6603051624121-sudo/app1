import React from 'react'

export function EventData2() {
    const handleEvent = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }

    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }

    return (
        <div style = {{ textAlign: 'center', marginTop: '20px'}}>
            <button onClick = {handleEvent}>Start</button><br/><br/>
            <button onClick = {onClickAdd}>10 + 20</button><br/><br/>
            <button onClick = {onClickAdd}>30 * 40</button><br/><br/>
        </div>
    )
}
