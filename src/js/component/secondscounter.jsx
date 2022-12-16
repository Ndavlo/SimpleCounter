import React from 'react'

const SecondsCounter = (props) =>{
return <body> <div id="titulo" ><h1>Cuenta hasta 24 hrs. Despues, reinicia desde 0.</h1></div>
 <div className='counter'><div className='hours2'><h1>{props.hours2}</h1></div> <div className='hours'><h1>{props.hours}</h1></div> <h1 id='dots'>:</h1> <div className='minutes2' ><h1>{props.minutes2}</h1></div> <div className='minutes'><h1>{props.minutes}</h1></div> <h1 id='dots'>:</h1> <div className='seconds2'><h1>{props.seconds2}</h1></div> <div className='seconds'><h1>{props.seconds}</h1></div>
</div> </body>

}

export default SecondsCounter