import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdtaed = new EventEmitter<string>();

      constructor(private logger:LoggingService){}

      addAccount(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
        this.logger.logStatusChange(newAccount.status);
      }
    
      updateAccount(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.logger.logStatusChange(updateInfo.newStatus)
      }
}