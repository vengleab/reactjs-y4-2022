const longRunJob = (jobNum, callback) => {
    console.log(`Staring job: ${jobNum}`);
    setTimeout(()=>{
        console.log(`Job ${jobNum} is Done!!!`);
        callback && callback()
    }, 5000)
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
                // console.log('Code after resolve promise')
            })
        } catch (error) {
            throwError(error)
        }
    }) 
}
// Asynchronous function (Similar to Thread programming, almost parallel)
async function main(){
    await promiseLongRunJob(1)
    await promiseLongRunJob(2)
    await promiseLongRunJob(3)
    console.log('Code after long run job');
}
main() 
console.log('After main');


