import { ReactElement, useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../shared/contexts/SearchContext';
import { useDebounce } from '../../shared/hooks/useDebounce';
import AnimeCard from '../../shared/components/anime-card/';
import Loading from '../../shared/components/loading/';
import { IAnimeCard } from '../../shared/types/Anime';
import qs from 'qs';

import './styles.css';

interface IPage {
	page: {
		limit: number;
		offset: number
	},
	filter?: {
		text: string
	}
}

const Home = (): ReactElement<any> => {
	const [animesHome, setAnimesHome] = useState<IAnimeCard[]>([]);
	const { search } = useContext(SearchContext);	
	const { debounce } = useDebounce(800);
	
	const getAnimes = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();
		
		setAnimesHome(data.data);
	}
	
	useEffect(() => {
		debounce(() => {
			const query: IPage = {
				page: {
					limit: 18,
					offset: 0
				}
			}
			
			if (search) {
				query.filter = {
					text: search
				}
			}
			
			const api = 'https://kitsu.io/api/edge/';
			const url = `${api}anime?${qs.stringify(query)}`;
	
			getAnimes(url)
		})
	}, [search, debounce])
	
	return (
		<div className="container">
		  {search && <h2 className="title"> Results for <strong>{search}</strong></h2>}
			<ul className="animes-container">
				{animesHome.length === 0 && <Loading />}
				{animesHome.length > 0 && animesHome.map(
				  (anime) => <AnimeCard anime={anime} key={anime.id} />
				)}
			</ul>
		</div>
	);
}

export default Home;