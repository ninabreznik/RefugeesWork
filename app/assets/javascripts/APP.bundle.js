(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
APP = require('LeadShareAppFrontend');

},{"LeadShareAppFrontend":4}],2:[function(require,module,exports){
module.exports = function CONTRACT_VALIDATE (params) {
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  CONTRACT
    - EVENTS      => .... DATA SEND/EMIT (Ajax/Websockets)
    - API METHODS => .... DATA RECEIVE (Websockets)
    - INIT        => .... DATA RECEIVE (page load)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
var CONTRACT = {
  campaign          : {
    budget            : function ducktype (value) { return typeof value === 'number'; },
    business_category : function ducktype (value) { return typeof value === 'string'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    description       : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    keywords          : function ducktype (value) { return typeof value === 'string'; },
    location          : function ducktype (value) { return typeof value === 'string'; },
    title             : function ducktype (value) { return typeof value === 'string'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; },
    user_id           : function ducktype (value) { return typeof value === 'string'; }
  },
  lead              : {
    budget            : function ducktype (value) { return typeof value === 'string'; },
    business_category : function ducktype (value) { return typeof value === 'string'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    description       : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    keywords          : function ducktype (value) { return typeof value === 'string'; },
    location          : function ducktype (value) { return typeof value === 'string'; },
    title             : function ducktype (value) { return typeof value === 'string'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; },
    user_id           : function ducktype (value) { return typeof value === 'string'; }
  },
  user              : {
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    email             : function ducktype (value) { return typeof value === 'number'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; }
  },
  relationship      : {
    coowned_id        : function ducktype (value) { return typeof value === 'number'; },
    coowner_id        : function ducktype (value) { return typeof value === 'number'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; }
  }
};
////////////////////////////////////////////////////////////////////////////////////////////
var EXAMPLE = {
  id          : 1,
  vorname     : 'Nina',
  nachname    : 'Breznik',
  name        : 'Nina Breznik',
  geburtstag  : '02.05.1981',
  alter       : 33,
  geschlecht  : 'weiblich',
  foto        : 'http://beta2.finance.si/pics/cache_F5/F58EU_breznik_nina_ih.1219075724.jpg',
  status      : 'beziehung',
  email       : 'ninabreznik@gmail.com',
  telefon     : '0171 2883732',
  wohnort     : 'Berlin',
  strasse     : 'Jablonskistrasse 24',
  herkunft    : 'Slovenien',
  hobbies     : [ 'tanzen', 'klettern', 'gitarre', 'kochen', 'joggen', 'yoga' ],
  familie     : {
    vater       : 'unbekannt',
    mutter      : 'unbekannt',
    bruder      : 'Rok'
  },
  website     : 'http://www.ninabreznik.com'
};

var ITEM = { 'name': 'value' };

var CONTRACT = { // DATA CONTRACT
  campaign          : {
    budget            : function ducktype (value) { return typeof value === 'number'; }, // ITEM CONTRACT
    business_category : function ducktype (value) { return typeof value === 'string'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    description       : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    keywords          : function ducktype (value) { return typeof value === 'string'; },
    location          : function ducktype (value) { return typeof value === 'string'; },
    title             : function ducktype (value) { return typeof value === 'string'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; },
    user_id           : function ducktype (value) { return typeof value === 'string'; }
  },
  lead              : {
    budget            : function ducktype (value) { return typeof value === 'string'; },
    business_category : function ducktype (value) { return typeof value === 'string'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    description       : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    keywords          : function ducktype (value) { return typeof value === 'string'; },
    location          : function ducktype (value) { return typeof value === 'string'; },
    title             : function ducktype (value) { return typeof value === 'string'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; },
    user_id           : function ducktype (value) { return typeof value === 'string'; }
  },
  user              : {
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    email             : function ducktype (value) { return typeof value === 'number'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; }
  },
  relationship      : {
    coowned_id        : function ducktype (value) { return typeof value === 'number'; },
    coowner_id        : function ducktype (value) { return typeof value === 'number'; },
    created_at        : function ducktype (value) { return typeof value === 'string'; },
    id                : function ducktype (value) { return typeof value === 'number'; },
    updated_at        : function ducktype (value) { return typeof value === 'string'; }
  }
};


var itemContract = { // item contracts should be testable for completeness
  server2client : function server2client () {},
  validate      : function ducktype () {},
  transform     : function transform (data) {},
  map           : function map (data) {},
  unmap         : function unmap (data) {},
  untransform   : function untransform (data) {},
  client2server : function client2server () {},
  emptySample   : '',
  sample        : '',
  generateSample: function generateSample () {},
  statictype    : function typeOf () {},
  rights        : { // rights should be testable (Object.defineProperty...)
    create        : '',
    read          : '',
    update        : '',
    destroy       : ''
  },
  name          : ''
};


// var CONTRACT =  {
//   SERVER2CLIENT : function server2client () {},
//   CLIENT2SERVER : function client2server () {},
//   VALIDATE      : function VALIDATE (params) {
//     debugger;
//     // !IMPORTANT!
//     // This function has to work in all javascript environments!
//     // throw new Error('more information about wrongness of data');
//
//     var params = {
//       "data":[
//         {"title":"Dummy1","description":"This is dummy 1","counter":1},
//         {"title":"Dummy2","description":"This is dummy 2","counter":2}
//       ],
//       "collection":{
//         "title":["Dummy1","Dummy2"],
//         "description":["This is dummy 1","This is dummy 2"],
//         "counter":[1,2]
//       },
//       "schema":{
//         "title":"string",
//         "description":"string",
//         "counter":"integer"},
//         "user":{"id":null,"name":null,"email":null,"secret":"SCw0dkIDJfq9GM0E+2GZ3BJZdfGWKoBxvuY36gfgP/I="
//       },
//       "containerID":"CONTENT"
//     };
//
//     return true;
//   }
// };


// var
//   USER        = params.USERAUTH,
//   CONTAINER   = params.CONTAINER,
//   DATA        = params.SET.DATA,
//   COLLECTION  = params.SET.COLLECTION,
//   SCHEMA      = params.SET.SCHEMA,
//   MISC        = params.MISC
// ;




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// => type of schema item defines "PLATES.JS" template


// or selector will tell you "which TEMPLATE to use"
function selector () {// @TODO: Maybe generate SELECTOR QUERIES - for PLATES.js
 return '.Block__element';
}
// e.g. phone : function selector (x) { return '.Complexform__communication__phone__input'; },

// e.g.
// vita_steps_attributes     : function selector (x) {
//   return {
//     TEMPLATE    : '.Complexform__journal__entry',
//     description : '.Complexform__journal__entry__content',
//     created_at  : '.Complexform__journal__entry__date',
//     user_id     : '.Complexform__journal__entry__user' // @TODO: window.DATACOLLECTION.user_id[user_id].title
//   }
// }

// e.g. deleted                   : function selector (x) { return 'NONE'; } // should not be present


function transform    (value) { return ''+value;          }

function untransform  (value) { return new Number(value); }
// firstname : (function unTransform () { return COMPONENT.querySelector('.Complexform__person__prename__input').innerHTML; })(),

// internal_contact_person_ids : (function unTransform () { return internal_contact_personsData; })(),
// mass_email_receiver         : (function unTransform () { return $('input:radio[name=settings_mass_email]:checked').val(); })(),



// vita_steps_attributes     : (function unTransform () {
//   var concept = schemaMapping['vita_steps_attributes']();
//   var results = [];
//   var html = COMPONENT.querySelectorAll('.Complexform__journal__entry:not([data-template="Complexform__journal__entry"])');
//   for(var i = 0; i<html.length; i++) {
//     var temp = {};
//     for(subkey in concept) {
//       if (subkey !== 'TEMPLATE' && subkey !== 'created_at') {
//         temp[subkey] = escape(html[i].querySelector(concept[subkey]).innerHTML); // ESCAPE USER HTML CONTENT
//       }
//     }
//     results.push(temp);
//   }
//   return results;
// })()
var emptySample = 'FAILFAILFAIL';
//   phone_company : { standard: 'FAILFAILFAIL' },
//   // @TODO: Maybe generate SELECTOR QUERIES - for PLATES.js
//   vita_steps                : { standard: 'FAILFAILFAIL' },
               // var schemaMapping = { // @TODO: use schema instead of hardcode!!! => type of schema item defines "PLATES.JS" template
              //   // CURRENTLY "MANUALLY" SYNCHRONIZED WITH "RainbowUnicorn.js" SCHEMA - Should later get it's SCHEMA in COMPONENT-CONSTRUCTOR
              //   id                        : { standard: 'FAILFAILFAIL' },

  // if (false) {
  if (true) {
    return true;
  } else {
    throw new Error('Data is invalid');
  }
};





  ///////////////////////////////////////////////////////////////
  // @TODO: The "Generator" is not in USE, but could be used, to use "sample" data in schema,
  // to generate data as long as there is no backend providing valid data
  ///////////////////////////////////////////////////////////////

  // var GENERATOR = {};
  // GENERATOR.sampleData = {
  //   "id"                        : 1,
  //   "user_id"                   : null,
  //   // "created_at"                : "2014-07-16T17:05:08+02:00",
  //   // "updated_at"                : "2014-07-16T17:05:08+02:00",

  //   // "login"                     : "NOT_IN_USE",

  //   "gender"                    : "DUMMY_p_gender",
  //   "title"                     : "DUMMY_p_title",
  //   "firstname"                 : "DUMMY_p_prename",
  //   "lastname"                  : "DUMMY_p_surname",
  //   "businessrelations"         : [{"id":1, "title":"asd1"}, {"id":2, "title":"asd2"}, {"id":3, "title":"asd3"}],
  //   //"businessrelations"         : ["relation1", "relation2", "relation3", "relation4", "relation5"],

  //   "business_unit"             : "DUMMY_p_departement",
  //   "position"                  : "DUMMY_p_position",
  //   "user_id_person"            : "DUMMY_person_id",
  //   "internal_contact_persons"  : ["DUMMY_person_id_1", "DUMMY_person_id_2", "DUMMY_person_id_3", "DUMMY_person_id_4", "DUMMY_person_id_5"],
  //   "topics"                    : ["topic1", "topic2", "topic3", "topic4", "topic5"],

  //   "phone"                     : "DUMMY_com_phone",
  //   "mobile"                    : "DUMMY_com_mobile",
  //   "email"                     : "DUMMY_com_email",
  //   "phone_company"             : "DUMMY_com_phone_company",
  //   "fax"                       : "DUMMY_com_fax",
  //   "email_company"             : "DUMMY_com_email_company",

  //   "company_id"                : null,
  //   "company_name"              : "DUMMY_bus_company_name1",
  //   "company_name_addition"     : "DUMMY_bus_company_name2",
  //   "street"                    : "DUMMY_bus_street1",
  //   "street_addition"           : "DUMMY_bus_street2",
  //   "zip"                       : "DUMMY_bus_zip",
  //   "post_box"                  : "DUMMY_bus_postbox",
  //   "city"                      : "DUMMY_bus_city",
  //   "post_box_zip"              : "DUMMY_bus_zip_postbox",
  //   "country_name"              : "DUMMY_bus_country",
  //   "region"                    : "DUMMY_bus_region",


  //   "event_invitation_receiver" : true,
  //   "email_receiver"            : true,
  //   "mass_email_receiver"       : true,
  //   "attaining_public_office"   : true,
  //   "phone_receiver"            : true,
  //   "fax_receiver"              : true,
  //   "letter_receiver"           : true,


  //   "history_text"              : ["lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
  //   "history_time"              : ["2014-07-17T17:05:08+02:00"],
  //   "history_author"            : ["DUMMY_person_id"]
  // };
  // GENERATOR.dummyData = (function generateDummyDataFrom (DEPs) {
  //   DEPs.typeOf = DEPs.typeOf.F; // Choose between typeOf A - F methods
  //   return function createSampleData (quantity, format, sampleData) {
  //     function validateData(data, format) { return data; }
  //     sampleData = sampleData ? (function convertSampleData() {
  //       if (format === 'complex') {
  //         // validate that given sampleData complies to 'simple' format
  //         // otherwise transform to 'complex' format or throw error
  //         return validateData(sampleData, 'complex');
  //       } else if (format === 'simple') {
  //         // validate that given sampleData complies to 'simple' format
  //         // otherwise transform to 'simple' format or throw error
  //         // otherwise
  //         return validateData(sampleData, 'simple');
  //       } else {
  //         throw new Error('Please specify format: "complex" or "simple"');
  //       }
  //     })() : GENERATOR.sampleData;
  //     var generatedData = [];
  //     var temp;
  //     for (var counter=0; counter<quantity; counter++) {
  //       temp = {};
  //       for (var property in sampleData) {
  //         if (sampleData.hasOwnProperty(property)) {
  //           temp[property] = DEPs.createSampleAttribute(sampleData[property], counter);
  //         }
  //       }
  //       generatedData.push(temp);
  //     }
  //     return generatedData;
  //   };
  // })(
  //   (function DEPENDENCIES (DEPs) {
  //     var DEPs = {
  //       typeOf : {
  //         A: (function (global) {
  //           var cache = {};
  //           return function (obj) {
  //             var key;
  //             return obj === null ? 'null' // null
  //               : obj === global ? 'global' // window in browser or global in nodejs
  //               : (key = typeof obj) !== 'object' ? key // basic: string, boolean, number, undefined, function
  //               : obj.nodeType ? 'object' // DOM element
  //               : cache[key = ({}).toString.call(obj)] // cached. date, regexp, error, object, array, math
  //               || (cache[key] = key.slice(8, -1).toLowerCase()); // get XXXX from [object XXXX], and cache it
  //           };
  //         }(this)),
  //         B: function (obj) {
  //           var funcNameRegex = /function (.{1,})\(/;
  //           var results = (funcNameRegex).exec((obj).constructor.toString());
  //           return (results && results.length > 1) ? results[1] : "";
  //         },
  //         C: function ( thing ) {
  //           var typeOfThing = typeof thing;
  //           if ( typeOfThing === 'object' ) {
  //             typeOfThing = Object.prototype.toString.call(thing);
  //             if ( typeOfThing === '[object Object]') {
  //               if ( thing.constructor.name ) {
  //                 return thing.constructor.name;
  //               } else if ( thing.constructor.toString().charAt(0) === '[' ) {
  //                 typeOfThing = typeOfThing.substring(8,typeOfThing.length - 1);
  //               } else {
  //                 typeOfThing = thing.constructor.toString().match(/function\s*(\w+)/);
  //                 if ( typeOfThing ) {
  //                   return typeOfThing[1];
  //                 } else {
  //                   return 'Function';
  //                 }
  //               }
  //             } else {
  //               typeOfThing = typeOfThing.substring(8,typeOfThing.length - 1);
  //             }
  //           }
  //           return typeOfThing.charAt(0).toUpperCase() + typeOfThing.slice(1);
  //         },
  //         D: function (obj) {
  //           var str = (obj.prototype ? obj.prototype.constructor : obj.constructor).toString();
  //           var cname = str.match(/function\s(\w*)/)[1];
  //           var aliases = ["", "anonymous", "Anonymous"];
  //           return aliases.indexOf(cname) > -1 ? "Function" : cname;
  //         },
  //         E: function (obj) {
  //           return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];
  //         },
  //         F: function (item) { // https://github.com/mikemaccana/agave
  //           var getPrototype = function(item) {
  //             return Object.prototype.toString.call(item).slice(8, -1);
  //           };
  //           var kind, Undefined;
  //           if (item === null ) {
  //             kind = 'null';
  //           } else {
  //             if ( item === Undefined ) {
  //               kind = 'undefined';
  //             } else {
  //               var prototype = getPrototype(item);
  //               if ( ( prototype === 'Number' ) && isNaN(item) ) {
  //                 kind = 'NaN';
  //               } else {
  //                 kind = prototype;
  //               }
  //             }
  //           }
  //           return kind;
  //         },
  //         G: function (obj) {
  //           return  Object.prototype.toString.call(obj).replace(/([\[\]]|object|\s)/gi, "");
  //         }
  //       }, // more at: http://tobyho.com/2011/01/28/checking-types-in-javascript/
  //       createSampleAttribute : function (exampleAttribute, currentCounter) {
  //         switch (DEPs.typeOf(exampleAttribute)) {
  //           case 'String':
  //             return exampleAttribute + currentCounter;
  //           case 'Number':
  //             return exampleAttribute + currentCounter;
  //           case 'null':
  //             return null;
  //           case 'Boolean':
  //             return !exampleAttribute;
  //           case 'Array':
  //             return (function newArray(oldArray, newArray) {
  //               switch (DEPs.typeOf(oldArray[0])) {
  //                 case 'String':
  //                   for(item in oldArray) {
  //                     newArray.push(DEPs.createSampleAttribute(oldArray[item], currentCounter));
  //                   }
  //                   return newArray;
  //                 case 'Object':
  //                   var htmlCode = '<select class="klasseXXX">';
  //                   for(item in oldArray) {
  //                     htmlCode += '<option value="' + oldArray[item].id + '">' + oldArray[item].title + '</option>';
  //                   }
  //                   htmlCode += '</select>';
  //                   return htmlCode;
  //                 default:
  //                   console.log(DEPs.typeOf(oldArray[0]));
  //                   throw new Error("Could not detect TYPE of oldArray[0]!");
  //                   return;
  //               }
  //             })(exampleAttribute, []);
  //           default:
  //             console.log(DEPs.typeOf(exampleAttribute));
  //             throw new Error("Could not detect TYPE of exampleAttribute!");
  //             return;
  //         }
  //       }
  //     };
  //     return DEPs;
  //   })({})
  // );
},{}],3:[function(require,module,exports){
module.exports = '<div class="Campaign">\n  <article class="article">\n    <figure>\n      <img src="https://www.redbullcontentpool.com/resources/2013/07/09/00001-01000/P-20130709-00550/image_proxy_large.jpg" />\n    </figure>\n    <span class="article-heading">\n      <span data-bind="title"></span> - <span data-bind="location"></span>\n    </span>\n    <span class="article-snippet">\n      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet...\n    </span>\n    <nav role=\'navigation\'>\n      <ul>\n        <li class="one"><a href="#"></a></li>\n        <li class="two"><a href="#"></a></li>\n        <li class="three"><a href="#"></a></li>\n      </ul>\n    </nav>\n    <a class="article-url" href="#" title="Continue Reading">Continue Reading</a>\n    <ul class="article-social">\n      <li>\n        <a href="#"><i class="icon-facebook"></i></a>\n        <a href="#"><i class="icon-twitter"></i></a>\n        <a href="#"><i class="icon-google-plus"></i></a>\n      </li>\n    </ul>\n  </article>\n</div>\n';
},{}],4:[function(require,module,exports){
!function MODULE_LSAfrontend (ENV) {
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    DEPENDENCIES
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  var DEPs = {
    holon : require('holon')
  };




  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    DATA CONTRACT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  var CONTRACT = {
    VALIDATE      : function VALIDATE (params) {
      require('./CONTRACT.js')(params);
      return true;
    }
  };





  ///////////////////////////////////////////////////////////////////
  // <script src='/assets/jquery.dynatable.js'></script> <!-- browserify and factor out into DynaWrapper -->
  ///////////////////////////////////////////////////////////////////
  // LeadShareAppFrontend will become multiple WIDGETS
  // @TODO: Import STYLUS File from LeadShareAppFrontend and output it somewhere else,
  // thus: have multiple outfut files with browserify
  // "browserify-shim": {
  //   "jquery": {
  //     "path": "node_modules/jquery/dist/jquery.js",
  //     "exports": "$",
  //     "depends": null
  //   },
  //   "jquery.dynatable": {
  //     "path": "node_modules/Dynatable/jquery.dynatable.js",
  //     "exports": null,
  //     "depends": {
  //       "jquery": "$"
  //     }
  //   }
  // },
  // "browserify": {
  //   "transform": [ "html2js-browserify", "browserify-shim"]
  // },
  ///////////////////////////////////////////////////////////////////




  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULE EXPORT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  module.exports = { // EXPORT as GLOBAL
    VERSION     : require('../package.json').version,
    NAME        : 'LeadShareAppFrontend',
    VALIDATE    : CONTRACT.VALIDATE,
    CONFIGURE   : CONFIGURE
  };




  // // CONFIGURE COMPLEXFORM
  // COMPONENT.API = {
  //   // INPUT INTERFACE
  //   INTERFACE: {
  //     'USER_SET'  : function (DATA) { // @TODO: test this methods intensively
  //       TEMP_ID   = DATA.id;
  //       reFillform(DATA);
  //     },
  //     'USER_ADD'  : function (DATA) { // @TODO: test this methods intensively
  //       TEMP_ID   = DATA.id;
  //       reFillform(DATA);
  //     }
  //   },
  //   // OUTPUT INTERFACE
  //   EVENTS  : { 
  //     'CANCEL'  : 'DESCRIPTION: user did not provide any input and aborted',
  //     'SAVE'    : 'DESCRIPTION: user provided data which should be made persistent',
  //     'PREV'    : 'DESCRIPTION: load previous data item from table into complexform',
  //     'NEXT'    : 'DESCRIPTION: load next data item from table into complexform'
  //   }
  // };

  // // SOFTWARE DEVELOPER KIT
  // var SDK = {
  //   EVENTS: {
  //     'CANCEL'    : function () {
  //       return new CustomEvent('CANCEL', { detail: {
  //         description: COMPONENT.API.EVENTS['CANCEL']
  //       }}); // @TODO: test - new event gets copy of message
  //     },
  //     'SAVE'      : function (DATA) {
  //       return new CustomEvent('SAVE', { detail: {
  //         description: COMPONENT.API.EVENTS['SAVE'],
  //         data: DATA
  //       }}); // @TODO: test - new event gets copy of message
  //     },
  //     'NEXT'      : function (CURRENT_ID) {
  //       return new CustomEvent('NEXT', { detail: {
  //         description: COMPONENT.API.EVENTS['NEXT'],
  //         data: CURRENT_ID
  //       }}); // @TODO: test - new event gets copy of message
  //     },
  //     'PREV'      : function (CURRENT_ID) {
  //       return new CustomEvent('PREV', { detail: {
  //         description: COMPONENT.API.EVENTS['PREV'],
  //         data: CURRENT_ID
  //       }}); // @TODO: test - new event gets copy of message
  //     }
  //   }
  // }

  // // DISPATCH EVENTS - @TODO: BEM interActions could include EventNames
  // var cancelButton  = COMPONENT.querySelector('.Complexform__menu__cancel');
  // // var cancelButton  = COMPONENT.querySelector('.Complexform__button:CANCEL');
  // cancelButton.addEventListener('click', function onClick (event) {
  //   COMPONENT.dispatchEvent(SDK.EVENTS['CANCEL']());
  // });

  // var nextButton  = COMPONENT.querySelector('.Complexform__menu__next');
  // // var cancelButton  = COMPONENT.querySelector('.Complexform__button:CANCEL');
  // nextButton.addEventListener('click', function onClick (event) {
  //   COMPONENT.dispatchEvent(SDK.EVENTS['NEXT'](TEMP_ID));
  // });

  // var prevButton  = COMPONENT.querySelector('.Complexform__menu__previous');
  // // var cancelButton  = COMPONENT.querySelector('.Complexform__button:CANCEL');
  // prevButton.addEventListener('click', function onClick (event) {
  //   COMPONENT.dispatchEvent(SDK.EVENTS['PREV'](TEMP_ID));
  // });

  // return COMPONENT.API;




  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    CONFIGURE COMPONENT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  function CONFIGURE (params) {
    if (!params) {
      debugger;
      // @TODO: The component is already initialized on the server
      //        CONFIGURE should do nothing and START() should be executed
    }
    // return PRODUCTION_MODE();
    ENV.params = params;
    return { START: DEVELOP_MODE };
  }




  function DEVELOP_MODE () {
    var TEST_CONTAINER = document.querySelector('#DEVELOP_MODE');
    TEST_CONTAINER.style.display = 'block';
    // alert("Currently in DEV MODE:\n Change 'line 20 & 21' in RainbowUnicorn.js to switch to PRODUCTION MODE");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PLATES BASE API #

    //   # BASE API
    //     # bind(html:HTMLstring|String|Filename, data:JSON|String, map)
    //       # => result of <html> merged with <data>
    //       # => inserts all values of data[key] into tag with an attribute value of key
    //         # html - string of well-formel HTML
    //         # data - JSON
    //         # map  - data mapping for the partial (instance of Plates.Map())

    //     # where(attribute:String)
    //       # => TAG <attribute> to match on (omit: defaults to "id")
    //     # has(value:String|RegExp)
    //       # => TAG attribute contains <value> to match on
    //     # as(attribute:String)
    //       # => TAG <attribute> to replace into
    //     # use(key:String|Function)
    //       # => JSON <key> whichs value the TAGs innerHTML is set to
    //       #    (typeof key ==='function') ? key(data, value, tagbody)
    //     # insert(key:String)
    //       # => JSON <key> whichs value the TAG attribute is set to

    //     # remove()
    //       # => Matched TAG is removed from template
    //     # partial(html:HTMLstring|String|Filename, data:JSON|String, map)
    //       # => ???
    //         # html - new template to be added | id of DOM node whichs innerHTML is the template
    //         #         | in nodejs a relative path to file containing the template
    //         # data - JSON | key for JSON of main template
    //         # map  - data mapping for the partial (instance of Plates.Map())

    //   # SYNTACTIC SUGAR
    //     # is(attribute:String)
    //       # === has(/^attribute$/)
    //     # class(classname:String),
    //     # className(classname:String)
    //       # === where('class').is(classname)
    //       # === where('class').has(/^classname$/)
    //     # to(key:String)
    //       # === use(key)
    //     # append(html:HTMLstring|String|Filename, data:JSON|String, map)
    //       # === partial(html, data, map)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var Plates    = DEPs.holon().Plates;
    var holonize  = DEPs.holon().holonize;
    var contract  = CONTRACT.VALIDATE;


    buildLeadShareAppFrontend();
    learnPlates();
    ///////////////////////////////////////////////////////////////////////////////
    function buildLeadShareAppFrontend () {
      var templateIndex     = require('./index.template.html');
      var templateCampaign  = require('./campaign.template.html');
      var mappingCampaigns  = Plates.Map();
      var mappingIndex      = Plates.Map();
      // // Plates can also iterate through collections:

      mappingCampaigns.where('data-bind').is('title').use('title');
      mappingCampaigns.where('data-bind').is('location').use('location');
      mappingIndex.className('campaigns').partial(templateCampaign, ENV.params.campaigns, mappingCampaigns);

      var MAIN = Plates.bind(templateIndex, {}, mappingIndex);
      TEST_CONTAINER.innerHTML = MAIN;
    }

    function learnPlates () {
      // window.onload = function () {
      // var template_main = '  <div id="example2">\
      //   <div><h1 class="foo"></h1><ul class="menu"></ul></div>\
      // </div>'
      // var template_sub  =   '<div id="example1">\
      //   <li class="partial">test</li>\
      // </div>'
      //   var data          = { foo: 'bar' };
      //   var map           = Plates.Map();
      //   map.class('menu').partial(template_sub);
      //   map.class('foo').partial(data.foo);
      //   var result = Plates.bind(template_main, data, map)
      //   document.querySelector('#content').innerHTML = result;
      // }

      // RESULT - TEST
      var template_SUB1 = require('./templates/SUB1.template.html');
      var template_SUB2 = require('./templates/SUB2.template.html');
      var template_SUB3 = require('./templates/SUB3.template.html');
      var template_SUB4 = require('./templates/SUB4.template.html');
      var template_SUB5 = require('./templates/SUB5.template.html');
      var template_MAIN = require('./templates/MAIN.template.html');

      /////////////////////////////////////////////////////////////////////////////
      var data_SUB5       = { name2: ['Louis CK', 'Andy Kindler', 'Greg Giraldo', 'asdf'] };
      var data_SUB4       = { test: 'In addition, it contains content'};
      var data_MAIN       = {
        user:       "Charly",
        imageurl:   "http://shaunynews.files.wordpress.com/2014/04/funny-popular-funny-pictures-with-captions-4-44-popular-funny-pictures-with-captions.jpg",
        newurl:     "http://www.asdf.com",
        newurl2:    "bazz",
        user:       "John Smith",
        main_A:      Plates.bind(template_SUB4, data_SUB4),
        list_A:      Plates.bind(template_SUB5, data_SUB5)
      };
      var data_SUB        = {
        boink:      "== i am inserted content of the subtemplate =="
      };
      var data_SUB2       = [
        { name: 'Louis CK'},
        { name: 'Andy Kindler'},
        { name: 'Greg Giraldo'}
      ];
      var data_SUB3       = { name: ['Louis CK', 'Andy Kindler', 'Greg Giraldo', 'asdf'] };
      /////////////////////////////////////////////////////////////////////////////
      var mapping_MAIN    = Plates.Map();
      var mapping_SUB     = Plates.Map();
      var mapping_SUB2    = Plates.Map();
      var mapping_SUB3    = Plates.Map();
      /////////////////////////////////////////////////////////////////////////////
      // 1. SIMPLE - innerHTML REPLACEMENT without MAPPING RULES
        // HINT: will only work if no MAPPING RULES ARE GIVEN - otherwise EXPLICIT MAPPING needs to be given (e.g. #(1.))
      // By default, plates will try to match the key
      // in the data to an id (me:attribute) in the tag, since both should be unique.
      mapping_MAIN.where('data-bind').is('name').use('user'); // (1.)
      // 2. SIMPLE Mapping
      // // In even more complex cases, an arbitrary attribute can be specified.
      // // If a value is matched, a specific value can be used
      // // and then used as another attribute's value.
      mapping_MAIN.where('data-foo').is('bar').use('imageurl').as('src'); // (2.)
      // 3. SIMPLE REPLACE Mapping
      // // COMPLEX INSTRUCTIONS
      // // Another common case is to replace the value
      // // of an attribute if it is a match.
      mapping_MAIN.where('placeholder').is('/').insert('newurl'); // (3.)
      // 4. PARTIAL REPLACE Mapping
      // // Partial value replacement
      // // `has` can take a regular expression.
      mapping_MAIN.where('placeholder').has(/bar/).insert('newurl2'); // (4.)
      // 5. EXPLICIT INSTRUCTIONS
      // // A common use case is to apply the new value
      // // to each tag's body based on the class attribute.
      // ARRAY Mapping 1
      mapping_MAIN.where('class').is('name').use('user'); // (5.)
      // 6. PARTIAL / APPEND - using SUB TEMPLATES
      mapping_SUB.className('trolling').to('boink'); // (6.)
      mapping_MAIN.className('insert_subtemplate').partial(template_SUB1, data_SUB, mapping_SUB); // (6.)
      // 7. COLLECTION
      // // Plates can also iterate through collections:
      mapping_SUB2.where('data-bind').is('name').use('name');
      mapping_MAIN.className('insert_collectionA').partial(template_SUB2, data_SUB2, mapping_SUB2); // (7.)

      // 8. ARRAY
      mapping_SUB3.where('data-bind').is('name').use('name');
      mapping_MAIN.className('insert_ARRAY').partial(template_SUB3, data_SUB3, mapping_SUB3); // (8.)
      // 9. SUBTEMPLATING a.k.a PARTIALS
      // // Plates also supports partials:
      mapping_MAIN.where('id').is('main').use('main_A'); // (9.)                   // @TODO: why is it outside the red container???
      // 10. ARRAY with BIND
      mapping_MAIN.where('class').is('list').use('list_A'); // (10.)               // @TODO: why is it outside the red container???

                                                                                   // @TODO: Create an attribute if not present
      var  RESULT = Plates.bind(template_MAIN, data_MAIN, mapping_MAIN);
      // NOT IN USE
      //   var data = {
      //     "address": "http://github.com/hij1nx",
      //     "name": "Github"
      //   };
      //   map.where('class').is('link').use('address').as('href');
      //   map.where('class').is('link').use('name');
      document.querySelector("#RESULT").innerHTML = RESULT;
    }
  }



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  function PRODUCTION_MODE () {

    function generateData (x) {
      // @TODO: REFACTORING - use SCHEMA to know how to send DATA

      // TRANSLATE FORMAT - RECEIVED DATA 2 SEND DATA
      var temp = JSON.parse(JSON.stringify(window.data[0]));
      delete temp.businessrelation_ids;
      // temp.businessrelation_ids = [];
      delete temp.topic_ids;
      // temp.topic_ids = [];
      delete temp.internal_contact_person_ids;
      // temp.internal_contact_person_ids = [];
      delete temp.fullname;
      temp.vita_steps_attributes = { };
      temp.vita_steps_attributes[0] = { user_id:  USER.ID, title: 'bla', description: 'lorem ipsum' };
      temp.vita_steps_attributes[1] = { user_id:  USER.ID, title: 'bla2', description: ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum' };
      delete temp.vita_steps;

      temp.user_id = temp.user_id.id;


      // GENERATE NEW DATA from SAMPLE ITEM "x"
      // (by adding random number to the end of some attributes);
      temp.firstname             = 'Hans'+x;
      temp.lastname              = 'Meier'+x;
      temp.email                 = 'hans.meier'+x+'@email.com';
      temp.phone                 = '123456'+x;
      temp.mobile                = '0177 1234 1234'+x;
      temp.phone_company         = '030 12345'+x;
      temp.email_company         = 'hans.meier'+x+'@company.com';
      temp.business_unit         = 'Human Ressource'+x;
      temp.position              = 'Key Account Manager'+x;
      temp.company_name          = 'Example GmbH'+x;
      temp.company_name_addition = 'Holding'+x;
      temp.street                = 'Hauptstrasse 55'+x;
      temp.street_addition       = 'Nebenweg 5'+x;
      temp.zip                   = '555333'+x;
      temp.post_box              = '535353'+x;
      temp.post_box_zip          = '535353 POST BOX'+x;
      temp.city                  = 'Berlin'+x;
      temp.country_name          = 'Deutschland'+x;
      temp.region                = 'Berlin Region'+x;
      return temp;
    }

    // @TODO: CONTRACT - STATIC_TYPE, DUCK_TYPE, FILLED_EXAMPLE, EMPTY_EXAMPLE
    var SCHEMA = { // @TODO: unterscheiden zwischen "receive" and "send", ... which fields have which "rights"? (CRUD)
      // SEND 2 FRONTEND FIELDS - will be defined by FRONTEND DEVELOPER
      // SEND 2 BACKEND FIELDS  - will be defined by BACKEND DEVELOPER
      id                        : { type: "Integer", validator: function validate (data) { return true; }, sample: '' },
      firstname                 : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      lastname                  : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      gender                    : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      title                     : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      businessrelation_ids      : { type: "Array", validator: function validate (data) { return true; }, sample: '' },
      topic_ids                 : { type: "Array", validator: function validate (data) { return true; }, sample: '' },
      user_id                   : { type: "Integer", validator: function validate (data) { return true; }, sample: '' },
      internal_contact_person_ids : { type: "Array", validator: function validate (data) { return true; }, sample: '' },
      phone                     : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      mobile                    : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      email                     : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      phone_company             : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      fax                       : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      email_company             : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      business_unit             : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      position                  : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      event_invitation_receiver : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      email_receiver            : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      mass_email_receiver       : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      attaining_public_office   : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      phone_receiver            : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      fax_receiver              : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      letter_receiver           : { type: "Boolean", validator: function validate (data) { return true; }, sample: '' },
      company_name              : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      company_name_addition     : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      street                    : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      street_addition           : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      zip                       : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      post_box                  : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      post_box_zip              : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      city                      : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      country_name              : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      region                    : { type: "String",  validator: function validate (data) { return true; }, sample: '' },
      vita_steps_attributes     : { type: "Array", validator: function validate (data) { return true; }, sample: '' },
      deleted                   : { type: "Boolean", validator: function validate (data) { return undefined; }, sample: false } // should not be present
    };

    function getTypes() {
      var temp = {};
      for (key in SCHEMA) {
        temp[key] = SCHEMA[key].type;
      }
      return temp;
    }
    function getValidators() {
      var temp = {};
      for (key in SCHEMA) {
        temp[key] = SCHEMA[key].validator;
      }
      return temp;
    }
    function getSamples() {
      var temp = {};
      for (key in SCHEMA) {
        temp[key] = SCHEMA[key].sample;
      }
      return temp;
    }

    function VALIDATE (data, collection, schema) {
      var DATA;
      for(index in data) {
        DATA = data[index];
        for (key in DATA) {
          if (!(SCHEMA[key])) {
            return false;
          } else if (!((SCHEMA[key].validator)(DATA[key]))) {
            return false;
          }
        }
      }
      return true;
    }






    ///////////////////////////////////////////////////////////////////////////////
    // CONFIGURE RAINBOWUNICORN COMPOENT
    ///////////////////////////////////////////////////////////////////////////////
    function START (data, schema, collection, containerQuery) {


      function buildDataSelect(collectionData, customerData, isMultiple) {
        var htmlCode = '',
            multiple = '',
            selected = ''
        ;

        if (isMultiple) {
          multiple = ' multiple="true"';
        }

        htmlCode += '<select class="chzn-select"' + multiple + ' style="width: 278px;" data-placeholder=" ">';
        htmlCode += '<option value=""></option>';

        // user_id sollte array sein fuer weitere Verarbeitung
        if (typeof(customerData) === 'number') {
          customerData = [customerData];
        }

        for(index in collectionData) {
          if (typeof(collectionData[index]) == 'object') {
            if (customerData && customerData.indexOf(collectionData[index].id) > -1) {
              selected = ' selected="true"';
            }
            htmlCode += '<option value="' + collectionData[index].id + '"' + selected + '>' + collectionData[index].title + '</option>';
          } else if (typeof(collectionData[index]) == 'string') {
            if (customerData && customerData.indexOf(collectionData[index]) > -1) {
              selected = ' selected="true"';
            }
            htmlCode += '<option value="' + collectionData[index] + '"' + selected + '>' + collectionData[index] + '</option>';
          }
        }

        htmlCode += '</select>';
        return htmlCode;
      }

      function buildDataRadio(customerData, inputName) {
        var htmlCode = '',
            checkedTrue = '',
            checkedFalse = ''
        ;

        if (customerData == true) {
          checkedTrue = ' checked="true"';
        } else if (customerData == false) {
          checkedFalse = ' checked="true"';
        }

        htmlCode += '<input type="radio" name="' + inputName + '" value="true"' + checkedTrue + '/>Ja';
        htmlCode += '<span class="radio_spacer"></span>';
        htmlCode += '<input type="radio" name="' + inputName + '" value="false"' + checkedFalse + '/>Nein';
        return htmlCode;
      }



      //// CREATE TRANSFORMED DATASET
      function transform(data) {
        for(item in data) {
          data[item].gender                     = buildDataSelect(collection.gender, data[item].gender, false);
          data[item].user_id                    = buildDataSelect(collection.user_id, data[item].user_id, false);
          data[item].internal_contact_person_ids = buildDataSelect(collection.internal_contact_person_ids, data[item].internal_contact_person_ids, true);
          data[item].businessrelation_ids       = buildDataSelect(collection.businessrelation_ids, data[item].businessrelation_ids, true);
          data[item].topic_ids                  = buildDataSelect(collection.topic_ids, data[item].topic_ids, true);
          data[item].event_invitation_receiver  = buildDataRadio(data[item].event_invitation_receiver, "settings_event");
          data[item].phone_receiver             = buildDataRadio(data[item].phone_receiver, "settings_phone");
          data[item].email_receiver             = buildDataRadio(data[item].email_receiver, "settings_email");
          data[item].fax_receiver               = buildDataRadio(data[item].fax_receiver, "settings_fax");
          data[item].mass_email_receiver        = buildDataRadio(data[item].mass_email_receiver, "settings_mass_email");
          data[item].letter_receiver            = buildDataRadio(data[item].letter_receiver, "settings_letter");
          data[item].attaining_public_office    = buildDataRadio(data[item].attaining_public_office, "settings_office");
        }
        return data;
      }




      //// CREATE SCHEMA - not in use currently -
      function getSchema (SCHEMA) {
        var schema = [];
        for(key in SCHEMA) {
          if (SCHEMA.hasOwnProperty(key)) {
            schema.push(key);
          }
        }
        return schema;
      }










      data = transform(data);

      // BUILD APP
      window.IKUSEI = (function buildApp (APP) {
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // CONFIGURE COMPONENTS - DYNAWRAPPER
        APP.DYNAWRAPPER = (function init_dynatable (CONTAINER) {
          var name = 'v0.0.1/api/components/DynaWrapper.html';
          // INSTANTIATE TEMPLATE
          var dynatable = DEPs.holon.getTemplate(name);
          // SET DUMMY DATA (instead of backend rendered version)
          // dynatable.ajax                = true;
          // dynatable.ajaxUrl             = "/admin/customers/search.json";
          // dynatable.ajaxOnLoad          = true;
          dynatable.dataset.json        = JSON.stringify(data);
          dynatable.dataset.collection  = JSON.stringify(collection);
          dynatable.dataset.schema      = JSON.stringify((function filter() {
            var schema = schema;
            // return ['', 'fullname', 'company_name', 'email', 'phone', 'action']; // @TODO: with selectbox
            return ['fullname', 'company_name', 'email', 'phone', 'action'];
          })());
          // PREPROCESS - CONFIGURE SCHEMA
          DEPs.DynaWrapper.setSchema(dynatable);
          // INSERT TEMPLATE
          // @TODO: Realize the API below, thus: reduce COMPONENT API
          // DEPs.holon.insertTemplate(CONTAINER, TEMPLATE, DATA, SCHEMA);
          DEPs.holon.insertTemplate(CONTAINER, dynatable);
          // CONFIGURE DYNATABLE
          DEPs.DynaWrapper.initTable(dynatable);
          // PUBLISH ENTITY INTERFACE
          return dynatable;
        })(containerQuery);


        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // CONFIGURE COMPONENTS - COMPLEXFORM
        APP.COMPLEXFORM = (function init_complexform (CONTAINER) {
          var name = 'v0.0.1/api/components/Complexform.html';
          // INSTANTIATE TEMPLATE
          var complexform = DEPs.holon.getTemplate(name);
          // SET DUMMY DATA (instead of backend rendered version)
          complexform.dataset.json    = JSON.stringify(data[0]);
          complexform.dataset.schema  = JSON.stringify((function filter() {
            var schema = schema;
            return schema;
            // return ['', 'fullname', 'company_name', 'email', 'phone', 'action'];
          })());
          // INSERT TEMPLATE
          DEPs.holon.insertTemplate(CONTAINER, complexform);
          // CONFIGURE COMPLEXFORM
          DEPs.Complexform.init(complexform);
          // PUBLISH ENTITY INTERFACE
          return complexform;
        })(containerQuery);


        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        (function wireUp_COMPLEXFORM() { // (map 'component events' to 'component apis')
          APP.DYNAWRAPPER.addEventListener('ADD', function (EVENT) {
            APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
              'STATE=hidden',
              'STATE=create'
            );
            APP.COMPLEXFORM.style.top = EVENT.detail.position + "px";
            APP.COMPLEXFORM.API.INTERFACE['USER_ADD'](EVENT.detail.data);
          });

          APP.DYNAWRAPPER.addEventListener('SET', function (EVENT) {
            APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
              'STATE=hidden',
              'STATE=update'
            );
            APP.COMPLEXFORM.style.top = EVENT.detail.position + "px";
            APP.COMPLEXFORM.API.INTERFACE['USER_SET'](EVENT.detail.data);
          });
        })();


        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        (function wireUp_DYNAWRAPPER() { // (map 'component events' to 'component apis')
          APP.COMPLEXFORM.addEventListener('CANCEL', function () {
            // Should maybe happen "complexform internally" - @TODO: HOOK CANDIDATE
            APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
              'STATE=update',
              'STATE=hidden'
            );
            APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
              'STATE=create',
              'STATE=hidden'
            );
          });

          APP.COMPLEXFORM.addEventListener('SAVE', function (EVENT) {
            APP.DYNAWRAPPER.API.INTERFACE['set'](EVENT.detail.data.id, EVENT.detail.data);
            DEPs.AJAX.update(EVENT.detail.data);
          });

          APP.COMPLEXFORM.addEventListener('NEXT', function (EVENT) {
            if (EVENT.detail.data) {
              // var item = APP.DYNAWRAPPER.API.INTERFACE['get'](EVENT.detail.data+1);
              DEPs.AJAX.read({id:EVENT.detail.data+1}, function (item) {
                if (item) {
                  APP.COMPLEXFORM.API.INTERFACE['USER_SET'](JSON.parse(item));
                  // @TODO: activate PREV button IF deactivated - important for FIRST DATA SET
                }
              });
            } else {
              // @TODO: deactivate NEXT button - important for LAST DATA SET
            }
          });

          APP.COMPLEXFORM.addEventListener('PREV', function (EVENT) {
            if (EVENT.detail.data) {
              // var item = APP.DYNAWRAPPER.API.INTERFACE['get'](EVENT.detail.data-1);
              DEPs.AJAX.read({id:EVENT.detail.data-1}, function (item) {
                if (item) {
                  APP.COMPLEXFORM.API.INTERFACE['USER_SET'](JSON.parse(item));
                  // @TODO: activate NEXT button IF deactivated - important for LAST DATA SET
                }
              });
            } else {
              // @TODO: deactivate PREV button - important for FIRST DATA SET
            }
          });
        })();

        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // DEPLOY APP
        return APP;
      })({});
    }
    return {
      generateData  : generateData,
      SCHEMA        : SCHEMA,
      getTypes      : getTypes,
      getValidators : getValidators,
      getSamples    : getSamples,
      VALIDATE      : VALIDATE,
      START         : function () {
        START (DATA, SCHEMA, COLLECTION, CONTAINER);
      }
    };
      
  }
}({});

},{"../package.json":16,"./CONTRACT.js":2,"./campaign.template.html":3,"./index.template.html":5,"./templates/MAIN.template.html":6,"./templates/SUB1.template.html":7,"./templates/SUB2.template.html":8,"./templates/SUB3.template.html":9,"./templates/SUB4.template.html":10,"./templates/SUB5.template.html":11,"holon":12}],5:[function(require,module,exports){
module.exports = '<div style="background-color: #000;">\n<!--   <span><img src="assets/ab3a66df45428752.png"></span>\n  <span><img src="/assets/regions/slovenia/Coat_of_arms_of_Slovenia.png"></span> -->\n  <h2>Campaigns</h2><br><br>\n  <div class="campaigns">\n    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n  </div>\n  <hr>\n  <div class=\'Lead Lead--VARIANT=slovenia\'> Example\n    <div class="Lead__locationmap">\n    </div>\n  </div>\n\n  <!-- <div>\n    <section class="bussinesscard">\n    <div class="flip">\n      <div class="front">       \n        <div class="top">       \n          <div class="logo"><span class="fat">E</span><span class="skinny">K</span></div>       \n        </div>\n        <div class="nametroduction">\n          <div class="name">Eduard Kosicky</div>\n          <div class="introduction">A Front End Developer</div>\n        </div>  \n        <div class="contact">           \n          <div class="website">\n            <span class="ion-earth"></span>\n            <a href="#">www.eduardkosicky.me</a>\n          </div>\n          <div class="twitter">\n            <span class="ion-social-twitter"></span>\n            <a href="#">@eduardkosicky</a> \n          </div>                        \n          <div class="phone ">\n            <span class="ion-ios7-telephone"></span> \n            <a href="#">0118 999 7253</a> \n          </div>\n          <div class="email ">\n            <span class="ion-paper-airplane"></span>\n            <a href="#">eduard@kosicky.me</a>\n          </div>\n        </div>            \n      </div>\n      <div class="back"></div>\n    </div>\n    </section>\n    <section class="tooltip">\n    <p>\n      Hover over the card to see the back.\n    </p>\n    </section>\n  </div> -->\n</div>\n';
},{}],6:[function(require,module,exports){
module.exports = '<div id="template_MAIN">\n  <div data-bind="name">__NOT_SHOWN_BECAUSE_REPLACED__</div>\n  <img data-foo="bar"><br>\n  <input placeholder="/">Schoobidoo</input><br>\n  <input placeholder="/foo/bar">Schoobidoo123</input><br><br>\n  <h2>Userlist</h2>\n  <span class="name">User</span>...<span class="name">User</span><br><br>\n  <div class="insert_subtemplate">\n    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n  </div>\n  <div class="insert_collectionA" style="background-color: yellow;">\n    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n  </div>\n  <div class="insert_ARRAY" style="background-color: orange;">\n    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n  </div>\n  <div class="insert_SUBTEMPLATE" style="background-color: green;">\n    <h1> SUBTEMPLATING with BIND </h1><h3>This is the main template.</h3><div id="main"></div><h3>The End.</h3>\n  </div>\n  <div class="moo" style="background-color: blue;">\n    <h2> ARRAY D</h2>\n    <div>\n      <ul class="list"></ul>\n      <div>\n        <h3>Hello World</h3>\n        <p>C"li"ck the following button.</p>\n        <span> Go back</span>\n      </div>\n    </div>\n  </div>\n</div>\n';
},{}],7:[function(require,module,exports){
module.exports = '<div id="template_SUB1">\n	<div class="trolling"></div>\n</div>\n';
},{}],8:[function(require,module,exports){
module.exports = '<div id="template_SUB2">\n  <div>\n    <h2> COLLECTION A</h2>\n    <ul><li data-bind="name">REPLACE</li></ul>\n    <div>\n      <h3>Hello World</h3>\n      <p>Press the following button.</p>\n      <span>Go back</span>\n    </div>\n  </div>\n</div>\n';
},{}],9:[function(require,module,exports){
module.exports = '<div id="template_SUB3">\n  <div>\n    <h2> ARRAY B</h2>\n    <ul><li data-bind="name">REPLACE</li></ul>\n    <div>\n      <h3>Hello World</h3>\n      <p>C"lu"ck the following button.</p>\n      <span> Go back</span>\n    </div>\n  </div>\n</div>\n';
},{}],10:[function(require,module,exports){
module.exports = '<div id="template_SUB4">\n  <p>\n    This is the partial that should be rendered into the main template.\n    <span id="test">__NOT_SHOWN_BECAUSE_REPLACED__</span>\n  </p>\n</div>\n';
},{}],11:[function(require,module,exports){
module.exports = '<div id="template_SUB5">\n  <li class="name2">REPLACE</li>\n</div>\n';
},{}],12:[function(require,module,exports){
module.exports = MODULE_holon;

var Plates = require('plates');

MODULE_holon.NAME    = require('../package.json').name.toUpperCase();
MODULE_holon.VERSION = 'v' + require('../package.json').version;

function MODULE_holon () {
  return {
    Plates: Plates,
    holonize: {}
  };
} 

},{"../package.json":15,"plates":13}],13:[function(require,module,exports){
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMONJS MODULE EXPORT                                        (Version 0.0.0)

    @JOB: YEOMAN or NGEN GENERATOR for Components schreiben
    @JOB: dropin vs configurable
    @JOB: Make "COMMENTS" create a nice visual structure of module in miniview

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function COMMONJS_EXPORTER (FACTORY) {
  'use strict';
  // If MODULE is a "Drop In" which executes once after loading:
  module.exports = FACTORY(/*with predefined set of PARAMS*/); // CommonJS
  // // ELSE IF MODULE is Otherwise a CONFIGURABLE:
  // module.exports = FACTORY;
})(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULENAME                                                      (this lego)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_MODULENAME (META, ENTITIES, DEPs, window, global, undefined)
  { // to shield MODULE from overriden 'undefined' and global object pollution
    'use strict';
    function MODULENAME_API (
      /*-----------------------------------------------------------------------
        MODULE API
      
          USAGE:
            ...
      \*---------------------------------------------------------------------*/
      //INJECTED DEPENDENCIES:
      CONTAINER,  // DOM Form Element to apply MODULENAME to
      //OPTIONS:
      SETTINGS,   // OPTIONAL -- name:string, required:boolean, minQueryLength:number
      SUGGESTIONS // Optional ARRAY from which to choose autocomplete SUGGESTIONS
    ) {
      /*-----------------------------------------------------------------------
        PARAMETER VALIDATION + SANITIZATION

        @JOB: Refine behavior in relation to given input
        @JOB: Only do if not singleton and single instance already exists
        @ASSERT: at least one 'billboards' is given in SETTINGS.billboards
          else: return without creating anything new!
      -----------------------------------------------------------------------*/
      SETTINGS = typeof SETTINGS === 'undefined' ?
        { // DEFAULT SETTINGS
          // settings      : {placeholder: 'Search', value: '', minQueryLength: 0},
          // SUGGESTIONS   : [],
          // selection     : '',
          // onQueryChange : function onQueryChange (oldQuery, newQuery) {
          //   return;
          // }
        }
        : SETTINGS // @JOB: Extend non-given OPTIONS with DEFAULTS, allow override defualts with "NULL"
      ;
      /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        MODULE CREATION                                       (build this lego)
      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
      var MODULE = 
        ENTITIES.length ? ENTITIES[ENTITIES.length-1] : // @JOB: if singleton vs factory
        (function MODULENAME (STATE) {
          var
          /*-------------------------------------------------------------------
            TEMPLATE - BUILDING
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            TEMPLATE - CUSTOMIZATION (Markup, Properties, Styling)
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            DEFINE
          -------------------------------------------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            PLATES = (function () {
              var api = {};
              ///////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////
              // GENERAL HELPERS
              //
              // Cache variables to increase lookup speed.
              //
              var _toString = Object.prototype.toString;
              //
              // Polyfill the Array#indexOf method for cross browser compatibility.
              //
              [].indexOf || (Array.prototype.indexOf = function indexOf(a, b ,c){
                for (
                  c = this.length , b = (c+ ~~b) % c;
                  b < c && (!(b in this) || this[b] !==a );
                  b++
                );

                return b^c ? b : -1;
              });
              //
              // Polyfill Array.isArray for cross browser compatibility.
              //
              Array.isArray || (Array.isArray = function isArray(a) {
                return _toString.call(a) === '[object Array]';
              });
              ///////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////
              //
              // ### function Mapper(conf)
              // #### @conf {Object} configuration object
              // Constructor function for the Mapper instance that is responsible for
              // providing the mapping for the data structure
              //
              function Mapper(conf) {
                if (!(this instanceof Mapper)) { return new Mapper(conf); }

                this.mappings = [];
                this.conf = conf || {};
              }
              // MAPPER HELPERS
              //
              // ### function last(newitem)
              // #### @newitem {Boolean} do we need to add a new item to the mapping
              // Helper function for adding new attribute maps to a Mapper instance
              //
              function last(newitem) {
                if (newitem) {
                  this.mappings.push({});
                }

                var m = this.mappings[this.mappings.length - 1];

                if (m && m.attribute && m.value && m.dataKey && m.replace) {
                  m.re = new RegExp(m.attribute + '=([\'"]?)' + m.value + '\\1');
                } else if (m) {
                  delete m.re;
                }

                return m;
              }
              //
              // Create the actual chainable methods: where('class').is('foo').insert('bla')
              //
              Mapper.prototype = {
                //
                // ### function append(plates, data, map)
                // #### @plates {String} Template or path/id of the template
                // #### @data {Object|String} data for the appended template
                // #### @map {Plates.Map} mapping for the data
                //
                append: function append(plates, data, map) {
                  var l = last.call(this);

                  if (data instanceof Mapper) {
                    map = data;
                    data = undefined;
                  }
                  l.plates = plates;
                  l.data = data;
                  l.mapper = map;

                  return last.call(this, true);
                },
                //
                // ### function remove()
                // This will remove the element that was specified in the `where` clause
                // from the template.
                //
                remove: function remove() {
                  last.call(this).remove = true;
                  return last.call(this, true);
                },
                //
                // ### function as(val)
                // #### @val {String} A string that represents an attribute in the tag.
                // If there is no attribute by that name name found, one may be created
                // depending on the options that where passed in the `Plates.Map`
                // constructor.
                //
                as: function as(val) {
                  last.call(this).replace = val;
                  return last.call(this) && this;
                },
                //
                // ### function insert(val)
                // #### @val {String} A string that represents a key. Data will be inserted
                // in to the attribute that was specified in the `where` clause.
                //
                insert: function insert(val) {
                  var l = last.call(this);
                  l.replace = l.attribute;
                  l.dataKey = val;
                  return last.call(this) && this;
                },
                //
                // ### function has(val)
                // #### @val {String|RegExp} The value of the attribute that was specified
                // in the `where` clause.
                //
                has: function has(val) {
                  last.call(this).value = val;
                  this.replace(val);
                  return last.call(this) && this;
                },
                //
                // ### function is(val)
                // #### @val {string} The value of the attribute that was specified in the
                // `where` clause.
                //
                is: function is(val) {
                  last.call(this).value = val;
                  return last.call(this) && this;
                },
                //
                // ### function tag(val)
                // #### @val {String} the name of the tag should be found
                //
                tag: function tag(val) {
                  last.call(this, true).tag = val;
                  return this;
                },
                //
                // ### function class(val)
                // #### @val {String} a value that may be found in the `class` attribute of a tag
                // the method name should be wrapped in quotes or it will throw errors in IE.
                //
                'class': function className(val) {
                  return this.where('class').is(val);
                },
                //
                // ### function where(val)
                // #### @val {String} an attribute that may be found in a tag
                // This method will initiate a clause. Once a clause has been established
                // other member methods will be chained to each other in any order.
                //
                where: function where(val) {
                  last.call(this, true).attribute = val;
                  return last.call(this) && this;
                },
                //
                // ### function use(val)
                // #### @val {String} A string that represents a key.
                // Data will be inserted into the attribute that was specified in the
                // `where` clause.
                //
                use: function use(val) {
                  last.call(this).dataKey = val;
                  return last.call(this) && this;
                },
                //
                // ### function replace(val1, val2)
                // #### @val1 {String|RegExp} The part of the attribute that needs to be replaced
                // #### @val2 {String} The value it should be replaced with
                //
                replace: function replace(val1, val2) {
                  var l = last.call(this);
                  l.replacePartial1 = val1;
                  l.replacePartial2 = val2;
                  return this;
                }
              };
              //
              // Provide helpful aliases that well help with increased compatibility as not
              // all browsers allow the Mapper#class prototype (IE).
              //
              Mapper.prototype.className = Mapper.prototype['class'];
              //
              // Aliases of different methods.
              //
              Mapper.prototype.partial = Mapper.prototype.append;
              Mapper.prototype.to = Mapper.prototype.use;
              //
              // Expose the Mapper.
              //
              api.Map = Mapper;
              ///////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////
              var Merge = function Merge() {};
              ///// MERGE HELPERS
              //
              function matchClosing(input, tagname, html) { // Matches a closing tag to a open tag
                var closeTag = '</' + tagname + '>',
                    openTag  = new RegExp('< *' + tagname + '( *|>)', 'g'),
                    closeCount = 0,
                    openCount = -1,
                    from, to, chunk
                    ;

                from = html.search(input);
                to = from;

                while(to > -1 && closeCount !== openCount) {
                  to = html.indexOf(closeTag, to);
                  if (to > -1) {
                    to += tagname.length + 3;
                    closeCount ++;
                    chunk = html.slice(from, to);
                    openCount = chunk.match(openTag).length;
                  }
                }
                if (to === -1) {
                  throw new Error('Unmatched tag ' + tagname + ' in ' + html)
                }

                return chunk;
              }
              //
              // compileMappings
              //
              // sort the mappings so that mappings for the same attribute and value go consecutive
              // and inside those, those that change attributes appear first.
              //
              function compileMappings(oldMappings) {
                var mappings = oldMappings.slice(0);

                mappings.sort(function(map1, map2) {
                  if (!map1.attribute) return 1;
                  if (!map2.attribute) return -1;

                  if (map1.attribute !== map2.attribute) {
                    return map1.attribute < map2.attribute ? -1 : 1;
                  }
                  if (map1.value !== map2.value) {
                    return map1.value < map2.value ? -1 : 1;
                  }
                  if (! ('replace' in map1) && ! ('replace' in map2)) {
                    throw new Error('Conflicting mappings for attribute ' + map1.attribute + ' and value ' + map1.value);
                  }
                  if (map1.replace) {
                    return 1;
                  }
                  return -1;
                });

                return mappings;
              }
              //
              // ### function fetch(data, mapping, value, key)
              // #### @data {Object} the data that we need to fetch a value from
              // #### @mapping {Object} The iterated mapping step
              // #### @tagbody {String} the tagbody we operated against
              // #### @key {String} optional key if the mapping doesn't have a dataKey
              // Fetches the correct piece of data
              //
              function fetch(data, mapping, value, tagbody, key) {
                key = mapping.dataKey || key;

                //
                // Check if we have data manipulation or filtering function.
                //
                if (mapping.dataKey && typeof mapping.dataKey === 'function') {
                  return mapping.dataKey(data, value || '', tagbody || '', key);
                }

                //
                // See if we are using dot notation style
                //
                if (!~key.indexOf('.')) return data[key];

                var result = key
                  , structure = data;

                for (var paths = key.split('.'), i = 0, length = paths.length; i < length && structure; i++) {
                  result = structure[+paths[i] || paths[i]];
                  structure = result;
                }

                return result !== undefined ? result : data[key];
              }
              ///////////////////////////////////////////////////////////////////////////////////////
              Merge.prototype = {
                nest: [],

                tag: new RegExp([
                  '<',
                  '(/?)', // 2 - is closing
                  '([-:\\w]+)', // 3 - name
                  '((?:[-\\w]+(?:', '=',
                  '(?:\\w+|["|\'](?:.*)["|\']))?)*)', // 4 - attributes
                  '(/?)', // 5 - is self-closing
                  '>'
                ].join('\\s*')),

                //
                // HTML attribute parser.
                //
                attr: /([\-\w]*)\s*=\s*(?:(["\'])([\-\.\w\s\/:;&#]*)\2)/gi,

                //
                // In HTML5 it's allowed to have to use self closing tags without closing
                // separators. So we need to detect these elements based on the tag name.
                //
                selfClosing: /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/,

                //
                // ### function hasClass(str, className)
                // #### @str {String} the class attribute
                // #### @className {String} the className that the classAttribute should contain
                //
                // Helper function for detecting if a class attribute contains the className
                //
                hasClass: function hasClass(str, className) {
                  return ~str.split(' ').indexOf(className);
                },

                //
                // ### function iterate(html, value, components, tagname, key)
                // #### @html {String} peice of HTML
                // #### @value {Mixed} iterateable object with data
                // #### @components {Array} result of the this.tag regexp execution
                // #### @tagname {String} the name of the tag that we iterate on
                // #### @key {String} the key of the data that we need to extract from the value
                // #### @map {Object} attribute mappings
                //
                // Iterate over over the supplied HTML.
                //
                iterate: function iterate(html, value, components, tagname, key, map) {
                  var output  = '',
                      segment = matchClosing(components.input, tagname, html),
                      data = {};

                  // Is it an array?
                  if (Array.isArray(value)) {
                    // Yes: set the output to the result of iterating through the array
                    for (var i = 0, l = value.length; i < l; i++) {
                      // If there is a key, then we have a simple object and
                      // must construct a simple object to use as the data
                      if (key) {
                        data[key] = value[i];
                      } else {
                        data = value[i];
                      }

                      output += this.bind(segment, data, map);
                    }

                    return output;
                  } else if (typeof value === 'object') {
                    // We need to refine the selection now that we know we're dealing with a
                    // nested object
                    segment = segment.slice(components.input.length, -(tagname.length + 3));
                    return output += this.bind(segment, value, map);
                  }

                  return value;
                },

                //
                // ### function bind(html, data, map)
                // #### @html {String} the template that we need to modify
                // #### @data {Object} data for the template
                // #### @map {Mapper} instructions for the data placement in the template
                // Process the actual template
                //
                bind: function bind(html, data, map) {
                  if (Array.isArray(data)) {
                    var output = '';

                    for (var i = 0, l = data.length; i<l; i++) {
                      output += this.bind(html, data[i], map);
                    }

                    return output;
                  }

                  html = (html || '').toString();
                  data = data || {};

                  var that = this;

                  var openers = 0,
                      remove = 0,
                      components,
                      attributes,
                      mappings = map && compileMappings(map.mappings),
                      intag = false,
                      tagname = '',
                      isClosing = false,
                      isSelfClosing = false,
                      selfClosing = false,
                      matchmode = false,
                      createAttribute = map && map.conf && map.conf.create,
                      closing,
                      tagbody;

                  var c,
                      buffer = '',
                      left;

                  for (var i = 0, l = html.length; i < l; i++) {
                    c = html.charAt(i);

                    //
                    // Figure out which part of the HTML we are currently processing. And if
                    // we have queued up enough HTML to process it's data.
                    //
                    if (c === '!' && intag && !matchmode) {
                      intag = false;
                      buffer += html.slice(left, i + 1);
                    } else if (c === '<' && !intag) {
                      closing = true;
                      intag = true;
                      left = i;
                    } else if (c === '>' && intag) {
                      intag = false;
                      tagbody = html.slice(left, i + 1);
                      components = this.tag.exec(tagbody);

                      if(!components) {
                        intag = true;
                        continue;
                      }

                      isClosing = components[1];
                      tagname = components[2];
                      attributes = components[3];
                      selfClosing = components[4];
                      isSelfClosing = this.selfClosing.test(tagname);

                      if (matchmode) {
                        //
                        // and its a closing.
                        //
                        if (!!isClosing) {
                          if (openers <= 0) {
                            matchmode = false;
                          } else {
                            --openers;
                          }
                        } else if (!isSelfClosing) {
                          //
                          // and its not a self-closing tag
                          //
                          ++openers;
                        }
                      }

                      if (!isClosing && !matchmode) {
                        //
                        // if there is a match in progress and
                        //
                        if (mappings && mappings.length > 0) {
                          for (var ii = mappings.length - 1; ii >= 0; ii--) {
                            var setAttribute = false
                              , mapping = mappings[ii]
                              , shouldSetAttribute = mapping.re && attributes.match(mapping.re);

                            //
                            // check if we are targetting a element only or attributes
                            //
                            if ('tag' in mapping && !this.attr.test(tagbody) && mapping.tag === tagname) {
                              tagbody = tagbody + fetch(data, mapping, '', tagbody);
                              continue;
                            }

                            tagbody = tagbody.replace(this.attr, function(str, key, q, value, a) {
                              var newdata;

                              if (shouldSetAttribute && mapping.replace !== key || remove) {
                                return str;
                              } else if (shouldSetAttribute || typeof mapping.replacePartial1 !== 'undefined') {
                                setAttribute = true;

                                //
                                // determine if we should use the replace argument or some value from the data object.
                                //
                                if (typeof mapping.replacePartial2 !== 'undefined') {
                                  newdata = value.replace(mapping.replacePartial1, mapping.replacePartial2);
                                } else if (typeof mapping.replacePartial1 !== 'undefined' && mapping.dataKey) {
                                  newdata = value.replace(mapping.replacePartial1, fetch(data, mapping, value, tagbody, key));
                                } else {
                                  newdata = fetch(data, mapping, value, tagbody, key);
                                }

                                return key + '="' + (newdata || '') + '"';
                              } else if (!mapping.replace && mapping.attribute === key) {
                                if (
                                  mapping.value === value ||
                                  that.hasClass(value, mapping.value ||
                                  mappings.conf.where === key) ||
                                  (_toString.call(mapping.value) === '[object RegExp]' &&
                                    mapping.value.exec(value) !== null)
                                ) {
                                  if (mapping.remove) {
                                    //
                                    // only increase the remove counter if it's not a self
                                    // closing element. As matchmode is suffectient to
                                    // remove tose
                                    //
                                    if (!isSelfClosing) remove++;
                                    matchmode = true;
                                  } else if (mapping.plates) {
                                    var partial = that.bind(
                                        mapping.plates
                                      , typeof mapping.data === 'string' ? fetch(data, { dataKey: mapping.data }) : mapping.data || data
                                      , mapping.mapper
                                    );

                                    buffer += tagbody + that.iterate(html, partial, components, tagname, undefined, map);
                                    matchmode = true;
                                  } else {
                                    var v = newdata = fetch(data, mapping, value, tagbody, key);
                                    newdata = tagbody + newdata;

                                    if (Array.isArray(v)) {
                                      newdata = that.iterate(html, v, components, tagname, value, map);
                                      // If the item is an array, then we need to tell
                                      // Plates that we're dealing with nests
                                      that.nest.push(tagname);
                                    } else if (typeof v === 'object') {
                                      newdata = tagbody + that.iterate(html, v, components, tagname, value, map);
                                    }

                                    buffer += newdata || '';
                                    matchmode = true;
                                  }
                                }
                              }

                              return str;
                            });

                            //
                            // Do we need to create the attributes if they don't exist.
                            //
                            if (createAttribute && shouldSetAttribute && !setAttribute) {
                              var spliced = selfClosing ? 2 : 1
                                , close = selfClosing ? '/>': '>'
                                , left = tagbody.substr(0, tagbody.length - spliced);

                              if (left[left.length - 1] === ' ') {
                                left = left.substr(0, left.length - 1);

                                if (selfClosing) {
                                  close = ' ' + close;
                                }
                              }

                              tagbody = [
                                left,
                                ' ',
                                mapping.replace,
                                '="',
                                fetch(data, mapping),
                                '"',
                                close
                              ].join('');
                            }
                          }
                        } else {
                          //
                          // if there is no map, we are just looking to match
                          // the specified id to a data key in the data object.
                          //
                          tagbody.replace(this.attr, function (attr, key, q, value, idx) {
                            if (key === map && map.conf.where || 'id' && data[value]) {
                              var v = data[value],
                                  nest = Array.isArray(v),
                                  output = nest || typeof v === 'object'
                                    ? that.iterate(html.substr(left), v, components, tagname, value, map)
                                    : v;

                              // If the item is an array, then we need to tell
                              // Plates that we're dealing with nests
                              if (nest) { that.nest.push(tagname); }

                              buffer += nest ? output : tagbody + output;
                              matchmode = true;
                            }
                          });
                        }
                      }

                      //
                      // if there is currently no match in progress
                      // just write the tagbody to the buffer.
                      //
                      if (!matchmode && that.nest.length === 0) {
                        if (!remove) buffer += tagbody;

                        if (remove && !!isClosing) --remove;
                      } else if (!matchmode && that.nest.length) {
                          this.nest.pop();
                      }
                    } else if (!intag && !matchmode) {
                      //
                      // currently not inside a tag and there is no
                      // match in progress, we can write the char to
                      // the buffer.
                      //
                      if (!remove) buffer += c;
                    }
                  }
                  return buffer;
                }
              };
              //
              // Expose the Plates#bind interface.
              //
              api.bind = function bind(html, data, map) {
                var merge = new Merge();
                return merge.bind(html, data, map);
              };
              ///////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////
              return api;
            })(),
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /*-------------------------------------------------------------------
            USER INTERACTION EVENTS & HANDLER
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            MODULE SPECIFIC HELPERS
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            PUBLIC ENTITY API - SET MODULE ENTITY DEFAULT INTERFACE
          -------------------------------------------------------------------*/
            api = {
              /*---------------------------------------------------------------
                BUILD MODULE                              
              ---------------------------------------------------------------*/
              init: function initialize (settings) {
                delete api.init;
                /*-------------------------------------------------------------
                  CUSTOMIZE - module interface, internals & initialization
                -------------------------------------------------------------*/
                // just initialize something
                // or set other api.attributes
                // or return something
                // or set some global stuff
                for (var prop in PLATES) {
                  api[prop] = PLATES[prop];
                }
              }
            }
          ;
          api.id = ENTITIES.push(api);
          /*-------------------------------------------------------------------
            PUBLIC API EXPORT

              @JOB: make INIT/CONFIGURE and START one method with many params
              @JOB: make module initialization a constructor option
              
          -------------------------------------------------------------------*/
          // [Optional] initialize this module immediately
          api.init({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.META = META;
      return MODULE;
    }
    MODULENAME_API.META = META;
    return MODULENAME_API;
  })(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULE CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*-------------------------------------------------------------------------
      META

      @JOB - http://www.2ality.com/2012/10/javascript-properties.html
        (use to create the stuff below)

    -------------------------------------------------------------------------*/
    {
      NAME    : require('../package.json').name.toUpperCase(),
      VERSION : 'v' + require('../package.json').version,
    },
    /*-------------------------------------------------------------------------
      SET OF MODULE INSTANCES - only 1 if singleton

      @JOB: singleton vs factory
      
    -------------------------------------------------------------------------*/
    [],
    /*-------------------------------------------------------------------------
      DEPENDENCY TREE

        @JOB - http://www.2ality.com/2012/10/javascript-properties.html
          (use to create the stuff below)

    -------------------------------------------------------------------------*/
    (function DEPENDENCIES () {
      'use strict';
      return {
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          EXTERNAL DEPENDENCIES                                  (others legos)
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          INTERNAL DEPENDENCIES                                      (my legos)
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*---------------------------------------------------------------------
          e.g. INTERNAL MODULE - nameOfInternalModule1
          (copy structure of this file)
        ---------------------------------------------------------------------*/
      };
    })()
  )
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

},{"../package.json":14}],14:[function(require,module,exports){
module.exports={
  "name": "plates",
  "version": "0.4.12",
  "description": "Unobtrusive templating for the flatiron framework",
  "keywords": [
    "templates",
    "templating",
    "unobtrusive"
  ],
  "author": {
    "name": "Nodejitsu Inc.",
    "email": "info@nodejitsu.com"
  },
  "license": "MIT",
  "repository": [
    {
      "type": "git",
      "url": "git://github.com/flatiron/plates.git"
    }
  ],
  "devDependencies": {
    "vows": "0.7.x",
    "mustache": "0.4.x",
    "benchmark": "0.2.x"
  },
  "scripts": {
    "test": "vows --spec test/api-test.js"
  },
  "engines": [
    "node"
  ],
  "main": "./lib/plates.js",
  "readme": "![plates](https://github.com/flatiron/plates/raw/master/plates.png)\n\n# Synopsis\nPlates (short for templates) binds data to markup. Plates has NO special syntax. It works in the browser and in [Node.js](http://nodejs.org/).\n\n# Motivation\n- DSLs (Domain Specific Languages) such as <%=foo%> or {{foo}} reduce portability.\n- DOM templating is SLOW.\n- Promote the separation of concerns principle by decoupling decision making from presentation.\n- Make both the code and markup more readable and maintainable by a wider audience.\n\n# Status\n\n[![Build Status](https://secure.travis-ci.org/flatiron/plates.png)](http://travis-ci.org/flatiron/plates)\n\n# Features\n- Automatically bind data to a tag's body by matching unique tag IDs to data keys.\n- Bind data to a tag's body based on any attribute's values.\n- Bind data to a tag's attribute based on any attribute's values.\n\n- TODO: Specify option to create attribute if it does not exist.\n\n# Installation\nThere are a few ways to use `plates`. Install the library using npm. You can add\nit to your `package.json` file as a dependancy, or include the script in your\nHTML page.\n\n# Usage\n\n## Simple case\nBy default, `plates` will try to match the key in the data to an `id` in the\ntag, since both should be unique.\n\n```js\nvar Plates = require('plates');\n\nvar html = '<div id=\"test\">Old Value</div>';\nvar data = { \"test\": \"New Value\" };\n\nvar output = Plates.bind(html, data); \n```\n\n## Explicit instructions\nA common use case is to apply the new value to each tag's body based on the\n`class` attribute.\n\n```js\nvar html = '<span class=\"name\">User</span>...<span class=\"name\">User</span>';\n\nvar data = { \"username\": \"John Smith\" };\nvar map = Plates.Map();\n\nmap.class('name').to('username');\n\nconsole.log(Plates.bind(html, data, map));\n```\n\n## Complex instructions\nAnother common case is to replace the value of an attribute if it is a match.\n\n```js\nvar html = '<a href=\"/\"></a>';\n\nvar data = { \"newurl\": \"http://www.nodejitsu.com\" };\nvar map = Plates.Map();\n\nmap.where('href').is('/').insert('newurl');\n\nconsole.log(Plates.bind(html, data, map));\n```\n\nPartial value replacement\n\n```js\nvar html = '<a href=\"/foo/bar\"></a>';\n\nvar data = { \"newurl\": \"bazz\" };\nvar map = Plates.Map();\n\nmap.where('href').has(/bar/).insert('newurl'); // `has` can take a regular expression.\n\nconsole.log(Plates.bind(html, data, map));\n```\n\nIn even more complex cases, an arbitrary attribute can be specified. If a value\nis matched, a specific value can be used and then used as another attribute's\nvalue.\n\n```js\nvar html = '<img data-foo=\"bar\" src=\"\"></img>';\n\nvar data = { \"imageurl\": \"http://www.nodejitsu.com\" };\nvar map = Plates.Map();\n\nmap.where('data-foo').is('bar').use('imageurl').as('src');\n\nconsole.log(Plates.bind(html, data, map));\n```\n\n## Collections\n\nPlates can also iterate through collections:\n\n```js\nvar html = '<div class=\"name\"></div>';\nvar collection = [\n  {'name': 'Louis CK'},\n  {'name': 'Andy Kindler'},\n  {'name': 'Greg Giraldo'}\n];\n\nconsole.log(Plates.bind(html, collection));\n```\n\n## Partials\n\nPlates also supports partials:\n\n```js\nvar partial = '<li class=\"partial\"></li>';\nvar base = '<div><h1 class=\"foo\"></h1><ul class=\"menu\"></ul></div>';\n\nvar baseData = { foo: 'bar' };\nvar mapping = Plates.Map();\n\nmapping.class('menu').append(partial);\nconsole.log(Plates.bind(base, baseData, mapping));\n```\n\n# API\n\n## Plates Static Methods\n\n```\nfunction Plates.bind(html, data, map)\n@param html {String} A string of well-formed HTML.\n@param data {Object} A JSON object.\n@param map {Object} An instance of `Plates.Map()`.\n\n@return {String} The result of merging the data and html.\n```\n\n## Map Constructor\n\n```\nfunction Plates.Map(options)\n@options {Object} An object literal that contains configuration options.\n  - @option where {String} The default attribute to match on instead of ID.\n  - @option as {String} The default attribute to replace into.\n@return {Object} An object that represents a reusable map, has mapping methods.\n```\n\n## Map Instance Methods\n\n### where()\n\n```\nfunction Map#where(attribute)\n@param attribute {String} An attribute that may be found in a tag.\n\nThis method will initiate a clause. Once a clause has been established,\nother member methods may be chained to each other in any order.\n```\n\n### class(), className()\n\n```\nfunction Map#class(attribute)\n@param attribute {String} A value that may be found in the `class` attribute of a tag.\n```\n\n### is()\n\n```\nfunction Map#is(value)\n@param value {String} The value of the attribute specified in the `where` clause.\n```\n\n### has()\n\n```\nfunction Map#has(value)\n@param value {String|RegExp} The value of the attribute specified in the `where` clause.\n```\n\n### insert()\n\n```\nfunction Map#insert(attribute)\n@param attribute {String} A string that represents a key. Data will be inserted into \nthe attribute that was specified in the `where` clause.\n```\n\n### use()\n\n```\nfunction Map#use(key)\n@param key {String|Function} A string that represents a key in the data object that was provided or a function which returns a string value to use.\n\nIf a function is provided, it will be passed data, value and tagbody parameters.\n```\n\n### to()\n\n```\nfunction Map#to(key)\n@param key {String|Function} A string that represents a key in the data object that was provided or a function which returns a string value to use.\n\nIf a function is provided, it will be passed data, value and tagbody parameters.\n\nSame as `use` method.\n```\n\n### as()\n\n```\nfunction Map#as(attribute)\n@param attribute {String} A string that represents an attribute in the tag.\n\nIf there is no attribute by that name found, one may be created depending on the options\nthat were passed to the `Map` constructor.\n```\n\n### remove()\n\n```\nfunction Map#remove()\n\nRemoves the matching elements from the template.\n```\n\n### append(), partial()\n\n```\nfunction Map#append(html, data, map)\n@param html {String} A string that represents the new template that needs to be\nadded.\n@param data {Mixed} data for the partial, if it's a string it's a reference to a\nkey in the data structure that was supplied to the main template.\n@param map {Plates.Map} data mapping for the partial.\n\nIf the supplied HTML string doesn't contain any HTML markup we assume that we\nthe given string is the location of the template. When you are using Plates on\nthe browser is assumes that you supplied it with an id selector and will fetch\nthe innerHTML from the element. If you are using Plates in Node.js it assumes\nthat you gave it a file path that is relative to the current working directory.\n```\n\n# License\n\n(The MIT License)\n\nCopyright (c) 2011 Nodejitsu Inc. http://www.twitter.com/nodejitsu\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the 'Software'), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
  "readmeFilename": "README.md",
  "_id": "plates@0.4.12",
  "_shasum": "8ebcfce150ae6bd38a75d45e05fb33f8e95c4c8f",
  "_resolved": "git://github.com/coding-amigos/plates#9421464510531147f3b0381197bd3b8bf5e29fb7",
  "_from": "plates@git://github.com/coding-amigos/plates#v0.4.12"
}

},{}],15:[function(require,module,exports){
module.exports={
  "name": "holon",
  "version": "0.0.6",
  "description": "Leight-weight DSL-free dual-side composable reactive components",
  "main": "SOURCE/index.js",
  "homepage": "https://github.com/coding-amigos/holon",
  "keywords": [
    "dual-side",
    "composable",
    "reactive",
    "component",
    "components",
    "template",
    "templating",
    "module",
    "dual",
    "side",
    "partial",
    "partials"
  ],
  "author": "",
  "scripts": {
    "todo": "http://browsenpm.org/package.json",
    "todo2": "https://www.npmjs.org/doc/files/package.json.html",
    "help": "#describe all npm tasks - http://anders.janmyr.com/2014/03/running-scripts-with-npm.html + http://substack.net/task_automation_with_npm_run",
    "jobs": "#list jobs + description on how to start working on one + how to stop development",
    "develop": "#checkout job branch + stylus & watch & testem + how to stop development",
    "deploy": "#build + run all tests + git push if successful AND ... what about docker???",
    "release": "#build through browserify, test all + if successful: uglify + semver + push with tags + NOT npm publish, bower register, ....",
    "test": "echo \"Error: no test specified\" && exit 1 #run testem",
    "spec": "npm run test",
    "uglify": "#https://github.com/hughsk/uglifyify",
    "stuff": "#echo v$(cat package.json | grep version | grep -Po '(?<=version\": \").*(?=\")'), npm run serve, npm run spec",
    "start": "node_modules/atomify/bin/atomify.js"
  },
  "atomify": {
    "server": {
      "port": 1337,
      "open": true,
      "url": "http://localhost:1337/",
      "lr": {
        "verbose": true,
        "quiet": false,
        "patterns": [],
        "port": 31337,
        "sync": {
          "clicks": false,
          "location": false,
          "forms": false,
          "scroll": false
        }
      },
      "st": {
        "path": "./",
        "cache": false,
        "index": "index.html",
        "dot": false,
        "passthrough": false,
        "gzip": true
      }
    },
    "js": {
      "entry": "SOURCE/index.js",
      "alias": "RELEASE/LIBRARY.bundle.js",
      "output": "RELEASE/LIBRARY.bundle.js",
      "debug": true,
      "transforms": [],
      "standalone": "LIBRARY"
    }
  },
  "engines": {
    "node": ">= 0.10.25"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/coding-amigos/holon.git"
  },
  "bugs": {
    "url": "https://github.com/coding-amigos/holon/issues"
  },
  "licenses": [
    {
      "type": "CC0",
      "url": "http://creativecommons.org/publicdomain/zero/1.0/"
    }
  ],
  "license": "CC0",
  "dependencies": {
    "plates": "git://github.com/coding-amigos/plates#v0.4.12"
  },
  "devDependencies": {
    "atomify": "^3.2.0"
  },
  "optionalDependencies": {},
  "peerDependencies": {},
  "readme": "table of content\n=======\n* [introduction](#holon)\n* [demo](#demo)\n* [usage](#usage)\n* [api](#api)\n* [authors](#authors)\n* [jobs](#jobs)\n* [contribute](#contribute)\n* [repository description](#repository)\n* [license](#license)\n\n\n\n\nholon\n=====\n[[back to top](#table-of-content)]\n\nLeight-weight DSL-free dual-side composable reactive components\n![holon](https://raw.github.com/coding-amigos/holon/master/holon.png)\n\n\n\n\ndemo\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\nusage\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\ninstall with [npm](http://npmjs.org) do:\n\n```\nnpm install holon\n```\ninstall with [bower](http://bower.io) do:\n\n```\nbower install holon\n```\ninstall with [git](http://git-scm.com/) do:\n\n```\ngit clone https://github.com/coding-amigos/holon.git\n```\n\n\n\n\napi\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\nauthors\n=======\n[[back to top](#table-of-content)]\n\n* [serapath](https://github.com/serapath \"Alexander Praetorius\")\n\n\n\n\njobs\n=======\n[[back to top](#table-of-content)]\n\nThere is more jobs in the source code marked with `// @TODO: <job description>` and eventually some jobs might be listed under the [holon issues](https://github.com/coding-amigos/holon/issues \"holon - open issues\") page, which can also be accessed through [waffle.io](https://waffle.io/coding-amigos/holon \"holon - open issues\").\n* __@TODO:__ Publish it as a component\n  * http://modernweb.com/2014/02/17/introduction-to-the-component-javascript-package-manager/\n  * https://github.com/component/component/wiki/Components\n* __@TODO:__ Create a Github Page\n  * https://github.com/jekyll/jekyll\n  * https://help.github.com/categories/20/articles\n* __@TODO:__ Include Testing via \"Specification Driven Development\" using gherkin dsl & TESTEM\n  * https://github.com/cucumber/cucumber/wiki/Gherkin\n  * https://github.com/airportyh/testem\n* __@TODO:__ Add 'Leight-weight DSL-free dual-side composable \"BEMified\" reactive components' + more verbose description to README.markdown\n* __@TODO:__ Edit all 'under construction sections' in README.markdown (at least add \"@TODO's\" for them to the \"Jobs Section\")\n* __@TODO:__ Add CHANGELOG File\n* __@TODO:__ This section should instead list all the TODO-Branches currently available + a link to the \"TODO Description file in that branch\"\n  * The README.markdown in that branch could list the description under the \"jobs section\"\n* __@TODO:__ add workflow description\n  * http://www.wolfe.id.au/2014/02/01/getting-a-new-node-project-started-with-npm/ \n  * http://quickleft.com/blog/creating-and-publishing-a-node-js-module\n  * http://www.devthought.com/2012/02/17/npm-tricks/\n* __@TODO:__ find convention for branch names, e.g. {CA-1}{SPIKE}{jeet.gs} and COMMIT NAMES\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\ncontribute\n=======\n[[back to top](#table-of-content)]\n\n### PREPARE SYSTEM\n  * install [git](http://git-scm.com \"git\") if it is not yet installed on your system\n  * install [node](http://nodejs.org \"nodejs\") if it is not yet installed on your system\n  * open a terminal on your system and navigate to your favourite workspace folder\n    * _(you might need to prefix some of the following commands with `sudo` to make them work)_\n\n### START PREPARING HOLON PROJECT\n* `git clone https://github.com/coding-amigos/holon.git`\n* `npm install -g bower bower-installer stylus nib jeet rupture`\n* `npm install && bower install`\n* `npm update`\n* `stylus -u jeet -u nib -rupture -w holon.styl`\n* load main HTML project file by opening and pointing your browser to:\n  * a server that serves the `./DEMO/dev.html` file _(e.g. localhost:3000/DEMO/dev.html)_\n  * or doubleclick `./DEMO/dev.html` file to open it directly in your browser\n    * __HINT:__ this only works with CORS disabled. In order to do so:\n      * mac osx `open -a Google\\ Chrome --args --disable-web-security`\n      * linux `google-chrome --disable-web-security`\n      * windows `chrome.exe --disable-web-security`\n\n__... HAPPY CODING :-)__\n\n\n\n\nrepository\n==========\n[[back to top](#table-of-content)]\n\n1. __`./`__\n  * Contains meta data about this component\n2. __`./DEMO`__\n  * Contains a file that demonstrate how to use this component in your project\n3. __`./DEPENDENCIES`__\n  * Contains all internal dependencies used by this component, but not yet published to their own repositories\n4. __`./RELEASE`__\n  * Contains production ready versions of this component which are used by examples in `./DEMO`\n  * __CDNs:__ `v0.0.3@git`, `v0.0.2@npm`, `v0.0.2@bower`\n5. __`./SOURCE`__\n  * Contains all the source files for this component\n6. __`./SOURCE/media`__\n  * Contains fonts, images, videos, music and the like, used by this component\n7. __`./SPECIFICATION`__\n  * Contains the vision, roadmap, open jobs and tests for completed jobs regarding this component\n8. __`./WORKBENCH`__\n  * Contains some experimental stuff for inspiration to \"spike\" the use of certain technologies to develop this component further\n\n\n\n\nlicense\n=======\n[[back to top](#table-of-content)]\n\n<p xmlns:dct=\"http://purl.org/dc/terms/\" xmlns:vcard=\"http://www.w3.org/2001/vcard-rdf/3.0#\">\n  <a rel=\"license\"\n     href=\"http://creativecommons.org/publicdomain/zero/1.0/\">\n    <img src=\"https://raw.github.com/coding-amigos/holon/master/cc0.png\" style=\"border-style: none;\" alt=\"CC0 1.0 Universal\" />\n  </a>\n  <br />\n  To the extent possible under law,\n  <a rel=\"dct:publisher\"\n     href=\"http://www.serapath.de\">\n    <span property=\"dct:title\">Alexander Praetorius</span></a>\n  has waived all copyright and related or neighboring rights to\n  <span property=\"dct:title\">holon</span>.\nThis work is published from:\n<span property=\"vcard:Country\" datatype=\"dct:ISO3166\"\n      content=\"DE\" about=\"http://www.serapath.de\">\n  Germany</span>.\n</p>\n\n[...more information](https://raw.github.com/coding-amigos/holon/master/LICENSE \"CC0 1.0 Universal\")\n",
  "readmeFilename": "README.markdown",
  "_id": "holon@0.0.6",
  "_shasum": "e7f047ca62d25ce95f3fc97ddd0a83ade6426491",
  "_resolved": "git://github.com/coding-amigos/holon#4befc64b75944ea0462e81e92d54a60a5d14b813",
  "_from": "holon@git://github.com/coding-amigos/holon#v0.0.6"
}

},{}],16:[function(require,module,exports){
module.exports={
  "name": "LeadShareAppFrontend",
  "version": "0.0.8",
  "description": "[LIBRARY] - Frontend for https://github.com/ninabreznik/LeadShareApp.git",
  "style": "SOURCE/index.css",
  "main": "SOURCE/index.js",
  "directories": {
    "test": "SPECIFICATION"
  },
  "scripts": {
    "todo": "http://browsenpm.org/package.json",
    "todo2": "https://www.npmjs.org/doc/files/package.json.html",
    "help": "#describe all npm tasks - http://anders.janmyr.com/2014/03/running-scripts-with-npm.html + http://substack.net/task_automation_with_npm_run",
    "jobs": "#list jobs + description on how to start working on one + how to stop development",
    "develop": "#checkout job branch + stylus & watch & testem + how to stop development",
    "deploy": "#build + run all tests + git push if successful AND ... what about docker???",
    "release": "#build through browserify, test all + if successful: uglify + semver + push with tags + NOT npm publish, bower register, ....",
    "test": "echo \"Error: no test specified\" && exit 1 #run testem",
    "spec": "npm run test",
    "uglify": "#https://github.com/hughsk/uglifyify",
    "stuff": "#echo v$(cat package.json | grep version | grep -Po '(?<=version\": \").*(?=\")'), npm run serve, npm run spec",
    "stylus": "node_modules/stylus/bin/stylus --watch SOURCE/index.styl --use ./node_modules/autoprefixer-stylus --resolve-url --compress --out SOURCE/",
    "start": "npm run stylus & node_modules/atomify/bin/atomify.js"
  },
  "atomify": {
    "server": {
      "port": 1337,
      "open": true,
      "url": "http://localhost:1337/",
      "lr": {
        "verbose": true,
        "quiet": false,
        "patterns": [
          "RELEASE/APP.bundle.css"
        ],
        "port": 31337,
        "sync": true
      },
      "st": {
        "path": "./",
        "cache": false,
        "index": "index.html",
        "dot": false,
        "passthrough": false,
        "gzip": true
      }
    },
    "js": {
      "entry": "SOURCE/index.js",
      "alias": "RELEASE/APP.bundle.js",
      "output": "RELEASE/APP.bundle.js",
      "debug": true,
      "transforms": [],
      "standalone": "APP"
    },
    "css": {
      "entry": "SOURCE/index.css",
      "alias": "RELEASE/APP.bundle.css",
      "output": "RELEASE/APP.bundle.css",
      "debug": true,
      "watch": true,
      "compress": true,
      "plugins": [],
      "variables": {}
    },
    "assets": {
      "dest": "RELEASE/assets/",
      "prefix": "assets/",
      "retainName": false
    }
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/coding-amigos/LeadShareAppFrontend.git"
  },
  "keywords": [
    "lead",
    "leads",
    "campaign",
    "campaign",
    "google",
    "ads",
    "adwords"
  ],
  "engines": {
    "node": ">= 0.10.25"
  },
  "author": "",
  "contributors": [
    {
      "name": "Alexander Praetorius",
      "email": "dev@serapath.de",
      "url": "https://github.com/serapath"
    }
  ],
  "licenses": [
    {
      "type": "CC BY-NC-ND 4.0",
      "url": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
    }
  ],
  "license": "CC BY-NC-ND 4.0",
  "bugs": {
    "url": "https://github.com/coding-amigos/LeadShareAppFrontend/issues"
  },
  "homepage": "https://codingamigos.com/LeadShareAppFrontend",
  "private": true,
  "dependencies": {
    "autoprefixer-stylus": "^0.3.0",
    "axis": "^0.2.1",
    "font-awesome": "^4.1.0",
    "holon": "git://github.com/coding-amigos/holon#v0.0.6",
    "jeet": "^5.3.0",
    "nib": "^1.0.3",
    "rupture": "^0.3.1",
    "stylus": "^0.48.1",
    "typographic": "^0.1.0"
  },
  "devDependencies": {
    "atomify": "git://github.com/serapath/atomify"
  },
  "optionalDependencies": {},
  "peerDependencies": {},
  "readme": "table of content\n=======\n* [introduction](#leadshareappfrontend)\n* [demo](#demo)\n* [usage](#usage)\n* [api](#api)\n* [authors](#authors)\n* [jobs](#jobs)\n* [contribute](#contribute)\n* [repository description](#repository)\n* [license](#license)\n\n\n\n\nLeadShareAppFrontend\n=====\n[[back to top](#table-of-content)]\n\nFrontend for https://github.com/ninabreznik/LeadShareApp.git\n\n\n\n\ndemo\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\nusage\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\napi\n=======\n[[back to top](#table-of-content)]\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\nauthors\n=======\n[[back to top](#table-of-content)]\n\n* [serapath](https://github.com/serapath \"Alexander Praetorius\")\n\n\n\n\njobs\n=======\n[[back to top](#table-of-content)]\n\nThere is more jobs in the source code marked with `// @TODO: <job description>` and eventually some jobs might be listed under the [LeadShareAppFrontend issues](https://github.com/ninabreznik/LeadShareAppFrontend/issues \"LeadShareAppFrontend - open issues\") page, which can also be accessed through [waffle.io](https://waffle.io/ninabreznik/LeadShareAppFrontend \"LeadShareAppFrontend - open issues\").\n1. __@TODO:__ Create a Github Page\n  * https://github.com/jekyll/jekyll\n  * https://help.github.com/categories/20/articles\n1. __@TODO:__ Include Testing via \"Specification Driven Development\" using gherkin dsl & TESTEM\n  * https://github.com/cucumber/cucumber/wiki/Gherkin\n  * npm install mocha --save-dev\n  * npm install chai --save-dev\n  * https://github.com/airportyh/testem\n* __@TODO:__ Add CHANGELOG File\n* __@TODO:__ This section should instead list all the TODO-Branches currently available + a link to the \"TODO Description file in that branch\"\n  * The README.markdown in that branch could list the description under the \"jobs section\"\n* __@TODO:__ create NGEN to codify saffolding and devops continuous delivery workflow\n  * http://www.wolfe.id.au/2014/02/01/getting-a-new-node-project-started-with-npm/ \n  * http://quickleft.com/blog/creating-and-publishing-a-node-js-module\n  * http://www.devthought.com/2012/02/17/npm-tricks/\n* __@TODO:__ after `npm install assetgraph`\n  1. Read about ASSET GRAPH\n  2. Use Asset Graph Commandline\n    * (if fail)\n    * => read ASSET GRAPH again and use with a script + node debug inspector\n  3. load fonts and other assets in local project\n  4. load fonts and other assets in dependent projects\n* __@TODO:__ add to 'holon' and all 'holon' based modules a file, which contains the repo of all dependencies and maybe more nodes\n  * + it contains a command line search programm to discover and install those modules and those modules contain also other repos\n  * => thus: basically allholoon repos of all dependencies are watched for \"favourite holon modules\" of their authors, so they help\n  * to make 'holons' discoverable\n* __@TODO:__ a console.log statement that describe how to make 'requests' for INTERFACE (Events/Api) changes\n* __@TODO:__ put todos in README.md under /jobs and link it from the main README.md\n* __@TODO:__ TODOs should reference their ISSUES and a \"deamon\" should scan and sync README.md @TODO's with CODE COMMENTS and GITHUB ISSUES\n* __@TODO:__ ...\n  * FIX ATOMIFY: use atomify in LeadShareApp to compile it there\n  * FIX LeadShareAppFrontend /DEMO/styleguide.html\n\n  * FIX gh-pages in sync with atomifies dev-server in sync with /DEMO/styleguide.html in sync with LeadShareApp Usage\n  * Google for \"UI STATE\" encoding in URL (maybe with \"zipping/unzipping\")\n  * FIX development description\n  * Use NGEN to create new projects and use this as \"example\"\n* __@TODO:__ UBER-NGEN GENERATOR for HOLONs schreiben\n\n\n\n\n\ncontribute\n=======\n[[back to top](#table-of-content)]\n\n### PREPARE SYSTEM\n  * install [git](http://git-scm.com \"git\") if it is not yet installed on your system\n  * install [node](http://nodejs.org \"nodejs\") if it is not yet installed on your system\n  * open a terminal on your system and navigate to your favourite workspace folder\n    * _(you might need to prefix some of the following commands with `sudo` to make them work)_\n\n### START PREPARING LEADSHAREAPPFRONTEND PROJECT\nOpen a terminal and go to a folder which you choose as your development folder, e.g. `cd ~ && mkdir workspace && cd workspace`.\n* `git clone https://github.com/ninabreznik/LeadShareAppFrontend.git`\n* `npm install -g stylus nib jeet rupture`\n* `npm install`\n* `npm update`\n* change `node_modules/atomify/node_modules/atomify-css/css.js` and after `line 47` add `, retainName: false`\n* change `node_modules/atomify/node_modules/atomify-js/index.js` and after `line 89` add `, retainName: false`\n* `npm start`\n* `subl .`\n* load main HTML project file by opening and pointing your browser to:\n  * `./DEMO/dev.html` file, for example, by doubleclicking it\n    * __HINT1:__ this might only works with CORS disabled. In order to do so:\n      * mac osx `open -a Google\\ Chrome --args --disable-web-security`\n      * linux `google-chrome --disable-web-security`\n      * windows `chrome.exe --disable-web-security`\n\n__... HAPPY CODING :-)__\n\n\n### How to shorten feedback cycles during development\n(Process to use for projects, where dependencies projects have to be developed in parallel to the main project)\nIn order to use changes made in a dependency project, they have to be commited and pushed and the version has to be increased and published.\nAfterwards, in the main project, the version for the updated dependency has to be adapted in `package.json` and `npm install` has to be run.\nThat is a lot of hassle to be done for each change.\n\n\n### Solution\n__Given:__ \"Main Project\" and \"Dependency Project\" are both `git clone`'ed to the local developer machine.\n__Process:__\n0. Open all those Project Folders in sublime editor and then use the terminal to...\n1. Go to the \"Dependency Project\" repository and increase the \"Version Number\" in the `package.json` file, but don't `git push`.\n2. Run `npm link` in the root directory of the \"Dependency Project\" repository.\n3. Go to the \"Main Project\" repository and increase the \"Version Number\" of the \"Dependency Project\" in the `package.json` file.\n4. Run `npm link 'dependency name'` in the root directory of the \"Main Project\" repository.\nThat's it, execute `npm start` in the \"Main Project\" repository and start hacking...\n\n__Finishing:__ After all changes are done to both projects and you are satisfied with the result...\n1. Go to the \"Main Project\" repository and run `npm link 'dependency name'` in the root directory.\n2. Go to the \"Dependency Project\" repository and run `npm unlink` in the root directory.\n3. Then `git commit` and `git push` all the changes to publish the new version.\n4. Go to the \"Main Project\" repository and run `npm install` to get the new version of the dependency you just updated.\n\nThat's it.\n\n\n\n\nrepository\n=======\n[[back to top](#table-of-content)]\n\n* @TODO: put reference to README.markdown of sub directories in here\n\n__☠☠☠ section is under construction ☠☠☠__\n\n\n\n\n\nlicense\n=======\n[[back to top](#table-of-content)]\n\n![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png \"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License\")\n\nThis work is licensed under <a rel=\"license\" href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode\" alt=\"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License\">`CC BY-NC-ND 4.0`</a>.\n\n__In short - you are free to:__\n\n* __Share__ — copy and redistribute the material in any medium or format\nThe licensor cannot revoke these freedoms as long as you follow the license terms.\nUnder the following terms:\n\n* __Attribution__ — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.\nNonCommercial — You may not use the material for commercial purposes.\n\n* __NoDerivatives__ — If you remix, transform, or build upon the material, you may not distribute the modified material.\nNo additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.\nNotices:\n\nYou do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.\n\nNo warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.\n\n[...more information](https://raw.github.com/ninabreznik/LeadShareAppFrontend/master/LICENSE \"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License\")\n",
  "readmeFilename": "README.markdown",
  "_id": "LeadShareAppFrontend@0.0.8",
  "_shasum": "0dbdc8f7b4a87741c9afe4783aac918af7ad2f76",
  "_resolved": "git://github.com/coding-amigos/LeadShareAppFrontend#2e7ff782f22e52d9d9c715c8aa65b324ee6c4e89",
  "_from": "LeadShareAppFrontend@git://github.com/coding-amigos/LeadShareAppFrontend#v0.0.8"
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9hdG9taWZ5L25vZGVfbW9kdWxlcy9hdG9taWZ5LWpzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2luZGV4LmpzIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL1NPVVJDRS9DT05UUkFDVC5qcyIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9TT1VSQ0UvY2FtcGFpZ24udGVtcGxhdGUuaHRtbCIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9TT1VSQ0UvaW5kZXguanMiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL2luZGV4LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9NQUlOLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIxLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIyLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIzLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUI0LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUI1LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2hvbG9uL1NPVVJDRS9pbmRleC5qcyIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9ub2RlX21vZHVsZXMvaG9sb24vbm9kZV9tb2R1bGVzL3BsYXRlcy9saWIvcGxhdGVzLmpzIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL25vZGVfbW9kdWxlcy9ob2xvbi9ub2RlX21vZHVsZXMvcGxhdGVzL3BhY2thZ2UuanNvbiIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9ub2RlX21vZHVsZXMvaG9sb24vcGFja2FnZS5qc29uIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL3BhY2thZ2UuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdnRCQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIkFQUCA9IHJlcXVpcmUoJ0xlYWRTaGFyZUFwcEZyb250ZW5kJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENPTlRSQUNUX1ZBTElEQVRFIChwYXJhbXMpIHtcbi8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgQ09OVFJBQ1RcbiAgICAtIEVWRU5UUyAgICAgID0+IC4uLi4gREFUQSBTRU5EL0VNSVQgKEFqYXgvV2Vic29ja2V0cylcbiAgICAtIEFQSSBNRVRIT0RTID0+IC4uLi4gREFUQSBSRUNFSVZFIChXZWJzb2NrZXRzKVxuICAgIC0gSU5JVCAgICAgICAgPT4gLi4uLiBEQVRBIFJFQ0VJVkUgKHBhZ2UgbG9hZClcbjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbnZhciBDT05UUkFDVCA9IHtcbiAgY2FtcGFpZ24gICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgbGVhZCAgICAgICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgdXNlciAgICAgICAgICAgICAgOiB7XG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgZW1haWwgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgcmVsYXRpb25zaGlwICAgICAgOiB7XG4gICAgY29vd25lZF9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY29vd25lcl9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfVxufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgRVhBTVBMRSA9IHtcbiAgaWQgICAgICAgICAgOiAxLFxuICB2b3JuYW1lICAgICA6ICdOaW5hJyxcbiAgbmFjaG5hbWUgICAgOiAnQnJlem5paycsXG4gIG5hbWUgICAgICAgIDogJ05pbmEgQnJlem5paycsXG4gIGdlYnVydHN0YWcgIDogJzAyLjA1LjE5ODEnLFxuICBhbHRlciAgICAgICA6IDMzLFxuICBnZXNjaGxlY2h0ICA6ICd3ZWlibGljaCcsXG4gIGZvdG8gICAgICAgIDogJ2h0dHA6Ly9iZXRhMi5maW5hbmNlLnNpL3BpY3MvY2FjaGVfRjUvRjU4RVVfYnJlem5pa19uaW5hX2loLjEyMTkwNzU3MjQuanBnJyxcbiAgc3RhdHVzICAgICAgOiAnYmV6aWVodW5nJyxcbiAgZW1haWwgICAgICAgOiAnbmluYWJyZXpuaWtAZ21haWwuY29tJyxcbiAgdGVsZWZvbiAgICAgOiAnMDE3MSAyODgzNzMyJyxcbiAgd29obm9ydCAgICAgOiAnQmVybGluJyxcbiAgc3RyYXNzZSAgICAgOiAnSmFibG9uc2tpc3RyYXNzZSAyNCcsXG4gIGhlcmt1bmZ0ICAgIDogJ1Nsb3ZlbmllbicsXG4gIGhvYmJpZXMgICAgIDogWyAndGFuemVuJywgJ2tsZXR0ZXJuJywgJ2dpdGFycmUnLCAna29jaGVuJywgJ2pvZ2dlbicsICd5b2dhJyBdLFxuICBmYW1pbGllICAgICA6IHtcbiAgICB2YXRlciAgICAgICA6ICd1bmJla2FubnQnLFxuICAgIG11dHRlciAgICAgIDogJ3VuYmVrYW5udCcsXG4gICAgYnJ1ZGVyICAgICAgOiAnUm9rJ1xuICB9LFxuICB3ZWJzaXRlICAgICA6ICdodHRwOi8vd3d3Lm5pbmFicmV6bmlrLmNvbSdcbn07XG5cbnZhciBJVEVNID0geyAnbmFtZSc6ICd2YWx1ZScgfTtcblxudmFyIENPTlRSQUNUID0geyAvLyBEQVRBIENPTlRSQUNUXG4gIGNhbXBhaWduICAgICAgICAgIDoge1xuICAgIGJ1ZGdldCAgICAgICAgICAgIDogZnVuY3Rpb24gZHVja3R5cGUgKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInOyB9LCAvLyBJVEVNIENPTlRSQUNUXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgbGVhZCAgICAgICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgdXNlciAgICAgICAgICAgICAgOiB7XG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgZW1haWwgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgcmVsYXRpb25zaGlwICAgICAgOiB7XG4gICAgY29vd25lZF9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY29vd25lcl9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfVxufTtcblxuXG52YXIgaXRlbUNvbnRyYWN0ID0geyAvLyBpdGVtIGNvbnRyYWN0cyBzaG91bGQgYmUgdGVzdGFibGUgZm9yIGNvbXBsZXRlbmVzc1xuICBzZXJ2ZXIyY2xpZW50IDogZnVuY3Rpb24gc2VydmVyMmNsaWVudCAoKSB7fSxcbiAgdmFsaWRhdGUgICAgICA6IGZ1bmN0aW9uIGR1Y2t0eXBlICgpIHt9LFxuICB0cmFuc2Zvcm0gICAgIDogZnVuY3Rpb24gdHJhbnNmb3JtIChkYXRhKSB7fSxcbiAgbWFwICAgICAgICAgICA6IGZ1bmN0aW9uIG1hcCAoZGF0YSkge30sXG4gIHVubWFwICAgICAgICAgOiBmdW5jdGlvbiB1bm1hcCAoZGF0YSkge30sXG4gIHVudHJhbnNmb3JtICAgOiBmdW5jdGlvbiB1bnRyYW5zZm9ybSAoZGF0YSkge30sXG4gIGNsaWVudDJzZXJ2ZXIgOiBmdW5jdGlvbiBjbGllbnQyc2VydmVyICgpIHt9LFxuICBlbXB0eVNhbXBsZSAgIDogJycsXG4gIHNhbXBsZSAgICAgICAgOiAnJyxcbiAgZ2VuZXJhdGVTYW1wbGU6IGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlICgpIHt9LFxuICBzdGF0aWN0eXBlICAgIDogZnVuY3Rpb24gdHlwZU9mICgpIHt9LFxuICByaWdodHMgICAgICAgIDogeyAvLyByaWdodHMgc2hvdWxkIGJlIHRlc3RhYmxlIChPYmplY3QuZGVmaW5lUHJvcGVydHkuLi4pXG4gICAgY3JlYXRlICAgICAgICA6ICcnLFxuICAgIHJlYWQgICAgICAgICAgOiAnJyxcbiAgICB1cGRhdGUgICAgICAgIDogJycsXG4gICAgZGVzdHJveSAgICAgICA6ICcnXG4gIH0sXG4gIG5hbWUgICAgICAgICAgOiAnJ1xufTtcblxuXG4vLyB2YXIgQ09OVFJBQ1QgPSAge1xuLy8gICBTRVJWRVIyQ0xJRU5UIDogZnVuY3Rpb24gc2VydmVyMmNsaWVudCAoKSB7fSxcbi8vICAgQ0xJRU5UMlNFUlZFUiA6IGZ1bmN0aW9uIGNsaWVudDJzZXJ2ZXIgKCkge30sXG4vLyAgIFZBTElEQVRFICAgICAgOiBmdW5jdGlvbiBWQUxJREFURSAocGFyYW1zKSB7XG4vLyAgICAgZGVidWdnZXI7XG4vLyAgICAgLy8gIUlNUE9SVEFOVCFcbi8vICAgICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyB0byB3b3JrIGluIGFsbCBqYXZhc2NyaXB0IGVudmlyb25tZW50cyFcbi8vICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ21vcmUgaW5mb3JtYXRpb24gYWJvdXQgd3JvbmduZXNzIG9mIGRhdGEnKTtcbi8vXG4vLyAgICAgdmFyIHBhcmFtcyA9IHtcbi8vICAgICAgIFwiZGF0YVwiOltcbi8vICAgICAgICAge1widGl0bGVcIjpcIkR1bW15MVwiLFwiZGVzY3JpcHRpb25cIjpcIlRoaXMgaXMgZHVtbXkgMVwiLFwiY291bnRlclwiOjF9LFxuLy8gICAgICAgICB7XCJ0aXRsZVwiOlwiRHVtbXkyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBpcyBkdW1teSAyXCIsXCJjb3VudGVyXCI6Mn1cbi8vICAgICAgIF0sXG4vLyAgICAgICBcImNvbGxlY3Rpb25cIjp7XG4vLyAgICAgICAgIFwidGl0bGVcIjpbXCJEdW1teTFcIixcIkR1bW15MlwiXSxcbi8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlRoaXMgaXMgZHVtbXkgMVwiLFwiVGhpcyBpcyBkdW1teSAyXCJdLFxuLy8gICAgICAgICBcImNvdW50ZXJcIjpbMSwyXVxuLy8gICAgICAgfSxcbi8vICAgICAgIFwic2NoZW1hXCI6e1xuLy8gICAgICAgICBcInRpdGxlXCI6XCJzdHJpbmdcIixcbi8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwic3RyaW5nXCIsXG4vLyAgICAgICAgIFwiY291bnRlclwiOlwiaW50ZWdlclwifSxcbi8vICAgICAgICAgXCJ1c2VyXCI6e1wiaWRcIjpudWxsLFwibmFtZVwiOm51bGwsXCJlbWFpbFwiOm51bGwsXCJzZWNyZXRcIjpcIlNDdzBka0lESmZxOUdNMEUrMkdaM0JKWmRmR1dLb0J4dnVZMzZnZmdQL0k9XCJcbi8vICAgICAgIH0sXG4vLyAgICAgICBcImNvbnRhaW5lcklEXCI6XCJDT05URU5UXCJcbi8vICAgICB9O1xuLy9cbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gfTtcblxuXG4vLyB2YXJcbi8vICAgVVNFUiAgICAgICAgPSBwYXJhbXMuVVNFUkFVVEgsXG4vLyAgIENPTlRBSU5FUiAgID0gcGFyYW1zLkNPTlRBSU5FUixcbi8vICAgREFUQSAgICAgICAgPSBwYXJhbXMuU0VULkRBVEEsXG4vLyAgIENPTExFQ1RJT04gID0gcGFyYW1zLlNFVC5DT0xMRUNUSU9OLFxuLy8gICBTQ0hFTUEgICAgICA9IHBhcmFtcy5TRVQuU0NIRU1BLFxuLy8gICBNSVNDICAgICAgICA9IHBhcmFtcy5NSVNDXG4vLyA7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyA9PiB0eXBlIG9mIHNjaGVtYSBpdGVtIGRlZmluZXMgXCJQTEFURVMuSlNcIiB0ZW1wbGF0ZVxuXG5cbi8vIG9yIHNlbGVjdG9yIHdpbGwgdGVsbCB5b3UgXCJ3aGljaCBURU1QTEFURSB0byB1c2VcIlxuZnVuY3Rpb24gc2VsZWN0b3IgKCkgey8vIEBUT0RPOiBNYXliZSBnZW5lcmF0ZSBTRUxFQ1RPUiBRVUVSSUVTIC0gZm9yIFBMQVRFUy5qc1xuIHJldHVybiAnLkJsb2NrX19lbGVtZW50Jztcbn1cbi8vIGUuZy4gcGhvbmUgOiBmdW5jdGlvbiBzZWxlY3RvciAoeCkgeyByZXR1cm4gJy5Db21wbGV4Zm9ybV9fY29tbXVuaWNhdGlvbl9fcGhvbmVfX2lucHV0JzsgfSxcblxuLy8gZS5nLlxuLy8gdml0YV9zdGVwc19hdHRyaWJ1dGVzICAgICA6IGZ1bmN0aW9uIHNlbGVjdG9yICh4KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgVEVNUExBVEUgICAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeScsXG4vLyAgICAgZGVzY3JpcHRpb24gOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fY29udGVudCcsXG4vLyAgICAgY3JlYXRlZF9hdCAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fZGF0ZScsXG4vLyAgICAgdXNlcl9pZCAgICAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fdXNlcicgLy8gQFRPRE86IHdpbmRvdy5EQVRBQ09MTEVDVElPTi51c2VyX2lkW3VzZXJfaWRdLnRpdGxlXG4vLyAgIH1cbi8vIH1cblxuLy8gZS5nLiBkZWxldGVkICAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gc2VsZWN0b3IgKHgpIHsgcmV0dXJuICdOT05FJzsgfSAvLyBzaG91bGQgbm90IGJlIHByZXNlbnRcblxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gICAgKHZhbHVlKSB7IHJldHVybiAnJyt2YWx1ZTsgICAgICAgICAgfVxuXG5mdW5jdGlvbiB1bnRyYW5zZm9ybSAgKHZhbHVlKSB7IHJldHVybiBuZXcgTnVtYmVyKHZhbHVlKTsgfVxuLy8gZmlyc3RuYW1lIDogKGZ1bmN0aW9uIHVuVHJhbnNmb3JtICgpIHsgcmV0dXJuIENPTVBPTkVOVC5xdWVyeVNlbGVjdG9yKCcuQ29tcGxleGZvcm1fX3BlcnNvbl9fcHJlbmFtZV9faW5wdXQnKS5pbm5lckhUTUw7IH0pKCksXG5cbi8vIGludGVybmFsX2NvbnRhY3RfcGVyc29uX2lkcyA6IChmdW5jdGlvbiB1blRyYW5zZm9ybSAoKSB7IHJldHVybiBpbnRlcm5hbF9jb250YWN0X3BlcnNvbnNEYXRhOyB9KSgpLFxuLy8gbWFzc19lbWFpbF9yZWNlaXZlciAgICAgICAgIDogKGZ1bmN0aW9uIHVuVHJhbnNmb3JtICgpIHsgcmV0dXJuICQoJ2lucHV0OnJhZGlvW25hbWU9c2V0dGluZ3NfbWFzc19lbWFpbF06Y2hlY2tlZCcpLnZhbCgpOyB9KSgpLFxuXG5cblxuLy8gdml0YV9zdGVwc19hdHRyaWJ1dGVzICAgICA6IChmdW5jdGlvbiB1blRyYW5zZm9ybSAoKSB7XG4vLyAgIHZhciBjb25jZXB0ID0gc2NoZW1hTWFwcGluZ1sndml0YV9zdGVwc19hdHRyaWJ1dGVzJ10oKTtcbi8vICAgdmFyIHJlc3VsdHMgPSBbXTtcbi8vICAgdmFyIGh0bWwgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvckFsbCgnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeTpub3QoW2RhdGEtdGVtcGxhdGU9XCJDb21wbGV4Zm9ybV9fam91cm5hbF9fZW50cnlcIl0pJyk7XG4vLyAgIGZvcih2YXIgaSA9IDA7IGk8aHRtbC5sZW5ndGg7IGkrKykge1xuLy8gICAgIHZhciB0ZW1wID0ge307XG4vLyAgICAgZm9yKHN1YmtleSBpbiBjb25jZXB0KSB7XG4vLyAgICAgICBpZiAoc3Via2V5ICE9PSAnVEVNUExBVEUnICYmIHN1YmtleSAhPT0gJ2NyZWF0ZWRfYXQnKSB7XG4vLyAgICAgICAgIHRlbXBbc3Via2V5XSA9IGVzY2FwZShodG1sW2ldLnF1ZXJ5U2VsZWN0b3IoY29uY2VwdFtzdWJrZXldKS5pbm5lckhUTUwpOyAvLyBFU0NBUEUgVVNFUiBIVE1MIENPTlRFTlRcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmVzdWx0cy5wdXNoKHRlbXApO1xuLy8gICB9XG4vLyAgIHJldHVybiByZXN1bHRzO1xuLy8gfSkoKVxudmFyIGVtcHR5U2FtcGxlID0gJ0ZBSUxGQUlMRkFJTCc7XG4vLyAgIHBob25lX2NvbXBhbnkgOiB7IHN0YW5kYXJkOiAnRkFJTEZBSUxGQUlMJyB9LFxuLy8gICAvLyBAVE9ETzogTWF5YmUgZ2VuZXJhdGUgU0VMRUNUT1IgUVVFUklFUyAtIGZvciBQTEFURVMuanNcbi8vICAgdml0YV9zdGVwcyAgICAgICAgICAgICAgICA6IHsgc3RhbmRhcmQ6ICdGQUlMRkFJTEZBSUwnIH0sXG4gICAgICAgICAgICAgICAvLyB2YXIgc2NoZW1hTWFwcGluZyA9IHsgLy8gQFRPRE86IHVzZSBzY2hlbWEgaW5zdGVhZCBvZiBoYXJkY29kZSEhISA9PiB0eXBlIG9mIHNjaGVtYSBpdGVtIGRlZmluZXMgXCJQTEFURVMuSlNcIiB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAvLyAgIC8vIENVUlJFTlRMWSBcIk1BTlVBTExZXCIgU1lOQ0hST05JWkVEIFdJVEggXCJSYWluYm93VW5pY29ybi5qc1wiIFNDSEVNQSAtIFNob3VsZCBsYXRlciBnZXQgaXQncyBTQ0hFTUEgaW4gQ09NUE9ORU5ULUNPTlNUUlVDVE9SXG4gICAgICAgICAgICAgIC8vICAgaWQgICAgICAgICAgICAgICAgICAgICAgICA6IHsgc3RhbmRhcmQ6ICdGQUlMRkFJTEZBSUwnIH0sXG5cbiAgLy8gaWYgKGZhbHNlKSB7XG4gIGlmICh0cnVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIGludmFsaWQnKTtcbiAgfVxufTtcblxuXG5cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBAVE9ETzogVGhlIFwiR2VuZXJhdG9yXCIgaXMgbm90IGluIFVTRSwgYnV0IGNvdWxkIGJlIHVzZWQsIHRvIHVzZSBcInNhbXBsZVwiIGRhdGEgaW4gc2NoZW1hLFxuICAvLyB0byBnZW5lcmF0ZSBkYXRhIGFzIGxvbmcgYXMgdGhlcmUgaXMgbm8gYmFja2VuZCBwcm92aWRpbmcgdmFsaWQgZGF0YVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyB2YXIgR0VORVJBVE9SID0ge307XG4gIC8vIEdFTkVSQVRPUi5zYW1wbGVEYXRhID0ge1xuICAvLyAgIFwiaWRcIiAgICAgICAgICAgICAgICAgICAgICAgIDogMSxcbiAgLy8gICBcInVzZXJfaWRcIiAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gIC8vICAgLy8gXCJjcmVhdGVkX2F0XCIgICAgICAgICAgICAgICAgOiBcIjIwMTQtMDctMTZUMTc6MDU6MDgrMDI6MDBcIixcbiAgLy8gICAvLyBcInVwZGF0ZWRfYXRcIiAgICAgICAgICAgICAgICA6IFwiMjAxNC0wNy0xNlQxNzowNTowOCswMjowMFwiLFxuXG4gIC8vICAgLy8gXCJsb2dpblwiICAgICAgICAgICAgICAgICAgICAgOiBcIk5PVF9JTl9VU0VcIixcblxuICAvLyAgIFwiZ2VuZGVyXCIgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX2dlbmRlclwiLFxuICAvLyAgIFwidGl0bGVcIiAgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX3RpdGxlXCIsXG4gIC8vICAgXCJmaXJzdG5hbWVcIiAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX3BfcHJlbmFtZVwiLFxuICAvLyAgIFwibGFzdG5hbWVcIiAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX3N1cm5hbWVcIixcbiAgLy8gICBcImJ1c2luZXNzcmVsYXRpb25zXCIgICAgICAgICA6IFt7XCJpZFwiOjEsIFwidGl0bGVcIjpcImFzZDFcIn0sIHtcImlkXCI6MiwgXCJ0aXRsZVwiOlwiYXNkMlwifSwge1wiaWRcIjozLCBcInRpdGxlXCI6XCJhc2QzXCJ9XSxcbiAgLy8gICAvL1wiYnVzaW5lc3NyZWxhdGlvbnNcIiAgICAgICAgIDogW1wicmVsYXRpb24xXCIsIFwicmVsYXRpb24yXCIsIFwicmVsYXRpb24zXCIsIFwicmVsYXRpb240XCIsIFwicmVsYXRpb241XCJdLFxuXG4gIC8vICAgXCJidXNpbmVzc191bml0XCIgICAgICAgICAgICAgOiBcIkRVTU1ZX3BfZGVwYXJ0ZW1lbnRcIixcbiAgLy8gICBcInBvc2l0aW9uXCIgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfcF9wb3NpdGlvblwiLFxuICAvLyAgIFwidXNlcl9pZF9wZXJzb25cIiAgICAgICAgICAgIDogXCJEVU1NWV9wZXJzb25faWRcIixcbiAgLy8gICBcImludGVybmFsX2NvbnRhY3RfcGVyc29uc1wiICA6IFtcIkRVTU1ZX3BlcnNvbl9pZF8xXCIsIFwiRFVNTVlfcGVyc29uX2lkXzJcIiwgXCJEVU1NWV9wZXJzb25faWRfM1wiLCBcIkRVTU1ZX3BlcnNvbl9pZF80XCIsIFwiRFVNTVlfcGVyc29uX2lkXzVcIl0sXG4gIC8vICAgXCJ0b3BpY3NcIiAgICAgICAgICAgICAgICAgICAgOiBbXCJ0b3BpYzFcIiwgXCJ0b3BpYzJcIiwgXCJ0b3BpYzNcIiwgXCJ0b3BpYzRcIiwgXCJ0b3BpYzVcIl0sXG5cbiAgLy8gICBcInBob25lXCIgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX3Bob25lXCIsXG4gIC8vICAgXCJtb2JpbGVcIiAgICAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9tb2JpbGVcIixcbiAgLy8gICBcImVtYWlsXCIgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX2VtYWlsXCIsXG4gIC8vICAgXCJwaG9uZV9jb21wYW55XCIgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9waG9uZV9jb21wYW55XCIsXG4gIC8vICAgXCJmYXhcIiAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9mYXhcIixcbiAgLy8gICBcImVtYWlsX2NvbXBhbnlcIiAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX2VtYWlsX2NvbXBhbnlcIixcblxuICAvLyAgIFwiY29tcGFueV9pZFwiICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgLy8gICBcImNvbXBhbnlfbmFtZVwiICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX2NvbXBhbnlfbmFtZTFcIixcbiAgLy8gICBcImNvbXBhbnlfbmFtZV9hZGRpdGlvblwiICAgICA6IFwiRFVNTVlfYnVzX2NvbXBhbnlfbmFtZTJcIixcbiAgLy8gICBcInN0cmVldFwiICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3N0cmVldDFcIixcbiAgLy8gICBcInN0cmVldF9hZGRpdGlvblwiICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3N0cmVldDJcIixcbiAgLy8gICBcInppcFwiICAgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3ppcFwiLFxuICAvLyAgIFwicG9zdF9ib3hcIiAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfcG9zdGJveFwiLFxuICAvLyAgIFwiY2l0eVwiICAgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfY2l0eVwiLFxuICAvLyAgIFwicG9zdF9ib3hfemlwXCIgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfemlwX3Bvc3Rib3hcIixcbiAgLy8gICBcImNvdW50cnlfbmFtZVwiICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX2NvdW50cnlcIixcbiAgLy8gICBcInJlZ2lvblwiICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3JlZ2lvblwiLFxuXG5cbiAgLy8gICBcImV2ZW50X2ludml0YXRpb25fcmVjZWl2ZXJcIiA6IHRydWUsXG4gIC8vICAgXCJlbWFpbF9yZWNlaXZlclwiICAgICAgICAgICAgOiB0cnVlLFxuICAvLyAgIFwibWFzc19lbWFpbF9yZWNlaXZlclwiICAgICAgIDogdHJ1ZSxcbiAgLy8gICBcImF0dGFpbmluZ19wdWJsaWNfb2ZmaWNlXCIgICA6IHRydWUsXG4gIC8vICAgXCJwaG9uZV9yZWNlaXZlclwiICAgICAgICAgICAgOiB0cnVlLFxuICAvLyAgIFwiZmF4X3JlY2VpdmVyXCIgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgLy8gICBcImxldHRlcl9yZWNlaXZlclwiICAgICAgICAgICA6IHRydWUsXG5cblxuICAvLyAgIFwiaGlzdG9yeV90ZXh0XCIgICAgICAgICAgICAgIDogW1wibG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cIl0sXG4gIC8vICAgXCJoaXN0b3J5X3RpbWVcIiAgICAgICAgICAgICAgOiBbXCIyMDE0LTA3LTE3VDE3OjA1OjA4KzAyOjAwXCJdLFxuICAvLyAgIFwiaGlzdG9yeV9hdXRob3JcIiAgICAgICAgICAgIDogW1wiRFVNTVlfcGVyc29uX2lkXCJdXG4gIC8vIH07XG4gIC8vIEdFTkVSQVRPUi5kdW1teURhdGEgPSAoZnVuY3Rpb24gZ2VuZXJhdGVEdW1teURhdGFGcm9tIChERVBzKSB7XG4gIC8vICAgREVQcy50eXBlT2YgPSBERVBzLnR5cGVPZi5GOyAvLyBDaG9vc2UgYmV0d2VlbiB0eXBlT2YgQSAtIEYgbWV0aG9kc1xuICAvLyAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTYW1wbGVEYXRhIChxdWFudGl0eSwgZm9ybWF0LCBzYW1wbGVEYXRhKSB7XG4gIC8vICAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSwgZm9ybWF0KSB7IHJldHVybiBkYXRhOyB9XG4gIC8vICAgICBzYW1wbGVEYXRhID0gc2FtcGxlRGF0YSA/IChmdW5jdGlvbiBjb252ZXJ0U2FtcGxlRGF0YSgpIHtcbiAgLy8gICAgICAgaWYgKGZvcm1hdCA9PT0gJ2NvbXBsZXgnKSB7XG4gIC8vICAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCBnaXZlbiBzYW1wbGVEYXRhIGNvbXBsaWVzIHRvICdzaW1wbGUnIGZvcm1hdFxuICAvLyAgICAgICAgIC8vIG90aGVyd2lzZSB0cmFuc2Zvcm0gdG8gJ2NvbXBsZXgnIGZvcm1hdCBvciB0aHJvdyBlcnJvclxuICAvLyAgICAgICAgIHJldHVybiB2YWxpZGF0ZURhdGEoc2FtcGxlRGF0YSwgJ2NvbXBsZXgnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdzaW1wbGUnKSB7XG4gIC8vICAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCBnaXZlbiBzYW1wbGVEYXRhIGNvbXBsaWVzIHRvICdzaW1wbGUnIGZvcm1hdFxuICAvLyAgICAgICAgIC8vIG90aGVyd2lzZSB0cmFuc2Zvcm0gdG8gJ3NpbXBsZScgZm9ybWF0IG9yIHRocm93IGVycm9yXG4gIC8vICAgICAgICAgLy8gb3RoZXJ3aXNlXG4gIC8vICAgICAgICAgcmV0dXJuIHZhbGlkYXRlRGF0YShzYW1wbGVEYXRhLCAnc2ltcGxlJyk7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2Ugc3BlY2lmeSBmb3JtYXQ6IFwiY29tcGxleFwiIG9yIFwic2ltcGxlXCInKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSkoKSA6IEdFTkVSQVRPUi5zYW1wbGVEYXRhO1xuICAvLyAgICAgdmFyIGdlbmVyYXRlZERhdGEgPSBbXTtcbiAgLy8gICAgIHZhciB0ZW1wO1xuICAvLyAgICAgZm9yICh2YXIgY291bnRlcj0wOyBjb3VudGVyPHF1YW50aXR5OyBjb3VudGVyKyspIHtcbiAgLy8gICAgICAgdGVtcCA9IHt9O1xuICAvLyAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzYW1wbGVEYXRhKSB7XG4gIC8vICAgICAgICAgaWYgKHNhbXBsZURhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gIC8vICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IERFUHMuY3JlYXRlU2FtcGxlQXR0cmlidXRlKHNhbXBsZURhdGFbcHJvcGVydHldLCBjb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgZ2VuZXJhdGVkRGF0YS5wdXNoKHRlbXApO1xuICAvLyAgICAgfVxuICAvLyAgICAgcmV0dXJuIGdlbmVyYXRlZERhdGE7XG4gIC8vICAgfTtcbiAgLy8gfSkoXG4gIC8vICAgKGZ1bmN0aW9uIERFUEVOREVOQ0lFUyAoREVQcykge1xuICAvLyAgICAgdmFyIERFUHMgPSB7XG4gIC8vICAgICAgIHR5cGVPZiA6IHtcbiAgLy8gICAgICAgICBBOiAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAvLyAgICAgICAgICAgdmFyIGNhY2hlID0ge307XG4gIC8vICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAvLyAgICAgICAgICAgICB2YXIga2V5O1xuICAvLyAgICAgICAgICAgICByZXR1cm4gb2JqID09PSBudWxsID8gJ251bGwnIC8vIG51bGxcbiAgLy8gICAgICAgICAgICAgICA6IG9iaiA9PT0gZ2xvYmFsID8gJ2dsb2JhbCcgLy8gd2luZG93IGluIGJyb3dzZXIgb3IgZ2xvYmFsIGluIG5vZGVqc1xuICAvLyAgICAgICAgICAgICAgIDogKGtleSA9IHR5cGVvZiBvYmopICE9PSAnb2JqZWN0JyA/IGtleSAvLyBiYXNpYzogc3RyaW5nLCBib29sZWFuLCBudW1iZXIsIHVuZGVmaW5lZCwgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgICAgICA6IG9iai5ub2RlVHlwZSA/ICdvYmplY3QnIC8vIERPTSBlbGVtZW50XG4gIC8vICAgICAgICAgICAgICAgOiBjYWNoZVtrZXkgPSAoe30pLnRvU3RyaW5nLmNhbGwob2JqKV0gLy8gY2FjaGVkLiBkYXRlLCByZWdleHAsIGVycm9yLCBvYmplY3QsIGFycmF5LCBtYXRoXG4gIC8vICAgICAgICAgICAgICAgfHwgKGNhY2hlW2tleV0gPSBrZXkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpOyAvLyBnZXQgWFhYWCBmcm9tIFtvYmplY3QgWFhYWF0sIGFuZCBjYWNoZSBpdFxuICAvLyAgICAgICAgICAgfTtcbiAgLy8gICAgICAgICB9KHRoaXMpKSxcbiAgLy8gICAgICAgICBCOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgLy8gICAgICAgICAgIHZhciByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKG9iaikuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gIC8vICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiBcIlwiO1xuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgQzogZnVuY3Rpb24gKCB0aGluZyApIHtcbiAgLy8gICAgICAgICAgIHZhciB0eXBlT2ZUaGluZyA9IHR5cGVvZiB0aGluZztcbiAgLy8gICAgICAgICAgIGlmICggdHlwZU9mVGhpbmcgPT09ICdvYmplY3QnICkge1xuICAvLyAgICAgICAgICAgICB0eXBlT2ZUaGluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gIC8vICAgICAgICAgICAgIGlmICggdHlwZU9mVGhpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gIC8vICAgICAgICAgICAgICAgaWYgKCB0aGluZy5jb25zdHJ1Y3Rvci5uYW1lICkge1xuICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nLmNvbnN0cnVjdG9yLm5hbWU7XG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdGhpbmcuY29uc3RydWN0b3IudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT09ICdbJyApIHtcbiAgLy8gICAgICAgICAgICAgICAgIHR5cGVPZlRoaW5nID0gdHlwZU9mVGhpbmcuc3Vic3RyaW5nKDgsdHlwZU9mVGhpbmcubGVuZ3RoIC0gMSk7XG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgICAgICAgIHR5cGVPZlRoaW5nID0gdGhpbmcuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLyk7XG4gIC8vICAgICAgICAgICAgICAgICBpZiAoIHR5cGVPZlRoaW5nICkge1xuICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mVGhpbmdbMV07XG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgLy8gICAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgdHlwZU9mVGhpbmcgPSB0eXBlT2ZUaGluZy5zdWJzdHJpbmcoOCx0eXBlT2ZUaGluZy5sZW5ndGggLSAxKTtcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgcmV0dXJuIHR5cGVPZlRoaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZU9mVGhpbmcuc2xpY2UoMSk7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBEOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICB2YXIgc3RyID0gKG9iai5wcm90b3R5cGUgPyBvYmoucHJvdG90eXBlLmNvbnN0cnVjdG9yIDogb2JqLmNvbnN0cnVjdG9yKS50b1N0cmluZygpO1xuICAvLyAgICAgICAgICAgdmFyIGNuYW1lID0gc3RyLm1hdGNoKC9mdW5jdGlvblxccyhcXHcqKS8pWzFdO1xuICAvLyAgICAgICAgICAgdmFyIGFsaWFzZXMgPSBbXCJcIiwgXCJhbm9ueW1vdXNcIiwgXCJBbm9ueW1vdXNcIl07XG4gIC8vICAgICAgICAgICByZXR1cm4gYWxpYXNlcy5pbmRleE9mKGNuYW1lKSA+IC0xID8gXCJGdW5jdGlvblwiIDogY25hbWU7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBFOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pWzFdO1xuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgRjogZnVuY3Rpb24gKGl0ZW0pIHsgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pa2VtYWNjYW5hL2FnYXZlXG4gIC8vICAgICAgICAgICB2YXIgZ2V0UHJvdG90eXBlID0gZnVuY3Rpb24oaXRlbSkge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pLnNsaWNlKDgsIC0xKTtcbiAgLy8gICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB2YXIga2luZCwgVW5kZWZpbmVkO1xuICAvLyAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgKSB7XG4gIC8vICAgICAgICAgICAgIGtpbmQgPSAnbnVsbCc7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBpZiAoIGl0ZW0gPT09IFVuZGVmaW5lZCApIHtcbiAgLy8gICAgICAgICAgICAgICBraW5kID0gJ3VuZGVmaW5lZCc7XG4gIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IGdldFByb3RvdHlwZShpdGVtKTtcbiAgLy8gICAgICAgICAgICAgICBpZiAoICggcHJvdG90eXBlID09PSAnTnVtYmVyJyApICYmIGlzTmFOKGl0ZW0pICkge1xuICAvLyAgICAgICAgICAgICAgICAga2luZCA9ICdOYU4nO1xuICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgICBraW5kID0gcHJvdG90eXBlO1xuICAvLyAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgcmV0dXJuIGtpbmQ7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBHOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoLyhbXFxbXFxdXXxvYmplY3R8XFxzKS9naSwgXCJcIik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9LCAvLyBtb3JlIGF0OiBodHRwOi8vdG9ieWhvLmNvbS8yMDExLzAxLzI4L2NoZWNraW5nLXR5cGVzLWluLWphdmFzY3JpcHQvXG4gIC8vICAgICAgIGNyZWF0ZVNhbXBsZUF0dHJpYnV0ZSA6IGZ1bmN0aW9uIChleGFtcGxlQXR0cmlidXRlLCBjdXJyZW50Q291bnRlcikge1xuICAvLyAgICAgICAgIHN3aXRjaCAoREVQcy50eXBlT2YoZXhhbXBsZUF0dHJpYnV0ZSkpIHtcbiAgLy8gICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gIC8vICAgICAgICAgICAgIHJldHVybiBleGFtcGxlQXR0cmlidXRlICsgY3VycmVudENvdW50ZXI7XG4gIC8vICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAvLyAgICAgICAgICAgICByZXR1cm4gZXhhbXBsZUF0dHJpYnV0ZSArIGN1cnJlbnRDb3VudGVyO1xuICAvLyAgICAgICAgICAgY2FzZSAnbnVsbCc6XG4gIC8vICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAvLyAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gIC8vICAgICAgICAgICAgIHJldHVybiAhZXhhbXBsZUF0dHJpYnV0ZTtcbiAgLy8gICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiBuZXdBcnJheShvbGRBcnJheSwgbmV3QXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICBzd2l0Y2ggKERFUHMudHlwZU9mKG9sZEFycmF5WzBdKSkge1xuICAvLyAgICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgLy8gICAgICAgICAgICAgICAgICAgZm9yKGl0ZW0gaW4gb2xkQXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKERFUHMuY3JlYXRlU2FtcGxlQXR0cmlidXRlKG9sZEFycmF5W2l0ZW1dLCBjdXJyZW50Q291bnRlcikpO1xuICAvLyAgICAgICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgLy8gICAgICAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6XG4gIC8vICAgICAgICAgICAgICAgICAgIHZhciBodG1sQ29kZSA9ICc8c2VsZWN0IGNsYXNzPVwia2xhc3NlWFhYXCI+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgZm9yKGl0ZW0gaW4gb2xkQXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICBodG1sQ29kZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBvbGRBcnJheVtpdGVtXS5pZCArICdcIj4nICsgb2xkQXJyYXlbaXRlbV0udGl0bGUgKyAnPC9vcHRpb24+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICAgICAgICBodG1sQ29kZSArPSAnPC9zZWxlY3Q+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxDb2RlO1xuICAvLyAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coREVQcy50eXBlT2Yob2xkQXJyYXlbMF0pKTtcbiAgLy8gICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGRldGVjdCBUWVBFIG9mIG9sZEFycmF5WzBdIVwiKTtcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfSkoZXhhbXBsZUF0dHJpYnV0ZSwgW10pO1xuICAvLyAgICAgICAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coREVQcy50eXBlT2YoZXhhbXBsZUF0dHJpYnV0ZSkpO1xuICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGV0ZWN0IFRZUEUgb2YgZXhhbXBsZUF0dHJpYnV0ZSFcIik7XG4gIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH07XG4gIC8vICAgICByZXR1cm4gREVQcztcbiAgLy8gICB9KSh7fSlcbiAgLy8gKTsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGNsYXNzPVwiQ2FtcGFpZ25cIj5cXG4gIDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPlxcbiAgICA8ZmlndXJlPlxcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucmVkYnVsbGNvbnRlbnRwb29sLmNvbS9yZXNvdXJjZXMvMjAxMy8wNy8wOS8wMDAwMS0wMTAwMC9QLTIwMTMwNzA5LTAwNTUwL2ltYWdlX3Byb3h5X2xhcmdlLmpwZ1wiIC8+XFxuICAgIDwvZmlndXJlPlxcbiAgICA8c3BhbiBjbGFzcz1cImFydGljbGUtaGVhZGluZ1wiPlxcbiAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRpdGxlXCI+PC9zcGFuPiAtIDxzcGFuIGRhdGEtYmluZD1cImxvY2F0aW9uXCI+PC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVwiYXJ0aWNsZS1zbmlwcGV0XCI+XFxuICAgICAgUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFZlc3RpYnVsdW0gdG9ydG9yIHF1YW0sIGZldWdpYXQgdml0YWUsIHVsdHJpY2llcyBlZ2V0LCB0ZW1wb3Igc2l0IGFtZXQuLi5cXG4gICAgPC9zcGFuPlxcbiAgICA8bmF2IHJvbGU9XFwnbmF2aWdhdGlvblxcJz5cXG4gICAgICA8dWw+XFxuICAgICAgICA8bGkgY2xhc3M9XCJvbmVcIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVwidHdvXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cInRocmVlXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9saT5cXG4gICAgICA8L3VsPlxcbiAgICA8L25hdj5cXG4gICAgPGEgY2xhc3M9XCJhcnRpY2xlLXVybFwiIGhyZWY9XCIjXCIgdGl0bGU9XCJDb250aW51ZSBSZWFkaW5nXCI+Q29udGludWUgUmVhZGluZzwvYT5cXG4gICAgPHVsIGNsYXNzPVwiYXJ0aWNsZS1zb2NpYWxcIj5cXG4gICAgICA8bGk+XFxuICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbi1mYWNlYm9va1wiPjwvaT48L2E+XFxuICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbi10d2l0dGVyXCI+PC9pPjwvYT5cXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLWdvb2dsZS1wbHVzXCI+PC9pPjwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9hcnRpY2xlPlxcbjwvZGl2Plxcbic7IiwiIWZ1bmN0aW9uIE1PRFVMRV9MU0Fmcm9udGVuZCAoRU5WKSB7XG4gIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBERVBFTkRFTkNJRVNcbiAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICB2YXIgREVQcyA9IHtcbiAgICBob2xvbiA6IHJlcXVpcmUoJ2hvbG9uJylcbiAgfTtcblxuXG5cblxuICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgREFUQSBDT05UUkFDVFxuICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gIHZhciBDT05UUkFDVCA9IHtcbiAgICBWQUxJREFURSAgICAgIDogZnVuY3Rpb24gVkFMSURBVEUgKHBhcmFtcykge1xuICAgICAgcmVxdWlyZSgnLi9DT05UUkFDVC5qcycpKHBhcmFtcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cblxuXG5cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIDxzY3JpcHQgc3JjPScvYXNzZXRzL2pxdWVyeS5keW5hdGFibGUuanMnPjwvc2NyaXB0PiA8IS0tIGJyb3dzZXJpZnkgYW5kIGZhY3RvciBvdXQgaW50byBEeW5hV3JhcHBlciAtLT5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBMZWFkU2hhcmVBcHBGcm9udGVuZCB3aWxsIGJlY29tZSBtdWx0aXBsZSBXSURHRVRTXG4gIC8vIEBUT0RPOiBJbXBvcnQgU1RZTFVTIEZpbGUgZnJvbSBMZWFkU2hhcmVBcHBGcm9udGVuZCBhbmQgb3V0cHV0IGl0IHNvbWV3aGVyZSBlbHNlLFxuICAvLyB0aHVzOiBoYXZlIG11bHRpcGxlIG91dGZ1dCBmaWxlcyB3aXRoIGJyb3dzZXJpZnlcbiAgLy8gXCJicm93c2VyaWZ5LXNoaW1cIjoge1xuICAvLyAgIFwianF1ZXJ5XCI6IHtcbiAgLy8gICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcIixcbiAgLy8gICAgIFwiZXhwb3J0c1wiOiBcIiRcIixcbiAgLy8gICAgIFwiZGVwZW5kc1wiOiBudWxsXG4gIC8vICAgfSxcbiAgLy8gICBcImpxdWVyeS5keW5hdGFibGVcIjoge1xuICAvLyAgICAgXCJwYXRoXCI6IFwibm9kZV9tb2R1bGVzL0R5bmF0YWJsZS9qcXVlcnkuZHluYXRhYmxlLmpzXCIsXG4gIC8vICAgICBcImV4cG9ydHNcIjogbnVsbCxcbiAgLy8gICAgIFwiZGVwZW5kc1wiOiB7XG4gIC8vICAgICAgIFwianF1ZXJ5XCI6IFwiJFwiXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9LFxuICAvLyBcImJyb3dzZXJpZnlcIjoge1xuICAvLyAgIFwidHJhbnNmb3JtXCI6IFsgXCJodG1sMmpzLWJyb3dzZXJpZnlcIiwgXCJicm93c2VyaWZ5LXNoaW1cIl1cbiAgLy8gfSxcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuXG4gIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBNT0RVTEUgRVhQT1JUXG4gIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgbW9kdWxlLmV4cG9ydHMgPSB7IC8vIEVYUE9SVCBhcyBHTE9CQUxcbiAgICBWRVJTSU9OICAgICA6IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gICAgTkFNRSAgICAgICAgOiAnTGVhZFNoYXJlQXBwRnJvbnRlbmQnLFxuICAgIFZBTElEQVRFICAgIDogQ09OVFJBQ1QuVkFMSURBVEUsXG4gICAgQ09ORklHVVJFICAgOiBDT05GSUdVUkVcbiAgfTtcblxuXG5cblxuICAvLyAvLyBDT05GSUdVUkUgQ09NUExFWEZPUk1cbiAgLy8gQ09NUE9ORU5ULkFQSSA9IHtcbiAgLy8gICAvLyBJTlBVVCBJTlRFUkZBQ0VcbiAgLy8gICBJTlRFUkZBQ0U6IHtcbiAgLy8gICAgICdVU0VSX1NFVCcgIDogZnVuY3Rpb24gKERBVEEpIHsgLy8gQFRPRE86IHRlc3QgdGhpcyBtZXRob2RzIGludGVuc2l2ZWx5XG4gIC8vICAgICAgIFRFTVBfSUQgICA9IERBVEEuaWQ7XG4gIC8vICAgICAgIHJlRmlsbGZvcm0oREFUQSk7XG4gIC8vICAgICB9LFxuICAvLyAgICAgJ1VTRVJfQUREJyAgOiBmdW5jdGlvbiAoREFUQSkgeyAvLyBAVE9ETzogdGVzdCB0aGlzIG1ldGhvZHMgaW50ZW5zaXZlbHlcbiAgLy8gICAgICAgVEVNUF9JRCAgID0gREFUQS5pZDtcbiAgLy8gICAgICAgcmVGaWxsZm9ybShEQVRBKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9LFxuICAvLyAgIC8vIE9VVFBVVCBJTlRFUkZBQ0VcbiAgLy8gICBFVkVOVFMgIDogeyBcbiAgLy8gICAgICdDQU5DRUwnICA6ICdERVNDUklQVElPTjogdXNlciBkaWQgbm90IHByb3ZpZGUgYW55IGlucHV0IGFuZCBhYm9ydGVkJyxcbiAgLy8gICAgICdTQVZFJyAgICA6ICdERVNDUklQVElPTjogdXNlciBwcm92aWRlZCBkYXRhIHdoaWNoIHNob3VsZCBiZSBtYWRlIHBlcnNpc3RlbnQnLFxuICAvLyAgICAgJ1BSRVYnICAgIDogJ0RFU0NSSVBUSU9OOiBsb2FkIHByZXZpb3VzIGRhdGEgaXRlbSBmcm9tIHRhYmxlIGludG8gY29tcGxleGZvcm0nLFxuICAvLyAgICAgJ05FWFQnICAgIDogJ0RFU0NSSVBUSU9OOiBsb2FkIG5leHQgZGF0YSBpdGVtIGZyb20gdGFibGUgaW50byBjb21wbGV4Zm9ybSdcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgLy8gLy8gU09GVFdBUkUgREVWRUxPUEVSIEtJVFxuICAvLyB2YXIgU0RLID0ge1xuICAvLyAgIEVWRU5UUzoge1xuICAvLyAgICAgJ0NBTkNFTCcgICAgOiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoJ0NBTkNFTCcsIHsgZGV0YWlsOiB7XG4gIC8vICAgICAgICAgZGVzY3JpcHRpb246IENPTVBPTkVOVC5BUEkuRVZFTlRTWydDQU5DRUwnXVxuICAvLyAgICAgICB9fSk7IC8vIEBUT0RPOiB0ZXN0IC0gbmV3IGV2ZW50IGdldHMgY29weSBvZiBtZXNzYWdlXG4gIC8vICAgICB9LFxuICAvLyAgICAgJ1NBVkUnICAgICAgOiBmdW5jdGlvbiAoREFUQSkge1xuICAvLyAgICAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KCdTQVZFJywgeyBkZXRhaWw6IHtcbiAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogQ09NUE9ORU5ULkFQSS5FVkVOVFNbJ1NBVkUnXSxcbiAgLy8gICAgICAgICBkYXRhOiBEQVRBXG4gIC8vICAgICAgIH19KTsgLy8gQFRPRE86IHRlc3QgLSBuZXcgZXZlbnQgZ2V0cyBjb3B5IG9mIG1lc3NhZ2VcbiAgLy8gICAgIH0sXG4gIC8vICAgICAnTkVYVCcgICAgICA6IGZ1bmN0aW9uIChDVVJSRU5UX0lEKSB7XG4gIC8vICAgICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoJ05FWFQnLCB7IGRldGFpbDoge1xuICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBDT01QT05FTlQuQVBJLkVWRU5UU1snTkVYVCddLFxuICAvLyAgICAgICAgIGRhdGE6IENVUlJFTlRfSURcbiAgLy8gICAgICAgfX0pOyAvLyBAVE9ETzogdGVzdCAtIG5ldyBldmVudCBnZXRzIGNvcHkgb2YgbWVzc2FnZVxuICAvLyAgICAgfSxcbiAgLy8gICAgICdQUkVWJyAgICAgIDogZnVuY3Rpb24gKENVUlJFTlRfSUQpIHtcbiAgLy8gICAgICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudCgnUFJFVicsIHsgZGV0YWlsOiB7XG4gIC8vICAgICAgICAgZGVzY3JpcHRpb246IENPTVBPTkVOVC5BUEkuRVZFTlRTWydQUkVWJ10sXG4gIC8vICAgICAgICAgZGF0YTogQ1VSUkVOVF9JRFxuICAvLyAgICAgICB9fSk7IC8vIEBUT0RPOiB0ZXN0IC0gbmV3IGV2ZW50IGdldHMgY29weSBvZiBtZXNzYWdlXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gRElTUEFUQ0ggRVZFTlRTIC0gQFRPRE86IEJFTSBpbnRlckFjdGlvbnMgY291bGQgaW5jbHVkZSBFdmVudE5hbWVzXG4gIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fbWVudV9fY2FuY2VsJyk7XG4gIC8vIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fYnV0dG9uOkNBTkNFTCcpO1xuICAvLyBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBvbkNsaWNrIChldmVudCkge1xuICAvLyAgIENPTVBPTkVOVC5kaXNwYXRjaEV2ZW50KFNESy5FVkVOVFNbJ0NBTkNFTCddKCkpO1xuICAvLyB9KTtcblxuICAvLyB2YXIgbmV4dEJ1dHRvbiAgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvcignLkNvbXBsZXhmb3JtX19tZW51X19uZXh0Jyk7XG4gIC8vIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fYnV0dG9uOkNBTkNFTCcpO1xuICAvLyBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljayAoZXZlbnQpIHtcbiAgLy8gICBDT01QT05FTlQuZGlzcGF0Y2hFdmVudChTREsuRVZFTlRTWydORVhUJ10oVEVNUF9JRCkpO1xuICAvLyB9KTtcblxuICAvLyB2YXIgcHJldkJ1dHRvbiAgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvcignLkNvbXBsZXhmb3JtX19tZW51X19wcmV2aW91cycpO1xuICAvLyAvLyB2YXIgY2FuY2VsQnV0dG9uICA9IENPTVBPTkVOVC5xdWVyeVNlbGVjdG9yKCcuQ29tcGxleGZvcm1fX2J1dHRvbjpDQU5DRUwnKTtcbiAgLy8gcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uQ2xpY2sgKGV2ZW50KSB7XG4gIC8vICAgQ09NUE9ORU5ULmRpc3BhdGNoRXZlbnQoU0RLLkVWRU5UU1snUFJFViddKFRFTVBfSUQpKTtcbiAgLy8gfSk7XG5cbiAgLy8gcmV0dXJuIENPTVBPTkVOVC5BUEk7XG5cblxuXG5cbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgIENPTkZJR1VSRSBDT01QT05FTlRcbiAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICBmdW5jdGlvbiBDT05GSUdVUkUgKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIC8vIEBUT0RPOiBUaGUgY29tcG9uZW50IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQgb24gdGhlIHNlcnZlclxuICAgICAgLy8gICAgICAgIENPTkZJR1VSRSBzaG91bGQgZG8gbm90aGluZyBhbmQgU1RBUlQoKSBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICB9XG4gICAgLy8gcmV0dXJuIFBST0RVQ1RJT05fTU9ERSgpO1xuICAgIEVOVi5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHsgU1RBUlQ6IERFVkVMT1BfTU9ERSB9O1xuICB9XG5cblxuXG5cbiAgZnVuY3Rpb24gREVWRUxPUF9NT0RFICgpIHtcbiAgICB2YXIgVEVTVF9DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjREVWRUxPUF9NT0RFJyk7XG4gICAgVEVTVF9DT05UQUlORVIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gYWxlcnQoXCJDdXJyZW50bHkgaW4gREVWIE1PREU6XFxuIENoYW5nZSAnbGluZSAyMCAmIDIxJyBpbiBSYWluYm93VW5pY29ybi5qcyB0byBzd2l0Y2ggdG8gUFJPRFVDVElPTiBNT0RFXCIpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQTEFURVMgQkFTRSBBUEkgI1xuXG4gICAgLy8gICAjIEJBU0UgQVBJXG4gICAgLy8gICAgICMgYmluZChodG1sOkhUTUxzdHJpbmd8U3RyaW5nfEZpbGVuYW1lLCBkYXRhOkpTT058U3RyaW5nLCBtYXApXG4gICAgLy8gICAgICAgIyA9PiByZXN1bHQgb2YgPGh0bWw+IG1lcmdlZCB3aXRoIDxkYXRhPlxuICAgIC8vICAgICAgICMgPT4gaW5zZXJ0cyBhbGwgdmFsdWVzIG9mIGRhdGFba2V5XSBpbnRvIHRhZyB3aXRoIGFuIGF0dHJpYnV0ZSB2YWx1ZSBvZiBrZXlcbiAgICAvLyAgICAgICAgICMgaHRtbCAtIHN0cmluZyBvZiB3ZWxsLWZvcm1lbCBIVE1MXG4gICAgLy8gICAgICAgICAjIGRhdGEgLSBKU09OXG4gICAgLy8gICAgICAgICAjIG1hcCAgLSBkYXRhIG1hcHBpbmcgZm9yIHRoZSBwYXJ0aWFsIChpbnN0YW5jZSBvZiBQbGF0ZXMuTWFwKCkpXG5cbiAgICAvLyAgICAgIyB3aGVyZShhdHRyaWJ1dGU6U3RyaW5nKVxuICAgIC8vICAgICAgICMgPT4gVEFHIDxhdHRyaWJ1dGU+IHRvIG1hdGNoIG9uIChvbWl0OiBkZWZhdWx0cyB0byBcImlkXCIpXG4gICAgLy8gICAgICMgaGFzKHZhbHVlOlN0cmluZ3xSZWdFeHApXG4gICAgLy8gICAgICAgIyA9PiBUQUcgYXR0cmlidXRlIGNvbnRhaW5zIDx2YWx1ZT4gdG8gbWF0Y2ggb25cbiAgICAvLyAgICAgIyBhcyhhdHRyaWJ1dGU6U3RyaW5nKVxuICAgIC8vICAgICAgICMgPT4gVEFHIDxhdHRyaWJ1dGU+IHRvIHJlcGxhY2UgaW50b1xuICAgIC8vICAgICAjIHVzZShrZXk6U3RyaW5nfEZ1bmN0aW9uKVxuICAgIC8vICAgICAgICMgPT4gSlNPTiA8a2V5PiB3aGljaHMgdmFsdWUgdGhlIFRBR3MgaW5uZXJIVE1MIGlzIHNldCB0b1xuICAgIC8vICAgICAgICMgICAgKHR5cGVvZiBrZXkgPT09J2Z1bmN0aW9uJykgPyBrZXkoZGF0YSwgdmFsdWUsIHRhZ2JvZHkpXG4gICAgLy8gICAgICMgaW5zZXJ0KGtleTpTdHJpbmcpXG4gICAgLy8gICAgICAgIyA9PiBKU09OIDxrZXk+IHdoaWNocyB2YWx1ZSB0aGUgVEFHIGF0dHJpYnV0ZSBpcyBzZXQgdG9cblxuICAgIC8vICAgICAjIHJlbW92ZSgpXG4gICAgLy8gICAgICAgIyA9PiBNYXRjaGVkIFRBRyBpcyByZW1vdmVkIGZyb20gdGVtcGxhdGVcbiAgICAvLyAgICAgIyBwYXJ0aWFsKGh0bWw6SFRNTHN0cmluZ3xTdHJpbmd8RmlsZW5hbWUsIGRhdGE6SlNPTnxTdHJpbmcsIG1hcClcbiAgICAvLyAgICAgICAjID0+ID8/P1xuICAgIC8vICAgICAgICAgIyBodG1sIC0gbmV3IHRlbXBsYXRlIHRvIGJlIGFkZGVkIHwgaWQgb2YgRE9NIG5vZGUgd2hpY2hzIGlubmVySFRNTCBpcyB0aGUgdGVtcGxhdGVcbiAgICAvLyAgICAgICAgICMgICAgICAgICB8IGluIG5vZGVqcyBhIHJlbGF0aXZlIHBhdGggdG8gZmlsZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZVxuICAgIC8vICAgICAgICAgIyBkYXRhIC0gSlNPTiB8IGtleSBmb3IgSlNPTiBvZiBtYWluIHRlbXBsYXRlXG4gICAgLy8gICAgICAgICAjIG1hcCAgLSBkYXRhIG1hcHBpbmcgZm9yIHRoZSBwYXJ0aWFsIChpbnN0YW5jZSBvZiBQbGF0ZXMuTWFwKCkpXG5cbiAgICAvLyAgICMgU1lOVEFDVElDIFNVR0FSXG4gICAgLy8gICAgICMgaXMoYXR0cmlidXRlOlN0cmluZylcbiAgICAvLyAgICAgICAjID09PSBoYXMoL15hdHRyaWJ1dGUkLylcbiAgICAvLyAgICAgIyBjbGFzcyhjbGFzc25hbWU6U3RyaW5nKSxcbiAgICAvLyAgICAgIyBjbGFzc05hbWUoY2xhc3NuYW1lOlN0cmluZylcbiAgICAvLyAgICAgICAjID09PSB3aGVyZSgnY2xhc3MnKS5pcyhjbGFzc25hbWUpXG4gICAgLy8gICAgICAgIyA9PT0gd2hlcmUoJ2NsYXNzJykuaGFzKC9eY2xhc3NuYW1lJC8pXG4gICAgLy8gICAgICMgdG8oa2V5OlN0cmluZylcbiAgICAvLyAgICAgICAjID09PSB1c2Uoa2V5KVxuICAgIC8vICAgICAjIGFwcGVuZChodG1sOkhUTUxzdHJpbmd8U3RyaW5nfEZpbGVuYW1lLCBkYXRhOkpTT058U3RyaW5nLCBtYXApXG4gICAgLy8gICAgICAgIyA9PT0gcGFydGlhbChodG1sLCBkYXRhLCBtYXApXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgdmFyIFBsYXRlcyAgICA9IERFUHMuaG9sb24oKS5QbGF0ZXM7XG4gICAgdmFyIGhvbG9uaXplICA9IERFUHMuaG9sb24oKS5ob2xvbml6ZTtcbiAgICB2YXIgY29udHJhY3QgID0gQ09OVFJBQ1QuVkFMSURBVEU7XG5cblxuICAgIGJ1aWxkTGVhZFNoYXJlQXBwRnJvbnRlbmQoKTtcbiAgICBsZWFyblBsYXRlcygpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBmdW5jdGlvbiBidWlsZExlYWRTaGFyZUFwcEZyb250ZW5kICgpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZUluZGV4ICAgICA9IHJlcXVpcmUoJy4vaW5kZXgudGVtcGxhdGUuaHRtbCcpO1xuICAgICAgdmFyIHRlbXBsYXRlQ2FtcGFpZ24gID0gcmVxdWlyZSgnLi9jYW1wYWlnbi50ZW1wbGF0ZS5odG1sJyk7XG4gICAgICB2YXIgbWFwcGluZ0NhbXBhaWducyAgPSBQbGF0ZXMuTWFwKCk7XG4gICAgICB2YXIgbWFwcGluZ0luZGV4ICAgICAgPSBQbGF0ZXMuTWFwKCk7XG4gICAgICAvLyAvLyBQbGF0ZXMgY2FuIGFsc28gaXRlcmF0ZSB0aHJvdWdoIGNvbGxlY3Rpb25zOlxuXG4gICAgICBtYXBwaW5nQ2FtcGFpZ25zLndoZXJlKCdkYXRhLWJpbmQnKS5pcygndGl0bGUnKS51c2UoJ3RpdGxlJyk7XG4gICAgICBtYXBwaW5nQ2FtcGFpZ25zLndoZXJlKCdkYXRhLWJpbmQnKS5pcygnbG9jYXRpb24nKS51c2UoJ2xvY2F0aW9uJyk7XG4gICAgICBtYXBwaW5nSW5kZXguY2xhc3NOYW1lKCdjYW1wYWlnbnMnKS5wYXJ0aWFsKHRlbXBsYXRlQ2FtcGFpZ24sIEVOVi5wYXJhbXMuY2FtcGFpZ25zLCBtYXBwaW5nQ2FtcGFpZ25zKTtcblxuICAgICAgdmFyIE1BSU4gPSBQbGF0ZXMuYmluZCh0ZW1wbGF0ZUluZGV4LCB7fSwgbWFwcGluZ0luZGV4KTtcbiAgICAgIFRFU1RfQ09OVEFJTkVSLmlubmVySFRNTCA9IE1BSU47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVhcm5QbGF0ZXMgKCkge1xuICAgICAgLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHZhciB0ZW1wbGF0ZV9tYWluID0gJyAgPGRpdiBpZD1cImV4YW1wbGUyXCI+XFxcbiAgICAgIC8vICAgPGRpdj48aDEgY2xhc3M9XCJmb29cIj48L2gxPjx1bCBjbGFzcz1cIm1lbnVcIj48L3VsPjwvZGl2PlxcXG4gICAgICAvLyA8L2Rpdj4nXG4gICAgICAvLyB2YXIgdGVtcGxhdGVfc3ViICA9ICAgJzxkaXYgaWQ9XCJleGFtcGxlMVwiPlxcXG4gICAgICAvLyAgIDxsaSBjbGFzcz1cInBhcnRpYWxcIj50ZXN0PC9saT5cXFxuICAgICAgLy8gPC9kaXY+J1xuICAgICAgLy8gICB2YXIgZGF0YSAgICAgICAgICA9IHsgZm9vOiAnYmFyJyB9O1xuICAgICAgLy8gICB2YXIgbWFwICAgICAgICAgICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIC8vICAgbWFwLmNsYXNzKCdtZW51JykucGFydGlhbCh0ZW1wbGF0ZV9zdWIpO1xuICAgICAgLy8gICBtYXAuY2xhc3MoJ2ZvbycpLnBhcnRpYWwoZGF0YS5mb28pO1xuICAgICAgLy8gICB2YXIgcmVzdWx0ID0gUGxhdGVzLmJpbmQodGVtcGxhdGVfbWFpbiwgZGF0YSwgbWFwKVxuICAgICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gUkVTVUxUIC0gVEVTVFxuICAgICAgdmFyIHRlbXBsYXRlX1NVQjEgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9TVUIxLnRlbXBsYXRlLmh0bWwnKTtcbiAgICAgIHZhciB0ZW1wbGF0ZV9TVUIyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvU1VCMi50ZW1wbGF0ZS5odG1sJyk7XG4gICAgICB2YXIgdGVtcGxhdGVfU1VCMyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL1NVQjMudGVtcGxhdGUuaHRtbCcpO1xuICAgICAgdmFyIHRlbXBsYXRlX1NVQjQgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9TVUI0LnRlbXBsYXRlLmh0bWwnKTtcbiAgICAgIHZhciB0ZW1wbGF0ZV9TVUI1ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvU1VCNS50ZW1wbGF0ZS5odG1sJyk7XG4gICAgICB2YXIgdGVtcGxhdGVfTUFJTiA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL01BSU4udGVtcGxhdGUuaHRtbCcpO1xuXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgdmFyIGRhdGFfU1VCNSAgICAgICA9IHsgbmFtZTI6IFsnTG91aXMgQ0snLCAnQW5keSBLaW5kbGVyJywgJ0dyZWcgR2lyYWxkbycsICdhc2RmJ10gfTtcbiAgICAgIHZhciBkYXRhX1NVQjQgICAgICAgPSB7IHRlc3Q6ICdJbiBhZGRpdGlvbiwgaXQgY29udGFpbnMgY29udGVudCd9O1xuICAgICAgdmFyIGRhdGFfTUFJTiAgICAgICA9IHtcbiAgICAgICAgdXNlcjogICAgICAgXCJDaGFybHlcIixcbiAgICAgICAgaW1hZ2V1cmw6ICAgXCJodHRwOi8vc2hhdW55bmV3cy5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDQvZnVubnktcG9wdWxhci1mdW5ueS1waWN0dXJlcy13aXRoLWNhcHRpb25zLTQtNDQtcG9wdWxhci1mdW5ueS1waWN0dXJlcy13aXRoLWNhcHRpb25zLmpwZ1wiLFxuICAgICAgICBuZXd1cmw6ICAgICBcImh0dHA6Ly93d3cuYXNkZi5jb21cIixcbiAgICAgICAgbmV3dXJsMjogICAgXCJiYXp6XCIsXG4gICAgICAgIHVzZXI6ICAgICAgIFwiSm9obiBTbWl0aFwiLFxuICAgICAgICBtYWluX0E6ICAgICAgUGxhdGVzLmJpbmQodGVtcGxhdGVfU1VCNCwgZGF0YV9TVUI0KSxcbiAgICAgICAgbGlzdF9BOiAgICAgIFBsYXRlcy5iaW5kKHRlbXBsYXRlX1NVQjUsIGRhdGFfU1VCNSlcbiAgICAgIH07XG4gICAgICB2YXIgZGF0YV9TVUIgICAgICAgID0ge1xuICAgICAgICBib2luazogICAgICBcIj09IGkgYW0gaW5zZXJ0ZWQgY29udGVudCBvZiB0aGUgc3VidGVtcGxhdGUgPT1cIlxuICAgICAgfTtcbiAgICAgIHZhciBkYXRhX1NVQjIgICAgICAgPSBbXG4gICAgICAgIHsgbmFtZTogJ0xvdWlzIENLJ30sXG4gICAgICAgIHsgbmFtZTogJ0FuZHkgS2luZGxlcid9LFxuICAgICAgICB7IG5hbWU6ICdHcmVnIEdpcmFsZG8nfVxuICAgICAgXTtcbiAgICAgIHZhciBkYXRhX1NVQjMgICAgICAgPSB7IG5hbWU6IFsnTG91aXMgQ0snLCAnQW5keSBLaW5kbGVyJywgJ0dyZWcgR2lyYWxkbycsICdhc2RmJ10gfTtcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICB2YXIgbWFwcGluZ19NQUlOICAgID0gUGxhdGVzLk1hcCgpO1xuICAgICAgdmFyIG1hcHBpbmdfU1VCICAgICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIHZhciBtYXBwaW5nX1NVQjIgICAgPSBQbGF0ZXMuTWFwKCk7XG4gICAgICB2YXIgbWFwcGluZ19TVUIzICAgID0gUGxhdGVzLk1hcCgpO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIDEuIFNJTVBMRSAtIGlubmVySFRNTCBSRVBMQUNFTUVOVCB3aXRob3V0IE1BUFBJTkcgUlVMRVNcbiAgICAgICAgLy8gSElOVDogd2lsbCBvbmx5IHdvcmsgaWYgbm8gTUFQUElORyBSVUxFUyBBUkUgR0lWRU4gLSBvdGhlcndpc2UgRVhQTElDSVQgTUFQUElORyBuZWVkcyB0byBiZSBnaXZlbiAoZS5nLiAjKDEuKSlcbiAgICAgIC8vIEJ5IGRlZmF1bHQsIHBsYXRlcyB3aWxsIHRyeSB0byBtYXRjaCB0aGUga2V5XG4gICAgICAvLyBpbiB0aGUgZGF0YSB0byBhbiBpZCAobWU6YXR0cmlidXRlKSBpbiB0aGUgdGFnLCBzaW5jZSBib3RoIHNob3VsZCBiZSB1bmlxdWUuXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2RhdGEtYmluZCcpLmlzKCduYW1lJykudXNlKCd1c2VyJyk7IC8vICgxLilcbiAgICAgIC8vIDIuIFNJTVBMRSBNYXBwaW5nXG4gICAgICAvLyAvLyBJbiBldmVuIG1vcmUgY29tcGxleCBjYXNlcywgYW4gYXJiaXRyYXJ5IGF0dHJpYnV0ZSBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAgLy8gLy8gSWYgYSB2YWx1ZSBpcyBtYXRjaGVkLCBhIHNwZWNpZmljIHZhbHVlIGNhbiBiZSB1c2VkXG4gICAgICAvLyAvLyBhbmQgdGhlbiB1c2VkIGFzIGFub3RoZXIgYXR0cmlidXRlJ3MgdmFsdWUuXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2RhdGEtZm9vJykuaXMoJ2JhcicpLnVzZSgnaW1hZ2V1cmwnKS5hcygnc3JjJyk7IC8vICgyLilcbiAgICAgIC8vIDMuIFNJTVBMRSBSRVBMQUNFIE1hcHBpbmdcbiAgICAgIC8vIC8vIENPTVBMRVggSU5TVFJVQ1RJT05TXG4gICAgICAvLyAvLyBBbm90aGVyIGNvbW1vbiBjYXNlIGlzIHRvIHJlcGxhY2UgdGhlIHZhbHVlXG4gICAgICAvLyAvLyBvZiBhbiBhdHRyaWJ1dGUgaWYgaXQgaXMgYSBtYXRjaC5cbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgncGxhY2Vob2xkZXInKS5pcygnLycpLmluc2VydCgnbmV3dXJsJyk7IC8vICgzLilcbiAgICAgIC8vIDQuIFBBUlRJQUwgUkVQTEFDRSBNYXBwaW5nXG4gICAgICAvLyAvLyBQYXJ0aWFsIHZhbHVlIHJlcGxhY2VtZW50XG4gICAgICAvLyAvLyBgaGFzYCBjYW4gdGFrZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgncGxhY2Vob2xkZXInKS5oYXMoL2Jhci8pLmluc2VydCgnbmV3dXJsMicpOyAvLyAoNC4pXG4gICAgICAvLyA1LiBFWFBMSUNJVCBJTlNUUlVDVElPTlNcbiAgICAgIC8vIC8vIEEgY29tbW9uIHVzZSBjYXNlIGlzIHRvIGFwcGx5IHRoZSBuZXcgdmFsdWVcbiAgICAgIC8vIC8vIHRvIGVhY2ggdGFnJ3MgYm9keSBiYXNlZCBvbiB0aGUgY2xhc3MgYXR0cmlidXRlLlxuICAgICAgLy8gQVJSQVkgTWFwcGluZyAxXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2NsYXNzJykuaXMoJ25hbWUnKS51c2UoJ3VzZXInKTsgLy8gKDUuKVxuICAgICAgLy8gNi4gUEFSVElBTCAvIEFQUEVORCAtIHVzaW5nIFNVQiBURU1QTEFURVNcbiAgICAgIG1hcHBpbmdfU1VCLmNsYXNzTmFtZSgndHJvbGxpbmcnKS50bygnYm9pbmsnKTsgLy8gKDYuKVxuICAgICAgbWFwcGluZ19NQUlOLmNsYXNzTmFtZSgnaW5zZXJ0X3N1YnRlbXBsYXRlJykucGFydGlhbCh0ZW1wbGF0ZV9TVUIxLCBkYXRhX1NVQiwgbWFwcGluZ19TVUIpOyAvLyAoNi4pXG4gICAgICAvLyA3LiBDT0xMRUNUSU9OXG4gICAgICAvLyAvLyBQbGF0ZXMgY2FuIGFsc28gaXRlcmF0ZSB0aHJvdWdoIGNvbGxlY3Rpb25zOlxuICAgICAgbWFwcGluZ19TVUIyLndoZXJlKCdkYXRhLWJpbmQnKS5pcygnbmFtZScpLnVzZSgnbmFtZScpO1xuICAgICAgbWFwcGluZ19NQUlOLmNsYXNzTmFtZSgnaW5zZXJ0X2NvbGxlY3Rpb25BJykucGFydGlhbCh0ZW1wbGF0ZV9TVUIyLCBkYXRhX1NVQjIsIG1hcHBpbmdfU1VCMik7IC8vICg3LilcblxuICAgICAgLy8gOC4gQVJSQVlcbiAgICAgIG1hcHBpbmdfU1VCMy53aGVyZSgnZGF0YS1iaW5kJykuaXMoJ25hbWUnKS51c2UoJ25hbWUnKTtcbiAgICAgIG1hcHBpbmdfTUFJTi5jbGFzc05hbWUoJ2luc2VydF9BUlJBWScpLnBhcnRpYWwodGVtcGxhdGVfU1VCMywgZGF0YV9TVUIzLCBtYXBwaW5nX1NVQjMpOyAvLyAoOC4pXG4gICAgICAvLyA5LiBTVUJURU1QTEFUSU5HIGEuay5hIFBBUlRJQUxTXG4gICAgICAvLyAvLyBQbGF0ZXMgYWxzbyBzdXBwb3J0cyBwYXJ0aWFsczpcbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgnaWQnKS5pcygnbWFpbicpLnVzZSgnbWFpbl9BJyk7IC8vICg5LikgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IHdoeSBpcyBpdCBvdXRzaWRlIHRoZSByZWQgY29udGFpbmVyPz8/XG4gICAgICAvLyAxMC4gQVJSQVkgd2l0aCBCSU5EXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2NsYXNzJykuaXMoJ2xpc3QnKS51c2UoJ2xpc3RfQScpOyAvLyAoMTAuKSAgICAgICAgICAgICAgIC8vIEBUT0RPOiB3aHkgaXMgaXQgb3V0c2lkZSB0aGUgcmVkIGNvbnRhaW5lcj8/P1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEBUT0RPOiBDcmVhdGUgYW4gYXR0cmlidXRlIGlmIG5vdCBwcmVzZW50XG4gICAgICB2YXIgIFJFU1VMVCA9IFBsYXRlcy5iaW5kKHRlbXBsYXRlX01BSU4sIGRhdGFfTUFJTiwgbWFwcGluZ19NQUlOKTtcbiAgICAgIC8vIE5PVCBJTiBVU0VcbiAgICAgIC8vICAgdmFyIGRhdGEgPSB7XG4gICAgICAvLyAgICAgXCJhZGRyZXNzXCI6IFwiaHR0cDovL2dpdGh1Yi5jb20vaGlqMW54XCIsXG4gICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0aHViXCJcbiAgICAgIC8vICAgfTtcbiAgICAgIC8vICAgbWFwLndoZXJlKCdjbGFzcycpLmlzKCdsaW5rJykudXNlKCdhZGRyZXNzJykuYXMoJ2hyZWYnKTtcbiAgICAgIC8vICAgbWFwLndoZXJlKCdjbGFzcycpLmlzKCdsaW5rJykudXNlKCduYW1lJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1JFU1VMVFwiKS5pbm5lckhUTUwgPSBSRVNVTFQ7XG4gICAgfVxuICB9XG5cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4gIGZ1bmN0aW9uIFBST0RVQ1RJT05fTU9ERSAoKSB7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURhdGEgKHgpIHtcbiAgICAgIC8vIEBUT0RPOiBSRUZBQ1RPUklORyAtIHVzZSBTQ0hFTUEgdG8ga25vdyBob3cgdG8gc2VuZCBEQVRBXG5cbiAgICAgIC8vIFRSQU5TTEFURSBGT1JNQVQgLSBSRUNFSVZFRCBEQVRBIDIgU0VORCBEQVRBXG4gICAgICB2YXIgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkod2luZG93LmRhdGFbMF0pKTtcbiAgICAgIGRlbGV0ZSB0ZW1wLmJ1c2luZXNzcmVsYXRpb25faWRzO1xuICAgICAgLy8gdGVtcC5idXNpbmVzc3JlbGF0aW9uX2lkcyA9IFtdO1xuICAgICAgZGVsZXRlIHRlbXAudG9waWNfaWRzO1xuICAgICAgLy8gdGVtcC50b3BpY19pZHMgPSBbXTtcbiAgICAgIGRlbGV0ZSB0ZW1wLmludGVybmFsX2NvbnRhY3RfcGVyc29uX2lkcztcbiAgICAgIC8vIHRlbXAuaW50ZXJuYWxfY29udGFjdF9wZXJzb25faWRzID0gW107XG4gICAgICBkZWxldGUgdGVtcC5mdWxsbmFtZTtcbiAgICAgIHRlbXAudml0YV9zdGVwc19hdHRyaWJ1dGVzID0geyB9O1xuICAgICAgdGVtcC52aXRhX3N0ZXBzX2F0dHJpYnV0ZXNbMF0gPSB7IHVzZXJfaWQ6ICBVU0VSLklELCB0aXRsZTogJ2JsYScsIGRlc2NyaXB0aW9uOiAnbG9yZW0gaXBzdW0nIH07XG4gICAgICB0ZW1wLnZpdGFfc3RlcHNfYXR0cmlidXRlc1sxXSA9IHsgdXNlcl9pZDogIFVTRVIuSUQsIHRpdGxlOiAnYmxhMicsIGRlc2NyaXB0aW9uOiAnIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtJyB9O1xuICAgICAgZGVsZXRlIHRlbXAudml0YV9zdGVwcztcblxuICAgICAgdGVtcC51c2VyX2lkID0gdGVtcC51c2VyX2lkLmlkO1xuXG5cbiAgICAgIC8vIEdFTkVSQVRFIE5FVyBEQVRBIGZyb20gU0FNUExFIElURU0gXCJ4XCJcbiAgICAgIC8vIChieSBhZGRpbmcgcmFuZG9tIG51bWJlciB0byB0aGUgZW5kIG9mIHNvbWUgYXR0cmlidXRlcyk7XG4gICAgICB0ZW1wLmZpcnN0bmFtZSAgICAgICAgICAgICA9ICdIYW5zJyt4O1xuICAgICAgdGVtcC5sYXN0bmFtZSAgICAgICAgICAgICAgPSAnTWVpZXInK3g7XG4gICAgICB0ZW1wLmVtYWlsICAgICAgICAgICAgICAgICA9ICdoYW5zLm1laWVyJyt4KydAZW1haWwuY29tJztcbiAgICAgIHRlbXAucGhvbmUgICAgICAgICAgICAgICAgID0gJzEyMzQ1NicreDtcbiAgICAgIHRlbXAubW9iaWxlICAgICAgICAgICAgICAgID0gJzAxNzcgMTIzNCAxMjM0Jyt4O1xuICAgICAgdGVtcC5waG9uZV9jb21wYW55ICAgICAgICAgPSAnMDMwIDEyMzQ1Jyt4O1xuICAgICAgdGVtcC5lbWFpbF9jb21wYW55ICAgICAgICAgPSAnaGFucy5tZWllcicreCsnQGNvbXBhbnkuY29tJztcbiAgICAgIHRlbXAuYnVzaW5lc3NfdW5pdCAgICAgICAgID0gJ0h1bWFuIFJlc3NvdXJjZScreDtcbiAgICAgIHRlbXAucG9zaXRpb24gICAgICAgICAgICAgID0gJ0tleSBBY2NvdW50IE1hbmFnZXInK3g7XG4gICAgICB0ZW1wLmNvbXBhbnlfbmFtZSAgICAgICAgICA9ICdFeGFtcGxlIEdtYkgnK3g7XG4gICAgICB0ZW1wLmNvbXBhbnlfbmFtZV9hZGRpdGlvbiA9ICdIb2xkaW5nJyt4O1xuICAgICAgdGVtcC5zdHJlZXQgICAgICAgICAgICAgICAgPSAnSGF1cHRzdHJhc3NlIDU1Jyt4O1xuICAgICAgdGVtcC5zdHJlZXRfYWRkaXRpb24gICAgICAgPSAnTmViZW53ZWcgNScreDtcbiAgICAgIHRlbXAuemlwICAgICAgICAgICAgICAgICAgID0gJzU1NTMzMycreDtcbiAgICAgIHRlbXAucG9zdF9ib3ggICAgICAgICAgICAgID0gJzUzNTM1MycreDtcbiAgICAgIHRlbXAucG9zdF9ib3hfemlwICAgICAgICAgID0gJzUzNTM1MyBQT1NUIEJPWCcreDtcbiAgICAgIHRlbXAuY2l0eSAgICAgICAgICAgICAgICAgID0gJ0JlcmxpbicreDtcbiAgICAgIHRlbXAuY291bnRyeV9uYW1lICAgICAgICAgID0gJ0RldXRzY2hsYW5kJyt4O1xuICAgICAgdGVtcC5yZWdpb24gICAgICAgICAgICAgICAgPSAnQmVybGluIFJlZ2lvbicreDtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuICAgIC8vIEBUT0RPOiBDT05UUkFDVCAtIFNUQVRJQ19UWVBFLCBEVUNLX1RZUEUsIEZJTExFRF9FWEFNUExFLCBFTVBUWV9FWEFNUExFXG4gICAgdmFyIFNDSEVNQSA9IHsgLy8gQFRPRE86IHVudGVyc2NoZWlkZW4gendpc2NoZW4gXCJyZWNlaXZlXCIgYW5kIFwic2VuZFwiLCAuLi4gd2hpY2ggZmllbGRzIGhhdmUgd2hpY2ggXCJyaWdodHNcIj8gKENSVUQpXG4gICAgICAvLyBTRU5EIDIgRlJPTlRFTkQgRklFTERTIC0gd2lsbCBiZSBkZWZpbmVkIGJ5IEZST05URU5EIERFVkVMT1BFUlxuICAgICAgLy8gU0VORCAyIEJBQ0tFTkQgRklFTERTICAtIHdpbGwgYmUgZGVmaW5lZCBieSBCQUNLRU5EIERFVkVMT1BFUlxuICAgICAgaWQgICAgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJJbnRlZ2VyXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGZpcnN0bmFtZSAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBsYXN0bmFtZSAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZ2VuZGVyICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHRpdGxlICAgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBidXNpbmVzc3JlbGF0aW9uX2lkcyAgICAgIDogeyB0eXBlOiBcIkFycmF5XCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHRvcGljX2lkcyAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiQXJyYXlcIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgdXNlcl9pZCAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJJbnRlZ2VyXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGludGVybmFsX2NvbnRhY3RfcGVyc29uX2lkcyA6IHsgdHlwZTogXCJBcnJheVwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBwaG9uZSAgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgbW9iaWxlICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGVtYWlsICAgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBwaG9uZV9jb21wYW55ICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZmF4ICAgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGVtYWlsX2NvbXBhbnkgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBidXNpbmVzc191bml0ICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgcG9zaXRpb24gICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGV2ZW50X2ludml0YXRpb25fcmVjZWl2ZXIgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBlbWFpbF9yZWNlaXZlciAgICAgICAgICAgIDogeyB0eXBlOiBcIkJvb2xlYW5cIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgbWFzc19lbWFpbF9yZWNlaXZlciAgICAgICA6IHsgdHlwZTogXCJCb29sZWFuXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGF0dGFpbmluZ19wdWJsaWNfb2ZmaWNlICAgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBwaG9uZV9yZWNlaXZlciAgICAgICAgICAgIDogeyB0eXBlOiBcIkJvb2xlYW5cIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZmF4X3JlY2VpdmVyICAgICAgICAgICAgICA6IHsgdHlwZTogXCJCb29sZWFuXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGxldHRlcl9yZWNlaXZlciAgICAgICAgICAgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBjb21wYW55X25hbWUgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgY29tcGFueV9uYW1lX2FkZGl0aW9uICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHN0cmVldCAgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBzdHJlZXRfYWRkaXRpb24gICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgemlwICAgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHBvc3RfYm94ICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBwb3N0X2JveF96aXAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgY2l0eSAgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGNvdW50cnlfbmFtZSAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICByZWdpb24gICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgdml0YV9zdGVwc19hdHRyaWJ1dGVzICAgICA6IHsgdHlwZTogXCJBcnJheVwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBkZWxldGVkICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIkJvb2xlYW5cIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCBzYW1wbGU6IGZhbHNlIH0gLy8gc2hvdWxkIG5vdCBiZSBwcmVzZW50XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFR5cGVzKCkge1xuICAgICAgdmFyIHRlbXAgPSB7fTtcbiAgICAgIGZvciAoa2V5IGluIFNDSEVNQSkge1xuICAgICAgICB0ZW1wW2tleV0gPSBTQ0hFTUFba2V5XS50eXBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhbGlkYXRvcnMoKSB7XG4gICAgICB2YXIgdGVtcCA9IHt9O1xuICAgICAgZm9yIChrZXkgaW4gU0NIRU1BKSB7XG4gICAgICAgIHRlbXBba2V5XSA9IFNDSEVNQVtrZXldLnZhbGlkYXRvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTYW1wbGVzKCkge1xuICAgICAgdmFyIHRlbXAgPSB7fTtcbiAgICAgIGZvciAoa2V5IGluIFNDSEVNQSkge1xuICAgICAgICB0ZW1wW2tleV0gPSBTQ0hFTUFba2V5XS5zYW1wbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBWQUxJREFURSAoZGF0YSwgY29sbGVjdGlvbiwgc2NoZW1hKSB7XG4gICAgICB2YXIgREFUQTtcbiAgICAgIGZvcihpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgIERBVEEgPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZm9yIChrZXkgaW4gREFUQSkge1xuICAgICAgICAgIGlmICghKFNDSEVNQVtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoISgoU0NIRU1BW2tleV0udmFsaWRhdG9yKShEQVRBW2tleV0pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuXG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBDT05GSUdVUkUgUkFJTkJPV1VOSUNPUk4gQ09NUE9FTlRcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gU1RBUlQgKGRhdGEsIHNjaGVtYSwgY29sbGVjdGlvbiwgY29udGFpbmVyUXVlcnkpIHtcblxuXG4gICAgICBmdW5jdGlvbiBidWlsZERhdGFTZWxlY3QoY29sbGVjdGlvbkRhdGEsIGN1c3RvbWVyRGF0YSwgaXNNdWx0aXBsZSkge1xuICAgICAgICB2YXIgaHRtbENvZGUgPSAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlID0gJycsXG4gICAgICAgICAgICBzZWxlY3RlZCA9ICcnXG4gICAgICAgIDtcblxuICAgICAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICAgIG11bHRpcGxlID0gJyBtdWx0aXBsZT1cInRydWVcIic7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sQ29kZSArPSAnPHNlbGVjdCBjbGFzcz1cImNoem4tc2VsZWN0XCInICsgbXVsdGlwbGUgKyAnIHN0eWxlPVwid2lkdGg6IDI3OHB4O1wiIGRhdGEtcGxhY2Vob2xkZXI9XCIgXCI+JztcbiAgICAgICAgaHRtbENvZGUgKz0gJzxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj4nO1xuXG4gICAgICAgIC8vIHVzZXJfaWQgc29sbHRlIGFycmF5IHNlaW4gZnVlciB3ZWl0ZXJlIFZlcmFyYmVpdHVuZ1xuICAgICAgICBpZiAodHlwZW9mKGN1c3RvbWVyRGF0YSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY3VzdG9tZXJEYXRhID0gW2N1c3RvbWVyRGF0YV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoaW5kZXggaW4gY29sbGVjdGlvbkRhdGEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mKGNvbGxlY3Rpb25EYXRhW2luZGV4XSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21lckRhdGEgJiYgY3VzdG9tZXJEYXRhLmluZGV4T2YoY29sbGVjdGlvbkRhdGFbaW5kZXhdLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkID0gJyBzZWxlY3RlZD1cInRydWVcIic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sQ29kZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBjb2xsZWN0aW9uRGF0YVtpbmRleF0uaWQgKyAnXCInICsgc2VsZWN0ZWQgKyAnPicgKyBjb2xsZWN0aW9uRGF0YVtpbmRleF0udGl0bGUgKyAnPC9vcHRpb24+JztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihjb2xsZWN0aW9uRGF0YVtpbmRleF0pID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tZXJEYXRhICYmIGN1c3RvbWVyRGF0YS5pbmRleE9mKGNvbGxlY3Rpb25EYXRhW2luZGV4XSkgPiAtMSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9ICcgc2VsZWN0ZWQ9XCJ0cnVlXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbENvZGUgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgY29sbGVjdGlvbkRhdGFbaW5kZXhdICsgJ1wiJyArIHNlbGVjdGVkICsgJz4nICsgY29sbGVjdGlvbkRhdGFbaW5kZXhdICsgJzwvb3B0aW9uPic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbENvZGUgKz0gJzwvc2VsZWN0Pic7XG4gICAgICAgIHJldHVybiBodG1sQ29kZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGREYXRhUmFkaW8oY3VzdG9tZXJEYXRhLCBpbnB1dE5hbWUpIHtcbiAgICAgICAgdmFyIGh0bWxDb2RlID0gJycsXG4gICAgICAgICAgICBjaGVja2VkVHJ1ZSA9ICcnLFxuICAgICAgICAgICAgY2hlY2tlZEZhbHNlID0gJydcbiAgICAgICAgO1xuXG4gICAgICAgIGlmIChjdXN0b21lckRhdGEgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNoZWNrZWRUcnVlID0gJyBjaGVja2VkPVwidHJ1ZVwiJztcbiAgICAgICAgfSBlbHNlIGlmIChjdXN0b21lckRhdGEgPT0gZmFsc2UpIHtcbiAgICAgICAgICBjaGVja2VkRmFsc2UgPSAnIGNoZWNrZWQ9XCJ0cnVlXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbENvZGUgKz0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArIGlucHV0TmFtZSArICdcIiB2YWx1ZT1cInRydWVcIicgKyBjaGVja2VkVHJ1ZSArICcvPkphJztcbiAgICAgICAgaHRtbENvZGUgKz0gJzxzcGFuIGNsYXNzPVwicmFkaW9fc3BhY2VyXCI+PC9zcGFuPic7XG4gICAgICAgIGh0bWxDb2RlICs9ICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIicgKyBpbnB1dE5hbWUgKyAnXCIgdmFsdWU9XCJmYWxzZVwiJyArIGNoZWNrZWRGYWxzZSArICcvPk5laW4nO1xuICAgICAgICByZXR1cm4gaHRtbENvZGU7XG4gICAgICB9XG5cblxuXG4gICAgICAvLy8vIENSRUFURSBUUkFOU0ZPUk1FRCBEQVRBU0VUXG4gICAgICBmdW5jdGlvbiB0cmFuc2Zvcm0oZGF0YSkge1xuICAgICAgICBmb3IoaXRlbSBpbiBkYXRhKSB7XG4gICAgICAgICAgZGF0YVtpdGVtXS5nZW5kZXIgICAgICAgICAgICAgICAgICAgICA9IGJ1aWxkRGF0YVNlbGVjdChjb2xsZWN0aW9uLmdlbmRlciwgZGF0YVtpdGVtXS5nZW5kZXIsIGZhbHNlKTtcbiAgICAgICAgICBkYXRhW2l0ZW1dLnVzZXJfaWQgICAgICAgICAgICAgICAgICAgID0gYnVpbGREYXRhU2VsZWN0KGNvbGxlY3Rpb24udXNlcl9pZCwgZGF0YVtpdGVtXS51c2VyX2lkLCBmYWxzZSk7XG4gICAgICAgICAgZGF0YVtpdGVtXS5pbnRlcm5hbF9jb250YWN0X3BlcnNvbl9pZHMgPSBidWlsZERhdGFTZWxlY3QoY29sbGVjdGlvbi5pbnRlcm5hbF9jb250YWN0X3BlcnNvbl9pZHMsIGRhdGFbaXRlbV0uaW50ZXJuYWxfY29udGFjdF9wZXJzb25faWRzLCB0cnVlKTtcbiAgICAgICAgICBkYXRhW2l0ZW1dLmJ1c2luZXNzcmVsYXRpb25faWRzICAgICAgID0gYnVpbGREYXRhU2VsZWN0KGNvbGxlY3Rpb24uYnVzaW5lc3NyZWxhdGlvbl9pZHMsIGRhdGFbaXRlbV0uYnVzaW5lc3NyZWxhdGlvbl9pZHMsIHRydWUpO1xuICAgICAgICAgIGRhdGFbaXRlbV0udG9waWNfaWRzICAgICAgICAgICAgICAgICAgPSBidWlsZERhdGFTZWxlY3QoY29sbGVjdGlvbi50b3BpY19pZHMsIGRhdGFbaXRlbV0udG9waWNfaWRzLCB0cnVlKTtcbiAgICAgICAgICBkYXRhW2l0ZW1dLmV2ZW50X2ludml0YXRpb25fcmVjZWl2ZXIgID0gYnVpbGREYXRhUmFkaW8oZGF0YVtpdGVtXS5ldmVudF9pbnZpdGF0aW9uX3JlY2VpdmVyLCBcInNldHRpbmdzX2V2ZW50XCIpO1xuICAgICAgICAgIGRhdGFbaXRlbV0ucGhvbmVfcmVjZWl2ZXIgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLnBob25lX3JlY2VpdmVyLCBcInNldHRpbmdzX3Bob25lXCIpO1xuICAgICAgICAgIGRhdGFbaXRlbV0uZW1haWxfcmVjZWl2ZXIgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmVtYWlsX3JlY2VpdmVyLCBcInNldHRpbmdzX2VtYWlsXCIpO1xuICAgICAgICAgIGRhdGFbaXRlbV0uZmF4X3JlY2VpdmVyICAgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmZheF9yZWNlaXZlciwgXCJzZXR0aW5nc19mYXhcIik7XG4gICAgICAgICAgZGF0YVtpdGVtXS5tYXNzX2VtYWlsX3JlY2VpdmVyICAgICAgICA9IGJ1aWxkRGF0YVJhZGlvKGRhdGFbaXRlbV0ubWFzc19lbWFpbF9yZWNlaXZlciwgXCJzZXR0aW5nc19tYXNzX2VtYWlsXCIpO1xuICAgICAgICAgIGRhdGFbaXRlbV0ubGV0dGVyX3JlY2VpdmVyICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmxldHRlcl9yZWNlaXZlciwgXCJzZXR0aW5nc19sZXR0ZXJcIik7XG4gICAgICAgICAgZGF0YVtpdGVtXS5hdHRhaW5pbmdfcHVibGljX29mZmljZSAgICA9IGJ1aWxkRGF0YVJhZGlvKGRhdGFbaXRlbV0uYXR0YWluaW5nX3B1YmxpY19vZmZpY2UsIFwic2V0dGluZ3Nfb2ZmaWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICAvLy8vIENSRUFURSBTQ0hFTUEgLSBub3QgaW4gdXNlIGN1cnJlbnRseSAtXG4gICAgICBmdW5jdGlvbiBnZXRTY2hlbWEgKFNDSEVNQSkge1xuICAgICAgICB2YXIgc2NoZW1hID0gW107XG4gICAgICAgIGZvcihrZXkgaW4gU0NIRU1BKSB7XG4gICAgICAgICAgaWYgKFNDSEVNQS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzY2hlbWEucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICBkYXRhID0gdHJhbnNmb3JtKGRhdGEpO1xuXG4gICAgICAvLyBCVUlMRCBBUFBcbiAgICAgIHdpbmRvdy5JS1VTRUkgPSAoZnVuY3Rpb24gYnVpbGRBcHAgKEFQUCkge1xuICAgICAgICAvLzo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAvLyBDT05GSUdVUkUgQ09NUE9ORU5UUyAtIERZTkFXUkFQUEVSXG4gICAgICAgIEFQUC5EWU5BV1JBUFBFUiA9IChmdW5jdGlvbiBpbml0X2R5bmF0YWJsZSAoQ09OVEFJTkVSKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSAndjAuMC4xL2FwaS9jb21wb25lbnRzL0R5bmFXcmFwcGVyLmh0bWwnO1xuICAgICAgICAgIC8vIElOU1RBTlRJQVRFIFRFTVBMQVRFXG4gICAgICAgICAgdmFyIGR5bmF0YWJsZSA9IERFUHMuaG9sb24uZ2V0VGVtcGxhdGUobmFtZSk7XG4gICAgICAgICAgLy8gU0VUIERVTU1ZIERBVEEgKGluc3RlYWQgb2YgYmFja2VuZCByZW5kZXJlZCB2ZXJzaW9uKVxuICAgICAgICAgIC8vIGR5bmF0YWJsZS5hamF4ICAgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAvLyBkeW5hdGFibGUuYWpheFVybCAgICAgICAgICAgICA9IFwiL2FkbWluL2N1c3RvbWVycy9zZWFyY2guanNvblwiO1xuICAgICAgICAgIC8vIGR5bmF0YWJsZS5hamF4T25Mb2FkICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICBkeW5hdGFibGUuZGF0YXNldC5qc29uICAgICAgICA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgIGR5bmF0YWJsZS5kYXRhc2V0LmNvbGxlY3Rpb24gID0gSlNPTi5zdHJpbmdpZnkoY29sbGVjdGlvbik7XG4gICAgICAgICAgZHluYXRhYmxlLmRhdGFzZXQuc2NoZW1hICAgICAgPSBKU09OLnN0cmluZ2lmeSgoZnVuY3Rpb24gZmlsdGVyKCkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgICAgIC8vIHJldHVybiBbJycsICdmdWxsbmFtZScsICdjb21wYW55X25hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAnYWN0aW9uJ107IC8vIEBUT0RPOiB3aXRoIHNlbGVjdGJveFxuICAgICAgICAgICAgcmV0dXJuIFsnZnVsbG5hbWUnLCAnY29tcGFueV9uYW1lJywgJ2VtYWlsJywgJ3Bob25lJywgJ2FjdGlvbiddO1xuICAgICAgICAgIH0pKCkpO1xuICAgICAgICAgIC8vIFBSRVBST0NFU1MgLSBDT05GSUdVUkUgU0NIRU1BXG4gICAgICAgICAgREVQcy5EeW5hV3JhcHBlci5zZXRTY2hlbWEoZHluYXRhYmxlKTtcbiAgICAgICAgICAvLyBJTlNFUlQgVEVNUExBVEVcbiAgICAgICAgICAvLyBAVE9ETzogUmVhbGl6ZSB0aGUgQVBJIGJlbG93LCB0aHVzOiByZWR1Y2UgQ09NUE9ORU5UIEFQSVxuICAgICAgICAgIC8vIERFUHMuaG9sb24uaW5zZXJ0VGVtcGxhdGUoQ09OVEFJTkVSLCBURU1QTEFURSwgREFUQSwgU0NIRU1BKTtcbiAgICAgICAgICBERVBzLmhvbG9uLmluc2VydFRlbXBsYXRlKENPTlRBSU5FUiwgZHluYXRhYmxlKTtcbiAgICAgICAgICAvLyBDT05GSUdVUkUgRFlOQVRBQkxFXG4gICAgICAgICAgREVQcy5EeW5hV3JhcHBlci5pbml0VGFibGUoZHluYXRhYmxlKTtcbiAgICAgICAgICAvLyBQVUJMSVNIIEVOVElUWSBJTlRFUkZBQ0VcbiAgICAgICAgICByZXR1cm4gZHluYXRhYmxlO1xuICAgICAgICB9KShjb250YWluZXJRdWVyeSk7XG5cblxuICAgICAgICAvLzo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAvLyBDT05GSUdVUkUgQ09NUE9ORU5UUyAtIENPTVBMRVhGT1JNXG4gICAgICAgIEFQUC5DT01QTEVYRk9STSA9IChmdW5jdGlvbiBpbml0X2NvbXBsZXhmb3JtIChDT05UQUlORVIpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9ICd2MC4wLjEvYXBpL2NvbXBvbmVudHMvQ29tcGxleGZvcm0uaHRtbCc7XG4gICAgICAgICAgLy8gSU5TVEFOVElBVEUgVEVNUExBVEVcbiAgICAgICAgICB2YXIgY29tcGxleGZvcm0gPSBERVBzLmhvbG9uLmdldFRlbXBsYXRlKG5hbWUpO1xuICAgICAgICAgIC8vIFNFVCBEVU1NWSBEQVRBIChpbnN0ZWFkIG9mIGJhY2tlbmQgcmVuZGVyZWQgdmVyc2lvbilcbiAgICAgICAgICBjb21wbGV4Zm9ybS5kYXRhc2V0Lmpzb24gICAgPSBKU09OLnN0cmluZ2lmeShkYXRhWzBdKTtcbiAgICAgICAgICBjb21wbGV4Zm9ybS5kYXRhc2V0LnNjaGVtYSAgPSBKU09OLnN0cmluZ2lmeSgoZnVuY3Rpb24gZmlsdGVyKCkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgICAgICAgICAvLyByZXR1cm4gWycnLCAnZnVsbG5hbWUnLCAnY29tcGFueV9uYW1lJywgJ2VtYWlsJywgJ3Bob25lJywgJ2FjdGlvbiddO1xuICAgICAgICAgIH0pKCkpO1xuICAgICAgICAgIC8vIElOU0VSVCBURU1QTEFURVxuICAgICAgICAgIERFUHMuaG9sb24uaW5zZXJ0VGVtcGxhdGUoQ09OVEFJTkVSLCBjb21wbGV4Zm9ybSk7XG4gICAgICAgICAgLy8gQ09ORklHVVJFIENPTVBMRVhGT1JNXG4gICAgICAgICAgREVQcy5Db21wbGV4Zm9ybS5pbml0KGNvbXBsZXhmb3JtKTtcbiAgICAgICAgICAvLyBQVUJMSVNIIEVOVElUWSBJTlRFUkZBQ0VcbiAgICAgICAgICByZXR1cm4gY29tcGxleGZvcm07XG4gICAgICAgIH0pKGNvbnRhaW5lclF1ZXJ5KTtcblxuXG4gICAgICAgIC8vOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgIChmdW5jdGlvbiB3aXJlVXBfQ09NUExFWEZPUk0oKSB7IC8vIChtYXAgJ2NvbXBvbmVudCBldmVudHMnIHRvICdjb21wb25lbnQgYXBpcycpXG4gICAgICAgICAgQVBQLkRZTkFXUkFQUEVSLmFkZEV2ZW50TGlzdGVuZXIoJ0FERCcsIGZ1bmN0aW9uIChFVkVOVCkge1xuICAgICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLmNsYXNzTmFtZSA9IEFQUC5DT01QTEVYRk9STS5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAgICAgJ1NUQVRFPWhpZGRlbicsXG4gICAgICAgICAgICAgICdTVEFURT1jcmVhdGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLnN0eWxlLnRvcCA9IEVWRU5ULmRldGFpbC5wb3NpdGlvbiArIFwicHhcIjtcbiAgICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5BUEkuSU5URVJGQUNFWydVU0VSX0FERCddKEVWRU5ULmRldGFpbC5kYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIEFQUC5EWU5BV1JBUFBFUi5hZGRFdmVudExpc3RlbmVyKCdTRVQnLCBmdW5jdGlvbiAoRVZFTlQpIHtcbiAgICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5jbGFzc05hbWUgPSBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICAgICdTVEFURT1oaWRkZW4nLFxuICAgICAgICAgICAgICAnU1RBVEU9dXBkYXRlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5zdHlsZS50b3AgPSBFVkVOVC5kZXRhaWwucG9zaXRpb24gKyBcInB4XCI7XG4gICAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uQVBJLklOVEVSRkFDRVsnVVNFUl9TRVQnXShFVkVOVC5kZXRhaWwuZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICAvLzo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAoZnVuY3Rpb24gd2lyZVVwX0RZTkFXUkFQUEVSKCkgeyAvLyAobWFwICdjb21wb25lbnQgZXZlbnRzJyB0byAnY29tcG9uZW50IGFwaXMnKVxuICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5hZGRFdmVudExpc3RlbmVyKCdDQU5DRUwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBTaG91bGQgbWF5YmUgaGFwcGVuIFwiY29tcGxleGZvcm0gaW50ZXJuYWxseVwiIC0gQFRPRE86IEhPT0sgQ0FORElEQVRFXG4gICAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lID0gQVBQLkNPTVBMRVhGT1JNLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAnU1RBVEU9dXBkYXRlJyxcbiAgICAgICAgICAgICAgJ1NUQVRFPWhpZGRlbidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lID0gQVBQLkNPTVBMRVhGT1JNLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAnU1RBVEU9Y3JlYXRlJyxcbiAgICAgICAgICAgICAgJ1NUQVRFPWhpZGRlbidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uYWRkRXZlbnRMaXN0ZW5lcignU0FWRScsIGZ1bmN0aW9uIChFVkVOVCkge1xuICAgICAgICAgICAgQVBQLkRZTkFXUkFQUEVSLkFQSS5JTlRFUkZBQ0VbJ3NldCddKEVWRU5ULmRldGFpbC5kYXRhLmlkLCBFVkVOVC5kZXRhaWwuZGF0YSk7XG4gICAgICAgICAgICBERVBzLkFKQVgudXBkYXRlKEVWRU5ULmRldGFpbC5kYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5hZGRFdmVudExpc3RlbmVyKCdORVhUJywgZnVuY3Rpb24gKEVWRU5UKSB7XG4gICAgICAgICAgICBpZiAoRVZFTlQuZGV0YWlsLmRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBBUFAuRFlOQVdSQVBQRVIuQVBJLklOVEVSRkFDRVsnZ2V0J10oRVZFTlQuZGV0YWlsLmRhdGErMSk7XG4gICAgICAgICAgICAgIERFUHMuQUpBWC5yZWFkKHtpZDpFVkVOVC5kZXRhaWwuZGF0YSsxfSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLkFQSS5JTlRFUkZBQ0VbJ1VTRVJfU0VUJ10oSlNPTi5wYXJzZShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAvLyBAVE9ETzogYWN0aXZhdGUgUFJFViBidXR0b24gSUYgZGVhY3RpdmF0ZWQgLSBpbXBvcnRhbnQgZm9yIEZJUlNUIERBVEEgU0VUXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEBUT0RPOiBkZWFjdGl2YXRlIE5FWFQgYnV0dG9uIC0gaW1wb3J0YW50IGZvciBMQVNUIERBVEEgU0VUXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uYWRkRXZlbnRMaXN0ZW5lcignUFJFVicsIGZ1bmN0aW9uIChFVkVOVCkge1xuICAgICAgICAgICAgaWYgKEVWRU5ULmRldGFpbC5kYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHZhciBpdGVtID0gQVBQLkRZTkFXUkFQUEVSLkFQSS5JTlRFUkZBQ0VbJ2dldCddKEVWRU5ULmRldGFpbC5kYXRhLTEpO1xuICAgICAgICAgICAgICBERVBzLkFKQVgucmVhZCh7aWQ6RVZFTlQuZGV0YWlsLmRhdGEtMX0sIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIEFQUC5DT01QTEVYRk9STS5BUEkuSU5URVJGQUNFWydVU0VSX1NFVCddKEpTT04ucGFyc2UoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IGFjdGl2YXRlIE5FWFQgYnV0dG9uIElGIGRlYWN0aXZhdGVkIC0gaW1wb3J0YW50IGZvciBMQVNUIERBVEEgU0VUXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEBUT0RPOiBkZWFjdGl2YXRlIFBSRVYgYnV0dG9uIC0gaW1wb3J0YW50IGZvciBGSVJTVCBEQVRBIFNFVFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIC8vOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgIC8vIERFUExPWSBBUFBcbiAgICAgICAgcmV0dXJuIEFQUDtcbiAgICAgIH0pKHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGdlbmVyYXRlRGF0YSAgOiBnZW5lcmF0ZURhdGEsXG4gICAgICBTQ0hFTUEgICAgICAgIDogU0NIRU1BLFxuICAgICAgZ2V0VHlwZXMgICAgICA6IGdldFR5cGVzLFxuICAgICAgZ2V0VmFsaWRhdG9ycyA6IGdldFZhbGlkYXRvcnMsXG4gICAgICBnZXRTYW1wbGVzICAgIDogZ2V0U2FtcGxlcyxcbiAgICAgIFZBTElEQVRFICAgICAgOiBWQUxJREFURSxcbiAgICAgIFNUQVJUICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNUQVJUIChEQVRBLCBTQ0hFTUEsIENPTExFQ1RJT04sIENPTlRBSU5FUik7XG4gICAgICB9XG4gICAgfTtcbiAgICAgIFxuICB9XG59KHt9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1wiPlxcbjwhLS0gICA8c3Bhbj48aW1nIHNyYz1cImFzc2V0cy9hYjNhNjZkZjQ1NDI4NzUyLnBuZ1wiPjwvc3Bhbj5cXG4gIDxzcGFuPjxpbWcgc3JjPVwiL2Fzc2V0cy9yZWdpb25zL3Nsb3ZlbmlhL0NvYXRfb2ZfYXJtc19vZl9TbG92ZW5pYS5wbmdcIj48L3NwYW4+IC0tPlxcbiAgPGgyPkNhbXBhaWduczwvaDI+PGJyPjxicj5cXG4gIDxkaXYgY2xhc3M9XCJjYW1wYWlnbnNcIj5cXG4gICAgPHA+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9wPlxcbiAgPC9kaXY+XFxuICA8aHI+XFxuICA8ZGl2IGNsYXNzPVxcJ0xlYWQgTGVhZC0tVkFSSUFOVD1zbG92ZW5pYVxcJz4gRXhhbXBsZVxcbiAgICA8ZGl2IGNsYXNzPVwiTGVhZF9fbG9jYXRpb25tYXBcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDwhLS0gPGRpdj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJidXNzaW5lc3NjYXJkXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJmbGlwXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImZyb250XCI+ICAgICAgIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPiAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48c3BhbiBjbGFzcz1cImZhdFwiPkU8L3NwYW4+PHNwYW4gY2xhc3M9XCJza2lubnlcIj5LPC9zcGFuPjwvZGl2PiAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWV0cm9kdWN0aW9uXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+RWR1YXJkIEtvc2lja3k8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvZHVjdGlvblwiPkEgRnJvbnQgRW5kIERldmVsb3BlcjwvZGl2PlxcbiAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+ICAgICAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlYnNpdGVcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1lYXJ0aFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPnd3dy5lZHVhcmRrb3NpY2t5Lm1lPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR3aXR0ZXJcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1zb2NpYWwtdHdpdHRlclwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkBlZHVhcmRrb3NpY2t5PC9hPiBcXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaG9uZSBcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1pb3M3LXRlbGVwaG9uZVwiPjwvc3Bhbj4gXFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4wMTE4IDk5OSA3MjUzPC9hPiBcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbCBcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1wYXBlci1haXJwbGFuZVwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPmVkdWFyZEBrb3NpY2t5Lm1lPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVwidG9vbHRpcFwiPlxcbiAgICA8cD5cXG4gICAgICBIb3ZlciBvdmVyIHRoZSBjYXJkIHRvIHNlZSB0aGUgYmFjay5cXG4gICAgPC9wPlxcbiAgICA8L3NlY3Rpb24+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfTUFJTlwiPlxcbiAgPGRpdiBkYXRhLWJpbmQ9XCJuYW1lXCI+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9kaXY+XFxuICA8aW1nIGRhdGEtZm9vPVwiYmFyXCI+PGJyPlxcbiAgPGlucHV0IHBsYWNlaG9sZGVyPVwiL1wiPlNjaG9vYmlkb288L2lucHV0Pjxicj5cXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj1cIi9mb28vYmFyXCI+U2Nob29iaWRvbzEyMzwvaW5wdXQ+PGJyPjxicj5cXG4gIDxoMj5Vc2VybGlzdDwvaDI+XFxuICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5Vc2VyPC9zcGFuPi4uLjxzcGFuIGNsYXNzPVwibmFtZVwiPlVzZXI8L3NwYW4+PGJyPjxicj5cXG4gIDxkaXYgY2xhc3M9XCJpbnNlcnRfc3VidGVtcGxhdGVcIj5cXG4gICAgPHA+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9wPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiaW5zZXJ0X2NvbGxlY3Rpb25BXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+XFxuICAgIDxwPl9fTk9UX1NIT1dOX0JFQ0FVU0VfUkVQTEFDRURfXzwvcD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImluc2VydF9BUlJBWVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1wiPlxcbiAgICA8cD5fX05PVF9TSE9XTl9CRUNBVVNFX1JFUExBQ0VEX188L3A+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJpbnNlcnRfU1VCVEVNUExBVEVcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGdyZWVuO1wiPlxcbiAgICA8aDE+IFNVQlRFTVBMQVRJTkcgd2l0aCBCSU5EIDwvaDE+PGgzPlRoaXMgaXMgdGhlIG1haW4gdGVtcGxhdGUuPC9oMz48ZGl2IGlkPVwibWFpblwiPjwvZGl2PjxoMz5UaGUgRW5kLjwvaDM+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb29cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI+XFxuICAgIDxoMj4gQVJSQVkgRDwvaDI+XFxuICAgIDxkaXY+XFxuICAgICAgPHVsIGNsYXNzPVwibGlzdFwiPjwvdWw+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz5IZWxsbyBXb3JsZDwvaDM+XFxuICAgICAgICA8cD5DXCJsaVwiY2sgdGhlIGZvbGxvd2luZyBidXR0b24uPC9wPlxcbiAgICAgICAgPHNwYW4+IEdvIGJhY2s8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCMVwiPlxcblx0PGRpdiBjbGFzcz1cInRyb2xsaW5nXCI+PC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCMlwiPlxcbiAgPGRpdj5cXG4gICAgPGgyPiBDT0xMRUNUSU9OIEE8L2gyPlxcbiAgICA8dWw+PGxpIGRhdGEtYmluZD1cIm5hbWVcIj5SRVBMQUNFPC9saT48L3VsPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxoMz5IZWxsbyBXb3JsZDwvaDM+XFxuICAgICAgPHA+UHJlc3MgdGhlIGZvbGxvd2luZyBidXR0b24uPC9wPlxcbiAgICAgIDxzcGFuPkdvIGJhY2s8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCM1wiPlxcbiAgPGRpdj5cXG4gICAgPGgyPiBBUlJBWSBCPC9oMj5cXG4gICAgPHVsPjxsaSBkYXRhLWJpbmQ9XCJuYW1lXCI+UkVQTEFDRTwvbGk+PC91bD5cXG4gICAgPGRpdj5cXG4gICAgICA8aDM+SGVsbG8gV29ybGQ8L2gzPlxcbiAgICAgIDxwPkNcImx1XCJjayB0aGUgZm9sbG93aW5nIGJ1dHRvbi48L3A+XFxuICAgICAgPHNwYW4+IEdvIGJhY2s8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCNFwiPlxcbiAgPHA+XFxuICAgIFRoaXMgaXMgdGhlIHBhcnRpYWwgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgaW50byB0aGUgbWFpbiB0ZW1wbGF0ZS5cXG4gICAgPHNwYW4gaWQ9XCJ0ZXN0XCI+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9zcGFuPlxcbiAgPC9wPlxcbjwvZGl2Plxcbic7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBpZD1cInRlbXBsYXRlX1NVQjVcIj5cXG4gIDxsaSBjbGFzcz1cIm5hbWUyXCI+UkVQTEFDRTwvbGk+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9IE1PRFVMRV9ob2xvbjtcblxudmFyIFBsYXRlcyA9IHJlcXVpcmUoJ3BsYXRlcycpO1xuXG5NT0RVTEVfaG9sb24uTkFNRSAgICA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLm5hbWUudG9VcHBlckNhc2UoKTtcbk1PRFVMRV9ob2xvbi5WRVJTSU9OID0gJ3YnICsgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuZnVuY3Rpb24gTU9EVUxFX2hvbG9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBQbGF0ZXM6IFBsYXRlcyxcbiAgICBob2xvbml6ZToge31cbiAgfTtcbn0gXG4iLCIvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gIENPTU1PTkpTIE1PRFVMRSBFWFBPUlQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFZlcnNpb24gMC4wLjApXG5cbiAgICBASk9COiBZRU9NQU4gb3IgTkdFTiBHRU5FUkFUT1IgZm9yIENvbXBvbmVudHMgc2NocmVpYmVuXG4gICAgQEpPQjogZHJvcGluIHZzIGNvbmZpZ3VyYWJsZVxuICAgIEBKT0I6IE1ha2UgXCJDT01NRU5UU1wiIGNyZWF0ZSBhIG5pY2UgdmlzdWFsIHN0cnVjdHVyZSBvZiBtb2R1bGUgaW4gbWluaXZpZXdcblxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuKGZ1bmN0aW9uIENPTU1PTkpTX0VYUE9SVEVSIChGQUNUT1JZKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gSWYgTU9EVUxFIGlzIGEgXCJEcm9wIEluXCIgd2hpY2ggZXhlY3V0ZXMgb25jZSBhZnRlciBsb2FkaW5nOlxuICBtb2R1bGUuZXhwb3J0cyA9IEZBQ1RPUlkoLyp3aXRoIHByZWRlZmluZWQgc2V0IG9mIFBBUkFNUyovKTsgLy8gQ29tbW9uSlNcbiAgLy8gLy8gRUxTRSBJRiBNT0RVTEUgaXMgT3RoZXJ3aXNlIGEgQ09ORklHVVJBQkxFOlxuICAvLyBtb2R1bGUuZXhwb3J0cyA9IEZBQ1RPUlk7XG59KShcbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBNT0RVTEVOQU1FICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgbGVnbylcbiAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgKGZ1bmN0aW9uIE1PRFVMRV9NT0RVTEVOQU1FIChNRVRBLCBFTlRJVElFUywgREVQcywgd2luZG93LCBnbG9iYWwsIHVuZGVmaW5lZClcbiAgeyAvLyB0byBzaGllbGQgTU9EVUxFIGZyb20gb3ZlcnJpZGVuICd1bmRlZmluZWQnIGFuZCBnbG9iYWwgb2JqZWN0IHBvbGx1dGlvblxuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBNT0RVTEVOQU1FX0FQSSAoXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE1PRFVMRSBBUElcbiAgICAgIFxuICAgICAgICAgIFVTQUdFOlxuICAgICAgICAgICAgLi4uXG4gICAgICBcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgLy9JTkpFQ1RFRCBERVBFTkRFTkNJRVM6XG4gICAgICBDT05UQUlORVIsICAvLyBET00gRm9ybSBFbGVtZW50IHRvIGFwcGx5IE1PRFVMRU5BTUUgdG9cbiAgICAgIC8vT1BUSU9OUzpcbiAgICAgIFNFVFRJTkdTLCAgIC8vIE9QVElPTkFMIC0tIG5hbWU6c3RyaW5nLCByZXF1aXJlZDpib29sZWFuLCBtaW5RdWVyeUxlbmd0aDpudW1iZXJcbiAgICAgIFNVR0dFU1RJT05TIC8vIE9wdGlvbmFsIEFSUkFZIGZyb20gd2hpY2ggdG8gY2hvb3NlIGF1dG9jb21wbGV0ZSBTVUdHRVNUSU9OU1xuICAgICkge1xuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBQQVJBTUVURVIgVkFMSURBVElPTiArIFNBTklUSVpBVElPTlxuXG4gICAgICAgIEBKT0I6IFJlZmluZSBiZWhhdmlvciBpbiByZWxhdGlvbiB0byBnaXZlbiBpbnB1dFxuICAgICAgICBASk9COiBPbmx5IGRvIGlmIG5vdCBzaW5nbGV0b24gYW5kIHNpbmdsZSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBAQVNTRVJUOiBhdCBsZWFzdCBvbmUgJ2JpbGxib2FyZHMnIGlzIGdpdmVuIGluIFNFVFRJTkdTLmJpbGxib2FyZHNcbiAgICAgICAgICBlbHNlOiByZXR1cm4gd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZyBuZXchXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICBTRVRUSU5HUyA9IHR5cGVvZiBTRVRUSU5HUyA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB7IC8vIERFRkFVTFQgU0VUVElOR1NcbiAgICAgICAgICAvLyBzZXR0aW5ncyAgICAgIDoge3BsYWNlaG9sZGVyOiAnU2VhcmNoJywgdmFsdWU6ICcnLCBtaW5RdWVyeUxlbmd0aDogMH0sXG4gICAgICAgICAgLy8gU1VHR0VTVElPTlMgICA6IFtdLFxuICAgICAgICAgIC8vIHNlbGVjdGlvbiAgICAgOiAnJyxcbiAgICAgICAgICAvLyBvblF1ZXJ5Q2hhbmdlIDogZnVuY3Rpb24gb25RdWVyeUNoYW5nZSAob2xkUXVlcnksIG5ld1F1ZXJ5KSB7XG4gICAgICAgICAgLy8gICByZXR1cm47XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIDogU0VUVElOR1MgLy8gQEpPQjogRXh0ZW5kIG5vbi1naXZlbiBPUFRJT05TIHdpdGggREVGQVVMVFMsIGFsbG93IG92ZXJyaWRlIGRlZnVhbHRzIHdpdGggXCJOVUxMXCJcbiAgICAgIDtcbiAgICAgIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgTU9EVUxFIENSRUFUSU9OICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ1aWxkIHRoaXMgbGVnbylcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgICAgIHZhciBNT0RVTEUgPSBcbiAgICAgICAgRU5USVRJRVMubGVuZ3RoID8gRU5USVRJRVNbRU5USVRJRVMubGVuZ3RoLTFdIDogLy8gQEpPQjogaWYgc2luZ2xldG9uIHZzIGZhY3RvcnlcbiAgICAgICAgKGZ1bmN0aW9uIE1PRFVMRU5BTUUgKFNUQVRFKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBURU1QTEFURSAtIEJVSUxESU5HXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBURU1QTEFURSAtIENVU1RPTUlaQVRJT04gKE1hcmt1cCwgUHJvcGVydGllcywgU3R5bGluZylcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIERFRklORVxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgUExBVEVTID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGFwaSA9IHt9O1xuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgIC8vIEdFTkVSQUwgSEVMUEVSU1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBDYWNoZSB2YXJpYWJsZXMgdG8gaW5jcmVhc2UgbG9va3VwIHNwZWVkLlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICB2YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gUG9seWZpbGwgdGhlIEFycmF5I2luZGV4T2YgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIFtdLmluZGV4T2YgfHwgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihhLCBiICxjKXtcbiAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgYyA9IHRoaXMubGVuZ3RoICwgYiA9IChjKyB+fmIpICUgYztcbiAgICAgICAgICAgICAgICAgIGIgPCBjICYmICghKGIgaW4gdGhpcykgfHwgdGhpc1tiXSAhPT1hICk7XG4gICAgICAgICAgICAgICAgICBiKytcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJeYyA/IGIgOiAtMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFBvbHlmaWxsIEFycmF5LmlzQXJyYXkgZm9yIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSB8fCAoQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIE1hcHBlcihjb25mKVxuICAgICAgICAgICAgICAvLyAjIyMjIEBjb25mIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAgICAgIC8vIENvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciB0aGUgTWFwcGVyIGluc3RhbmNlIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yXG4gICAgICAgICAgICAgIC8vIHByb3ZpZGluZyB0aGUgbWFwcGluZyBmb3IgdGhlIGRhdGEgc3RydWN0dXJlXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIE1hcHBlcihjb25mKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hcHBlcikpIHsgcmV0dXJuIG5ldyBNYXBwZXIoY29uZik7IH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWFwcGluZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmYgPSBjb25mIHx8IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE1BUFBFUiBIRUxQRVJTXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBsYXN0KG5ld2l0ZW0pXG4gICAgICAgICAgICAgIC8vICMjIyMgQG5ld2l0ZW0ge0Jvb2xlYW59IGRvIHdlIG5lZWQgdG8gYWRkIGEgbmV3IGl0ZW0gdG8gdGhlIG1hcHBpbmdcbiAgICAgICAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBhZGRpbmcgbmV3IGF0dHJpYnV0ZSBtYXBzIHRvIGEgTWFwcGVyIGluc3RhbmNlXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGxhc3QobmV3aXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdpdGVtKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm1hcHBpbmdzLnB1c2goe30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tYXBwaW5nc1t0aGlzLm1hcHBpbmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG0gJiYgbS5hdHRyaWJ1dGUgJiYgbS52YWx1ZSAmJiBtLmRhdGFLZXkgJiYgbS5yZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgICBtLnJlID0gbmV3IFJlZ0V4cChtLmF0dHJpYnV0ZSArICc9KFtcXCdcIl0/KScgKyBtLnZhbHVlICsgJ1xcXFwxJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgbS5yZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGFjdHVhbCBjaGFpbmFibGUgbWV0aG9kczogd2hlcmUoJ2NsYXNzJykuaXMoJ2ZvbycpLmluc2VydCgnYmxhJylcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgTWFwcGVyLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBhcHBlbmQocGxhdGVzLCBkYXRhLCBtYXApXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAcGxhdGVzIHtTdHJpbmd9IFRlbXBsYXRlIG9yIHBhdGgvaWQgb2YgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAZGF0YSB7T2JqZWN0fFN0cmluZ30gZGF0YSBmb3IgdGhlIGFwcGVuZGVkIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAbWFwIHtQbGF0ZXMuTWFwfSBtYXBwaW5nIGZvciB0aGUgZGF0YVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQocGxhdGVzLCBkYXRhLCBtYXApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBsID0gbGFzdC5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE1hcHBlcikge1xuICAgICAgICAgICAgICAgICAgICBtYXAgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbC5wbGF0ZXMgPSBwbGF0ZXM7XG4gICAgICAgICAgICAgICAgICBsLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgbC5tYXBwZXIgPSBtYXA7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiByZW1vdmUoKVxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZW1vdmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBgd2hlcmVgIGNsYXVzZVxuICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHRlbXBsYXRlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcykucmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBhcyh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd9IEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhbiBhdHRyaWJ1dGUgaW4gdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBhdHRyaWJ1dGUgYnkgdGhhdCBuYW1lIG5hbWUgZm91bmQsIG9uZSBtYXkgYmUgY3JlYXRlZFxuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgb3B0aW9ucyB0aGF0IHdoZXJlIHBhc3NlZCBpbiB0aGUgYFBsYXRlcy5NYXBgXG4gICAgICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhczogZnVuY3Rpb24gYXModmFsKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcykucmVwbGFjZSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcykgJiYgdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGluc2VydCh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd9IEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhIGtleS4gRGF0YSB3aWxsIGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgLy8gaW4gdG8gdGhlIGF0dHJpYnV0ZSB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGB3aGVyZWAgY2xhdXNlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQodmFsKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbCA9IGxhc3QuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIGwucmVwbGFjZSA9IGwuYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgICAgbC5kYXRhS2V5ID0gdmFsO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3QuY2FsbCh0aGlzKSAmJiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gaGFzKHZhbClcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwge1N0cmluZ3xSZWdFeHB9IFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRoYXQgd2FzIHNwZWNpZmllZFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBgd2hlcmVgIGNsYXVzZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24gaGFzKHZhbCkge1xuICAgICAgICAgICAgICAgICAgbGFzdC5jYWxsKHRoaXMpLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHZhbCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMpICYmIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBpcyh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBgd2hlcmVgIGNsYXVzZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlzOiBmdW5jdGlvbiBpcyh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3QuY2FsbCh0aGlzKS52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcykgJiYgdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIHRhZyh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd9IHRoZSBuYW1lIG9mIHRoZSB0YWcgc2hvdWxkIGJlIGZvdW5kXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB0YWc6IGZ1bmN0aW9uIHRhZyh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3QuY2FsbCh0aGlzLCB0cnVlKS50YWcgPSB2YWw7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGNsYXNzKHZhbClcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwge1N0cmluZ30gYSB2YWx1ZSB0aGF0IG1heSBiZSBmb3VuZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgb2YgYSB0YWdcbiAgICAgICAgICAgICAgICAvLyB0aGUgbWV0aG9kIG5hbWUgc2hvdWxkIGJlIHdyYXBwZWQgaW4gcXVvdGVzIG9yIGl0IHdpbGwgdGhyb3cgZXJyb3JzIGluIElFLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogZnVuY3Rpb24gY2xhc3NOYW1lKHZhbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlcmUoJ2NsYXNzJykuaXModmFsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIHdoZXJlKHZhbClcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwge1N0cmluZ30gYW4gYXR0cmlidXRlIHRoYXQgbWF5IGJlIGZvdW5kIGluIGEgdGFnXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBtZXRob2Qgd2lsbCBpbml0aWF0ZSBhIGNsYXVzZS4gT25jZSBhIGNsYXVzZSBoYXMgYmVlbiBlc3RhYmxpc2hlZFxuICAgICAgICAgICAgICAgIC8vIG90aGVyIG1lbWJlciBtZXRob2RzIHdpbGwgYmUgY2hhaW5lZCB0byBlYWNoIG90aGVyIGluIGFueSBvcmRlci5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIHdoZXJlOiBmdW5jdGlvbiB3aGVyZSh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3QuY2FsbCh0aGlzLCB0cnVlKS5hdHRyaWJ1dGUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMpICYmIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiB1c2UodmFsKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbCB7U3RyaW5nfSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgYSBrZXkuXG4gICAgICAgICAgICAgICAgLy8gRGF0YSB3aWxsIGJlIGluc2VydGVkIGludG8gdGhlIGF0dHJpYnV0ZSB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gYHdoZXJlYCBjbGF1c2UuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB1c2U6IGZ1bmN0aW9uIHVzZSh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3QuY2FsbCh0aGlzKS5kYXRhS2V5ID0gdmFsO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3QuY2FsbCh0aGlzKSAmJiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gcmVwbGFjZSh2YWwxLCB2YWwyKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbDEge1N0cmluZ3xSZWdFeHB9IFRoZSBwYXJ0IG9mIHRoZSBhdHRyaWJ1dGUgdGhhdCBuZWVkcyB0byBiZSByZXBsYWNlZFxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbDIge1N0cmluZ30gVGhlIHZhbHVlIGl0IHNob3VsZCBiZSByZXBsYWNlZCB3aXRoXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHZhbDEsIHZhbDIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBsID0gbGFzdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgbC5yZXBsYWNlUGFydGlhbDEgPSB2YWwxO1xuICAgICAgICAgICAgICAgICAgbC5yZXBsYWNlUGFydGlhbDIgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBQcm92aWRlIGhlbHBmdWwgYWxpYXNlcyB0aGF0IHdlbGwgaGVscCB3aXRoIGluY3JlYXNlZCBjb21wYXRpYmlsaXR5IGFzIG5vdFxuICAgICAgICAgICAgICAvLyBhbGwgYnJvd3NlcnMgYWxsb3cgdGhlIE1hcHBlciNjbGFzcyBwcm90b3R5cGUgKElFKS5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgTWFwcGVyLnByb3RvdHlwZS5jbGFzc05hbWUgPSBNYXBwZXIucHJvdG90eXBlWydjbGFzcyddO1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBBbGlhc2VzIG9mIGRpZmZlcmVudCBtZXRob2RzLlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBNYXBwZXIucHJvdG90eXBlLnBhcnRpYWwgPSBNYXBwZXIucHJvdG90eXBlLmFwcGVuZDtcbiAgICAgICAgICAgICAgTWFwcGVyLnByb3RvdHlwZS50byA9IE1hcHBlci5wcm90b3R5cGUudXNlO1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBFeHBvc2UgdGhlIE1hcHBlci5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgYXBpLk1hcCA9IE1hcHBlcjtcbiAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICB2YXIgTWVyZ2UgPSBmdW5jdGlvbiBNZXJnZSgpIHt9O1xuICAgICAgICAgICAgICAvLy8vLyBNRVJHRSBIRUxQRVJTXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoQ2xvc2luZyhpbnB1dCwgdGFnbmFtZSwgaHRtbCkgeyAvLyBNYXRjaGVzIGEgY2xvc2luZyB0YWcgdG8gYSBvcGVuIHRhZ1xuICAgICAgICAgICAgICAgIHZhciBjbG9zZVRhZyA9ICc8LycgKyB0YWduYW1lICsgJz4nLFxuICAgICAgICAgICAgICAgICAgICBvcGVuVGFnICA9IG5ldyBSZWdFeHAoJzwgKicgKyB0YWduYW1lICsgJyggKnw+KScsICdnJyksXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgICAgICBvcGVuQ291bnQgPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgZnJvbSwgdG8sIGNodW5rXG4gICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgICAgIGZyb20gPSBodG1sLnNlYXJjaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgdG8gPSBmcm9tO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUodG8gPiAtMSAmJiBjbG9zZUNvdW50ICE9PSBvcGVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgIHRvID0gaHRtbC5pbmRleE9mKGNsb3NlVGFnLCB0byk7XG4gICAgICAgICAgICAgICAgICBpZiAodG8gPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0byArPSB0YWduYW1lLmxlbmd0aCArIDM7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rID0gaHRtbC5zbGljZShmcm9tLCB0byk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Db3VudCA9IGNodW5rLm1hdGNoKG9wZW5UYWcpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm1hdGNoZWQgdGFnICcgKyB0YWduYW1lICsgJyBpbiAnICsgaHRtbClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gY29tcGlsZU1hcHBpbmdzXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIHNvcnQgdGhlIG1hcHBpbmdzIHNvIHRoYXQgbWFwcGluZ3MgZm9yIHRoZSBzYW1lIGF0dHJpYnV0ZSBhbmQgdmFsdWUgZ28gY29uc2VjdXRpdmVcbiAgICAgICAgICAgICAgLy8gYW5kIGluc2lkZSB0aG9zZSwgdGhvc2UgdGhhdCBjaGFuZ2UgYXR0cmlidXRlcyBhcHBlYXIgZmlyc3QuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBpbGVNYXBwaW5ncyhvbGRNYXBwaW5ncykge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwaW5ncyA9IG9sZE1hcHBpbmdzLnNsaWNlKDApO1xuXG4gICAgICAgICAgICAgICAgbWFwcGluZ3Muc29ydChmdW5jdGlvbihtYXAxLCBtYXAyKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIW1hcDEuYXR0cmlidXRlKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgIGlmICghbWFwMi5hdHRyaWJ1dGUpIHJldHVybiAtMTtcblxuICAgICAgICAgICAgICAgICAgaWYgKG1hcDEuYXR0cmlidXRlICE9PSBtYXAyLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwMS5hdHRyaWJ1dGUgPCBtYXAyLmF0dHJpYnV0ZSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChtYXAxLnZhbHVlICE9PSBtYXAyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXAxLnZhbHVlIDwgbWFwMi52YWx1ZSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghICgncmVwbGFjZScgaW4gbWFwMSkgJiYgISAoJ3JlcGxhY2UnIGluIG1hcDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uZmxpY3RpbmcgbWFwcGluZ3MgZm9yIGF0dHJpYnV0ZSAnICsgbWFwMS5hdHRyaWJ1dGUgKyAnIGFuZCB2YWx1ZSAnICsgbWFwMS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAobWFwMS5yZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcHBpbmdzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBmZXRjaChkYXRhLCBtYXBwaW5nLCB2YWx1ZSwga2V5KVxuICAgICAgICAgICAgICAvLyAjIyMjIEBkYXRhIHtPYmplY3R9IHRoZSBkYXRhIHRoYXQgd2UgbmVlZCB0byBmZXRjaCBhIHZhbHVlIGZyb21cbiAgICAgICAgICAgICAgLy8gIyMjIyBAbWFwcGluZyB7T2JqZWN0fSBUaGUgaXRlcmF0ZWQgbWFwcGluZyBzdGVwXG4gICAgICAgICAgICAgIC8vICMjIyMgQHRhZ2JvZHkge1N0cmluZ30gdGhlIHRhZ2JvZHkgd2Ugb3BlcmF0ZWQgYWdhaW5zdFxuICAgICAgICAgICAgICAvLyAjIyMjIEBrZXkge1N0cmluZ30gb3B0aW9uYWwga2V5IGlmIHRoZSBtYXBwaW5nIGRvZXNuJ3QgaGF2ZSBhIGRhdGFLZXlcbiAgICAgICAgICAgICAgLy8gRmV0Y2hlcyB0aGUgY29ycmVjdCBwaWVjZSBvZiBkYXRhXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGZldGNoKGRhdGEsIG1hcHBpbmcsIHZhbHVlLCB0YWdib2R5LCBrZXkpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBtYXBwaW5nLmRhdGFLZXkgfHwga2V5O1xuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRhdGEgbWFuaXB1bGF0aW9uIG9yIGZpbHRlcmluZyBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlmIChtYXBwaW5nLmRhdGFLZXkgJiYgdHlwZW9mIG1hcHBpbmcuZGF0YUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcHBpbmcuZGF0YUtleShkYXRhLCB2YWx1ZSB8fCAnJywgdGFnYm9keSB8fCAnJywga2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFNlZSBpZiB3ZSBhcmUgdXNpbmcgZG90IG5vdGF0aW9uIHN0eWxlXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAoIX5rZXkuaW5kZXhPZignLicpKSByZXR1cm4gZGF0YVtrZXldO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGtleVxuICAgICAgICAgICAgICAgICAgLCBzdHJ1Y3R1cmUgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGF0aHMgPSBrZXkuc3BsaXQoJy4nKSwgaSA9IDAsIGxlbmd0aCA9IHBhdGhzLmxlbmd0aDsgaSA8IGxlbmd0aCAmJiBzdHJ1Y3R1cmU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc3RydWN0dXJlWytwYXRoc1tpXSB8fCBwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGF0YVtrZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICBNZXJnZS5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAgICAgbmVzdDogW10sXG5cbiAgICAgICAgICAgICAgICB0YWc6IG5ldyBSZWdFeHAoW1xuICAgICAgICAgICAgICAgICAgJzwnLFxuICAgICAgICAgICAgICAgICAgJygvPyknLCAvLyAyIC0gaXMgY2xvc2luZ1xuICAgICAgICAgICAgICAgICAgJyhbLTpcXFxcd10rKScsIC8vIDMgLSBuYW1lXG4gICAgICAgICAgICAgICAgICAnKCg/OlstXFxcXHddKyg/OicsICc9JyxcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcdyt8W1wifFxcJ10oPzouKilbXCJ8XFwnXSkpPykqKScsIC8vIDQgLSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAnKC8/KScsIC8vIDUgLSBpcyBzZWxmLWNsb3NpbmdcbiAgICAgICAgICAgICAgICAgICc+J1xuICAgICAgICAgICAgICAgIF0uam9pbignXFxcXHMqJykpLFxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBIVE1MIGF0dHJpYnV0ZSBwYXJzZXIuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBhdHRyOiAvKFtcXC1cXHddKilcXHMqPVxccyooPzooW1wiXFwnXSkoW1xcLVxcLlxcd1xcc1xcLzo7JiNdKilcXDIpL2dpLFxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiBIVE1MNSBpdCdzIGFsbG93ZWQgdG8gaGF2ZSB0byB1c2Ugc2VsZiBjbG9zaW5nIHRhZ3Mgd2l0aG91dCBjbG9zaW5nXG4gICAgICAgICAgICAgICAgLy8gc2VwYXJhdG9ycy4gU28gd2UgbmVlZCB0byBkZXRlY3QgdGhlc2UgZWxlbWVudHMgYmFzZWQgb24gdGhlIHRhZyBuYW1lLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgc2VsZkNsb3Npbmc6IC9eKGFyZWF8YmFzZXxicnxjb2x8Y29tbWFuZHxlbWJlZHxocnxpbWd8aW5wdXR8a2V5Z2VufGxpbmt8bWV0YXxwYXJhbXxzb3VyY2V8dHJhY2t8d2JyKSQvLFxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gaGFzQ2xhc3Moc3RyLCBjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAc3RyIHtTdHJpbmd9IHRoZSBjbGFzcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEBjbGFzc05hbWUge1N0cmluZ30gdGhlIGNsYXNzTmFtZSB0aGF0IHRoZSBjbGFzc0F0dHJpYnV0ZSBzaG91bGQgY29udGFpblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlY3RpbmcgaWYgYSBjbGFzcyBhdHRyaWJ1dGUgY29udGFpbnMgdGhlIGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKHN0ciwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gfnN0ci5zcGxpdCgnICcpLmluZGV4T2YoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gaXRlcmF0ZShodG1sLCB2YWx1ZSwgY29tcG9uZW50cywgdGFnbmFtZSwga2V5KVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGh0bWwge1N0cmluZ30gcGVpY2Ugb2YgSFRNTFxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbHVlIHtNaXhlZH0gaXRlcmF0ZWFibGUgb2JqZWN0IHdpdGggZGF0YVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGNvbXBvbmVudHMge0FycmF5fSByZXN1bHQgb2YgdGhlIHRoaXMudGFnIHJlZ2V4cCBleGVjdXRpb25cbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB0YWduYW1lIHtTdHJpbmd9IHRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCB3ZSBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAa2V5IHtTdHJpbmd9IHRoZSBrZXkgb2YgdGhlIGRhdGEgdGhhdCB3ZSBuZWVkIHRvIGV4dHJhY3QgZnJvbSB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEBtYXAge09iamVjdH0gYXR0cmlidXRlIG1hcHBpbmdzXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgb3ZlciB0aGUgc3VwcGxpZWQgSFRNTC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGl0ZXJhdGU6IGZ1bmN0aW9uIGl0ZXJhdGUoaHRtbCwgdmFsdWUsIGNvbXBvbmVudHMsIHRhZ25hbWUsIGtleSwgbWFwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ICA9ICcnLFxuICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBtYXRjaENsb3NpbmcoY29tcG9uZW50cy5pbnB1dCwgdGFnbmFtZSwgaHRtbCksXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJcyBpdCBhbiBhcnJheT9cbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBZZXM6IHNldCB0aGUgb3V0cHV0IHRvIHRoZSByZXN1bHQgb2YgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBrZXksIHRoZW4gd2UgaGF2ZSBhIHNpbXBsZSBvYmplY3QgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCBjb25zdHJ1Y3QgYSBzaW1wbGUgb2JqZWN0IHRvIHVzZSBhcyB0aGUgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuYmluZChzZWdtZW50LCBkYXRhLCBtYXApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlZmluZSB0aGUgc2VsZWN0aW9uIG5vdyB0aGF0IHdlIGtub3cgd2UncmUgZGVhbGluZyB3aXRoIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVzdGVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudC5zbGljZShjb21wb25lbnRzLmlucHV0Lmxlbmd0aCwgLSh0YWduYW1lLmxlbmd0aCArIDMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArPSB0aGlzLmJpbmQoc2VnbWVudCwgdmFsdWUsIG1hcCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gYmluZChodG1sLCBkYXRhLCBtYXApXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAaHRtbCB7U3RyaW5nfSB0aGUgdGVtcGxhdGUgdGhhdCB3ZSBuZWVkIHRvIG1vZGlmeVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGRhdGEge09iamVjdH0gZGF0YSBmb3IgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAbWFwIHtNYXBwZXJ9IGluc3RydWN0aW9ucyBmb3IgdGhlIGRhdGEgcGxhY2VtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGFjdHVhbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYmluZDogZnVuY3Rpb24gYmluZChodG1sLCBkYXRhLCBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmJpbmQoaHRtbCwgZGF0YVtpXSwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGh0bWwgPSAoaHRtbCB8fCAnJykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgIHZhciBvcGVuZXJzID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5ncyA9IG1hcCAmJiBjb21waWxlTWFwcGluZ3MobWFwLm1hcHBpbmdzKSxcbiAgICAgICAgICAgICAgICAgICAgICBpbnRhZyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWUgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGZDbG9zaW5nID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZkNsb3NpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBtYXRjaG1vZGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBdHRyaWJ1dGUgPSBtYXAgJiYgbWFwLmNvbmYgJiYgbWFwLmNvbmYuY3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgdGFnYm9keTtcblxuICAgICAgICAgICAgICAgICAgdmFyIGMsXG4gICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gJycsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBodG1sLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjID0gaHRtbC5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCBwYXJ0IG9mIHRoZSBIVE1MIHdlIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2luZy4gQW5kIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgcXVldWVkIHVwIGVub3VnaCBIVE1MIHRvIHByb2Nlc3MgaXQncyBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJyEnICYmIGludGFnICYmICFtYXRjaG1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBodG1sLnNsaWNlKGxlZnQsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPCcgJiYgIWludGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgaW50YWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICc+JyAmJiBpbnRhZykge1xuICAgICAgICAgICAgICAgICAgICAgIGludGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdGFnYm9keSA9IGh0bWwuc2xpY2UobGVmdCwgaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMgPSB0aGlzLnRhZy5leGVjKHRhZ2JvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYoIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2xvc2luZyA9IGNvbXBvbmVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgdGFnbmFtZSA9IGNvbXBvbmVudHNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IGNvbXBvbmVudHNbM107XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZkNsb3NpbmcgPSBjb21wb25lbnRzWzRdO1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZkNsb3NpbmcgPSB0aGlzLnNlbGZDbG9zaW5nLnRlc3QodGFnbmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2htb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGl0cyBhIGNsb3NpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZXJzIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaG1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLW9wZW5lcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzU2VsZkNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGl0cyBub3QgYSBzZWxmLWNsb3NpbmcgdGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsrb3BlbmVycztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZyAmJiAhbWF0Y2htb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBtYXRjaCBpbiBwcm9ncmVzcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGluZ3MgJiYgbWFwcGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpaSA9IG1hcHBpbmdzLmxlbmd0aCAtIDE7IGlpID49IDA7IGlpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0QXR0cmlidXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgbWFwcGluZyA9IG1hcHBpbmdzW2lpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBzaG91bGRTZXRBdHRyaWJ1dGUgPSBtYXBwaW5nLnJlICYmIGF0dHJpYnV0ZXMubWF0Y2gobWFwcGluZy5yZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSB0YXJnZXR0aW5nIGEgZWxlbWVudCBvbmx5IG9yIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgndGFnJyBpbiBtYXBwaW5nICYmICF0aGlzLmF0dHIudGVzdCh0YWdib2R5KSAmJiBtYXBwaW5nLnRhZyA9PT0gdGFnbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnYm9keSA9IHRhZ2JvZHkgKyBmZXRjaChkYXRhLCBtYXBwaW5nLCAnJywgdGFnYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdib2R5ID0gdGFnYm9keS5yZXBsYWNlKHRoaXMuYXR0ciwgZnVuY3Rpb24oc3RyLCBrZXksIHEsIHZhbHVlLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3ZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFNldEF0dHJpYnV0ZSAmJiBtYXBwaW5nLnJlcGxhY2UgIT09IGtleSB8fCByZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkU2V0QXR0cmlidXRlIHx8IHR5cGVvZiBtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgcmVwbGFjZSBhcmd1bWVudCBvciBzb21lIHZhbHVlIGZyb20gdGhlIGRhdGEgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcucmVwbGFjZVBhcnRpYWwyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2RhdGEgPSB2YWx1ZS5yZXBsYWNlKG1hcHBpbmcucmVwbGFjZVBhcnRpYWwxLCBtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hcHBpbmcucmVwbGFjZVBhcnRpYWwxICE9PSAndW5kZWZpbmVkJyAmJiBtYXBwaW5nLmRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gdmFsdWUucmVwbGFjZShtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMSwgZmV0Y2goZGF0YSwgbWFwcGluZywgdmFsdWUsIHRhZ2JvZHksIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2RhdGEgPSBmZXRjaChkYXRhLCBtYXBwaW5nLCB2YWx1ZSwgdGFnYm9keSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPVwiJyArIChuZXdkYXRhIHx8ICcnKSArICdcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFtYXBwaW5nLnJlcGxhY2UgJiYgbWFwcGluZy5hdHRyaWJ1dGUgPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy52YWx1ZSA9PT0gdmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmhhc0NsYXNzKHZhbHVlLCBtYXBwaW5nLnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ3MuY29uZi53aGVyZSA9PT0ga2V5KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdG9TdHJpbmcuY2FsbChtYXBwaW5nLnZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcudmFsdWUuZXhlYyh2YWx1ZSkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBwaW5nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgaW5jcmVhc2UgdGhlIHJlbW92ZSBjb3VudGVyIGlmIGl0J3Mgbm90IGEgc2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2luZyBlbGVtZW50LiBBcyBtYXRjaG1vZGUgaXMgc3VmZmVjdGllbnQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0b3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NlbGZDbG9zaW5nKSByZW1vdmUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNobW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXBwaW5nLnBsYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRpYWwgPSB0aGF0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5wbGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCB0eXBlb2YgbWFwcGluZy5kYXRhID09PSAnc3RyaW5nJyA/IGZldGNoKGRhdGEsIHsgZGF0YUtleTogbWFwcGluZy5kYXRhIH0pIDogbWFwcGluZy5kYXRhIHx8IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBtYXBwaW5nLm1hcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRhZ2JvZHkgKyB0aGF0Lml0ZXJhdGUoaHRtbCwgcGFydGlhbCwgY29tcG9uZW50cywgdGFnbmFtZSwgdW5kZWZpbmVkLCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2htb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBuZXdkYXRhID0gZmV0Y2goZGF0YSwgbWFwcGluZywgdmFsdWUsIHRhZ2JvZHksIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gdGFnYm9keSArIG5ld2RhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2RhdGEgPSB0aGF0Lml0ZXJhdGUoaHRtbCwgdiwgY29tcG9uZW50cywgdGFnbmFtZSwgdmFsdWUsIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBpdGVtIGlzIGFuIGFycmF5LCB0aGVuIHdlIG5lZWQgdG8gdGVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF0ZXMgdGhhdCB3ZSdyZSBkZWFsaW5nIHdpdGggbmVzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXN0LnB1c2godGFnbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gdGFnYm9keSArIHRoYXQuaXRlcmF0ZShodG1sLCB2LCBjb21wb25lbnRzLCB0YWduYW1lLCB2YWx1ZSwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IG5ld2RhdGEgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaG1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyB3ZSBuZWVkIHRvIGNyZWF0ZSB0aGUgYXR0cmlidXRlcyBpZiB0aGV5IGRvbid0IGV4aXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUF0dHJpYnV0ZSAmJiBzaG91bGRTZXRBdHRyaWJ1dGUgJiYgIXNldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGljZWQgPSBzZWxmQ2xvc2luZyA/IDIgOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgY2xvc2UgPSBzZWxmQ2xvc2luZyA/ICcvPic6ICc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIGxlZnQgPSB0YWdib2R5LnN1YnN0cigwLCB0YWdib2R5Lmxlbmd0aCAtIHNwbGljZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdFtsZWZ0Lmxlbmd0aCAtIDFdID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQuc3Vic3RyKDAsIGxlZnQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UgPSAnICcgKyBjbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdib2R5ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcucmVwbGFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJz1cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGRhdGEsIG1hcHBpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIG1hcCwgd2UgYXJlIGp1c3QgbG9va2luZyB0byBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3BlY2lmaWVkIGlkIHRvIGEgZGF0YSBrZXkgaW4gdGhlIGRhdGEgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdib2R5LnJlcGxhY2UodGhpcy5hdHRyLCBmdW5jdGlvbiAoYXR0ciwga2V5LCBxLCB2YWx1ZSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbWFwICYmIG1hcC5jb25mLndoZXJlIHx8ICdpZCcgJiYgZGF0YVt2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gZGF0YVt2YWx1ZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdCA9IEFycmF5LmlzQXJyYXkodiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbmVzdCB8fCB0eXBlb2YgdiA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhhdC5pdGVyYXRlKGh0bWwuc3Vic3RyKGxlZnQpLCB2LCBjb21wb25lbnRzLCB0YWduYW1lLCB2YWx1ZSwgbWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaXRlbSBpcyBhbiBhcnJheSwgdGhlbiB3ZSBuZWVkIHRvIHRlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXRlcyB0aGF0IHdlJ3JlIGRlYWxpbmcgd2l0aCBuZXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lc3QpIHsgdGhhdC5uZXN0LnB1c2godGFnbmFtZSk7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IG5lc3QgPyBvdXRwdXQgOiB0YWdib2R5ICsgb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2htb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgY3VycmVudGx5IG5vIG1hdGNoIGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgLy8ganVzdCB3cml0ZSB0aGUgdGFnYm9keSB0byB0aGUgYnVmZmVyLlxuICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaG1vZGUgJiYgdGhhdC5uZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZW1vdmUpIGJ1ZmZlciArPSB0YWdib2R5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlICYmICEhaXNDbG9zaW5nKSAtLXJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaG1vZGUgJiYgdGhhdC5uZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lc3QucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnRhZyAmJiAhbWF0Y2htb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgbm90IGluc2lkZSBhIHRhZyBhbmQgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBpbiBwcm9ncmVzcywgd2UgY2FuIHdyaXRlIHRoZSBjaGFyIHRvXG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJ1ZmZlci5cbiAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVtb3ZlKSBidWZmZXIgKz0gYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgUGxhdGVzI2JpbmQgaW50ZXJmYWNlLlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBhcGkuYmluZCA9IGZ1bmN0aW9uIGJpbmQoaHRtbCwgZGF0YSwgbWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlID0gbmV3IE1lcmdlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlLmJpbmQoaHRtbCwgZGF0YSwgbWFwKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgICAgICAgfSkoKSxcbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBVU0VSIElOVEVSQUNUSU9OIEVWRU5UUyAmIEhBTkRMRVJcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PRFVMRSBTUEVDSUZJQyBIRUxQRVJTXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBQVUJMSUMgRU5USVRZIEFQSSAtIFNFVCBNT0RVTEUgRU5USVRZIERFRkFVTFQgSU5URVJGQUNFXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICBhcGkgPSB7XG4gICAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgQlVJTEQgTU9EVUxFICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXRpYWxpemUgKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFwaS5pbml0O1xuICAgICAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgQ1VTVE9NSVpFIC0gbW9kdWxlIGludGVyZmFjZSwgaW50ZXJuYWxzICYgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgICAgICAvLyBqdXN0IGluaXRpYWxpemUgc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgLy8gb3Igc2V0IG90aGVyIGFwaS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgLy8gb3IgcmV0dXJuIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIC8vIG9yIHNldCBzb21lIGdsb2JhbCBzdHVmZlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gUExBVEVTKSB7XG4gICAgICAgICAgICAgICAgICBhcGlbcHJvcF0gPSBQTEFURVNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgO1xuICAgICAgICAgIGFwaS5pZCA9IEVOVElUSUVTLnB1c2goYXBpKTtcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIFBVQkxJQyBBUEkgRVhQT1JUXG5cbiAgICAgICAgICAgICAgQEpPQjogbWFrZSBJTklUL0NPTkZJR1VSRSBhbmQgU1RBUlQgb25lIG1ldGhvZCB3aXRoIG1hbnkgcGFyYW1zXG4gICAgICAgICAgICAgIEBKT0I6IG1ha2UgbW9kdWxlIGluaXRpYWxpemF0aW9uIGEgY29uc3RydWN0b3Igb3B0aW9uXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgIC8vIFtPcHRpb25hbF0gaW5pdGlhbGl6ZSB0aGlzIG1vZHVsZSBpbW1lZGlhdGVseVxuICAgICAgICAgIGFwaS5pbml0KHt9KTsgLy8gcHJvdmlkZSBvcHRpb25hbCBzZXR0aW5ncyBhcmd1bWVudFxuICAgICAgICAgIHJldHVybiBFTlRJVElFU1thcGkuaWQtMV07XG4gICAgICAgIH0pKHt9KVxuICAgICAgO1xuICAgICAgTU9EVUxFLk1FVEEgPSBNRVRBO1xuICAgICAgcmV0dXJuIE1PRFVMRTtcbiAgICB9XG4gICAgTU9EVUxFTkFNRV9BUEkuTUVUQSA9IE1FVEE7XG4gICAgcmV0dXJuIE1PRFVMRU5BTUVfQVBJO1xuICB9KShcbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBNT0RVTEUgQ09OVEVYVFxuICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgTUVUQVxuXG4gICAgICBASk9CIC0gaHR0cDovL3d3dy4yYWxpdHkuY29tLzIwMTIvMTAvamF2YXNjcmlwdC1wcm9wZXJ0aWVzLmh0bWxcbiAgICAgICAgKHVzZSB0byBjcmVhdGUgdGhlIHN0dWZmIGJlbG93KVxuXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAge1xuICAgICAgTkFNRSAgICA6IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgIFZFUlNJT04gOiAndicgKyByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICAgIH0sXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBTRVQgT0YgTU9EVUxFIElOU1RBTkNFUyAtIG9ubHkgMSBpZiBzaW5nbGV0b25cblxuICAgICAgQEpPQjogc2luZ2xldG9uIHZzIGZhY3RvcnlcbiAgICAgIFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIFtdLFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgREVQRU5ERU5DWSBUUkVFXG5cbiAgICAgICAgQEpPQiAtIGh0dHA6Ly93d3cuMmFsaXR5LmNvbS8yMDEyLzEwL2phdmFzY3JpcHQtcHJvcGVydGllcy5odG1sXG4gICAgICAgICAgKHVzZSB0byBjcmVhdGUgdGhlIHN0dWZmIGJlbG93KVxuXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgKGZ1bmN0aW9uIERFUEVOREVOQ0lFUyAoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAgIEVYVEVSTkFMIERFUEVOREVOQ0lFUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3RoZXJzIGxlZ29zKVxuICAgICAgICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBJTlRFUk5BTCBERVBFTkRFTkNJRVMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChteSBsZWdvcylcbiAgICAgICAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgICAgICAgICAvLyBub25lXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgZS5nLiBJTlRFUk5BTCBNT0RVTEUgLSBuYW1lT2ZJbnRlcm5hbE1vZHVsZTFcbiAgICAgICAgICAoY29weSBzdHJ1Y3R1cmUgb2YgdGhpcyBmaWxlKVxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgfTtcbiAgICB9KSgpXG4gIClcbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbik7XG4vKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcInBsYXRlc1wiLFxuICBcInZlcnNpb25cIjogXCIwLjQuMTJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVub2J0cnVzaXZlIHRlbXBsYXRpbmcgZm9yIHRoZSBmbGF0aXJvbiBmcmFtZXdvcmtcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJ0ZW1wbGF0ZXNcIixcbiAgICBcInRlbXBsYXRpbmdcIixcbiAgICBcInVub2J0cnVzaXZlXCJcbiAgXSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIk5vZGVqaXRzdSBJbmMuXCIsXG4gICAgXCJlbWFpbFwiOiBcImluZm9Abm9kZWppdHN1LmNvbVwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgXCJ1cmxcIjogXCJnaXQ6Ly9naXRodWIuY29tL2ZsYXRpcm9uL3BsYXRlcy5naXRcIlxuICAgIH1cbiAgXSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidm93c1wiOiBcIjAuNy54XCIsXG4gICAgXCJtdXN0YWNoZVwiOiBcIjAuNC54XCIsXG4gICAgXCJiZW5jaG1hcmtcIjogXCIwLjIueFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidm93cyAtLXNwZWMgdGVzdC9hcGktdGVzdC5qc1wiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiBbXG4gICAgXCJub2RlXCJcbiAgXSxcbiAgXCJtYWluXCI6IFwiLi9saWIvcGxhdGVzLmpzXCIsXG4gIFwicmVhZG1lXCI6IFwiIVtwbGF0ZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9mbGF0aXJvbi9wbGF0ZXMvcmF3L21hc3Rlci9wbGF0ZXMucG5nKVxcblxcbiMgU3lub3BzaXNcXG5QbGF0ZXMgKHNob3J0IGZvciB0ZW1wbGF0ZXMpIGJpbmRzIGRhdGEgdG8gbWFya3VwLiBQbGF0ZXMgaGFzIE5PIHNwZWNpYWwgc3ludGF4LiBJdCB3b3JrcyBpbiB0aGUgYnJvd3NlciBhbmQgaW4gW05vZGUuanNdKGh0dHA6Ly9ub2RlanMub3JnLykuXFxuXFxuIyBNb3RpdmF0aW9uXFxuLSBEU0xzIChEb21haW4gU3BlY2lmaWMgTGFuZ3VhZ2VzKSBzdWNoIGFzIDwlPWZvbyU+IG9yIHt7Zm9vfX0gcmVkdWNlIHBvcnRhYmlsaXR5Llxcbi0gRE9NIHRlbXBsYXRpbmcgaXMgU0xPVy5cXG4tIFByb21vdGUgdGhlIHNlcGFyYXRpb24gb2YgY29uY2VybnMgcHJpbmNpcGxlIGJ5IGRlY291cGxpbmcgZGVjaXNpb24gbWFraW5nIGZyb20gcHJlc2VudGF0aW9uLlxcbi0gTWFrZSBib3RoIHRoZSBjb2RlIGFuZCBtYXJrdXAgbW9yZSByZWFkYWJsZSBhbmQgbWFpbnRhaW5hYmxlIGJ5IGEgd2lkZXIgYXVkaWVuY2UuXFxuXFxuIyBTdGF0dXNcXG5cXG5bIVtCdWlsZCBTdGF0dXNdKGh0dHBzOi8vc2VjdXJlLnRyYXZpcy1jaS5vcmcvZmxhdGlyb24vcGxhdGVzLnBuZyldKGh0dHA6Ly90cmF2aXMtY2kub3JnL2ZsYXRpcm9uL3BsYXRlcylcXG5cXG4jIEZlYXR1cmVzXFxuLSBBdXRvbWF0aWNhbGx5IGJpbmQgZGF0YSB0byBhIHRhZydzIGJvZHkgYnkgbWF0Y2hpbmcgdW5pcXVlIHRhZyBJRHMgdG8gZGF0YSBrZXlzLlxcbi0gQmluZCBkYXRhIHRvIGEgdGFnJ3MgYm9keSBiYXNlZCBvbiBhbnkgYXR0cmlidXRlJ3MgdmFsdWVzLlxcbi0gQmluZCBkYXRhIHRvIGEgdGFnJ3MgYXR0cmlidXRlIGJhc2VkIG9uIGFueSBhdHRyaWJ1dGUncyB2YWx1ZXMuXFxuXFxuLSBUT0RPOiBTcGVjaWZ5IG9wdGlvbiB0byBjcmVhdGUgYXR0cmlidXRlIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxcblxcbiMgSW5zdGFsbGF0aW9uXFxuVGhlcmUgYXJlIGEgZmV3IHdheXMgdG8gdXNlIGBwbGF0ZXNgLiBJbnN0YWxsIHRoZSBsaWJyYXJ5IHVzaW5nIG5wbS4gWW91IGNhbiBhZGRcXG5pdCB0byB5b3VyIGBwYWNrYWdlLmpzb25gIGZpbGUgYXMgYSBkZXBlbmRhbmN5LCBvciBpbmNsdWRlIHRoZSBzY3JpcHQgaW4geW91clxcbkhUTUwgcGFnZS5cXG5cXG4jIFVzYWdlXFxuXFxuIyMgU2ltcGxlIGNhc2VcXG5CeSBkZWZhdWx0LCBgcGxhdGVzYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUga2V5IGluIHRoZSBkYXRhIHRvIGFuIGBpZGAgaW4gdGhlXFxudGFnLCBzaW5jZSBib3RoIHNob3VsZCBiZSB1bmlxdWUuXFxuXFxuYGBganNcXG52YXIgUGxhdGVzID0gcmVxdWlyZSgncGxhdGVzJyk7XFxuXFxudmFyIGh0bWwgPSAnPGRpdiBpZD1cXFwidGVzdFxcXCI+T2xkIFZhbHVlPC9kaXY+JztcXG52YXIgZGF0YSA9IHsgXFxcInRlc3RcXFwiOiBcXFwiTmV3IFZhbHVlXFxcIiB9O1xcblxcbnZhciBvdXRwdXQgPSBQbGF0ZXMuYmluZChodG1sLCBkYXRhKTsgXFxuYGBgXFxuXFxuIyMgRXhwbGljaXQgaW5zdHJ1Y3Rpb25zXFxuQSBjb21tb24gdXNlIGNhc2UgaXMgdG8gYXBwbHkgdGhlIG5ldyB2YWx1ZSB0byBlYWNoIHRhZydzIGJvZHkgYmFzZWQgb24gdGhlXFxuYGNsYXNzYCBhdHRyaWJ1dGUuXFxuXFxuYGBganNcXG52YXIgaHRtbCA9ICc8c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+VXNlcjwvc3Bhbj4uLi48c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+VXNlcjwvc3Bhbj4nO1xcblxcbnZhciBkYXRhID0geyBcXFwidXNlcm5hbWVcXFwiOiBcXFwiSm9obiBTbWl0aFxcXCIgfTtcXG52YXIgbWFwID0gUGxhdGVzLk1hcCgpO1xcblxcbm1hcC5jbGFzcygnbmFtZScpLnRvKCd1c2VybmFtZScpO1xcblxcbmNvbnNvbGUubG9nKFBsYXRlcy5iaW5kKGh0bWwsIGRhdGEsIG1hcCkpO1xcbmBgYFxcblxcbiMjIENvbXBsZXggaW5zdHJ1Y3Rpb25zXFxuQW5vdGhlciBjb21tb24gY2FzZSBpcyB0byByZXBsYWNlIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgaWYgaXQgaXMgYSBtYXRjaC5cXG5cXG5gYGBqc1xcbnZhciBodG1sID0gJzxhIGhyZWY9XFxcIi9cXFwiPjwvYT4nO1xcblxcbnZhciBkYXRhID0geyBcXFwibmV3dXJsXFxcIjogXFxcImh0dHA6Ly93d3cubm9kZWppdHN1LmNvbVxcXCIgfTtcXG52YXIgbWFwID0gUGxhdGVzLk1hcCgpO1xcblxcbm1hcC53aGVyZSgnaHJlZicpLmlzKCcvJykuaW5zZXJ0KCduZXd1cmwnKTtcXG5cXG5jb25zb2xlLmxvZyhQbGF0ZXMuYmluZChodG1sLCBkYXRhLCBtYXApKTtcXG5gYGBcXG5cXG5QYXJ0aWFsIHZhbHVlIHJlcGxhY2VtZW50XFxuXFxuYGBganNcXG52YXIgaHRtbCA9ICc8YSBocmVmPVxcXCIvZm9vL2JhclxcXCI+PC9hPic7XFxuXFxudmFyIGRhdGEgPSB7IFxcXCJuZXd1cmxcXFwiOiBcXFwiYmF6elxcXCIgfTtcXG52YXIgbWFwID0gUGxhdGVzLk1hcCgpO1xcblxcbm1hcC53aGVyZSgnaHJlZicpLmhhcygvYmFyLykuaW5zZXJ0KCduZXd1cmwnKTsgLy8gYGhhc2AgY2FuIHRha2UgYSByZWd1bGFyIGV4cHJlc3Npb24uXFxuXFxuY29uc29sZS5sb2coUGxhdGVzLmJpbmQoaHRtbCwgZGF0YSwgbWFwKSk7XFxuYGBgXFxuXFxuSW4gZXZlbiBtb3JlIGNvbXBsZXggY2FzZXMsIGFuIGFyYml0cmFyeSBhdHRyaWJ1dGUgY2FuIGJlIHNwZWNpZmllZC4gSWYgYSB2YWx1ZVxcbmlzIG1hdGNoZWQsIGEgc3BlY2lmaWMgdmFsdWUgY2FuIGJlIHVzZWQgYW5kIHRoZW4gdXNlZCBhcyBhbm90aGVyIGF0dHJpYnV0ZSdzXFxudmFsdWUuXFxuXFxuYGBganNcXG52YXIgaHRtbCA9ICc8aW1nIGRhdGEtZm9vPVxcXCJiYXJcXFwiIHNyYz1cXFwiXFxcIj48L2ltZz4nO1xcblxcbnZhciBkYXRhID0geyBcXFwiaW1hZ2V1cmxcXFwiOiBcXFwiaHR0cDovL3d3dy5ub2Rlaml0c3UuY29tXFxcIiB9O1xcbnZhciBtYXAgPSBQbGF0ZXMuTWFwKCk7XFxuXFxubWFwLndoZXJlKCdkYXRhLWZvbycpLmlzKCdiYXInKS51c2UoJ2ltYWdldXJsJykuYXMoJ3NyYycpO1xcblxcbmNvbnNvbGUubG9nKFBsYXRlcy5iaW5kKGh0bWwsIGRhdGEsIG1hcCkpO1xcbmBgYFxcblxcbiMjIENvbGxlY3Rpb25zXFxuXFxuUGxhdGVzIGNhbiBhbHNvIGl0ZXJhdGUgdGhyb3VnaCBjb2xsZWN0aW9uczpcXG5cXG5gYGBqc1xcbnZhciBodG1sID0gJzxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPjwvZGl2Pic7XFxudmFyIGNvbGxlY3Rpb24gPSBbXFxuICB7J25hbWUnOiAnTG91aXMgQ0snfSxcXG4gIHsnbmFtZSc6ICdBbmR5IEtpbmRsZXInfSxcXG4gIHsnbmFtZSc6ICdHcmVnIEdpcmFsZG8nfVxcbl07XFxuXFxuY29uc29sZS5sb2coUGxhdGVzLmJpbmQoaHRtbCwgY29sbGVjdGlvbikpO1xcbmBgYFxcblxcbiMjIFBhcnRpYWxzXFxuXFxuUGxhdGVzIGFsc28gc3VwcG9ydHMgcGFydGlhbHM6XFxuXFxuYGBganNcXG52YXIgcGFydGlhbCA9ICc8bGkgY2xhc3M9XFxcInBhcnRpYWxcXFwiPjwvbGk+JztcXG52YXIgYmFzZSA9ICc8ZGl2PjxoMSBjbGFzcz1cXFwiZm9vXFxcIj48L2gxPjx1bCBjbGFzcz1cXFwibWVudVxcXCI+PC91bD48L2Rpdj4nO1xcblxcbnZhciBiYXNlRGF0YSA9IHsgZm9vOiAnYmFyJyB9O1xcbnZhciBtYXBwaW5nID0gUGxhdGVzLk1hcCgpO1xcblxcbm1hcHBpbmcuY2xhc3MoJ21lbnUnKS5hcHBlbmQocGFydGlhbCk7XFxuY29uc29sZS5sb2coUGxhdGVzLmJpbmQoYmFzZSwgYmFzZURhdGEsIG1hcHBpbmcpKTtcXG5gYGBcXG5cXG4jIEFQSVxcblxcbiMjIFBsYXRlcyBTdGF0aWMgTWV0aG9kc1xcblxcbmBgYFxcbmZ1bmN0aW9uIFBsYXRlcy5iaW5kKGh0bWwsIGRhdGEsIG1hcClcXG5AcGFyYW0gaHRtbCB7U3RyaW5nfSBBIHN0cmluZyBvZiB3ZWxsLWZvcm1lZCBIVE1MLlxcbkBwYXJhbSBkYXRhIHtPYmplY3R9IEEgSlNPTiBvYmplY3QuXFxuQHBhcmFtIG1hcCB7T2JqZWN0fSBBbiBpbnN0YW5jZSBvZiBgUGxhdGVzLk1hcCgpYC5cXG5cXG5AcmV0dXJuIHtTdHJpbmd9IFRoZSByZXN1bHQgb2YgbWVyZ2luZyB0aGUgZGF0YSBhbmQgaHRtbC5cXG5gYGBcXG5cXG4jIyBNYXAgQ29uc3RydWN0b3JcXG5cXG5gYGBcXG5mdW5jdGlvbiBQbGF0ZXMuTWFwKG9wdGlvbnMpXFxuQG9wdGlvbnMge09iamVjdH0gQW4gb2JqZWN0IGxpdGVyYWwgdGhhdCBjb250YWlucyBjb25maWd1cmF0aW9uIG9wdGlvbnMuXFxuICAtIEBvcHRpb24gd2hlcmUge1N0cmluZ30gVGhlIGRlZmF1bHQgYXR0cmlidXRlIHRvIG1hdGNoIG9uIGluc3RlYWQgb2YgSUQuXFxuICAtIEBvcHRpb24gYXMge1N0cmluZ30gVGhlIGRlZmF1bHQgYXR0cmlidXRlIHRvIHJlcGxhY2UgaW50by5cXG5AcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSByZXVzYWJsZSBtYXAsIGhhcyBtYXBwaW5nIG1ldGhvZHMuXFxuYGBgXFxuXFxuIyMgTWFwIEluc3RhbmNlIE1ldGhvZHNcXG5cXG4jIyMgd2hlcmUoKVxcblxcbmBgYFxcbmZ1bmN0aW9uIE1hcCN3aGVyZShhdHRyaWJ1dGUpXFxuQHBhcmFtIGF0dHJpYnV0ZSB7U3RyaW5nfSBBbiBhdHRyaWJ1dGUgdGhhdCBtYXkgYmUgZm91bmQgaW4gYSB0YWcuXFxuXFxuVGhpcyBtZXRob2Qgd2lsbCBpbml0aWF0ZSBhIGNsYXVzZS4gT25jZSBhIGNsYXVzZSBoYXMgYmVlbiBlc3RhYmxpc2hlZCxcXG5vdGhlciBtZW1iZXIgbWV0aG9kcyBtYXkgYmUgY2hhaW5lZCB0byBlYWNoIG90aGVyIGluIGFueSBvcmRlci5cXG5gYGBcXG5cXG4jIyMgY2xhc3MoKSwgY2xhc3NOYW1lKClcXG5cXG5gYGBcXG5mdW5jdGlvbiBNYXAjY2xhc3MoYXR0cmlidXRlKVxcbkBwYXJhbSBhdHRyaWJ1dGUge1N0cmluZ30gQSB2YWx1ZSB0aGF0IG1heSBiZSBmb3VuZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgb2YgYSB0YWcuXFxuYGBgXFxuXFxuIyMjIGlzKClcXG5cXG5gYGBcXG5mdW5jdGlvbiBNYXAjaXModmFsdWUpXFxuQHBhcmFtIHZhbHVlIHtTdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHNwZWNpZmllZCBpbiB0aGUgYHdoZXJlYCBjbGF1c2UuXFxuYGBgXFxuXFxuIyMjIGhhcygpXFxuXFxuYGBgXFxuZnVuY3Rpb24gTWFwI2hhcyh2YWx1ZSlcXG5AcGFyYW0gdmFsdWUge1N0cmluZ3xSZWdFeHB9IFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHNwZWNpZmllZCBpbiB0aGUgYHdoZXJlYCBjbGF1c2UuXFxuYGBgXFxuXFxuIyMjIGluc2VydCgpXFxuXFxuYGBgXFxuZnVuY3Rpb24gTWFwI2luc2VydChhdHRyaWJ1dGUpXFxuQHBhcmFtIGF0dHJpYnV0ZSB7U3RyaW5nfSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgYSBrZXkuIERhdGEgd2lsbCBiZSBpbnNlcnRlZCBpbnRvIFxcbnRoZSBhdHRyaWJ1dGUgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBgd2hlcmVgIGNsYXVzZS5cXG5gYGBcXG5cXG4jIyMgdXNlKClcXG5cXG5gYGBcXG5mdW5jdGlvbiBNYXAjdXNlKGtleSlcXG5AcGFyYW0ga2V5IHtTdHJpbmd8RnVuY3Rpb259IEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhIGtleSBpbiB0aGUgZGF0YSBvYmplY3QgdGhhdCB3YXMgcHJvdmlkZWQgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRvIHVzZS5cXG5cXG5JZiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHBhc3NlZCBkYXRhLCB2YWx1ZSBhbmQgdGFnYm9keSBwYXJhbWV0ZXJzLlxcbmBgYFxcblxcbiMjIyB0bygpXFxuXFxuYGBgXFxuZnVuY3Rpb24gTWFwI3RvKGtleSlcXG5AcGFyYW0ga2V5IHtTdHJpbmd8RnVuY3Rpb259IEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhIGtleSBpbiB0aGUgZGF0YSBvYmplY3QgdGhhdCB3YXMgcHJvdmlkZWQgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRvIHVzZS5cXG5cXG5JZiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHBhc3NlZCBkYXRhLCB2YWx1ZSBhbmQgdGFnYm9keSBwYXJhbWV0ZXJzLlxcblxcblNhbWUgYXMgYHVzZWAgbWV0aG9kLlxcbmBgYFxcblxcbiMjIyBhcygpXFxuXFxuYGBgXFxuZnVuY3Rpb24gTWFwI2FzKGF0dHJpYnV0ZSlcXG5AcGFyYW0gYXR0cmlidXRlIHtTdHJpbmd9IEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhbiBhdHRyaWJ1dGUgaW4gdGhlIHRhZy5cXG5cXG5JZiB0aGVyZSBpcyBubyBhdHRyaWJ1dGUgYnkgdGhhdCBuYW1lIGZvdW5kLCBvbmUgbWF5IGJlIGNyZWF0ZWQgZGVwZW5kaW5nIG9uIHRoZSBvcHRpb25zXFxudGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgYE1hcGAgY29uc3RydWN0b3IuXFxuYGBgXFxuXFxuIyMjIHJlbW92ZSgpXFxuXFxuYGBgXFxuZnVuY3Rpb24gTWFwI3JlbW92ZSgpXFxuXFxuUmVtb3ZlcyB0aGUgbWF0Y2hpbmcgZWxlbWVudHMgZnJvbSB0aGUgdGVtcGxhdGUuXFxuYGBgXFxuXFxuIyMjIGFwcGVuZCgpLCBwYXJ0aWFsKClcXG5cXG5gYGBcXG5mdW5jdGlvbiBNYXAjYXBwZW5kKGh0bWwsIGRhdGEsIG1hcClcXG5AcGFyYW0gaHRtbCB7U3RyaW5nfSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIG5ldyB0ZW1wbGF0ZSB0aGF0IG5lZWRzIHRvIGJlXFxuYWRkZWQuXFxuQHBhcmFtIGRhdGEge01peGVkfSBkYXRhIGZvciB0aGUgcGFydGlhbCwgaWYgaXQncyBhIHN0cmluZyBpdCdzIGEgcmVmZXJlbmNlIHRvIGFcXG5rZXkgaW4gdGhlIGRhdGEgc3RydWN0dXJlIHRoYXQgd2FzIHN1cHBsaWVkIHRvIHRoZSBtYWluIHRlbXBsYXRlLlxcbkBwYXJhbSBtYXAge1BsYXRlcy5NYXB9IGRhdGEgbWFwcGluZyBmb3IgdGhlIHBhcnRpYWwuXFxuXFxuSWYgdGhlIHN1cHBsaWVkIEhUTUwgc3RyaW5nIGRvZXNuJ3QgY29udGFpbiBhbnkgSFRNTCBtYXJrdXAgd2UgYXNzdW1lIHRoYXQgd2VcXG50aGUgZ2l2ZW4gc3RyaW5nIGlzIHRoZSBsb2NhdGlvbiBvZiB0aGUgdGVtcGxhdGUuIFdoZW4geW91IGFyZSB1c2luZyBQbGF0ZXMgb25cXG50aGUgYnJvd3NlciBpcyBhc3N1bWVzIHRoYXQgeW91IHN1cHBsaWVkIGl0IHdpdGggYW4gaWQgc2VsZWN0b3IgYW5kIHdpbGwgZmV0Y2hcXG50aGUgaW5uZXJIVE1MIGZyb20gdGhlIGVsZW1lbnQuIElmIHlvdSBhcmUgdXNpbmcgUGxhdGVzIGluIE5vZGUuanMgaXQgYXNzdW1lc1xcbnRoYXQgeW91IGdhdmUgaXQgYSBmaWxlIHBhdGggdGhhdCBpcyByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS5cXG5gYGBcXG5cXG4jIExpY2Vuc2VcXG5cXG4oVGhlIE1JVCBMaWNlbnNlKVxcblxcbkNvcHlyaWdodCAoYykgMjAxMSBOb2Rlaml0c3UgSW5jLiBodHRwOi8vd3d3LnR3aXR0ZXIuY29tL25vZGVqaXRzdVxcblxcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpblxcbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxcbnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcXG5zdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG5cXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcblxcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXFxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcXG5GT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcXG5DT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcXG5JTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxcbkNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXFxuXCIsXG4gIFwicmVhZG1lRmlsZW5hbWVcIjogXCJSRUFETUUubWRcIixcbiAgXCJfaWRcIjogXCJwbGF0ZXNAMC40LjEyXCIsXG4gIFwiX3NoYXN1bVwiOiBcIjhlYmNmY2UxNTBhZTZiZDM4YTc1ZDQ1ZTA1ZmIzM2Y4ZTk1YzRjOGZcIixcbiAgXCJfcmVzb2x2ZWRcIjogXCJnaXQ6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvcGxhdGVzIzk0MjE0NjQ1MTA1MzExNDdmM2IwMzgxMTk3YmQzYjhiZjVlMjlmYjdcIixcbiAgXCJfZnJvbVwiOiBcInBsYXRlc0BnaXQ6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvcGxhdGVzI3YwLjQuMTJcIlxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJob2xvblwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuNlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTGVpZ2h0LXdlaWdodCBEU0wtZnJlZSBkdWFsLXNpZGUgY29tcG9zYWJsZSByZWFjdGl2ZSBjb21wb25lbnRzXCIsXG4gIFwibWFpblwiOiBcIlNPVVJDRS9pbmRleC5qc1wiLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb25cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJkdWFsLXNpZGVcIixcbiAgICBcImNvbXBvc2FibGVcIixcbiAgICBcInJlYWN0aXZlXCIsXG4gICAgXCJjb21wb25lbnRcIixcbiAgICBcImNvbXBvbmVudHNcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0ZW1wbGF0aW5nXCIsXG4gICAgXCJtb2R1bGVcIixcbiAgICBcImR1YWxcIixcbiAgICBcInNpZGVcIixcbiAgICBcInBhcnRpYWxcIixcbiAgICBcInBhcnRpYWxzXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRvZG9cIjogXCJodHRwOi8vYnJvd3NlbnBtLm9yZy9wYWNrYWdlLmpzb25cIixcbiAgICBcInRvZG8yXCI6IFwiaHR0cHM6Ly93d3cubnBtanMub3JnL2RvYy9maWxlcy9wYWNrYWdlLmpzb24uaHRtbFwiLFxuICAgIFwiaGVscFwiOiBcIiNkZXNjcmliZSBhbGwgbnBtIHRhc2tzIC0gaHR0cDovL2FuZGVycy5qYW5teXIuY29tLzIwMTQvMDMvcnVubmluZy1zY3JpcHRzLXdpdGgtbnBtLmh0bWwgKyBodHRwOi8vc3Vic3RhY2submV0L3Rhc2tfYXV0b21hdGlvbl93aXRoX25wbV9ydW5cIixcbiAgICBcImpvYnNcIjogXCIjbGlzdCBqb2JzICsgZGVzY3JpcHRpb24gb24gaG93IHRvIHN0YXJ0IHdvcmtpbmcgb24gb25lICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRldmVsb3BcIjogXCIjY2hlY2tvdXQgam9iIGJyYW5jaCArIHN0eWx1cyAmIHdhdGNoICYgdGVzdGVtICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRlcGxveVwiOiBcIiNidWlsZCArIHJ1biBhbGwgdGVzdHMgKyBnaXQgcHVzaCBpZiBzdWNjZXNzZnVsIEFORCAuLi4gd2hhdCBhYm91dCBkb2NrZXI/Pz9cIixcbiAgICBcInJlbGVhc2VcIjogXCIjYnVpbGQgdGhyb3VnaCBicm93c2VyaWZ5LCB0ZXN0IGFsbCArIGlmIHN1Y2Nlc3NmdWw6IHVnbGlmeSArIHNlbXZlciArIHB1c2ggd2l0aCB0YWdzICsgTk9UIG5wbSBwdWJsaXNoLCBib3dlciByZWdpc3RlciwgLi4uLlwiLFxuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxICNydW4gdGVzdGVtXCIsXG4gICAgXCJzcGVjXCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ1Z2xpZnlcIjogXCIjaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay91Z2xpZnlpZnlcIixcbiAgICBcInN0dWZmXCI6IFwiI2VjaG8gdiQoY2F0IHBhY2thZ2UuanNvbiB8IGdyZXAgdmVyc2lvbiB8IGdyZXAgLVBvICcoPzw9dmVyc2lvblxcXCI6IFxcXCIpLiooPz1cXFwiKScpLCBucG0gcnVuIHNlcnZlLCBucG0gcnVuIHNwZWNcIixcbiAgICBcInN0YXJ0XCI6IFwibm9kZV9tb2R1bGVzL2F0b21pZnkvYmluL2F0b21pZnkuanNcIlxuICB9LFxuICBcImF0b21pZnlcIjoge1xuICAgIFwic2VydmVyXCI6IHtcbiAgICAgIFwicG9ydFwiOiAxMzM3LFxuICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICBcInVybFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9cIixcbiAgICAgIFwibHJcIjoge1xuICAgICAgICBcInZlcmJvc2VcIjogdHJ1ZSxcbiAgICAgICAgXCJxdWlldFwiOiBmYWxzZSxcbiAgICAgICAgXCJwYXR0ZXJuc1wiOiBbXSxcbiAgICAgICAgXCJwb3J0XCI6IDMxMzM3LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xpY2tzXCI6IGZhbHNlLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogZmFsc2UsXG4gICAgICAgICAgXCJmb3Jtc1wiOiBmYWxzZSxcbiAgICAgICAgICBcInNjcm9sbFwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdFwiOiB7XG4gICAgICAgIFwicGF0aFwiOiBcIi4vXCIsXG4gICAgICAgIFwiY2FjaGVcIjogZmFsc2UsXG4gICAgICAgIFwiaW5kZXhcIjogXCJpbmRleC5odG1sXCIsXG4gICAgICAgIFwiZG90XCI6IGZhbHNlLFxuICAgICAgICBcInBhc3N0aHJvdWdoXCI6IGZhbHNlLFxuICAgICAgICBcImd6aXBcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJqc1wiOiB7XG4gICAgICBcImVudHJ5XCI6IFwiU09VUkNFL2luZGV4LmpzXCIsXG4gICAgICBcImFsaWFzXCI6IFwiUkVMRUFTRS9MSUJSQVJZLmJ1bmRsZS5qc1wiLFxuICAgICAgXCJvdXRwdXRcIjogXCJSRUxFQVNFL0xJQlJBUlkuYnVuZGxlLmpzXCIsXG4gICAgICBcImRlYnVnXCI6IHRydWUsXG4gICAgICBcInRyYW5zZm9ybXNcIjogW10sXG4gICAgICBcInN0YW5kYWxvbmVcIjogXCJMSUJSQVJZXCJcbiAgICB9XG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0gMC4xMC4yNVwiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9ob2xvbi5naXRcIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24vaXNzdWVzXCJcbiAgfSxcbiAgXCJsaWNlbnNlc1wiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiQ0MwXCIsXG4gICAgICBcInVybFwiOiBcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC9cIlxuICAgIH1cbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiQ0MwXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInBsYXRlc1wiOiBcImdpdDovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9wbGF0ZXMjdjAuNC4xMlwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImF0b21pZnlcIjogXCJeMy4yLjBcIlxuICB9LFxuICBcIm9wdGlvbmFsRGVwZW5kZW5jaWVzXCI6IHt9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge30sXG4gIFwicmVhZG1lXCI6IFwidGFibGUgb2YgY29udGVudFxcbj09PT09PT1cXG4qIFtpbnRyb2R1Y3Rpb25dKCNob2xvbilcXG4qIFtkZW1vXSgjZGVtbylcXG4qIFt1c2FnZV0oI3VzYWdlKVxcbiogW2FwaV0oI2FwaSlcXG4qIFthdXRob3JzXSgjYXV0aG9ycylcXG4qIFtqb2JzXSgjam9icylcXG4qIFtjb250cmlidXRlXSgjY29udHJpYnV0ZSlcXG4qIFtyZXBvc2l0b3J5IGRlc2NyaXB0aW9uXSgjcmVwb3NpdG9yeSlcXG4qIFtsaWNlbnNlXSgjbGljZW5zZSlcXG5cXG5cXG5cXG5cXG5ob2xvblxcbj09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbkxlaWdodC13ZWlnaHQgRFNMLWZyZWUgZHVhbC1zaWRlIGNvbXBvc2FibGUgcmVhY3RpdmUgY29tcG9uZW50c1xcbiFbaG9sb25dKGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9ob2xvbi9tYXN0ZXIvaG9sb24ucG5nKVxcblxcblxcblxcblxcbmRlbW9cXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbl9f4pig4pig4pigIHNlY3Rpb24gaXMgdW5kZXIgY29uc3RydWN0aW9uIOKYoOKYoOKYoF9fXFxuXFxuXFxuXFxuXFxudXNhZ2VcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbl9f4pig4pig4pigIHNlY3Rpb24gaXMgdW5kZXIgY29uc3RydWN0aW9uIOKYoOKYoOKYoF9fXFxuXFxuaW5zdGFsbCB3aXRoIFtucG1dKGh0dHA6Ly9ucG1qcy5vcmcpIGRvOlxcblxcbmBgYFxcbm5wbSBpbnN0YWxsIGhvbG9uXFxuYGBgXFxuaW5zdGFsbCB3aXRoIFtib3dlcl0oaHR0cDovL2Jvd2VyLmlvKSBkbzpcXG5cXG5gYGBcXG5ib3dlciBpbnN0YWxsIGhvbG9uXFxuYGBgXFxuaW5zdGFsbCB3aXRoIFtnaXRdKGh0dHA6Ly9naXQtc2NtLmNvbS8pIGRvOlxcblxcbmBgYFxcbmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9ob2xvbi5naXRcXG5gYGBcXG5cXG5cXG5cXG5cXG5hcGlcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbl9f4pig4pig4pigIHNlY3Rpb24gaXMgdW5kZXIgY29uc3RydWN0aW9uIOKYoOKYoOKYoF9fXFxuXFxuXFxuXFxuXFxuYXV0aG9yc1xcbj09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuKiBbc2VyYXBhdGhdKGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJhcGF0aCBcXFwiQWxleGFuZGVyIFByYWV0b3JpdXNcXFwiKVxcblxcblxcblxcblxcbmpvYnNcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcblRoZXJlIGlzIG1vcmUgam9icyBpbiB0aGUgc291cmNlIGNvZGUgbWFya2VkIHdpdGggYC8vIEBUT0RPOiA8am9iIGRlc2NyaXB0aW9uPmAgYW5kIGV2ZW50dWFsbHkgc29tZSBqb2JzIG1pZ2h0IGJlIGxpc3RlZCB1bmRlciB0aGUgW2hvbG9uIGlzc3Vlc10oaHR0cHM6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24vaXNzdWVzIFxcXCJob2xvbiAtIG9wZW4gaXNzdWVzXFxcIikgcGFnZSwgd2hpY2ggY2FuIGFsc28gYmUgYWNjZXNzZWQgdGhyb3VnaCBbd2FmZmxlLmlvXShodHRwczovL3dhZmZsZS5pby9jb2RpbmctYW1pZ29zL2hvbG9uIFxcXCJob2xvbiAtIG9wZW4gaXNzdWVzXFxcIikuXFxuKiBfX0BUT0RPOl9fIFB1Ymxpc2ggaXQgYXMgYSBjb21wb25lbnRcXG4gICogaHR0cDovL21vZGVybndlYi5jb20vMjAxNC8wMi8xNy9pbnRyb2R1Y3Rpb24tdG8tdGhlLWNvbXBvbmVudC1qYXZhc2NyaXB0LXBhY2thZ2UtbWFuYWdlci9cXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2NvbXBvbmVudC9jb21wb25lbnQvd2lraS9Db21wb25lbnRzXFxuKiBfX0BUT0RPOl9fIENyZWF0ZSBhIEdpdGh1YiBQYWdlXFxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qZWt5bGwvamVreWxsXFxuICAqIGh0dHBzOi8vaGVscC5naXRodWIuY29tL2NhdGVnb3JpZXMvMjAvYXJ0aWNsZXNcXG4qIF9fQFRPRE86X18gSW5jbHVkZSBUZXN0aW5nIHZpYSBcXFwiU3BlY2lmaWNhdGlvbiBEcml2ZW4gRGV2ZWxvcG1lbnRcXFwiIHVzaW5nIGdoZXJraW4gZHNsICYgVEVTVEVNXFxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWN1bWJlci9jdWN1bWJlci93aWtpL0doZXJraW5cXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2FpcnBvcnR5aC90ZXN0ZW1cXG4qIF9fQFRPRE86X18gQWRkICdMZWlnaHQtd2VpZ2h0IERTTC1mcmVlIGR1YWwtc2lkZSBjb21wb3NhYmxlIFxcXCJCRU1pZmllZFxcXCIgcmVhY3RpdmUgY29tcG9uZW50cycgKyBtb3JlIHZlcmJvc2UgZGVzY3JpcHRpb24gdG8gUkVBRE1FLm1hcmtkb3duXFxuKiBfX0BUT0RPOl9fIEVkaXQgYWxsICd1bmRlciBjb25zdHJ1Y3Rpb24gc2VjdGlvbnMnIGluIFJFQURNRS5tYXJrZG93biAoYXQgbGVhc3QgYWRkIFxcXCJAVE9ETydzXFxcIiBmb3IgdGhlbSB0byB0aGUgXFxcIkpvYnMgU2VjdGlvblxcXCIpXFxuKiBfX0BUT0RPOl9fIEFkZCBDSEFOR0VMT0cgRmlsZVxcbiogX19AVE9ETzpfXyBUaGlzIHNlY3Rpb24gc2hvdWxkIGluc3RlYWQgbGlzdCBhbGwgdGhlIFRPRE8tQnJhbmNoZXMgY3VycmVudGx5IGF2YWlsYWJsZSArIGEgbGluayB0byB0aGUgXFxcIlRPRE8gRGVzY3JpcHRpb24gZmlsZSBpbiB0aGF0IGJyYW5jaFxcXCJcXG4gICogVGhlIFJFQURNRS5tYXJrZG93biBpbiB0aGF0IGJyYW5jaCBjb3VsZCBsaXN0IHRoZSBkZXNjcmlwdGlvbiB1bmRlciB0aGUgXFxcImpvYnMgc2VjdGlvblxcXCJcXG4qIF9fQFRPRE86X18gYWRkIHdvcmtmbG93IGRlc2NyaXB0aW9uXFxuICAqIGh0dHA6Ly93d3cud29sZmUuaWQuYXUvMjAxNC8wMi8wMS9nZXR0aW5nLWEtbmV3LW5vZGUtcHJvamVjdC1zdGFydGVkLXdpdGgtbnBtLyBcXG4gICogaHR0cDovL3F1aWNrbGVmdC5jb20vYmxvZy9jcmVhdGluZy1hbmQtcHVibGlzaGluZy1hLW5vZGUtanMtbW9kdWxlXFxuICAqIGh0dHA6Ly93d3cuZGV2dGhvdWdodC5jb20vMjAxMi8wMi8xNy9ucG0tdHJpY2tzL1xcbiogX19AVE9ETzpfXyBmaW5kIGNvbnZlbnRpb24gZm9yIGJyYW5jaCBuYW1lcywgZS5nLiB7Q0EtMX17U1BJS0V9e2plZXQuZ3N9IGFuZCBDT01NSVQgTkFNRVNcXG5cXG5fX+KYoOKYoOKYoCBzZWN0aW9uIGlzIHVuZGVyIGNvbnN0cnVjdGlvbiDimKDimKDimKBfX1xcblxcblxcbmNvbnRyaWJ1dGVcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbiMjIyBQUkVQQVJFIFNZU1RFTVxcbiAgKiBpbnN0YWxsIFtnaXRdKGh0dHA6Ly9naXQtc2NtLmNvbSBcXFwiZ2l0XFxcIikgaWYgaXQgaXMgbm90IHlldCBpbnN0YWxsZWQgb24geW91ciBzeXN0ZW1cXG4gICogaW5zdGFsbCBbbm9kZV0oaHR0cDovL25vZGVqcy5vcmcgXFxcIm5vZGVqc1xcXCIpIGlmIGl0IGlzIG5vdCB5ZXQgaW5zdGFsbGVkIG9uIHlvdXIgc3lzdGVtXFxuICAqIG9wZW4gYSB0ZXJtaW5hbCBvbiB5b3VyIHN5c3RlbSBhbmQgbmF2aWdhdGUgdG8geW91ciBmYXZvdXJpdGUgd29ya3NwYWNlIGZvbGRlclxcbiAgICAqIF8oeW91IG1pZ2h0IG5lZWQgdG8gcHJlZml4IHNvbWUgb2YgdGhlIGZvbGxvd2luZyBjb21tYW5kcyB3aXRoIGBzdWRvYCB0byBtYWtlIHRoZW0gd29yaylfXFxuXFxuIyMjIFNUQVJUIFBSRVBBUklORyBIT0xPTiBQUk9KRUNUXFxuKiBgZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL2hvbG9uLmdpdGBcXG4qIGBucG0gaW5zdGFsbCAtZyBib3dlciBib3dlci1pbnN0YWxsZXIgc3R5bHVzIG5pYiBqZWV0IHJ1cHR1cmVgXFxuKiBgbnBtIGluc3RhbGwgJiYgYm93ZXIgaW5zdGFsbGBcXG4qIGBucG0gdXBkYXRlYFxcbiogYHN0eWx1cyAtdSBqZWV0IC11IG5pYiAtcnVwdHVyZSAtdyBob2xvbi5zdHlsYFxcbiogbG9hZCBtYWluIEhUTUwgcHJvamVjdCBmaWxlIGJ5IG9wZW5pbmcgYW5kIHBvaW50aW5nIHlvdXIgYnJvd3NlciB0bzpcXG4gICogYSBzZXJ2ZXIgdGhhdCBzZXJ2ZXMgdGhlIGAuL0RFTU8vZGV2Lmh0bWxgIGZpbGUgXyhlLmcuIGxvY2FsaG9zdDozMDAwL0RFTU8vZGV2Lmh0bWwpX1xcbiAgKiBvciBkb3VibGVjbGljayBgLi9ERU1PL2Rldi5odG1sYCBmaWxlIHRvIG9wZW4gaXQgZGlyZWN0bHkgaW4geW91ciBicm93c2VyXFxuICAgICogX19ISU5UOl9fIHRoaXMgb25seSB3b3JrcyB3aXRoIENPUlMgZGlzYWJsZWQuIEluIG9yZGVyIHRvIGRvIHNvOlxcbiAgICAgICogbWFjIG9zeCBgb3BlbiAtYSBHb29nbGVcXFxcIENocm9tZSAtLWFyZ3MgLS1kaXNhYmxlLXdlYi1zZWN1cml0eWBcXG4gICAgICAqIGxpbnV4IGBnb29nbGUtY2hyb21lIC0tZGlzYWJsZS13ZWItc2VjdXJpdHlgXFxuICAgICAgKiB3aW5kb3dzIGBjaHJvbWUuZXhlIC0tZGlzYWJsZS13ZWItc2VjdXJpdHlgXFxuXFxuX18uLi4gSEFQUFkgQ09ESU5HIDotKV9fXFxuXFxuXFxuXFxuXFxucmVwb3NpdG9yeVxcbj09PT09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuMS4gX19gLi9gX19cXG4gICogQ29udGFpbnMgbWV0YSBkYXRhIGFib3V0IHRoaXMgY29tcG9uZW50XFxuMi4gX19gLi9ERU1PYF9fXFxuICAqIENvbnRhaW5zIGEgZmlsZSB0aGF0IGRlbW9uc3RyYXRlIGhvdyB0byB1c2UgdGhpcyBjb21wb25lbnQgaW4geW91ciBwcm9qZWN0XFxuMy4gX19gLi9ERVBFTkRFTkNJRVNgX19cXG4gICogQ29udGFpbnMgYWxsIGludGVybmFsIGRlcGVuZGVuY2llcyB1c2VkIGJ5IHRoaXMgY29tcG9uZW50LCBidXQgbm90IHlldCBwdWJsaXNoZWQgdG8gdGhlaXIgb3duIHJlcG9zaXRvcmllc1xcbjQuIF9fYC4vUkVMRUFTRWBfX1xcbiAgKiBDb250YWlucyBwcm9kdWN0aW9uIHJlYWR5IHZlcnNpb25zIG9mIHRoaXMgY29tcG9uZW50IHdoaWNoIGFyZSB1c2VkIGJ5IGV4YW1wbGVzIGluIGAuL0RFTU9gXFxuICAqIF9fQ0ROczpfXyBgdjAuMC4zQGdpdGAsIGB2MC4wLjJAbnBtYCwgYHYwLjAuMkBib3dlcmBcXG41LiBfX2AuL1NPVVJDRWBfX1xcbiAgKiBDb250YWlucyBhbGwgdGhlIHNvdXJjZSBmaWxlcyBmb3IgdGhpcyBjb21wb25lbnRcXG42LiBfX2AuL1NPVVJDRS9tZWRpYWBfX1xcbiAgKiBDb250YWlucyBmb250cywgaW1hZ2VzLCB2aWRlb3MsIG11c2ljIGFuZCB0aGUgbGlrZSwgdXNlZCBieSB0aGlzIGNvbXBvbmVudFxcbjcuIF9fYC4vU1BFQ0lGSUNBVElPTmBfX1xcbiAgKiBDb250YWlucyB0aGUgdmlzaW9uLCByb2FkbWFwLCBvcGVuIGpvYnMgYW5kIHRlc3RzIGZvciBjb21wbGV0ZWQgam9icyByZWdhcmRpbmcgdGhpcyBjb21wb25lbnRcXG44LiBfX2AuL1dPUktCRU5DSGBfX1xcbiAgKiBDb250YWlucyBzb21lIGV4cGVyaW1lbnRhbCBzdHVmZiBmb3IgaW5zcGlyYXRpb24gdG8gXFxcInNwaWtlXFxcIiB0aGUgdXNlIG9mIGNlcnRhaW4gdGVjaG5vbG9naWVzIHRvIGRldmVsb3AgdGhpcyBjb21wb25lbnQgZnVydGhlclxcblxcblxcblxcblxcbmxpY2Vuc2VcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbjxwIHhtbG5zOmRjdD1cXFwiaHR0cDovL3B1cmwub3JnL2RjL3Rlcm1zL1xcXCIgeG1sbnM6dmNhcmQ9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvdmNhcmQtcmRmLzMuMCNcXFwiPlxcbiAgPGEgcmVsPVxcXCJsaWNlbnNlXFxcIlxcbiAgICAgaHJlZj1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wL1xcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3Jhdy5naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24vbWFzdGVyL2NjMC5wbmdcXFwiIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6IG5vbmU7XFxcIiBhbHQ9XFxcIkNDMCAxLjAgVW5pdmVyc2FsXFxcIiAvPlxcbiAgPC9hPlxcbiAgPGJyIC8+XFxuICBUbyB0aGUgZXh0ZW50IHBvc3NpYmxlIHVuZGVyIGxhdyxcXG4gIDxhIHJlbD1cXFwiZGN0OnB1Ymxpc2hlclxcXCJcXG4gICAgIGhyZWY9XFxcImh0dHA6Ly93d3cuc2VyYXBhdGguZGVcXFwiPlxcbiAgICA8c3BhbiBwcm9wZXJ0eT1cXFwiZGN0OnRpdGxlXFxcIj5BbGV4YW5kZXIgUHJhZXRvcml1czwvc3Bhbj48L2E+XFxuICBoYXMgd2FpdmVkIGFsbCBjb3B5cmlnaHQgYW5kIHJlbGF0ZWQgb3IgbmVpZ2hib3JpbmcgcmlnaHRzIHRvXFxuICA8c3BhbiBwcm9wZXJ0eT1cXFwiZGN0OnRpdGxlXFxcIj5ob2xvbjwvc3Bhbj4uXFxuVGhpcyB3b3JrIGlzIHB1Ymxpc2hlZCBmcm9tOlxcbjxzcGFuIHByb3BlcnR5PVxcXCJ2Y2FyZDpDb3VudHJ5XFxcIiBkYXRhdHlwZT1cXFwiZGN0OklTTzMxNjZcXFwiXFxuICAgICAgY29udGVudD1cXFwiREVcXFwiIGFib3V0PVxcXCJodHRwOi8vd3d3LnNlcmFwYXRoLmRlXFxcIj5cXG4gIEdlcm1hbnk8L3NwYW4+LlxcbjwvcD5cXG5cXG5bLi4ubW9yZSBpbmZvcm1hdGlvbl0oaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL2hvbG9uL21hc3Rlci9MSUNFTlNFIFxcXCJDQzAgMS4wIFVuaXZlcnNhbFxcXCIpXFxuXCIsXG4gIFwicmVhZG1lRmlsZW5hbWVcIjogXCJSRUFETUUubWFya2Rvd25cIixcbiAgXCJfaWRcIjogXCJob2xvbkAwLjAuNlwiLFxuICBcIl9zaGFzdW1cIjogXCJlN2YwNDdjYTYyZDI1Y2U5NWYzZmM5N2RkZDBhODNhZGU2NDI2NDkxXCIsXG4gIFwiX3Jlc29sdmVkXCI6IFwiZ2l0Oi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL2hvbG9uIzRiZWZjNjRiNzU5NDRlYTA0NjJlODFlOTJkNTRhNjBhNWQxNGI4MTNcIixcbiAgXCJfZnJvbVwiOiBcImhvbG9uQGdpdDovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9ob2xvbiN2MC4wLjZcIlxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJMZWFkU2hhcmVBcHBGcm9udGVuZFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuOFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiW0xJQlJBUlldIC0gRnJvbnRlbmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9uaW5hYnJlem5pay9MZWFkU2hhcmVBcHAuZ2l0XCIsXG4gIFwic3R5bGVcIjogXCJTT1VSQ0UvaW5kZXguY3NzXCIsXG4gIFwibWFpblwiOiBcIlNPVVJDRS9pbmRleC5qc1wiLFxuICBcImRpcmVjdG9yaWVzXCI6IHtcbiAgICBcInRlc3RcIjogXCJTUEVDSUZJQ0FUSU9OXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRvZG9cIjogXCJodHRwOi8vYnJvd3NlbnBtLm9yZy9wYWNrYWdlLmpzb25cIixcbiAgICBcInRvZG8yXCI6IFwiaHR0cHM6Ly93d3cubnBtanMub3JnL2RvYy9maWxlcy9wYWNrYWdlLmpzb24uaHRtbFwiLFxuICAgIFwiaGVscFwiOiBcIiNkZXNjcmliZSBhbGwgbnBtIHRhc2tzIC0gaHR0cDovL2FuZGVycy5qYW5teXIuY29tLzIwMTQvMDMvcnVubmluZy1zY3JpcHRzLXdpdGgtbnBtLmh0bWwgKyBodHRwOi8vc3Vic3RhY2submV0L3Rhc2tfYXV0b21hdGlvbl93aXRoX25wbV9ydW5cIixcbiAgICBcImpvYnNcIjogXCIjbGlzdCBqb2JzICsgZGVzY3JpcHRpb24gb24gaG93IHRvIHN0YXJ0IHdvcmtpbmcgb24gb25lICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRldmVsb3BcIjogXCIjY2hlY2tvdXQgam9iIGJyYW5jaCArIHN0eWx1cyAmIHdhdGNoICYgdGVzdGVtICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRlcGxveVwiOiBcIiNidWlsZCArIHJ1biBhbGwgdGVzdHMgKyBnaXQgcHVzaCBpZiBzdWNjZXNzZnVsIEFORCAuLi4gd2hhdCBhYm91dCBkb2NrZXI/Pz9cIixcbiAgICBcInJlbGVhc2VcIjogXCIjYnVpbGQgdGhyb3VnaCBicm93c2VyaWZ5LCB0ZXN0IGFsbCArIGlmIHN1Y2Nlc3NmdWw6IHVnbGlmeSArIHNlbXZlciArIHB1c2ggd2l0aCB0YWdzICsgTk9UIG5wbSBwdWJsaXNoLCBib3dlciByZWdpc3RlciwgLi4uLlwiLFxuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxICNydW4gdGVzdGVtXCIsXG4gICAgXCJzcGVjXCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ1Z2xpZnlcIjogXCIjaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay91Z2xpZnlpZnlcIixcbiAgICBcInN0dWZmXCI6IFwiI2VjaG8gdiQoY2F0IHBhY2thZ2UuanNvbiB8IGdyZXAgdmVyc2lvbiB8IGdyZXAgLVBvICcoPzw9dmVyc2lvblxcXCI6IFxcXCIpLiooPz1cXFwiKScpLCBucG0gcnVuIHNlcnZlLCBucG0gcnVuIHNwZWNcIixcbiAgICBcInN0eWx1c1wiOiBcIm5vZGVfbW9kdWxlcy9zdHlsdXMvYmluL3N0eWx1cyAtLXdhdGNoIFNPVVJDRS9pbmRleC5zdHlsIC0tdXNlIC4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1zdHlsdXMgLS1yZXNvbHZlLXVybCAtLWNvbXByZXNzIC0tb3V0IFNPVVJDRS9cIixcbiAgICBcInN0YXJ0XCI6IFwibnBtIHJ1biBzdHlsdXMgJiBub2RlX21vZHVsZXMvYXRvbWlmeS9iaW4vYXRvbWlmeS5qc1wiXG4gIH0sXG4gIFwiYXRvbWlmeVwiOiB7XG4gICAgXCJzZXJ2ZXJcIjoge1xuICAgICAgXCJwb3J0XCI6IDEzMzcsXG4gICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L1wiLFxuICAgICAgXCJsclwiOiB7XG4gICAgICAgIFwidmVyYm9zZVwiOiB0cnVlLFxuICAgICAgICBcInF1aWV0XCI6IGZhbHNlLFxuICAgICAgICBcInBhdHRlcm5zXCI6IFtcbiAgICAgICAgICBcIlJFTEVBU0UvQVBQLmJ1bmRsZS5jc3NcIlxuICAgICAgICBdLFxuICAgICAgICBcInBvcnRcIjogMzEzMzcsXG4gICAgICAgIFwic3luY1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJzdFwiOiB7XG4gICAgICAgIFwicGF0aFwiOiBcIi4vXCIsXG4gICAgICAgIFwiY2FjaGVcIjogZmFsc2UsXG4gICAgICAgIFwiaW5kZXhcIjogXCJpbmRleC5odG1sXCIsXG4gICAgICAgIFwiZG90XCI6IGZhbHNlLFxuICAgICAgICBcInBhc3N0aHJvdWdoXCI6IGZhbHNlLFxuICAgICAgICBcImd6aXBcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJqc1wiOiB7XG4gICAgICBcImVudHJ5XCI6IFwiU09VUkNFL2luZGV4LmpzXCIsXG4gICAgICBcImFsaWFzXCI6IFwiUkVMRUFTRS9BUFAuYnVuZGxlLmpzXCIsXG4gICAgICBcIm91dHB1dFwiOiBcIlJFTEVBU0UvQVBQLmJ1bmRsZS5qc1wiLFxuICAgICAgXCJkZWJ1Z1wiOiB0cnVlLFxuICAgICAgXCJ0cmFuc2Zvcm1zXCI6IFtdLFxuICAgICAgXCJzdGFuZGFsb25lXCI6IFwiQVBQXCJcbiAgICB9LFxuICAgIFwiY3NzXCI6IHtcbiAgICAgIFwiZW50cnlcIjogXCJTT1VSQ0UvaW5kZXguY3NzXCIsXG4gICAgICBcImFsaWFzXCI6IFwiUkVMRUFTRS9BUFAuYnVuZGxlLmNzc1wiLFxuICAgICAgXCJvdXRwdXRcIjogXCJSRUxFQVNFL0FQUC5idW5kbGUuY3NzXCIsXG4gICAgICBcImRlYnVnXCI6IHRydWUsXG4gICAgICBcIndhdGNoXCI6IHRydWUsXG4gICAgICBcImNvbXByZXNzXCI6IHRydWUsXG4gICAgICBcInBsdWdpbnNcIjogW10sXG4gICAgICBcInZhcmlhYmxlc1wiOiB7fVxuICAgIH0sXG4gICAgXCJhc3NldHNcIjoge1xuICAgICAgXCJkZXN0XCI6IFwiUkVMRUFTRS9hc3NldHMvXCIsXG4gICAgICBcInByZWZpeFwiOiBcImFzc2V0cy9cIixcbiAgICAgIFwicmV0YWluTmFtZVwiOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL0xlYWRTaGFyZUFwcEZyb250ZW5kLmdpdFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwibGVhZFwiLFxuICAgIFwibGVhZHNcIixcbiAgICBcImNhbXBhaWduXCIsXG4gICAgXCJjYW1wYWlnblwiLFxuICAgIFwiZ29vZ2xlXCIsXG4gICAgXCJhZHNcIixcbiAgICBcImFkd29yZHNcIlxuICBdLFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49IDAuMTAuMjVcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIlwiLFxuICBcImNvbnRyaWJ1dG9yc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQWxleGFuZGVyIFByYWV0b3JpdXNcIixcbiAgICAgIFwiZW1haWxcIjogXCJkZXZAc2VyYXBhdGguZGVcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlcmFwYXRoXCJcbiAgICB9XG4gIF0sXG4gIFwibGljZW5zZXNcIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIkNDIEJZLU5DLU5EIDQuMFwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtbmQvNC4wL1wiXG4gICAgfVxuICBdLFxuICBcImxpY2Vuc2VcIjogXCJDQyBCWS1OQy1ORCA0LjBcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL0xlYWRTaGFyZUFwcEZyb250ZW5kL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2NvZGluZ2FtaWdvcy5jb20vTGVhZFNoYXJlQXBwRnJvbnRlbmRcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImF1dG9wcmVmaXhlci1zdHlsdXNcIjogXCJeMC4zLjBcIixcbiAgICBcImF4aXNcIjogXCJeMC4yLjFcIixcbiAgICBcImZvbnQtYXdlc29tZVwiOiBcIl40LjEuMFwiLFxuICAgIFwiaG9sb25cIjogXCJnaXQ6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24jdjAuMC42XCIsXG4gICAgXCJqZWV0XCI6IFwiXjUuMy4wXCIsXG4gICAgXCJuaWJcIjogXCJeMS4wLjNcIixcbiAgICBcInJ1cHR1cmVcIjogXCJeMC4zLjFcIixcbiAgICBcInN0eWx1c1wiOiBcIl4wLjQ4LjFcIixcbiAgICBcInR5cG9ncmFwaGljXCI6IFwiXjAuMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXRvbWlmeVwiOiBcImdpdDovL2dpdGh1Yi5jb20vc2VyYXBhdGgvYXRvbWlmeVwiXG4gIH0sXG4gIFwib3B0aW9uYWxEZXBlbmRlbmNpZXNcIjoge30sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJyZWFkbWVcIjogXCJ0YWJsZSBvZiBjb250ZW50XFxuPT09PT09PVxcbiogW2ludHJvZHVjdGlvbl0oI2xlYWRzaGFyZWFwcGZyb250ZW5kKVxcbiogW2RlbW9dKCNkZW1vKVxcbiogW3VzYWdlXSgjdXNhZ2UpXFxuKiBbYXBpXSgjYXBpKVxcbiogW2F1dGhvcnNdKCNhdXRob3JzKVxcbiogW2pvYnNdKCNqb2JzKVxcbiogW2NvbnRyaWJ1dGVdKCNjb250cmlidXRlKVxcbiogW3JlcG9zaXRvcnkgZGVzY3JpcHRpb25dKCNyZXBvc2l0b3J5KVxcbiogW2xpY2Vuc2VdKCNsaWNlbnNlKVxcblxcblxcblxcblxcbkxlYWRTaGFyZUFwcEZyb250ZW5kXFxuPT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuRnJvbnRlbmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9uaW5hYnJlem5pay9MZWFkU2hhcmVBcHAuZ2l0XFxuXFxuXFxuXFxuXFxuZGVtb1xcbj09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuX1/imKDimKDimKAgc2VjdGlvbiBpcyB1bmRlciBjb25zdHJ1Y3Rpb24g4pig4pig4pigX19cXG5cXG5cXG5cXG5cXG51c2FnZVxcbj09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuX1/imKDimKDimKAgc2VjdGlvbiBpcyB1bmRlciBjb25zdHJ1Y3Rpb24g4pig4pig4pigX19cXG5cXG5cXG5cXG5cXG5hcGlcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbl9f4pig4pig4pigIHNlY3Rpb24gaXMgdW5kZXIgY29uc3RydWN0aW9uIOKYoOKYoOKYoF9fXFxuXFxuXFxuXFxuXFxuYXV0aG9yc1xcbj09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuKiBbc2VyYXBhdGhdKGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJhcGF0aCBcXFwiQWxleGFuZGVyIFByYWV0b3JpdXNcXFwiKVxcblxcblxcblxcblxcbmpvYnNcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcblRoZXJlIGlzIG1vcmUgam9icyBpbiB0aGUgc291cmNlIGNvZGUgbWFya2VkIHdpdGggYC8vIEBUT0RPOiA8am9iIGRlc2NyaXB0aW9uPmAgYW5kIGV2ZW50dWFsbHkgc29tZSBqb2JzIG1pZ2h0IGJlIGxpc3RlZCB1bmRlciB0aGUgW0xlYWRTaGFyZUFwcEZyb250ZW5kIGlzc3Vlc10oaHR0cHM6Ly9naXRodWIuY29tL25pbmFicmV6bmlrL0xlYWRTaGFyZUFwcEZyb250ZW5kL2lzc3VlcyBcXFwiTGVhZFNoYXJlQXBwRnJvbnRlbmQgLSBvcGVuIGlzc3Vlc1xcXCIpIHBhZ2UsIHdoaWNoIGNhbiBhbHNvIGJlIGFjY2Vzc2VkIHRocm91Z2ggW3dhZmZsZS5pb10oaHR0cHM6Ly93YWZmbGUuaW8vbmluYWJyZXpuaWsvTGVhZFNoYXJlQXBwRnJvbnRlbmQgXFxcIkxlYWRTaGFyZUFwcEZyb250ZW5kIC0gb3BlbiBpc3N1ZXNcXFwiKS5cXG4xLiBfX0BUT0RPOl9fIENyZWF0ZSBhIEdpdGh1YiBQYWdlXFxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qZWt5bGwvamVreWxsXFxuICAqIGh0dHBzOi8vaGVscC5naXRodWIuY29tL2NhdGVnb3JpZXMvMjAvYXJ0aWNsZXNcXG4xLiBfX0BUT0RPOl9fIEluY2x1ZGUgVGVzdGluZyB2aWEgXFxcIlNwZWNpZmljYXRpb24gRHJpdmVuIERldmVsb3BtZW50XFxcIiB1c2luZyBnaGVya2luIGRzbCAmIFRFU1RFTVxcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vY3VjdW1iZXIvY3VjdW1iZXIvd2lraS9HaGVya2luXFxuICAqIG5wbSBpbnN0YWxsIG1vY2hhIC0tc2F2ZS1kZXZcXG4gICogbnBtIGluc3RhbGwgY2hhaSAtLXNhdmUtZGV2XFxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJwb3J0eWgvdGVzdGVtXFxuKiBfX0BUT0RPOl9fIEFkZCBDSEFOR0VMT0cgRmlsZVxcbiogX19AVE9ETzpfXyBUaGlzIHNlY3Rpb24gc2hvdWxkIGluc3RlYWQgbGlzdCBhbGwgdGhlIFRPRE8tQnJhbmNoZXMgY3VycmVudGx5IGF2YWlsYWJsZSArIGEgbGluayB0byB0aGUgXFxcIlRPRE8gRGVzY3JpcHRpb24gZmlsZSBpbiB0aGF0IGJyYW5jaFxcXCJcXG4gICogVGhlIFJFQURNRS5tYXJrZG93biBpbiB0aGF0IGJyYW5jaCBjb3VsZCBsaXN0IHRoZSBkZXNjcmlwdGlvbiB1bmRlciB0aGUgXFxcImpvYnMgc2VjdGlvblxcXCJcXG4qIF9fQFRPRE86X18gY3JlYXRlIE5HRU4gdG8gY29kaWZ5IHNhZmZvbGRpbmcgYW5kIGRldm9wcyBjb250aW51b3VzIGRlbGl2ZXJ5IHdvcmtmbG93XFxuICAqIGh0dHA6Ly93d3cud29sZmUuaWQuYXUvMjAxNC8wMi8wMS9nZXR0aW5nLWEtbmV3LW5vZGUtcHJvamVjdC1zdGFydGVkLXdpdGgtbnBtLyBcXG4gICogaHR0cDovL3F1aWNrbGVmdC5jb20vYmxvZy9jcmVhdGluZy1hbmQtcHVibGlzaGluZy1hLW5vZGUtanMtbW9kdWxlXFxuICAqIGh0dHA6Ly93d3cuZGV2dGhvdWdodC5jb20vMjAxMi8wMi8xNy9ucG0tdHJpY2tzL1xcbiogX19AVE9ETzpfXyBhZnRlciBgbnBtIGluc3RhbGwgYXNzZXRncmFwaGBcXG4gIDEuIFJlYWQgYWJvdXQgQVNTRVQgR1JBUEhcXG4gIDIuIFVzZSBBc3NldCBHcmFwaCBDb21tYW5kbGluZVxcbiAgICAqIChpZiBmYWlsKVxcbiAgICAqID0+IHJlYWQgQVNTRVQgR1JBUEggYWdhaW4gYW5kIHVzZSB3aXRoIGEgc2NyaXB0ICsgbm9kZSBkZWJ1ZyBpbnNwZWN0b3JcXG4gIDMuIGxvYWQgZm9udHMgYW5kIG90aGVyIGFzc2V0cyBpbiBsb2NhbCBwcm9qZWN0XFxuICA0LiBsb2FkIGZvbnRzIGFuZCBvdGhlciBhc3NldHMgaW4gZGVwZW5kZW50IHByb2plY3RzXFxuKiBfX0BUT0RPOl9fIGFkZCB0byAnaG9sb24nIGFuZCBhbGwgJ2hvbG9uJyBiYXNlZCBtb2R1bGVzIGEgZmlsZSwgd2hpY2ggY29udGFpbnMgdGhlIHJlcG8gb2YgYWxsIGRlcGVuZGVuY2llcyBhbmQgbWF5YmUgbW9yZSBub2Rlc1xcbiAgKiArIGl0IGNvbnRhaW5zIGEgY29tbWFuZCBsaW5lIHNlYXJjaCBwcm9ncmFtbSB0byBkaXNjb3ZlciBhbmQgaW5zdGFsbCB0aG9zZSBtb2R1bGVzIGFuZCB0aG9zZSBtb2R1bGVzIGNvbnRhaW4gYWxzbyBvdGhlciByZXBvc1xcbiAgKiA9PiB0aHVzOiBiYXNpY2FsbHkgYWxsaG9sb29uIHJlcG9zIG9mIGFsbCBkZXBlbmRlbmNpZXMgYXJlIHdhdGNoZWQgZm9yIFxcXCJmYXZvdXJpdGUgaG9sb24gbW9kdWxlc1xcXCIgb2YgdGhlaXIgYXV0aG9ycywgc28gdGhleSBoZWxwXFxuICAqIHRvIG1ha2UgJ2hvbG9ucycgZGlzY292ZXJhYmxlXFxuKiBfX0BUT0RPOl9fIGEgY29uc29sZS5sb2cgc3RhdGVtZW50IHRoYXQgZGVzY3JpYmUgaG93IHRvIG1ha2UgJ3JlcXVlc3RzJyBmb3IgSU5URVJGQUNFIChFdmVudHMvQXBpKSBjaGFuZ2VzXFxuKiBfX0BUT0RPOl9fIHB1dCB0b2RvcyBpbiBSRUFETUUubWQgdW5kZXIgL2pvYnMgYW5kIGxpbmsgaXQgZnJvbSB0aGUgbWFpbiBSRUFETUUubWRcXG4qIF9fQFRPRE86X18gVE9ET3Mgc2hvdWxkIHJlZmVyZW5jZSB0aGVpciBJU1NVRVMgYW5kIGEgXFxcImRlYW1vblxcXCIgc2hvdWxkIHNjYW4gYW5kIHN5bmMgUkVBRE1FLm1kIEBUT0RPJ3Mgd2l0aCBDT0RFIENPTU1FTlRTIGFuZCBHSVRIVUIgSVNTVUVTXFxuKiBfX0BUT0RPOl9fIC4uLlxcbiAgKiBGSVggQVRPTUlGWTogdXNlIGF0b21pZnkgaW4gTGVhZFNoYXJlQXBwIHRvIGNvbXBpbGUgaXQgdGhlcmVcXG4gICogRklYIExlYWRTaGFyZUFwcEZyb250ZW5kIC9ERU1PL3N0eWxlZ3VpZGUuaHRtbFxcblxcbiAgKiBGSVggZ2gtcGFnZXMgaW4gc3luYyB3aXRoIGF0b21pZmllcyBkZXYtc2VydmVyIGluIHN5bmMgd2l0aCAvREVNTy9zdHlsZWd1aWRlLmh0bWwgaW4gc3luYyB3aXRoIExlYWRTaGFyZUFwcCBVc2FnZVxcbiAgKiBHb29nbGUgZm9yIFxcXCJVSSBTVEFURVxcXCIgZW5jb2RpbmcgaW4gVVJMIChtYXliZSB3aXRoIFxcXCJ6aXBwaW5nL3VuemlwcGluZ1xcXCIpXFxuICAqIEZJWCBkZXZlbG9wbWVudCBkZXNjcmlwdGlvblxcbiAgKiBVc2UgTkdFTiB0byBjcmVhdGUgbmV3IHByb2plY3RzIGFuZCB1c2UgdGhpcyBhcyBcXFwiZXhhbXBsZVxcXCJcXG4qIF9fQFRPRE86X18gVUJFUi1OR0VOIEdFTkVSQVRPUiBmb3IgSE9MT05zIHNjaHJlaWJlblxcblxcblxcblxcblxcblxcbmNvbnRyaWJ1dGVcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbiMjIyBQUkVQQVJFIFNZU1RFTVxcbiAgKiBpbnN0YWxsIFtnaXRdKGh0dHA6Ly9naXQtc2NtLmNvbSBcXFwiZ2l0XFxcIikgaWYgaXQgaXMgbm90IHlldCBpbnN0YWxsZWQgb24geW91ciBzeXN0ZW1cXG4gICogaW5zdGFsbCBbbm9kZV0oaHR0cDovL25vZGVqcy5vcmcgXFxcIm5vZGVqc1xcXCIpIGlmIGl0IGlzIG5vdCB5ZXQgaW5zdGFsbGVkIG9uIHlvdXIgc3lzdGVtXFxuICAqIG9wZW4gYSB0ZXJtaW5hbCBvbiB5b3VyIHN5c3RlbSBhbmQgbmF2aWdhdGUgdG8geW91ciBmYXZvdXJpdGUgd29ya3NwYWNlIGZvbGRlclxcbiAgICAqIF8oeW91IG1pZ2h0IG5lZWQgdG8gcHJlZml4IHNvbWUgb2YgdGhlIGZvbGxvd2luZyBjb21tYW5kcyB3aXRoIGBzdWRvYCB0byBtYWtlIHRoZW0gd29yaylfXFxuXFxuIyMjIFNUQVJUIFBSRVBBUklORyBMRUFEU0hBUkVBUFBGUk9OVEVORCBQUk9KRUNUXFxuT3BlbiBhIHRlcm1pbmFsIGFuZCBnbyB0byBhIGZvbGRlciB3aGljaCB5b3UgY2hvb3NlIGFzIHlvdXIgZGV2ZWxvcG1lbnQgZm9sZGVyLCBlLmcuIGBjZCB+ICYmIG1rZGlyIHdvcmtzcGFjZSAmJiBjZCB3b3Jrc3BhY2VgLlxcbiogYGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vbmluYWJyZXpuaWsvTGVhZFNoYXJlQXBwRnJvbnRlbmQuZ2l0YFxcbiogYG5wbSBpbnN0YWxsIC1nIHN0eWx1cyBuaWIgamVldCBydXB0dXJlYFxcbiogYG5wbSBpbnN0YWxsYFxcbiogYG5wbSB1cGRhdGVgXFxuKiBjaGFuZ2UgYG5vZGVfbW9kdWxlcy9hdG9taWZ5L25vZGVfbW9kdWxlcy9hdG9taWZ5LWNzcy9jc3MuanNgIGFuZCBhZnRlciBgbGluZSA0N2AgYWRkIGAsIHJldGFpbk5hbWU6IGZhbHNlYFxcbiogY2hhbmdlIGBub2RlX21vZHVsZXMvYXRvbWlmeS9ub2RlX21vZHVsZXMvYXRvbWlmeS1qcy9pbmRleC5qc2AgYW5kIGFmdGVyIGBsaW5lIDg5YCBhZGQgYCwgcmV0YWluTmFtZTogZmFsc2VgXFxuKiBgbnBtIHN0YXJ0YFxcbiogYHN1YmwgLmBcXG4qIGxvYWQgbWFpbiBIVE1MIHByb2plY3QgZmlsZSBieSBvcGVuaW5nIGFuZCBwb2ludGluZyB5b3VyIGJyb3dzZXIgdG86XFxuICAqIGAuL0RFTU8vZGV2Lmh0bWxgIGZpbGUsIGZvciBleGFtcGxlLCBieSBkb3VibGVjbGlja2luZyBpdFxcbiAgICAqIF9fSElOVDE6X18gdGhpcyBtaWdodCBvbmx5IHdvcmtzIHdpdGggQ09SUyBkaXNhYmxlZC4gSW4gb3JkZXIgdG8gZG8gc286XFxuICAgICAgKiBtYWMgb3N4IGBvcGVuIC1hIEdvb2dsZVxcXFwgQ2hyb21lIC0tYXJncyAtLWRpc2FibGUtd2ViLXNlY3VyaXR5YFxcbiAgICAgICogbGludXggYGdvb2dsZS1jaHJvbWUgLS1kaXNhYmxlLXdlYi1zZWN1cml0eWBcXG4gICAgICAqIHdpbmRvd3MgYGNocm9tZS5leGUgLS1kaXNhYmxlLXdlYi1zZWN1cml0eWBcXG5cXG5fXy4uLiBIQVBQWSBDT0RJTkcgOi0pX19cXG5cXG5cXG4jIyMgSG93IHRvIHNob3J0ZW4gZmVlZGJhY2sgY3ljbGVzIGR1cmluZyBkZXZlbG9wbWVudFxcbihQcm9jZXNzIHRvIHVzZSBmb3IgcHJvamVjdHMsIHdoZXJlIGRlcGVuZGVuY2llcyBwcm9qZWN0cyBoYXZlIHRvIGJlIGRldmVsb3BlZCBpbiBwYXJhbGxlbCB0byB0aGUgbWFpbiBwcm9qZWN0KVxcbkluIG9yZGVyIHRvIHVzZSBjaGFuZ2VzIG1hZGUgaW4gYSBkZXBlbmRlbmN5IHByb2plY3QsIHRoZXkgaGF2ZSB0byBiZSBjb21taXRlZCBhbmQgcHVzaGVkIGFuZCB0aGUgdmVyc2lvbiBoYXMgdG8gYmUgaW5jcmVhc2VkIGFuZCBwdWJsaXNoZWQuXFxuQWZ0ZXJ3YXJkcywgaW4gdGhlIG1haW4gcHJvamVjdCwgdGhlIHZlcnNpb24gZm9yIHRoZSB1cGRhdGVkIGRlcGVuZGVuY3kgaGFzIHRvIGJlIGFkYXB0ZWQgaW4gYHBhY2thZ2UuanNvbmAgYW5kIGBucG0gaW5zdGFsbGAgaGFzIHRvIGJlIHJ1bi5cXG5UaGF0IGlzIGEgbG90IG9mIGhhc3NsZSB0byBiZSBkb25lIGZvciBlYWNoIGNoYW5nZS5cXG5cXG5cXG4jIyMgU29sdXRpb25cXG5fX0dpdmVuOl9fIFxcXCJNYWluIFByb2plY3RcXFwiIGFuZCBcXFwiRGVwZW5kZW5jeSBQcm9qZWN0XFxcIiBhcmUgYm90aCBgZ2l0IGNsb25lYCdlZCB0byB0aGUgbG9jYWwgZGV2ZWxvcGVyIG1hY2hpbmUuXFxuX19Qcm9jZXNzOl9fXFxuMC4gT3BlbiBhbGwgdGhvc2UgUHJvamVjdCBGb2xkZXJzIGluIHN1YmxpbWUgZWRpdG9yIGFuZCB0aGVuIHVzZSB0aGUgdGVybWluYWwgdG8uLi5cXG4xLiBHbyB0byB0aGUgXFxcIkRlcGVuZGVuY3kgUHJvamVjdFxcXCIgcmVwb3NpdG9yeSBhbmQgaW5jcmVhc2UgdGhlIFxcXCJWZXJzaW9uIE51bWJlclxcXCIgaW4gdGhlIGBwYWNrYWdlLmpzb25gIGZpbGUsIGJ1dCBkb24ndCBgZ2l0IHB1c2hgLlxcbjIuIFJ1biBgbnBtIGxpbmtgIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgXFxcIkRlcGVuZGVuY3kgUHJvamVjdFxcXCIgcmVwb3NpdG9yeS5cXG4zLiBHbyB0byB0aGUgXFxcIk1haW4gUHJvamVjdFxcXCIgcmVwb3NpdG9yeSBhbmQgaW5jcmVhc2UgdGhlIFxcXCJWZXJzaW9uIE51bWJlclxcXCIgb2YgdGhlIFxcXCJEZXBlbmRlbmN5IFByb2plY3RcXFwiIGluIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlLlxcbjQuIFJ1biBgbnBtIGxpbmsgJ2RlcGVuZGVuY3kgbmFtZSdgIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgXFxcIk1haW4gUHJvamVjdFxcXCIgcmVwb3NpdG9yeS5cXG5UaGF0J3MgaXQsIGV4ZWN1dGUgYG5wbSBzdGFydGAgaW4gdGhlIFxcXCJNYWluIFByb2plY3RcXFwiIHJlcG9zaXRvcnkgYW5kIHN0YXJ0IGhhY2tpbmcuLi5cXG5cXG5fX0ZpbmlzaGluZzpfXyBBZnRlciBhbGwgY2hhbmdlcyBhcmUgZG9uZSB0byBib3RoIHByb2plY3RzIGFuZCB5b3UgYXJlIHNhdGlzZmllZCB3aXRoIHRoZSByZXN1bHQuLi5cXG4xLiBHbyB0byB0aGUgXFxcIk1haW4gUHJvamVjdFxcXCIgcmVwb3NpdG9yeSBhbmQgcnVuIGBucG0gbGluayAnZGVwZW5kZW5jeSBuYW1lJ2AgaW4gdGhlIHJvb3QgZGlyZWN0b3J5LlxcbjIuIEdvIHRvIHRoZSBcXFwiRGVwZW5kZW5jeSBQcm9qZWN0XFxcIiByZXBvc2l0b3J5IGFuZCBydW4gYG5wbSB1bmxpbmtgIGluIHRoZSByb290IGRpcmVjdG9yeS5cXG4zLiBUaGVuIGBnaXQgY29tbWl0YCBhbmQgYGdpdCBwdXNoYCBhbGwgdGhlIGNoYW5nZXMgdG8gcHVibGlzaCB0aGUgbmV3IHZlcnNpb24uXFxuNC4gR28gdG8gdGhlIFxcXCJNYWluIFByb2plY3RcXFwiIHJlcG9zaXRvcnkgYW5kIHJ1biBgbnBtIGluc3RhbGxgIHRvIGdldCB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIGRlcGVuZGVuY3kgeW91IGp1c3QgdXBkYXRlZC5cXG5cXG5UaGF0J3MgaXQuXFxuXFxuXFxuXFxuXFxucmVwb3NpdG9yeVxcbj09PT09PT1cXG5bW2JhY2sgdG8gdG9wXSgjdGFibGUtb2YtY29udGVudCldXFxuXFxuKiBAVE9ETzogcHV0IHJlZmVyZW5jZSB0byBSRUFETUUubWFya2Rvd24gb2Ygc3ViIGRpcmVjdG9yaWVzIGluIGhlcmVcXG5cXG5fX+KYoOKYoOKYoCBzZWN0aW9uIGlzIHVuZGVyIGNvbnN0cnVjdGlvbiDimKDimKDimKBfX1xcblxcblxcblxcblxcblxcbmxpY2Vuc2VcXG49PT09PT09XFxuW1tiYWNrIHRvIHRvcF0oI3RhYmxlLW9mLWNvbnRlbnQpXVxcblxcbiFbQ0MgQlktTkMtTkQgNC4wXShodHRwczovL2kuY3JlYXRpdmVjb21tb25zLm9yZy9sL2J5LW5jLW5kLzQuMC84OHgzMS5wbmcgXFxcIkNyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1Ob0Rlcml2YXRpdmVzIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2VcXFwiKVxcblxcblRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciA8YSByZWw9XFxcImxpY2Vuc2VcXFwiIGhyZWY9XFxcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy1uZC80LjAvbGVnYWxjb2RlXFxcIiBhbHQ9XFxcIkNyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1Ob0Rlcml2YXRpdmVzIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2VcXFwiPmBDQyBCWS1OQy1ORCA0LjBgPC9hPi5cXG5cXG5fX0luIHNob3J0IC0geW91IGFyZSBmcmVlIHRvOl9fXFxuXFxuKiBfX1NoYXJlX18g4oCUIGNvcHkgYW5kIHJlZGlzdHJpYnV0ZSB0aGUgbWF0ZXJpYWwgaW4gYW55IG1lZGl1bSBvciBmb3JtYXRcXG5UaGUgbGljZW5zb3IgY2Fubm90IHJldm9rZSB0aGVzZSBmcmVlZG9tcyBhcyBsb25nIGFzIHlvdSBmb2xsb3cgdGhlIGxpY2Vuc2UgdGVybXMuXFxuVW5kZXIgdGhlIGZvbGxvd2luZyB0ZXJtczpcXG5cXG4qIF9fQXR0cmlidXRpb25fXyDigJQgWW91IG11c3QgZ2l2ZSBhcHByb3ByaWF0ZSBjcmVkaXQsIHByb3ZpZGUgYSBsaW5rIHRvIHRoZSBsaWNlbnNlLCBhbmQgaW5kaWNhdGUgaWYgY2hhbmdlcyB3ZXJlIG1hZGUuIFlvdSBtYXkgZG8gc28gaW4gYW55IHJlYXNvbmFibGUgbWFubmVyLCBidXQgbm90IGluIGFueSB3YXkgdGhhdCBzdWdnZXN0cyB0aGUgbGljZW5zb3IgZW5kb3JzZXMgeW91IG9yIHlvdXIgdXNlLlxcbk5vbkNvbW1lcmNpYWwg4oCUIFlvdSBtYXkgbm90IHVzZSB0aGUgbWF0ZXJpYWwgZm9yIGNvbW1lcmNpYWwgcHVycG9zZXMuXFxuXFxuKiBfX05vRGVyaXZhdGl2ZXNfXyDigJQgSWYgeW91IHJlbWl4LCB0cmFuc2Zvcm0sIG9yIGJ1aWxkIHVwb24gdGhlIG1hdGVyaWFsLCB5b3UgbWF5IG5vdCBkaXN0cmlidXRlIHRoZSBtb2RpZmllZCBtYXRlcmlhbC5cXG5ObyBhZGRpdGlvbmFsIHJlc3RyaWN0aW9ucyDigJQgWW91IG1heSBub3QgYXBwbHkgbGVnYWwgdGVybXMgb3IgdGVjaG5vbG9naWNhbCBtZWFzdXJlcyB0aGF0IGxlZ2FsbHkgcmVzdHJpY3Qgb3RoZXJzIGZyb20gZG9pbmcgYW55dGhpbmcgdGhlIGxpY2Vuc2UgcGVybWl0cy5cXG5Ob3RpY2VzOlxcblxcbllvdSBkbyBub3QgaGF2ZSB0byBjb21wbHkgd2l0aCB0aGUgbGljZW5zZSBmb3IgZWxlbWVudHMgb2YgdGhlIG1hdGVyaWFsIGluIHRoZSBwdWJsaWMgZG9tYWluIG9yIHdoZXJlIHlvdXIgdXNlIGlzIHBlcm1pdHRlZCBieSBhbiBhcHBsaWNhYmxlIGV4Y2VwdGlvbiBvciBsaW1pdGF0aW9uLlxcblxcbk5vIHdhcnJhbnRpZXMgYXJlIGdpdmVuLiBUaGUgbGljZW5zZSBtYXkgbm90IGdpdmUgeW91IGFsbCBvZiB0aGUgcGVybWlzc2lvbnMgbmVjZXNzYXJ5IGZvciB5b3VyIGludGVuZGVkIHVzZS4gRm9yIGV4YW1wbGUsIG90aGVyIHJpZ2h0cyBzdWNoIGFzIHB1YmxpY2l0eSwgcHJpdmFjeSwgb3IgbW9yYWwgcmlnaHRzIG1heSBsaW1pdCBob3cgeW91IHVzZSB0aGUgbWF0ZXJpYWwuXFxuXFxuWy4uLm1vcmUgaW5mb3JtYXRpb25dKGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vbmluYWJyZXpuaWsvTGVhZFNoYXJlQXBwRnJvbnRlbmQvbWFzdGVyL0xJQ0VOU0UgXFxcIkNyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1Ob0Rlcml2YXRpdmVzIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2VcXFwiKVxcblwiLFxuICBcInJlYWRtZUZpbGVuYW1lXCI6IFwiUkVBRE1FLm1hcmtkb3duXCIsXG4gIFwiX2lkXCI6IFwiTGVhZFNoYXJlQXBwRnJvbnRlbmRAMC4wLjhcIixcbiAgXCJfc2hhc3VtXCI6IFwiMGRiZGM4ZjdiNGE4Nzc0MWM5YWZlNDc4M2FhYzkxOGFmN2FkMmY3NlwiLFxuICBcIl9yZXNvbHZlZFwiOiBcImdpdDovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9MZWFkU2hhcmVBcHBGcm9udGVuZCMyZTdmZjc4MmYyMmU1MmQ5ZDljNzE1YzhhYTY1YjMyNGVlNmM0ZTg5XCIsXG4gIFwiX2Zyb21cIjogXCJMZWFkU2hhcmVBcHBGcm9udGVuZEBnaXQ6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvTGVhZFNoYXJlQXBwRnJvbnRlbmQjdjAuMC44XCJcbn1cbiJdfQ==
