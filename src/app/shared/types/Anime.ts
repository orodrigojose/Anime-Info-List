interface IAnimeCard {
  id: number
  attributes: {
    canonicalTitle: string;
    favoritesCount: number;
    posterImage: {
      small: string;
    }
  }
}

interface IAnime extends Omit<IAnimeCard, 'id' | 'attributes'>{
  id?: number
  attributes: {
    canonicalTitle: string
    slug: string
    titles: {
      ja_jp: string
    };
    synopsis: string
    status: string
    showType: string
    episodeCount: number
    posterImage: {
      small: string
    }
    coverImage: {
      tiny: string
    }
    youtubeVideoId: string
  }
}

export type { IAnime, IAnimeCard };