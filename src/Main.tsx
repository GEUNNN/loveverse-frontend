import axios from "axios";
import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

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

  return (
    <div className="App">
      <nav>
        <Logo />
        <button>회원가입</button>
        <button>로그인</button>
      </nav>
    </div>
  );
}

export default Main;
