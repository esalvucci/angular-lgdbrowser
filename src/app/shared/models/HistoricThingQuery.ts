export class HistoricThingQuery extends AbstractQuery {

 getQueryString() {
   return 'Prefix lgdo: <http://linkedgeodata.org/ontology/>\n' +
     'Prefix geom: <http://geovocab.org/geometry#>\n' +
     'Prefix ogc:<http://www.opengis.net/ont/geosparql#>\n' +
     'Select *\n' +
     'From <http://linkedgeodata.org> {\n' +
     '  ?s\n' +
     '    a lgdo:Amenity ;\n' +
     '    rdfs:label ?l ;    \n' +
     '    geom:geometry [\n' +
     '      ogc:asWKT ?g\n' +
     '    ] .\n' +
     '\n' +
     '    Filter(bif:st_intersects (?g, bif:st_point (' + 12.24628 + ',' + 44.13600 + '), 0.1)) .\n' +
     '}';
 }
}
