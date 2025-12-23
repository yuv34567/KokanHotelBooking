public with sharing class getUserData {
    @AuraEnabled(cacheable=false)
    public static list<Booked_Hotel_Info__c> getUserDataMethod(string sendName){
         list<Booked_Hotel_Info__c> Bookingdata = new list<Booked_Hotel_Info__c>();
         system.debug('sendName 1 => '+sendName);
        if(sendName != null){
            system.debug('sendName 2 => '+sendName);
            string searchstringval = '%'+sendName+'%';
            Bookingdata = [SELECT User_Name__c, Phone__c, Email__c, No_Of_Guest__c, Check_In_Date_and_time__c, Check_Out_Date_and_time__c FROM Booked_Hotel_Info__c WHERE User_Name__c LIKE :searchstringval];
            // system.debug('Booking => '+ [SELECT User_Name__c, Phone__c, Email__c, No_Of_Guest__c, Check_In_Date_and_time__c, Check_Out_Date_and_time__c FROM Booked_Hotel_Info__c WHERE User_Name__c LIKE '%sendName%']);
            system.debug('Booking Data => '+Bookingdata);
        }

        if(!Bookingdata.isEmpty()){
            return Bookingdata;
        }
        else {
            return null;
        }
    }
}