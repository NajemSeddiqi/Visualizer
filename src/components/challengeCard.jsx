import React from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { DiJava } from 'react-icons/di';

const ChallengeCard = ({ name, id, focus, onFocus }) => {
  return (
    <React.Fragment>
      <div className="card mb-4">
        <div className="card-main-wrapper">
          <div className="card-body p-1">
            <h6 className="card-title text-center mb-1">{name}</h6>
          </div>
          <ul className="list-inline member-icons animate text-center">
            <li className="list-inline-item">
              <button className="icon-btn" disabled={focus} onClick={() => onFocus(id)}>
                <BiCodeCurly size="2em" className="BiCodeCurly-icon" />
              </button>
            </li>
            <li className="list-inline-item">
              <h3>
                <DiJava />
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChallengeCard;
