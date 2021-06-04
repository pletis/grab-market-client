import React, { Component } from 'react';
import KaKaoLogin from 'react-kakao-login';

class Home extends Component {

  render() {

    return (
      <div>
        <KaKaoLogin
            token={'c1af432f28764847889b2748f376e72a'}
            onSuccess={console.log}
            onFail={console.error}
            onLogout={console.info}
        />
      </div>
    );
  }
}

export default Home;