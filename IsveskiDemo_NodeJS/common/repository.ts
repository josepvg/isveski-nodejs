import Dict = NodeJS.Dict;
import {log} from "./isveskiUtils";

type User = {
    name: string,
    isveskiId: string,
    balance: number
    checkIns: Date[]
}

export namespace Users {
    
    const users: Dict<User> = { }
    
    export function getAllUsers() { return users }

    export function getUser(isveskiId: string): User | undefined { 
        return users[isveskiId] 
    }
    
    export function getOrAddUserIfMissing(isveskiId: string, username?: string): User {
        if (!users[isveskiId]) {
            users[isveskiId] = { 
                name: username || ("LostAndFoundUser " + isveskiId.slice(0, 8)), 
                isveskiId: isveskiId,
                balance: 0, 
                checkIns: []
            }
            log(`User ${username} added`)
        }
        return users[isveskiId]
    }

    export function printUserStatus() {
        log(JSON.stringify(users, null, 4))
    }
}