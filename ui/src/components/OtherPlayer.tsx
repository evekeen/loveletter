import * as React from 'react';
import {Score} from './Score';
import {Player} from '../model/Player';
import {Card} from './Card';
import _ = require('lodash');

export interface PlayerProps {
  active: boolean;
  player?: Player;
  selectable: boolean;
  selected: boolean;
  onClick: (player: Player) => void;
}

export const OtherPlayer = (props: PlayerProps) => {
  const disabledClass = props.selectable ? '' : 'disabled';
  const selectedClass = props.selected ? 'player-selected' : '';
  const activeClass = props.active ? 'player-active' : '';
  const select = props.selectable ? props.onClick : _.noop;
  return (
    <div className='player-wrapper'>
      <div className={`player ${selectedClass} ${disabledClass} ${activeClass}`} onClick={() => select(props.player)}>
        <h3>{props.player?.name || 'Unknown'}</h3>
        <Card/>
      </div>
      <Score score={props.player?.score || 0}/>
    </div>
  );
};