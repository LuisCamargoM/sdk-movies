type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class MoviesBase {
    private apikey;
    private baseUrl;
    constructor(config: Config);
    protected invoke<T>(endpoint: string, params?: string, options?: RequestInit): Promise<T>;
}
export {};
