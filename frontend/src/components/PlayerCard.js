import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PlayerCard = () => {
    
  return (
    <Container>
        <Row>
          <div id="topps86" className="cardRow">
              <div className="card">
                  <img className="photo" src="https://media4.giphy.com/media/uZmwmfbxh3xkiI1pFM/giphy.gif?cid=ecf05e47kjh0ewnjjatb4cxquw2k8ik0y90q432sms45sqa3&rid=giphy.gif&ct=g" />   
                  <div className="name">TOM BRADY</div>
                  <div className="name2">BUCS</div>
                  <div className="shine"></div>
              </div>
              <span className="series"><br/><br/>1986 Topps</span>
            </div>
          </Row> 
    </Container>
  )
}

export default PlayerCard