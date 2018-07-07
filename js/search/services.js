'use strict';

var ttdServices = angular.module('ttdApp.search.services', ['ngResource']);


ttdServices.factory('DistrictService',function($resource ){
         
    return $resource('http://localhost:8888/restSpring/villages/allDistricts',{},{
        query:{
          method:'GET',
          isArray: false, 
          params:{callback:'JSON_CALLBACK'}
        }
      });
  
});

ttdServices.factory('MandalService',function($resource ){
   return {
       getAllMandals: function(distId){     
        return $resource('http://localhost:8888/restSpring/villages/allMandals',{},{
            query:{
              method:'GET',
              isArray: false, 
              params:{callback:'JSON_CALLBACK',districtId:distId}
            }
          });
        }
    };
  
});

ttdServices.factory('VillageService',function($resource ){
   return {
       getAllVillages: function(distId,mandId){     
        return $resource('http://localhost:8888/restSpring/villages/allVillages',{},{
            query:{
              method:'GET',
              isArray: false, 
              params:{callback:'JSON_CALLBACK',districtId:distId,mandalId:mandId}
            }
          });
        }
    };
  
});

ttdServices.factory('SearchAllService',function($resource ){
   return {
       getAllSearch:function(distId,mandId,villId,selCat){     
        return $resource('http://localhost:8888/restSpring/villages/searchCategoryId',{},{
            query:{
              method:'GET',
              isArray: false, 
              params:{callback:'JSON_CALLBACK',distId:distId,mandalId:mandId,villageId:villId,category:selCat}
            }
          });
        }
    };
  
});


