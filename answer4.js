/**
 * Callback: Callback is a function which is passed as arguement to other function and itended to be
 *           called at some point of time often after completion of asynchronous operation
 * 
 * Callback Hell: When we write multiple function and nest all of them as callbacks to one another then 
 *                code seems like pyramid means it grows horizontally instead of vertically which makes
 *                it very complex to manage or read. And this behaviour is call back hell.
 *      Solution: Use Async/await or Promise/then
 * 
 * Note: The main problem with callbacks is not callback hell actually it is inversion of control where
 *      we loose the control on our callbacks or reliability is lost. It is tackled with Promises.
 */

callbackFunc(arr, () => {
    () => {
        () => {
            // callback hell
        }
    }
})


// using promises
const profound = new Promise('3');

profound
    .then(res => res)
    .then(res2 => res2)
    .catch(err => console.log(err))

// async await

const asyncUsing = async function() {
    const res = await fetchSomething();
    console.log("printed already still waiting for res");
    // async returns promise;
}