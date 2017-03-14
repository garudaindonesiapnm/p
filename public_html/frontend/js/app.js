var App = angular.module('App', ['ngRoute' , 'ngAnimate' , 'angularMoment', 'ui.bootstrap', 'ui.router']);

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
        .state('prospek.statuspekerjaan', {
            url: '/prospek-status-pekerjaan',
            templateUrl: 'partials/prospek-status-pekerjaan.html'
        })
        .state('prospek.pendidikan', {
            url: '/prospek-pendidikan',
            templateUrl: 'partials/prospek-pendidikan.html'
        })
        ;
        
        $urlRouterProvider.otherwise('/');
});

App.controller('prospekCtrl', function($scope) {

    $scope.formData = {};

    $scope.processFormProspek = function() {
         
    };
    
});


