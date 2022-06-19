import React, { useState } from 'react';
import './pages.css';
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import ImageGallery from 'react-image-gallery';
import CanvasDraw from 'react-canvas-draw';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const images = [
  {
    original: 'https://www.seoclerk.com/pics/000/977/722/1ec00e0a7e675deb394ed6b3364acbcd.jpg',
    thumbnail: 'https://www.seoclerk.com/pics/000/977/722/1ec00e0a7e675deb394ed6b3364acbcd.jpg',
  },
  {
    original: 'https://www.wheathills.com/uploads/files/blog/eagle/SCARRHILL6536.jpg',
    thumbnail: 'https://www.wheathills.com/uploads/files/blog/eagle/SCARRHILL6536.jpg',
  },
  {
    original: 'https://assets.bigcartel.com/product_images/186221369/photo_(23)_LG.jpg',
    thumbnail: 'https://assets.bigcartel.com/product_images/186221369/photo_(23)_LG.jpg',
  },
  {
    original: 'https://www.thepacer.net/wp-content/uploads/2019/10/HumanControlRGB.jpg',
    thumbnail: 'https://www.thepacer.net/wp-content/uploads/2019/10/HumanControlRGB.jpg',
  },
  {
    original: 'https://dyn1.heritagestatic.com/lf?set=path[2/1/9/8/4/21984380]&call=url[file:product.chain]',
    thumbnail: 'https://dyn1.heritagestatic.com/lf?set=path[2/1/9/8/4/21984380]&call=url[file:product.chain]',
  },
  {
    original: 'https://geekandsundry.com/wp-content/uploads/2017/02/Kent-Davis-@iDrawBagman-A.jpg',
    thumbnail: 'https://geekandsundry.com/wp-content/uploads/2017/02/Kent-Davis-@iDrawBagman-A.jpg',
  },
  {
    original: 'https://i.etsystatic.com/15747752/r/il/8e1565/2248241385/il_fullxfull.2248241385_49gw.jpg',
    thumbnail: 'https://i.etsystatic.com/15747752/r/il/8e1565/2248241385/il_fullxfull.2248241385_49gw.jpg',
  },
  {
    original: 'https://www.artfulhome.com/item_images/RP/73201-73300/73276/large/glass_vase_l.jpg',
    thumbnail: 'https://www.artfulhome.com/item_images/RP/73201-73300/73276/large/glass_vase_l.jpg',
  },
  {
    original: 'https://www.destination-saint-barths.com/wp-content/uploads/2018/10/Destination-Saint-Barth-Villa-Art-02.jpg',
    thumbnail: 'https://www.destination-saint-barths.com/wp-content/uploads/2018/10/Destination-Saint-Barth-Villa-Art-02.jpg',
  },
  {
    original: 'https://i.etsystatic.com/15747752/r/il/784e42/1498367962/il_fullxfull.1498367962_gkiy.jpg',
    thumbnail: 'https://i.etsystatic.com/15747752/r/il/784e42/1498367962/il_fullxfull.1498367962_gkiy.jpg',
  },
  {
    original: 'https://2.bp.blogspot.com/-U_RXoFMpsrw/T3iTTTy1MzI/AAAAAAAADy8/BlEAYhDUwHE/s1600/19.jpg',
    thumbnail: 'https://2.bp.blogspot.com/-U_RXoFMpsrw/T3iTTTy1MzI/AAAAAAAADy8/BlEAYhDUwHE/s1600/19.jpg',
  },
  {
    original: 'https://www.moillusions.com/wp-content/uploads/2015/12/alligator-street-art-illusion.jpg',
    thumbnail: 'https://www.moillusions.com/wp-content/uploads/2015/12/alligator-street-art-illusion.jpg',
  },
  {
    original: 'http://www.lisaelley.com/uploads/1/0/4/7/10473908/s846867339460624280_p66_i3_w1500.jpeg',
    thumbnail: 'http://www.lisaelley.com/uploads/1/0/4/7/10473908/s846867339460624280_p66_i3_w1500.jpeg',
  },
  {
    original: 'https://firstfineartacademy.org/wp-content/gallery/assistant-teacher-gallery_1/Environment_Concept_Blue_redux.jpg',
    thumbnail: 'https://firstfineartacademy.org/wp-content/gallery/assistant-teacher-gallery_1/Environment_Concept_Blue_redux.jpg',
  },
];


function INTJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for INTJ</h1>
      <h1>Organize your Desk or Bedroom, Here are some Tasks</h1>
      <form>
        <input type="checkbox" /><label>Make your bed</label><br />
        <input type="checkbox" /><label>Throw away trash</label><br />
        <input type="checkbox" /><label>Create more space on your desk</label><br />
        <input type="checkbox" /><label>Clean your computer</label><br />
      </form>
      
        <h1>
        Practice meditation and deep breathing. Even if you can only spend a couple of minutes focusing on your breathing, this can improve your mood substantially.</h1>

      <iframe width="426" height="240" src="https://www.youtube.com/embed/ZToicYcHIOU" title="Daily Calm | 10 Minute Mindfulness Meditation | Be Present" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <h1>
        Your Intuition is attracted to symbols and can often derive meaning from art, symbolism, or beauty, so visiting an art museum or drawing whatever comes to mind is a great way for you to relax. Below is a large gallery of art for you to sample and look at.</h1>
      
      <div className="gall">
      <ImageGallery height="100px" items={images} />
      </div>
    </main>
  );
}


function INTP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>

      <h1>Relaxation Methods for INTP</h1>
      <h1>Solving puzzles, reading books and playing stratefy games are great ways to help you relax.<br></br>
      Play some sudoku right now to challenge your mind!<br></br></h1>


      <div className="sudokus"> 
      <iframe src="https://widget.websudoku.com/?level=1" width="400px" height="400px"></iframe>
        <iframe src="https://widget.websudoku.com/?level=2" width="400px" height="400px"></iframe>
        <iframe src="https://widget.websudoku.com/?level=3" width="400px" height="400px"></iframe>
      </div>


      <h1>You can also write down any thought that come to your mind in the notepad below.</h1>
      <div className="container" style={{marginBottom: "50px"}}>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
      </div>
    </main>
  );
}

function ENTJ() {
  
  const [ play, setPlay] = useState(false);

  function clickbutton(){
    setPlay(play => !play);
  }
  
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>

      <h1>Relaxation Methods for ENTJ</h1>
      <h1>Doing a quick meditation can help you calm your brain</h1>
      
      <iframe width="640" height="360" src="https://www.youtube.com/embed/ZToicYcHIOU" title="Daily Calm | 10 Minute Mindfulness Meditation | Be Present" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <h1>If meditations aren't your thing, there are also a few workout  videos below.</h1>

      <div className="videos">
      <iframe width="640" height="360" src="https://www.youtube.com/embed/IFQmOZqvtWg" title="30-Minute No-Equipment Full-Body Toning Workout" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="640" height="360" src="https://www.youtube.com/embed/UItWltVZZmE" title="20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </main>
  );
}

function ENTP() {
  const [ play, setPlay] = useState(false);

  function clickbutton(){
    setPlay(play => !play);
  }
  
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>

      <h1>Relaxation Methods for ENTP</h1>
      <h1>Take a 60 second break to relax and just focus on your breathing, this will help you to relax and calm your nerves.<br></br>
     </h1>
      
      <button onClick={clickbutton} className="start"></button>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={play}
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
  <h1> Listening to an audiobook is also a good way for you to calm down.</h1>
      <iframe width="853" height="480" style={{margin: "10px"}}src="https://www.youtube.com/embed/jxcMRkqaQdw" title="The Art of War by Sun Tzu: Entire Unabridged Audiobook (Powerful Narration)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>
  );
}

function INFJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for INFJ</h1>
      <h1>Medidating for twenty or so minutes can help you relax.<br></br>
      </h1>

      <iframe width="426" height="240" src="https://www.youtube.com/embed/inpok4MKVLM" title="5-Minute Meditation You Can Do Anywhere" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <h1>You can also write out all your feelings on a piece of paper to vent. Below is a digital notebook where you can type out anything.</h1>
      <div className="container">
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
      </div>

    </main>
  );
}

function INFP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for INFP</h1>
      <h1>You should listen to your favorite playlists and songs as that helps you relax the best. While you are listening to your music, draw whatever comes to your mind.</h1>

      <a href="https://open.spotify.com/" target="_blank"> <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" height="200"></img> </a>

      <CanvasDraw canvasWidth={1280} canvasHeight={720} className="canwidth"/>

    </main>
  );
}

function ENFJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ENFJ</h1>
      <h1>Doing yoga or meditations helps you clear your mind. <br></br>Below are a few yoga videos you can try.<br></br></h1>
    <div className="videos">
      <iframe width="512" height="288" src="https://www.youtube.com/embed/v7AYKMP6rOE" title="Yoga For Complete Beginners - 20 Minute Home Yoga Workout!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="512" height="288" src="https://www.youtube.com/embed/b1H3xO3x_Js" title="Full Body Flow  |  20 Min. Yoga Practice  |  Yoga With Adriene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  <h1>After your workout, writedown everything that came into your mind while you were working out.</h1>
    <div className="container">
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
      </div>
    </main>
  );
}

function ENFP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ENFP</h1>
      <h1>Go outside and take a walk in the beauty of nature, and take in all the peace and quiet. <br></br>If you are unable to go outside, you can do an indoor workout as well. </h1>
      <div className="videos">
      <iframe width="512" height="288" src="https://www.youtube.com/embed/UBMk30rjy0o" title="20 MIN FULL BODY WORKOUT // No Equipment | Pamela Reif" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="512" height="288" src="https://www.youtube.com/embed/H2U3HwAyBXg" title="20 min FULL BODY Workout for TOTAL BEGINNERS (No Equipment)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  <h1>Afterwards, listen to some meditative creative music.</h1>
      <a href="https://open.spotify.com/" target="_blank"> <img style={{height:"200px"}} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" heihgt="200"></img> </a>

    </main>
  );
}

function ISTJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ISTJ</h1>
      <h1>Simulate and challenge your brain with some puzzles and games. Below is a tetris game for you to play.<br></br></h1>

      <iframe src="https://www.goodoldtetris.com/" width="1280" height="720"></iframe>
      <h1>Stretching can help your body to relax, and it can also decrease the production of stress hormones. Below the tetris game are a few stretching videos you can try.</h1>
      <iframe width="512" height="288" src="https://www.youtube.com/embed/g_tea8ZNk5A" title="15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="512" height="288" src="https://www.youtube.com/embed/itJE4neqDJw" title="12 MIN DAILY STRETCH (full body) - for tight muscles, mobility & flexibility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </main>
  );
}

function ISFJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ISFJ</h1>
      <h1>Journal your feeling, write down everything in your mind at the moment below and you will feel more in control of your life.</h1>

      <div className="container">
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
        <div className="line-wrap">
          <input type="text" className="line"/>
        </div>
      </div>
      <h1>
        Practice meditation and deep breathing. Even if you can only spend a couple of minutes focusing on your breathing, this can improve your mood substantially.</h1>

      <iframe width="426" height="240" src="https://www.youtube.com/embed/ZToicYcHIOU" title="Daily Calm | 10 Minute Mindfulness Meditation | Be Present" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </main>
  );
}

function ESTJ() {

  const [ play, setPlay] = useState(false);

  function clickbutton(){
    setPlay(play => !play);
  }
  
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ESTJ</h1>
      <h1>Take a few minutes to create a breathing pattern to let go of all the tension inside your body. When you are ready, start the timer and take 5 seconds to breathe in and out.<br></br>You can also do a brain game that requires concentration.</h1>

      <button onClick={clickbutton} className="start"></button>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={play}
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 0 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div className="sudokus"> 
      <iframe src="https://widget.websudoku.com/?level=1" width="400px" height="400px"></iframe>
        <iframe src="https://widget.websudoku.com/?level=2" width="400px" height="400px"></iframe>
        <iframe src="https://widget.websudoku.com/?level=3" width="400px" height="400px"></iframe>
      </div>

    </main>
  );
}

function ESFJ() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ESFJ</h1>
      <h1>Laughter enhances your intake of oxygen-rich air, and also increases the endorphins in your brain that relieve stress.<br></br>Here are a few comedy movies or shows you can try.</h1>

      
      <a href="https://www.imdb.com/title/tt7991608/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCDeWcTDLEWXq-hhpO5gUZh-rB0QNhSLvCRwUfPk1Vft1tBSH" width="200" height="300"></img> </a>
      <a href="https://www.imdb.com/title/tt2467372/" target="_blank"> <img src="https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg" width="200" height="300"></img> </a>
      <a href="https://www.imdb.com/title/tt1637725/" target="_blank"> <img src="https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_.jpg" width="200" height="300"></img> </a>

      <h1>If you have a pet you can spend time with them, if not you could also chat with a friend or family</h1>
      <a href="https://discord.com/channels/@me" target="_blank"> <img style={{height:"300px"}} src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png" heihgt="200"></img> </a>

    </main>
  );
}

function ISTP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ISTP</h1>
      <h1>Sort out the stuff in your house or the files on your computer while listening to your favorite audiobook. This will allow you to feel more in control.</h1>

      <form>
        <input type="checkbox" /><label>Make your bed</label><br />
        <input type="checkbox" /><label>Throw away trash</label><br />
        <input type="checkbox" /><label>Create more space on your desk</label><br />
        <input type="checkbox" /><label>Clean your computer</label><br />
      </form>

      <iframe width="853" height="480" style={{margin: "10px"}}src="https://www.youtube.com/embed/jxcMRkqaQdw" title="The Art of War by Sun Tzu: Entire Unabridged Audiobook (Powerful Narration)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      

    </main>
  );
}

function ISFP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ISFP</h1>
      <h1>Draw out your feelings. Color, paint, or draw your way through your emotional experience and see what evolves, this is the best way for you to vent your feelings.</h1>

      <CanvasDraw canvasWidth={1280} canvasHeight={720} className="canwidth"/>
      <h1>Lay down and close your eyes while listening to some relaxing music</h1>
      <a href="https://open.spotify.com/" target="_blank"> <img style={{height:"200px"}} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" heihgt="200"></img> </a>
    
    </main>
  );
}

function ESTP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ESTP</h1>
      <h1>Play a strategic board game. This will help engage your thinking side while calming down your body and relaxing a hyperactive, restless state. <br></br>Below are a few online strategy games you can try.</h1>

      <a href="https://store.steampowered.com/app/1128810/RISK_Global_Domination/" target="_blank"> <img src="https://gamecows.com/wp-content/uploads/2021/08/Risk-Board-Game-Featured.jpg" width="300" height="200"></img> </a>
      <a href="https://playrento.com/" target="_blank"> <img src="https://store-images.s-microsoft.com/image/apps.28260.64186527073186856.0d708dad-fc01-4144-a489-41f294bb9b46.f33d4c13-ad59-4d56-9a85-8980bc6daef0?q=90&w=320&h=180" width="300" height="200"></img> </a>
      <a href="https://colonist.io/" target="_blank"> <img src="https://www.boardgamequest.com/wp-content/uploads/2013/04/Settlers-of-Catan.jpg" width="300" height="200"></img> </a>

    <h1>Exercise can release stress-reducing endorphins in your brain that can make you more happy and focussed</h1>
      <div className="videos">
      <iframe width="640" height="360" src="https://www.youtube.com/embed/IFQmOZqvtWg" title="30-Minute No-Equipment Full-Body Toning Workout" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="640" height="360" src="https://www.youtube.com/embed/UItWltVZZmE" title="20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </main>
  );
}

function ESFP() {
  return(
    <main className="page">
      <Link to="/" >
          
        <button className="back">Back</button>

      </Link>
      <h1>Relaxation Methods for ESFP</h1>
      <h1>Listen to music and paint or draw what the music makes you think of. Don’t worry about it looking perfect, just go with the flow and see what evolves!</h1>

      <a href="https://open.spotify.com/" target="_blank"> <img style={{height:"200px"}} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" heihgt="200"></img> </a>

      <CanvasDraw canvasWidth={1280} canvasHeight={720} className="canwidth"/>

      <h1>Practice meditation and deep breathing. Even if you can only spend a couple of minutes focusing on your breathing, this can improve your mood substantially.</h1>

      <iframe width="1280" height="720" src="https://www.youtube.com/embed/ZToicYcHIOU" title="Daily Calm | 10 Minute Mindfulness Meditation | Be Present" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>
  );
}


export { INTJ, INTP, ENTJ, ENTP, INFJ, INFP, ENFJ, ENFP, ISTJ, ISFJ, ESTJ, ESFJ, ISTP, ISFP, ESTP, ESFP }
