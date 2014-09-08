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

},{}],3:[function(require,module,exports){
module.exports = '<div class="Campaign">\n  <article class="article">\n    <figure>\n      <img src="https://www.redbullcontentpool.com/resources/2013/07/09/00001-01000/P-20130709-00550/image_proxy_large.jpg" />\n    </figure>\n    <span class="article-heading">\n      <span data-bind="title"></span> - <span data-bind="location"></span>\n    </span>\n    <span class="article-snippet">\n      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet...\n    </span>\n    <nav role=\'navigation\'>\n      <ul>\n        <li class="one"><a href="#"></a></li>\n        <li class="two"><a href="#"></a></li>\n        <li class="three"><a href="#"></a></li>\n      </ul>\n    </nav>\n    <a class="article-url" href="#" title="Continue Reading">Continue Reading</a>\n    <ul class="article-social">\n      <li>\n        <a href="#"><i class="icon-facebook"></i></a>\n        <a href="#"><i class="icon-twitter"></i></a>\n        <a href="#"><i class="icon-google-plus"></i></a>\n      </li>\n    </ul>\n  </article>\n</div>\n';
},{}],4:[function(require,module,exports){
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMONJS MODULE EXPORT                                        (Version 0.0.0)

    @JOB: UBER_NGEN GENERATOR for Components schreiben
    @JOB: dropin vs configurable
    @JOB: Make "COMMENTS" create a nice visual structure of module in miniview

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function COMMONJS_EXPORTER (FACTORY) {
  'use strict';
  // If MODULE is a "Drop In" which executes once after loading:
  module.exports = FACTORY//(/*with predefined set of PARAMS*/); // CommonJS
  // // ELSE IF MODULE is Otherwise a CONFIGURABLE:
  // module.exports = FACTORY;
})(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULENAME                                                      (this lego)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_MODULENAME (CONTRACT, ENTITIES, DEPs, window, global, undefined)
  { // to shield MODULE from overriden 'undefined' and global object pollution
    'use strict';
    function MODULENAME_API (
      /*-----------------------------------------------------------------------
        MODULE API
      
          @TODO: think about what i need here.
            MODULENAME_API.CONTRACT
            MODULENAME_API (CONTAINER, SETTINGS, SUGGESTIONS)
            ....


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





// ADD CONTENT HERE
  START = function START (data, schema, collection, containerQuery) {

      // function buildSelectComponent (data, collection, variantStructureTheme) { return 'select component api'}
      // function buildRadioComponent (data, collection, variantStructureTheme) { return 'radio component api'}


      // //// CREATE TRANSFORMED DATASET
      // function transform(data) {
      //   for(item in data) {
      //     data[item].gender                     = buildDataSelect(collection.gender, data[item].gender, false);
      //     data[item].user_id                    = buildDataSelect(collection.user_id, data[item].user_id, false);
      //     data[item].internal_contact_person_ids = buildDataSelect(collection.internal_contact_person_ids, data[item].internal_contact_person_ids, true);
      //     data[item].businessrelation_ids       = buildDataSelect(collection.businessrelation_ids, data[item].businessrelation_ids, true);
      //     data[item].topic_ids                  = buildDataSelect(collection.topic_ids, data[item].topic_ids, true);
      //     data[item].event_invitation_receiver  = buildDataRadio(data[item].event_invitation_receiver, "settings_event");
      //     data[item].phone_receiver             = buildDataRadio(data[item].phone_receiver, "settings_phone");
      //     data[item].email_receiver             = buildDataRadio(data[item].email_receiver, "settings_email");
      //     data[item].fax_receiver               = buildDataRadio(data[item].fax_receiver, "settings_fax");
      //     data[item].mass_email_receiver        = buildDataRadio(data[item].mass_email_receiver, "settings_mass_email");
      //     data[item].letter_receiver            = buildDataRadio(data[item].letter_receiver, "settings_letter");
      //     data[item].attaining_public_office    = buildDataRadio(data[item].attaining_public_office, "settings_office");
      //   }
      //   return data;
      // }

      // data = transform(data);


    //         // BUILD APP
    //   window.IKUSEI = (function buildApp (APP) {
    //     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     // CONFIGURE COMPONENTS - DYNAWRAPPER
    //     APP.DYNAWRAPPER = (function init_dynatable (CONTAINER) {
    //       var name = 'v0.0.1/api/components/DynaWrapper.html';
    //       // INSTANTIATE TEMPLATE
    //       var dynatable = DEPs.holon.getTemplate(name);
    //       // SET DUMMY DATA (instead of backend rendered version)
    //       // dynatable.ajax                = true;
    //       // dynatable.ajaxUrl             = "/admin/customers/search.json";
    //       // dynatable.ajaxOnLoad          = true;
    //       dynatable.dataset.json        = JSON.stringify(data);
    //       dynatable.dataset.collection  = JSON.stringify(collection);
    //       dynatable.dataset.schema      = JSON.stringify((function filter() {
    //         var schema = schema;
    //         // return ['', 'fullname', 'company_name', 'email', 'phone', 'action']; // @TODO: with selectbox
    //         return ['fullname', 'company_name', 'email', 'phone', 'action'];
    //       })());
    //       // PREPROCESS - CONFIGURE SCHEMA
    //       DEPs.DynaWrapper.setSchema(dynatable);
    //       // INSERT TEMPLATE
    //       // @TODO: Realize the API below, thus: reduce COMPONENT API
    //       // DEPs.holon.insertTemplate(CONTAINER, TEMPLATE, DATA, SCHEMA);
    //       DEPs.holon.insertTemplate(CONTAINER, dynatable);
    //       // CONFIGURE DYNATABLE
    //       DEPs.DynaWrapper.initTable(dynatable);
    //       // PUBLISH ENTITY INTERFACE
    //       return dynatable;
    //     })(containerQuery);


    //     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     // CONFIGURE COMPONENTS - COMPLEXFORM
    //     APP.COMPLEXFORM = (function init_complexform (CONTAINER) {
    //       var name = 'v0.0.1/api/components/Complexform.html';
    //       // INSTANTIATE TEMPLATE
    //       var complexform = DEPs.holon.getTemplate(name);
    //       // SET DUMMY DATA (instead of backend rendered version)
    //       complexform.dataset.json    = JSON.stringify(data[0]);
    //       complexform.dataset.schema  = JSON.stringify((function filter() {
    //         var schema = schema;
    //         return schema;
    //         // return ['', 'fullname', 'company_name', 'email', 'phone', 'action'];
    //       })());
    //       // INSERT TEMPLATE
    //       DEPs.holon.insertTemplate(CONTAINER, complexform);
    //       // CONFIGURE COMPLEXFORM
    //       DEPs.Complexform.init(complexform);
    //       // PUBLISH ENTITY INTERFACE
    //       return complexform;
    //     })(containerQuery);


    //     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     (function wireUp_COMPLEXFORM() { // (map 'component events' to 'component apis')
    //       APP.DYNAWRAPPER.addEventListener('ADD', function (EVENT) {
    //         APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
    //           'STATE=hidden',
    //           'STATE=create'
    //         );
    //         APP.COMPLEXFORM.style.top = EVENT.detail.position + "px";
    //         APP.COMPLEXFORM.API.INTERFACE['USER_ADD'](EVENT.detail.data);
    //       });

    //       APP.DYNAWRAPPER.addEventListener('SET', function (EVENT) {
    //         APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
    //           'STATE=hidden',
    //           'STATE=update'
    //         );
    //         APP.COMPLEXFORM.style.top = EVENT.detail.position + "px";
    //         APP.COMPLEXFORM.API.INTERFACE['USER_SET'](EVENT.detail.data);
    //       });
    //     })();


    //     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     (function wireUp_DYNAWRAPPER() { // (map 'component events' to 'component apis')
    //       APP.COMPLEXFORM.addEventListener('CANCEL', function () {
    //         // Should maybe happen "complexform internally" - @TODO: HOOK CANDIDATE
    //         APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
    //           'STATE=update',
    //           'STATE=hidden'
    //         );
    //         APP.COMPLEXFORM.className = APP.COMPLEXFORM.className.replace(
    //           'STATE=create',
    //           'STATE=hidden'
    //         );
    //       });

    //       APP.COMPLEXFORM.addEventListener('SAVE', function (EVENT) {
    //         APP.DYNAWRAPPER.API.INTERFACE['set'](EVENT.detail.data.id, EVENT.detail.data);
    //         DEPs.AJAX.update(EVENT.detail.data);
    //       });

    //       APP.COMPLEXFORM.addEventListener('NEXT', function (EVENT) {
    //         if (EVENT.detail.data) {
    //           // var item = APP.DYNAWRAPPER.API.INTERFACE['get'](EVENT.detail.data+1);
    //           DEPs.AJAX.read({id:EVENT.detail.data+1}, function (item) {
    //             if (item) {
    //               APP.COMPLEXFORM.API.INTERFACE['USER_SET'](JSON.parse(item));
    //               // @TODO: activate PREV button IF deactivated - important for FIRST DATA SET
    //             }
    //           });
    //         } else {
    //           // @TODO: deactivate NEXT button - important for LAST DATA SET
    //         }
    //       });

    //       APP.COMPLEXFORM.addEventListener('PREV', function (EVENT) {
    //         if (EVENT.detail.data) {
    //           // var item = APP.DYNAWRAPPER.API.INTERFACE['get'](EVENT.detail.data-1);
    //           DEPs.AJAX.read({id:EVENT.detail.data-1}, function (item) {
    //             if (item) {
    //               APP.COMPLEXFORM.API.INTERFACE['USER_SET'](JSON.parse(item));
    //               // @TODO: activate NEXT button IF deactivated - important for LAST DATA SET
    //             }
    //           });
    //         } else {
    //           // @TODO: deactivate PREV button - important for FIRST DATA SET
    //         }
    //       });
    //     })();

    //     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //     // DEPLOY APP
    //     return APP;
    //   })({});

      
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


    var Plates    = DEPs.holon.plates;
    var holonize  = DEPs.holon.holonize;
    var dummy1    = document.createElement('div');
    dummy1.setAttribute('id', 'LEAD');
    var dummy2    = document.createElement('div');
    dummy2.setAttribute('id', 'RESULT');
    var dummy3    = document.createElement('div');
    dummy3.setAttribute('id', 'content');
    var dummy4    = document.createElement('div');
    dummy4.setAttribute('id', 'DEVELOP_MODE');

    var CONTAINER = document.querySelector('#'+STATE.params.containerID);
    CONTAINER.appendChild(dummy1);
    CONTAINER.appendChild(dummy2);
    CONTAINER.appendChild(dummy3);
    CONTAINER.appendChild(dummy4);

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
      mappingIndex.className('campaigns').partial(templateCampaign, STATE.params.campaigns, mappingCampaigns);

      var MAIN = Plates.bind(templateIndex, {}, mappingIndex);
      document.querySelector('#LEAD').innerHTML = MAIN;
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
        user:       "Charly John Smith",
        imageurl:   "http://shaunynews.files.wordpress.com/2014/04/funny-popular-funny-pictures-with-captions-4-44-popular-funny-pictures-with-captions.jpg",
        newurl:     "http://www.asdf.com",
        newurl2:    "bazz",
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
  },

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
            api =       {
              START     : function start() {
                var
                  DATA          = STATE.params.data,
                  SCHEMA        = STATE.params.schema,
                  COLLECTION    = STATE.params.collection,
                  CONTAINER     = STATE.params.containerID,
                  TRANSLATIONS  = STATE.params.translations
                ;
                return START (DATA, TRANSLATIONS, SCHEMA, COLLECTION, CONTAINER);
              },
              /*---------------------------------------------------------------
                CONFIGURE {{MODULENAME}} COMPONENT                        
              ---------------------------------------------------------------*/
              CONFIGURE : function configure (params) {
                if (!params) {
                  debugger;
                  // @TODO: think about 'singleton' and 'dropin' here
                  // @TODO: The component is already initialized on the server
                  //        CONFIGURE should do nothing and START() should be executed
                } else {
                  delete api.CONFIGURE;
                  STATE.params = params;
                  /*-------------------------------------------------------------
                    CUSTOMIZE - module interface, internals & CONFIGURATION
                  -------------------------------------------------------------*/
                  // just CONFIGURE something
                  // or set other api.attributes
                  // or return something
                  // or set some global stuff
                  return api;
                }
              }
            }
          ;
          api.id = ENTITIES.push(api);
          /*-------------------------------------------------------------------
            PUBLIC API EXPORT

              @JOB: make INIT/CONFIGURE and START one method with many params
              @JOB: make module CONFIGURE a constructor option
              
          -------------------------------------------------------------------*/
          // [Optional] CONFIGURE this module immediately
          // api.CONFIGURE({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.CONTRACT = CONTRACT;
      return MODULE;
    }
    MODULENAME_API.CONTRACT = CONTRACT;
    return MODULENAME_API;
  })(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULE CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*-------------------------------------------------------------------------
      CONTRACT

      @JOB - http://www.2ality.com/2012/10/javascript-properties.html
        (use to create the stuff below)

    -------------------------------------------------------------------------*/
    {
      NAME      : require('../package.json').name,
      VERSION   : 'v' + require('../package.json').version,
      VALIDATE  : function VALIDATE (params) {
        require('./CONTRACT.js')(params);
        return true;
      }
      // generateData  : generateData,
      // SCHEMA        : SCHEMA,
      // getTypes      : getTypes,
      // getValidators : getValidators,
      // getSamples    : getSamples
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
        holon : require('holon'),
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

},{"../package.json":16,"./CONTRACT.js":2,"./campaign.template.html":3,"./index.template.html":5,"./templates/MAIN.template.html":6,"./templates/SUB1.template.html":7,"./templates/SUB2.template.html":8,"./templates/SUB3.template.html":9,"./templates/SUB4.template.html":10,"./templates/SUB5.template.html":11,"holon":12}],5:[function(require,module,exports){
module.exports = '<div style="background-color: #000;">\n<!--   <span><img src="../assets/ab3a66df45428752.png"></span>\n  <span><img src="../assets/cda9406bc755d775.png"></span> -->\n  <h2>Campaigns</h2><br><br>\n  <div class="campaigns">\n    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n  </div>\n  <hr>\n  <div class=\'Lead Lead--VARIANT=slovenia\'> Example\n    <div class="Lead__locationmap">\n    </div>\n  </div>\n\n  <!-- <div>\n    <section class="bussinesscard">\n    <div class="flip">\n      <div class="front">       \n        <div class="top">       \n          <div class="logo"><span class="fat">E</span><span class="skinny">K</span></div>       \n        </div>\n        <div class="nametroduction">\n          <div class="name">Eduard Kosicky</div>\n          <div class="introduction">A Front End Developer</div>\n        </div>  \n        <div class="contact">           \n          <div class="website">\n            <span class="ion-earth"></span>\n            <a href="#">www.eduardkosicky.me</a>\n          </div>\n          <div class="twitter">\n            <span class="ion-social-twitter"></span>\n            <a href="#">@eduardkosicky</a> \n          </div>                        \n          <div class="phone ">\n            <span class="ion-ios7-telephone"></span> \n            <a href="#">0118 999 7253</a> \n          </div>\n          <div class="email ">\n            <span class="ion-paper-airplane"></span>\n            <a href="#">eduard@kosicky.me</a>\n          </div>\n        </div>            \n      </div>\n      <div class="back"></div>\n    </div>\n    </section>\n    <section class="tooltip">\n    <p>\n      Hover over the card to see the back.\n    </p>\n    </section>\n  </div> -->\n</div>\n';
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
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMONJS MODULE EXPORT                                        (Version 0.0.0)

    @JOB: UBER_NGEN GENERATOR for Components schreiben
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
  (function MODULE_MODULENAME (CONTRACT, ENTITIES, DEPs, window, global, undefined)
  { // to shield MODULE from overriden 'undefined' and global object pollution
    'use strict';
    function MODULENAME_API (
      /*-----------------------------------------------------------------------
        MODULE API
      
          @TODO: think about what i need here.
            MODULENAME_API.CONTRACT
            MODULENAME_API (CONTAINER, SETTINGS, SUGGESTIONS)
            ....


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
            // START = function START (data, schema, collection, containerQuery) {
            //   return api; 
            // }
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
            api =       {
              plates    : DEPs.plates,
              holonize  : {},
              // START     : function start() {
              //   var
              //     DATA          = STATE.params.data,
              //     SCHEMA        = STATE.params.schema,
              //     COLLECTION    = STATE.params.collection,
              //     CONTAINER     = STATE.params.containerID,
              //     TRANSLATIONS  = STATE.params.translations
              //   ;
              //   return START (DATA, TRANSLATIONS, SCHEMA, COLLECTION, CONTAINER);
              // },
              /*---------------------------------------------------------------
                CONFIGURE {{MODULENAME}} COMPONENT                        
              ---------------------------------------------------------------*/
              CONFIGURE : function configure (params) {
                if (!params) {
                  debugger;
                  // @TODO: think about 'singleton' and 'dropin' here
                  // @TODO: The component is already initialized on the server
                  //        CONFIGURE should do nothing and START() should be executed
                } else {
                  delete api.CONFIGURE;
                  STATE.params = params;
                  /*-------------------------------------------------------------
                    CUSTOMIZE - module interface, internals & CONFIGURATION
                  -------------------------------------------------------------*/
                  // just CONFIGURE something
                  // or set other api.attributes
                  // or return something
                  // or set some global stuff
                  return api;
                }
              }
            }
          ;
          api.id = ENTITIES.push(api);
          /*-------------------------------------------------------------------
            PUBLIC API EXPORT

              @JOB: make INIT/CONFIGURE and START one method with many params
              @JOB: make module CONFIGURE a constructor option
              
          -------------------------------------------------------------------*/
          // [Optional] CONFIGURE this module immediately
          api.CONFIGURE({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.CONTRACT = CONTRACT;
      return MODULE;
    }
    MODULENAME_API.CONTRACT = CONTRACT;
    return MODULENAME_API;
  })(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULE CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*-------------------------------------------------------------------------
      CONTRACT

      @JOB - http://www.2ality.com/2012/10/javascript-properties.html
        (use to create the stuff below)

    -------------------------------------------------------------------------*/
    {
      NAME      : require('../package.json').name,
      VERSION   : 'v' + require('../package.json').version,
      VALIDATE  : function VALIDATE (params) {
        // require('./CONTRACT.js')(params);
        return true;
      }
      // generateData  : generateData,
      // SCHEMA        : SCHEMA,
      // getTypes      : getTypes,
      // getValidators : getValidators,
      // getSamples    : getSamples
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
        plates : require('plates'),
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

},{"../package.json":15,"plates":13}],13:[function(require,module,exports){
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMONJS MODULE EXPORT                                        (Version 0.0.0)

    @JOB: UBER_NGEN GENERATOR for Components schreiben
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
    PLATES                                                      (this lego)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_PLATES (META, ENTITIES, DEPs, window, global, undefined)
  { // to shield MODULE from overriden 'undefined' and global object pollution
    'use strict';
    function PLATES_API (
      /*-----------------------------------------------------------------------
        MODULE API
      
          USAGE:
            ...
      \*---------------------------------------------------------------------*/
      //INJECTED DEPENDENCIES:
      CONTAINER,  // DOM Form Element to apply PLATES to
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
        (function PLATES (STATE) {
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
    PLATES_API.META = META;
    return PLATES_API;
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
  "author": "Nodejitsu Inc. <info@nodejitsu.com>",
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
  "main": "./lib/plates.js"
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
  "author": [
    "serapath <dev@serapath.de> (http://www.github.com/serapath)"
  ],
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
  "licenses": [{
    "type": "CC0",
    "url": "http://creativecommons.org/publicdomain/zero/1.0/"
  }],
  "license": "CC0",
  "dependencies": {
    "plates": "git://github.com/coding-amigos/plates#v0.4.12"
  },
  "devDependencies": {
    "atomify": "^3.2.0"
  },
  "optionalDependencies": {},
  "peerDependencies": {}
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
        "patterns": ["RELEASE/APP.bundle.css"],
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
  "author": [
    "serapath <dev@serapath.de> (http://www.github.com/serapath)"
  ],
  "contributors": [
    {
      "generatedWith": "https://www.npmjs.org/package/contributor",
      "name": "Alexander Praetorius",
      "email": "dev@serapath.de",
      "url": "https://github.com/serapath",
      "contributions": 20,
      "hireable": true
    }
  ],
  "licenses": [{
    "type": "CC BY-NC-ND 4.0",
    "url": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
  }],
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
  "peerDependencies": {}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9hdG9taWZ5L25vZGVfbW9kdWxlcy9hdG9taWZ5LWpzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2luZGV4LmpzIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL1NPVVJDRS9DT05UUkFDVC5qcyIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9TT1VSQ0UvY2FtcGFpZ24udGVtcGxhdGUuaHRtbCIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9TT1VSQ0UvaW5kZXguanMiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL2luZGV4LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9NQUlOLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIxLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIyLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUIzLnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUI0LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvU09VUkNFL3RlbXBsYXRlcy9TVUI1LnRlbXBsYXRlLmh0bWwiLCIvaG9tZS9zZXJhcGF0aC93b3Jrc3BhY2UvY29kaW5nYW1pZ29zL0xlYWRTaGFyZUFwcC9ub2RlX21vZHVsZXMvTGVhZFNoYXJlQXBwRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2hvbG9uL1NPVVJDRS9pbmRleC5qcyIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9ub2RlX21vZHVsZXMvaG9sb24vbm9kZV9tb2R1bGVzL3BsYXRlcy9saWIvcGxhdGVzLmpzIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL25vZGVfbW9kdWxlcy9ob2xvbi9ub2RlX21vZHVsZXMvcGxhdGVzL3BhY2thZ2UuanNvbiIsIi9ob21lL3NlcmFwYXRoL3dvcmtzcGFjZS9jb2RpbmdhbWlnb3MvTGVhZFNoYXJlQXBwL25vZGVfbW9kdWxlcy9MZWFkU2hhcmVBcHBGcm9udGVuZC9ub2RlX21vZHVsZXMvaG9sb24vcGFja2FnZS5qc29uIiwiL2hvbWUvc2VyYXBhdGgvd29ya3NwYWNlL2NvZGluZ2FtaWdvcy9MZWFkU2hhcmVBcHAvbm9kZV9tb2R1bGVzL0xlYWRTaGFyZUFwcEZyb250ZW5kL3BhY2thZ2UuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6bEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdm5CQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNweUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIkFQUCA9IHJlcXVpcmUoJ0xlYWRTaGFyZUFwcEZyb250ZW5kJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENPTlRSQUNUX1ZBTElEQVRFIChwYXJhbXMpIHtcbi8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgQ09OVFJBQ1RcbiAgICAtIEVWRU5UUyAgICAgID0+IC4uLi4gREFUQSBTRU5EL0VNSVQgKEFqYXgvV2Vic29ja2V0cylcbiAgICAtIEFQSSBNRVRIT0RTID0+IC4uLi4gREFUQSBSRUNFSVZFIChXZWJzb2NrZXRzKVxuICAgIC0gSU5JVCAgICAgICAgPT4gLi4uLiBEQVRBIFJFQ0VJVkUgKHBhZ2UgbG9hZClcbjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbnZhciBDT05UUkFDVCA9IHtcbiAgY2FtcGFpZ24gICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgbGVhZCAgICAgICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgdXNlciAgICAgICAgICAgICAgOiB7XG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgZW1haWwgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgcmVsYXRpb25zaGlwICAgICAgOiB7XG4gICAgY29vd25lZF9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY29vd25lcl9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfVxufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgRVhBTVBMRSA9IHtcbiAgaWQgICAgICAgICAgOiAxLFxuICB2b3JuYW1lICAgICA6ICdOaW5hJyxcbiAgbmFjaG5hbWUgICAgOiAnQnJlem5paycsXG4gIG5hbWUgICAgICAgIDogJ05pbmEgQnJlem5paycsXG4gIGdlYnVydHN0YWcgIDogJzAyLjA1LjE5ODEnLFxuICBhbHRlciAgICAgICA6IDMzLFxuICBnZXNjaGxlY2h0ICA6ICd3ZWlibGljaCcsXG4gIGZvdG8gICAgICAgIDogJ2h0dHA6Ly9iZXRhMi5maW5hbmNlLnNpL3BpY3MvY2FjaGVfRjUvRjU4RVVfYnJlem5pa19uaW5hX2loLjEyMTkwNzU3MjQuanBnJyxcbiAgc3RhdHVzICAgICAgOiAnYmV6aWVodW5nJyxcbiAgZW1haWwgICAgICAgOiAnbmluYWJyZXpuaWtAZ21haWwuY29tJyxcbiAgdGVsZWZvbiAgICAgOiAnMDE3MSAyODgzNzMyJyxcbiAgd29obm9ydCAgICAgOiAnQmVybGluJyxcbiAgc3RyYXNzZSAgICAgOiAnSmFibG9uc2tpc3RyYXNzZSAyNCcsXG4gIGhlcmt1bmZ0ICAgIDogJ1Nsb3ZlbmllbicsXG4gIGhvYmJpZXMgICAgIDogWyAndGFuemVuJywgJ2tsZXR0ZXJuJywgJ2dpdGFycmUnLCAna29jaGVuJywgJ2pvZ2dlbicsICd5b2dhJyBdLFxuICBmYW1pbGllICAgICA6IHtcbiAgICB2YXRlciAgICAgICA6ICd1bmJla2FubnQnLFxuICAgIG11dHRlciAgICAgIDogJ3VuYmVrYW5udCcsXG4gICAgYnJ1ZGVyICAgICAgOiAnUm9rJ1xuICB9LFxuICB3ZWJzaXRlICAgICA6ICdodHRwOi8vd3d3Lm5pbmFicmV6bmlrLmNvbSdcbn07XG5cbnZhciBJVEVNID0geyAnbmFtZSc6ICd2YWx1ZScgfTtcblxudmFyIENPTlRSQUNUID0geyAvLyBEQVRBIENPTlRSQUNUXG4gIGNhbXBhaWduICAgICAgICAgIDoge1xuICAgIGJ1ZGdldCAgICAgICAgICAgIDogZnVuY3Rpb24gZHVja3R5cGUgKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInOyB9LCAvLyBJVEVNIENPTlRSQUNUXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgbGVhZCAgICAgICAgICAgICAgOiB7XG4gICAgYnVkZ2V0ICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgYnVzaW5lc3NfY2F0ZWdvcnkgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAga2V5d29yZHMgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgbG9jYXRpb24gICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdGl0bGUgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgdXNlcl9pZCAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgdXNlciAgICAgICAgICAgICAgOiB7XG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgZW1haWwgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfSxcbiAgcmVsYXRpb25zaGlwICAgICAgOiB7XG4gICAgY29vd25lZF9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY29vd25lcl9pZCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgY3JlYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH0sXG4gICAgaWQgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7IH0sXG4gICAgdXBkYXRlZF9hdCAgICAgICAgOiBmdW5jdGlvbiBkdWNrdHlwZSAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7IH1cbiAgfVxufTtcblxuXG52YXIgaXRlbUNvbnRyYWN0ID0geyAvLyBpdGVtIGNvbnRyYWN0cyBzaG91bGQgYmUgdGVzdGFibGUgZm9yIGNvbXBsZXRlbmVzc1xuICBzZXJ2ZXIyY2xpZW50IDogZnVuY3Rpb24gc2VydmVyMmNsaWVudCAoKSB7fSxcbiAgdmFsaWRhdGUgICAgICA6IGZ1bmN0aW9uIGR1Y2t0eXBlICgpIHt9LFxuICB0cmFuc2Zvcm0gICAgIDogZnVuY3Rpb24gdHJhbnNmb3JtIChkYXRhKSB7fSxcbiAgbWFwICAgICAgICAgICA6IGZ1bmN0aW9uIG1hcCAoZGF0YSkge30sXG4gIHVubWFwICAgICAgICAgOiBmdW5jdGlvbiB1bm1hcCAoZGF0YSkge30sXG4gIHVudHJhbnNmb3JtICAgOiBmdW5jdGlvbiB1bnRyYW5zZm9ybSAoZGF0YSkge30sXG4gIGNsaWVudDJzZXJ2ZXIgOiBmdW5jdGlvbiBjbGllbnQyc2VydmVyICgpIHt9LFxuICBlbXB0eVNhbXBsZSAgIDogJycsXG4gIHNhbXBsZSAgICAgICAgOiAnJyxcbiAgZ2VuZXJhdGVTYW1wbGU6IGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlICgpIHt9LFxuICBzdGF0aWN0eXBlICAgIDogZnVuY3Rpb24gdHlwZU9mICgpIHt9LFxuICByaWdodHMgICAgICAgIDogeyAvLyByaWdodHMgc2hvdWxkIGJlIHRlc3RhYmxlIChPYmplY3QuZGVmaW5lUHJvcGVydHkuLi4pXG4gICAgY3JlYXRlICAgICAgICA6ICcnLFxuICAgIHJlYWQgICAgICAgICAgOiAnJyxcbiAgICB1cGRhdGUgICAgICAgIDogJycsXG4gICAgZGVzdHJveSAgICAgICA6ICcnXG4gIH0sXG4gIG5hbWUgICAgICAgICAgOiAnJ1xufTtcblxuXG4vLyB2YXIgQ09OVFJBQ1QgPSAge1xuLy8gICBTRVJWRVIyQ0xJRU5UIDogZnVuY3Rpb24gc2VydmVyMmNsaWVudCAoKSB7fSxcbi8vICAgQ0xJRU5UMlNFUlZFUiA6IGZ1bmN0aW9uIGNsaWVudDJzZXJ2ZXIgKCkge30sXG4vLyAgIFZBTElEQVRFICAgICAgOiBmdW5jdGlvbiBWQUxJREFURSAocGFyYW1zKSB7XG4vLyAgICAgZGVidWdnZXI7XG4vLyAgICAgLy8gIUlNUE9SVEFOVCFcbi8vICAgICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyB0byB3b3JrIGluIGFsbCBqYXZhc2NyaXB0IGVudmlyb25tZW50cyFcbi8vICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ21vcmUgaW5mb3JtYXRpb24gYWJvdXQgd3JvbmduZXNzIG9mIGRhdGEnKTtcbi8vXG4vLyAgICAgdmFyIHBhcmFtcyA9IHtcbi8vICAgICAgIFwiZGF0YVwiOltcbi8vICAgICAgICAge1widGl0bGVcIjpcIkR1bW15MVwiLFwiZGVzY3JpcHRpb25cIjpcIlRoaXMgaXMgZHVtbXkgMVwiLFwiY291bnRlclwiOjF9LFxuLy8gICAgICAgICB7XCJ0aXRsZVwiOlwiRHVtbXkyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBpcyBkdW1teSAyXCIsXCJjb3VudGVyXCI6Mn1cbi8vICAgICAgIF0sXG4vLyAgICAgICBcImNvbGxlY3Rpb25cIjp7XG4vLyAgICAgICAgIFwidGl0bGVcIjpbXCJEdW1teTFcIixcIkR1bW15MlwiXSxcbi8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlRoaXMgaXMgZHVtbXkgMVwiLFwiVGhpcyBpcyBkdW1teSAyXCJdLFxuLy8gICAgICAgICBcImNvdW50ZXJcIjpbMSwyXVxuLy8gICAgICAgfSxcbi8vICAgICAgIFwic2NoZW1hXCI6e1xuLy8gICAgICAgICBcInRpdGxlXCI6XCJzdHJpbmdcIixcbi8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwic3RyaW5nXCIsXG4vLyAgICAgICAgIFwiY291bnRlclwiOlwiaW50ZWdlclwifSxcbi8vICAgICAgICAgXCJ1c2VyXCI6e1wiaWRcIjpudWxsLFwibmFtZVwiOm51bGwsXCJlbWFpbFwiOm51bGwsXCJzZWNyZXRcIjpcIlNDdzBka0lESmZxOUdNMEUrMkdaM0JKWmRmR1dLb0J4dnVZMzZnZmdQL0k9XCJcbi8vICAgICAgIH0sXG4vLyAgICAgICBcImNvbnRhaW5lcklEXCI6XCJDT05URU5UXCJcbi8vICAgICB9O1xuLy9cbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gfTtcblxuXG4vLyB2YXJcbi8vICAgVVNFUiAgICAgICAgPSBwYXJhbXMuVVNFUkFVVEgsXG4vLyAgIENPTlRBSU5FUiAgID0gcGFyYW1zLkNPTlRBSU5FUixcbi8vICAgREFUQSAgICAgICAgPSBwYXJhbXMuU0VULkRBVEEsXG4vLyAgIENPTExFQ1RJT04gID0gcGFyYW1zLlNFVC5DT0xMRUNUSU9OLFxuLy8gICBTQ0hFTUEgICAgICA9IHBhcmFtcy5TRVQuU0NIRU1BLFxuLy8gICBNSVNDICAgICAgICA9IHBhcmFtcy5NSVNDXG4vLyA7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyA9PiB0eXBlIG9mIHNjaGVtYSBpdGVtIGRlZmluZXMgXCJQTEFURVMuSlNcIiB0ZW1wbGF0ZVxuXG5cbi8vIG9yIHNlbGVjdG9yIHdpbGwgdGVsbCB5b3UgXCJ3aGljaCBURU1QTEFURSB0byB1c2VcIlxuZnVuY3Rpb24gc2VsZWN0b3IgKCkgey8vIEBUT0RPOiBNYXliZSBnZW5lcmF0ZSBTRUxFQ1RPUiBRVUVSSUVTIC0gZm9yIFBMQVRFUy5qc1xuIHJldHVybiAnLkJsb2NrX19lbGVtZW50Jztcbn1cbi8vIGUuZy4gcGhvbmUgOiBmdW5jdGlvbiBzZWxlY3RvciAoeCkgeyByZXR1cm4gJy5Db21wbGV4Zm9ybV9fY29tbXVuaWNhdGlvbl9fcGhvbmVfX2lucHV0JzsgfSxcblxuLy8gZS5nLlxuLy8gdml0YV9zdGVwc19hdHRyaWJ1dGVzICAgICA6IGZ1bmN0aW9uIHNlbGVjdG9yICh4KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgVEVNUExBVEUgICAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeScsXG4vLyAgICAgZGVzY3JpcHRpb24gOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fY29udGVudCcsXG4vLyAgICAgY3JlYXRlZF9hdCAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fZGF0ZScsXG4vLyAgICAgdXNlcl9pZCAgICAgOiAnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeV9fdXNlcicgLy8gQFRPRE86IHdpbmRvdy5EQVRBQ09MTEVDVElPTi51c2VyX2lkW3VzZXJfaWRdLnRpdGxlXG4vLyAgIH1cbi8vIH1cblxuLy8gZS5nLiBkZWxldGVkICAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gc2VsZWN0b3IgKHgpIHsgcmV0dXJuICdOT05FJzsgfSAvLyBzaG91bGQgbm90IGJlIHByZXNlbnRcblxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gICAgKHZhbHVlKSB7IHJldHVybiAnJyt2YWx1ZTsgICAgICAgICAgfVxuXG5mdW5jdGlvbiB1bnRyYW5zZm9ybSAgKHZhbHVlKSB7IHJldHVybiBuZXcgTnVtYmVyKHZhbHVlKTsgfVxuLy8gZmlyc3RuYW1lIDogKGZ1bmN0aW9uIHVuVHJhbnNmb3JtICgpIHsgcmV0dXJuIENPTVBPTkVOVC5xdWVyeVNlbGVjdG9yKCcuQ29tcGxleGZvcm1fX3BlcnNvbl9fcHJlbmFtZV9faW5wdXQnKS5pbm5lckhUTUw7IH0pKCksXG5cbi8vIGludGVybmFsX2NvbnRhY3RfcGVyc29uX2lkcyA6IChmdW5jdGlvbiB1blRyYW5zZm9ybSAoKSB7IHJldHVybiBpbnRlcm5hbF9jb250YWN0X3BlcnNvbnNEYXRhOyB9KSgpLFxuLy8gbWFzc19lbWFpbF9yZWNlaXZlciAgICAgICAgIDogKGZ1bmN0aW9uIHVuVHJhbnNmb3JtICgpIHsgcmV0dXJuICQoJ2lucHV0OnJhZGlvW25hbWU9c2V0dGluZ3NfbWFzc19lbWFpbF06Y2hlY2tlZCcpLnZhbCgpOyB9KSgpLFxuXG5cblxuLy8gdml0YV9zdGVwc19hdHRyaWJ1dGVzICAgICA6IChmdW5jdGlvbiB1blRyYW5zZm9ybSAoKSB7XG4vLyAgIHZhciBjb25jZXB0ID0gc2NoZW1hTWFwcGluZ1sndml0YV9zdGVwc19hdHRyaWJ1dGVzJ10oKTtcbi8vICAgdmFyIHJlc3VsdHMgPSBbXTtcbi8vICAgdmFyIGh0bWwgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvckFsbCgnLkNvbXBsZXhmb3JtX19qb3VybmFsX19lbnRyeTpub3QoW2RhdGEtdGVtcGxhdGU9XCJDb21wbGV4Zm9ybV9fam91cm5hbF9fZW50cnlcIl0pJyk7XG4vLyAgIGZvcih2YXIgaSA9IDA7IGk8aHRtbC5sZW5ndGg7IGkrKykge1xuLy8gICAgIHZhciB0ZW1wID0ge307XG4vLyAgICAgZm9yKHN1YmtleSBpbiBjb25jZXB0KSB7XG4vLyAgICAgICBpZiAoc3Via2V5ICE9PSAnVEVNUExBVEUnICYmIHN1YmtleSAhPT0gJ2NyZWF0ZWRfYXQnKSB7XG4vLyAgICAgICAgIHRlbXBbc3Via2V5XSA9IGVzY2FwZShodG1sW2ldLnF1ZXJ5U2VsZWN0b3IoY29uY2VwdFtzdWJrZXldKS5pbm5lckhUTUwpOyAvLyBFU0NBUEUgVVNFUiBIVE1MIENPTlRFTlRcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmVzdWx0cy5wdXNoKHRlbXApO1xuLy8gICB9XG4vLyAgIHJldHVybiByZXN1bHRzO1xuLy8gfSkoKVxudmFyIGVtcHR5U2FtcGxlID0gJ0ZBSUxGQUlMRkFJTCc7XG4vLyAgIHBob25lX2NvbXBhbnkgOiB7IHN0YW5kYXJkOiAnRkFJTEZBSUxGQUlMJyB9LFxuLy8gICAvLyBAVE9ETzogTWF5YmUgZ2VuZXJhdGUgU0VMRUNUT1IgUVVFUklFUyAtIGZvciBQTEFURVMuanNcbi8vICAgdml0YV9zdGVwcyAgICAgICAgICAgICAgICA6IHsgc3RhbmRhcmQ6ICdGQUlMRkFJTEZBSUwnIH0sXG4gICAgICAgICAgICAgICAvLyB2YXIgc2NoZW1hTWFwcGluZyA9IHsgLy8gQFRPRE86IHVzZSBzY2hlbWEgaW5zdGVhZCBvZiBoYXJkY29kZSEhISA9PiB0eXBlIG9mIHNjaGVtYSBpdGVtIGRlZmluZXMgXCJQTEFURVMuSlNcIiB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAvLyAgIC8vIENVUlJFTlRMWSBcIk1BTlVBTExZXCIgU1lOQ0hST05JWkVEIFdJVEggXCJSYWluYm93VW5pY29ybi5qc1wiIFNDSEVNQSAtIFNob3VsZCBsYXRlciBnZXQgaXQncyBTQ0hFTUEgaW4gQ09NUE9ORU5ULUNPTlNUUlVDVE9SXG4gICAgICAgICAgICAgIC8vICAgaWQgICAgICAgICAgICAgICAgICAgICAgICA6IHsgc3RhbmRhcmQ6ICdGQUlMRkFJTEZBSUwnIH0sXG5cbiAgLy8gaWYgKGZhbHNlKSB7XG4gIGlmICh0cnVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIGludmFsaWQnKTtcbiAgfVxufTtcblxuXG5cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBAVE9ETzogVGhlIFwiR2VuZXJhdG9yXCIgaXMgbm90IGluIFVTRSwgYnV0IGNvdWxkIGJlIHVzZWQsIHRvIHVzZSBcInNhbXBsZVwiIGRhdGEgaW4gc2NoZW1hLFxuICAvLyB0byBnZW5lcmF0ZSBkYXRhIGFzIGxvbmcgYXMgdGhlcmUgaXMgbm8gYmFja2VuZCBwcm92aWRpbmcgdmFsaWQgZGF0YVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyB2YXIgR0VORVJBVE9SID0ge307XG4gIC8vIEdFTkVSQVRPUi5zYW1wbGVEYXRhID0ge1xuICAvLyAgIFwiaWRcIiAgICAgICAgICAgICAgICAgICAgICAgIDogMSxcbiAgLy8gICBcInVzZXJfaWRcIiAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gIC8vICAgLy8gXCJjcmVhdGVkX2F0XCIgICAgICAgICAgICAgICAgOiBcIjIwMTQtMDctMTZUMTc6MDU6MDgrMDI6MDBcIixcbiAgLy8gICAvLyBcInVwZGF0ZWRfYXRcIiAgICAgICAgICAgICAgICA6IFwiMjAxNC0wNy0xNlQxNzowNTowOCswMjowMFwiLFxuXG4gIC8vICAgLy8gXCJsb2dpblwiICAgICAgICAgICAgICAgICAgICAgOiBcIk5PVF9JTl9VU0VcIixcblxuICAvLyAgIFwiZ2VuZGVyXCIgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX2dlbmRlclwiLFxuICAvLyAgIFwidGl0bGVcIiAgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX3RpdGxlXCIsXG4gIC8vICAgXCJmaXJzdG5hbWVcIiAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX3BfcHJlbmFtZVwiLFxuICAvLyAgIFwibGFzdG5hbWVcIiAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9wX3N1cm5hbWVcIixcbiAgLy8gICBcImJ1c2luZXNzcmVsYXRpb25zXCIgICAgICAgICA6IFt7XCJpZFwiOjEsIFwidGl0bGVcIjpcImFzZDFcIn0sIHtcImlkXCI6MiwgXCJ0aXRsZVwiOlwiYXNkMlwifSwge1wiaWRcIjozLCBcInRpdGxlXCI6XCJhc2QzXCJ9XSxcbiAgLy8gICAvL1wiYnVzaW5lc3NyZWxhdGlvbnNcIiAgICAgICAgIDogW1wicmVsYXRpb24xXCIsIFwicmVsYXRpb24yXCIsIFwicmVsYXRpb24zXCIsIFwicmVsYXRpb240XCIsIFwicmVsYXRpb241XCJdLFxuXG4gIC8vICAgXCJidXNpbmVzc191bml0XCIgICAgICAgICAgICAgOiBcIkRVTU1ZX3BfZGVwYXJ0ZW1lbnRcIixcbiAgLy8gICBcInBvc2l0aW9uXCIgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfcF9wb3NpdGlvblwiLFxuICAvLyAgIFwidXNlcl9pZF9wZXJzb25cIiAgICAgICAgICAgIDogXCJEVU1NWV9wZXJzb25faWRcIixcbiAgLy8gICBcImludGVybmFsX2NvbnRhY3RfcGVyc29uc1wiICA6IFtcIkRVTU1ZX3BlcnNvbl9pZF8xXCIsIFwiRFVNTVlfcGVyc29uX2lkXzJcIiwgXCJEVU1NWV9wZXJzb25faWRfM1wiLCBcIkRVTU1ZX3BlcnNvbl9pZF80XCIsIFwiRFVNTVlfcGVyc29uX2lkXzVcIl0sXG4gIC8vICAgXCJ0b3BpY3NcIiAgICAgICAgICAgICAgICAgICAgOiBbXCJ0b3BpYzFcIiwgXCJ0b3BpYzJcIiwgXCJ0b3BpYzNcIiwgXCJ0b3BpYzRcIiwgXCJ0b3BpYzVcIl0sXG5cbiAgLy8gICBcInBob25lXCIgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX3Bob25lXCIsXG4gIC8vICAgXCJtb2JpbGVcIiAgICAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9tb2JpbGVcIixcbiAgLy8gICBcImVtYWlsXCIgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX2VtYWlsXCIsXG4gIC8vICAgXCJwaG9uZV9jb21wYW55XCIgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9waG9uZV9jb21wYW55XCIsXG4gIC8vICAgXCJmYXhcIiAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRVTU1ZX2NvbV9mYXhcIixcbiAgLy8gICBcImVtYWlsX2NvbXBhbnlcIiAgICAgICAgICAgICA6IFwiRFVNTVlfY29tX2VtYWlsX2NvbXBhbnlcIixcblxuICAvLyAgIFwiY29tcGFueV9pZFwiICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgLy8gICBcImNvbXBhbnlfbmFtZVwiICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX2NvbXBhbnlfbmFtZTFcIixcbiAgLy8gICBcImNvbXBhbnlfbmFtZV9hZGRpdGlvblwiICAgICA6IFwiRFVNTVlfYnVzX2NvbXBhbnlfbmFtZTJcIixcbiAgLy8gICBcInN0cmVldFwiICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3N0cmVldDFcIixcbiAgLy8gICBcInN0cmVldF9hZGRpdGlvblwiICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3N0cmVldDJcIixcbiAgLy8gICBcInppcFwiICAgICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3ppcFwiLFxuICAvLyAgIFwicG9zdF9ib3hcIiAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfcG9zdGJveFwiLFxuICAvLyAgIFwiY2l0eVwiICAgICAgICAgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfY2l0eVwiLFxuICAvLyAgIFwicG9zdF9ib3hfemlwXCIgICAgICAgICAgICAgIDogXCJEVU1NWV9idXNfemlwX3Bvc3Rib3hcIixcbiAgLy8gICBcImNvdW50cnlfbmFtZVwiICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX2NvdW50cnlcIixcbiAgLy8gICBcInJlZ2lvblwiICAgICAgICAgICAgICAgICAgICA6IFwiRFVNTVlfYnVzX3JlZ2lvblwiLFxuXG5cbiAgLy8gICBcImV2ZW50X2ludml0YXRpb25fcmVjZWl2ZXJcIiA6IHRydWUsXG4gIC8vICAgXCJlbWFpbF9yZWNlaXZlclwiICAgICAgICAgICAgOiB0cnVlLFxuICAvLyAgIFwibWFzc19lbWFpbF9yZWNlaXZlclwiICAgICAgIDogdHJ1ZSxcbiAgLy8gICBcImF0dGFpbmluZ19wdWJsaWNfb2ZmaWNlXCIgICA6IHRydWUsXG4gIC8vICAgXCJwaG9uZV9yZWNlaXZlclwiICAgICAgICAgICAgOiB0cnVlLFxuICAvLyAgIFwiZmF4X3JlY2VpdmVyXCIgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgLy8gICBcImxldHRlcl9yZWNlaXZlclwiICAgICAgICAgICA6IHRydWUsXG5cblxuICAvLyAgIFwiaGlzdG9yeV90ZXh0XCIgICAgICAgICAgICAgIDogW1wibG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cIl0sXG4gIC8vICAgXCJoaXN0b3J5X3RpbWVcIiAgICAgICAgICAgICAgOiBbXCIyMDE0LTA3LTE3VDE3OjA1OjA4KzAyOjAwXCJdLFxuICAvLyAgIFwiaGlzdG9yeV9hdXRob3JcIiAgICAgICAgICAgIDogW1wiRFVNTVlfcGVyc29uX2lkXCJdXG4gIC8vIH07XG4gIC8vIEdFTkVSQVRPUi5kdW1teURhdGEgPSAoZnVuY3Rpb24gZ2VuZXJhdGVEdW1teURhdGFGcm9tIChERVBzKSB7XG4gIC8vICAgREVQcy50eXBlT2YgPSBERVBzLnR5cGVPZi5GOyAvLyBDaG9vc2UgYmV0d2VlbiB0eXBlT2YgQSAtIEYgbWV0aG9kc1xuICAvLyAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTYW1wbGVEYXRhIChxdWFudGl0eSwgZm9ybWF0LCBzYW1wbGVEYXRhKSB7XG4gIC8vICAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSwgZm9ybWF0KSB7IHJldHVybiBkYXRhOyB9XG4gIC8vICAgICBzYW1wbGVEYXRhID0gc2FtcGxlRGF0YSA/IChmdW5jdGlvbiBjb252ZXJ0U2FtcGxlRGF0YSgpIHtcbiAgLy8gICAgICAgaWYgKGZvcm1hdCA9PT0gJ2NvbXBsZXgnKSB7XG4gIC8vICAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCBnaXZlbiBzYW1wbGVEYXRhIGNvbXBsaWVzIHRvICdzaW1wbGUnIGZvcm1hdFxuICAvLyAgICAgICAgIC8vIG90aGVyd2lzZSB0cmFuc2Zvcm0gdG8gJ2NvbXBsZXgnIGZvcm1hdCBvciB0aHJvdyBlcnJvclxuICAvLyAgICAgICAgIHJldHVybiB2YWxpZGF0ZURhdGEoc2FtcGxlRGF0YSwgJ2NvbXBsZXgnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdzaW1wbGUnKSB7XG4gIC8vICAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCBnaXZlbiBzYW1wbGVEYXRhIGNvbXBsaWVzIHRvICdzaW1wbGUnIGZvcm1hdFxuICAvLyAgICAgICAgIC8vIG90aGVyd2lzZSB0cmFuc2Zvcm0gdG8gJ3NpbXBsZScgZm9ybWF0IG9yIHRocm93IGVycm9yXG4gIC8vICAgICAgICAgLy8gb3RoZXJ3aXNlXG4gIC8vICAgICAgICAgcmV0dXJuIHZhbGlkYXRlRGF0YShzYW1wbGVEYXRhLCAnc2ltcGxlJyk7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2Ugc3BlY2lmeSBmb3JtYXQ6IFwiY29tcGxleFwiIG9yIFwic2ltcGxlXCInKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSkoKSA6IEdFTkVSQVRPUi5zYW1wbGVEYXRhO1xuICAvLyAgICAgdmFyIGdlbmVyYXRlZERhdGEgPSBbXTtcbiAgLy8gICAgIHZhciB0ZW1wO1xuICAvLyAgICAgZm9yICh2YXIgY291bnRlcj0wOyBjb3VudGVyPHF1YW50aXR5OyBjb3VudGVyKyspIHtcbiAgLy8gICAgICAgdGVtcCA9IHt9O1xuICAvLyAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzYW1wbGVEYXRhKSB7XG4gIC8vICAgICAgICAgaWYgKHNhbXBsZURhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gIC8vICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IERFUHMuY3JlYXRlU2FtcGxlQXR0cmlidXRlKHNhbXBsZURhdGFbcHJvcGVydHldLCBjb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgZ2VuZXJhdGVkRGF0YS5wdXNoKHRlbXApO1xuICAvLyAgICAgfVxuICAvLyAgICAgcmV0dXJuIGdlbmVyYXRlZERhdGE7XG4gIC8vICAgfTtcbiAgLy8gfSkoXG4gIC8vICAgKGZ1bmN0aW9uIERFUEVOREVOQ0lFUyAoREVQcykge1xuICAvLyAgICAgdmFyIERFUHMgPSB7XG4gIC8vICAgICAgIHR5cGVPZiA6IHtcbiAgLy8gICAgICAgICBBOiAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAvLyAgICAgICAgICAgdmFyIGNhY2hlID0ge307XG4gIC8vICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAvLyAgICAgICAgICAgICB2YXIga2V5O1xuICAvLyAgICAgICAgICAgICByZXR1cm4gb2JqID09PSBudWxsID8gJ251bGwnIC8vIG51bGxcbiAgLy8gICAgICAgICAgICAgICA6IG9iaiA9PT0gZ2xvYmFsID8gJ2dsb2JhbCcgLy8gd2luZG93IGluIGJyb3dzZXIgb3IgZ2xvYmFsIGluIG5vZGVqc1xuICAvLyAgICAgICAgICAgICAgIDogKGtleSA9IHR5cGVvZiBvYmopICE9PSAnb2JqZWN0JyA/IGtleSAvLyBiYXNpYzogc3RyaW5nLCBib29sZWFuLCBudW1iZXIsIHVuZGVmaW5lZCwgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgICAgICA6IG9iai5ub2RlVHlwZSA/ICdvYmplY3QnIC8vIERPTSBlbGVtZW50XG4gIC8vICAgICAgICAgICAgICAgOiBjYWNoZVtrZXkgPSAoe30pLnRvU3RyaW5nLmNhbGwob2JqKV0gLy8gY2FjaGVkLiBkYXRlLCByZWdleHAsIGVycm9yLCBvYmplY3QsIGFycmF5LCBtYXRoXG4gIC8vICAgICAgICAgICAgICAgfHwgKGNhY2hlW2tleV0gPSBrZXkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpOyAvLyBnZXQgWFhYWCBmcm9tIFtvYmplY3QgWFhYWF0sIGFuZCBjYWNoZSBpdFxuICAvLyAgICAgICAgICAgfTtcbiAgLy8gICAgICAgICB9KHRoaXMpKSxcbiAgLy8gICAgICAgICBCOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgLy8gICAgICAgICAgIHZhciByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKG9iaikuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gIC8vICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiBcIlwiO1xuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgQzogZnVuY3Rpb24gKCB0aGluZyApIHtcbiAgLy8gICAgICAgICAgIHZhciB0eXBlT2ZUaGluZyA9IHR5cGVvZiB0aGluZztcbiAgLy8gICAgICAgICAgIGlmICggdHlwZU9mVGhpbmcgPT09ICdvYmplY3QnICkge1xuICAvLyAgICAgICAgICAgICB0eXBlT2ZUaGluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gIC8vICAgICAgICAgICAgIGlmICggdHlwZU9mVGhpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gIC8vICAgICAgICAgICAgICAgaWYgKCB0aGluZy5jb25zdHJ1Y3Rvci5uYW1lICkge1xuICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nLmNvbnN0cnVjdG9yLm5hbWU7XG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdGhpbmcuY29uc3RydWN0b3IudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT09ICdbJyApIHtcbiAgLy8gICAgICAgICAgICAgICAgIHR5cGVPZlRoaW5nID0gdHlwZU9mVGhpbmcuc3Vic3RyaW5nKDgsdHlwZU9mVGhpbmcubGVuZ3RoIC0gMSk7XG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgICAgICAgIHR5cGVPZlRoaW5nID0gdGhpbmcuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLyk7XG4gIC8vICAgICAgICAgICAgICAgICBpZiAoIHR5cGVPZlRoaW5nICkge1xuICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mVGhpbmdbMV07XG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgLy8gICAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgdHlwZU9mVGhpbmcgPSB0eXBlT2ZUaGluZy5zdWJzdHJpbmcoOCx0eXBlT2ZUaGluZy5sZW5ndGggLSAxKTtcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgcmV0dXJuIHR5cGVPZlRoaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZU9mVGhpbmcuc2xpY2UoMSk7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBEOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICB2YXIgc3RyID0gKG9iai5wcm90b3R5cGUgPyBvYmoucHJvdG90eXBlLmNvbnN0cnVjdG9yIDogb2JqLmNvbnN0cnVjdG9yKS50b1N0cmluZygpO1xuICAvLyAgICAgICAgICAgdmFyIGNuYW1lID0gc3RyLm1hdGNoKC9mdW5jdGlvblxccyhcXHcqKS8pWzFdO1xuICAvLyAgICAgICAgICAgdmFyIGFsaWFzZXMgPSBbXCJcIiwgXCJhbm9ueW1vdXNcIiwgXCJBbm9ueW1vdXNcIl07XG4gIC8vICAgICAgICAgICByZXR1cm4gYWxpYXNlcy5pbmRleE9mKGNuYW1lKSA+IC0xID8gXCJGdW5jdGlvblwiIDogY25hbWU7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBFOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pWzFdO1xuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgRjogZnVuY3Rpb24gKGl0ZW0pIHsgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pa2VtYWNjYW5hL2FnYXZlXG4gIC8vICAgICAgICAgICB2YXIgZ2V0UHJvdG90eXBlID0gZnVuY3Rpb24oaXRlbSkge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pLnNsaWNlKDgsIC0xKTtcbiAgLy8gICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB2YXIga2luZCwgVW5kZWZpbmVkO1xuICAvLyAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgKSB7XG4gIC8vICAgICAgICAgICAgIGtpbmQgPSAnbnVsbCc7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBpZiAoIGl0ZW0gPT09IFVuZGVmaW5lZCApIHtcbiAgLy8gICAgICAgICAgICAgICBraW5kID0gJ3VuZGVmaW5lZCc7XG4gIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IGdldFByb3RvdHlwZShpdGVtKTtcbiAgLy8gICAgICAgICAgICAgICBpZiAoICggcHJvdG90eXBlID09PSAnTnVtYmVyJyApICYmIGlzTmFOKGl0ZW0pICkge1xuICAvLyAgICAgICAgICAgICAgICAga2luZCA9ICdOYU4nO1xuICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgICBraW5kID0gcHJvdG90eXBlO1xuICAvLyAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgcmV0dXJuIGtpbmQ7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBHOiBmdW5jdGlvbiAob2JqKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoLyhbXFxbXFxdXXxvYmplY3R8XFxzKS9naSwgXCJcIik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9LCAvLyBtb3JlIGF0OiBodHRwOi8vdG9ieWhvLmNvbS8yMDExLzAxLzI4L2NoZWNraW5nLXR5cGVzLWluLWphdmFzY3JpcHQvXG4gIC8vICAgICAgIGNyZWF0ZVNhbXBsZUF0dHJpYnV0ZSA6IGZ1bmN0aW9uIChleGFtcGxlQXR0cmlidXRlLCBjdXJyZW50Q291bnRlcikge1xuICAvLyAgICAgICAgIHN3aXRjaCAoREVQcy50eXBlT2YoZXhhbXBsZUF0dHJpYnV0ZSkpIHtcbiAgLy8gICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gIC8vICAgICAgICAgICAgIHJldHVybiBleGFtcGxlQXR0cmlidXRlICsgY3VycmVudENvdW50ZXI7XG4gIC8vICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAvLyAgICAgICAgICAgICByZXR1cm4gZXhhbXBsZUF0dHJpYnV0ZSArIGN1cnJlbnRDb3VudGVyO1xuICAvLyAgICAgICAgICAgY2FzZSAnbnVsbCc6XG4gIC8vICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAvLyAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gIC8vICAgICAgICAgICAgIHJldHVybiAhZXhhbXBsZUF0dHJpYnV0ZTtcbiAgLy8gICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiBuZXdBcnJheShvbGRBcnJheSwgbmV3QXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICBzd2l0Y2ggKERFUHMudHlwZU9mKG9sZEFycmF5WzBdKSkge1xuICAvLyAgICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgLy8gICAgICAgICAgICAgICAgICAgZm9yKGl0ZW0gaW4gb2xkQXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKERFUHMuY3JlYXRlU2FtcGxlQXR0cmlidXRlKG9sZEFycmF5W2l0ZW1dLCBjdXJyZW50Q291bnRlcikpO1xuICAvLyAgICAgICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgLy8gICAgICAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6XG4gIC8vICAgICAgICAgICAgICAgICAgIHZhciBodG1sQ29kZSA9ICc8c2VsZWN0IGNsYXNzPVwia2xhc3NlWFhYXCI+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgZm9yKGl0ZW0gaW4gb2xkQXJyYXkpIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICBodG1sQ29kZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBvbGRBcnJheVtpdGVtXS5pZCArICdcIj4nICsgb2xkQXJyYXlbaXRlbV0udGl0bGUgKyAnPC9vcHRpb24+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICAgICAgICBodG1sQ29kZSArPSAnPC9zZWxlY3Q+JztcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxDb2RlO1xuICAvLyAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coREVQcy50eXBlT2Yob2xkQXJyYXlbMF0pKTtcbiAgLy8gICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGRldGVjdCBUWVBFIG9mIG9sZEFycmF5WzBdIVwiKTtcbiAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgfSkoZXhhbXBsZUF0dHJpYnV0ZSwgW10pO1xuICAvLyAgICAgICAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coREVQcy50eXBlT2YoZXhhbXBsZUF0dHJpYnV0ZSkpO1xuICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGV0ZWN0IFRZUEUgb2YgZXhhbXBsZUF0dHJpYnV0ZSFcIik7XG4gIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH07XG4gIC8vICAgICByZXR1cm4gREVQcztcbiAgLy8gICB9KSh7fSlcbiAgLy8gKTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGF0YSAoeCkge1xuICAgICAgLy8gQFRPRE86IFJFRkFDVE9SSU5HIC0gdXNlIFNDSEVNQSB0byBrbm93IGhvdyB0byBzZW5kIERBVEFcblxuICAgICAgLy8gVFJBTlNMQVRFIEZPUk1BVCAtIFJFQ0VJVkVEIERBVEEgMiBTRU5EIERBVEFcbiAgICAgIHZhciB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3aW5kb3cuZGF0YVswXSkpO1xuICAgICAgZGVsZXRlIHRlbXAuYnVzaW5lc3NyZWxhdGlvbl9pZHM7XG4gICAgICAvLyB0ZW1wLmJ1c2luZXNzcmVsYXRpb25faWRzID0gW107XG4gICAgICBkZWxldGUgdGVtcC50b3BpY19pZHM7XG4gICAgICAvLyB0ZW1wLnRvcGljX2lkcyA9IFtdO1xuICAgICAgZGVsZXRlIHRlbXAuaW50ZXJuYWxfY29udGFjdF9wZXJzb25faWRzO1xuICAgICAgLy8gdGVtcC5pbnRlcm5hbF9jb250YWN0X3BlcnNvbl9pZHMgPSBbXTtcbiAgICAgIGRlbGV0ZSB0ZW1wLmZ1bGxuYW1lO1xuICAgICAgdGVtcC52aXRhX3N0ZXBzX2F0dHJpYnV0ZXMgPSB7IH07XG4gICAgICB0ZW1wLnZpdGFfc3RlcHNfYXR0cmlidXRlc1swXSA9IHsgdXNlcl9pZDogIFVTRVIuSUQsIHRpdGxlOiAnYmxhJywgZGVzY3JpcHRpb246ICdsb3JlbSBpcHN1bScgfTtcbiAgICAgIHRlbXAudml0YV9zdGVwc19hdHRyaWJ1dGVzWzFdID0geyB1c2VyX2lkOiAgVVNFUi5JRCwgdGl0bGU6ICdibGEyJywgZGVzY3JpcHRpb246ICcgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0nIH07XG4gICAgICBkZWxldGUgdGVtcC52aXRhX3N0ZXBzO1xuXG4gICAgICB0ZW1wLnVzZXJfaWQgPSB0ZW1wLnVzZXJfaWQuaWQ7XG5cblxuICAgICAgLy8gR0VORVJBVEUgTkVXIERBVEEgZnJvbSBTQU1QTEUgSVRFTSBcInhcIlxuICAgICAgLy8gKGJ5IGFkZGluZyByYW5kb20gbnVtYmVyIHRvIHRoZSBlbmQgb2Ygc29tZSBhdHRyaWJ1dGVzKTtcbiAgICAgIHRlbXAuZmlyc3RuYW1lICAgICAgICAgICAgID0gJ0hhbnMnK3g7XG4gICAgICB0ZW1wLmxhc3RuYW1lICAgICAgICAgICAgICA9ICdNZWllcicreDtcbiAgICAgIHRlbXAuZW1haWwgICAgICAgICAgICAgICAgID0gJ2hhbnMubWVpZXInK3grJ0BlbWFpbC5jb20nO1xuICAgICAgdGVtcC5waG9uZSAgICAgICAgICAgICAgICAgPSAnMTIzNDU2Jyt4O1xuICAgICAgdGVtcC5tb2JpbGUgICAgICAgICAgICAgICAgPSAnMDE3NyAxMjM0IDEyMzQnK3g7XG4gICAgICB0ZW1wLnBob25lX2NvbXBhbnkgICAgICAgICA9ICcwMzAgMTIzNDUnK3g7XG4gICAgICB0ZW1wLmVtYWlsX2NvbXBhbnkgICAgICAgICA9ICdoYW5zLm1laWVyJyt4KydAY29tcGFueS5jb20nO1xuICAgICAgdGVtcC5idXNpbmVzc191bml0ICAgICAgICAgPSAnSHVtYW4gUmVzc291cmNlJyt4O1xuICAgICAgdGVtcC5wb3NpdGlvbiAgICAgICAgICAgICAgPSAnS2V5IEFjY291bnQgTWFuYWdlcicreDtcbiAgICAgIHRlbXAuY29tcGFueV9uYW1lICAgICAgICAgID0gJ0V4YW1wbGUgR21iSCcreDtcbiAgICAgIHRlbXAuY29tcGFueV9uYW1lX2FkZGl0aW9uID0gJ0hvbGRpbmcnK3g7XG4gICAgICB0ZW1wLnN0cmVldCAgICAgICAgICAgICAgICA9ICdIYXVwdHN0cmFzc2UgNTUnK3g7XG4gICAgICB0ZW1wLnN0cmVldF9hZGRpdGlvbiAgICAgICA9ICdOZWJlbndlZyA1Jyt4O1xuICAgICAgdGVtcC56aXAgICAgICAgICAgICAgICAgICAgPSAnNTU1MzMzJyt4O1xuICAgICAgdGVtcC5wb3N0X2JveCAgICAgICAgICAgICAgPSAnNTM1MzUzJyt4O1xuICAgICAgdGVtcC5wb3N0X2JveF96aXAgICAgICAgICAgPSAnNTM1MzUzIFBPU1QgQk9YJyt4O1xuICAgICAgdGVtcC5jaXR5ICAgICAgICAgICAgICAgICAgPSAnQmVybGluJyt4O1xuICAgICAgdGVtcC5jb3VudHJ5X25hbWUgICAgICAgICAgPSAnRGV1dHNjaGxhbmQnK3g7XG4gICAgICB0ZW1wLnJlZ2lvbiAgICAgICAgICAgICAgICA9ICdCZXJsaW4gUmVnaW9uJyt4O1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLy8gQFRPRE86IENPTlRSQUNUIC0gU1RBVElDX1RZUEUsIERVQ0tfVFlQRSwgRklMTEVEX0VYQU1QTEUsIEVNUFRZX0VYQU1QTEVcbiAgICB2YXIgU0NIRU1BID0geyAvLyBAVE9ETzogdW50ZXJzY2hlaWRlbiB6d2lzY2hlbiBcInJlY2VpdmVcIiBhbmQgXCJzZW5kXCIsIC4uLiB3aGljaCBmaWVsZHMgaGF2ZSB3aGljaCBcInJpZ2h0c1wiPyAoQ1JVRClcbiAgICAgIC8vIFNFTkQgMiBGUk9OVEVORCBGSUVMRFMgLSB3aWxsIGJlIGRlZmluZWQgYnkgRlJPTlRFTkQgREVWRUxPUEVSXG4gICAgICAvLyBTRU5EIDIgQkFDS0VORCBGSUVMRFMgIC0gd2lsbCBiZSBkZWZpbmVkIGJ5IEJBQ0tFTkQgREVWRUxPUEVSXG4gICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIkludGVnZXJcIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZmlyc3RuYW1lICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGxhc3RuYW1lICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBnZW5kZXIgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgdGl0bGUgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGJ1c2luZXNzcmVsYXRpb25faWRzICAgICAgOiB7IHR5cGU6IFwiQXJyYXlcIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgdG9waWNfaWRzICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJBcnJheVwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICB1c2VyX2lkICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIkludGVnZXJcIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgaW50ZXJuYWxfY29udGFjdF9wZXJzb25faWRzIDogeyB0eXBlOiBcIkFycmF5XCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHBob25lICAgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBtb2JpbGUgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZW1haWwgICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHBob25lX2NvbXBhbnkgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBmYXggICAgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZW1haWxfY29tcGFueSAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGJ1c2luZXNzX3VuaXQgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBwb3NpdGlvbiAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgZXZlbnRfaW52aXRhdGlvbl9yZWNlaXZlciA6IHsgdHlwZTogXCJCb29sZWFuXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGVtYWlsX3JlY2VpdmVyICAgICAgICAgICAgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBtYXNzX2VtYWlsX3JlY2VpdmVyICAgICAgIDogeyB0eXBlOiBcIkJvb2xlYW5cIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgYXR0YWluaW5nX3B1YmxpY19vZmZpY2UgICA6IHsgdHlwZTogXCJCb29sZWFuXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHBob25lX3JlY2VpdmVyICAgICAgICAgICAgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBmYXhfcmVjZWl2ZXIgICAgICAgICAgICAgIDogeyB0eXBlOiBcIkJvb2xlYW5cIiwgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgbGV0dGVyX3JlY2VpdmVyICAgICAgICAgICA6IHsgdHlwZTogXCJCb29sZWFuXCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGNvbXBhbnlfbmFtZSAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBjb21wYW55X25hbWVfYWRkaXRpb24gICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgc3RyZWV0ICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHN0cmVldF9hZGRpdGlvbiAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICB6aXAgICAgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgcG9zdF9ib3ggICAgICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHBvc3RfYm94X3ppcCAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICBjaXR5ICAgICAgICAgICAgICAgICAgICAgIDogeyB0eXBlOiBcIlN0cmluZ1wiLCAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0ZSAoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSwgc2FtcGxlOiAnJyB9LFxuICAgICAgY291bnRyeV9uYW1lICAgICAgICAgICAgICA6IHsgdHlwZTogXCJTdHJpbmdcIiwgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIHJlZ2lvbiAgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiU3RyaW5nXCIsICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB0cnVlOyB9LCBzYW1wbGU6ICcnIH0sXG4gICAgICB2aXRhX3N0ZXBzX2F0dHJpYnV0ZXMgICAgIDogeyB0eXBlOiBcIkFycmF5XCIsIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdGUgKGRhdGEpIHsgcmV0dXJuIHRydWU7IH0sIHNhbXBsZTogJycgfSxcbiAgICAgIGRlbGV0ZWQgICAgICAgICAgICAgICAgICAgOiB7IHR5cGU6IFwiQm9vbGVhblwiLCB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRlIChkYXRhKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHNhbXBsZTogZmFsc2UgfSAvLyBzaG91bGQgbm90IGJlIHByZXNlbnRcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZXMoKSB7XG4gICAgICB2YXIgdGVtcCA9IHt9O1xuICAgICAgZm9yIChrZXkgaW4gU0NIRU1BKSB7XG4gICAgICAgIHRlbXBba2V5XSA9IFNDSEVNQVtrZXldLnR5cGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRhdG9ycygpIHtcbiAgICAgIHZhciB0ZW1wID0ge307XG4gICAgICBmb3IgKGtleSBpbiBTQ0hFTUEpIHtcbiAgICAgICAgdGVtcFtrZXldID0gU0NIRU1BW2tleV0udmFsaWRhdG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNhbXBsZXMoKSB7XG4gICAgICB2YXIgdGVtcCA9IHt9O1xuICAgICAgZm9yIChrZXkgaW4gU0NIRU1BKSB7XG4gICAgICAgIHRlbXBba2V5XSA9IFNDSEVNQVtrZXldLnNhbXBsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFZBTElEQVRFIChkYXRhLCBjb2xsZWN0aW9uLCBzY2hlbWEpIHtcbiAgICAgIHZhciBEQVRBO1xuICAgICAgZm9yKGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgREFUQSA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBmb3IgKGtleSBpbiBEQVRBKSB7XG4gICAgICAgICAgaWYgKCEoU0NIRU1BW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmICghKChTQ0hFTUFba2V5XS52YWxpZGF0b3IpKERBVEFba2V5XSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgICAgLy8vLyBDUkVBVEUgU0NIRU1BIC0gbm90IGluIHVzZSBjdXJyZW50bHkgLVxuICAgICAgZnVuY3Rpb24gZ2V0U2NoZW1hIChTQ0hFTUEpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9IFtdO1xuICAgICAgICBmb3Ioa2V5IGluIFNDSEVNQSkge1xuICAgICAgICAgIGlmIChTQ0hFTUEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc2NoZW1hLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgY2xhc3M9XCJDYW1wYWlnblwiPlxcbiAgPGFydGljbGUgY2xhc3M9XCJhcnRpY2xlXCI+XFxuICAgIDxmaWd1cmU+XFxuICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5yZWRidWxsY29udGVudHBvb2wuY29tL3Jlc291cmNlcy8yMDEzLzA3LzA5LzAwMDAxLTAxMDAwL1AtMjAxMzA3MDktMDA1NTAvaW1hZ2VfcHJveHlfbGFyZ2UuanBnXCIgLz5cXG4gICAgPC9maWd1cmU+XFxuICAgIDxzcGFuIGNsYXNzPVwiYXJ0aWNsZS1oZWFkaW5nXCI+XFxuICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGl0bGVcIj48L3NwYW4+IC0gPHNwYW4gZGF0YS1iaW5kPVwibG9jYXRpb25cIj48L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XCJhcnRpY2xlLXNuaXBwZXRcIj5cXG4gICAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVmVzdGlidWx1bSB0b3J0b3IgcXVhbSwgZmV1Z2lhdCB2aXRhZSwgdWx0cmljaWVzIGVnZXQsIHRlbXBvciBzaXQgYW1ldC4uLlxcbiAgICA8L3NwYW4+XFxuICAgIDxuYXYgcm9sZT1cXCduYXZpZ2F0aW9uXFwnPlxcbiAgICAgIDx1bD5cXG4gICAgICAgIDxsaSBjbGFzcz1cIm9uZVwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XCJ0d29cIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVwidGhyZWVcIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIDwvbmF2PlxcbiAgICA8YSBjbGFzcz1cImFydGljbGUtdXJsXCIgaHJlZj1cIiNcIiB0aXRsZT1cIkNvbnRpbnVlIFJlYWRpbmdcIj5Db250aW51ZSBSZWFkaW5nPC9hPlxcbiAgICA8dWwgY2xhc3M9XCJhcnRpY2xlLXNvY2lhbFwiPlxcbiAgICAgIDxsaT5cXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLWZhY2Vib29rXCI+PC9pPjwvYT5cXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLXR3aXR0ZXJcIj48L2k+PC9hPlxcbiAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tZ29vZ2xlLXBsdXNcIj48L2k+PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2FydGljbGU+XFxuPC9kaXY+XFxuJzsiLCIvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gIENPTU1PTkpTIE1PRFVMRSBFWFBPUlQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFZlcnNpb24gMC4wLjApXG5cbiAgICBASk9COiBVQkVSX05HRU4gR0VORVJBVE9SIGZvciBDb21wb25lbnRzIHNjaHJlaWJlblxuICAgIEBKT0I6IGRyb3BpbiB2cyBjb25maWd1cmFibGVcbiAgICBASk9COiBNYWtlIFwiQ09NTUVOVFNcIiBjcmVhdGUgYSBuaWNlIHZpc3VhbCBzdHJ1Y3R1cmUgb2YgbW9kdWxlIGluIG1pbml2aWV3XG5cbjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbihmdW5jdGlvbiBDT01NT05KU19FWFBPUlRFUiAoRkFDVE9SWSkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIElmIE1PRFVMRSBpcyBhIFwiRHJvcCBJblwiIHdoaWNoIGV4ZWN1dGVzIG9uY2UgYWZ0ZXIgbG9hZGluZzpcbiAgbW9kdWxlLmV4cG9ydHMgPSBGQUNUT1JZLy8oLyp3aXRoIHByZWRlZmluZWQgc2V0IG9mIFBBUkFNUyovKTsgLy8gQ29tbW9uSlNcbiAgLy8gLy8gRUxTRSBJRiBNT0RVTEUgaXMgT3RoZXJ3aXNlIGEgQ09ORklHVVJBQkxFOlxuICAvLyBtb2R1bGUuZXhwb3J0cyA9IEZBQ1RPUlk7XG59KShcbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBNT0RVTEVOQU1FICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgbGVnbylcbiAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgKGZ1bmN0aW9uIE1PRFVMRV9NT0RVTEVOQU1FIChDT05UUkFDVCwgRU5USVRJRVMsIERFUHMsIHdpbmRvdywgZ2xvYmFsLCB1bmRlZmluZWQpXG4gIHsgLy8gdG8gc2hpZWxkIE1PRFVMRSBmcm9tIG92ZXJyaWRlbiAndW5kZWZpbmVkJyBhbmQgZ2xvYmFsIG9iamVjdCBwb2xsdXRpb25cbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gTU9EVUxFTkFNRV9BUEkgKFxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBNT0RVTEUgQVBJXG4gICAgICBcbiAgICAgICAgICBAVE9ETzogdGhpbmsgYWJvdXQgd2hhdCBpIG5lZWQgaGVyZS5cbiAgICAgICAgICAgIE1PRFVMRU5BTUVfQVBJLkNPTlRSQUNUXG4gICAgICAgICAgICBNT0RVTEVOQU1FX0FQSSAoQ09OVEFJTkVSLCBTRVRUSU5HUywgU1VHR0VTVElPTlMpXG4gICAgICAgICAgICAuLi4uXG5cblxuICAgICAgICAgIFVTQUdFOlxuICAgICAgICAgICAgLi4uXG4gICAgICBcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgLy9JTkpFQ1RFRCBERVBFTkRFTkNJRVM6XG4gICAgICBDT05UQUlORVIsICAvLyBET00gRm9ybSBFbGVtZW50IHRvIGFwcGx5IE1PRFVMRU5BTUUgdG9cbiAgICAgIC8vT1BUSU9OUzpcbiAgICAgIFNFVFRJTkdTLCAgIC8vIE9QVElPTkFMIC0tIG5hbWU6c3RyaW5nLCByZXF1aXJlZDpib29sZWFuLCBtaW5RdWVyeUxlbmd0aDpudW1iZXJcbiAgICAgIFNVR0dFU1RJT05TIC8vIE9wdGlvbmFsIEFSUkFZIGZyb20gd2hpY2ggdG8gY2hvb3NlIGF1dG9jb21wbGV0ZSBTVUdHRVNUSU9OU1xuICAgICkge1xuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBQQVJBTUVURVIgVkFMSURBVElPTiArIFNBTklUSVpBVElPTlxuXG4gICAgICAgIEBKT0I6IFJlZmluZSBiZWhhdmlvciBpbiByZWxhdGlvbiB0byBnaXZlbiBpbnB1dFxuICAgICAgICBASk9COiBPbmx5IGRvIGlmIG5vdCBzaW5nbGV0b24gYW5kIHNpbmdsZSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBAQVNTRVJUOiBhdCBsZWFzdCBvbmUgJ2JpbGxib2FyZHMnIGlzIGdpdmVuIGluIFNFVFRJTkdTLmJpbGxib2FyZHNcbiAgICAgICAgICBlbHNlOiByZXR1cm4gd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZyBuZXchXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICBTRVRUSU5HUyA9IHR5cGVvZiBTRVRUSU5HUyA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB7IC8vIERFRkFVTFQgU0VUVElOR1NcbiAgICAgICAgICAvLyBzZXR0aW5ncyAgICAgIDoge3BsYWNlaG9sZGVyOiAnU2VhcmNoJywgdmFsdWU6ICcnLCBtaW5RdWVyeUxlbmd0aDogMH0sXG4gICAgICAgICAgLy8gU1VHR0VTVElPTlMgICA6IFtdLFxuICAgICAgICAgIC8vIHNlbGVjdGlvbiAgICAgOiAnJyxcbiAgICAgICAgICAvLyBvblF1ZXJ5Q2hhbmdlIDogZnVuY3Rpb24gb25RdWVyeUNoYW5nZSAob2xkUXVlcnksIG5ld1F1ZXJ5KSB7XG4gICAgICAgICAgLy8gICByZXR1cm47XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIDogU0VUVElOR1MgLy8gQEpPQjogRXh0ZW5kIG5vbi1naXZlbiBPUFRJT05TIHdpdGggREVGQVVMVFMsIGFsbG93IG92ZXJyaWRlIGRlZnVhbHRzIHdpdGggXCJOVUxMXCJcbiAgICAgIDtcbiAgICAgIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgTU9EVUxFIENSRUFUSU9OICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ1aWxkIHRoaXMgbGVnbylcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgICAgIHZhciBNT0RVTEUgPSBcbiAgICAgICAgRU5USVRJRVMubGVuZ3RoID8gRU5USVRJRVNbRU5USVRJRVMubGVuZ3RoLTFdIDogLy8gQEpPQjogaWYgc2luZ2xldG9uIHZzIGZhY3RvcnlcbiAgICAgICAgKGZ1bmN0aW9uIE1PRFVMRU5BTUUgKFNUQVRFKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBURU1QTEFURSAtIEJVSUxESU5HXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBURU1QTEFURSAtIENVU1RPTUlaQVRJT04gKE1hcmt1cCwgUHJvcGVydGllcywgU3R5bGluZylcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIERFRklORVxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyAvLyBDT05GSUdVUkUgQ09NUExFWEZPUk1cbiAgLy8gQ09NUE9ORU5ULkFQSSA9IHtcbiAgLy8gICAvLyBJTlBVVCBJTlRFUkZBQ0VcbiAgLy8gICBJTlRFUkZBQ0U6IHtcbiAgLy8gICAgICdVU0VSX1NFVCcgIDogZnVuY3Rpb24gKERBVEEpIHsgLy8gQFRPRE86IHRlc3QgdGhpcyBtZXRob2RzIGludGVuc2l2ZWx5XG4gIC8vICAgICAgIFRFTVBfSUQgICA9IERBVEEuaWQ7XG4gIC8vICAgICAgIHJlRmlsbGZvcm0oREFUQSk7XG4gIC8vICAgICB9LFxuICAvLyAgICAgJ1VTRVJfQUREJyAgOiBmdW5jdGlvbiAoREFUQSkgeyAvLyBAVE9ETzogdGVzdCB0aGlzIG1ldGhvZHMgaW50ZW5zaXZlbHlcbiAgLy8gICAgICAgVEVNUF9JRCAgID0gREFUQS5pZDtcbiAgLy8gICAgICAgcmVGaWxsZm9ybShEQVRBKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9LFxuICAvLyAgIC8vIE9VVFBVVCBJTlRFUkZBQ0VcbiAgLy8gICBFVkVOVFMgIDogeyBcbiAgLy8gICAgICdDQU5DRUwnICA6ICdERVNDUklQVElPTjogdXNlciBkaWQgbm90IHByb3ZpZGUgYW55IGlucHV0IGFuZCBhYm9ydGVkJyxcbiAgLy8gICAgICdTQVZFJyAgICA6ICdERVNDUklQVElPTjogdXNlciBwcm92aWRlZCBkYXRhIHdoaWNoIHNob3VsZCBiZSBtYWRlIHBlcnNpc3RlbnQnLFxuICAvLyAgICAgJ1BSRVYnICAgIDogJ0RFU0NSSVBUSU9OOiBsb2FkIHByZXZpb3VzIGRhdGEgaXRlbSBmcm9tIHRhYmxlIGludG8gY29tcGxleGZvcm0nLFxuICAvLyAgICAgJ05FWFQnICAgIDogJ0RFU0NSSVBUSU9OOiBsb2FkIG5leHQgZGF0YSBpdGVtIGZyb20gdGFibGUgaW50byBjb21wbGV4Zm9ybSdcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgLy8gLy8gU09GVFdBUkUgREVWRUxPUEVSIEtJVFxuICAvLyB2YXIgU0RLID0ge1xuICAvLyAgIEVWRU5UUzoge1xuICAvLyAgICAgJ0NBTkNFTCcgICAgOiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoJ0NBTkNFTCcsIHsgZGV0YWlsOiB7XG4gIC8vICAgICAgICAgZGVzY3JpcHRpb246IENPTVBPTkVOVC5BUEkuRVZFTlRTWydDQU5DRUwnXVxuICAvLyAgICAgICB9fSk7IC8vIEBUT0RPOiB0ZXN0IC0gbmV3IGV2ZW50IGdldHMgY29weSBvZiBtZXNzYWdlXG4gIC8vICAgICB9LFxuICAvLyAgICAgJ1NBVkUnICAgICAgOiBmdW5jdGlvbiAoREFUQSkge1xuICAvLyAgICAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KCdTQVZFJywgeyBkZXRhaWw6IHtcbiAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogQ09NUE9ORU5ULkFQSS5FVkVOVFNbJ1NBVkUnXSxcbiAgLy8gICAgICAgICBkYXRhOiBEQVRBXG4gIC8vICAgICAgIH19KTsgLy8gQFRPRE86IHRlc3QgLSBuZXcgZXZlbnQgZ2V0cyBjb3B5IG9mIG1lc3NhZ2VcbiAgLy8gICAgIH0sXG4gIC8vICAgICAnTkVYVCcgICAgICA6IGZ1bmN0aW9uIChDVVJSRU5UX0lEKSB7XG4gIC8vICAgICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoJ05FWFQnLCB7IGRldGFpbDoge1xuICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBDT01QT05FTlQuQVBJLkVWRU5UU1snTkVYVCddLFxuICAvLyAgICAgICAgIGRhdGE6IENVUlJFTlRfSURcbiAgLy8gICAgICAgfX0pOyAvLyBAVE9ETzogdGVzdCAtIG5ldyBldmVudCBnZXRzIGNvcHkgb2YgbWVzc2FnZVxuICAvLyAgICAgfSxcbiAgLy8gICAgICdQUkVWJyAgICAgIDogZnVuY3Rpb24gKENVUlJFTlRfSUQpIHtcbiAgLy8gICAgICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudCgnUFJFVicsIHsgZGV0YWlsOiB7XG4gIC8vICAgICAgICAgZGVzY3JpcHRpb246IENPTVBPTkVOVC5BUEkuRVZFTlRTWydQUkVWJ10sXG4gIC8vICAgICAgICAgZGF0YTogQ1VSUkVOVF9JRFxuICAvLyAgICAgICB9fSk7IC8vIEBUT0RPOiB0ZXN0IC0gbmV3IGV2ZW50IGdldHMgY29weSBvZiBtZXNzYWdlXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gRElTUEFUQ0ggRVZFTlRTIC0gQFRPRE86IEJFTSBpbnRlckFjdGlvbnMgY291bGQgaW5jbHVkZSBFdmVudE5hbWVzXG4gIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fbWVudV9fY2FuY2VsJyk7XG4gIC8vIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fYnV0dG9uOkNBTkNFTCcpO1xuICAvLyBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBvbkNsaWNrIChldmVudCkge1xuICAvLyAgIENPTVBPTkVOVC5kaXNwYXRjaEV2ZW50KFNESy5FVkVOVFNbJ0NBTkNFTCddKCkpO1xuICAvLyB9KTtcblxuICAvLyB2YXIgbmV4dEJ1dHRvbiAgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvcignLkNvbXBsZXhmb3JtX19tZW51X19uZXh0Jyk7XG4gIC8vIC8vIHZhciBjYW5jZWxCdXR0b24gID0gQ09NUE9ORU5ULnF1ZXJ5U2VsZWN0b3IoJy5Db21wbGV4Zm9ybV9fYnV0dG9uOkNBTkNFTCcpO1xuICAvLyBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljayAoZXZlbnQpIHtcbiAgLy8gICBDT01QT05FTlQuZGlzcGF0Y2hFdmVudChTREsuRVZFTlRTWydORVhUJ10oVEVNUF9JRCkpO1xuICAvLyB9KTtcblxuICAvLyB2YXIgcHJldkJ1dHRvbiAgPSBDT01QT05FTlQucXVlcnlTZWxlY3RvcignLkNvbXBsZXhmb3JtX19tZW51X19wcmV2aW91cycpO1xuICAvLyAvLyB2YXIgY2FuY2VsQnV0dG9uICA9IENPTVBPTkVOVC5xdWVyeVNlbGVjdG9yKCcuQ29tcGxleGZvcm1fX2J1dHRvbjpDQU5DRUwnKTtcbiAgLy8gcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uQ2xpY2sgKGV2ZW50KSB7XG4gIC8vICAgQ09NUE9ORU5ULmRpc3BhdGNoRXZlbnQoU0RLLkVWRU5UU1snUFJFViddKFRFTVBfSUQpKTtcbiAgLy8gfSk7XG5cbiAgLy8gcmV0dXJuIENPTVBPTkVOVC5BUEk7XG5cblxuXG5cblxuLy8gQUREIENPTlRFTlQgSEVSRVxuICBTVEFSVCA9IGZ1bmN0aW9uIFNUQVJUIChkYXRhLCBzY2hlbWEsIGNvbGxlY3Rpb24sIGNvbnRhaW5lclF1ZXJ5KSB7XG5cbiAgICAgIC8vIGZ1bmN0aW9uIGJ1aWxkU2VsZWN0Q29tcG9uZW50IChkYXRhLCBjb2xsZWN0aW9uLCB2YXJpYW50U3RydWN0dXJlVGhlbWUpIHsgcmV0dXJuICdzZWxlY3QgY29tcG9uZW50IGFwaSd9XG4gICAgICAvLyBmdW5jdGlvbiBidWlsZFJhZGlvQ29tcG9uZW50IChkYXRhLCBjb2xsZWN0aW9uLCB2YXJpYW50U3RydWN0dXJlVGhlbWUpIHsgcmV0dXJuICdyYWRpbyBjb21wb25lbnQgYXBpJ31cblxuXG4gICAgICAvLyAvLy8vIENSRUFURSBUUkFOU0ZPUk1FRCBEQVRBU0VUXG4gICAgICAvLyBmdW5jdGlvbiB0cmFuc2Zvcm0oZGF0YSkge1xuICAgICAgLy8gICBmb3IoaXRlbSBpbiBkYXRhKSB7XG4gICAgICAvLyAgICAgZGF0YVtpdGVtXS5nZW5kZXIgICAgICAgICAgICAgICAgICAgICA9IGJ1aWxkRGF0YVNlbGVjdChjb2xsZWN0aW9uLmdlbmRlciwgZGF0YVtpdGVtXS5nZW5kZXIsIGZhbHNlKTtcbiAgICAgIC8vICAgICBkYXRhW2l0ZW1dLnVzZXJfaWQgICAgICAgICAgICAgICAgICAgID0gYnVpbGREYXRhU2VsZWN0KGNvbGxlY3Rpb24udXNlcl9pZCwgZGF0YVtpdGVtXS51c2VyX2lkLCBmYWxzZSk7XG4gICAgICAvLyAgICAgZGF0YVtpdGVtXS5pbnRlcm5hbF9jb250YWN0X3BlcnNvbl9pZHMgPSBidWlsZERhdGFTZWxlY3QoY29sbGVjdGlvbi5pbnRlcm5hbF9jb250YWN0X3BlcnNvbl9pZHMsIGRhdGFbaXRlbV0uaW50ZXJuYWxfY29udGFjdF9wZXJzb25faWRzLCB0cnVlKTtcbiAgICAgIC8vICAgICBkYXRhW2l0ZW1dLmJ1c2luZXNzcmVsYXRpb25faWRzICAgICAgID0gYnVpbGREYXRhU2VsZWN0KGNvbGxlY3Rpb24uYnVzaW5lc3NyZWxhdGlvbl9pZHMsIGRhdGFbaXRlbV0uYnVzaW5lc3NyZWxhdGlvbl9pZHMsIHRydWUpO1xuICAgICAgLy8gICAgIGRhdGFbaXRlbV0udG9waWNfaWRzICAgICAgICAgICAgICAgICAgPSBidWlsZERhdGFTZWxlY3QoY29sbGVjdGlvbi50b3BpY19pZHMsIGRhdGFbaXRlbV0udG9waWNfaWRzLCB0cnVlKTtcbiAgICAgIC8vICAgICBkYXRhW2l0ZW1dLmV2ZW50X2ludml0YXRpb25fcmVjZWl2ZXIgID0gYnVpbGREYXRhUmFkaW8oZGF0YVtpdGVtXS5ldmVudF9pbnZpdGF0aW9uX3JlY2VpdmVyLCBcInNldHRpbmdzX2V2ZW50XCIpO1xuICAgICAgLy8gICAgIGRhdGFbaXRlbV0ucGhvbmVfcmVjZWl2ZXIgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLnBob25lX3JlY2VpdmVyLCBcInNldHRpbmdzX3Bob25lXCIpO1xuICAgICAgLy8gICAgIGRhdGFbaXRlbV0uZW1haWxfcmVjZWl2ZXIgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmVtYWlsX3JlY2VpdmVyLCBcInNldHRpbmdzX2VtYWlsXCIpO1xuICAgICAgLy8gICAgIGRhdGFbaXRlbV0uZmF4X3JlY2VpdmVyICAgICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmZheF9yZWNlaXZlciwgXCJzZXR0aW5nc19mYXhcIik7XG4gICAgICAvLyAgICAgZGF0YVtpdGVtXS5tYXNzX2VtYWlsX3JlY2VpdmVyICAgICAgICA9IGJ1aWxkRGF0YVJhZGlvKGRhdGFbaXRlbV0ubWFzc19lbWFpbF9yZWNlaXZlciwgXCJzZXR0aW5nc19tYXNzX2VtYWlsXCIpO1xuICAgICAgLy8gICAgIGRhdGFbaXRlbV0ubGV0dGVyX3JlY2VpdmVyICAgICAgICAgICAgPSBidWlsZERhdGFSYWRpbyhkYXRhW2l0ZW1dLmxldHRlcl9yZWNlaXZlciwgXCJzZXR0aW5nc19sZXR0ZXJcIik7XG4gICAgICAvLyAgICAgZGF0YVtpdGVtXS5hdHRhaW5pbmdfcHVibGljX29mZmljZSAgICA9IGJ1aWxkRGF0YVJhZGlvKGRhdGFbaXRlbV0uYXR0YWluaW5nX3B1YmxpY19vZmZpY2UsIFwic2V0dGluZ3Nfb2ZmaWNlXCIpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIHJldHVybiBkYXRhO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBkYXRhID0gdHJhbnNmb3JtKGRhdGEpO1xuXG5cbiAgICAvLyAgICAgICAgIC8vIEJVSUxEIEFQUFxuICAgIC8vICAgd2luZG93LklLVVNFSSA9IChmdW5jdGlvbiBidWlsZEFwcCAoQVBQKSB7XG4gICAgLy8gICAgIC8vOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgLy8gICAgIC8vIENPTkZJR1VSRSBDT01QT05FTlRTIC0gRFlOQVdSQVBQRVJcbiAgICAvLyAgICAgQVBQLkRZTkFXUkFQUEVSID0gKGZ1bmN0aW9uIGluaXRfZHluYXRhYmxlIChDT05UQUlORVIpIHtcbiAgICAvLyAgICAgICB2YXIgbmFtZSA9ICd2MC4wLjEvYXBpL2NvbXBvbmVudHMvRHluYVdyYXBwZXIuaHRtbCc7XG4gICAgLy8gICAgICAgLy8gSU5TVEFOVElBVEUgVEVNUExBVEVcbiAgICAvLyAgICAgICB2YXIgZHluYXRhYmxlID0gREVQcy5ob2xvbi5nZXRUZW1wbGF0ZShuYW1lKTtcbiAgICAvLyAgICAgICAvLyBTRVQgRFVNTVkgREFUQSAoaW5zdGVhZCBvZiBiYWNrZW5kIHJlbmRlcmVkIHZlcnNpb24pXG4gICAgLy8gICAgICAgLy8gZHluYXRhYmxlLmFqYXggICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgIC8vICAgICAgIC8vIGR5bmF0YWJsZS5hamF4VXJsICAgICAgICAgICAgID0gXCIvYWRtaW4vY3VzdG9tZXJzL3NlYXJjaC5qc29uXCI7XG4gICAgLy8gICAgICAgLy8gZHluYXRhYmxlLmFqYXhPbkxvYWQgICAgICAgICAgPSB0cnVlO1xuICAgIC8vICAgICAgIGR5bmF0YWJsZS5kYXRhc2V0Lmpzb24gICAgICAgID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgLy8gICAgICAgZHluYXRhYmxlLmRhdGFzZXQuY29sbGVjdGlvbiAgPSBKU09OLnN0cmluZ2lmeShjb2xsZWN0aW9uKTtcbiAgICAvLyAgICAgICBkeW5hdGFibGUuZGF0YXNldC5zY2hlbWEgICAgICA9IEpTT04uc3RyaW5naWZ5KChmdW5jdGlvbiBmaWx0ZXIoKSB7XG4gICAgLy8gICAgICAgICB2YXIgc2NoZW1hID0gc2NoZW1hO1xuICAgIC8vICAgICAgICAgLy8gcmV0dXJuIFsnJywgJ2Z1bGxuYW1lJywgJ2NvbXBhbnlfbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdhY3Rpb24nXTsgLy8gQFRPRE86IHdpdGggc2VsZWN0Ym94XG4gICAgLy8gICAgICAgICByZXR1cm4gWydmdWxsbmFtZScsICdjb21wYW55X25hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAnYWN0aW9uJ107XG4gICAgLy8gICAgICAgfSkoKSk7XG4gICAgLy8gICAgICAgLy8gUFJFUFJPQ0VTUyAtIENPTkZJR1VSRSBTQ0hFTUFcbiAgICAvLyAgICAgICBERVBzLkR5bmFXcmFwcGVyLnNldFNjaGVtYShkeW5hdGFibGUpO1xuICAgIC8vICAgICAgIC8vIElOU0VSVCBURU1QTEFURVxuICAgIC8vICAgICAgIC8vIEBUT0RPOiBSZWFsaXplIHRoZSBBUEkgYmVsb3csIHRodXM6IHJlZHVjZSBDT01QT05FTlQgQVBJXG4gICAgLy8gICAgICAgLy8gREVQcy5ob2xvbi5pbnNlcnRUZW1wbGF0ZShDT05UQUlORVIsIFRFTVBMQVRFLCBEQVRBLCBTQ0hFTUEpO1xuICAgIC8vICAgICAgIERFUHMuaG9sb24uaW5zZXJ0VGVtcGxhdGUoQ09OVEFJTkVSLCBkeW5hdGFibGUpO1xuICAgIC8vICAgICAgIC8vIENPTkZJR1VSRSBEWU5BVEFCTEVcbiAgICAvLyAgICAgICBERVBzLkR5bmFXcmFwcGVyLmluaXRUYWJsZShkeW5hdGFibGUpO1xuICAgIC8vICAgICAgIC8vIFBVQkxJU0ggRU5USVRZIElOVEVSRkFDRVxuICAgIC8vICAgICAgIHJldHVybiBkeW5hdGFibGU7XG4gICAgLy8gICAgIH0pKGNvbnRhaW5lclF1ZXJ5KTtcblxuXG4gICAgLy8gICAgIC8vOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgLy8gICAgIC8vIENPTkZJR1VSRSBDT01QT05FTlRTIC0gQ09NUExFWEZPUk1cbiAgICAvLyAgICAgQVBQLkNPTVBMRVhGT1JNID0gKGZ1bmN0aW9uIGluaXRfY29tcGxleGZvcm0gKENPTlRBSU5FUikge1xuICAgIC8vICAgICAgIHZhciBuYW1lID0gJ3YwLjAuMS9hcGkvY29tcG9uZW50cy9Db21wbGV4Zm9ybS5odG1sJztcbiAgICAvLyAgICAgICAvLyBJTlNUQU5USUFURSBURU1QTEFURVxuICAgIC8vICAgICAgIHZhciBjb21wbGV4Zm9ybSA9IERFUHMuaG9sb24uZ2V0VGVtcGxhdGUobmFtZSk7XG4gICAgLy8gICAgICAgLy8gU0VUIERVTU1ZIERBVEEgKGluc3RlYWQgb2YgYmFja2VuZCByZW5kZXJlZCB2ZXJzaW9uKVxuICAgIC8vICAgICAgIGNvbXBsZXhmb3JtLmRhdGFzZXQuanNvbiAgICA9IEpTT04uc3RyaW5naWZ5KGRhdGFbMF0pO1xuICAgIC8vICAgICAgIGNvbXBsZXhmb3JtLmRhdGFzZXQuc2NoZW1hICA9IEpTT04uc3RyaW5naWZ5KChmdW5jdGlvbiBmaWx0ZXIoKSB7XG4gICAgLy8gICAgICAgICB2YXIgc2NoZW1hID0gc2NoZW1hO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICAvLyAgICAgICAgIC8vIHJldHVybiBbJycsICdmdWxsbmFtZScsICdjb21wYW55X25hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAnYWN0aW9uJ107XG4gICAgLy8gICAgICAgfSkoKSk7XG4gICAgLy8gICAgICAgLy8gSU5TRVJUIFRFTVBMQVRFXG4gICAgLy8gICAgICAgREVQcy5ob2xvbi5pbnNlcnRUZW1wbGF0ZShDT05UQUlORVIsIGNvbXBsZXhmb3JtKTtcbiAgICAvLyAgICAgICAvLyBDT05GSUdVUkUgQ09NUExFWEZPUk1cbiAgICAvLyAgICAgICBERVBzLkNvbXBsZXhmb3JtLmluaXQoY29tcGxleGZvcm0pO1xuICAgIC8vICAgICAgIC8vIFBVQkxJU0ggRU5USVRZIElOVEVSRkFDRVxuICAgIC8vICAgICAgIHJldHVybiBjb21wbGV4Zm9ybTtcbiAgICAvLyAgICAgfSkoY29udGFpbmVyUXVlcnkpO1xuXG5cbiAgICAvLyAgICAgLy86Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAvLyAgICAgKGZ1bmN0aW9uIHdpcmVVcF9DT01QTEVYRk9STSgpIHsgLy8gKG1hcCAnY29tcG9uZW50IGV2ZW50cycgdG8gJ2NvbXBvbmVudCBhcGlzJylcbiAgICAvLyAgICAgICBBUFAuRFlOQVdSQVBQRVIuYWRkRXZlbnRMaXN0ZW5lcignQUREJywgZnVuY3Rpb24gKEVWRU5UKSB7XG4gICAgLy8gICAgICAgICBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lID0gQVBQLkNPTVBMRVhGT1JNLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgIC8vICAgICAgICAgICAnU1RBVEU9aGlkZGVuJyxcbiAgICAvLyAgICAgICAgICAgJ1NUQVRFPWNyZWF0ZSdcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgICAgICBBUFAuQ09NUExFWEZPUk0uc3R5bGUudG9wID0gRVZFTlQuZGV0YWlsLnBvc2l0aW9uICsgXCJweFwiO1xuICAgIC8vICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLkFQSS5JTlRFUkZBQ0VbJ1VTRVJfQUREJ10oRVZFTlQuZGV0YWlsLmRhdGEpO1xuICAgIC8vICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgQVBQLkRZTkFXUkFQUEVSLmFkZEV2ZW50TGlzdGVuZXIoJ1NFVCcsIGZ1bmN0aW9uIChFVkVOVCkge1xuICAgIC8vICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLmNsYXNzTmFtZSA9IEFQUC5DT01QTEVYRk9STS5jbGFzc05hbWUucmVwbGFjZShcbiAgICAvLyAgICAgICAgICAgJ1NUQVRFPWhpZGRlbicsXG4gICAgLy8gICAgICAgICAgICdTVEFURT11cGRhdGUnXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLnN0eWxlLnRvcCA9IEVWRU5ULmRldGFpbC5wb3NpdGlvbiArIFwicHhcIjtcbiAgICAvLyAgICAgICAgIEFQUC5DT01QTEVYRk9STS5BUEkuSU5URVJGQUNFWydVU0VSX1NFVCddKEVWRU5ULmRldGFpbC5kYXRhKTtcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfSkoKTtcblxuXG4gICAgLy8gICAgIC8vOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgLy8gICAgIChmdW5jdGlvbiB3aXJlVXBfRFlOQVdSQVBQRVIoKSB7IC8vIChtYXAgJ2NvbXBvbmVudCBldmVudHMnIHRvICdjb21wb25lbnQgYXBpcycpXG4gICAgLy8gICAgICAgQVBQLkNPTVBMRVhGT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ0NBTkNFTCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIC8vIFNob3VsZCBtYXliZSBoYXBwZW4gXCJjb21wbGV4Zm9ybSBpbnRlcm5hbGx5XCIgLSBAVE9ETzogSE9PSyBDQU5ESURBVEVcbiAgICAvLyAgICAgICAgIEFQUC5DT01QTEVYRk9STS5jbGFzc05hbWUgPSBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgLy8gICAgICAgICAgICdTVEFURT11cGRhdGUnLFxuICAgIC8vICAgICAgICAgICAnU1RBVEU9aGlkZGVuJ1xuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIEFQUC5DT01QTEVYRk9STS5jbGFzc05hbWUgPSBBUFAuQ09NUExFWEZPUk0uY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgLy8gICAgICAgICAgICdTVEFURT1jcmVhdGUnLFxuICAgIC8vICAgICAgICAgICAnU1RBVEU9aGlkZGVuJ1xuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9KTtcblxuICAgIC8vICAgICAgIEFQUC5DT01QTEVYRk9STS5hZGRFdmVudExpc3RlbmVyKCdTQVZFJywgZnVuY3Rpb24gKEVWRU5UKSB7XG4gICAgLy8gICAgICAgICBBUFAuRFlOQVdSQVBQRVIuQVBJLklOVEVSRkFDRVsnc2V0J10oRVZFTlQuZGV0YWlsLmRhdGEuaWQsIEVWRU5ULmRldGFpbC5kYXRhKTtcbiAgICAvLyAgICAgICAgIERFUHMuQUpBWC51cGRhdGUoRVZFTlQuZGV0YWlsLmRhdGEpO1xuICAgIC8vICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgQVBQLkNPTVBMRVhGT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ05FWFQnLCBmdW5jdGlvbiAoRVZFTlQpIHtcbiAgICAvLyAgICAgICAgIGlmIChFVkVOVC5kZXRhaWwuZGF0YSkge1xuICAgIC8vICAgICAgICAgICAvLyB2YXIgaXRlbSA9IEFQUC5EWU5BV1JBUFBFUi5BUEkuSU5URVJGQUNFWydnZXQnXShFVkVOVC5kZXRhaWwuZGF0YSsxKTtcbiAgICAvLyAgICAgICAgICAgREVQcy5BSkFYLnJlYWQoe2lkOkVWRU5ULmRldGFpbC5kYXRhKzF9LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIC8vICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgLy8gICAgICAgICAgICAgICBBUFAuQ09NUExFWEZPUk0uQVBJLklOVEVSRkFDRVsnVVNFUl9TRVQnXShKU09OLnBhcnNlKGl0ZW0pKTtcbiAgICAvLyAgICAgICAgICAgICAgIC8vIEBUT0RPOiBhY3RpdmF0ZSBQUkVWIGJ1dHRvbiBJRiBkZWFjdGl2YXRlZCAtIGltcG9ydGFudCBmb3IgRklSU1QgREFUQSBTRVRcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgLy8gQFRPRE86IGRlYWN0aXZhdGUgTkVYVCBidXR0b24gLSBpbXBvcnRhbnQgZm9yIExBU1QgREFUQSBTRVRcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9KTtcblxuICAgIC8vICAgICAgIEFQUC5DT01QTEVYRk9STS5hZGRFdmVudExpc3RlbmVyKCdQUkVWJywgZnVuY3Rpb24gKEVWRU5UKSB7XG4gICAgLy8gICAgICAgICBpZiAoRVZFTlQuZGV0YWlsLmRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBBUFAuRFlOQVdSQVBQRVIuQVBJLklOVEVSRkFDRVsnZ2V0J10oRVZFTlQuZGV0YWlsLmRhdGEtMSk7XG4gICAgLy8gICAgICAgICAgIERFUHMuQUpBWC5yZWFkKHtpZDpFVkVOVC5kZXRhaWwuZGF0YS0xfSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgIC8vICAgICAgICAgICAgICAgQVBQLkNPTVBMRVhGT1JNLkFQSS5JTlRFUkZBQ0VbJ1VTRVJfU0VUJ10oSlNPTi5wYXJzZShpdGVtKSk7XG4gICAgLy8gICAgICAgICAgICAgICAvLyBAVE9ETzogYWN0aXZhdGUgTkVYVCBidXR0b24gSUYgZGVhY3RpdmF0ZWQgLSBpbXBvcnRhbnQgZm9yIExBU1QgREFUQSBTRVRcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgLy8gQFRPRE86IGRlYWN0aXZhdGUgUFJFViBidXR0b24gLSBpbXBvcnRhbnQgZm9yIEZJUlNUIERBVEEgU0VUXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0pKCk7XG5cbiAgICAvLyAgICAgLy86Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAvLyAgICAgLy8gREVQTE9ZIEFQUFxuICAgIC8vICAgICByZXR1cm4gQVBQO1xuICAgIC8vICAgfSkoe30pO1xuXG4gICAgICBcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUExBVEVTIEJBU0UgQVBJICNcblxuICAgIC8vICAgIyBCQVNFIEFQSVxuICAgIC8vICAgICAjIGJpbmQoaHRtbDpIVE1Mc3RyaW5nfFN0cmluZ3xGaWxlbmFtZSwgZGF0YTpKU09OfFN0cmluZywgbWFwKVxuICAgIC8vICAgICAgICMgPT4gcmVzdWx0IG9mIDxodG1sPiBtZXJnZWQgd2l0aCA8ZGF0YT5cbiAgICAvLyAgICAgICAjID0+IGluc2VydHMgYWxsIHZhbHVlcyBvZiBkYXRhW2tleV0gaW50byB0YWcgd2l0aCBhbiBhdHRyaWJ1dGUgdmFsdWUgb2Yga2V5XG4gICAgLy8gICAgICAgICAjIGh0bWwgLSBzdHJpbmcgb2Ygd2VsbC1mb3JtZWwgSFRNTFxuICAgIC8vICAgICAgICAgIyBkYXRhIC0gSlNPTlxuICAgIC8vICAgICAgICAgIyBtYXAgIC0gZGF0YSBtYXBwaW5nIGZvciB0aGUgcGFydGlhbCAoaW5zdGFuY2Ugb2YgUGxhdGVzLk1hcCgpKVxuXG4gICAgLy8gICAgICMgd2hlcmUoYXR0cmlidXRlOlN0cmluZylcbiAgICAvLyAgICAgICAjID0+IFRBRyA8YXR0cmlidXRlPiB0byBtYXRjaCBvbiAob21pdDogZGVmYXVsdHMgdG8gXCJpZFwiKVxuICAgIC8vICAgICAjIGhhcyh2YWx1ZTpTdHJpbmd8UmVnRXhwKVxuICAgIC8vICAgICAgICMgPT4gVEFHIGF0dHJpYnV0ZSBjb250YWlucyA8dmFsdWU+IHRvIG1hdGNoIG9uXG4gICAgLy8gICAgICMgYXMoYXR0cmlidXRlOlN0cmluZylcbiAgICAvLyAgICAgICAjID0+IFRBRyA8YXR0cmlidXRlPiB0byByZXBsYWNlIGludG9cbiAgICAvLyAgICAgIyB1c2Uoa2V5OlN0cmluZ3xGdW5jdGlvbilcbiAgICAvLyAgICAgICAjID0+IEpTT04gPGtleT4gd2hpY2hzIHZhbHVlIHRoZSBUQUdzIGlubmVySFRNTCBpcyBzZXQgdG9cbiAgICAvLyAgICAgICAjICAgICh0eXBlb2Yga2V5ID09PSdmdW5jdGlvbicpID8ga2V5KGRhdGEsIHZhbHVlLCB0YWdib2R5KVxuICAgIC8vICAgICAjIGluc2VydChrZXk6U3RyaW5nKVxuICAgIC8vICAgICAgICMgPT4gSlNPTiA8a2V5PiB3aGljaHMgdmFsdWUgdGhlIFRBRyBhdHRyaWJ1dGUgaXMgc2V0IHRvXG5cbiAgICAvLyAgICAgIyByZW1vdmUoKVxuICAgIC8vICAgICAgICMgPT4gTWF0Y2hlZCBUQUcgaXMgcmVtb3ZlZCBmcm9tIHRlbXBsYXRlXG4gICAgLy8gICAgICMgcGFydGlhbChodG1sOkhUTUxzdHJpbmd8U3RyaW5nfEZpbGVuYW1lLCBkYXRhOkpTT058U3RyaW5nLCBtYXApXG4gICAgLy8gICAgICAgIyA9PiA/Pz9cbiAgICAvLyAgICAgICAgICMgaHRtbCAtIG5ldyB0ZW1wbGF0ZSB0byBiZSBhZGRlZCB8IGlkIG9mIERPTSBub2RlIHdoaWNocyBpbm5lckhUTUwgaXMgdGhlIHRlbXBsYXRlXG4gICAgLy8gICAgICAgICAjICAgICAgICAgfCBpbiBub2RlanMgYSByZWxhdGl2ZSBwYXRoIHRvIGZpbGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGVcbiAgICAvLyAgICAgICAgICMgZGF0YSAtIEpTT04gfCBrZXkgZm9yIEpTT04gb2YgbWFpbiB0ZW1wbGF0ZVxuICAgIC8vICAgICAgICAgIyBtYXAgIC0gZGF0YSBtYXBwaW5nIGZvciB0aGUgcGFydGlhbCAoaW5zdGFuY2Ugb2YgUGxhdGVzLk1hcCgpKVxuXG4gICAgLy8gICAjIFNZTlRBQ1RJQyBTVUdBUlxuICAgIC8vICAgICAjIGlzKGF0dHJpYnV0ZTpTdHJpbmcpXG4gICAgLy8gICAgICAgIyA9PT0gaGFzKC9eYXR0cmlidXRlJC8pXG4gICAgLy8gICAgICMgY2xhc3MoY2xhc3NuYW1lOlN0cmluZyksXG4gICAgLy8gICAgICMgY2xhc3NOYW1lKGNsYXNzbmFtZTpTdHJpbmcpXG4gICAgLy8gICAgICAgIyA9PT0gd2hlcmUoJ2NsYXNzJykuaXMoY2xhc3NuYW1lKVxuICAgIC8vICAgICAgICMgPT09IHdoZXJlKCdjbGFzcycpLmhhcygvXmNsYXNzbmFtZSQvKVxuICAgIC8vICAgICAjIHRvKGtleTpTdHJpbmcpXG4gICAgLy8gICAgICAgIyA9PT0gdXNlKGtleSlcbiAgICAvLyAgICAgIyBhcHBlbmQoaHRtbDpIVE1Mc3RyaW5nfFN0cmluZ3xGaWxlbmFtZSwgZGF0YTpKU09OfFN0cmluZywgbWFwKVxuICAgIC8vICAgICAgICMgPT09IHBhcnRpYWwoaHRtbCwgZGF0YSwgbWFwKVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIHZhciBQbGF0ZXMgICAgPSBERVBzLmhvbG9uLnBsYXRlcztcbiAgICB2YXIgaG9sb25pemUgID0gREVQcy5ob2xvbi5ob2xvbml6ZTtcbiAgICB2YXIgZHVtbXkxICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVtbXkxLnNldEF0dHJpYnV0ZSgnaWQnLCAnTEVBRCcpO1xuICAgIHZhciBkdW1teTIgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdW1teTIuc2V0QXR0cmlidXRlKCdpZCcsICdSRVNVTFQnKTtcbiAgICB2YXIgZHVtbXkzICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVtbXkzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIHZhciBkdW1teTQgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdW1teTQuc2V0QXR0cmlidXRlKCdpZCcsICdERVZFTE9QX01PREUnKTtcblxuICAgIHZhciBDT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJytTVEFURS5wYXJhbXMuY29udGFpbmVySUQpO1xuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChkdW1teTEpO1xuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChkdW1teTIpO1xuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChkdW1teTMpO1xuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChkdW1teTQpO1xuXG4gICAgYnVpbGRMZWFkU2hhcmVBcHBGcm9udGVuZCgpO1xuICAgIGxlYXJuUGxhdGVzKCk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIGJ1aWxkTGVhZFNoYXJlQXBwRnJvbnRlbmQgKCkge1xuICAgICAgdmFyIHRlbXBsYXRlSW5kZXggICAgID0gcmVxdWlyZSgnLi9pbmRleC50ZW1wbGF0ZS5odG1sJyk7XG4gICAgICB2YXIgdGVtcGxhdGVDYW1wYWlnbiAgPSByZXF1aXJlKCcuL2NhbXBhaWduLnRlbXBsYXRlLmh0bWwnKTtcbiAgICAgIHZhciBtYXBwaW5nQ2FtcGFpZ25zICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIHZhciBtYXBwaW5nSW5kZXggICAgICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIC8vIC8vIFBsYXRlcyBjYW4gYWxzbyBpdGVyYXRlIHRocm91Z2ggY29sbGVjdGlvbnM6XG5cbiAgICAgIG1hcHBpbmdDYW1wYWlnbnMud2hlcmUoJ2RhdGEtYmluZCcpLmlzKCd0aXRsZScpLnVzZSgndGl0bGUnKTtcbiAgICAgIG1hcHBpbmdDYW1wYWlnbnMud2hlcmUoJ2RhdGEtYmluZCcpLmlzKCdsb2NhdGlvbicpLnVzZSgnbG9jYXRpb24nKTtcbiAgICAgIG1hcHBpbmdJbmRleC5jbGFzc05hbWUoJ2NhbXBhaWducycpLnBhcnRpYWwodGVtcGxhdGVDYW1wYWlnbiwgU1RBVEUucGFyYW1zLmNhbXBhaWducywgbWFwcGluZ0NhbXBhaWducyk7XG5cbiAgICAgIHZhciBNQUlOID0gUGxhdGVzLmJpbmQodGVtcGxhdGVJbmRleCwge30sIG1hcHBpbmdJbmRleCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTEVBRCcpLmlubmVySFRNTCA9IE1BSU47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVhcm5QbGF0ZXMgKCkge1xuICAgICAgLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHZhciB0ZW1wbGF0ZV9tYWluID0gJyAgPGRpdiBpZD1cImV4YW1wbGUyXCI+XFxcbiAgICAgIC8vICAgPGRpdj48aDEgY2xhc3M9XCJmb29cIj48L2gxPjx1bCBjbGFzcz1cIm1lbnVcIj48L3VsPjwvZGl2PlxcXG4gICAgICAvLyA8L2Rpdj4nXG4gICAgICAvLyB2YXIgdGVtcGxhdGVfc3ViICA9ICAgJzxkaXYgaWQ9XCJleGFtcGxlMVwiPlxcXG4gICAgICAvLyAgIDxsaSBjbGFzcz1cInBhcnRpYWxcIj50ZXN0PC9saT5cXFxuICAgICAgLy8gPC9kaXY+J1xuICAgICAgLy8gICB2YXIgZGF0YSAgICAgICAgICA9IHsgZm9vOiAnYmFyJyB9O1xuICAgICAgLy8gICB2YXIgbWFwICAgICAgICAgICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIC8vICAgbWFwLmNsYXNzKCdtZW51JykucGFydGlhbCh0ZW1wbGF0ZV9zdWIpO1xuICAgICAgLy8gICBtYXAuY2xhc3MoJ2ZvbycpLnBhcnRpYWwoZGF0YS5mb28pO1xuICAgICAgLy8gICB2YXIgcmVzdWx0ID0gUGxhdGVzLmJpbmQodGVtcGxhdGVfbWFpbiwgZGF0YSwgbWFwKVxuICAgICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgIC8vIH1cblxuXG4gICAgICAvLyBSRVNVTFQgLSBURVNUXG4gICAgICB2YXIgdGVtcGxhdGVfU1VCMSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL1NVQjEudGVtcGxhdGUuaHRtbCcpO1xuICAgICAgdmFyIHRlbXBsYXRlX1NVQjIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9TVUIyLnRlbXBsYXRlLmh0bWwnKTtcbiAgICAgIHZhciB0ZW1wbGF0ZV9TVUIzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvU1VCMy50ZW1wbGF0ZS5odG1sJyk7XG4gICAgICB2YXIgdGVtcGxhdGVfU1VCNCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL1NVQjQudGVtcGxhdGUuaHRtbCcpO1xuICAgICAgdmFyIHRlbXBsYXRlX1NVQjUgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9TVUI1LnRlbXBsYXRlLmh0bWwnKTtcbiAgICAgIHZhciB0ZW1wbGF0ZV9NQUlOID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvTUFJTi50ZW1wbGF0ZS5odG1sJyk7XG5cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICB2YXIgZGF0YV9TVUI1ICAgICAgID0geyBuYW1lMjogWydMb3VpcyBDSycsICdBbmR5IEtpbmRsZXInLCAnR3JlZyBHaXJhbGRvJywgJ2FzZGYnXSB9O1xuICAgICAgdmFyIGRhdGFfU1VCNCAgICAgICA9IHsgdGVzdDogJ0luIGFkZGl0aW9uLCBpdCBjb250YWlucyBjb250ZW50J307XG4gICAgICB2YXIgZGF0YV9NQUlOICAgICAgID0ge1xuICAgICAgICB1c2VyOiAgICAgICBcIkNoYXJseSBKb2huIFNtaXRoXCIsXG4gICAgICAgIGltYWdldXJsOiAgIFwiaHR0cDovL3NoYXVueW5ld3MuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA0L2Z1bm55LXBvcHVsYXItZnVubnktcGljdHVyZXMtd2l0aC1jYXB0aW9ucy00LTQ0LXBvcHVsYXItZnVubnktcGljdHVyZXMtd2l0aC1jYXB0aW9ucy5qcGdcIixcbiAgICAgICAgbmV3dXJsOiAgICAgXCJodHRwOi8vd3d3LmFzZGYuY29tXCIsXG4gICAgICAgIG5ld3VybDI6ICAgIFwiYmF6elwiLFxuICAgICAgICBtYWluX0E6ICAgICAgUGxhdGVzLmJpbmQodGVtcGxhdGVfU1VCNCwgZGF0YV9TVUI0KSxcbiAgICAgICAgbGlzdF9BOiAgICAgIFBsYXRlcy5iaW5kKHRlbXBsYXRlX1NVQjUsIGRhdGFfU1VCNSlcbiAgICAgIH07XG4gICAgICB2YXIgZGF0YV9TVUIgICAgICAgID0ge1xuICAgICAgICBib2luazogICAgICBcIj09IGkgYW0gaW5zZXJ0ZWQgY29udGVudCBvZiB0aGUgc3VidGVtcGxhdGUgPT1cIlxuICAgICAgfTtcbiAgICAgIHZhciBkYXRhX1NVQjIgICAgICAgPSBbXG4gICAgICAgIHsgbmFtZTogJ0xvdWlzIENLJ30sXG4gICAgICAgIHsgbmFtZTogJ0FuZHkgS2luZGxlcid9LFxuICAgICAgICB7IG5hbWU6ICdHcmVnIEdpcmFsZG8nfVxuICAgICAgXTtcbiAgICAgIHZhciBkYXRhX1NVQjMgICAgICAgPSB7IG5hbWU6IFsnTG91aXMgQ0snLCAnQW5keSBLaW5kbGVyJywgJ0dyZWcgR2lyYWxkbycsICdhc2RmJ10gfTtcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICB2YXIgbWFwcGluZ19NQUlOICAgID0gUGxhdGVzLk1hcCgpO1xuICAgICAgdmFyIG1hcHBpbmdfU1VCICAgICA9IFBsYXRlcy5NYXAoKTtcbiAgICAgIHZhciBtYXBwaW5nX1NVQjIgICAgPSBQbGF0ZXMuTWFwKCk7XG4gICAgICB2YXIgbWFwcGluZ19TVUIzICAgID0gUGxhdGVzLk1hcCgpO1xuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIDEuIFNJTVBMRSAtIGlubmVySFRNTCBSRVBMQUNFTUVOVCB3aXRob3V0IE1BUFBJTkcgUlVMRVNcbiAgICAgICAgLy8gSElOVDogd2lsbCBvbmx5IHdvcmsgaWYgbm8gTUFQUElORyBSVUxFUyBBUkUgR0lWRU4gLSBvdGhlcndpc2UgRVhQTElDSVQgTUFQUElORyBuZWVkcyB0byBiZSBnaXZlbiAoZS5nLiAjKDEuKSlcbiAgICAgIC8vIEJ5IGRlZmF1bHQsIHBsYXRlcyB3aWxsIHRyeSB0byBtYXRjaCB0aGUga2V5XG4gICAgICAvLyBpbiB0aGUgZGF0YSB0byBhbiBpZCAobWU6YXR0cmlidXRlKSBpbiB0aGUgdGFnLCBzaW5jZSBib3RoIHNob3VsZCBiZSB1bmlxdWUuXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2RhdGEtYmluZCcpLmlzKCduYW1lJykudXNlKCd1c2VyJyk7IC8vICgxLilcbiAgICAgIC8vIDIuIFNJTVBMRSBNYXBwaW5nXG4gICAgICAvLyAvLyBJbiBldmVuIG1vcmUgY29tcGxleCBjYXNlcywgYW4gYXJiaXRyYXJ5IGF0dHJpYnV0ZSBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAgLy8gLy8gSWYgYSB2YWx1ZSBpcyBtYXRjaGVkLCBhIHNwZWNpZmljIHZhbHVlIGNhbiBiZSB1c2VkXG4gICAgICAvLyAvLyBhbmQgdGhlbiB1c2VkIGFzIGFub3RoZXIgYXR0cmlidXRlJ3MgdmFsdWUuXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2RhdGEtZm9vJykuaXMoJ2JhcicpLnVzZSgnaW1hZ2V1cmwnKS5hcygnc3JjJyk7IC8vICgyLilcbiAgICAgIC8vIDMuIFNJTVBMRSBSRVBMQUNFIE1hcHBpbmdcbiAgICAgIC8vIC8vIENPTVBMRVggSU5TVFJVQ1RJT05TXG4gICAgICAvLyAvLyBBbm90aGVyIGNvbW1vbiBjYXNlIGlzIHRvIHJlcGxhY2UgdGhlIHZhbHVlXG4gICAgICAvLyAvLyBvZiBhbiBhdHRyaWJ1dGUgaWYgaXQgaXMgYSBtYXRjaC5cbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgncGxhY2Vob2xkZXInKS5pcygnLycpLmluc2VydCgnbmV3dXJsJyk7IC8vICgzLilcbiAgICAgIC8vIDQuIFBBUlRJQUwgUkVQTEFDRSBNYXBwaW5nXG4gICAgICAvLyAvLyBQYXJ0aWFsIHZhbHVlIHJlcGxhY2VtZW50XG4gICAgICAvLyAvLyBgaGFzYCBjYW4gdGFrZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgncGxhY2Vob2xkZXInKS5oYXMoL2Jhci8pLmluc2VydCgnbmV3dXJsMicpOyAvLyAoNC4pXG4gICAgICAvLyA1LiBFWFBMSUNJVCBJTlNUUlVDVElPTlNcbiAgICAgIC8vIC8vIEEgY29tbW9uIHVzZSBjYXNlIGlzIHRvIGFwcGx5IHRoZSBuZXcgdmFsdWVcbiAgICAgIC8vIC8vIHRvIGVhY2ggdGFnJ3MgYm9keSBiYXNlZCBvbiB0aGUgY2xhc3MgYXR0cmlidXRlLlxuICAgICAgLy8gQVJSQVkgTWFwcGluZyAxXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2NsYXNzJykuaXMoJ25hbWUnKS51c2UoJ3VzZXInKTsgLy8gKDUuKVxuICAgICAgLy8gNi4gUEFSVElBTCAvIEFQUEVORCAtIHVzaW5nIFNVQiBURU1QTEFURVNcbiAgICAgIG1hcHBpbmdfU1VCLmNsYXNzTmFtZSgndHJvbGxpbmcnKS50bygnYm9pbmsnKTsgLy8gKDYuKVxuICAgICAgbWFwcGluZ19NQUlOLmNsYXNzTmFtZSgnaW5zZXJ0X3N1YnRlbXBsYXRlJykucGFydGlhbCh0ZW1wbGF0ZV9TVUIxLCBkYXRhX1NVQiwgbWFwcGluZ19TVUIpOyAvLyAoNi4pXG4gICAgICAvLyA3LiBDT0xMRUNUSU9OXG4gICAgICAvLyAvLyBQbGF0ZXMgY2FuIGFsc28gaXRlcmF0ZSB0aHJvdWdoIGNvbGxlY3Rpb25zOlxuICAgICAgbWFwcGluZ19TVUIyLndoZXJlKCdkYXRhLWJpbmQnKS5pcygnbmFtZScpLnVzZSgnbmFtZScpO1xuICAgICAgbWFwcGluZ19NQUlOLmNsYXNzTmFtZSgnaW5zZXJ0X2NvbGxlY3Rpb25BJykucGFydGlhbCh0ZW1wbGF0ZV9TVUIyLCBkYXRhX1NVQjIsIG1hcHBpbmdfU1VCMik7IC8vICg3LilcblxuICAgICAgLy8gOC4gQVJSQVlcbiAgICAgIG1hcHBpbmdfU1VCMy53aGVyZSgnZGF0YS1iaW5kJykuaXMoJ25hbWUnKS51c2UoJ25hbWUnKTtcbiAgICAgIG1hcHBpbmdfTUFJTi5jbGFzc05hbWUoJ2luc2VydF9BUlJBWScpLnBhcnRpYWwodGVtcGxhdGVfU1VCMywgZGF0YV9TVUIzLCBtYXBwaW5nX1NVQjMpOyAvLyAoOC4pXG4gICAgICAvLyA5LiBTVUJURU1QTEFUSU5HIGEuay5hIFBBUlRJQUxTXG4gICAgICAvLyAvLyBQbGF0ZXMgYWxzbyBzdXBwb3J0cyBwYXJ0aWFsczpcbiAgICAgIG1hcHBpbmdfTUFJTi53aGVyZSgnaWQnKS5pcygnbWFpbicpLnVzZSgnbWFpbl9BJyk7IC8vICg5LikgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IHdoeSBpcyBpdCBvdXRzaWRlIHRoZSByZWQgY29udGFpbmVyPz8/XG4gICAgICAvLyAxMC4gQVJSQVkgd2l0aCBCSU5EXG4gICAgICBtYXBwaW5nX01BSU4ud2hlcmUoJ2NsYXNzJykuaXMoJ2xpc3QnKS51c2UoJ2xpc3RfQScpOyAvLyAoMTAuKSAgICAgICAgICAgICAgIC8vIEBUT0RPOiB3aHkgaXMgaXQgb3V0c2lkZSB0aGUgcmVkIGNvbnRhaW5lcj8/P1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEBUT0RPOiBDcmVhdGUgYW4gYXR0cmlidXRlIGlmIG5vdCBwcmVzZW50XG4gICAgICB2YXIgIFJFU1VMVCA9IFBsYXRlcy5iaW5kKHRlbXBsYXRlX01BSU4sIGRhdGFfTUFJTiwgbWFwcGluZ19NQUlOKTtcbiAgICAgIC8vIE5PVCBJTiBVU0VcbiAgICAgIC8vICAgdmFyIGRhdGEgPSB7XG4gICAgICAvLyAgICAgXCJhZGRyZXNzXCI6IFwiaHR0cDovL2dpdGh1Yi5jb20vaGlqMW54XCIsXG4gICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0aHViXCJcbiAgICAgIC8vICAgfTtcbiAgICAgIC8vICAgbWFwLndoZXJlKCdjbGFzcycpLmlzKCdsaW5rJykudXNlKCdhZGRyZXNzJykuYXMoJ2hyZWYnKTtcbiAgICAgIC8vICAgbWFwLndoZXJlKCdjbGFzcycpLmlzKCdsaW5rJykudXNlKCduYW1lJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1JFU1VMVFwiKS5pbm5lckhUTUwgPSBSRVNVTFQ7XG4gICAgfVxuICB9LFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBVU0VSIElOVEVSQUNUSU9OIEVWRU5UUyAmIEhBTkRMRVJcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PRFVMRSBTUEVDSUZJQyBIRUxQRVJTXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBQVUJMSUMgRU5USVRZIEFQSSAtIFNFVCBNT0RVTEUgRU5USVRZIERFRkFVTFQgSU5URVJGQUNFXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICBhcGkgPSAgICAgICB7XG4gICAgICAgICAgICAgIFNUQVJUICAgICA6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgREFUQSAgICAgICAgICA9IFNUQVRFLnBhcmFtcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgU0NIRU1BICAgICAgICA9IFNUQVRFLnBhcmFtcy5zY2hlbWEsXG4gICAgICAgICAgICAgICAgICBDT0xMRUNUSU9OICAgID0gU1RBVEUucGFyYW1zLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBDT05UQUlORVIgICAgID0gU1RBVEUucGFyYW1zLmNvbnRhaW5lcklELFxuICAgICAgICAgICAgICAgICAgVFJBTlNMQVRJT05TICA9IFNUQVRFLnBhcmFtcy50cmFuc2xhdGlvbnNcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNUQVJUIChEQVRBLCBUUkFOU0xBVElPTlMsIFNDSEVNQSwgQ09MTEVDVElPTiwgQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBDT05GSUdVUkUge3tNT0RVTEVOQU1FfX0gQ09NUE9ORU5UICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAgIENPTkZJR1VSRSA6IGZ1bmN0aW9uIGNvbmZpZ3VyZSAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IHRoaW5rIGFib3V0ICdzaW5nbGV0b24nIGFuZCAnZHJvcGluJyBoZXJlXG4gICAgICAgICAgICAgICAgICAvLyBAVE9ETzogVGhlIGNvbXBvbmVudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICBDT05GSUdVUkUgc2hvdWxkIGRvIG5vdGhpbmcgYW5kIFNUQVJUKCkgc2hvdWxkIGJlIGV4ZWN1dGVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhcGkuQ09ORklHVVJFO1xuICAgICAgICAgICAgICAgICAgU1RBVEUucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgIENVU1RPTUlaRSAtIG1vZHVsZSBpbnRlcmZhY2UsIGludGVybmFscyAmIENPTkZJR1VSQVRJT05cbiAgICAgICAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgICAgICAgLy8ganVzdCBDT05GSUdVUkUgc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAvLyBvciBzZXQgb3RoZXIgYXBpLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgIC8vIG9yIHJldHVybiBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBzb21lIGdsb2JhbCBzdHVmZlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA7XG4gICAgICAgICAgYXBpLmlkID0gRU5USVRJRVMucHVzaChhcGkpO1xuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgUFVCTElDIEFQSSBFWFBPUlRcblxuICAgICAgICAgICAgICBASk9COiBtYWtlIElOSVQvQ09ORklHVVJFIGFuZCBTVEFSVCBvbmUgbWV0aG9kIHdpdGggbWFueSBwYXJhbXNcbiAgICAgICAgICAgICAgQEpPQjogbWFrZSBtb2R1bGUgQ09ORklHVVJFIGEgY29uc3RydWN0b3Igb3B0aW9uXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgIC8vIFtPcHRpb25hbF0gQ09ORklHVVJFIHRoaXMgbW9kdWxlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgLy8gYXBpLkNPTkZJR1VSRSh7fSk7IC8vIHByb3ZpZGUgb3B0aW9uYWwgc2V0dGluZ3MgYXJndW1lbnRcbiAgICAgICAgICByZXR1cm4gRU5USVRJRVNbYXBpLmlkLTFdO1xuICAgICAgICB9KSh7fSlcbiAgICAgIDtcbiAgICAgIE1PRFVMRS5DT05UUkFDVCA9IENPTlRSQUNUO1xuICAgICAgcmV0dXJuIE1PRFVMRTtcbiAgICB9XG4gICAgTU9EVUxFTkFNRV9BUEkuQ09OVFJBQ1QgPSBDT05UUkFDVDtcbiAgICByZXR1cm4gTU9EVUxFTkFNRV9BUEk7XG4gIH0pKFxuICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgIE1PRFVMRSBDT05URVhUXG4gIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBDT05UUkFDVFxuXG4gICAgICBASk9CIC0gaHR0cDovL3d3dy4yYWxpdHkuY29tLzIwMTIvMTAvamF2YXNjcmlwdC1wcm9wZXJ0aWVzLmh0bWxcbiAgICAgICAgKHVzZSB0byBjcmVhdGUgdGhlIHN0dWZmIGJlbG93KVxuXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAge1xuICAgICAgTkFNRSAgICAgIDogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykubmFtZSxcbiAgICAgIFZFUlNJT04gICA6ICd2JyArIHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gICAgICBWQUxJREFURSAgOiBmdW5jdGlvbiBWQUxJREFURSAocGFyYW1zKSB7XG4gICAgICAgIHJlcXVpcmUoJy4vQ09OVFJBQ1QuanMnKShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGdlbmVyYXRlRGF0YSAgOiBnZW5lcmF0ZURhdGEsXG4gICAgICAvLyBTQ0hFTUEgICAgICAgIDogU0NIRU1BLFxuICAgICAgLy8gZ2V0VHlwZXMgICAgICA6IGdldFR5cGVzLFxuICAgICAgLy8gZ2V0VmFsaWRhdG9ycyA6IGdldFZhbGlkYXRvcnMsXG4gICAgICAvLyBnZXRTYW1wbGVzICAgIDogZ2V0U2FtcGxlc1xuICAgIH0sXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBTRVQgT0YgTU9EVUxFIElOU1RBTkNFUyAtIG9ubHkgMSBpZiBzaW5nbGV0b25cblxuICAgICAgQEpPQjogc2luZ2xldG9uIHZzIGZhY3RvcnlcbiAgICAgIFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIFtdLFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgREVQRU5ERU5DWSBUUkVFXG5cbiAgICAgICAgQEpPQiAtIGh0dHA6Ly93d3cuMmFsaXR5LmNvbS8yMDEyLzEwL2phdmFzY3JpcHQtcHJvcGVydGllcy5odG1sXG4gICAgICAgICAgKHVzZSB0byBjcmVhdGUgdGhlIHN0dWZmIGJlbG93KVxuXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgKGZ1bmN0aW9uIERFUEVOREVOQ0lFUyAoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAgIEVYVEVSTkFMIERFUEVOREVOQ0lFUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3RoZXJzIGxlZ29zKVxuICAgICAgICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgICAgICBob2xvbiA6IHJlcXVpcmUoJ2hvbG9uJyksXG4gICAgICAgIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgICAgSU5URVJOQUwgREVQRU5ERU5DSUVTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobXkgbGVnb3MpXG4gICAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgICAgICAgLy8gbm9uZVxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIGUuZy4gSU5URVJOQUwgTU9EVUxFIC0gbmFtZU9mSW50ZXJuYWxNb2R1bGUxXG4gICAgICAgICAgKGNvcHkgc3RydWN0dXJlIG9mIHRoaXMgZmlsZSlcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIH07XG4gICAgfSkoKVxuICApXG4gIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4pO1xuLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuIiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMDA7XCI+XFxuPCEtLSAgIDxzcGFuPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2FiM2E2NmRmNDU0Mjg3NTIucG5nXCI+PC9zcGFuPlxcbiAgPHNwYW4+PGltZyBzcmM9XCIuLi9hc3NldHMvY2RhOTQwNmJjNzU1ZDc3NS5wbmdcIj48L3NwYW4+IC0tPlxcbiAgPGgyPkNhbXBhaWduczwvaDI+PGJyPjxicj5cXG4gIDxkaXYgY2xhc3M9XCJjYW1wYWlnbnNcIj5cXG4gICAgPHA+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9wPlxcbiAgPC9kaXY+XFxuICA8aHI+XFxuICA8ZGl2IGNsYXNzPVxcJ0xlYWQgTGVhZC0tVkFSSUFOVD1zbG92ZW5pYVxcJz4gRXhhbXBsZVxcbiAgICA8ZGl2IGNsYXNzPVwiTGVhZF9fbG9jYXRpb25tYXBcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDwhLS0gPGRpdj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJidXNzaW5lc3NjYXJkXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJmbGlwXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImZyb250XCI+ICAgICAgIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPiAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48c3BhbiBjbGFzcz1cImZhdFwiPkU8L3NwYW4+PHNwYW4gY2xhc3M9XCJza2lubnlcIj5LPC9zcGFuPjwvZGl2PiAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWV0cm9kdWN0aW9uXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+RWR1YXJkIEtvc2lja3k8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvZHVjdGlvblwiPkEgRnJvbnQgRW5kIERldmVsb3BlcjwvZGl2PlxcbiAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+ICAgICAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlYnNpdGVcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1lYXJ0aFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPnd3dy5lZHVhcmRrb3NpY2t5Lm1lPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR3aXR0ZXJcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1zb2NpYWwtdHdpdHRlclwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkBlZHVhcmRrb3NpY2t5PC9hPiBcXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaG9uZSBcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1pb3M3LXRlbGVwaG9uZVwiPjwvc3Bhbj4gXFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4wMTE4IDk5OSA3MjUzPC9hPiBcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbCBcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlvbi1wYXBlci1haXJwbGFuZVwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPmVkdWFyZEBrb3NpY2t5Lm1lPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVwidG9vbHRpcFwiPlxcbiAgICA8cD5cXG4gICAgICBIb3ZlciBvdmVyIHRoZSBjYXJkIHRvIHNlZSB0aGUgYmFjay5cXG4gICAgPC9wPlxcbiAgICA8L3NlY3Rpb24+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfTUFJTlwiPlxcbiAgPGRpdiBkYXRhLWJpbmQ9XCJuYW1lXCI+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9kaXY+XFxuICA8aW1nIGRhdGEtZm9vPVwiYmFyXCI+PGJyPlxcbiAgPGlucHV0IHBsYWNlaG9sZGVyPVwiL1wiPlNjaG9vYmlkb288L2lucHV0Pjxicj5cXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj1cIi9mb28vYmFyXCI+U2Nob29iaWRvbzEyMzwvaW5wdXQ+PGJyPjxicj5cXG4gIDxoMj5Vc2VybGlzdDwvaDI+XFxuICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5Vc2VyPC9zcGFuPi4uLjxzcGFuIGNsYXNzPVwibmFtZVwiPlVzZXI8L3NwYW4+PGJyPjxicj5cXG4gIDxkaXYgY2xhc3M9XCJpbnNlcnRfc3VidGVtcGxhdGVcIj5cXG4gICAgPHA+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9wPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiaW5zZXJ0X2NvbGxlY3Rpb25BXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+XFxuICAgIDxwPl9fTk9UX1NIT1dOX0JFQ0FVU0VfUkVQTEFDRURfXzwvcD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImluc2VydF9BUlJBWVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1wiPlxcbiAgICA8cD5fX05PVF9TSE9XTl9CRUNBVVNFX1JFUExBQ0VEX188L3A+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJpbnNlcnRfU1VCVEVNUExBVEVcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGdyZWVuO1wiPlxcbiAgICA8aDE+IFNVQlRFTVBMQVRJTkcgd2l0aCBCSU5EIDwvaDE+PGgzPlRoaXMgaXMgdGhlIG1haW4gdGVtcGxhdGUuPC9oMz48ZGl2IGlkPVwibWFpblwiPjwvZGl2PjxoMz5UaGUgRW5kLjwvaDM+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb29cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGJsdWU7XCI+XFxuICAgIDxoMj4gQVJSQVkgRDwvaDI+XFxuICAgIDxkaXY+XFxuICAgICAgPHVsIGNsYXNzPVwibGlzdFwiPjwvdWw+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz5IZWxsbyBXb3JsZDwvaDM+XFxuICAgICAgICA8cD5DXCJsaVwiY2sgdGhlIGZvbGxvd2luZyBidXR0b24uPC9wPlxcbiAgICAgICAgPHNwYW4+IEdvIGJhY2s8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCMVwiPlxcblx0PGRpdiBjbGFzcz1cInRyb2xsaW5nXCI+PC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCMlwiPlxcbiAgPGRpdj5cXG4gICAgPGgyPiBDT0xMRUNUSU9OIEE8L2gyPlxcbiAgICA8dWw+PGxpIGRhdGEtYmluZD1cIm5hbWVcIj5SRVBMQUNFPC9saT48L3VsPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxoMz5IZWxsbyBXb3JsZDwvaDM+XFxuICAgICAgPHA+UHJlc3MgdGhlIGZvbGxvd2luZyBidXR0b24uPC9wPlxcbiAgICAgIDxzcGFuPkdvIGJhY2s8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCM1wiPlxcbiAgPGRpdj5cXG4gICAgPGgyPiBBUlJBWSBCPC9oMj5cXG4gICAgPHVsPjxsaSBkYXRhLWJpbmQ9XCJuYW1lXCI+UkVQTEFDRTwvbGk+PC91bD5cXG4gICAgPGRpdj5cXG4gICAgICA8aDM+SGVsbG8gV29ybGQ8L2gzPlxcbiAgICAgIDxwPkNcImx1XCJjayB0aGUgZm9sbG93aW5nIGJ1dHRvbi48L3A+XFxuICAgICAgPHNwYW4+IEdvIGJhY2s8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGlkPVwidGVtcGxhdGVfU1VCNFwiPlxcbiAgPHA+XFxuICAgIFRoaXMgaXMgdGhlIHBhcnRpYWwgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgaW50byB0aGUgbWFpbiB0ZW1wbGF0ZS5cXG4gICAgPHNwYW4gaWQ9XCJ0ZXN0XCI+X19OT1RfU0hPV05fQkVDQVVTRV9SRVBMQUNFRF9fPC9zcGFuPlxcbiAgPC9wPlxcbjwvZGl2Plxcbic7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBpZD1cInRlbXBsYXRlX1NVQjVcIj5cXG4gIDxsaSBjbGFzcz1cIm5hbWUyXCI+UkVQTEFDRTwvbGk+XFxuPC9kaXY+XFxuJzsiLCIvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gIENPTU1PTkpTIE1PRFVMRSBFWFBPUlQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFZlcnNpb24gMC4wLjApXG5cbiAgICBASk9COiBVQkVSX05HRU4gR0VORVJBVE9SIGZvciBDb21wb25lbnRzIHNjaHJlaWJlblxuICAgIEBKT0I6IGRyb3BpbiB2cyBjb25maWd1cmFibGVcbiAgICBASk9COiBNYWtlIFwiQ09NTUVOVFNcIiBjcmVhdGUgYSBuaWNlIHZpc3VhbCBzdHJ1Y3R1cmUgb2YgbW9kdWxlIGluIG1pbml2aWV3XG5cbjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbihmdW5jdGlvbiBDT01NT05KU19FWFBPUlRFUiAoRkFDVE9SWSkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIElmIE1PRFVMRSBpcyBhIFwiRHJvcCBJblwiIHdoaWNoIGV4ZWN1dGVzIG9uY2UgYWZ0ZXIgbG9hZGluZzpcbiAgbW9kdWxlLmV4cG9ydHMgPSBGQUNUT1JZKC8qd2l0aCBwcmVkZWZpbmVkIHNldCBvZiBQQVJBTVMqLyk7IC8vIENvbW1vbkpTXG4gIC8vIC8vIEVMU0UgSUYgTU9EVUxFIGlzIE90aGVyd2lzZSBhIENPTkZJR1VSQUJMRTpcbiAgLy8gbW9kdWxlLmV4cG9ydHMgPSBGQUNUT1JZO1xufSkoXG4gIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgTU9EVUxFTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzIGxlZ28pXG4gIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gIChmdW5jdGlvbiBNT0RVTEVfTU9EVUxFTkFNRSAoQ09OVFJBQ1QsIEVOVElUSUVTLCBERVBzLCB3aW5kb3csIGdsb2JhbCwgdW5kZWZpbmVkKVxuICB7IC8vIHRvIHNoaWVsZCBNT0RVTEUgZnJvbSBvdmVycmlkZW4gJ3VuZGVmaW5lZCcgYW5kIGdsb2JhbCBvYmplY3QgcG9sbHV0aW9uXG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIE1PRFVMRU5BTUVfQVBJIChcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgTU9EVUxFIEFQSVxuICAgICAgXG4gICAgICAgICAgQFRPRE86IHRoaW5rIGFib3V0IHdoYXQgaSBuZWVkIGhlcmUuXG4gICAgICAgICAgICBNT0RVTEVOQU1FX0FQSS5DT05UUkFDVFxuICAgICAgICAgICAgTU9EVUxFTkFNRV9BUEkgKENPTlRBSU5FUiwgU0VUVElOR1MsIFNVR0dFU1RJT05TKVxuICAgICAgICAgICAgLi4uLlxuXG5cbiAgICAgICAgICBVU0FHRTpcbiAgICAgICAgICAgIC4uLlxuICAgICAgXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIC8vSU5KRUNURUQgREVQRU5ERU5DSUVTOlxuICAgICAgQ09OVEFJTkVSLCAgLy8gRE9NIEZvcm0gRWxlbWVudCB0byBhcHBseSBNT0RVTEVOQU1FIHRvXG4gICAgICAvL09QVElPTlM6XG4gICAgICBTRVRUSU5HUywgICAvLyBPUFRJT05BTCAtLSBuYW1lOnN0cmluZywgcmVxdWlyZWQ6Ym9vbGVhbiwgbWluUXVlcnlMZW5ndGg6bnVtYmVyXG4gICAgICBTVUdHRVNUSU9OUyAvLyBPcHRpb25hbCBBUlJBWSBmcm9tIHdoaWNoIHRvIGNob29zZSBhdXRvY29tcGxldGUgU1VHR0VTVElPTlNcbiAgICApIHtcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUEFSQU1FVEVSIFZBTElEQVRJT04gKyBTQU5JVElaQVRJT05cblxuICAgICAgICBASk9COiBSZWZpbmUgYmVoYXZpb3IgaW4gcmVsYXRpb24gdG8gZ2l2ZW4gaW5wdXRcbiAgICAgICAgQEpPQjogT25seSBkbyBpZiBub3Qgc2luZ2xldG9uIGFuZCBzaW5nbGUgaW5zdGFuY2UgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgQEFTU0VSVDogYXQgbGVhc3Qgb25lICdiaWxsYm9hcmRzJyBpcyBnaXZlbiBpbiBTRVRUSU5HUy5iaWxsYm9hcmRzXG4gICAgICAgICAgZWxzZTogcmV0dXJuIHdpdGhvdXQgY3JlYXRpbmcgYW55dGhpbmcgbmV3IVxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgU0VUVElOR1MgPSB0eXBlb2YgU0VUVElOR1MgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgeyAvLyBERUZBVUxUIFNFVFRJTkdTXG4gICAgICAgICAgLy8gc2V0dGluZ3MgICAgICA6IHtwbGFjZWhvbGRlcjogJ1NlYXJjaCcsIHZhbHVlOiAnJywgbWluUXVlcnlMZW5ndGg6IDB9LFxuICAgICAgICAgIC8vIFNVR0dFU1RJT05TICAgOiBbXSxcbiAgICAgICAgICAvLyBzZWxlY3Rpb24gICAgIDogJycsXG4gICAgICAgICAgLy8gb25RdWVyeUNoYW5nZSA6IGZ1bmN0aW9uIG9uUXVlcnlDaGFuZ2UgKG9sZFF1ZXJ5LCBuZXdRdWVyeSkge1xuICAgICAgICAgIC8vICAgcmV0dXJuO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICA6IFNFVFRJTkdTIC8vIEBKT0I6IEV4dGVuZCBub24tZ2l2ZW4gT1BUSU9OUyB3aXRoIERFRkFVTFRTLCBhbGxvdyBvdmVycmlkZSBkZWZ1YWx0cyB3aXRoIFwiTlVMTFwiXG4gICAgICA7XG4gICAgICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgIE1PRFVMRSBDUkVBVElPTiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidWlsZCB0aGlzIGxlZ28pXG4gICAgICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgICB2YXIgTU9EVUxFID0gXG4gICAgICAgIEVOVElUSUVTLmxlbmd0aCA/IEVOVElUSUVTW0VOVElUSUVTLmxlbmd0aC0xXSA6IC8vIEBKT0I6IGlmIHNpbmdsZXRvbiB2cyBmYWN0b3J5XG4gICAgICAgIChmdW5jdGlvbiBNT0RVTEVOQU1FIChTVEFURSkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEVNUExBVEUgLSBCVUlMRElOR1xuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgLy8gbm9uZVxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEVNUExBVEUgLSBDVVNUT01JWkFUSU9OIChNYXJrdXAsIFByb3BlcnRpZXMsIFN0eWxpbmcpXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBERUZJTkVcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIFNUQVJUID0gZnVuY3Rpb24gU1RBUlQgKGRhdGEsIHNjaGVtYSwgY29sbGVjdGlvbiwgY29udGFpbmVyUXVlcnkpIHtcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIGFwaTsgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBVU0VSIElOVEVSQUNUSU9OIEVWRU5UUyAmIEhBTkRMRVJcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PRFVMRSBTUEVDSUZJQyBIRUxQRVJTXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBQVUJMSUMgRU5USVRZIEFQSSAtIFNFVCBNT0RVTEUgRU5USVRZIERFRkFVTFQgSU5URVJGQUNFXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICBhcGkgPSAgICAgICB7XG4gICAgICAgICAgICAgIHBsYXRlcyAgICA6IERFUHMucGxhdGVzLFxuICAgICAgICAgICAgICBob2xvbml6ZSAgOiB7fSxcbiAgICAgICAgICAgICAgLy8gU1RBUlQgICAgIDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICAgIC8vICAgdmFyXG4gICAgICAgICAgICAgIC8vICAgICBEQVRBICAgICAgICAgID0gU1RBVEUucGFyYW1zLmRhdGEsXG4gICAgICAgICAgICAgIC8vICAgICBTQ0hFTUEgICAgICAgID0gU1RBVEUucGFyYW1zLnNjaGVtYSxcbiAgICAgICAgICAgICAgLy8gICAgIENPTExFQ1RJT04gICAgPSBTVEFURS5wYXJhbXMuY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgLy8gICAgIENPTlRBSU5FUiAgICAgPSBTVEFURS5wYXJhbXMuY29udGFpbmVySUQsXG4gICAgICAgICAgICAgIC8vICAgICBUUkFOU0xBVElPTlMgID0gU1RBVEUucGFyYW1zLnRyYW5zbGF0aW9uc1xuICAgICAgICAgICAgICAvLyAgIDtcbiAgICAgICAgICAgICAgLy8gICByZXR1cm4gU1RBUlQgKERBVEEsIFRSQU5TTEFUSU9OUywgU0NIRU1BLCBDT0xMRUNUSU9OLCBDT05UQUlORVIpO1xuICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIENPTkZJR1VSRSB7e01PRFVMRU5BTUV9fSBDT01QT05FTlQgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAgICAgQ09ORklHVVJFIDogZnVuY3Rpb24gY29uZmlndXJlIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAvLyBAVE9ETzogdGhpbmsgYWJvdXQgJ3NpbmdsZXRvbicgYW5kICdkcm9waW4nIGhlcmVcbiAgICAgICAgICAgICAgICAgIC8vIEBUT0RPOiBUaGUgY29tcG9uZW50IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQgb24gdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgIENPTkZJR1VSRSBzaG91bGQgZG8gbm90aGluZyBhbmQgU1RBUlQoKSBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGFwaS5DT05GSUdVUkU7XG4gICAgICAgICAgICAgICAgICBTVEFURS5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgQ1VTVE9NSVpFIC0gbW9kdWxlIGludGVyZmFjZSwgaW50ZXJuYWxzICYgQ09ORklHVVJBVElPTlxuICAgICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAgICAgICAvLyBqdXN0IENPTkZJR1VSRSBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBvdGhlciBhcGkuYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgLy8gb3IgcmV0dXJuIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgICAgLy8gb3Igc2V0IHNvbWUgZ2xvYmFsIHN0dWZmXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDtcbiAgICAgICAgICBhcGkuaWQgPSBFTlRJVElFUy5wdXNoKGFwaSk7XG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBQVUJMSUMgQVBJIEVYUE9SVFxuXG4gICAgICAgICAgICAgIEBKT0I6IG1ha2UgSU5JVC9DT05GSUdVUkUgYW5kIFNUQVJUIG9uZSBtZXRob2Qgd2l0aCBtYW55IHBhcmFtc1xuICAgICAgICAgICAgICBASk9COiBtYWtlIG1vZHVsZSBDT05GSUdVUkUgYSBjb25zdHJ1Y3RvciBvcHRpb25cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgLy8gW09wdGlvbmFsXSBDT05GSUdVUkUgdGhpcyBtb2R1bGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICBhcGkuQ09ORklHVVJFKHt9KTsgLy8gcHJvdmlkZSBvcHRpb25hbCBzZXR0aW5ncyBhcmd1bWVudFxuICAgICAgICAgIHJldHVybiBFTlRJVElFU1thcGkuaWQtMV07XG4gICAgICAgIH0pKHt9KVxuICAgICAgO1xuICAgICAgTU9EVUxFLkNPTlRSQUNUID0gQ09OVFJBQ1Q7XG4gICAgICByZXR1cm4gTU9EVUxFO1xuICAgIH1cbiAgICBNT0RVTEVOQU1FX0FQSS5DT05UUkFDVCA9IENPTlRSQUNUO1xuICAgIHJldHVybiBNT0RVTEVOQU1FX0FQSTtcbiAgfSkoXG4gIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgTU9EVUxFIENPTlRFWFRcbiAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIENPTlRSQUNUXG5cbiAgICAgIEBKT0IgLSBodHRwOi8vd3d3LjJhbGl0eS5jb20vMjAxMi8xMC9qYXZhc2NyaXB0LXByb3BlcnRpZXMuaHRtbFxuICAgICAgICAodXNlIHRvIGNyZWF0ZSB0aGUgc3R1ZmYgYmVsb3cpXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICB7XG4gICAgICBOQU1FICAgICAgOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS5uYW1lLFxuICAgICAgVkVSU0lPTiAgIDogJ3YnICsgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgICAgIFZBTElEQVRFICA6IGZ1bmN0aW9uIFZBTElEQVRFIChwYXJhbXMpIHtcbiAgICAgICAgLy8gcmVxdWlyZSgnLi9DT05UUkFDVC5qcycpKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZ2VuZXJhdGVEYXRhICA6IGdlbmVyYXRlRGF0YSxcbiAgICAgIC8vIFNDSEVNQSAgICAgICAgOiBTQ0hFTUEsXG4gICAgICAvLyBnZXRUeXBlcyAgICAgIDogZ2V0VHlwZXMsXG4gICAgICAvLyBnZXRWYWxpZGF0b3JzIDogZ2V0VmFsaWRhdG9ycyxcbiAgICAgIC8vIGdldFNhbXBsZXMgICAgOiBnZXRTYW1wbGVzXG4gICAgfSxcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIFNFVCBPRiBNT0RVTEUgSU5TVEFOQ0VTIC0gb25seSAxIGlmIHNpbmdsZXRvblxuXG4gICAgICBASk9COiBzaW5nbGV0b24gdnMgZmFjdG9yeVxuICAgICAgXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgW10sXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBERVBFTkRFTkNZIFRSRUVcblxuICAgICAgICBASk9CIC0gaHR0cDovL3d3dy4yYWxpdHkuY29tLzIwMTIvMTAvamF2YXNjcmlwdC1wcm9wZXJ0aWVzLmh0bWxcbiAgICAgICAgICAodXNlIHRvIGNyZWF0ZSB0aGUgc3R1ZmYgYmVsb3cpXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAoZnVuY3Rpb24gREVQRU5ERU5DSUVTICgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgICAgRVhURVJOQUwgREVQRU5ERU5DSUVTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvdGhlcnMgbGVnb3MpXG4gICAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgICAgIHBsYXRlcyA6IHJlcXVpcmUoJ3BsYXRlcycpLFxuICAgICAgICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAgIElOVEVSTkFMIERFUEVOREVOQ0lFUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG15IGxlZ29zKVxuICAgICAgICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICBlLmcuIElOVEVSTkFMIE1PRFVMRSAtIG5hbWVPZkludGVybmFsTW9kdWxlMVxuICAgICAgICAgIChjb3B5IHN0cnVjdHVyZSBvZiB0aGlzIGZpbGUpXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICB9O1xuICAgIH0pKClcbiAgKVxuICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuKTtcbi8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiIsIi8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgQ09NTU9OSlMgTU9EVUxFIEVYUE9SVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVmVyc2lvbiAwLjAuMClcblxuICAgIEBKT0I6IFVCRVJfTkdFTiBHRU5FUkFUT1IgZm9yIENvbXBvbmVudHMgc2NocmVpYmVuXG4gICAgQEpPQjogZHJvcGluIHZzIGNvbmZpZ3VyYWJsZVxuICAgIEBKT0I6IE1ha2UgXCJDT01NRU5UU1wiIGNyZWF0ZSBhIG5pY2UgdmlzdWFsIHN0cnVjdHVyZSBvZiBtb2R1bGUgaW4gbWluaXZpZXdcblxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuKGZ1bmN0aW9uIENPTU1PTkpTX0VYUE9SVEVSIChGQUNUT1JZKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gSWYgTU9EVUxFIGlzIGEgXCJEcm9wIEluXCIgd2hpY2ggZXhlY3V0ZXMgb25jZSBhZnRlciBsb2FkaW5nOlxuICBtb2R1bGUuZXhwb3J0cyA9IEZBQ1RPUlkoLyp3aXRoIHByZWRlZmluZWQgc2V0IG9mIFBBUkFNUyovKTsgLy8gQ29tbW9uSlNcbiAgLy8gLy8gRUxTRSBJRiBNT0RVTEUgaXMgT3RoZXJ3aXNlIGEgQ09ORklHVVJBQkxFOlxuICAvLyBtb2R1bGUuZXhwb3J0cyA9IEZBQ1RPUlk7XG59KShcbiAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBQTEFURVMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyBsZWdvKVxuICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAoZnVuY3Rpb24gTU9EVUxFX1BMQVRFUyAoTUVUQSwgRU5USVRJRVMsIERFUHMsIHdpbmRvdywgZ2xvYmFsLCB1bmRlZmluZWQpXG4gIHsgLy8gdG8gc2hpZWxkIE1PRFVMRSBmcm9tIG92ZXJyaWRlbiAndW5kZWZpbmVkJyBhbmQgZ2xvYmFsIG9iamVjdCBwb2xsdXRpb25cbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gUExBVEVTX0FQSSAoXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE1PRFVMRSBBUElcbiAgICAgIFxuICAgICAgICAgIFVTQUdFOlxuICAgICAgICAgICAgLi4uXG4gICAgICBcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgLy9JTkpFQ1RFRCBERVBFTkRFTkNJRVM6XG4gICAgICBDT05UQUlORVIsICAvLyBET00gRm9ybSBFbGVtZW50IHRvIGFwcGx5IFBMQVRFUyB0b1xuICAgICAgLy9PUFRJT05TOlxuICAgICAgU0VUVElOR1MsICAgLy8gT1BUSU9OQUwgLS0gbmFtZTpzdHJpbmcsIHJlcXVpcmVkOmJvb2xlYW4sIG1pblF1ZXJ5TGVuZ3RoOm51bWJlclxuICAgICAgU1VHR0VTVElPTlMgLy8gT3B0aW9uYWwgQVJSQVkgZnJvbSB3aGljaCB0byBjaG9vc2UgYXV0b2NvbXBsZXRlIFNVR0dFU1RJT05TXG4gICAgKSB7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFBBUkFNRVRFUiBWQUxJREFUSU9OICsgU0FOSVRJWkFUSU9OXG5cbiAgICAgICAgQEpPQjogUmVmaW5lIGJlaGF2aW9yIGluIHJlbGF0aW9uIHRvIGdpdmVuIGlucHV0XG4gICAgICAgIEBKT0I6IE9ubHkgZG8gaWYgbm90IHNpbmdsZXRvbiBhbmQgc2luZ2xlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIEBBU1NFUlQ6IGF0IGxlYXN0IG9uZSAnYmlsbGJvYXJkcycgaXMgZ2l2ZW4gaW4gU0VUVElOR1MuYmlsbGJvYXJkc1xuICAgICAgICAgIGVsc2U6IHJldHVybiB3aXRob3V0IGNyZWF0aW5nIGFueXRoaW5nIG5ldyFcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgIFNFVFRJTkdTID0gdHlwZW9mIFNFVFRJTkdTID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHsgLy8gREVGQVVMVCBTRVRUSU5HU1xuICAgICAgICAgIC8vIHNldHRpbmdzICAgICAgOiB7cGxhY2Vob2xkZXI6ICdTZWFyY2gnLCB2YWx1ZTogJycsIG1pblF1ZXJ5TGVuZ3RoOiAwfSxcbiAgICAgICAgICAvLyBTVUdHRVNUSU9OUyAgIDogW10sXG4gICAgICAgICAgLy8gc2VsZWN0aW9uICAgICA6ICcnLFxuICAgICAgICAgIC8vIG9uUXVlcnlDaGFuZ2UgOiBmdW5jdGlvbiBvblF1ZXJ5Q2hhbmdlIChvbGRRdWVyeSwgbmV3UXVlcnkpIHtcbiAgICAgICAgICAvLyAgIHJldHVybjtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgOiBTRVRUSU5HUyAvLyBASk9COiBFeHRlbmQgbm9uLWdpdmVuIE9QVElPTlMgd2l0aCBERUZBVUxUUywgYWxsb3cgb3ZlcnJpZGUgZGVmdWFsdHMgd2l0aCBcIk5VTExcIlxuICAgICAgO1xuICAgICAgLyo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICBNT0RVTEUgQ1JFQVRJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnVpbGQgdGhpcyBsZWdvKVxuICAgICAgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgICAgdmFyIE1PRFVMRSA9IFxuICAgICAgICBFTlRJVElFUy5sZW5ndGggPyBFTlRJVElFU1tFTlRJVElFUy5sZW5ndGgtMV0gOiAvLyBASk9COiBpZiBzaW5nbGV0b24gdnMgZmFjdG9yeVxuICAgICAgICAoZnVuY3Rpb24gUExBVEVTIChTVEFURSkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEVNUExBVEUgLSBCVUlMRElOR1xuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgLy8gbm9uZVxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEVNUExBVEUgLSBDVVNUT01JWkFUSU9OIChNYXJrdXAsIFByb3BlcnRpZXMsIFN0eWxpbmcpXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBERUZJTkVcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgIFBMQVRFUyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBhcGkgPSB7fTtcbiAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAvLyBHRU5FUkFMIEhFTFBFUlNcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gQ2FjaGUgdmFyaWFibGVzIHRvIGluY3JlYXNlIGxvb2t1cCBzcGVlZC5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFBvbHlmaWxsIHRoZSBBcnJheSNpbmRleE9mIG1ldGhvZCBmb3IgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBbXS5pbmRleE9mIHx8IChBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YoYSwgYiAsYyl7XG4gICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLmxlbmd0aCAsIGIgPSAoYysgfn5iKSAlIGM7XG4gICAgICAgICAgICAgICAgICBiIDwgYyAmJiAoIShiIGluIHRoaXMpIHx8IHRoaXNbYl0gIT09YSApO1xuICAgICAgICAgICAgICAgICAgYisrXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBiXmMgPyBiIDogLTE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBQb2x5ZmlsbCBBcnJheS5pc0FycmF5IGZvciBjcm9zcyBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkgfHwgKEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBNYXBwZXIoY29uZilcbiAgICAgICAgICAgICAgLy8gIyMjIyBAY29uZiB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAvLyBDb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIE1hcHBlciBpbnN0YW5jZSB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvclxuICAgICAgICAgICAgICAvLyBwcm92aWRpbmcgdGhlIG1hcHBpbmcgZm9yIHRoZSBkYXRhIHN0cnVjdHVyZVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBmdW5jdGlvbiBNYXBwZXIoY29uZikge1xuICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXBwZXIpKSB7IHJldHVybiBuZXcgTWFwcGVyKGNvbmYpOyB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcHBpbmdzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb25mID0gY29uZiB8fCB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBNQVBQRVIgSEVMUEVSU1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gbGFzdChuZXdpdGVtKVxuICAgICAgICAgICAgICAvLyAjIyMjIEBuZXdpdGVtIHtCb29sZWFufSBkbyB3ZSBuZWVkIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBtYXBwaW5nXG4gICAgICAgICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiBmb3IgYWRkaW5nIG5ldyBhdHRyaWJ1dGUgbWFwcyB0byBhIE1hcHBlciBpbnN0YW5jZVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBmdW5jdGlvbiBsYXN0KG5ld2l0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3aXRlbSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5tYXBwaW5ncy5wdXNoKHt9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMubWFwcGluZ3NbdGhpcy5tYXBwaW5ncy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIGlmIChtICYmIG0uYXR0cmlidXRlICYmIG0udmFsdWUgJiYgbS5kYXRhS2V5ICYmIG0ucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgICAgbS5yZSA9IG5ldyBSZWdFeHAobS5hdHRyaWJ1dGUgKyAnPShbXFwnXCJdPyknICsgbS52YWx1ZSArICdcXFxcMScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIG0ucmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBhY3R1YWwgY2hhaW5hYmxlIG1ldGhvZHM6IHdoZXJlKCdjbGFzcycpLmlzKCdmb28nKS5pbnNlcnQoJ2JsYScpXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIE1hcHBlci5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gYXBwZW5kKHBsYXRlcywgZGF0YSwgbWFwKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHBsYXRlcyB7U3RyaW5nfSBUZW1wbGF0ZSBvciBwYXRoL2lkIG9mIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGRhdGEge09iamVjdHxTdHJpbmd9IGRhdGEgZm9yIHRoZSBhcHBlbmRlZCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQG1hcCB7UGxhdGVzLk1hcH0gbWFwcGluZyBmb3IgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKHBsYXRlcywgZGF0YSwgbWFwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbCA9IGxhc3QuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGwucGxhdGVzID0gcGxhdGVzO1xuICAgICAgICAgICAgICAgICAgbC5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgIGwubWFwcGVyID0gbWFwO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gcmVtb3ZlKClcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcmVtb3ZlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGUgYHdoZXJlYCBjbGF1c2VcbiAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgICAgbGFzdC5jYWxsKHRoaXMpLnJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gYXModmFsKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbCB7U3RyaW5nfSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgYW4gYXR0cmlidXRlIGluIHRoZSB0YWcuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gYXR0cmlidXRlIGJ5IHRoYXQgbmFtZSBuYW1lIGZvdW5kLCBvbmUgbWF5IGJlIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIG9wdGlvbnMgdGhhdCB3aGVyZSBwYXNzZWQgaW4gdGhlIGBQbGF0ZXMuTWFwYFxuICAgICAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYXM6IGZ1bmN0aW9uIGFzKHZhbCkge1xuICAgICAgICAgICAgICAgICAgbGFzdC5jYWxsKHRoaXMpLnJlcGxhY2UgPSB2YWw7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMpICYmIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBpbnNlcnQodmFsKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbCB7U3RyaW5nfSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgYSBrZXkuIERhdGEgd2lsbCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgIC8vIGluIHRvIHRoZSBhdHRyaWJ1dGUgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBgd2hlcmVgIGNsYXVzZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHZhbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGwgPSBsYXN0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICBsLnJlcGxhY2UgPSBsLmF0dHJpYnV0ZTtcbiAgICAgICAgICAgICAgICAgIGwuZGF0YUtleSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcykgJiYgdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGhhcyh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd8UmVnRXhwfSBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0aGF0IHdhcyBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgYHdoZXJlYCBjbGF1c2UuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3QuY2FsbCh0aGlzKS52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3QuY2FsbCh0aGlzKSAmJiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gaXModmFsKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbCB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gYHdoZXJlYCBjbGF1c2UuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpczogZnVuY3Rpb24gaXModmFsKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcykudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdC5jYWxsKHRoaXMpICYmIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiB0YWcodmFsKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHZhbCB7U3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgdGFnIHNob3VsZCBiZSBmb3VuZFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgdGFnOiBmdW5jdGlvbiB0YWcodmFsKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcywgdHJ1ZSkudGFnID0gdmFsO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiBjbGFzcyh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd9IGEgdmFsdWUgdGhhdCBtYXkgYmUgZm91bmQgaW4gdGhlIGBjbGFzc2AgYXR0cmlidXRlIG9mIGEgdGFnXG4gICAgICAgICAgICAgICAgLy8gdGhlIG1ldGhvZCBuYW1lIHNob3VsZCBiZSB3cmFwcGVkIGluIHF1b3RlcyBvciBpdCB3aWxsIHRocm93IGVycm9ycyBpbiBJRS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IGZ1bmN0aW9uIGNsYXNzTmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZXJlKCdjbGFzcycpLmlzKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICMjIyBmdW5jdGlvbiB3aGVyZSh2YWwpXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdmFsIHtTdHJpbmd9IGFuIGF0dHJpYnV0ZSB0aGF0IG1heSBiZSBmb3VuZCBpbiBhIHRhZ1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgaW5pdGlhdGUgYSBjbGF1c2UuIE9uY2UgYSBjbGF1c2UgaGFzIGJlZW4gZXN0YWJsaXNoZWRcbiAgICAgICAgICAgICAgICAvLyBvdGhlciBtZW1iZXIgbWV0aG9kcyB3aWxsIGJlIGNoYWluZWQgdG8gZWFjaCBvdGhlciBpbiBhbnkgb3JkZXIuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB3aGVyZTogZnVuY3Rpb24gd2hlcmUodmFsKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcywgdHJ1ZSkuYXR0cmlidXRlID0gdmFsO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3QuY2FsbCh0aGlzKSAmJiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gdXNlKHZhbClcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwge1N0cmluZ30gQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIGEga2V5LlxuICAgICAgICAgICAgICAgIC8vIERhdGEgd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHRoZSBhdHRyaWJ1dGUgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIGB3aGVyZWAgY2xhdXNlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgdXNlOiBmdW5jdGlvbiB1c2UodmFsKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0LmNhbGwodGhpcykuZGF0YUtleSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0LmNhbGwodGhpcykgJiYgdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIHJlcGxhY2UodmFsMSwgdmFsMilcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwxIHtTdHJpbmd8UmVnRXhwfSBUaGUgcGFydCBvZiB0aGUgYXR0cmlidXRlIHRoYXQgbmVlZHMgdG8gYmUgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWwyIHtTdHJpbmd9IFRoZSB2YWx1ZSBpdCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZSh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbCA9IGxhc3QuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIGwucmVwbGFjZVBhcnRpYWwxID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgIGwucmVwbGFjZVBhcnRpYWwyID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gUHJvdmlkZSBoZWxwZnVsIGFsaWFzZXMgdGhhdCB3ZWxsIGhlbHAgd2l0aCBpbmNyZWFzZWQgY29tcGF0aWJpbGl0eSBhcyBub3RcbiAgICAgICAgICAgICAgLy8gYWxsIGJyb3dzZXJzIGFsbG93IHRoZSBNYXBwZXIjY2xhc3MgcHJvdG90eXBlIChJRSkuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIE1hcHBlci5wcm90b3R5cGUuY2xhc3NOYW1lID0gTWFwcGVyLnByb3RvdHlwZVsnY2xhc3MnXTtcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gQWxpYXNlcyBvZiBkaWZmZXJlbnQgbWV0aG9kcy5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgTWFwcGVyLnByb3RvdHlwZS5wYXJ0aWFsID0gTWFwcGVyLnByb3RvdHlwZS5hcHBlbmQ7XG4gICAgICAgICAgICAgIE1hcHBlci5wcm90b3R5cGUudG8gPSBNYXBwZXIucHJvdG90eXBlLnVzZTtcbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBNYXBwZXIuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIGFwaS5NYXAgPSBNYXBwZXI7XG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgdmFyIE1lcmdlID0gZnVuY3Rpb24gTWVyZ2UoKSB7fTtcbiAgICAgICAgICAgICAgLy8vLy8gTUVSR0UgSEVMUEVSU1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBmdW5jdGlvbiBtYXRjaENsb3NpbmcoaW5wdXQsIHRhZ25hbWUsIGh0bWwpIHsgLy8gTWF0Y2hlcyBhIGNsb3NpbmcgdGFnIHRvIGEgb3BlbiB0YWdcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2VUYWcgPSAnPC8nICsgdGFnbmFtZSArICc+JyxcbiAgICAgICAgICAgICAgICAgICAgb3BlblRhZyAgPSBuZXcgUmVnRXhwKCc8IConICsgdGFnbmFtZSArICcoICp8PiknLCAnZycpLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUNvdW50ID0gMCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNvdW50ID0gLTEsXG4gICAgICAgICAgICAgICAgICAgIGZyb20sIHRvLCBjaHVua1xuICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICAgICBmcm9tID0gaHRtbC5zZWFyY2goaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRvID0gZnJvbTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKHRvID4gLTEgJiYgY2xvc2VDb3VudCAhPT0gb3BlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICB0byA9IGh0bWwuaW5kZXhPZihjbG9zZVRhZywgdG8pO1xuICAgICAgICAgICAgICAgICAgaWYgKHRvID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8gKz0gdGFnbmFtZS5sZW5ndGggKyAzO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IGh0bWwuc2xpY2UoZnJvbSwgdG8pO1xuICAgICAgICAgICAgICAgICAgICBvcGVuQ291bnQgPSBjaHVuay5tYXRjaChvcGVuVGFnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0byA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5tYXRjaGVkIHRhZyAnICsgdGFnbmFtZSArICcgaW4gJyArIGh0bWwpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIGNvbXBpbGVNYXBwaW5nc1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBzb3J0IHRoZSBtYXBwaW5ncyBzbyB0aGF0IG1hcHBpbmdzIGZvciB0aGUgc2FtZSBhdHRyaWJ1dGUgYW5kIHZhbHVlIGdvIGNvbnNlY3V0aXZlXG4gICAgICAgICAgICAgIC8vIGFuZCBpbnNpZGUgdGhvc2UsIHRob3NlIHRoYXQgY2hhbmdlIGF0dHJpYnV0ZXMgYXBwZWFyIGZpcnN0LlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBmdW5jdGlvbiBjb21waWxlTWFwcGluZ3Mob2xkTWFwcGluZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGluZ3MgPSBvbGRNYXBwaW5ncy5zbGljZSgwKTtcblxuICAgICAgICAgICAgICAgIG1hcHBpbmdzLnNvcnQoZnVuY3Rpb24obWFwMSwgbWFwMikge1xuICAgICAgICAgICAgICAgICAgaWYgKCFtYXAxLmF0dHJpYnV0ZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICBpZiAoIW1hcDIuYXR0cmlidXRlKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChtYXAxLmF0dHJpYnV0ZSAhPT0gbWFwMi5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDEuYXR0cmlidXRlIDwgbWFwMi5hdHRyaWJ1dGUgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAobWFwMS52YWx1ZSAhPT0gbWFwMi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwMS52YWx1ZSA8IG1hcDIudmFsdWUgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoISAoJ3JlcGxhY2UnIGluIG1hcDEpICYmICEgKCdyZXBsYWNlJyBpbiBtYXAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZsaWN0aW5nIG1hcHBpbmdzIGZvciBhdHRyaWJ1dGUgJyArIG1hcDEuYXR0cmlidXRlICsgJyBhbmQgdmFsdWUgJyArIG1hcDEudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKG1hcDEucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBwaW5ncztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyAjIyMgZnVuY3Rpb24gZmV0Y2goZGF0YSwgbWFwcGluZywgdmFsdWUsIGtleSlcbiAgICAgICAgICAgICAgLy8gIyMjIyBAZGF0YSB7T2JqZWN0fSB0aGUgZGF0YSB0aGF0IHdlIG5lZWQgdG8gZmV0Y2ggYSB2YWx1ZSBmcm9tXG4gICAgICAgICAgICAgIC8vICMjIyMgQG1hcHBpbmcge09iamVjdH0gVGhlIGl0ZXJhdGVkIG1hcHBpbmcgc3RlcFxuICAgICAgICAgICAgICAvLyAjIyMjIEB0YWdib2R5IHtTdHJpbmd9IHRoZSB0YWdib2R5IHdlIG9wZXJhdGVkIGFnYWluc3RcbiAgICAgICAgICAgICAgLy8gIyMjIyBAa2V5IHtTdHJpbmd9IG9wdGlvbmFsIGtleSBpZiB0aGUgbWFwcGluZyBkb2Vzbid0IGhhdmUgYSBkYXRhS2V5XG4gICAgICAgICAgICAgIC8vIEZldGNoZXMgdGhlIGNvcnJlY3QgcGllY2Ugb2YgZGF0YVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICBmdW5jdGlvbiBmZXRjaChkYXRhLCBtYXBwaW5nLCB2YWx1ZSwgdGFnYm9keSwga2V5KSB7XG4gICAgICAgICAgICAgICAga2V5ID0gbWFwcGluZy5kYXRhS2V5IHx8IGtleTtcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBkYXRhIG1hbmlwdWxhdGlvbiBvciBmaWx0ZXJpbmcgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAobWFwcGluZy5kYXRhS2V5ICYmIHR5cGVvZiBtYXBwaW5nLmRhdGFLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXBwaW5nLmRhdGFLZXkoZGF0YSwgdmFsdWUgfHwgJycsIHRhZ2JvZHkgfHwgJycsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBTZWUgaWYgd2UgYXJlIHVzaW5nIGRvdCBub3RhdGlvbiBzdHlsZVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKCF+a2V5LmluZGV4T2YoJy4nKSkgcmV0dXJuIGRhdGFba2V5XTtcblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBrZXlcbiAgICAgICAgICAgICAgICAgICwgc3RydWN0dXJlID0gZGF0YTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBhdGhzID0ga2V5LnNwbGl0KCcuJyksIGkgPSAwLCBsZW5ndGggPSBwYXRocy5sZW5ndGg7IGkgPCBsZW5ndGggJiYgc3RydWN0dXJlOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZVsrcGF0aHNbaV0gfHwgcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgICAgc3RydWN0dXJlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgTWVyZ2UucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgICAgIG5lc3Q6IFtdLFxuXG4gICAgICAgICAgICAgICAgdGFnOiBuZXcgUmVnRXhwKFtcbiAgICAgICAgICAgICAgICAgICc8JyxcbiAgICAgICAgICAgICAgICAgICcoLz8pJywgLy8gMiAtIGlzIGNsb3NpbmdcbiAgICAgICAgICAgICAgICAgICcoWy06XFxcXHddKyknLCAvLyAzIC0gbmFtZVxuICAgICAgICAgICAgICAgICAgJygoPzpbLVxcXFx3XSsoPzonLCAnPScsXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXHcrfFtcInxcXCddKD86LiopW1wifFxcJ10pKT8pKiknLCAvLyA0IC0gYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgJygvPyknLCAvLyA1IC0gaXMgc2VsZi1jbG9zaW5nXG4gICAgICAgICAgICAgICAgICAnPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJ1xcXFxzKicpKSxcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSFRNTCBhdHRyaWJ1dGUgcGFyc2VyLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYXR0cjogLyhbXFwtXFx3XSopXFxzKj1cXHMqKD86KFtcIlxcJ10pKFtcXC1cXC5cXHdcXHNcXC86OyYjXSopXFwyKS9naSxcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gSFRNTDUgaXQncyBhbGxvd2VkIHRvIGhhdmUgdG8gdXNlIHNlbGYgY2xvc2luZyB0YWdzIHdpdGhvdXQgY2xvc2luZ1xuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMuIFNvIHdlIG5lZWQgdG8gZGV0ZWN0IHRoZXNlIGVsZW1lbnRzIGJhc2VkIG9uIHRoZSB0YWcgbmFtZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nOiAvXihhcmVhfGJhc2V8YnJ8Y29sfGNvbW1hbmR8ZW1iZWR8aHJ8aW1nfGlucHV0fGtleWdlbnxsaW5rfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicikkLyxcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGhhc0NsYXNzKHN0ciwgY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQHN0ciB7U3RyaW5nfSB0aGUgY2xhc3MgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAY2xhc3NOYW1lIHtTdHJpbmd9IHRoZSBjbGFzc05hbWUgdGhhdCB0aGUgY2xhc3NBdHRyaWJ1dGUgc2hvdWxkIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZWN0aW5nIGlmIGEgY2xhc3MgYXR0cmlidXRlIGNvbnRhaW5zIHRoZSBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiBoYXNDbGFzcyhzdHIsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIH5zdHIuc3BsaXQoJyAnKS5pbmRleE9mKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGl0ZXJhdGUoaHRtbCwgdmFsdWUsIGNvbXBvbmVudHMsIHRhZ25hbWUsIGtleSlcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEBodG1sIHtTdHJpbmd9IHBlaWNlIG9mIEhUTUxcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEB2YWx1ZSB7TWl4ZWR9IGl0ZXJhdGVhYmxlIG9iamVjdCB3aXRoIGRhdGFcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEBjb21wb25lbnRzIHtBcnJheX0gcmVzdWx0IG9mIHRoZSB0aGlzLnRhZyByZWdleHAgZXhlY3V0aW9uXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAdGFnbmFtZSB7U3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgd2UgaXRlcmF0ZSBvblxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGtleSB7U3RyaW5nfSB0aGUga2V5IG9mIHRoZSBkYXRhIHRoYXQgd2UgbmVlZCB0byBleHRyYWN0IGZyb20gdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gIyMjIyBAbWFwIHtPYmplY3R9IGF0dHJpYnV0ZSBtYXBwaW5nc1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIG92ZXIgdGhlIHN1cHBsaWVkIEhUTUwuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpdGVyYXRlOiBmdW5jdGlvbiBpdGVyYXRlKGh0bWwsIHZhbHVlLCBjb21wb25lbnRzLCB0YWduYW1lLCBrZXksIG1hcCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCAgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gbWF0Y2hDbG9zaW5nKGNvbXBvbmVudHMuaW5wdXQsIHRhZ25hbWUsIGh0bWwpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgLy8gSXMgaXQgYW4gYXJyYXk/XG4gICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWWVzOiBzZXQgdGhlIG91dHB1dCB0byB0aGUgcmVzdWx0IG9mIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEga2V5LCB0aGVuIHdlIGhhdmUgYSBzaW1wbGUgb2JqZWN0IGFuZFxuICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgY29uc3RydWN0IGEgc2ltcGxlIG9iamVjdCB0byB1c2UgYXMgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLmJpbmQoc2VnbWVudCwgZGF0YSwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZWZpbmUgdGhlIHNlbGVjdGlvbiBub3cgdGhhdCB3ZSBrbm93IHdlJ3JlIGRlYWxpbmcgd2l0aCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIG5lc3RlZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnQuc2xpY2UoY29tcG9uZW50cy5pbnB1dC5sZW5ndGgsIC0odGFnbmFtZS5sZW5ndGggKyAzKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKz0gdGhpcy5iaW5kKHNlZ21lbnQsIHZhbHVlLCBtYXApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIyMjIGZ1bmN0aW9uIGJpbmQoaHRtbCwgZGF0YSwgbWFwKVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQGh0bWwge1N0cmluZ30gdGhlIHRlbXBsYXRlIHRoYXQgd2UgbmVlZCB0byBtb2RpZnlcbiAgICAgICAgICAgICAgICAvLyAjIyMjIEBkYXRhIHtPYmplY3R9IGRhdGEgZm9yIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vICMjIyMgQG1hcCB7TWFwcGVyfSBpbnN0cnVjdGlvbnMgZm9yIHRoZSBkYXRhIHBsYWNlbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBhY3R1YWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoaHRtbCwgZGF0YSwgbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5iaW5kKGh0bWwsIGRhdGFbaV0sIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBodG1sID0gKGh0bWwgfHwgJycpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICB2YXIgb3BlbmVycyA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ3MgPSBtYXAgJiYgY29tcGlsZU1hcHBpbmdzKG1hcC5tYXBwaW5ncyksXG4gICAgICAgICAgICAgICAgICAgICAgaW50YWcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0YWduYW1lID0gJycsXG4gICAgICAgICAgICAgICAgICAgICAgaXNDbG9zaW5nID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxmQ2xvc2luZyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2htb2RlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQXR0cmlidXRlID0gbWFwICYmIG1hcC5jb25mICYmIG1hcC5jb25mLmNyZWF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHRhZ2JvZHk7XG5cbiAgICAgICAgICAgICAgICAgIHZhciBjLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICcnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ7XG5cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaHRtbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGh0bWwuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggcGFydCBvZiB0aGUgSFRNTCB3ZSBhcmUgY3VycmVudGx5IHByb2Nlc3NpbmcuIEFuZCBpZlxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHF1ZXVlZCB1cCBlbm91Z2ggSFRNTCB0byBwcm9jZXNzIGl0J3MgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICchJyAmJiBpbnRhZyAmJiAhbWF0Y2htb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaW50YWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gaHRtbC5zbGljZShsZWZ0LCBpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJzwnICYmICFpbnRhZykge1xuICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIGludGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPicgJiYgaW50YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHRhZ2JvZHkgPSBodG1sLnNsaWNlKGxlZnQsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzID0gdGhpcy50YWcuZXhlYyh0YWdib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmKCFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpc0Nsb3NpbmcgPSBjb21wb25lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgIHRhZ25hbWUgPSBjb21wb25lbnRzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBjb21wb25lbnRzWzNdO1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nID0gY29tcG9uZW50c1s0XTtcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGZDbG9zaW5nID0gdGhpcy5zZWxmQ2xvc2luZy50ZXN0KHRhZ25hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBpdHMgYSBjbG9zaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWlzQ2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmVycyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2htb2RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1vcGVuZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NlbGZDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBpdHMgbm90IGEgc2VsZi1jbG9zaW5nIHRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICArK29wZW5lcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcgJiYgIW1hdGNobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbWF0Y2ggaW4gcHJvZ3Jlc3MgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBpbmdzICYmIG1hcHBpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaWkgPSBtYXBwaW5ncy5sZW5ndGggLSAxOyBpaSA+PSAwOyBpaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNldEF0dHJpYnV0ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIG1hcHBpbmcgPSBtYXBwaW5nc1tpaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgc2hvdWxkU2V0QXR0cmlidXRlID0gbWFwcGluZy5yZSAmJiBhdHRyaWJ1dGVzLm1hdGNoKG1hcHBpbmcucmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgdGFyZ2V0dGluZyBhIGVsZW1lbnQgb25seSBvciBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3RhZycgaW4gbWFwcGluZyAmJiAhdGhpcy5hdHRyLnRlc3QodGFnYm9keSkgJiYgbWFwcGluZy50YWcgPT09IHRhZ25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2JvZHkgPSB0YWdib2R5ICsgZmV0Y2goZGF0YSwgbWFwcGluZywgJycsIHRhZ2JvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnYm9keSA9IHRhZ2JvZHkucmVwbGFjZSh0aGlzLmF0dHIsIGZ1bmN0aW9uKHN0ciwga2V5LCBxLCB2YWx1ZSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld2RhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTZXRBdHRyaWJ1dGUgJiYgbWFwcGluZy5yZXBsYWNlICE9PSBrZXkgfHwgcmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZFNldEF0dHJpYnV0ZSB8fCB0eXBlb2YgbWFwcGluZy5yZXBsYWNlUGFydGlhbDEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCB1c2UgdGhlIHJlcGxhY2UgYXJndW1lbnQgb3Igc29tZSB2YWx1ZSBmcm9tIHRoZSBkYXRhIG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gdmFsdWUucmVwbGFjZShtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMSwgbWFwcGluZy5yZXBsYWNlUGFydGlhbDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXBwaW5nLnJlcGxhY2VQYXJ0aWFsMSAhPT0gJ3VuZGVmaW5lZCcgJiYgbWFwcGluZy5kYXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZGF0YSA9IHZhbHVlLnJlcGxhY2UobWFwcGluZy5yZXBsYWNlUGFydGlhbDEsIGZldGNoKGRhdGEsIG1hcHBpbmcsIHZhbHVlLCB0YWdib2R5LCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gZmV0Y2goZGF0YSwgbWFwcGluZywgdmFsdWUsIHRhZ2JvZHksIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz1cIicgKyAobmV3ZGF0YSB8fCAnJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbWFwcGluZy5yZXBsYWNlICYmIG1hcHBpbmcuYXR0cmlidXRlID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcudmFsdWUgPT09IHZhbHVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5oYXNDbGFzcyh2YWx1ZSwgbWFwcGluZy52YWx1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzLmNvbmYud2hlcmUgPT09IGtleSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3RvU3RyaW5nLmNhbGwobWFwcGluZy52YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLnZhbHVlLmV4ZWModmFsdWUpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGluZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGluY3JlYXNlIHRoZSByZW1vdmUgY291bnRlciBpZiBpdCdzIG5vdCBhIHNlbGZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsb3NpbmcgZWxlbWVudC4gQXMgbWF0Y2htb2RlIGlzIHN1ZmZlY3RpZW50IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTZWxmQ2xvc2luZykgcmVtb3ZlKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaG1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwcGluZy5wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0aWFsID0gdGhhdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcucGxhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgdHlwZW9mIG1hcHBpbmcuZGF0YSA9PT0gJ3N0cmluZycgPyBmZXRjaChkYXRhLCB7IGRhdGFLZXk6IG1hcHBpbmcuZGF0YSB9KSA6IG1hcHBpbmcuZGF0YSB8fCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgbWFwcGluZy5tYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0YWdib2R5ICsgdGhhdC5pdGVyYXRlKGh0bWwsIHBhcnRpYWwsIGNvbXBvbmVudHMsIHRhZ25hbWUsIHVuZGVmaW5lZCwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNobW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gbmV3ZGF0YSA9IGZldGNoKGRhdGEsIG1hcHBpbmcsIHZhbHVlLCB0YWdib2R5LCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZGF0YSA9IHRhZ2JvZHkgKyBuZXdkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdkYXRhID0gdGhhdC5pdGVyYXRlKGh0bWwsIHYsIGNvbXBvbmVudHMsIHRhZ25hbWUsIHZhbHVlLCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaXRlbSBpcyBhbiBhcnJheSwgdGhlbiB3ZSBuZWVkIHRvIHRlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhdGVzIHRoYXQgd2UncmUgZGVhbGluZyB3aXRoIG5lc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmVzdC5wdXNoKHRhZ25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZGF0YSA9IHRhZ2JvZHkgKyB0aGF0Lml0ZXJhdGUoaHRtbCwgdiwgY29tcG9uZW50cywgdGFnbmFtZSwgdmFsdWUsIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBuZXdkYXRhIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2htb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIGF0dHJpYnV0ZXMgaWYgdGhleSBkb24ndCBleGlzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdGVBdHRyaWJ1dGUgJiYgc2hvdWxkU2V0QXR0cmlidXRlICYmICFzZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpY2VkID0gc2VsZkNsb3NpbmcgPyAyIDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIGNsb3NlID0gc2VsZkNsb3NpbmcgPyAnLz4nOiAnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBsZWZ0ID0gdGFnYm9keS5zdWJzdHIoMCwgdGFnYm9keS5sZW5ndGggLSBzcGxpY2VkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRbbGVmdC5sZW5ndGggLSAxXSA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0LnN1YnN0cigwLCBsZWZ0Lmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlID0gJyAnICsgY2xvc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnYm9keSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLnJlcGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc9XCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChkYXRhLCBtYXBwaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBtYXAsIHdlIGFyZSBqdXN0IGxvb2tpbmcgdG8gbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNwZWNpZmllZCBpZCB0byBhIGRhdGEga2V5IGluIHRoZSBkYXRhIG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnYm9keS5yZXBsYWNlKHRoaXMuYXR0ciwgZnVuY3Rpb24gKGF0dHIsIGtleSwgcSwgdmFsdWUsIGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG1hcCAmJiBtYXAuY29uZi53aGVyZSB8fCAnaWQnICYmIGRhdGFbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGRhdGFbdmFsdWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3QgPSBBcnJheS5pc0FycmF5KHYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG5lc3QgfHwgdHlwZW9mIHYgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoYXQuaXRlcmF0ZShodG1sLnN1YnN0cihsZWZ0KSwgdiwgY29tcG9uZW50cywgdGFnbmFtZSwgdmFsdWUsIG1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXksIHRoZW4gd2UgbmVlZCB0byB0ZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF0ZXMgdGhhdCB3ZSdyZSBkZWFsaW5nIHdpdGggbmVzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXN0KSB7IHRoYXQubmVzdC5wdXNoKHRhZ25hbWUpOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBuZXN0ID8gb3V0cHV0IDogdGFnYm9keSArIG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNobW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGN1cnJlbnRseSBubyBtYXRjaCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3Qgd3JpdGUgdGhlIHRhZ2JvZHkgdG8gdGhlIGJ1ZmZlci5cbiAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2htb2RlICYmIHRoYXQubmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVtb3ZlKSBidWZmZXIgKz0gdGFnYm9keTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSAmJiAhIWlzQ2xvc2luZykgLS1yZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbWF0Y2htb2RlICYmIHRoYXQubmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaW50YWcgJiYgIW1hdGNobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IG5vdCBpbnNpZGUgYSB0YWcgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggaW4gcHJvZ3Jlc3MsIHdlIGNhbiB3cml0ZSB0aGUgY2hhciB0b1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBidWZmZXIuXG4gICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlbW92ZSkgYnVmZmVyICs9IGM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBFeHBvc2UgdGhlIFBsYXRlcyNiaW5kIGludGVyZmFjZS5cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgYXBpLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGh0bWwsIGRhdGEsIG1hcCkge1xuICAgICAgICAgICAgICAgIHZhciBtZXJnZSA9IG5ldyBNZXJnZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZS5iaW5kKGh0bWwsIGRhdGEsIG1hcCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgcmV0dXJuIGFwaTtcbiAgICAgICAgICAgIH0pKCksXG4gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVVNFUiBJTlRFUkFDVElPTiBFVkVOVFMgJiBIQU5ETEVSXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAvLyBub25lXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0RVTEUgU1BFQ0lGSUMgSEVMUEVSU1xuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgLy8gbm9uZVxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgUFVCTElDIEVOVElUWSBBUEkgLSBTRVQgTU9EVUxFIEVOVElUWSBERUZBVUxUIElOVEVSRkFDRVxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgYXBpID0ge1xuICAgICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIEJVSUxEIE1PRFVMRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0aWFsaXplIChzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcGkuaW5pdDtcbiAgICAgICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgIENVU1RPTUlaRSAtIG1vZHVsZSBpbnRlcmZhY2UsIGludGVybmFscyAmIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgICAgICAgICAgLy8ganVzdCBpbml0aWFsaXplIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIC8vIG9yIHNldCBvdGhlciBhcGkuYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC8vIG9yIHJldHVybiBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAvLyBvciBzZXQgc29tZSBnbG9iYWwgc3R1ZmZcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIFBMQVRFUykge1xuICAgICAgICAgICAgICAgICAgYXBpW3Byb3BdID0gUExBVEVTW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDtcbiAgICAgICAgICBhcGkuaWQgPSBFTlRJVElFUy5wdXNoKGFwaSk7XG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBQVUJMSUMgQVBJIEVYUE9SVFxuXG4gICAgICAgICAgICAgIEBKT0I6IG1ha2UgSU5JVC9DT05GSUdVUkUgYW5kIFNUQVJUIG9uZSBtZXRob2Qgd2l0aCBtYW55IHBhcmFtc1xuICAgICAgICAgICAgICBASk9COiBtYWtlIG1vZHVsZSBpbml0aWFsaXphdGlvbiBhIGNvbnN0cnVjdG9yIG9wdGlvblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgICAvLyBbT3B0aW9uYWxdIGluaXRpYWxpemUgdGhpcyBtb2R1bGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICBhcGkuaW5pdCh7fSk7IC8vIHByb3ZpZGUgb3B0aW9uYWwgc2V0dGluZ3MgYXJndW1lbnRcbiAgICAgICAgICByZXR1cm4gRU5USVRJRVNbYXBpLmlkLTFdO1xuICAgICAgICB9KSh7fSlcbiAgICAgIDtcbiAgICAgIE1PRFVMRS5NRVRBID0gTUVUQTtcbiAgICAgIHJldHVybiBNT0RVTEU7XG4gICAgfVxuICAgIFBMQVRFU19BUEkuTUVUQSA9IE1FVEE7XG4gICAgcmV0dXJuIFBMQVRFU19BUEk7XG4gIH0pKFxuICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgIE1PRFVMRSBDT05URVhUXG4gIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBNRVRBXG5cbiAgICAgIEBKT0IgLSBodHRwOi8vd3d3LjJhbGl0eS5jb20vMjAxMi8xMC9qYXZhc2NyaXB0LXByb3BlcnRpZXMuaHRtbFxuICAgICAgICAodXNlIHRvIGNyZWF0ZSB0aGUgc3R1ZmYgYmVsb3cpXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICB7XG4gICAgICBOQU1FICAgIDogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgVkVSU0lPTiA6ICd2JyArIHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gICAgfSxcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIFNFVCBPRiBNT0RVTEUgSU5TVEFOQ0VTIC0gb25seSAxIGlmIHNpbmdsZXRvblxuXG4gICAgICBASk9COiBzaW5nbGV0b24gdnMgZmFjdG9yeVxuICAgICAgXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgW10sXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBERVBFTkRFTkNZIFRSRUVcblxuICAgICAgICBASk9CIC0gaHR0cDovL3d3dy4yYWxpdHkuY29tLzIwMTIvMTAvamF2YXNjcmlwdC1wcm9wZXJ0aWVzLmh0bWxcbiAgICAgICAgICAodXNlIHRvIGNyZWF0ZSB0aGUgc3R1ZmYgYmVsb3cpXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAoZnVuY3Rpb24gREVQRU5ERU5DSUVTICgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgICAgICAgRVhURVJOQUwgREVQRU5ERU5DSUVTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvdGhlcnMgbGVnb3MpXG4gICAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiovXG4gICAgICAgICAgLy8gbm9uZVxuICAgICAgICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgICAgICAgIElOVEVSTkFMIERFUEVOREVOQ0lFUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG15IGxlZ29zKVxuICAgICAgICA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICBlLmcuIElOVEVSTkFMIE1PRFVMRSAtIG5hbWVPZkludGVybmFsTW9kdWxlMVxuICAgICAgICAgIChjb3B5IHN0cnVjdHVyZSBvZiB0aGlzIGZpbGUpXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICB9O1xuICAgIH0pKClcbiAgKVxuICAvKjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoqL1xuKTtcbi8qOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ki9cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwicGxhdGVzXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuNC4xMlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVW5vYnRydXNpdmUgdGVtcGxhdGluZyBmb3IgdGhlIGZsYXRpcm9uIGZyYW1ld29ya1wiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcInRlbXBsYXRlc1wiLFxuICAgIFwidGVtcGxhdGluZ1wiLFxuICAgIFwidW5vYnRydXNpdmVcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIk5vZGVqaXRzdSBJbmMuIDxpbmZvQG5vZGVqaXRzdS5jb20+XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgXCJ1cmxcIjogXCJnaXQ6Ly9naXRodWIuY29tL2ZsYXRpcm9uL3BsYXRlcy5naXRcIlxuICAgIH1cbiAgXSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidm93c1wiOiBcIjAuNy54XCIsXG4gICAgXCJtdXN0YWNoZVwiOiBcIjAuNC54XCIsXG4gICAgXCJiZW5jaG1hcmtcIjogXCIwLjIueFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidm93cyAtLXNwZWMgdGVzdC9hcGktdGVzdC5qc1wiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiBbXG4gICAgXCJub2RlXCJcbiAgXSxcbiAgXCJtYWluXCI6IFwiLi9saWIvcGxhdGVzLmpzXCJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwiaG9sb25cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjZcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxlaWdodC13ZWlnaHQgRFNMLWZyZWUgZHVhbC1zaWRlIGNvbXBvc2FibGUgcmVhY3RpdmUgY29tcG9uZW50c1wiLFxuICBcIm1haW5cIjogXCJTT1VSQ0UvaW5kZXguanNcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL2hvbG9uXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZHVhbC1zaWRlXCIsXG4gICAgXCJjb21wb3NhYmxlXCIsXG4gICAgXCJyZWFjdGl2ZVwiLFxuICAgIFwiY29tcG9uZW50XCIsXG4gICAgXCJjb21wb25lbnRzXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGVtcGxhdGluZ1wiLFxuICAgIFwibW9kdWxlXCIsXG4gICAgXCJkdWFsXCIsXG4gICAgXCJzaWRlXCIsXG4gICAgXCJwYXJ0aWFsXCIsXG4gICAgXCJwYXJ0aWFsc1wiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFtcbiAgICBcInNlcmFwYXRoIDxkZXZAc2VyYXBhdGguZGU+IChodHRwOi8vd3d3LmdpdGh1Yi5jb20vc2VyYXBhdGgpXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRvZG9cIjogXCJodHRwOi8vYnJvd3NlbnBtLm9yZy9wYWNrYWdlLmpzb25cIixcbiAgICBcInRvZG8yXCI6IFwiaHR0cHM6Ly93d3cubnBtanMub3JnL2RvYy9maWxlcy9wYWNrYWdlLmpzb24uaHRtbFwiLFxuICAgIFwiaGVscFwiOiBcIiNkZXNjcmliZSBhbGwgbnBtIHRhc2tzIC0gaHR0cDovL2FuZGVycy5qYW5teXIuY29tLzIwMTQvMDMvcnVubmluZy1zY3JpcHRzLXdpdGgtbnBtLmh0bWwgKyBodHRwOi8vc3Vic3RhY2submV0L3Rhc2tfYXV0b21hdGlvbl93aXRoX25wbV9ydW5cIixcbiAgICBcImpvYnNcIjogXCIjbGlzdCBqb2JzICsgZGVzY3JpcHRpb24gb24gaG93IHRvIHN0YXJ0IHdvcmtpbmcgb24gb25lICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRldmVsb3BcIjogXCIjY2hlY2tvdXQgam9iIGJyYW5jaCArIHN0eWx1cyAmIHdhdGNoICYgdGVzdGVtICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRlcGxveVwiOiBcIiNidWlsZCArIHJ1biBhbGwgdGVzdHMgKyBnaXQgcHVzaCBpZiBzdWNjZXNzZnVsIEFORCAuLi4gd2hhdCBhYm91dCBkb2NrZXI/Pz9cIixcbiAgICBcInJlbGVhc2VcIjogXCIjYnVpbGQgdGhyb3VnaCBicm93c2VyaWZ5LCB0ZXN0IGFsbCArIGlmIHN1Y2Nlc3NmdWw6IHVnbGlmeSArIHNlbXZlciArIHB1c2ggd2l0aCB0YWdzICsgTk9UIG5wbSBwdWJsaXNoLCBib3dlciByZWdpc3RlciwgLi4uLlwiLFxuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxICNydW4gdGVzdGVtXCIsXG4gICAgXCJzcGVjXCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ1Z2xpZnlcIjogXCIjaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay91Z2xpZnlpZnlcIixcbiAgICBcInN0dWZmXCI6IFwiI2VjaG8gdiQoY2F0IHBhY2thZ2UuanNvbiB8IGdyZXAgdmVyc2lvbiB8IGdyZXAgLVBvICcoPzw9dmVyc2lvblxcXCI6IFxcXCIpLiooPz1cXFwiKScpLCBucG0gcnVuIHNlcnZlLCBucG0gcnVuIHNwZWNcIixcblxuICAgIFwic3RhcnRcIjogXCJub2RlX21vZHVsZXMvYXRvbWlmeS9iaW4vYXRvbWlmeS5qc1wiXG4gIH0sXG4gIFwiYXRvbWlmeVwiOiB7XG4gICAgXCJzZXJ2ZXJcIjoge1xuICAgICAgXCJwb3J0XCI6IDEzMzcsXG4gICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L1wiLFxuICAgICAgXCJsclwiOiB7XG4gICAgICAgIFwidmVyYm9zZVwiOiB0cnVlLFxuICAgICAgICBcInF1aWV0XCI6IGZhbHNlLFxuICAgICAgICBcInBhdHRlcm5zXCI6IFtdLFxuICAgICAgICBcInBvcnRcIjogMzEzMzcsXG4gICAgICAgIFwic3luY1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJzdFwiOiB7XG4gICAgICAgIFwicGF0aFwiOiBcIi4vXCIsXG4gICAgICAgIFwiY2FjaGVcIjogZmFsc2UsXG4gICAgICAgIFwiaW5kZXhcIjogXCJpbmRleC5odG1sXCIsXG4gICAgICAgIFwiZG90XCI6IGZhbHNlLFxuICAgICAgICBcInBhc3N0aHJvdWdoXCI6IGZhbHNlLFxuICAgICAgICBcImd6aXBcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJqc1wiOiB7XG4gICAgICBcImVudHJ5XCI6IFwiU09VUkNFL2luZGV4LmpzXCIsXG4gICAgICBcImFsaWFzXCI6IFwiUkVMRUFTRS9MSUJSQVJZLmJ1bmRsZS5qc1wiLFxuICAgICAgXCJvdXRwdXRcIjogXCJSRUxFQVNFL0xJQlJBUlkuYnVuZGxlLmpzXCIsXG4gICAgICBcImRlYnVnXCI6IHRydWUsXG4gICAgICBcInRyYW5zZm9ybXNcIjogW10sXG4gICAgICBcInN0YW5kYWxvbmVcIjogXCJMSUJSQVJZXCJcbiAgICB9XG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0gMC4xMC4yNVwiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9ob2xvbi5naXRcIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24vaXNzdWVzXCJcbiAgfSxcbiAgXCJsaWNlbnNlc1wiOiBbe1xuICAgIFwidHlwZVwiOiBcIkNDMFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wL1wiXG4gIH1dLFxuICBcImxpY2Vuc2VcIjogXCJDQzBcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicGxhdGVzXCI6IFwiZ2l0Oi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL3BsYXRlcyN2MC40LjEyXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXRvbWlmeVwiOiBcIl4zLjIuMFwiXG4gIH0sXG4gIFwib3B0aW9uYWxEZXBlbmRlbmNpZXNcIjoge30sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7fVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJMZWFkU2hhcmVBcHBGcm9udGVuZFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuOFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiW0xJQlJBUlldIC0gRnJvbnRlbmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9uaW5hYnJlem5pay9MZWFkU2hhcmVBcHAuZ2l0XCIsXG4gIFwic3R5bGVcIjogXCJTT1VSQ0UvaW5kZXguY3NzXCIsXG4gIFwibWFpblwiOiBcIlNPVVJDRS9pbmRleC5qc1wiLFxuICBcImRpcmVjdG9yaWVzXCI6IHtcbiAgICBcInRlc3RcIjogXCJTUEVDSUZJQ0FUSU9OXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRvZG9cIjogXCJodHRwOi8vYnJvd3NlbnBtLm9yZy9wYWNrYWdlLmpzb25cIixcbiAgICBcInRvZG8yXCI6IFwiaHR0cHM6Ly93d3cubnBtanMub3JnL2RvYy9maWxlcy9wYWNrYWdlLmpzb24uaHRtbFwiLFxuICAgIFwiaGVscFwiOiBcIiNkZXNjcmliZSBhbGwgbnBtIHRhc2tzIC0gaHR0cDovL2FuZGVycy5qYW5teXIuY29tLzIwMTQvMDMvcnVubmluZy1zY3JpcHRzLXdpdGgtbnBtLmh0bWwgKyBodHRwOi8vc3Vic3RhY2submV0L3Rhc2tfYXV0b21hdGlvbl93aXRoX25wbV9ydW5cIixcbiAgICBcImpvYnNcIjogXCIjbGlzdCBqb2JzICsgZGVzY3JpcHRpb24gb24gaG93IHRvIHN0YXJ0IHdvcmtpbmcgb24gb25lICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRldmVsb3BcIjogXCIjY2hlY2tvdXQgam9iIGJyYW5jaCArIHN0eWx1cyAmIHdhdGNoICYgdGVzdGVtICsgaG93IHRvIHN0b3AgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRlcGxveVwiOiBcIiNidWlsZCArIHJ1biBhbGwgdGVzdHMgKyBnaXQgcHVzaCBpZiBzdWNjZXNzZnVsIEFORCAuLi4gd2hhdCBhYm91dCBkb2NrZXI/Pz9cIixcbiAgICBcInJlbGVhc2VcIjogXCIjYnVpbGQgdGhyb3VnaCBicm93c2VyaWZ5LCB0ZXN0IGFsbCArIGlmIHN1Y2Nlc3NmdWw6IHVnbGlmeSArIHNlbXZlciArIHB1c2ggd2l0aCB0YWdzICsgTk9UIG5wbSBwdWJsaXNoLCBib3dlciByZWdpc3RlciwgLi4uLlwiLFxuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxICNydW4gdGVzdGVtXCIsXG4gICAgXCJzcGVjXCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ1Z2xpZnlcIjogXCIjaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay91Z2xpZnlpZnlcIixcbiAgICBcInN0dWZmXCI6IFwiI2VjaG8gdiQoY2F0IHBhY2thZ2UuanNvbiB8IGdyZXAgdmVyc2lvbiB8IGdyZXAgLVBvICcoPzw9dmVyc2lvblxcXCI6IFxcXCIpLiooPz1cXFwiKScpLCBucG0gcnVuIHNlcnZlLCBucG0gcnVuIHNwZWNcIixcblxuICAgIFwic3R5bHVzXCI6IFwibm9kZV9tb2R1bGVzL3N0eWx1cy9iaW4vc3R5bHVzIC0td2F0Y2ggU09VUkNFL2luZGV4LnN0eWwgLS11c2UgLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLXN0eWx1cyAtLXJlc29sdmUtdXJsIC0tY29tcHJlc3MgLS1vdXQgU09VUkNFL1wiLFxuICAgIFwic3RhcnRcIjogXCJucG0gcnVuIHN0eWx1cyAmIG5vZGVfbW9kdWxlcy9hdG9taWZ5L2Jpbi9hdG9taWZ5LmpzXCJcbiAgfSxcbiAgXCJhdG9taWZ5XCI6IHtcbiAgICBcInNlcnZlclwiOiB7XG4gICAgICBcInBvcnRcIjogMTMzNyxcbiAgICAgIFwib3BlblwiOiB0cnVlLFxuICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvXCIsXG4gICAgICBcImxyXCI6IHtcbiAgICAgICAgXCJ2ZXJib3NlXCI6IHRydWUsXG4gICAgICAgIFwicXVpZXRcIjogZmFsc2UsXG4gICAgICAgIFwicGF0dGVybnNcIjogW1wiUkVMRUFTRS9BUFAuYnVuZGxlLmNzc1wiXSxcbiAgICAgICAgXCJwb3J0XCI6IDMxMzM3LFxuICAgICAgICBcInN5bmNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwic3RcIjoge1xuICAgICAgICBcInBhdGhcIjogXCIuL1wiLFxuICAgICAgICBcImNhY2hlXCI6IGZhbHNlLFxuICAgICAgICBcImluZGV4XCI6IFwiaW5kZXguaHRtbFwiLFxuICAgICAgICBcImRvdFwiOiBmYWxzZSxcbiAgICAgICAgXCJwYXNzdGhyb3VnaFwiOiBmYWxzZSxcbiAgICAgICAgXCJnemlwXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIFwianNcIjoge1xuICAgICAgXCJlbnRyeVwiOiBcIlNPVVJDRS9pbmRleC5qc1wiLFxuICAgICAgXCJhbGlhc1wiOiBcIlJFTEVBU0UvQVBQLmJ1bmRsZS5qc1wiLFxuICAgICAgXCJvdXRwdXRcIjogXCJSRUxFQVNFL0FQUC5idW5kbGUuanNcIixcbiAgICAgIFwiZGVidWdcIjogdHJ1ZSxcbiAgICAgIFwidHJhbnNmb3Jtc1wiOiBbXSxcbiAgICAgIFwic3RhbmRhbG9uZVwiOiBcIkFQUFwiXG4gICAgfSxcbiAgICBcImNzc1wiOiB7XG4gICAgICBcImVudHJ5XCI6IFwiU09VUkNFL2luZGV4LmNzc1wiLFxuICAgICAgXCJhbGlhc1wiOiBcIlJFTEVBU0UvQVBQLmJ1bmRsZS5jc3NcIixcbiAgICAgIFwib3V0cHV0XCI6IFwiUkVMRUFTRS9BUFAuYnVuZGxlLmNzc1wiLFxuICAgICAgXCJkZWJ1Z1wiOiB0cnVlLFxuICAgICAgXCJ3YXRjaFwiOiB0cnVlLFxuICAgICAgXCJjb21wcmVzc1wiOiB0cnVlLFxuICAgICAgXCJwbHVnaW5zXCI6IFtdLFxuICAgICAgXCJ2YXJpYWJsZXNcIjoge31cbiAgICB9LFxuICAgIFwiYXNzZXRzXCI6IHtcbiAgICAgIFwiZGVzdFwiOiBcIlJFTEVBU0UvYXNzZXRzL1wiLFxuICAgICAgXCJwcmVmaXhcIjogXCJhc3NldHMvXCIsXG4gICAgICBcInJldGFpbk5hbWVcIjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY29kaW5nLWFtaWdvcy9MZWFkU2hhcmVBcHBGcm9udGVuZC5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImxlYWRcIixcbiAgICBcImxlYWRzXCIsXG4gICAgXCJjYW1wYWlnblwiLFxuICAgIFwiY2FtcGFpZ25cIixcbiAgICBcImdvb2dsZVwiLFxuICAgIFwiYWRzXCIsXG4gICAgXCJhZHdvcmRzXCJcbiAgXSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PSAwLjEwLjI1XCJcbiAgfSxcbiAgXCJhdXRob3JcIjogW1xuICAgIFwic2VyYXBhdGggPGRldkBzZXJhcGF0aC5kZT4gKGh0dHA6Ly93d3cuZ2l0aHViLmNvbS9zZXJhcGF0aClcIlxuICBdLFxuICBcImNvbnRyaWJ1dG9yc1wiOiBbXG4gICAge1xuICAgICAgXCJnZW5lcmF0ZWRXaXRoXCI6IFwiaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvY29udHJpYnV0b3JcIixcbiAgICAgIFwibmFtZVwiOiBcIkFsZXhhbmRlciBQcmFldG9yaXVzXCIsXG4gICAgICBcImVtYWlsXCI6IFwiZGV2QHNlcmFwYXRoLmRlXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXJhcGF0aFwiLFxuICAgICAgXCJjb250cmlidXRpb25zXCI6IDIwLFxuICAgICAgXCJoaXJlYWJsZVwiOiB0cnVlXG4gICAgfVxuICBdLFxuICBcImxpY2Vuc2VzXCI6IFt7XG4gICAgXCJ0eXBlXCI6IFwiQ0MgQlktTkMtTkQgNC4wXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtbmQvNC4wL1wiXG4gIH1dLFxuICBcImxpY2Vuc2VcIjogXCJDQyBCWS1OQy1ORCA0LjBcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RpbmctYW1pZ29zL0xlYWRTaGFyZUFwcEZyb250ZW5kL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2NvZGluZ2FtaWdvcy5jb20vTGVhZFNoYXJlQXBwRnJvbnRlbmRcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImF1dG9wcmVmaXhlci1zdHlsdXNcIjogXCJeMC4zLjBcIixcbiAgICBcImF4aXNcIjogXCJeMC4yLjFcIixcbiAgICBcImZvbnQtYXdlc29tZVwiOiBcIl40LjEuMFwiLFxuICAgIFwiaG9sb25cIjogXCJnaXQ6Ly9naXRodWIuY29tL2NvZGluZy1hbWlnb3MvaG9sb24jdjAuMC42XCIsXG4gICAgXCJqZWV0XCI6IFwiXjUuMy4wXCIsXG4gICAgXCJuaWJcIjogXCJeMS4wLjNcIixcbiAgICBcInJ1cHR1cmVcIjogXCJeMC4zLjFcIixcbiAgICBcInN0eWx1c1wiOiBcIl4wLjQ4LjFcIixcbiAgICBcInR5cG9ncmFwaGljXCI6IFwiXjAuMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXRvbWlmeVwiOiBcImdpdDovL2dpdGh1Yi5jb20vc2VyYXBhdGgvYXRvbWlmeVwiXG4gIH0sXG4gIFwib3B0aW9uYWxEZXBlbmRlbmNpZXNcIjoge30sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7fVxufVxuIl19
