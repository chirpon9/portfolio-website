import './App.css'
import BackgroundHandler from './background_handler.jsx'
import { useState } from 'react';
import leagueIcon from '../public/league.webp';

const dialogueInfo = {
  about: 'My name is Marco and I\'m a third year student studying information technology at Monash University! I\'m interested in web development and I play a lot of video games in my free time! I designed this website in the <br/> ' +
      'style of a visual novel! I hope you like it! Monash 大学の情報技術を専攻している3年生のマルコと申します！<br/>ゲームが大好きなので、このようなサイトを作りました。よろしくお願いいたします！',
  work: 'I focus mainly on web/app development and design! The main languages I use are: HTML/CSS, Javascript/Typescript, Python, java, php, mySQL and a little bit of C++.' +
      'As for technologies I use, I mainly use react, bun, vite, MEAN stack, LAMP stack and learning phoenix! I use figma, excalidraw and balsamiq for design.',
  contact: 'The best way to contact me is through email! I don’t really check social media, so please email me! yuetshinglee@gmail.com/boringguy1234@gmail.com <br/> ' +
           '連絡はメールが一番です！SNSあまりめいないので、メールをお願いします。yuetshinglee@gmail.com/boringguy1234@gmail.com'
};

function App() {
  const [selected, setSelected] = useState('about');

  return (
    <>
      <BackgroundHandler />
      {/* League Button + Audio Button Row */}
      <div style={{ position: 'fixed', top: 30, right: 100, zIndex: 1001, display: 'flex', gap: 12 }}>
        <a
          href="https://league-mastery-searcher-production.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="League Mastery Searcher"
          style={{
            background: 'rgba(255,255,255,0.7)',
            border: 'black solid 1px',
            borderRadius: '50%',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <img src={leagueIcon} alt="League" style={{ width: 32, height: 32 }} />
        </a>
      </div>
      <div className="textbox">
        <div className="top-section">
          <h1>melhen - メルヘン</h1>
          <h6>from the german word "Märchen" meaning "fairy tale"</h6>
        </div>
      </div>
      <div className="dialogue-options">
        <h4 onClick={() => setSelected('about')} tabIndex={0}>about</h4>
        <h4 onClick={() => setSelected('work')} tabIndex={0}>skills</h4>
        <h4 onClick={() => setSelected('contact')} tabIndex={0}>contact</h4>
      </div>
      <div className="vn-textbox"
           dangerouslySetInnerHTML={{ __html: dialogueInfo[selected] }} />
    </>
  )
}

export default App
