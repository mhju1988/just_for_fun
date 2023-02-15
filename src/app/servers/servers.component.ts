import {Component, OnInit} from '@angular/core';
import {Event} from "@angular/router";
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../modal/modal.component";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private myInput: HTMLElement | null;
  private mySuggestions: string[];
  private suggestionList: HTMLUListElement;

  allowNewServer = false;
  wrongRighte = false;
  serverCreationStatus = '';
  serverName = '';
  serverNameExist = '';
  servers: Array<string> = [];


  constructor(private modalService: NgbModal) {

    this.myInput = document.getElementById('myInput') as HTMLInputElement ;
    this.mySuggestions = ['apple', 'banana', 'cherry', 'durian', 'elderberry', 'fig', 'grape'];
    this.suggestionList = document.getElementById('suggestions') as HTMLUListElement;

    this.myInput.addEventListener('input', () => {
      let currentInput = (this.myInput as HTMLInputElement).value.toLowerCase();
      const filteredSuggestions = this.mySuggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(currentInput)
      );
      this.suggestionList.innerHTML = '';

      filteredSuggestions.forEach((suggestion) => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        this.suggestionList.appendChild(li);
      });
    });

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  // here i was trying to simulates a database ;
  ngOnInit() {

    for (let i = 1; i <= 2; i++) {
      this.servers.push('Server' + i);
    }

  }

  serverAlreadyExist(name:string): boolean {
    if (this.servers.length === 0) {
      return false;
    }

    let j: number = 0;
    if (this.servers.length !== 0) {
      while (name.toUpperCase() !== this.servers[j].toUpperCase() && j < this.servers.length - 1) {
        j++;
      }
    }

    return this.servers[j].toUpperCase() === name.toUpperCase();

  }


  private customSort(a: string, b: string): number {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();

    // Use the localeCompare method to compare the strings, which takes into account special characters and diacritics
    const comparison = aLower.localeCompare(bLower, undefined, {numeric: true});

    // Return the result of the comparison
    return comparison;
  }


  onCreateServer() {


    if (this.serverName.length != 0 && !this.serverAlreadyExist(this.serverName)) {
      this.servers.push(this.serverName);
      // this.servers.sort((a,b) => a.localeCompare(b));


      this.servers.sort(this.customSort);
      this.serverCreationStatus = 'Super! your server  ' + this.serverName + ' was created ! ';
      this.wrongRighte = true;

    } else if (this.serverName.length == 0) {
      this.serverCreationStatus = 'the Server name can not be empty ! '
      this.wrongRighte = false;
    } else {
      // if(this.serverName.length )
      this.wrongRighte = false;
      this.serverCreationStatus = 'server ' + this.serverName + ' is  already existed !, please try something else ';

    }


  }

  deleteServerByName() {


    if (!this.serverAlreadyExist(this.serverName)) {
      this.serverCreationStatus = 'there is no Server with that name : ' + this.serverName;
      this.wrongRighte = false;

    }
    let n: number = 0;
    while (n <= this.servers.length - 1) {

      if (this.serverName.toUpperCase() !== this.servers[n].toUpperCase()) {
        console.log(this.servers[n]);
        n++;
      } else {
        console.log('found it ')
        this.servers.splice(n, 1);
        this.wrongRighte = true;
        this.serverCreationStatus = 'the Server ' + this.serverName + 'was deleted';
        // delete this.servers[n];
        console.log(this.servers);
      }

    }


  }


  onUpdateServerName(event: any) {

    this.serverName = (<HTMLInputElement>event.target).value;
    // this.serverAlreadyExist(this.serverName);
    console.log('hi');

  }

  deleteAllServer() {

    this.servers = [];
    // this.serverName = '';
    this.wrongRighte = false;
    this.serverCreationStatus = 'All servers have been deleted ):';
  }

  // myMethodSugg(){
  //
  //
  //  this.myInput.addEventListener('input', () => {
  //     const currentInput = this.myInput.value.toLowerCase();
  //     const filteredSuggestions = this.mySuggestions.filter((suggestion) =>
  //       suggestion.toLowerCase().startsWith(currentInput)
  //     );
  //     this.suggestionList.innerHTML = ''; // clear the previous suggestions
  //
  //     filteredSuggestions.forEach((suggestion) => {
  //       const li = document.createElement('li');
  //       li.textContent = suggestion;
  //       this.suggestionList.appendChild(li);
  //     });
  //   });
  // }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
  }
}
