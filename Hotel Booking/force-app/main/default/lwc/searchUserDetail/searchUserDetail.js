import { LightningElement, wire } from 'lwc';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import {publish, MessageContext} from 'lightning/messageService';

export default class SearchUserDetail extends LightningElement {

    usernameenter;
    @wire(MessageContext)
    messagecon

    searchUser(event){
        this.usernameenter = event.target.value;
    }

    handleSearch(){
        let mess = {
            enterUserName:{
                value: this.usernameenter
            }
        }
        publish(this.messagecon, FIRSTMC, mess);
    }
}