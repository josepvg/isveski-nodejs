"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserIfMissing = exports.getUserIfExists = void 0;
const utils_1 = require("./utils");
const users = {};
function getUserIfExists(username) {
    return users[username];
}
exports.getUserIfExists = getUserIfExists;
function addUserIfMissing(username) {
    if (!users[username]) {
        users[username] = { name: username, balance: 0 };
        (0, utils_1.log)(`User ${username} added`);
    }
    return users[username];
}
exports.addUserIfMissing = addUserIfMissing;
//# sourceMappingURL=repository.js.map