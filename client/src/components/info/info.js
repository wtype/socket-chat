import React from 'react';

import './info.css';

const Info = ({ room }) => (
  <div className="info-bar">
    <h1>{room}</h1>
    <a href="/">×</a>
  </div>
)

export default Info;