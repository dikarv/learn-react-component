import React, { Component } from "react";
import logo from "./logo.svg";
import logo1 from "./konusuba.jpg";
import logo2 from "./megumin.jpg";
import logo3 from "./title.png";

class Content extends Component {
  render() {
    //mencari
    let name = "Dika";
    return (
      <>
        {/* <h3>{name}</h3> */}
        {/* <Content1 variableProps={name} helloWord={"Hello Word"} /> */}
        {/* <Content1 variableProps2={'Rojul'} helloWord={'Hello Word'} />
        <Content1 variableProps3={'Fajar'} helloWord={'Hello Word'} /> */}

        <section className="row">
          <aside className="side" >
            <h2>Trailer</h2>
            <iframe
              width="330"
              height="190"
              src="https://www.youtube.com/embed/N1AO7k2o78g"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <hr color="grey" />
          </aside>
          <article className="main">
            <h2>Kono Subarashii Sekai ni Shukufuku wo! Sub Indo</h2>
            <p>
              <img src={logo2} alt="no image" width="600" height="300" />
            </p>
            <p>MP4</p>
            <p style={{ fontSize: "large" }}>
              <tt>
                <a href="#">480</a> || <a href="#">720</a> ||{" "}
                <a href="#">1080</a>
              </tt>
            </p>
            <p>MKV</p>
            <p style={{ fontSize: "large" }}>
              <tt>
                <a href="#">480</a> || <a href="#">720</a> ||{" "}
                <a href="#">1080</a>
              </tt>
            </p>
            <p>Streaming</p>
            <p style={{ fontSize: "large" }}>
              <tt>
                <a href="https://www.youtube.com/watch?v=siK93RcevxQ&ab_channel=Rem-Chan%E3%83%AC%E3%83%A0%E3%81%A1%E3%82%83%E3%82%93">
                  youtube
                </a>
              </tt>
            </p>
          </article>
        </section>
        <section className="row">
          <aside className="side">
            <h2>{"Anime"}</h2>
            <img src={logo1} alt="" width="330px" height="190px" />
            <hr color="grey" />
          </aside>
          <article className="main">
            <p>
              <tt>
                Sinopsis Anime Konosuba Sub Indo <br />
              </tt>
            </p>
            <p />
            <tt>
              Sinopsis Seri anime ini mengisahkan seorang otaku sekaligus
              hikkikomori bernama Kazuma Satou. Sehari-hari Kazuma menghabiskan
              harinya hanya berada di dalam kamarnya sambil bermain game. Suatu
              hari ia harus berhadapan dengan dunia luar, hanya demi membeli
              sebuah game yang baru di rilis. Sepulang dari perjalanan membeli
              game tersebut, ia bertemu dengan seorang gadis yang tengah
              menyebrang jalan. Namun tiba-tiba, ia melihat siluet kendaraan
              besar yang akan menabrak gadis tersebut. Meski penuh keraguan, ia
              akhirnya memberanikan diri untuk mendorong gadis tersebut. Sang
              gadis bisa selamat, tetapi Kazuma justru malah meninggal akibat
              perbuatannya. Tak lama ia pun tersadar, dan begitu membuka mata,
              ia tengah berada di dunia lain. Di sana ia bertemu dengan dewi
              bernama Aqua. Dewi Aqua memberi tahu Kazuma bahwa kini ia tengah
              berada di alam baka dan baru saja meninggal. Kazuma lalu bertanya
              mengenai keadaan gadis yang ia selamatkan, Aqua menjawab bahwa ia
              baik-baik saja, bahkan jika Kazuma tidak menolongnya pun ia akan
              baik-baik saja. Karena sebenarnya siluet kendaraan yang di lihat
              Kazuma hanyalah traktor pertanian yang berjalan dengan kecepatan
              rendah dan tidak akan menabrak sang gadis. Kematian Kazuma pun di
              sebabkan bukan karena tertabrak melainkan karena syok. Aqua pun
              menertawakan bagaimana Kazuma bisa mati dengan cara sekonyol itu,
              ia pun menambahkan bahwa dokter yang mengani Kazuma setelah
              kejadian itu juga tertawa tanpa henti.
            </tt>
            <p />
          </article>
        </section>
      </>
    );
  }
}

class Content1 extends Component {
  render() {
    //mencari
    let P1 = this.props;
    // console.log(P1);
    return (
      <>
        <h2>Welcome {this.props.variableProps}</h2>

        {/* {this.props.helloWord} */}
      </>
    );
  }
}
export default Content;
//Navbar component bisa di import manapun
