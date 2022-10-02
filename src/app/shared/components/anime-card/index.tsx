import { useThemeContext } from '../../contexts/ThemeContext';
import { IAnimeCard } from '../../types/Anime';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../image';
import './styles.css';

type AnimeCardProps = { anime: IAnimeCard }

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const { theme } = useThemeContext();
  
	return (
		<li className={`anime-card ${theme}`}>
		  <Image
		    url={anime.attributes.posterImage ? anime.attributes.posterImage.small : null}
				alt={anime.attributes.canonicalTitle}
				size="poster"
		  />

			<h2 className="anime-title">
				{anime.attributes.canonicalTitle}
			</h2>
      <span id="favorite-count">
        <FaStar id="star-icon" style={{fill: '#e8e368'}}/>
        {anime.attributes.favoritesCount}
      </span>

      <Link to={`/anime/${anime.id}`}>
        <button id="info-btn">
          show more
        </button>
  		</Link>
		</li>
	);
}

export default AnimeCard;