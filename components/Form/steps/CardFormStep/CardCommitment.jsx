import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { commitment as commitmentPropType } from '../../../../proptypes/card';
import Checkbox from '../../../Checkbox';
import RichText from '../../../RichText';

const CardCommitment = ({ commitment, checked: checkedInitial, onChange }) => {
  const [checked, setChecked] = useState(checkedInitial);
  const onClick = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  return (
    <div
      className="flex items-center py-9 border-solid border-b border-gray border-opacity-25 cursor-pointer select-none hover:opacity-85"
      onClick={() => onClick()}
    >
      <div>
        <Checkbox checked={checked} />
      </div>
      <div className="flex-grow px-6 leading-snug">
        <RichText text={commitment.text} />
      </div>
      <div className="w-16 flex-shrink-0">
        {commitment.icon && (
          <SVG
            src={commitment.icon.url}
            className="w-full h-auto text-blueZodiac fill-current"
          />
        )}
      </div>
    </div>
  );
};

CardCommitment.propTypes = {
  commitment: commitmentPropType.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardCommitment;
