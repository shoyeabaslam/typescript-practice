function logParameter(target: any, key: string, index: number) {
    console.log(index)
    console.log(`Parameter ${index + 1} in method ${key} of class ${target.constructor.name} is decorated.`);
}

class UserService {
    greet(@logParameter message: string,@logParameter age:number) {
        console.log(`Hello, ${message}! age is ${age}`);
    }
}

const userService = new UserService();
userService.greet("World",23);

// Console Output: 
// "Parameter 1 in method greet of class UserService is decorated."
// "Hello, World!"
