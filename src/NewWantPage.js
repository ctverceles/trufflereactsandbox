import React from 'react'
import { Button } from 'react-bootstrap';
import styled, { injectGlobal } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Card, CardText, CardActions, CardTitle, CardHeader, CardMedia } from 'material-ui/Card';

//move to proper helper file
const ButtonNavigate = ({ title, pagedest, history }) => (
    <FloatingActionButton onClick={() => history.push(pagedest)} 
        >
        {title}
    </FloatingActionButton>
);

function submit(){
    alert('Next page under construction')
}

const NewWantPage = () => (
  <div>
    <br /><br /><br />
    <Container>
        <Header>
            <H2>
                Who should we Help?
            </H2>
        </Header>
        <ItemLabel>What will you be able to donate?</ItemLabel>
        <InputText /><br /><br />
        <ItemLabel>
            Likely Donation Areas
        </ItemLabel>
        <InputText />
        <br /><br />
        <Route path="/" render={(props) =>
                    <ButtonNavigate alight="right" {...props}
                        pagedest='WantToHelpOverview'/>} />
    </Container>
   
    
  </div>
)

/*
 <Grid>
        <Row class="show-grid">
            <Col md={4} />
            <Col md={4} >
                
            </Col>
            <Col md={4}>
                <Route path="/" render={(props) =>
                    <ButtonNavigate alight="right" {...props}
                        pagedest='WantToHelpOverview'/>} />
            </Col>
        </Row>
    </Grid>
*/

//need to move this to external file
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const H1 = styled.h1`
color: #ead7d7;
font-size: 100px;
margin-bottom: -20px;
`;

const H2 = styled.h2`
color: #d2bebe;
font-size: 35px;
`;

const StyledContainer = styled.section`
background: #fff;
position: relative;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const InputText = styled.input`
padding: 16px 16px 16px 60px;
border: none;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
width: 440px;
position: relative;
margin: 0;
font-size: 24px;
font-family: inherit;
font-weight: inherit;
line-height: 1.4em;
&:focus {
  outline: none;
}
`;

const List = styled.ul`
width: 440px;
margin: 0;
padding: 0;
list-style: none;
`;

const TodoItem = styled.li`
position: relative;
font-size: 24px;
border-bottom: 1px solid #ededed;
&:last-child {
  border-bottom: none;
}
`;

const ItemLabel = styled.label`
white-space: pre-line;
word-break: break-all;
padding: 15px 60px 15px 15px;
margin-left: 45px;
display: block;
line-height: 1.2;
transition: color 0.4s;
`;



const Btn = styled.button`
margin: 0;
padding: 0;
border: 0;
background: none;
font-size: 50%;
vertical-align: baseline;
font-family: inherit;
font-weight: inherit;
color: inherit;
appearance: none;
font-smoothing: antialiased;
outline: none;
`;

const StyledBtn = styled(Btn)`
position: relative;
top: 0;
right: -50px;
bottom: 0;
width: 80px;
height: 25px;
margin: auto 0;
font-size: 25px;
color: #cc9a9a;
margin-bottom: 11px;
transition: color 0.2s ease-out;
cursor: pointer;
`;

const PendingContainer = styled.div`
position: fixed;
top: 0;
right: 0;
`;

const Pending = styled.div`
color: ${props => props.active ? props.activeColor || 'red' : '#c7c7c7'};
`;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  background-color: white;
  font-family: 'Roboto', sans-serif;
}
`

export default NewWantPage

