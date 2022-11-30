import React,{useState,useEffect} from 'react'

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // const timer=setInterval(() => {
    //   console.log( `You clicked ${count} times`);
    // }, 1000);
    return () => {
      console.log('test')
    //  clearInterval(timer)
    }
  })
  
  return (
   <>
    <div>{count}</div>
    <button onClick={()=>{setCount(count+1)}}>+1</button></>
  )
}
