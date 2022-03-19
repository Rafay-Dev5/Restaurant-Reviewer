import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderComments({ comments }) {
  console.log("Comments");
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                {comment.comment}
                <h6>
                  --{comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </h6>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDish({ dish }) {
  console.log("Dish");
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function DishDetail(props) {
  console.log("Details");
  let selectedDish = props.dish;
  let displayComments = props.comments;
  if (selectedDish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{selectedDish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={displayComments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
