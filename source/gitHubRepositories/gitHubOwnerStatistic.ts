import {GitHubRepo} from "./gitHubRepo.js";

class GitHubOwnerStatistic {
    reposCount: number = 0;
    avgStargazers: number = 0;
    avgWatchers: number = 0;
    avgForks: number = 0;
    avgSize: number = 0;

    private stargazersCount: number = 0;
    private watchersCount: number = 0;
    private forksCount: number = 0;
    private sizeCount: number = 0;

    constructor(repos: Array<GitHubRepo>) {
        this.reposCount = repos.length
        if (this.reposCount !== 0) {

            repos.forEach(repo => {
                this.stargazersCount += repo.stargazersCount
                this.watchersCount += repo.watchersCount
                this.forksCount += repo.forksCount
                this.sizeCount += repo.size
            })
            this.avgStargazers = this.stargazersCount / this.reposCount;
            this.avgWatchers = this.watchersCount / this.reposCount;
            this.avgForks = this.forksCount / this.reposCount;
            this.avgSize = this.sizeCount / this.reposCount;
        }

    }
}

export {GitHubOwnerStatistic}
