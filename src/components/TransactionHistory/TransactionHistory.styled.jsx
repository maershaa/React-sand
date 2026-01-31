import styled from '@emotion/styled';

const TableWrapper = styled.div`
  background-color: rgb(176, 188, 251);
  padding: 40px;
`;

const TransactionHistoryTable = styled.table`
  max-width: 500px;
  width: 100%;

  margin: 0 auto;

  border-collapse: collapse;

  thead th {
    background-color: rgb(232, 155, 244);
    color: white;
    border: 2px dashed rgb(255, 255, 255);
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
    background-color: lightyellow;
  }

  tbody tr:nth-child(odd) {
    background-color: rgb(176, 230, 251);
  }
`;
export { TableWrapper, TransactionHistoryTable };
