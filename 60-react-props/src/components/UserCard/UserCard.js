import React from "react";

const UserCard = (props) => {
  const {user} = props ;
  const {id,name,email,picture} = user
  
  return (<div className={"card"}>
            <li key={id}><img src={picture} alt=""/></li>
            <li key={name}>{name}</li>
            <li key={email}>{email}</li>
        </div>)
};

export default UserCard;
