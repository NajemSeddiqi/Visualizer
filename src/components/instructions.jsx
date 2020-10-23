import React from 'react';

const Instructions = ({ data, examples }) => {
  return (
    <React.Fragment>
      {data.map((d, idx) => (
        <p key={idx}>{d}</p>
      ))}
      <b> Examples</b>
      {examples.map((e, idx) => (
        <p key={idx}>* {e}</p>
      ))}
    </React.Fragment>
  );
};

export default Instructions;
