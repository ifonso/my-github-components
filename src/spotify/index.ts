import axios from "axios";
import spotifyAuth from "./auth";

import { config } from "dotenv";
import { MusicData, SpotifyResponse } from "./types";
import { getMusicsCard } from "./components";

config();

class Spotify {
  private SPOTIFY_URL =
    "https://api.spotify.com/v1/me/player/recently-played?limit=3";
  private auth = spotifyAuth;

  private async getDataFromSpotify(): Promise<MusicData[]> {
    const token = await this.auth.getToken();

    if (!token) return Promise.reject("User not authenticated!");

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    return axios
      .get<SpotifyResponse>(this.SPOTIFY_URL, options)
      .then(({ data }) => {
        const musics = data.items.map((item): MusicData => {
          return {
            title: item.track.name,
            singer: item.track.artists[0].name,
            image: item.track.album.images[0].url,
          };
        });
        return musics;
      });
  }

  private getMusicsData(): Promise<MusicData[]> {
    return new Promise((resolve, reject) => {
      this.getDataFromSpotify()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getMusicsCard(): Promise<string> {
    return this.getMusicsData().then((data) => {
      return getMusicsCard(data);
    });
  }
}

export default new Spotify();
