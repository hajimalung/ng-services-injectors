import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers : [LoggingService]
})
export class NewAccountComponent {

  constructor(private accountsService:AccountsService){
    this.accountsService.statusUpdtaed.subscribe((status)=>alert('account updated to status :'+status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({ name : accountName , status : accountStatus});
    //this.logger.logStatusChange(accountStatus);
  }
}
