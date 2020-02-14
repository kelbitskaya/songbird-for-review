import React from 'react';
import Option from './Option';

export default class OptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdateClass: true,
    };
  }

  handleAnswerClick = (selectedVariant) => {
    if (selectedVariant === this.props.numberOfRightOption) {
      this.props.handleAnswerClick(true, selectedVariant);
      this.disableClassChange();
      return true;
    }
    this.props.handleAnswerClick(false, selectedVariant);
    return false;
  };

  disableClassChange = () => {
    this.setState({
      shouldUpdateClass: false,
    });
  };


  render() {
    const { data } = this.props;
    return (
      <ul className="options-list page__block page__block_with-border page__block_without-paddings">
        {data.map((bird, i) => <Option shouldUpdateClass={this.state.shouldUpdateClass} value={bird.name} key={bird.id} id={bird.id} handleClick={this.handleAnswerClick} />)}
      </ul>
    );
  }
}
