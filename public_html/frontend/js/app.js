var App = angular.module('App', ['ngAnimate', 'ngMaterial' , 'angularMoment', 'ui.bootstrap', 'ui.router', 'wt.responsive']);

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
        
        /* PROSPEK HOME (HOME2) */
        .state('prospekhome', {
            url: '/prospek-home',
            templateUrl: 'partials/home2.html'
        })
        
        /* PROSPEK UPDATE */
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
        
        /* PROSPEK CREATE WIZARD */
        .state('prospekcreate', {
            url: '/prospek-create',
            templateUrl: 'partials/prospek-create.html',
            controller: 'prospekCreate'
        })
        
        .state('prospekcreate.1', {
            url: '/1',
            templateUrl: 'partials/prospek-create-1.html',
        })
        
        .state('prospekcreate.2', {
            url: '/2',
            templateUrl: 'partials/prospek-create-2.html',
        })
        
        .state('prospekcreate.3', {
            url: '/3',
            templateUrl: 'partials/prospek-create-3.html',
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
        
        /* PROSPEK KATEGORI */
        .state('kategoriprospek', {
            url: '/kategori',
            templateUrl: 'partials/kategori.html',
            controller: 'kategoriCtrl'
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
        
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

});

App.factory("apiData", function ($http, globalFunction) {
    
    return {
        get : function(scope,api){

            $http({
                method : "GET",
                url : api,
                dataType: 'json',
                headers: {
                    //'Content-Type':'application/x-www-form-urlencoded'
                    //'Content-Type': 'application/json; charset=utf-8'
                    'Content-Type':'application/json'
                },
            }).then(function mySucces(R) {
                
                scope.prospekList = R.data;
                
            }, function myError(R) {
                
                scope.prospekList = R.statusText;
                
            });
        },
        
        post : function(scope,api,data) {
            
            $http({
                method: 'POST',
                url: api,
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                    //'Content-Type': 'application/json; charset=utf-8'
                    //'Content-Type':'application/json'
                },
                data: globalFunction.serializeObj(data)
                //data: angular.toJson($scope.formDataProspek)
            }).then(function(R){
                console.log(R);
            }, function myError(R){
                console.log(R.statusText);
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

App.controller('prospekCreate',function($scope,apiData){
        
    //var api = 'http://192.168.10.180/bwmp/index.php/api/bwmp/getUser/format/json';
    //apiData.get($scope,api);
    
    $scope.calonDebiturs = [];
    
    $scope.formDataProspekCreate = {};
    
    $scope.processFormProspekCreate = function() {
        
        //console.log($scope.formDataProspekCreate);
        if ($scope.formValid()) {
            
            $scope.calonDebiturs.push(angular.copy($scope.formDataProspekCreate));
        
            console.log($scope.calonDebiturs);

            $scope.prospekCreateForm.$setPristine();
            
        }
        
        //var api = "http://localhost:81/prospek_pnm/public_html/backend/index.php/welcome/post";

        //apiData.post($scope,api,{nomor_sk:"sk007"});

    };
    
    $scope.formValidStatus = false;
    
    $scope.formValid = function(){
        
        /*
        if ($scope.formDataProspekCreate.nama_lengkap) {
            $scope.formValidMsg.push('Nama lengkap tidak boleh kosong');
        }*/
        
        $scope.formValidMsg = [];
        console.log($scope.formDataProspekCreate.nama_panggilan);
        
        if (!$scope.formDataProspekCreate.nama_panggilan) {
            $scope.formValidMsg.push('Nama panggilan tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.jenis_identitas) {
            $scope.formValidMsg.push('Jenis identitas tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.masa_berlaku_identitas_seumur_hidup) {
            $scope.formValidMsg.push('Masa berlaku identitas tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.nomor_identitas) {
            $scope.formValidMsg.push('Nomor identitas tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.tempat_lahir) {
            $scope.formValidMsg.push('Tempat lahir tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.tanggal_lahir) {
            $scope.formValidMsg.push('Tanggal lahir tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.alamat) {
            $scope.formValidMsg.push('Alamat tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.nomor_handphone) {
            $scope.formValidMsg.push('Nomor handphone tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.nama_ibu_kandung) {
            $scope.formValidMsg.push('Nama ibu kandung tidak boleh kosong');
        }
        if (!$scope.formDataProspekCreate.jenis_usaha) {
            $scope.formValidMsg.push('Jenis usaha tidak boleh kosong');
        }
        
        console.log($scope.formValidMsg);
        
        if ($scope.formValidMsg.length > 0) {
            $scope.formValidStatus = true;
            return false;
        } else {
            return true;
        }
        
    };
    
    $scope.closeAlert = function(index) {
        $scope.formValidMsg.splice(index, 1);
    };
    
    $scope.maxSize = 4;
    $scope.totalItems = 64;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
      
    };

    $scope.pageChanged = function(cp) {
        //$log.log('Page changed to: ' + $scope.currentPage);
        console.log(cp);
    };
  
});

App.controller('prospekCtrl', function($scope,apiData) {

        $scope.formDataProspek = {};

        $scope.processFormProspek = function() {
            console.log($scope.formDataProspek);
            //var api = "http://192.168.10.180/bwmp/index.php/api/bwmp/updateUser";
            var api = "http://localhost:81/prospek_pnm/public_html/backend/index.php/welcome/post";

            apiData.post($scope,api,{nomor_sk:"sk007"});
            
        };

        $scope.processFormProspekMandatory = function() {
             console.log($scope.formDataProspek);
        };

    })
        
    .controller('modalProspekListCtrl',function($scope,apiData){
        
        var api = 'http://localhost:81/prospek_pnm/public_html/backend/';
        apiData.get($scope,api);
       
    });

App.controller('kategoriCtrl', function($scope){
    
    $scope.formDataKategori = {};

    $scope.processFormKategori = function() {
         console.log($scope.formDataKategori);
    };
    
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






