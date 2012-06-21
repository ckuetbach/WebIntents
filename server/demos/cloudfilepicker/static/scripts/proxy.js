// Copyright 2011 Google Inc. All Rights Reserved.

var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder;

function loadImage(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // convert array buffer to blob.
    var bb = new BlobBuilder();
    bb.append(xhr.response);
    // convert blob to a base64
    var fileReader = new FileReader();
    fileReader.onload = function(e) {
      var data = e.target.result;
      callback(data);
    };
    fileReader.readAsDataURL(bb.getBlob()); 
  };
  xhr.responseType = 'arraybuffer';
  xhr.open("GET", "proxy?url=" + encodeURIComponent(url));
  xhr.send();
}
