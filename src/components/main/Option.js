import React from 'react';

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswerClicked: false,
      isAnswerCorrect: '',
    };
  }

  handleClick = () => {
    if (this.props.handleClick(this.props.id)) {
      this.setState({
        isAnswerClicked: true,
        isAnswerCorrect: true,
      });
    } else if (this.props.shouldUpdateClass) {
      this.setState({
        isAnswerClicked: true,
        isAnswerCorrect: false,
      });
    }
  };

  render() {
    const { value } = this.props;
    const { isAnswerClicked, isAnswerCorrect } = this.state;
    return (
      <li
        className={`options-list__item ${(isAnswerClicked ? (isAnswerCorrect ? 'success' : 'error') : '')}`}
        onClick={this.handleClick}>
          <span className="options-list__btn"></span>
        {value}
      </li>
    );
  }
}
