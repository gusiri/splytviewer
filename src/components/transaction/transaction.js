import React from 'react'; // eslint-disable-line no-unused-vars
import './transaction.css';
import {gweiToEther} from '../../helper';
import {TX_BLACK_ETHER, STAKE_MANAGER, SPLYT_MANAGER, ASSET_MANAGER, ORDER_MANAGER, ARBITRATION_MANAGER, REPUTATION_MANAGER} from '../../config';


export default ({
  data,
  onSelect,
  onClick,
  fromHighlight,
  fromColor,
  toHighlight,
  toColor
}) => {
  const {input, hash, value, to, from} = data;
  const hasInput = input.length > 3;
  const isFrom = fromHighlight === from;
  const isTo = toHighlight === to;
  const etherValue = Math.min(gweiToEther(value), TX_BLACK_ETHER);
  const luminance = Math.max(8, Math.round(etherValue / TX_BLACK_ETHER * 100));
  let color = `hsla(1, 0%, ${100 - luminance}%, 1)`;

  if (isFrom) {
    color = fromColor;
  }

  if (isTo) {
    color = toColor;
  }


// splyt contract address for each manager
  const classes = [
    'transaction',
    (	from === STAKE_MANAGER || to === STAKE_MANAGER ||
	from === SPLYT_MANAGER || to === SPLYT_MANAGER ||
	from === ASSET_MANAGER || to === ASSET_MANAGER ||
	from === ORDER_MANAGER || to === ORDER_MANAGER ||
	from === ARBITRATION_MANAGER || to === ARBITRATION_MANAGER ||
	from === REPUTATION_MANAGER  || to === REPUTATION_MANAGER) && 'transaction--input',


    (from === STAKE_MANAGER || to === STAKE_MANAGER) && 'transaction--stakeManager',
    (from === SPLYT_MANAGER || to === SPLYT_MANAGER) && 'transaction--splytManager',
    (from === ASSET_MANAGER || to === ASSET_MANAGER) && 'transaction--assetManager',
    (from === ORDER_MANAGER || to === ORDER_MANAGER) && 'transaction--orderManager',
    (from === ARBITRATION_MANAGER || to === ARBITRATION_MANAGER) && 'transaction--arbitrationManager',
    (from === REPUTATION_MANAGER  || to === REPUTATION_MANAGER ) && 'transaction--reputationManager'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={{backgroundColor: color}}
      onMouseEnter={() => onSelect(hash)}
      onMouseLeave={() => onSelect(null)}
      onClick={() => onClick(hash)}
    />
  );
};
