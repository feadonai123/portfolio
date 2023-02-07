import styles from "./cards.module.css";

interface items {
  title: string
  where: string
  when: string
  description: JSX.Element | string
}

interface cardsProps {
  items: items[]
}

export default function Cards({
  items
} : cardsProps) {
  return (
    <div className={styles.courses}>
      { items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.header}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.date}>{item.when}</div>
          </div>
          <div className={styles.where}>{item.where}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
