import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {ServersComponent} from "../servers/servers.component";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // public modal: NgbActiveModal;
  // public serversComponent: ServersComponent;


  constructor(public modal: NgbActiveModal , public serversComponent : ServersComponent ) {

    // this.serversComponent = serversComponent;
  }

  deleteServers() {
    this.serversComponent.deleteAllServer();
  }
}
  // private _serversInstance: ServersComponent;
  // get serversInstance(): ServersComponent {
  //   return this._serversInstance;
  // }
  //
  // set serversInstance(value: ServersComponent) {
  //   this._serversInstance = value;
  // }


  // constructor(serversInstance: ServersComponent) {
  //   this._serversInstance = serversInstance;
  // }

  // @Input() message: string = '';
  // @Output() confirmEvent = new EventEmitter<void>();
  // showModal = false;
  //
  // confirm() {
  //   this._serversInstance.deleteAllServer();
  //   this.confirmEvent.emit();
  //   this.closeModal();
  // }

  // closeModal() {
  //   this.showModal = false;
  // }



