import React from 'react';
import PropTypes from 'prop-types';

// Credits to https://jsfiddle.net/davidg707/nwqkqqv9/

function getCoordinatesForPercent(circleRadius, percent) {
  const x = Math.cos(circleRadius * Math.PI * percent);
  const y = Math.sin(circleRadius * Math.PI * percent);
  return [x, y];
}

const ProgressCircle = ({ percent }) => {
  const circleRadius = 2;
  const [startX, startY] = getCoordinatesForPercent(circleRadius, 0);
  const [endX, endY] = getCoordinatesForPercent(circleRadius, percent);
  const largeArcFlag = percent > 0.5 ? 1 : 0;

  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');

  return (
    <svg
      viewBox="-1.25 -1.25 2.5 2.5"
      style={{ transform: 'rotate(-270deg)' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="1.25" className="fill-white" />
      <circle cx="0" cy="0" r="1" className="fill-white" />
      <path d={pathData} className="fill-chelseaCucumber" />
    </svg>
  );
};

ProgressCircle.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressCircle;
