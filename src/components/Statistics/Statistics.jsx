import { StatisticList, StatisticListItem, SectionStat } from "components/Statistics/Statistics.styled";

const Statistics = ({stats, title}) => {
    return (
    <SectionStat>
      <h2>{title}</h2>
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

export default Statistics;