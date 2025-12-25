import { LightningElement, wire } from 'lwc';
import getallHotelsDataMethod from '@salesforce/apex/getallHotelsData.getallHotelsDataMethod';
//import { publish, MessageContext } from 'lightning/messageService';
//import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import {subscribe, MessageContext,unsubscribe } from 'lightning/messageService';
import { NavigationMixin } from 'lightning/navigation';

export default class Displayhotels extends NavigationMixin(LightningElement) {

    hotelData = [];
    filterDatas =[];
    HotelSubscribe;
    @wire(MessageContext)
    messagecon;

    connectedCallback() {
            this.HotelSubscribe = subscribe( this.messagecon, FIRSTMC,(message) => this.handleMessage(message));
    }

    filters = [];
    handleMessage(message) {
        console.log('Received message:', JSON.stringify(message));

        // Extract correct payload
        this.filters =  {...message.filterData.value};
        console.log('Filters:', JSON.stringify(this.filters));

    //     // Call Apex imperatively
    //         getallHotelsDataMethod({ hote:filters })
    //         .then(result => {
    //             this.hotelData = result;
    //             console.log('Hotels:', JSON.stringify(result));
    //         })
    //         .catch(error => {
    //             console.error('Apex Error:', error);
    //         });
        
    }

    @wire(getallHotelsDataMethod, {hote:'$filters'})
    getallHotelsDataMethod({data,error}){
        if(data){
            console.log('data', data);
            this.hotelData = data;
        }
        if(error){
            console.log('error =>', error);
        }
    }

    disconnectedCallback() {
        unsubscribe(this.HotelSubscribe);
        this.HotelSubscribe = null;
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