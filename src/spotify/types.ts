export type MusicData = {
  title: string;
  singer: string;
  image: string;
};

// Spotify API Types

export type SpotifyAuthResponse = {
  access_token: string;
  refresh_token: string;
};

export type SpotifyResponse = {
  items: [{ track: SpotifyTrack }];
};

export type SpotifyTrack = {
  name: string;
  duration_ms: number;
  preview_url: string;
  artists: [{ name: string }];
  album: {
    images: [
      {
        url: string;
        height: number;
        width: number;
      }
    ];
  };
};
