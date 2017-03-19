var App = angular.module('App', ['ngAnimate' , 'angularMoment', 'ui.bootstrap', 'ui.router']);

App.config( function($stateProvider, $urlRouterProvider) {
        
    $stateProvider
    
        /* HOME */
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
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
});

App.controller('prospekCtrl', function($scope) {

    $scope.formDataProspek = {};

    $scope.processFormProspek = function() {
         console.log($scope.formDataProspek);
    };
    
    $scope.processFormProspekMandatory = function() {
         console.log($scope.formDataProspek);
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




