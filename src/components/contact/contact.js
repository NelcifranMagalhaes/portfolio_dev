// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card,CardPanel} from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
            <Col s={12} m={5}>
                <CardPanel className="teal lighten-4 black-text" title='Email'>
                    <span>deidara@gmail.com</span>
                </CardPanel>
            </Col>

            <Col s={12} m={5}>
                <CardPanel className="teal lighten-4 black-text">

                  <span>deidara@facebook.com</span>
                </CardPanel>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;