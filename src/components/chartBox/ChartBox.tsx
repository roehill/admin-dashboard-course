import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import "./chartBox.scss";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                position={{ x: 10, y: 70 }}
                labelStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", border: "none" }}
              />
              <Line dot={false} type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
