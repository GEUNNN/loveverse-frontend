import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistIndex from "./Artist";
import MainIndex from "./Main";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/:artistName" element={<ArtistIndex />} />
      </Routes>
    </BrowserRouter>
  );
}
