export function Statistic({positive, good, bad, neutral, total }) {
  return (
    <div className="cont">
      <ul className="stats">
        <li className="statsList">
          <span>Good:{good}</span>
        </li>
        <li className="statsList">
          <span>Bad:{bad}</span>
        </li>
        <li className="statsList">
          <span>Neutral:{neutral}</span>
        </li>
        <li className="statsList">
          <span>Total:{total}</span>
        </li>
        <li className="statsList">
            <span>Positive:{positive}%</span>
        </li>
      </ul>
    </div>
  );
}
