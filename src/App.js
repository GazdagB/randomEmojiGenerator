import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Emoji from './components/Emoji';

function App() {

  const [questionHidden,setQuestionHidden] = useState(false)
  const [emoji,setEmoji] = useState([]);




  const getEmoji = ()=>{
    setQuestionHidden(true)

    axios.get("https://emojihub.yurace.pro/api/random")
    .then(res => setEmoji([res.data]));
    console.log(emoji);
    
  }

  return (
    <div className="App">
     <h2 className='title'>Random Emoji Generator</h2>
    <div className='emoji-container'>
    <p className={`question-mark ${questionHidden ? 'hidden' : ''}`}>?</p>

    {
      emoji.map((e,idx)=>{
        return <Emoji key={idx} emojiName={e.name} htmlCode={e.htmlCode[0]}/>
      })
    }

    </div>
    <button onClick={getEmoji} id='btnRandomize' className='btn'>Randomize</button>
    </div>
  );
}

export default App;
