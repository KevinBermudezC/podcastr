import React from "react";

const PodcastDetailsPage = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div>
      <p className="text-white-1">PodcastDetails for {params.podcastId}</p>
    </div>
  );
};
export default PodcastDetailsPage;
