import styles from './timeline.module.css'

interface TimelineItem {
  title: string
  where: string
  when: string
  description: string
}

interface TimelineProps {
  timeline: TimelineItem[]
}

export default function Timeline({
  timeline
} : TimelineProps) {
  return (
    <div className={styles.timeline}>
      { timeline.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.date}>{item.when}</div>
          <div className={styles.line}></div>
          <div className={styles.card}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.where}>{item.where}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
