import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`p{
    padding: 10px;
    border: 2px ;
    border-radius: 15px;
    background-color: cadetblue;
    color: palegreen;
  }`]
})

export class ServerComponent {
serverId: number = 10;
serverStatus: string = 'offline';

getServerStatus(){
  return this.serverStatus;
}

}
