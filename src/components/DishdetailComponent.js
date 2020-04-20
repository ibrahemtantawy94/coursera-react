import React from 'react';
import { Media, ListGroupItemText } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
    
    function RenderDish({dish}) {
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
                        <RenderComments comments = {dish.comments} />
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        if (comments != null) {
            return(
                <ListGroup>
                    {comments.map( (comment)=> {
                        // let date = Date.parse(comment.date);
                        let date = new Date(comment.date);
                        return (
                            <div>
                                <ListGroupItem>{comment.comment}</ListGroupItem>
                                <ListGroupItem>-- {comment.author} , 
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </ListGroupItem>
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

    const Dishdetail = (props) => {
        return(
            <div className="container">
                <RenderDish dish={props.dish} />
            </div>
        );
    }

export default Dishdetail;