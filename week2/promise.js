const longRunJob = (jobNum, callback) => {
    console.log(`Staring job: ${jobNum}`);
    setTimeout(()=>{
        console.log(`Job ${jobNum} is Done!!!`);
        callback && callback()
    }, 2000)
}

// promise
const promiseLongRunJob = (jobNum) => {
    //return new Promise((resolve, reject) => {
    return new Promise((completeWithResult, throwError) => {
        try {
            // if(jobNum==4) {
            //     return throwError()
            // }
            // if not return, this job will continue to run
            longRunJob(jobNum, ()=> {
                completeWithResult('Resolve the promise of job num:'+ jobNum);
                console.log('Code after resolve promise')
            })
        } catch (error) {
            throwError(error)
        }
    }) 
}

// callback hell
// longRunJob(1, function() {
//     console.log('Statement 1')    
//     longRunJob(2, () => {
//         console.log('Statement 2')
//         longRunJob(3, ()=> {
//             console.log('Statement 3')
//             longRunJob(4, ()=> {
//                 console.log('Statement 4')
//             })
//         })
//     })
// })

// promiseLongRunJob(1)
//     .then((result) => {
//         console.log('Statement 1', result)   
//         return promiseLongRunJob(2)
//     })
//     .finally((result) => {
//         console.log('Statement 2', result) 
//         return promiseLongRunJob(3)
//     })
//     .finally( () => {
//         console.log('Statement 3') 
//         return promiseLongRunJob(4)
//     })
//     .then((result) => {
//         console.log('Statement 4', result) 
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })

Promise.any([
    promiseLongRunJob(1),
    // promiseLongRunJob(2),
    // promiseLongRunJob(3),
    // promiseLongRunJob(4),
]).then(results => {
    // in case any error in the jobs, it won't give any results
    console.log('results', results);
}).catch( error => {
    console.log('error', error);
})

// console.log('After promise');
