import React, { Component } from 'react';
import { Media, ListGroupItemText } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }
    
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1" >
                        <Card>
                            <CardImg width="100%" top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            return(
                <ListGroup>
                    {comments.map( (comment)=> {
                        return (
                            <div>
                                <ListGroupItem>{comment.comment}</ListGroupItem>
                                <ListGroupItem>-- {comment.author, comment.date}</ListGroupItem>
                            </div>
                        );
                    })}
                </ListGroup>
            );
        } else {
            return(
                <div></div>
            );
        }    
    }

    render() {
        return(
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        );
    }

}

export default Dishdetail;