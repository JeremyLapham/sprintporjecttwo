

export async function createAccount(createdUser: { Id: number; Username: string; password: string; isAdmin: boolean }){
    const res = await fetch('https://sprintwarshost.azurewebsites.net/user/adduser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}
export async function LoginUser(user: { Username: string; password: string; }){
    const res = await fetch('https://sprintwarshost.azurewebsites.net/user/login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function GetKataData(user: string) {
    const response = await fetch(`https://www.codewars.com/api/v1/users/${user}`);
    const data = await response.json();
    return data;
}

export async function GetAllUsers() {
    const response = await fetch(`https://sprintwarshost.azurewebsites.net/user/GetAllUsers`);
    const data = await response.json();
    return data;
}

export async function GetUserIsAdmin(username: string) {
    const response = await fetch(`https://sprintwarshost.azurewebsites.net/user/UserByUsername/${username}`);
    const data = await response.json();
    return data;
}