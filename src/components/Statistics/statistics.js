import css from './statistics.module.css';
import PropTypes from "prop-types";
import { randomDarkColor } from 'utils/randomDarkColor';

export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ?? "Upload stats"}</h2>

      <ul className={css.statlist}>
        {stats.map(item => (
            <li className={css.item} style={{backgroundColor:randomDarkColor()}} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired
}