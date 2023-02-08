import css from './statistics.module.css';
import PropTypes from "prop-types";

const randomColor = () => {
    const color = ['#'];
    for(let i=0; i<3; i+=1) {
      const num = Math.random() * (90 - 20) + 20;
      color.push(num.toString(16).slice(-2).toUpperCase());
    }
    return color.join('');
}

export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ?? "Upload stats"}</h2>

      <ul className={css.statlist}>
        {stats.map(item => (
            <li className={css.item} style={{backgroundColor:randomColor()}} key={item.id}>
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