import React from "react";

export interface ArtistDataProps {
  data: ArtistData;
}

export interface ArtistData {
  id: number;
  artistName: string;
  image: string;
}

export default function ArtistItem({ data }: ArtistDataProps) {
  return (
    <div>
      <img src={data?.image} alt={data?.artistName} />
      {data?.artistName}
    </div>
  );
}
