import { LightningElement } from 'lwc';
import insertbookingdatainobject from '@salesforce/apex/insertbookingdata.insertbookingdatainobject';
export default class HotelBookingPage extends LightningElement {

    bookingData = {};
    handleChange(event){
        this.bookingData[event.target.name] = event.target.value;
    }
    handleSubmit(){
        insertbookingdatainobject({bookingDatas:this.bookingData})
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
}