import React, { Component } from "react";
import logo from "./logo.svg"
import logo1 from './konusuba.jpg'
import logo2 from './megumin.jpg'
import logo3 from './title.png'

class Content extends Component {
  render() {
    //mencari
    return (
      //menangkap hasilnya

      //ini merupakan Fragment
      <>
        <section className="row">
      <aside className="side"> 
        <h2>Trailer</h2>
        <iframe width="330" height="190" src="https://www.youtube.com/embed/N1AO7k2o78g" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <hr color="grey" />
      </aside>
      <article className="main">
        <h2>Kono Subarashii Sekai ni Shukufuku wo! Sub Indo</h2>
        <p><img src={logo2} alt="no image" width="600" height="300" /></p>
        <p>MP4</p>
        <p style={{fontSize: 'large'}}><tt><a href="#">480</a>       ||             <a href="#">720</a>      ||          <a href="#">1080</a></tt></p>
        <p>MKV</p>
        <p style={{fontSize: 'large'}}><tt><a href="#">480</a>       ||             <a href="#">720</a>      ||          <a href="#">1080</a></tt></p>
        <p>Streaming</p>
        <p style={{fontSize: 'large'}}><tt><a href="https://www.youtube.com/watch?v=siK93RcevxQ&ab_channel=Rem-Chan%E3%83%AC%E3%83%A0%E3%81%A1%E3%82%83%E3%82%93">youtube</a></tt></p>
      </article>
    </section>
    
      </>
    );
  }
}

export default Content;
//Navbar component bisa di import manapun
