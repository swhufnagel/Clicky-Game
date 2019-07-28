import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';

function FriendCard(props) {
    return (
        <div onClick={() => props.registerClick(props.id)} className="character-container"
            onMouseOver={() => props.registerHover(props.id)}>
            <Card className="card" style={{ width: '150px', height: '150px' }}>
                <Card.Img className="charImage" alt={props.name} variant="top" src={props.image} />
            </Card>
        </div>
    )
}

export default FriendCard;