public with sharing class getallHotelsData {
    @AuraEnabled(cacheable=true)
    public static list<Hotels__c> getallHotelsDataMethod(){
        list<Hotels__c> hotels = [SELECT Name, Hotel_Name__c, Phone_No__c, Price__c, Hotel_Image__c FROM Hotels__c];
        return hotels;
    }
}