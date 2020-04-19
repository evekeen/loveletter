import * as React from 'react';
import {connect} from 'react-redux';
import {startTurn, loadCard, TurnData} from '../reducers/yourTurn';
import {updateCurrentUser, setTable, BoardState} from '../reducers/board';
import {Button} from 'react-bootstrap';
import {HandIndex} from '../reducers/board';
import {Player} from '../model/Player';
import _ = require('lodash');

interface DebugPanelProps {
  loadCard: (turn: TurnData) => void;
  startTurn: (turn: TurnData) => void;
  updateCurrentUser: (index: HandIndex) => void;
  setTable: (board: BoardState) => void;
}

const names = ['Vasya', 'Petya', 'Masha', 'Phillip']

const DebugPanel = (props: DebugPanelProps) => {
  const indexes: HandIndex[] = Array.apply(null, Array(4)).map((x: any, index: number) => index);
  const players = _.shuffle(indexes).map(index => ({
    index,
    name: names[index],
    score: Math.round(Math.random() * 5),
    alive: true,
    shield: Math.random() > 0.7,
  }));
  props.setTable({
    deckLeft: 5,
    discardPileTop: 1,
    players: players,
    activeIndex: 4,
    currentUserInTurn: false,
    selectedPlayerIndex: undefined
  });
  props.loadCard({card: 3});
  return (
    <Button variant="secondary" onClick={() => props.startTurn({card: 5})}>Start turn</Button>
  );
};

const mapDispatch = {startTurn, loadCard, updateCurrentUser, setTable};

export default connect(null, mapDispatch)(DebugPanel);