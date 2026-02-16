import { createFileRoute } from '@tanstack/react-router'
import {useEffect } from 'react'  
import WorkCard from '../companents/WorkCard'
import useWorks from '../hooks/useWorks'
import imageAut from '../assets/c316adc465a80990af3a0075303343f0d615c92a.png'
export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {

  const{
    getWorks,
    isLoading,
    works
  } = useWorks()
 
  useEffect(getWorks, [])

  console.log(works)

  return (
  <> 
  <h1 style={{
          width: 506,
          height: 105,
          top: "228px",
          left: "148px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
        >Hi, I am John, Creative Technologist</h1>
  <h2>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
     Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.</h2>
      <div>
<img src={imageAut} alt="John" style={{
position: "absolute",
width: 100,
height: 100,
left: 760,
top: 60
}}
/>

</div>
  <section>
    <h2>Featured works</h2>
    {/* <button onClick={getWorks}>load</button> */}
    {isLoading ? <p>Loading. . .</p> : null}
    {works.slice(0, 2).map(procs => <WorkCard key={procs.id} {...procs}/>)}

  
  </section>
  </>   
  )
 
}
