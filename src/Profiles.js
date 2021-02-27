import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
  const activeStylle = {
    background: 'black',
    color: 'white',
  };
  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStylle} to="/profiles/gildong">
            gildong 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStylle} to="/profiles/sejong">
            sejong 프로필
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
