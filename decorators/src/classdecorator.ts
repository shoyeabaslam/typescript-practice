function logMethod(target:any,key:string,descriptor:PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args:any[]){
        console.log("Hi "+key+" "+args)
        originalMethod.apply(this,args);

    }
}



class MyClass{

    greet(name:string){
        console.log("Hello "+name);
    }
}

const a = new MyClass();
a.greet("Shoyeab");