import axios from "axios";

import { getLanguageCard } from "./components";
import { GitHubRepo } from "./types";

class GitHub {
  BASE_URL = "https://api.github.com/";
  USERNAME: string;

  constructor(username: string) {
    this.USERNAME = username;
  }

  private async getReposDataFromGitHub(): Promise<GitHubRepo[]> {
    return axios
      .get<GitHubRepo[]>(this.BASE_URL + "users/" + this.USERNAME + "/repos")
      .then((response) => {
        return response.data;
      });
  }

  private getTopLanguagesFromArray(data: GitHubRepo[]): string[] {
    const banned = ["HTML", "CSS"];
    const languages: Array<{ language: string; count: number }> = [];

    let founded = false;

    for (let i in data) {
      if (data[i].language == null) continue;

      founded = false;

      if (banned.includes(data[i].language)) {
        continue;
      }

      for (let j in languages) {
        if (languages[j].language === data[i].language) {
          languages[j].count += 1;
          founded = true;
          break;
        }
      }

      if (!founded) {
        languages.push({
          language: data[i].language,
          count: 0,
        });
      }
    }

    languages.sort((a, b) => b.count - a.count);

    return languages
      .filter((_, index) => {
        if (index <= 2) {
          return true;
        }
      })
      .map((element) => {
        return element.language;
      });
  }

  async getTopLanguagesComponent(): Promise<string> {
    return this.getReposDataFromGitHub().then((data) => {
      return getLanguageCard(this.getTopLanguagesFromArray(data));
    });
  }
}

export default new GitHub("unchainedDavid");
