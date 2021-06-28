import React from 'react'

function Badge(props) {
    return (
        <div className="badgeBox">
            <p className="badgeTitle">Badge</p>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Place of Birth: {props.birthPlace}</p>
            <p>Phone: {props.phone}</p>
            <p>Favorite Food: {props.favFood}</p>
            <p className="allAbout">All about {props.name}: {props.textBox}</p>
        </div>
    )
}


export default Badge