import React from 'react';
import Button from '../main/Button';

export default class Result extends React.Component {

  render() {
    const { score, maxScore } = this.props;
    return (
      <div className="page__block page__block_with-border message__block">
        <h1 className="text text-big">Поздравляю!</h1>
        <p className="text">
          Вы набрали
          {' '}
          <span>{score}</span>
          {' '}
          баллов из
          {' '}
          <span>{maxScore}</span>
        </p>
          <Button value="Пройти ещё раз" disabled={false} handleClick={this.props.handleButtonClick} />

      </div>
    );
  }
}
