import { stat } from "fs";

export class LoggingService{
    logStatusChange(status:string){
        console.log('a new status change is detected : '+status);
    }
}