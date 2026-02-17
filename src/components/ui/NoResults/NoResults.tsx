import styles from './NoResults.module.scss';
import searchX from './image/search-x.svg';

interface Props {
  category?: string;
}

export const NoResults = ({ category = 'products' }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={searchX}
        alt="No results found"
        className={styles.icon}
      />
      <h2 className={styles.title}>No {category} found</h2>
      <p className={styles.message}>
        We couldnt find any results matching your search query.
      </p>
    </div>
  );
};
