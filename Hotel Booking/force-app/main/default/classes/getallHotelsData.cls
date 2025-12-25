public with sharing class getallHotelsData {

    @AuraEnabled(cacheable=true)
    public static List<Hotels__c> getallHotelsDataMethod(Map<String, Object> hote) {

        String query = 'SELECT Name, Hotel_Name__c, Phone_No__c, Price__c, Hotel_Image__c FROM Hotels__c';
        List<String> conditions = new List<String>();
        //System.debug('keys =>'+hote.keySet());
        //System.debug('values =>'+hote.values());

        System.debug('outside hole ');
        if (hote != null) {
            System.debug('inside hole');
            System.debug('hote.get("Hotel_Name__c") =>'+hote.get('HotelName'));

            if (hote.containsKey('HotelName') &&
                String.isNotBlank((String)hote.get('HotelName'))) {
                    System.debug('inside hole 1');


                conditions.add(
                    'Hotel_Name__c LIKE \'%' +
                    String.escapeSingleQuotes((String)hote.get('HotelName')) +
                    '%\''
                );
            }

            if (hote.containsKey('Price') && hote.get('Price') != null) {
                System.debug('inside hole 2');
                System.debug('hote.get("Price") =>'+hote.get('Price'));

                conditions.add('Price__c <= ' + (Decimal)hote.get('Price'));
            }
            System.debug('conditions =>'+conditions);
        }

        if (!conditions.isEmpty()) {
            query += ' WHERE ' + String.join(conditions, ' AND ');
            System.debug('query =>'+query);
        }
        System.debug('query 1 =>'+query);
        return Database.query(query);
    }


    // public class hote{
    //     @AuraEnabled
    //     public String HotelName{get;set;}
    //     @AuraEnabled
    //     public Decimal Price{get;set;}      
    // }
    //@AuraEnabled(cacheable=true)
    //public static list<Hotels__c> getallHotelsDataMethod(hote hote){
        // string query = 'SELECT Name, Hotel_Name__c, Phone_No__c, Price__c, Hotel_Image__c FROM Hotels__c ';
        // // String q = '';
        // system.debug('hote => '+hote);
        // system.debug('Hello');
        // if(hote != null){
           
        //         if(hote.Hotel_Name__c != null){
        //             query = query + ' where Hotel_Name__c like \'%'+hote.Hotel_Name__c+'%\'';
        //         }
        //         if(hote.Price__c != null && hote.Hotel_Name__c != null){
        //             query = query + ' and Price__c <= '+hote.Price__c+'';
        //         }
        //         else {
        //             query = query + ' where Price__c <= '+hote.Price__c+'';
        //         }
            
        // }
        
        // system.debug('query+q => '+query);
        // list<Hotels__c> hotels = Database.query(query);
        //return [SELECT Name, Hotel_Name__c, Phone_No__c, Price__c, Hotel_Image__c FROM Hotels__c];
    //}
}