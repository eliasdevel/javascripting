class Xhr extends XMLHttpRequest {
    getToElement(elementId, url) {
       this.get(url).then(function (data) {
           document.getElementById(elementId).innerHTML = data;
       })
    }
    async  get(url) {
        var xhr = new XMLHttpRequest();
        return new Promise(function(resolve, reject) {
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 300) {
                        reject("Error, status code = " + xhr.status)
                    } else {
                        resolve(xhr.responseText);
                    }
                }
            }
            xhr.open('get', url, true)
            xhr.send();
        });
    }


}
