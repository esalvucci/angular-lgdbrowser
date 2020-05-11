import {AbstractQuery} from './AbstractQuery';

export class CinemaQuery extends AbstractQuery {

 getQueryString(distance, language, numberOfResults, point) {
   return 'PREFIX lgdo: <http://linkedgeodata.org/ontology/>\n' +
     'Prefix ogc: <http://www.opengis.net/ont/geosparql#>\n' +
     'PREFIX geom: <http://geovocab.org/geometry#>\n' +
     'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
     'PREFIX addr: <http://linkedgeodata.org/ontology/addr%3A>\n' +
     'PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>\n' +
     'PREFIX bif:<bif:>\n' +
     '\n' +
     'SELECT * {\n' +
     'SERVICE <http://linkedgeodata.org/sparql> {\n' +
     '  ?s\n' +
     '    a lgdo:Cinema;\n' +
     '    rdfs:label ?label;\n' +
     '    geom:geometry [ ogc:asWKT ?sg ] .\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '       ?s addr:street ?street;\n' +
     '          addr:housenumber ?houseNumber.\n' +
     '    }\n' +
     '    \n' +
     '    OPTIONAL {\n' +
     '         ?s addr:city ?city;\n' +
     '         addr:country ?country.\n' +
     '    }\n' +
     '   \n' +
     '    OPTIONAL {\n' +
     '       ?s lgdo:wheelchair ?hasWheelchair.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '       ?s foaf:phone ?phone.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '       ?s foaf:homepage ?homepage.\n' +
     '    }\n' +
     ' \n' +
     '    ?s geo:lat ?latitude;\n' +
     '       geo:long ?longitude.\n' +
     '    \n' +
     '    Filter(bif:st_intersects(?sg, bif:st_point(' + point.longitude + ', ' + point.latitude + '), ' + distance + ')) .\n' +
     '\n' +
     '}' +
     '}';
 }
}
