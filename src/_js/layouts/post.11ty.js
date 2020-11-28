"use strict";
exports.data = {
    layout: 'base.11ty.js'
};
exports.render = function (_a) {
    var title = _a.title, page = _a.page, content = _a.content;
    return "\n<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>" + (title || 'Hello world') + "</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/layout.css\">\n  </head>\n  <body id=\"container\">\n    <main id=\"main\">\n    <article>\n    <h1>" + title + "</h1>\n    <a href=\"/blog\">Back</a>\n      <time>" + page.date + "</time>\n      " + content + "\n    </article>\n    </main>\n  </body>\n</html>\n";
};
