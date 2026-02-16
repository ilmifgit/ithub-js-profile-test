import desDashBourd from '../../assets/1c6bbc0be719e9d93c02a87ba51308ebb0297cdf.png'
import classes from './WorkCard.module.css'
import type { WorkDTO } from '../../types'
type WorkCardProcs = Omit<WorkDTO, "id">

export default function WorkCard({ title, year, tag, description }: WorkCardProcs) {
  return (
    <article className={classes.card}>
      <img className={classes.image} src={desDashBourd} alt="Good Art" />
      <div className={classes.content}>
        <h3>{title}</h3>
        <section className={classes.row}>
          <span className={classes.pill}>{String(year)}</span>
          <span className={classes.tag}>{tag}</span>
        </section>
        <p>{description}</p>
      </div>
    </article>    
  )
}