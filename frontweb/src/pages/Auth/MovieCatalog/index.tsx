import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { SpringPage } from "types/SpringPage";
import { Movie } from "types/movie";
import { requestBackend } from "util/requests";

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
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
      <h1>Catalogo de filmes</h1>
      <div className="row">
        {page?.content.map((movie) => (
          <div className="col-sm-6 col-lg-4 col-xl-3">
              <p key={movie.id}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

};
export default MovieCatalog;