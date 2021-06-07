import '.src/images/bg-intro-desktop.png'
import '.src/images/bg-intro-mobile.png'
import '.src/images/icon.png'
import '.src/images/icon-error.svg'
import '/App.css';

function App() {

  return (
    
<main>
    <div className="content">
<h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real time.
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.</p>
    </div>
    <div className = "box">
<button class = "first">
  <strong>
    <span class="bold">Try it free 7 days</span>
  </strong>
  <span class="nobold"> then $20/mo. thereafter</span>
  </button> <br/>
  <form>
<input type="text" placeholder=""></input><br/>
<input type="text" placeholder=""></input><br/>
<input type="text" placeholder=""></input><br/>
<input type="text" placeholder=""></input><br/> 
<button class="second">
  CLAIM YOUR FREE TRIAL
  </button>
  <h6>
    By clicking the button, you are agreeing to our
    <span class="pink">Terms and Services</span>
        </h6>   
  </form>
    </div>
    </main>
  );
}

export default App;
