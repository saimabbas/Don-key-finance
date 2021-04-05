import cron from "node-cron";
import { IJob } from "./IJob";
import { PancakeCronJob } from "./PancakeCronJob";
import moment from "moment";
import { YearnCronJob } from "./YearnCronJob";


const Jobs: IJob[] = [YearnCronJob, PancakeCronJob]


const scheduleJobs = () => {
    console.log("Scheduling Cron Jobs");
    Jobs.forEach(async ({job,schedule,runOnStart,JobName})  => {
        const newJob = async () => {
            const startTime = moment();
            try {
                
                console.log(`Running ${JobName} at `, startTime.format());
                await job()
                const endTime = moment();
                console.log(`Cron Job ${JobName} Completed in `, moment.duration(endTime.diff(startTime)).humanize());
            }catch(e){
                console.log(`An Error Occured in  ${JobName}`, e, moment.duration(moment().diff(startTime)).humanize());
            }
            
        }
        if(runOnStart){
            await newJob();
        }
        cron.schedule(schedule, newJob);
    })
}
if(process.env.NODE_ENV === "production"){
    scheduleJobs();
}
