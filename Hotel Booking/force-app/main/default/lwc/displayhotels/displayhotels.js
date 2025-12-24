import { LightningElement, wire } from 'lwc';
import getallHotelsDataMethod from '@salesforce/apex/getallHotelsData.getallHotelsDataMethod';
//import { publish, MessageContext } from 'lightning/messageService';
//import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import { NavigationMixin } from 'lightning/navigation';

export default class Displayhotels extends NavigationMixin(LightningElement) {

    hotelData = [];
    @wire(getallHotelsDataMethod)
    getallHotelsDataMethod({data,error}){
        if(data){
            console.log('data', data);
            this.hotelData = data;
        }
        if(error){
            console.log('error =>', error);
        }
    }

    // @wire(MessageContext)
    // messagecon;

    navigatetoanotherpage(event){
        // const recordId = event.currentTarget.dataset.id;
        // console.log('Clicked Record Id:', recordId);
        // const mess = {
        //     selectHotelInfo:{
        //         value: recordId
        //     }
        // }
        // console.log('mess', mess);
        // console.log('mess', mess.selectHotelInfo.value);
        localStorage.setItem('recordIdkey', event.currentTarget.dataset.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'View_Hotel'
            }
        })

        // publish(this.messagecon, FIRSTMC, mess);
    }
}