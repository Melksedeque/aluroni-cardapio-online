import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page not found</p>
        <p>
          <a href="/">Go back to homepage</a>
        </p>
      </div>
    </div>
  )
}