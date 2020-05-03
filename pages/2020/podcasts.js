import React from "react";
import Header from "../../components/Header";
import Post from "../../components/layouts/post";
import Footer from "../../components/Footer";
function podcasts() {
  return (
    <>
      <Header />
      <Post>
        <h1>Escucho Podcasts.</h1>
        <p>
          Me gusta escuchar podcasts, escucho de todo un poco: Tecnología,
          comedia, música, libros, ciencia, entrevistas... De todo. Mi
          aplicación preferida para escuchar podcasts es Pocket Casts, tiene una
          interfaz amigable y fácil de usar. Escucho podcasts en Convoy también,
          de ahí me gusta escuchar los programas pasados del #TristeTurno,
          Telegrafía sin Hilos, OigoXEDA, ViernesDeRiesgo, Por qué?, entre
          otros. Tienen un gran catálogo y constantemente suben algunos
          temáticos.
        </p>
        <p>Here goes the post about Podcasts...</p>
      </Post>
      <Footer />
    </>
  );
}

export default podcasts;
