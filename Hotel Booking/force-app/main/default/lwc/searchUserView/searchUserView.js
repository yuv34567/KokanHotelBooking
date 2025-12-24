import { LightningElement, wire } from 'lwc';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';
import {subscribe, MessageContext} from 'lightning/messageService';
import getUserDataMethod from '@salesforce/apex/getUserData.getUserDataMethod';
// import { getListUi } from 'lightning/uiListApi';
// import { getObjectInfo } from 'lightning/uiObjectInfoApi';
// import BOOKING_HOTEL_INFO_OBJECT from '@salesforce/schema/Booked_Hotel_Info__c';
// import USERNAMEFIELD from '@salesforce/schema/Booked_Hotel_Info__c.User_Name__c';
// import EMAILFIELD from '@salesforce/schema/Booked_Hotel_Info__c.Email__c';
// import PHONEFIELD from '@salesforce/schema/Booked_Hotel_Info__c.Phone__c';
// import CHECKINFIELD from '@salesforce/schema/Booked_Hotel_Info__c.Check_In_Date_and_time__c';
// import CHECKOUTFIELD from '@salesforce/schema/Booked_Hotel_Info__c.Check_Out_Date_and_time__c';

// field = [USERNAMEFIELD, EMAILFIELD, PHONEFIELD, CHECKINFIELD, CHECKOUTFIELD];

export default class SearchUserView extends LightningElement {

    //fieldss = [USERNAMEFIELD, EMAILFIELD, PHONEFIELD, CHECKINFIELD, CHECKOUTFIELD];
    userNameEnter;
    //fieldss = field;
    userData = {};

    columns = [
        {label: 'User Name', fieldName: 'User_Name__c', type: 'text'},
        {label: 'User Email', fieldName: 'Email__c', type: 'email'},
        {label: 'User Phone', fieldName: 'Phone__c', type: 'phone'},
        {label: 'Check In Date', fieldName: 'Check_In_Date_and_time__c', type: 'date'},
        {label: 'Check Out Date', fieldName: 'Check_Out_Date_and_time__c', type: 'date'},
        {label: 'Total Price', fieldName: 'Price__c', type: 'number'},
        {label: 'Number of Guest', fieldName: 'No_Of_Guest__c', type: 'number'}
    ]

    @wire(MessageContext)
    messagecon;

    // @wire(getObjectInfo, {objectApiName: BOOKING_HOTEL_INFO_OBJECT})
    // objectInfo({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

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
            this.handleusersearchdata(result);
        })
        .catch(error => {
            console.log('error', error);
        })
    }

    handleusersearchdata(result){
        console.log('result 1', result);
        this.userData = result;
        console.log('this.userData', this.userData);
    }
    // @wire(getListUi, {objectApiName: BOOKING_HOTEL_INFO_OBJECT, listViewApiName: 'All'})
    // bookedHotelInfo({data,error}){
    //     if(data){
    //         console.log('data', data);
    //         this.handlelistviewdata(data.records.records);
    //     }
    //     if(error){
    //         console.log('error =>', error);
    //     }
    // }

    // userData = {};

    // handlelistviewdata(bookingval){
    //     console.log('bookingval', bookingval);
    //     for(const val of bookingval){
    //         console.log('val', val.fields);
    //     }
    // }
}