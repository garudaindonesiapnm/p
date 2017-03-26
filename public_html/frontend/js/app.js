var App = angular.module('App', ['ngAnimate' , 'angularMoment', 'ui.bootstrap', 'ui.router', 'wt.responsive']);

App.config( function($stateProvider, $urlRouterProvider, $httpProvider) {
        
    $stateProvider
    
        /* LOGIN */
        .state('login', {
            url: '/',
            templateUrl: 'partials/login.html'
        })
    
        /* HOME */
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        
        /* HOME */
        .state('home2', {
            url: '/home2',
            templateUrl: 'partials/home2.html'
        })
        
        /* PROSPEK */
        .state('prospek', {
            url: '/prospek',
            templateUrl: 'partials/prospek.html',
            controller: 'prospekCtrl'
        })
        .state('prospek.mandatory', {
            url: '/prospek-mandatory',
            templateUrl: 'partials/prospek-mandatory.html',
            controller: 'prospekCreate'
        })
        .state('prospek.kategori', {
            url: '/prospek-kategori',
            templateUrl: 'partials/prospek-kategori.html'
        })
        .state('prospek.informasipribadi', {
            url: '/prospek-informasi-pribadi',
            templateUrl: 'partials/prospek-informasi-pribadi.html'
        })
        .state('prospek.dokumenidentitas', {
            url: '/prospek-dokumen-identitas',
            templateUrl: 'partials/prospek-dokumen-identitas.html'
        })
        .state('prospek.kontak', {
            url: '/prospek-kontak',
            templateUrl: 'partials/prospek-kontak.html'
        })
        .state('prospek.alamat', {
            url: '/prospek-alamat',
            templateUrl: 'partials/prospek-alamat.html'
        })
        .state('prospek.alamat.ktp', {
            url: '/prospek-alamat-ktp',
            templateUrl: 'partials/prospek-alamat-ktp.html'
        })
        .state('prospek.alamat.domisili', {
            url: '/prospek-alamat-domisili',
            templateUrl: 'partials/prospek-alamat-domisili.html'
        })
        .state('prospek.alamat.tempatusaha', {
            url: '/prospek-alamat-tempat-usaha',
            templateUrl: 'partials/prospek-alamat-tempat-usaha.html'
        })
        .state('prospek.statuspekerjaan', {
            url: '/prospek-status-pekerjaan',
            templateUrl: 'partials/prospek-status-pekerjaan.html'
        })
        .state('prospek.pendidikan', {
            url: '/prospek-pendidikan',
            templateUrl: 'partials/prospek-pendidikan.html'
        })
        .state('prospek.submit', {
            url: '/prospek-submit',
            templateUrl: 'partials/prospek-submit.html'
        })
        
        /* PROSPEK CREATE */
        .state('prospekcreate', {
            url: '/prospek-create',
            templateUrl: 'partials/prospek-create.html',
            controller: 'prospekCreate'
        })
        
        /* PROSPEK LIST */
        .state('prospeklist', {
            url: '/prospek-list',
            templateUrl: 'partials/prospek-list.html',
            controller: 'prospekListCtrl'
        })
        
        /* PROSPEK PER ORANG*/
        .state('prospekperorang', {
            url: '/prospek-per-orang',
            templateUrl: 'partials/prospek-per-orang.html',
        })
        
        /* KELUARGA */
        .state('keluarga', {
            url: '/keluarga',
            templateUrl: 'partials/keluarga.html',
            controller: 'keluargaCtrl'
        })
        .state('keluarga.data', {
            url: '/keluarga-data',
            templateUrl: 'partials/keluarga-data.html'
        })
        .state('keluarga.hubungan', {
            url: '/keluarga-hubungan',
            templateUrl: 'partials/keluarga-hubungan.html'
        })
        .state('keluarga.hubunganlain', {
            url: '/keluarga-hubungan-lain',
            templateUrl: 'partials/keluarga-hubungan-lain.html'
        })
        
        /* APLIKASI */
        .state('aplikasi', {
            url: '/aplikasi',
            templateUrl: 'partials/aplikasi.html',
            controller: 'aplikasiCtrl'
        })
        .state('aplikasi.informasipembiayaan', {
            url: '/aplikasi-informasi-pembiayaan',
            templateUrl: 'partials/aplikasi-informasi-pembiayaan.html'
        })
        .state('aplikasi.datapembiayaan', {
            url: '/aplikasi-data-pembiayaan',
            templateUrl: 'partials/aplikasi-data-pembiayaan.html'
        })
        .state('aplikasi.informasiusaha', {
            url: '/aplikasi-informasi-usaha',
            templateUrl: 'partials/aplikasi-informasi-usaha.html'
        })
        
        /* AGUNAN */
        .state('agunan', {
            url: '/agunan',
            templateUrl: 'partials/agunan.html',
            controller: 'agunanCtrl'
        })
        
        /* DOKUMEN */
         .state('dokumen', {
            url: '/dokumen',
            templateUrl: 'partials/dokumen.html',
            controller: 'dokumenCtrl'
        })
        
        /* AOM */
        .state('aom', {
            url: '/aom',
            templateUrl: 'partials/aom.html',
            controller: 'aomCtrl'
        })
        
        ;
        
        $urlRouterProvider.otherwise('/');
        
        /* CACHE DISABLE */
        
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.cache = false;

});

App.factory("apiData", function ($http) {
    
    return {
        get : function(scope,api){

            $http({
                method : "GET",
                url : api,
                dataType: 'json'
            }).then(function mySucces(R) {
                
                scope.prospekList = R.data;
                
            }, function myError(R) {
                
                scope.prospekList = R.statusText;
                
            });
        }
    };
    
});

App.factory('globalFunction',function(){
    
    return {
        serializeObj : function(obj) {
            var result = [];

            for (var property in obj)
                result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

            return result.join("&");
        }
    };
    
});

App.controller('prospekCtrl', function($scope,$http,globalFunction) {

        $scope.formDataProspek = {};

        $scope.processFormProspek = function() {
            console.log($scope.formDataProspek);
            var api = "http://192.168.10.180/bwmp/index.php/api/bwmp/updateUser";

            $http({
                method: 'POST',
                url: api,
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                    //'Content-Type': 'application/json; charset=utf-8'
                    //'Content-Type':'application/json'
                },
                data: globalFunction.serializeObj($scope.formDataProspek)
            }).then(function(R){
                console.log(R);
            }, function myError(R){
                console.log(R);
            });
            
        };

        $scope.processFormProspekMandatory = function() {
             console.log($scope.formDataProspek);
        };

    })
        
    .controller('modalProspekListCtrl',function($scope,apiData){
        
        var api = 'http://192.168.10.180/bwmp/index.php/api/bwmp/allUser/format/json';
        apiData.get($scope,api);
       
    })
    .controller('prospekCreate',function($scope,apiData){
        
        var api = 'http://192.168.10.180/bwmp/index.php/api/bwmp/allUser/format/json';
        apiData.get($scope,api);
        
    });


App.controller('keluargaCtrl', function($scope) {

    $scope.formDataKeluarga = {};

    $scope.processFormKeluarga = function() {
         console.log($scope.formDataKeluarga);
    };
    
    $scope.processFormKeluargaMandatory = function() {
         console.log($scope.formDataKeluarga);
    };
    
});

App.controller('aplikasiCtrl', function($scope) {

    $scope.formDataAplikasi = {};

    $scope.processFormAplikasi = function() {
         console.log($scope.formDataAplikasi);
    };
    
    $scope.processFormAplikasiMandatory = function() {
         console.log($scope.formDataAplikasi);
    };
    
});

App.controller('agunanCtrl', function($scope) {

    $scope.formDataAgunan = {};

    $scope.processFormAgunan = function() {
         console.log($scope.formDataAgunan);
    };
    
    $scope.processFormAgunanMandatory = function() {
         console.log($scope.formDataAgunan);
    };
    
});

App.controller('dokumenCtrl', function($scope) {

    $scope.formDataDokumen = {};

    $scope.processFormDokumen = function() {
         console.log($scope.formDataDokumen);
    };
    
    $scope.processFormDokumenMandatory = function() {
         console.log($scope.formDataDokumen);
    };
    
});

App.controller('aomCtrl', function($scope) {

    $scope.formDataAom = {};

    $scope.processFormAom = function() {
         console.log($scope.formDataAom);
    };
    
    $scope.processFormAomMandatory = function() {
         console.log($scope.formDataAom);
    };
    
});

App.controller('prospekListCtrl', function($scope,$http){
    
    var api = 'http://192.168.10.180/bwmp/index.php/api/bwmp/allUser/format/json';

    $http({
        method : "GET",
        url : api,
        dataType: 'json'
    }).then(function mySucces(R) {
        $scope.prospekList = R.data;
        console.log($scope.prospekList); 
    }, function myError(R) {
        $scope.prospekList = R.statusText;
    });
    
});

/*  ========================================================
 *  GLOBAL MODAL 
 *  ======================================================== */

var GmObjectInfoInstance;

App.factory('sh', function($uibModal){
    function openModal(page,cls,ctrl){
        return $uibModal.open({
            animation: true,
            templateUrl: page,
            backdrop: 'static',
            keyboard: false,
            windowClass: cls,
            controller: ctrl
        });       
    }
    return {
        openModal: openModal
    };
});

App.controller('modalCtrl',function ($scope,sh) {
    this.showObjectInfo = function () {
        
        GmObjectInfoInstance = sh.openModal($scope.modalTemplate,$scope.modalClass,$scope.modalController);
        
        GmObjectInfoInstance.result.then(function () {
            console.log("blah");
        });
    };
    this.onCancelBtnClick = function(){
        GmObjectInfoInstance.close();
    };  
});






