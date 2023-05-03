

let codeWarsUserData: any = '';
let userCompletedKataData: any = '';
let userAuthoredKataData: any = '';
let codeWarsKataData: any = '';

// let userName: string = 'torret';
// let kataId: string = '5556282156230d0e5e000089';

async function UserAPIFetch (username: string)
{
    let res = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
    let data = await res.json();
    codeWarsUserData = data;
    console.log(codeWarsUserData);
    console.log('Rank: ' + codeWarsUserData.ranks.overall.rank);
    console.log('Username: ' + codeWarsUserData.username);
    console.log('Name: ' + codeWarsUserData.name);
    console.log('Honor: ' + codeWarsUserData.honor);
    console.log('Clan: ' + codeWarsUserData.clan);
    console.log('LeaderBoard Position: ' + codeWarsUserData.leaderboardPosition);
    // console.log('Total Authored Katas: ' + codeWarsUserData.codeChallenges.totalAuthored);
    // console.log('Total Completed Katas: ' + codeWarsUserData.codeChallenges.totalCompleted);

    return codeWarsUserData;
}

async function UserCompletedKataAPIFetch (username: string)
{
    let res = await fetch(`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=1`);
    let data = await res.json();
    userCompletedKataData = data;
    console.log('Completed Katas: ' + userCompletedKataData.totalItems);
    
    return userCompletedKataData;
}

async function UserAuthoredKataAPIFetch (username: string)
{
    let res = await fetch(`https://www.codewars.com/api/v1/users/${username}/code-challenges/authored`);
    let data = await res.json();
    userAuthoredKataData = data;
    console.log('Authored Katas: ' + userAuthoredKataData.data[0].name);
    
    return userAuthoredKataData;
}

async function KataAPIFetch (kataId: string)
{
    let res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${kataId}`);
    let data = await res.json();
    codeWarsKataData = data;
    console.log(codeWarsKataData);
    console.log(codeWarsKataData.rank.name);
    console.log('Title: ' + codeWarsKataData.name);
    console.log('Author: ' + codeWarsKataData.createdBy.username);
    console.log('Languages Available: ' + codeWarsKataData.languages);
    console.log('Description: ' + codeWarsKataData.description);

    return codeWarsKataData;
}


export { UserAPIFetch, KataAPIFetch, UserAuthoredKataAPIFetch, UserCompletedKataAPIFetch }