import css from './transactionhistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {

  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr>
          <th>Type</th>
          <th className={css.sideBorder}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
        <tr key={item.id} className={css.tableRow}>
          <td>{item.type}</td>
          <td className={css.sideBorder}>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>

        ))}
        
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })
    )
}