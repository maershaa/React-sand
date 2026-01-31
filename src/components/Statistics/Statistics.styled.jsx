import styled from '@emotion/styled';

export {
  SectionStatistics,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
};

const SectionStatistics = styled.section`
  padding: 50px;
  background-color: rgb(227, 210, 237);
`;

const StatisticsTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(117, 78, 140);
  padding: 20px;
`;

const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* Создай столько колонок, сколько помещается.
Каждая минимум 100px.
Если есть место — растяни их равномерно. */
  margin: 0 auto;
  width: 500px;
`;

const StatisticsItem = styled.li`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  padding: 10px;
  height: 100px;
  color: white;

  background-color: ${({ label }) => {
    //В зависимости от label переданого в компонент StatisticsItem как props - будет разный цвет заднего фона на li
    switch (label) {
      case '.pdf':
        return '#d975be';
      case '.docx':
        return '#70b1dc';
      case '.xls':
        return '#27ae60';
      case '.txt':
        return '#7f8c8d';
      case '.mp3':
        return '#8e44ad';
      case '.psd':
        return '#67d0cd';
      default:
        return '#34495e';
    }
  }};
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const Percentage = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;
