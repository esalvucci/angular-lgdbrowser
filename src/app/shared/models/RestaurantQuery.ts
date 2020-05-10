import {AbstractQuery} from './AbstractQuery';

export class RestaurantQuery extends AbstractQuery {

 getQueryString(distance, language, numberOfResults, point) {
   return 'PREFIX lgdo: <http://linkedgeodata.org/ontology/>\n' +
     'Prefix ogc: <http://www.opengis.net/ont/geosparql#>\n' +
     'PREFIX geom: <http://geovocab.org/geometry#>\n' +
     'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
     'PREFIX addr: <http://linkedgeodata.org/ontology/addr%3A>\n' +
     '\n' +
     'SELECT * {\n' +
     'SERVICE <http://linkedgeodata.org/sparql> {\n' +
     '  ?s\n' +
     '    a lgdo:Restaurant;\n' +
     '    rdfs:label ?label;\n' +
     '    geom:geometry [ ogc:asWKT ?sg ] .\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '      ?s lgdo:cuisine ?cuisine.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '      ?s lgdo:smoking ?smoking.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '      ?s lgdo:internet_access ?internetaccess.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '      ?s lgdo:opening_hours ?openinghours.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '      ?s lgdo:capacity ?capacity.\n' +
     '    }\n' +
     '\n' +
     '    OPTIONAL {\n' +
     '       ?s foaf:phone ?phone;\n' +
     '       foaf:homepage ?homepage.\n' +
     '    }\n' +
     'OPTIONAL {\n' +
     '    ?s addr:street ?street;\n' +
     '       addr:housenumber ?houseNumber.\n' +
     '}\n' +
     '    \n' +
     'OPTIONAL {\n' +
     '   ?s addr:city ?city;\n' +
     '      addr:country ?country.\n' +
     '}\n' +
     '   Filter(bif:st_intersects(?sg, bif:st_point(' + point.longitude + ', ' + point.latitude + '), ' + distance + ')) .\n' +
     '}' +
     '}\n';
 }
}
