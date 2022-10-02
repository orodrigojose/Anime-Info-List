import { ReactElement, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IAnime } from '../../shared/types/Anime';
import { useThemeContext } from '../../shared/contexts/ThemeContext';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TrailerEmbed from '../../shared/components/trailer-embed/';
import Loading from '../../shared/components/loading/';
import Image from '../../shared/components/image/';
import './styles.css';

const Anime = (): ReactElement<any> => {
	const [anime, setAnime] = useState<IAnime | undefined>();
	const { debounce } = useDebounce(800);
	const { theme } = useThemeContext();
	const { id } = useParams();
	
	const getAnimeInfo = async (url: string) => {
    const res = await fetch(url);
    const jsonResponse = await res.json();
    
    setAnime(jsonResponse.data);
	}
	
	useEffect(() => {
		debounce(() => {
      const api = 'https://kitsu.io/api/edge/';
      const url = `${api}anime/${id}`;
      const numId: number = parseInt(id || '0');
      
      if (numId > 0) getAnimeInfo(url);
    })
	}, [id, debounce]);
	
	if (!anime) return <Loading />
	
	return (
		<div className="anime-container">
      <header>
        <Link id="back-button" to="..">
          <FaArrowLeft className="icon" />
        </Link>
        <Image
          url={anime.attributes.coverImage ? anime.attributes.coverImage.tiny : null}
          alt={`${anime.attributes.canonicalTitle} cover image`}
          size='cover'
        />
      </header>

      <section className="anime-content">
        <div className="anime-header">
          <Image
            url={anime.attributes.posterImage ? anime.attributes.posterImage.small : null}
            alt={`${anime.attributes.canonicalTitle} poster image`}
            size='poster'
          />
          
          <div className="header-infos">
            <h1 style={{color: `var(--text-color-${theme})`}} id="anime-title">
              {anime.attributes.canonicalTitle}
            </h1>
            <span id="anime-subtitle">{anime.attributes.titles.ja_jp}</span>
            <ul className="some-infos">
              <li>status: <strong>{anime.attributes.status}</strong></li>
              <li>type: <strong>{anime.attributes.showType}</strong></li>
              <li>episodes: {anime.attributes.episodeCount}</li>
            </ul>
          </div>
        </div>

        <section className="anime-infos">
          <h2>Synopsis</h2>
          <p id="anime-synopsis">
            {anime.attributes.synopsis}
          </p>
          <h2>Trailer</h2>
          <TrailerEmbed id={anime.attributes.youtubeVideoId} />
          <p>
            Watch anime on <a href={`https://www.crunchyroll.com/pt-br/${anime.attributes.slug}`}>Crunchyroll</a>
          </p>
        </section>
      </section>
		</div>
	);
}

export default Anime;