import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import getselecthotelinfomethod from '@salesforce/apex/getselecthotelinfo.getselecthotelinfomethod';

export default class ViewHotelInfoInDetail extends LightningElement {

    HotelDataWeGet ;
    // @wire(MessageContext)
    // messagecon;

    renderedCallback(){
        console.log(localStorage.getItem('recordIdkey'));
        getselecthotelinfomethod({hid:localStorage.getItem('recordIdkey')})
        .then(result => {
            console.log('result', result);
            this.HotelDataWeGet =  result;
            console.log('this.HotelDataWeGet =>'+JSON.stringify(this.HotelDataWeGet));
        })
        .catch(error => {
            console.log('error', error);
        })

        // console.log('connectedCall Back');
        // localStorage.getItem('recordIdkey');
        // subscribe(this.messagecon, FIRSTMC, (message) => {
        //     this.handleuserhoteinfo(message);
        // })
    }

    handleuserhoteinfo(message){
        // console.log('message 1', message.selectHotelInfo.value);
        // getselecthotelinfomethod({hid:message.selectHotelInfo.value})
        // .then(result => {
        //     console.log('result', result);
        //     this.HotelDataWeGet =  result;
        //     console.log('this.HotelDataWeGet =>'+JSON.stringify(this.HotelDataWeGet));
        // })
        // .catch(error => {
        //     console.log('error', error);
        // })
    }
}