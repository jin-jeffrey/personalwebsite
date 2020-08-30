import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';
import {invm} from './media/INVM.png';
import './Projects.css';


class Projects extends React.Component {
    render(){
        return(
            <container className="projects">
                <div className="projectTitle">PROJECTS</div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={invm}></Card.Img>
                        <Card.Body>
                            <Card.Title>INVM: Inventory Manager</Card.Title>
                            <Card.Text>
                                INVM is a webapp
                            </Card.Text>
                            <Card.Footer class="text-muted">Written using Python and Django</Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={invm}></Card.Img>
                        <Card.Body>
                            <Card.Title>INVM: Project Manager</Card.Title>
                            <Card.Text>
                                INVM is a webapp
                            </Card.Text>
                            <Card.Footer>Written using Python and Flask</Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={invm}></Card.Img>
                        <Card.Body>
                            <Card.Title>INVM: Project Manager</Card.Title>
                            <Card.Text>
                                INVM is a webapp
                            </Card.Text>
                            <Card.Footer>Written using Python and Flask</Card.Footer>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </container>
        );
    }
};

export default Projects;