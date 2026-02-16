import { createFileRoute } from '@tanstack/react-router'
import WorkCard from '../companents/WorkCard'
import useWorks from '../hooks/useWorks'
import { useEffect } from 'react'
export const Route = createFileRoute('/works')({
  component: WorksPage,
})
function WorksPage() {

  const{
    getWorks,
    isLoading,
    works
  } = useWorks()
 
  useEffect(getWorks, [])

  console.log(works)

  return (
  <section>
    <h2>Featured works</h2>
    {/* <button onClick={getWorks}>load</button> */}
    {isLoading ? <p>Loading. . .</p> : null}
    {works.slice(0, 2).map(procs => <WorkCard key={procs.id} {...procs}/>)}

  
  </section>  
  )
 
}

