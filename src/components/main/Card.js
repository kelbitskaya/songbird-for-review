import React from 'react';
import AudioPlayer from 'react-modular-audio-player';

let rearrangedPlayer = [
    {
        className: "tier-top",
        style: {margin: "0.3rem"},
        innerComponents: [
            {
                type: "play",
                style: {width: "fit-content", color: "white"}
            },
            {
                type: "seek"
            },
            {
                type: "time",
                style: {width: "fit-content"}
            },
        ]
    },

];

const Card = (props) => {
  const {
    image, name, species, description, audio,
  } = props.data;
  const { fullVariant } = props;
  const playlist = [
    {
      src: audio,
      title: name,
      artist: '',
    },
  ];
  return (
    <section className="page__block card">
      <img src={image} alt={name} className="image" />
        <div className='audio-block'>
        <h2 className="text">{name}</h2>
        {
          (species && fullVariant) && <p className="text-small">{species}</p>
        }
        <div className="player">
            <AudioPlayer
              audioFiles={playlist}
              fontColor="#ffffff"
              fontSize="2rem"
              iconSize="2rem"
              rearrange={rearrangedPlayer}
            />
        </div>
      {
        (description && fullVariant) && <p className="text-small">{description}</p>
      }
    </div>
    </section>
  );
};
export default Card;
