// src/components/Main.jsx
import ImageSlider from "./ImageSlider";
import Decks from "./Decks";
import styles from './styles.module.css';

export default function Main({ page }) {
  return (
    <main>
      {page === "home" && (
        <>
          <h1>¡Hola! 😊</h1>
          <p>Soy Catalina Castillo Belmar, ingeniera civil quimica de día, desarrolladora java de noche.</p>
          <p>Puedes ver algunos de los proyectos que he hecho en 'props' o ver mi contacto en 'contacto'</p>
        </>
      )}

      {page === "props" && (
        <><h2>Slider de imagenes</h2>
          <ImageSlider images={[
              "https://i.imgur.com/NsUUFiW.png",
              "https://i.imgur.com/D2UMy4E.jpeg",
              "https://i.imgur.com/vsJSfwB.png",
              "https://i.imgur.com/2v2mixv.png",
              "https://i.imgur.com/vwqy00n.png",
              "https://i.imgur.com/5OybppR.png",
              "https://i.imgur.com/urK6I2y.png",
              "https://i.imgur.com/VQRRaB1.png",
              "https://i.imgur.com/UR4TUzl.png",
              "https://i.imgur.com/mVi5FdG.png",
              "https://i.imgur.com/en7IuRn.png",
              "https://i.imgur.com/bNXju5P.png",
            ]}/>

            <p>Cada ilustración la realice en diferentes épocas.</p>

                <hr></hr>

            <h2>Un visualizador distinto</h2>

            <div className={styles.container}>
            <Decks images={[
              "https://i.imgur.com/NsUUFiW.png",
              "https://i.imgur.com/D2UMy4E.jpeg",
              "https://i.imgur.com/vsJSfwB.png",
              "https://i.imgur.com/2v2mixv.png",
              "https://i.imgur.com/vwqy00n.png",
              "https://i.imgur.com/5OybppR.png",
              "https://i.imgur.com/urK6I2y.png",
              "https://i.imgur.com/VQRRaB1.png",
              "https://i.imgur.com/UR4TUzl.png",
              "https://i.imgur.com/mVi5FdG.png",
              "https://i.imgur.com/en7IuRn.png",
              "https://i.imgur.com/bNXju5P.png",
            ]}/>
            </div>

            

        </>
      )}

      {page === "contact" && (
        <>
          <h1>Pagina de contacto 📬</h1>
          <p>Puedes contactarme al correo ccastillobelmar@gmail.com.</p>
          
        </>
      )}
    </main>
  );
}