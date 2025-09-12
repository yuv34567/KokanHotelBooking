import { LightningElement, wire } from 'lwc';
import ACCOUNTOBJ from '@salesforce/schema/Account';
import RATINGFIELD from '@salesforce/schema/Account.Rating';
import NAMEFIELD from '@salesforce/schema/Account.Name';
import INDUTRYFIELD from '@salesforce/schema/Account.Industry';
import PHONEFIELD from '@salesforce/schema/Account.Phone';

import CONTACTOBJ from '@salesforce/schema/Contact';
import OPPORTUNITYOBJ from '@salesforce/schema/Opportunity';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import {getListUi} from 'lightning/uiListApi';

//multiobj = [ACCOUNTOBJ,CONTACTOBJ,OPPORTUNITYOBJ];
export default class FetchData extends LightningElement {

    accobj=ACCOUNTOBJ;
    conobj= CONTACTOBJ;
    oppobj=OPPORTUNITYOBJ;


    @wire(getObjectInfo, {objectApiName:'$accobj'})
    accountData;

    @wire(getListUi, {objectApiName:'$accobj', listViewApiName:'AllAccounts'})
    reatingval({data,error}){
        if(data){
            console.log(data);
        }
    }

    // @wire(getRecordUi, {recordIds:'001gL00000CCxOuQAL', fields:[RATINGFIELD,NAMEFIELD,INDUTRYFIELD,PHONEFIELD]})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getRecordUi, {recordIds:'001gL00000CCxOuQAL', layoutTypes:'Full', modes:'View'})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getRecord, {recordId:'001gL00000CCxOuQAL', layoutTypes:'Full'})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getRecord, {recordId:'001gL00000CCxOuQAL', fields:[RATINGFIELD,NAMEFIELD,INDUTRYFIELD,PHONEFIELD]})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNTOBJ, recordTypeId:'$accountData.data.defaultRecordTypeId'})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getPicklistValues, {fieldApiName:RATINGFIELD, recordTypeId:'$accountData.data.defaultRecordTypeId'})
    // reatingval({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    // }

    // @wire(getObjectInfos, {objectApiNames:[ACCOUNTOBJ,CONTACTOBJ,OPPORTUNITYOBJ]})
    // multiData({data,error}){
    //     if(data){
    //         console.log(data);
    //     }
    //     if(error){
    //         console.log(error);
    //     }
    // }
}