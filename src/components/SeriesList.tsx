import s from "../styles/components/SeriesList.module.css";
import { TVMazeApiArrayResponse, TVMazeApiResponse } from "../types";
import SeriesListItem from "./SeriesListItem";

interface SeriesListProps {
  series: TVMazeApiArrayResponse;
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
  return (
    <ul className={s.list}>
      {series?.map((serie: TVMazeApiResponse) => (
        <li key={serie?.show?.id}>
          <SeriesListItem {...serie.show} />
        </li>
      ))}
    </ul>
  );
};

export default SeriesList;
