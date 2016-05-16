/**
 * Created by lippe on 13/05/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import AgeCalculator from '../components/AgeCalculator';
import * as actions from '../actions/calculator';



class AgeCalculatorPage extends React.Component {

  constructor(props) {
    super(props);
  }

  calculateResult() {
    this.props.dispatch(actions.calculateResult(...arguments))
  }

  clear() {
    this.props.dispatch(actions.clear());
  }

  render() {
    return (<AgeCalculator result={this.props.result} clear={this.clear.bind(this)} calculateResult={this.calculateResult.bind(this)} />);
  }
}


function mapStateToProps(state) {
    return {
      result: state.calculator.result
    };
}

export default connect(mapStateToProps)(AgeCalculatorPage);
