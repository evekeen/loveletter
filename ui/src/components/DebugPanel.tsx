import * as React from 'react';
import {connect} from 'react-redux';
import {startTurn, loadCard, TurnData} from '../reducers/yourTurn';
import {updateCurrentUser, setTable, BoardState} from '../reducers/board';
import {CardType, HandIndex} from '../model/commonTypes';
import _ = require('lodash');
import {useEffect} from 'react';

interface DebugPanelProps {
  loadCard: (turn: TurnData) => void;
  startTurn: (turn: TurnData) => void;
  updateCurrentUser: (index: HandIndex) => void;
  setTable: (board: BoardState) => void;
}

const names = ['Vasya', 'Petya', 'Masha', 'Phillip']

const DebugPanel = (props: DebugPanelProps) => {
  useEffect(() => initGame(props));
  return (
    <div className="debug-panel">
    </div>
  );
};

function initGame(props: DebugPanelProps) {
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
    discardPileTop: randomCard(),
    players: players,
    activeIndex: 4,
    currentUserInTurn: false,
    selectedPlayerIndex: undefined
  });
  props.loadCard({card: randomCard()});
  setTimeout(() => props.startTurn({card: randomCard()}), 2000);
}

function randomCard(): CardType {
  const cards = [
    CardType.Guard, CardType.Guard, CardType.Guard, CardType.Guard, CardType.Guard,
    CardType.Priest, CardType.Priest,
    CardType.Baron, CardType.Baron,
    CardType.Handmaid, CardType.Handmaid,
    CardType.Prince, CardType.Prince,
    CardType.King,
    CardType.Countess,
    CardType.Princess
  ];
  const index = Math.round(Math.random() * cards.length);
  return cards[index];
}

const mapDispatch = {startTurn, loadCard, updateCurrentUser, setTable};

export default connect(null, mapDispatch)(DebugPanel);
