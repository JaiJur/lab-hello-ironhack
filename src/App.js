//import logo from './logo.svg';


import './App.css';

function App() {
  return (
    <div className="App">
     <div className="main-container">
        <nav className='App-header'>
          <div className="navbar">
            <img src="/images/ironhack-logo.svg"/>
            <img src="/images/menu-top.svg"/>
          </div>
          <div className="textNavbar">
            <h1 className="text-white">Say Hello to ReactJs</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button className="btnNav">Awesome!</button>
          </div>
        </nav>
       

        <section className="containerDown">
          <div className="pill">
            <img src="/images/icon1.png"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive Uis</p>
          </div>
          <div className="pill">
            <img src="/images/icon2.png"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="pill">
            <img src="/images/icon3.png"/>
            <h3>Single-Way</h3>
            <p>A set of inmutable values are passed to the component's</p>
          </div>
          <div className="pill">
            <img src="/images/icon4.png"/>
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </section>
     </div>
    </div>
  );
}

export default App;

