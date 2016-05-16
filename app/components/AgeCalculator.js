/**
 * Created by lippe on 13/05/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {Button, FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';


class AgeCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      birth_date: '',
      research_date: ''
    };
  }

  componentUnmount() {
    this.props.clear();
  }
  changeBirthdate(event) {
    this.setState({birth_date: event});
    this.calculate();
  }

  changeResearchdate(event) {
    this.setState({research_date: event});
    this.calculate();
  }

  calculate() {
    if (this.state.birth_date.length > 0 && this.state.research_date.length > 0) {
      this.props.calculateResult(this.state.birth_date,this.state.research_date);
    }
  }

  render() {
    let topStyle = {
      'marginTop': '50px'
    };

    return (<Col md={6} mdOffset={2}>
      <h1>Bereken datum verschil</h1><Link to="/">Ga terug!</Link>
      <div style={topStyle}>
        <FormGroup>
          <ControlLabel>Geboortedatum</ControlLabel>
          <DateTimeField inputFormat="DD/MM/YYYY" defaultText="" viewMode="months" onChange={this.changeBirthdate.bind(this)} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Onderzoeksdatum</ControlLabel>
          <DateTimeField inputFormat="DD/MM/YYYY" defaultText=""  viewMode="months" onChange={this.changeResearchdate.bind(this)} />
        </FormGroup>

        <Button bsStyle="primary" onClick={this.calculate.bind(this)}>Berekenen!</Button>
        <h2>{this.props.result}</h2>
      </div>


    </Col>);
  }
}


export default AgeCalculator;
