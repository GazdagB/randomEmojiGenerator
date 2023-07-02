import React from 'react'

const Emoji = ({emojiName,htmlCode}) => {
  return (
    <div className='emoji'>
        <p className='emoji-img' dangerouslySetInnerHTML={{__html: htmlCode}}/>
        <h4 className='emoji-name'>{emojiName}</h4>
    </div>
  )
}

export default Emoji