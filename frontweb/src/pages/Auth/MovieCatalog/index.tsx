import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { SpringPage } from "types/SpringPage";
import { Movie } from "types/movie";
import { requestBackend } from "util/requests";

import './styles.css';
import { Link } from "react-router-dom";

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      withCredentials: true,
      method: 'GET',
      url: "/movies",
      params: {
        page: 0,
        size: 12,
      }
    };

    requestBackend(params)
      .then((response) => {
        console.log("SUCESSO AO BUSCAR FILMES:", response);
        setPage(response.data);
      }).catch(errors => {
        console.log("ERRO AO BUSCAR FILMES:", errors);
    });
  }, []);

  return (
    <div className="movieCatalog-container">
      <h1>Tela Listagem de Filmes</h1>
        {page?.content.map((movie) => (
          <div key={movie.id} className="movie-listing">
              <p key={movie.id} className="movie-access">Acessar <Link to={`/movies/${movie.id}`}>/movies/{movie.title}</Link></p>
          </div>
        ))}
    </div>
  );

};
export default MovieCatalog;