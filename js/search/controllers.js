'use strict';

angular.module('ttdApp.search.controllers', ['ui.bootstrap']).
  controller('SearchCtrl', function($scope,DistrictService,MandalService,VillageService,SearchAllService) {
      $scope.allCategories = '';
      $scope.selectedCat = '';
      $scope.ttd = {
          selectedDistrict: "", selectedDName: "",
          selectedMandal:"",selectedMName:"",
          selectedVillage:"",selectedVName:""
      };
      var selDistrict,selMandal,selVillage,selCat;
      DistrictService.query().$promise.then(
        function(response){
            //console.log(response.data);
            $scope.allDistrics = response.data;
        });
      $scope.$watch("ttd.selectedDistrict",
        function( newValue, oldValue ) {
            if(newValue === oldValue){
                return;
            }
            //console.log(newValue);
            selDistrict = newValue;
            MandalService.getAllMandals(newValue).query().$promise.then(
                function(response){
                    //console.log(response.data);
                    $scope.allMandals = response.data;
            });
        }
      );
      
      $scope.$watch("ttd.selectedMandal",
        function( newValue, oldValue ) {
            if(newValue === oldValue){
                return;
            }
            //console.log(newValue);
            selMandal = newValue;
            VillageService.getAllVillages(selDistrict,selMandal).query().$promise.then(
                function(response){
                    //console.log(response.data);
                    $scope.allVillages = response.data;
            });
        }
      );
      
      $scope.$watch("ttd.selectedVillage",
        function( newValue, oldValue ) {
            if(newValue === oldValue){
                return;
            }
            //console.log(newValue);
            selVillage = newValue;
        }
        );

        $scope.$watch("selectedCat",
        function( newValue, oldValue ) {
            if(newValue === oldValue){
                return;
            }
            //console.log(newValue);
            selCat = newValue;
            
        }
      );
      
      
      //pagination
                     
        $scope.filteredCats = [];
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        $scope.numPages = 0;
        $scope.itemsPerPage = 3;
        $scope.maxSize = 5;
        $scope.searchAll = function(){
        SearchAllService.getAllSearch(selDistrict,selMandal,selVillage,selCat).query().$promise.then(
                function(response){
                    //console.log(response.data);
                    $scope.allCategories = response.data;
                    $scope.totalItems = $scope.allCategories.length;
                    console.log(" size:  " + $scope.totalItems);
                     var begin = (($scope.currentPage - 1) * $scope.itemsPerPage)
                    , end = begin + $scope.itemsPerPage;
                    $scope.numPages = Math.ceil($scope.allCategories.length / $scope.itemsPerPage);
                    $scope.filteredCats = $scope.allCategories.slice(begin, end);
            });
      };
        

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
         // $scope.currentPage = Math.ceil($scope.allCategories.length / $scope.maxSize);
        };
        /*$scope.numPages = function () {
            return Math.ceil($scope.allCategories.length / $scope.itemsPerPage);
          };*/
        $scope.$watch('currentPage + itemsPerPage', function() {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage)
          , end = begin + $scope.itemsPerPage;

          $scope.filteredCats = $scope.allCategories.slice(begin, end);
        });
        
  
  
        
        
  });
  
 