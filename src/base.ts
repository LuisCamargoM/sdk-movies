import fetch from "isomorphic-unfetch";

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class MoviesBase {
  private apikey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apikey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://search.imdbot.workers.dev/";
  }

  protected async invoke<T>(
    endpoint: string,
    params?: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}?${params}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": this.apikey,
    };

    const config = {
      headers,
      ...options,
    };
    const res = await fetch(url, config);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  }
}
