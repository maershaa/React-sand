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
  background-color: ${props => props.theme.colors.background.lavender};
`;

const StatisticsTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.other.purple};
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
  color: ${props => props.theme.colors.other.white};

  background-color: ${({ label, theme }) => {
    //В зависимости от label переданого в компонент StatisticsItem как props - будет разный цвет заднего фона на li
    switch (label) {
      case '.pdf':
        return theme.colors.background.pinkLight;
      case '.docx':
        return theme.colors.background.blue;
      case '.xls':
        return theme.colors.background.green;
      case '.txt':
        return theme.colors.background.grayDark;
      case '.mp3':
        return theme.colors.background.purple;
      case '.psd':
        return theme.colors.background.teal;
      default:
        return theme.colors.background.weryDarkGray;
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
