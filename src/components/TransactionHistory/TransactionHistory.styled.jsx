import styled from '@emotion/styled';

const TableWrapper = styled.div`
  background-color: ${props => props.theme.colors.background.blueLight};
  padding: 40px;
`;

const TransactionHistoryTable = styled.table`
  max-width: 500px;
  width: 100%;

  margin: 0 auto;

  border-collapse: collapse;

  thead th {
    background-color: ${props => props.theme.colors.background.pinkLight};
    color: ${props => props.theme.colors.other.white};
    border: 2px dashed ${props => props.theme.colors.other.white};
    padding: 10px;
    text-transform: uppercase;
  }

  td,
  th {
    padding: 8px;

    font-size: 1rem;
    font-weight: 400;
  }

  tbody tr:nth-child(even) {
    background-color: ${props => props.theme.colors.background.yellowLight};
  }

  tbody tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.background.skyBlue};
  }
`;
export { TableWrapper, TransactionHistoryTable };
