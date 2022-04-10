import axios from "axios";
import React, { useState } from "react";

export interface ArtistResData {
  id: number;
  artistName: string;
  image: string;
}

function Main() {
  const [artists, setArtists] = useState<ArtistResData[]>([]);

  const result = axios.get("http://localhost:3001/data/main.json");
  result.then((res) => setArtists(res?.data.result));

  console.log("artist", artists);

  return <div className="App">loveverse 안뇽</div>;
}

export default Main;
