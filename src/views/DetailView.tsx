import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import Chip from "../components/Chip";
import { useGetSingleSerie } from "../hooks/queries";
import s from "../styles/views/detailView.module.css";
import { Show } from "../types";
import { getRatingStars } from "../utils";

const DetailView = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: serie, isLoading, isError } = useGetSingleSerie(id);
  /*TODO: 
  For unknown reason at this point:
  The hosted version that is on Vercel is not picking up direct links to the details page.
  This does however work as intended locally. */

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!serie) {
    return <div>No data available from server</div>;
  }

  const {
    name,
    genres,
    summary,
    image,
    rating,
    type,
    language,
    status,
    runtime,
    premiered,
    officialSite,
  } = serie as Show;

  //TODO: Add better/nicer loading and error handling
  return (
    <>
      <h1 className={s.header}>Details page</h1>

      <div className={s.wrapper}>
        {image?.original ? (
          <img className={s.image} src={image?.original} alt={name} />
        ) : (
          <img
            className={s.image}
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="Placeholder image"
          />
        )}

        <div className={s.summary}>
          <div className={s.center}>
            <h2 className={s.title}>{name}</h2>
            <div>
              {genres?.map((genre, index) => (
                <Chip key={index} label={genre} />
              ))}
            </div>

            {summary && <p>{parse(summary)}</p>}
          </div>
          {type && (
            <p className={s.info}>
              Type: <i>{type}</i>
            </p>
          )}
          {language && (
            <p className={s.info}>
              Language: <i>{language}</i>
            </p>
          )}
          {status && (
            <p className={s.info}>
              Status: <i>{status}</i>
            </p>
          )}
          {runtime && (
            <p className={s.info}>
              Runtime: <i>{runtime}</i>
            </p>
          )}
          {premiered && (
            <p className={s.info}>
              Premiered: <i>{premiered}</i>
            </p>
          )}
          {officialSite && (
            <p className={s.info}>
              Official Site: <i>{officialSite}</i>
            </p>
          )}
          <div className={s.container}>
            {rating?.average && (
              <>
                <h4 className={s.info}>Rating</h4>
                <p className={s.info}>
                  {getRatingStars(Number(Math.round(rating.average) / 2))}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Link className={s.backward} to="/">
        {"<-- Back to search"}
      </Link>
    </>
  );
};

export default DetailView;
