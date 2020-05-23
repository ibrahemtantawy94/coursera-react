import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

const FormExample = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Rating</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleName">Your Name</Label>
          <Input type="name" name="name" id="exampleName" placeholder="Enter Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Comment</Label>
          <Input type="textarea" name="text" id="exampleText" style={{ height: 200 }}/>
        </FormGroup>
        <Button  color="primary">Submit</Button>
      </Form>
    );
}

const CommentModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button outline color="secondary" onClick={toggle}>Submit Comment</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm >
                <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                    <Col md={12}>
                        <Control.select model=".rating" name="rating" className="form-control" md={10} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="firstname" md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text model=".Name" id="Name" name="Name" placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(3), maxLength: maxLength(15),
                            }} />
                            <Errors className="text-danger" model=".Name" 
                            show="touched" messages={{
                                required:"this field is required ",
                                minLength:"the first name should be min 3 chars ",
                                maxLength:"the first name should be max 15 chars "
                            }}/>
                    </Col>
                </Row>
                            
                <Row className="form-group">
                    <Label htmlFor="message" md={12}>Comment</Label>
                    <Col md={12}>
                        <Control.textarea model=".message" id="message" name="message" row="12"
                            className="form-control" style={{ height: 200 }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size:10, offset:0}}>
                        <Button type="submit" color="primary">Submit</Button>
                    </Col>
                </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
}

function RenderDish({dish}) {
    if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1" >
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments , addComent, dishId}) {
    
    if (comments != null) {
        return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map( (comment)=> {
                            // let date = Date.parse(comment.date);
                            let date = new Date(comment.date);
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , 
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentModal dishId={dishId} addComment={addComment}></CommentModal>
                </div>
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
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/menu'>Menu</Link>  </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} 
                    addComment={props.addComment} dishId={props.dish.id}/>
            </div>
        </div>
    );
}

export default Dishdetail;