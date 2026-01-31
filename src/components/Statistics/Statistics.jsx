import PropTypes from 'prop-types';
import {
  SectionStatistics,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
} from '@/components/Statistics/Statistics.styled.jsx';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <SectionStatistics>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </SectionStatistics>
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
  ).isRequired,
};

export default Statistics;
