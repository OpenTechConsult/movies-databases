function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 1000);
    });
}

const promise = asyncFunction();
promise.then((value) => {
    console.log(value);
});
