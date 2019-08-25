import React from 'react';

const SessionList = props => {
  if (!props.sessions) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.sessions.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.sessions.map(session => {
          return (
            <h2>{session.title}</h2>
          );
        })
      }
    </div>
  );
};

export default SessionList;
