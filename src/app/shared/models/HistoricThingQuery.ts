import {AbstractQuery} from './AbstractQuery';

export class HistoricThingQuery extends AbstractQuery {

 getQueryString(distance, language, numberOfResults, point) {
   return 'Prefix lgdr:<http://linkedgeodata.org/triplify/>\n' +
     'Prefix lgdo:<http://linkedgeodata.org/ontology/>\n' +
     'Prefix geom: <http://geovocab.org/geometry#>\n' +
     'Prefix ogc: <http://www.opengis.net/ont/geosparql#>\n' +
     'Prefix owl: <http://www.w3.org/2002/07/owl#>\n' +
     'PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
     'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
     'PREFIX dbpedia: <http://dbpedia.org/>\n' +
     'PREFIX dbo: <http://dbpedia.org/ontology/>\n' +
     'PREFIX dbp: <http://dbpedia.org/property/>\n' +
     'PREFIX bif:<bif:>\n' +
     'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
     'PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>\n' +
     'PREFIX lgdoob: <http://linkedgeodata.org/ontology/obelisk%3A>\n' +
     'PREFIX addr: <http://linkedgeodata.org/ontology/addr%3A>\n' +
     '\n' +
     'SELECT DISTINCT * {\n' +
     'SERVICE <http://linkedgeodata.org/sparql> {\n' +
     '{  ?x a lgdo:HistoricThing. }\n' +
     '  UNION\n' +
     '  {  ?x a lgdo:PlaceOfWorship . }\n' +
     '  UNION\n' +
     '  {  ?x a lgdo:Museum . }\n' +
     '  ?x\n' +
     '    rdfs:label ?label ;    \n' +
     '    geo:lat ?lat;\n' +
     '    geo:long ?long. \n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:opening_hours ?openingHours.\n' +
     ' }\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:start_date ?startDate.\n' +
     ' }\n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:construction_date ?constructionDate.\n' +
     ' }\n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:note ?note.\n' +
     ' }\n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:ruins ?ruins.\n' +
     ' }\n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdo:inscriptions ?inscriptions.\n' +
     ' }\n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x lgdoob:material ?material;\n' +
     '       lgdoob:height ?height;\n' +
     '       lgdoob:size ?size.\n' +
     ' } \n' +
     '\n' +
     ' OPTIONAL {\n' +
     '    ?x addr:street ?street;\n' +
     '       addr:housenumber ?houseNumber.\n' +
     '}\n' +
     '    \n' +
     'OPTIONAL {\n' +
     '   ?x addr:city ?city;\n' +
     '      addr:country ?country.\n' +
     '}\n' +
     '\n' +
     'FILTER(lang(?label) = "' + language + '" || lang(?label) = "").\n' +
     ' Filter(bif:st_intersects(bif:st_point(?long, ?lat), bif:st_point(' + point.longitude + ', ' + point.latitude + '), ' + distance + ')) .\n' +
     '}\n' +
     '\n' +
     'SERVICE <http://dbpedia.org/sparql> {\n' +
      'OPTIONAL {\n' +
       '?s  foaf:depiction ?imageUrl;\n' +
     'dbo:abstract ?abstract;\n' +
     'rdfs:label ?dbplabel;\n' +
     'geo:lat ?latitude;\n' +
     'geo:long ?longitude.\n' +
     'FILTER( bif:st_intersects(bif:st_point(?longitude, ?latitude), bif:st_point(?long, ?lat), 0.01 ) ) .\n' +
     'FILTER(lang(?abstract) = "' + language + '" || lang(?abstract) = "").\n' +
     'FILTER(lang(?dbplabel) = "' + language + '" || lang(?dbplabel) = "").\n' +
     '}}\n }';
 }
}
