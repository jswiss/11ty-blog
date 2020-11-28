"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = __importDefault(require("../components/navigation"));
module.exports = function (_a) {
    var title = _a.title, content = _a.content;
    return "\n  <!doctype html>\n  <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>" + (title || 'Hello world') + "</title>\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/layout.css\">\n    </head>\n    <body id=\"container\">\n\n      <header>\n        " + navigation_1.default + "\n      </header>\n      <main id=\"main\">\n        " + content + "\n      </main>\n    </body>\n  </html>\n";
};
