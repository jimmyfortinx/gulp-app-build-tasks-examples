(function () {
    'use strict';

    describe('directive powerful-component', function () {
        var element;

        beforeEach(module('powerfulApp'));

        beforeEach(inject(function ($compile, $rootScope) {
            element = angular.element('<powerful-component></powerful-component>');

            $compile(element)($rootScope.$new());
            $rootScope.$digest();
        }));

        it('should be compiled', function () {
            expect(element.html()).not.toEqual(null);
        });

        it('should have an icon', function () {
            expect(element.find('span.glyphicon').length).toEqual(1);
        });
    });
})();
