import axios from "axios";
import querystring from "querystring";

import { config } from "dotenv";
import { SpotifyAuthResponse } from "./types";
import { Request, Response } from "express";
import { generateRandomString } from "../utils";

config();

class SpotifyAuth {
  private refresToken?: string = process.env.SPOTIFY_REFRESH_TOKEN;

  private fetchTokenFromRefreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.refresToken) return reject("No refresh token.");

      const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET as string;
      const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;

      return axios<SpotifyAuthResponse>({
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        data: querystring.stringify({
          grant_type: "refresh_token",
          refresh_token: this.refresToken!,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      }).then((response) => {
        resolve(response.data.access_token);
      });
    });
  }

  fetchToken(_: Request, response: Response) {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
    const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI as string;

    const state = generateRandomString(16);
    const queryParams = querystring.stringify({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      state: state,
      scope: "user-read-recently-played",
    });

    response.cookie("spotify_auth_state", state);
    return response.redirect(
      `https://accounts.spotify.com/authorize?${queryParams}`
    );
  }

  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      // If there isn't a refresh token
      if (!this.refresToken) return reject("No refresh token");

      this.fetchTokenFromRefreshToken().then((token) => {
        resolve(token);
      });
    });
  }
}

export default new SpotifyAuth();
