import Dict = NodeJS.Dict;
import {log} from "./utils";

type User = {
    name: string,
    balance: number
}

const users: Dict<User> = { }

function getUserIfExists(username: string): User {
    return users[username]
}

function addUserIfMissing(username: string) {
    if (!users[username]) {
        users[username] = { name: username, balance: 0}
        log(`User ${username} added`)
    }
    return users[username]
}

export  {getUserIfExists, addUserIfMissing};