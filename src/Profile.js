import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  gildong: {
    name: '홍길동',
    description: '개발자',
  },
  sejong: {
    name: '세종대왕',
    description: '왕',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;
