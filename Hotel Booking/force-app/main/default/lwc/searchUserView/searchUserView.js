import { LightningElement, wire } from 'lwc';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import {subscribe, MessageContext} from 'lightning/messageService';
import getUserDataMethod from '@salesforce/apex/getUserData.getUserDataMethod';

export default class SearchUserView extends LightningElement {

    userNameEnter;
    @wire(MessageContext)
    messagecon;

    connectedCallback(){
        console.log('connectedCall Back');
        subscribe(this.messagecon, FIRSTMC, (message) => {
            this.handleUserMessage(message);
        })
    }

    handleUserMessage(message){
        console.log('message 1', message.enterUserName.value);
        this.userNameEnter = message.enterUserName.value;
        console.log('this.userNameEnter', this.userNameEnter);
        getUserDataMethod({sendName:this.userNameEnter})
        .then(result => {
            console.log('result', result);
        })
        .catch(error => {
            console.log('error', error);
        })
    }
}