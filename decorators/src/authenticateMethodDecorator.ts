let isAuthenticate = false;

function authenticate(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        if (!isAuthenticate) {
            throw new Error("Access Denied!!!");
        }

        const result = originalMethod.apply(this, args);
        console.log(`${args} This id gets deleted successfully`);
        return result;
    };
}

class StorageDb {
    @authenticate
    delete(id: number) {
        console.log(`${id} Is Deleted...`);
    }
}

const db = new StorageDb();
try {
    db.delete(1);
} catch (error) {
    console.log(error); // Output: "Access Denied!!!"
}

isAuthenticate = true;
db.delete(1);
