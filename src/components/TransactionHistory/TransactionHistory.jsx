import PropTypes from 'prop-types';
import {
  TableWrapper,
  TransactionHistoryTable,
} from '@/components/TransactionHistory/TransactionHistory.styled.jsx';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <TableWrapper>
      <TransactionHistoryTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{Math.ceil(amount)}</td>
              <td>{currency.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </TableWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    //arrayOf — потому что items это массив
    PropTypes.shape({
      //shape — потому что каждый элемент — объект
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
