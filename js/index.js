var started = 0;
angular.module('myApp', ['duScroll']).
  controller('MyCtrl', function($scope, $document){
    $document.on('scroll', function() {
      //console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
      // http://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
      if(started == 0) {
        var s3 = document.getElementById('section-3');
        var s3Rectangle = s3.getBoundingClientRect();
        if(s3Rectangle.top < 400) {
          progressJs("#progressField").setOptions({overlayMode: true, theme: 'customStyle'});
          progressJs("#progressField").start();
          progressJs("#progressField").set(110 / 5000 * 100);
          started = 1;
        }
      }
    });
    var container = angular.element(document.getElementById('container'));
    container.on('scroll', function() {
      //console.log('Container scrolled to ', container.scrollLeft(), container.scrollTop());
    });
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 1000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);
function body_resized() {
  started = 0;
  progressJs("#progressField").end();
}

