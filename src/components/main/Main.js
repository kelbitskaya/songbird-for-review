import React from 'react';
import Card from './Card';
import OptionsList from './OptionsList';
import Button from './Button';
import TextPlaceholder from './TextPlaceholder';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: '',
      isAnswerRight: false,
    };
  }

  applyQuestionGuess = () => {

    this.setState({
      isAnswerRight: true,
    });
  };

  handleAnswerClick = (isAnswerRight, selectedVariant) => {
    this.setState({
      selectedVariant,
    });
    if (isAnswerRight) {
      this.applyQuestionGuess();
    }
    this.props.handleAnswerClick(isAnswerRight);
  };

  handleButtonClick = () => {
    if (this.state.isAnswerRight) {
      this.props.handleButtonClick();
    }
  };


  render() {
    const { numberOfRightOption, data } = this.props;
    const { selectedVariant, isAnswerRight } = this.state;
    const selectedBird = data.find((bird) => bird.id === selectedVariant);
    const appliedBird = data.find((bird) => bird.id === numberOfRightOption);
    const templateBird = {
      name: '*****',
      image: 'https://sun9-41.userapi.com/c855724/v855724227/1f08d8/g6r40iPNsL8.jpg',
      audio: appliedBird.audio,
    };
    return (
      <>
        <div className="question">
          {
          isAnswerRight
            ? <Card data={appliedBird} />
            : <Card data={templateBird} />
        }

        </div>
        <div className="page__block-2-column">
          <OptionsList data={data} numberOfRightOption={numberOfRightOption} handleAnswerClick={this.handleAnswerClick} />
          {
          selectedVariant
            ? <Card data={selectedBird} fullVariant />
            : <TextPlaceholder />
        }
        </div>
        <div className="controls">
          <Button buttonclass="controls__next" value="Следующий уровень" disabled={!isAnswerRight} handleClick={this.handleButtonClick} />
        </div>
      </>
    );
  }
}
