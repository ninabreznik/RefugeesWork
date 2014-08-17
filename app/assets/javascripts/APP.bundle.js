(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/serapath/workspace/codingamigos/LeadShareApp/app/assets/javascripts/APP.js":[function(require,module,exports){
window.APP = require('LeadShareAppFrontend').COMPONENT_LeadShareAppFrontend();

},{"LeadShareAppFrontend":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/index.js"}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/index.js":[function(require,module,exports){
// LEAD SHARE APP SCRIPT

// http://learnjs.io/blog/2014/03/17/using-browserify-with-rails/
module.exports = { // EXPORT as GLOBAL
  VERSION                   : 'v0.0.4',
  NAME                      : 'LeadShareAppFrontend',
  COMPONENT_LeadShareAppFrontend  : COMPONENT_LeadShareAppFrontend
};
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
IMPORT COMPONENT: Complexform
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function COMPONENT_LeadShareAppFrontend () {
  var DEPs = {
    holon : require('holon') // @TODO: Replace with PLATES.JS
  };




// return PRODUCTION_MODE();
return { START: DEVELOP_MODE };

function DEVELOP_MODE () {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
alert("Currently in DEV MODE:\n Change 'line 20 & 21' in RainbowUnicorn.js to switch to PRODUCTION MODE");
document.querySelector('#DEVELOP_MODE').style.display = 'block';
var Plates = DEPs.holon().Plates;
var holonize = DEPs.holon().holonize;
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
  var template_MAIN = require('./index.template.html');


  /////////////////////////////////////////////////////////////////////////////
  var data_SUB5       = { name2: ['Louis CK', 'Andy Kindler', 'Greg Giraldo', 'asdf'] };
  var data_SUB4       = { test: 'In addition, it contains content'};
  var data_MAIN       = {
    user:       "Charly",
    imageurl:   "http://www.nodejitsu.com",
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


// <%# DATA SAMPLE = {

// :id=>33,

//   :firstname=>"Hans556.67523317970341", 
//   :lastname=>"Meier556.67523317970341",

// :gender=>"<select class=\"chzn-select chzn-select-deselect\" style=\"width: 278px;\" data-placeholder=\"Bitte wählen ...\"><option value=\"Frau\">Frau</option><option value=\"Herr\">Herr</option></select>",

//   :title=>nil,

// :businessrelation_ids=>[2, 4],
// :topic_ids=>[1, 3],
// :user_id=>[1],
// :internal_contact_person_ids=>[1],

//   :phone=>"123456556.67523317970341",
//   :mobile=>"0177 1234 1234556.67523317970341",
//   :email=>"hans.meier556.67523317970341@email.com",
//   :phone_company=>"030 12345556.67523317970341",
//   :fax=>nil,
//   :email_company=>"hans.meier556.67523317970341@company.com",
//   :business_unit=>"Human Ressource556.67523317970341",
//   :position=>"Key Account Manager556.67523317970341",

//   :event_invitation_receiver=>false,
//   :email_receiver=>false,
//   :mass_email_receiver=>false,
//   :attaining_public_office=>false,
//   :phone_receiver=>false,
//   :fax_receiver=>false,
//   :letter_receiver=>false,

//   :company_name=>"Example GmbH556.67523317970341",
//   :company_name_addition=>"Holding556.67523317970341",


//   :street=>"Hauptstrasse 55556.67523317970341",
//   :street_addition=>"Nebenweg 5556.67523317970341",
//   :zip=>"555333556.67523317970341",
//   :post_box=>"535353556.67523317970341",
//   :post_box_zip=>"535353 POST BOX556.67523317970341",
//   :city=>"Berlin556.67523317970341",
//   :country_name=>"Deutschland556.67523317970341",
//   :region=>"Berlin Region556.67523317970341",

// :vita_steps_attributes=>"[{\"created_at\":\"2014-08-06T19:47:58+02:00\",\"description\":\"Es ist der hell Wahnsinn, was dieser Herr Mustermann so von sich zu berichten weiss.\",\"id\":25,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"Erstes Telefonat\",\"updated_at\":\"2014-08-06T19:47:58+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T19:47:58+02:00\",\"description\":\"Heute hat Herr Mustermann uns eine besonders profitable neue Option vorgestellt um den Umsatz um 25% p.a. zu steigern. \",\"id\":26,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"Das zweite Telefonat\",\"updated_at\":\"2014-08-06T19:47:58+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T19:47:58+02:00\",\"description\":\"Die Idee hat sich als hoch spekulativ herausgestellt und hat keineswegs funktioniert. Wir melden nun unsere Insolvenz an.\",\"id\":27,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"Die letzte Email\",\"updated_at\":\"2014-08-06T19:47:58+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T20:00:52+02:00\",\"description\":\"lorem ipsum\",\"id\":28,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"bla\",\"updated_at\":\"2014-08-06T20:00:52+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T20:00:52+02:00\",\"description\":\" lorem ipsum lorem ipsum lorem ipsum lorem ipsum\",\"id\":29,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"bla2\",\"updated_at\":\"2014-08-06T20:00:52+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T20:00:57+02:00\",\"description\":\"lorem ipsum\",\"id\":30,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"bla\",\"updated_at\":\"2014-08-06T20:00:57+02:00\",\"user_id\":1},{\"created_at\":\"2014-08-06T20:00:57+02:00\",\"description\":\" lorem ipsum lorem ipsum lorem ipsum lorem ipsum\",\"id\":31,\"loggable_id\":33,\"loggable_type\":\"GoldencobraCrm::Customer\",\"title\":\"bla2\",\"updated_at\":\"2014-08-06T20:00:57+02:00\",\"user_id\":1}]"},
// %>


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
}


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
  // INITIALIZE RAINBOWUNICORN COMPOENT
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

      // user_id sollte array sein für wietere verarbeitung
      if (typeof(customerData) == 'number') {
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
      // INITIALIZE COMPONENTS - DYNAWRAPPER
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
        // INIT DYNATABLE
        DEPs.DynaWrapper.initTable(dynatable);
        // PUBLISH ENTITY INTERFACE
        return dynatable;
      })(containerQuery);


      //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // INITIALIZE COMPONENTS - COMPLEXFORM
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
        // INIT COMPLEXFORM
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

}

},{"./index.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/index.template.html","./templates/SUB1.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB1.template.html","./templates/SUB2.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB2.template.html","./templates/SUB3.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB3.template.html","./templates/SUB4.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB4.template.html","./templates/SUB5.template.html":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB5.template.html","holon":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/node_modules/holon/SOURCE/index.js"}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/index.template.html":[function(require,module,exports){
module.exports = '<div id="template_MAIN">\n' +
    '  <div data-bind="name">__NOT_SHOWN_BECAUSE_REPLACED__</div>\n' +
    '  <img data-foo="bar" src=""></img><br>\n' +
    '  <input placeholder="/">Schoobidoo</input><br>\n' +
    '  <input placeholder="/foo/bar">Schoobidoo123</input><br><br>\n' +
    '  <h2>Userlist</h2>\n' +
    '  <span class="name">User</span>...<span class="name">User</span><br><br>\n' +
    '  <div class="insert_subtemplate">\n' +
    '    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n' +
    '  </div>\n' +
    '  <div class="insert_collectionA" style="background-color: yellow;">\n' +
    '    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n' +
    '  </div>\n' +
    '  <div class="insert_ARRAY" style="background-color: orange;">\n' +
    '    <p>__NOT_SHOWN_BECAUSE_REPLACED__</p>\n' +
    '  </div>\n' +
    '  <div class="insert_SUBTEMPLATE" style="background-color: green;">\n' +
    '    <h1> SUBTEMPLATING with BIND </h1><h3>This is the main template.</h3><div id="main"></div><h3>The End.</h3>\n' +
    '  </div>\n' +
    '  <div class="moo" style="background-color: blue;">\n' +
    '    <h2> ARRAY D</h2>\n' +
    '    <div>\n' +
    '      <ul class="list"></ul>\n' +
    '      <div>\n' +
    '        <h3>Hello World</h3>\n' +
    '        <p>C"li"ck the following button.</p>\n' +
    '        <span> Go back</span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB1.template.html":[function(require,module,exports){
module.exports = '<div id="template_SUB1">\n' +
    '	<div class="trolling"></div>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB2.template.html":[function(require,module,exports){
module.exports = '<div id="template_SUB2">\n' +
    '  <div>\n' +
    '    <h2> COLLECTION A</h2>\n' +
    '    <ul><li data-bind="name">REPLACE</li></ul>\n' +
    '    <div>\n' +
    '      <h3>Hello World</h3>\n' +
    '      <p>Press the following button.</p>\n' +
    '      <span>Go back</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB3.template.html":[function(require,module,exports){
module.exports = '<div id="template_SUB3">\n' +
    '  <div>\n' +
    '    <h2> ARRAY B</h2>\n' +
    '    <ul><li data-bind="name">REPLACE</li></ul>\n' +
    '    <div>\n' +
    '      <h3>Hello World</h3>\n' +
    '      <p>C"lu"ck the following button.</p>\n' +
    '      <span> Go back</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB4.template.html":[function(require,module,exports){
module.exports = '<div id="template_SUB4">\n' +
    '  <p>\n' +
    '    This is the partial that should be rendered into the main template.\n' +
    '    <span id="test">__NOT_SHOWN_BECAUSE_REPLACED__</span>\n' +
    '  </p>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/SOURCE/templates/SUB5.template.html":[function(require,module,exports){
module.exports = '<div id="template_SUB5">\n' +
    '  <li class="name2">REPLACE</li>\n' +
    '</div>\n' +
    '';
},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/node_modules/holon/SOURCE/index.js":[function(require,module,exports){
module.exports = MODULE_holon;

var Plates = require('plates');

function MODULE_holon () {
  return {
    Plates: Plates,
    holonize: {}
  };
} 

},{"plates":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/node_modules/holon/node_modules/plates/lib/plates.js"}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/LeadShareAppFrontend/node_modules/holon/node_modules/plates/lib/plates.js":[function(require,module,exports){
(function (process){
var Plates = (typeof module !== 'undefined' && typeof exports !== 'undefined') ? exports : {};

!function(exports, env, undefined) {
  "use strict";

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
// Matches a closing tag to a open tag
//
function matchClosing(input, tagname, html) {
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

  var Merge = function Merge() {};
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
    // ### function replace(val1, val2)
    // #### @val1 {String|RegExp} The part of the attribute that needs to be replaced
    // #### @val2 {String} The value it should be replaced with
    //
    replace: function replace(val1, val2) {
      var l = last.call(this);
      l.replacePartial1 = val1;
      l.replacePartial2 = val2;
      return this;
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
    // ### function class(val)
    // #### @val {String} a value that may be found in the `class` attribute of a tag
    // the method name should be wrapped in quotes or it will throw errors in IE.
    //
    'class': function className(val) {
      return this.where('class').is(val);
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
    // ### function is(val)
    // #### @val {string} The value of the attribute that was specified in the
    // `where` clause.
    //
    is: function is(val) {
      last.call(this).value = val;
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
    // ### function remove()
    // This will remove the element that was specified in the `where` clause
    // from the template.
    //
    remove: function remove() {
      last.call(this).remove = true;
      return last.call(this, true);
    },

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

      // If the supplied plates template doesn't contain any HTML it's most
      // likely that we need to import it. To improve performance we will cache
      // the result of the file system.
      if (!/<[^<]+?>/.test(plates) && !exports.cache[plates]) {
        // figure out if we are running in Node.js or a browser
        if ('document' in env && 'getElementById' in env.document) {
          exports.cache[plates] = document.getElementById(plates).innerHTML;
        } else {
          exports.cache[plates] = require('fs').readFileSync(
            require('path').join(process.cwd(), plates),
            'utf8'
          );
        }
      }

      l.plates = exports.cache[plates] || plates;
      l.data = data;
      l.mapper = map;

      return last.call(this, true);
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
  // Expose a simple cache object so people can clear the cached partials if
  // they want to.
  //
  exports.cache = {};

  //
  // Expose the Plates#bind interface.
  //
  exports.bind = function bind(html, data, map) {
    var merge = new Merge();
    return merge.bind(html, data, map);
  };

  //
  // Expose the Mapper.
  //
  exports.Map = Mapper;
}(Plates, this);

}).call(this,require('_process'))
},{"_process":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/node_modules/process/browser.js","fs":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/lib/_empty.js","path":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/node_modules/path-browserify/index.js"}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/lib/_empty.js":[function(require,module,exports){

},{}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/node_modules/path-browserify/index.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/node_modules/process/browser.js"}],"/home/serapath/workspace/codingamigos/LeadShareApp/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},["/home/serapath/workspace/codingamigos/LeadShareApp/app/assets/javascripts/APP.js"]);
