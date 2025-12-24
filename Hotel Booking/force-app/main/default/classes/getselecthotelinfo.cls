public with sharing class getselecthotelinfo {
    @AuraEnabled(cacheable=true)
    public static list<Hotels__c> getselecthotelinfomethod(Id hid){
        return [SELECT Name, Hotel_Name__c, Phone_No__c, Price__c, Hotel_Image__c FROM Hotels__c WHERE Id = :hid];
    }
    
}