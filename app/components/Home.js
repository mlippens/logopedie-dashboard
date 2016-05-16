import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import {Col} from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <Col md={8} mdOffset={2}>
        <div className={styles.container}>
          <h2>Overzicht</h2>
          <Link to="/age_calculator">Bereken datum verschil</Link>
        </div>
      </Col>
    );
  }
}
