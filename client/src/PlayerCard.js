import React from 'react';

export default function PlayerCard(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.country}</p>
      <p>{props.data.searches}</p>
    </div>
  );
}