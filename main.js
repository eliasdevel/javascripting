window.onload = function () {
        new Xhr().get('tsconfig.json').then(function(value) {
        console.log(value); // "Success"
      }, function(value) {
        // not called
      });
    new Xhr().getToElement('testee','tsconfig.json');

}