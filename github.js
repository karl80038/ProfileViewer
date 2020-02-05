class GitHub
{
    constructor()
    {
        this.client_ID = "18d5562475d9a1d97b15";
        this.client_secret = "c674d26a00a72954cd15d4865b9a8a2d18006668";
        this.user = "karl80038";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
        this.apiUrl = "https://api.github.com/users/";
    }

    //This method will be used to gather data from Github's API
    async getUserData()
    {
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }

        
    }
}