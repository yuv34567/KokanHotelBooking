public with sharing class insertbookingdata {
    @AuraEnabled(cacheable=false)
    public static void insertbookingdatainobject(Booked_Hotel_Info__c bookingDatas) {
        if(bookingDatas != null){
            insert bookingDatas;
        }
        else {
            system.debug('error');
        }
    }
}