import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtistItem from "./ArtistItem";
import { ReactComponent as Logo } from "./assets/logo.svg";

export interface ArtistResData {
  id: number;
  artistName: string;
  image: string;
}

function Main() {
  const [artists, setArtists] = useState<ArtistResData[]>([]);

  useEffect(() => {
    getArtistData();
  }, []);

  const getArtistData = () => {
    const result = axios.get("http://localhost:3000/data/main.json");
    result
      .then((res) => setArtists(res?.data.result))
      .catch((err) => console.log(err));
  };

  console.log("artist", artists);

  return (
    <div className="App">
      <nav>
        <Logo />
        <button>회원가입</button>
        <button>로그인</button>
      </nav>
      <div>
        <div>안뇽</div>
        <div>
          {artists.map((item: ArtistResData) => (
            <ArtistItem data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
