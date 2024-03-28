import styles from './EmptyState.module.css'
import { EmptyStateProps } from './EmptyState.props'

function EmptyState({ children }: EmptyStateProps)  {
	return (
		<div className={styles.movieListEmpty}>
			{children}
		</div>
	)
}

export default EmptyState;