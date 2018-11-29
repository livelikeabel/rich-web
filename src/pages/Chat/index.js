import React, { Component } from 'react'

import Header from 'src/components/Header'

class Chat extends Component {
  render() {
    return (
      <div>
        <Header
          title={'임블리'}
          handleBackwordPage={() => {
            alert('뒤로가기!')
          }}
        />
        CHat
      </div>
    )
  }
}

export default Chat
