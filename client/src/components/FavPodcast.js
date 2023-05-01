import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";
import { Link, useNavigate } from "react-router-dom";
import Episode from "./Episode";
import styled from "styled-components";
import "./FavPodcast.css";

const FavPodcast = ({ podcast, removeFavourite }) => {
  const [podcastData, setPodcastData] = useState({});

  const fetchPodcastData = async () => {
    const data = await getPodSeries(podcast.uuid);
    setPodcastData(data);
  };

  useEffect(() => fetchPodcastData, []);
  // const navigate = useNavigate()

  const handleButtonClick = () => {
    removeFavourite(podcast._id);
  };

  return (
    <>
      <div className="podcastList-body">
        <StyledImg src={podcastData.imageUrl}></StyledImg>
        <h4>
          {podcastData.name}{" "}
        </h4>
        <button className="deleteButton" onClick={handleButtonClick}>Remove</button>
        {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
      </div>
      {/* <div className="episode-body">
        {episodes.length === 0 ? (
          <Episode
            podcastName={podcastData.name}
            podcastDes={podcastData.description}
            episodes={episodes}
          />
        ) : null}
      </div> */}
    </>
  );
};
export default FavPodcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;