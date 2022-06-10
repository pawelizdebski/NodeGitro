export interface IGitHubRepo {
    name: string;
    stargazersCount: number;
    watchersCount: number;
    forksCount: number;
    size: number;
}

export class GitHubRepo implements IGitHubRepo {
    name: string;
    stargazersCount: number;
    watchersCount: number;
    forksCount: number;
    size: number;


    constructor(name: string, stargazersCount: number, watchersCount: number, forksCount: number, size: number) {
        this.name = name;
        this.stargazersCount = stargazersCount;
        this.watchersCount = watchersCount;
        this.forksCount = forksCount;
        this.size = size;
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.stargazersCount = _data["stargazers_count"];
            this.watchersCount = _data["watchers_count"];
            this.forksCount = _data["forks_count"];
            this.size = _data["size"];
        }
    }

    static fromJS(data: any): GitHubRepo {
        data = typeof data === 'object' ? data : {};
        return new GitHubRepo(data["name"], data["stargazers_count"], data["watchers_count"], data["forks_count"], data["size"]);
    }

}
