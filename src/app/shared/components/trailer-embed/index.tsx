import './styles.css';

type IEmbedProps = { id: string }

const TrailerEmbed = ({ id }: IEmbedProps) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay;encrypted-media;"
        allowFullScreen
        title="Anime trailer"
      />
    </div>
  )
};

export default TrailerEmbed;