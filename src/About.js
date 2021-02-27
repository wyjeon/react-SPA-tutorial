import React from 'react';
import qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략
  });
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열
  return (
    <div>
      <h1>About</h1>
      <p>리액트 라우터 기초 실습</p>
      {showDetail && <p>detail 값을 true로 설정</p>}
    </div>
  );
}

export default About;
