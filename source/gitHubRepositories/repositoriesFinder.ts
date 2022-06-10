import {GitHubRepo} from './gitHubRepo.js';

export class RepositoriesFinder {

    public async getRepos(owner: string): Promise<GitHubRepo[]> {

        let url = 'https://api.github.com/users/{owner}/repos';
        if (owner === undefined || owner === null)
            throw new Error("The parameter 'owner' must be defined.");
        url = url.replace("{owner}", encodeURIComponent("" + owner));

        return fetch(url)
            .then(response => this.processGetRepos(response));
    }

    protected async processGetRepos(response: Response): Promise<GitHubRepo[]> {
        const status = response.status;
        if (status === 200) {
            const jsonResult = await response.json();
            let result200: any;
            if (Array.isArray(jsonResult)) {
                result200 = [] as any;
                for (let item of jsonResult)
                    result200!.push(GitHubRepo.fromJS(item));
                return result200;
            }
        }
        return <any>null;
    }
}
