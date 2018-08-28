// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card,CardPanel,CardTitle} from 'react-materialize';
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
                <Card className='blue-grey darken-1' textClassName='white-text' title='nelcifranpires@gmail.com'>
                </Card>
            </Col>

            <Col s={12} m={5}>
                <Card className='blue-grey darken-1' textClassName='white-text' title='Contato' actions={[<a href='https://www.linkedin.com/in/nelcifranpires/'>Linkedin</a>]}>
                </Card>
            </Col>

          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;