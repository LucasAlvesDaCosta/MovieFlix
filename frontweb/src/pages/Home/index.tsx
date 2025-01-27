import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'pages/Auth/Login';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <Login/>
    </div>
  );
};

export default Home;
