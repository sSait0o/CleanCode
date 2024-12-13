function buildUrl(url, options) {
  var queryString = [];
  var key;
  var builtUrl;

  /*if (url === null) {
   builtUrl = '';
 } else if (typeof(url) === 'object') {
   builtUrl = '';
   options = url;
 } else {
   builtUrl = url;
 }
   Un peu moins long et la charge mentale est meilleure*/
  if (typeof url === "string") {
    builtUrl = url;
  } else if (typeof url === "object" && url !== null) {
    options = url;
  }

  if (options) {
    if (options.path) {
      //builtUrl += "/" + options.path;
      builtUrl += `/${options.path}`;
    }

    if (options.queryParams) {
      for (key in options.queryParams) {
        if (options.queryParams.hasOwnProperty(key)) {
          queryString.push(key + "=" + options.queryParams[key]);
        }
      }
      //builtUrl += "?" + queryString.join("&");
      builtUrl += '#${queryString.join("&")}';
    }

    if (options.hash) {
      //  builtUrl += '#' + options.hash;
      builtUrl += `#${options.hash}`;
    }
  }

  return builtUrl;
}
