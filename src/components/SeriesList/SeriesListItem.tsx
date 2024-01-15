import parse from "html-react-parser";
import { Link } from "react-router-dom";
import s from "../../styles/components/seriesListItem.module.css";
import { Show } from "../../types";
import Chip from "../Chip";

const SeriesListItem = ({ id, name, summary, image, genres }: Show) => {
  const arrowIcon = String.fromCharCode(parseInt("276F", 16));
  return (
    <Link to={`/details/${id}`}>
      <h2 className={s.title}>{name}</h2>
      <div className={s.item}>
        {image?.medium ? (
          <img className={s.poster} src={image?.medium} alt={name} />
        ) : (
          <img
            className={s.poster}
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="Placeholder image"
          />
        )}
        <div className={s.info}>
          <h4>Genres</h4>
          <div>
            {genres.map((genre, index) => (
              <Chip key={index} label={genre} />
            ))}
          </div>
          {summary && (
            <div className={s.summary}>
              <h4>Summary</h4>
              <div>{parse(summary || "")}</div>
            </div>
          )}
        </div>
        <span>{arrowIcon}</span>
      </div>
    </Link>
  );
};

export default SeriesListItem;
