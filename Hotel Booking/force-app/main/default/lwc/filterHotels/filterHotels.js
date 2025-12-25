import { LightningElement, wire } from 'lwc';
import getallHotelsDataMethod from '@salesforce/apex/getallHotelsData.getallHotelsDataMethod';
import { publish, MessageContext } from 'lightning/messageService';
import FIRSTMC from '@salesforce/messageChannel/firstMessage__c';

export default class FilterHotels extends LightningElement {

    //val = 20000;
    userSearchData = {
        HotelName: '',
        Price: 20000
    };
    //allSearchData = [];
    handleInputHN(event){
        this.userSearchData = {...this.userSearchData, "HotelName":event.target.value};
        //this.allSearchData.add(this.userSearchData);
        console.log(JSON.stringify(this.userSearchData));
    }
    handleInputP(event){
        this.userSearchData = {...this.userSearchData, "Price":Number(event.target.value)};
        //this.allSearchData.add(this.userSearchData);
        console.log(JSON.stringify(this.userSearchData));
    }
    @wire(MessageContext)
    messagecon;

    handleSearch(){
        //this.allSearchData = [this.userSearchData];
        //console.log(JSON.stringify(this.allSearchData));
        const mess = {
            filterData:{
                value: this.userSearchData
            }
        }
        publish(this.messagecon, FIRSTMC, mess);

        // getallHotelsDataMethod({hote: this.allSearchData})
        // .then(result => {
        //     console.log(JSON.stringify(result));
        // })
        // .catch(error => {
        //     console.log(JSON.stringify(error));
        // });
    }

    
}