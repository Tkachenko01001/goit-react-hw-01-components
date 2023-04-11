import { StatisticList, StatisticListItem, SectionStat } from "components/Statistics/Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({stats, title}) => {
    return (
    <SectionStat>
      {title &&<h2>{title}</h2>}
        <StatisticList>
          {stats.map(stat => (
            <StatisticListItem key={stat.id}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
            </StatisticListItem>
           ))}
        </StatisticList>
    </SectionStat>
    );
};

const statisticsShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
});

Statistics.propTypes = {
  stats: PropTypes.arrayOf(statisticsShape).isRequired,
  title: PropTypes.string.isRequired
};


export default Statistics;