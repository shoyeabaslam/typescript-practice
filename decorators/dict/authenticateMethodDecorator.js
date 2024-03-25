"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let isAuthenticate = false;
function authenticate(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (!isAuthenticate) {
            throw new Error("Access Denied!!!");
        }
        const result = originalMethod.apply(this, args);
        console.log(`${args} This id gets deleted successfully`);
        return result;
    };
}
class StorageDb {
    delete(id) {
        console.log(`${id} Is Deleted...`);
    }
}
__decorate([
    authenticate
], StorageDb.prototype, "delete", null);
const db = new StorageDb();
try {
    db.delete(1);
}
catch (error) {
    console.log(error); // Output: "Access Denied!!!"
}
isAuthenticate = true;
db.delete(1);
