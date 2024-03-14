import Dict = NodeJS.Dict;
import {log} from "./isveskiUtils";

type User = {
    name: string,
    balance: number
}

export namespace Users {
    
    const users: Dict<User> = { }

    export function getUserIfExists(username: string): User {
        return users[username]
    }

    export function addUserIfMissing(username: string) {
        if (!users[username]) {
            users[username] = { name: username, balance: 0}
            log(`User ${username} added`)
        }
        return users[username]
    }

    export function printUserStatus() {
        log(JSON.stringify(users, null, 4))
    }
}