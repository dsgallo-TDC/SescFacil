/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "javascript", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * @param unidade
 *            número da unidade (e.g. 13 para Vila Mariana)
 * @returns json list of items
 */
function getProgramacao(unidade) {
	path = getPath(unidade);
	
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : path
	};
	
	return WL.Server.invokeHttp(input);
}

function getProgramacaoPorCategoria(categoria) {
	path = getPathPorCategoria(categoria);
	
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : path
	};
	
	return WL.Server.invokeHttp(input);
}

function getUnidades() {
	var unidadesJSON = {
		    "unidades": [
		                 {
		                     "id": 13,
		                     "nome": "SESC Vila Mariana",
		                     "endereco": "Rua Pelotas, 141, Vila Mariana SAO PAULO | CEP: 04012-000",
		                     "coords": {
		                         "lat": -23.5817,
		                         "lon": -46.6442
		                     }
		                 },
		                 {
		                     "id": 26,
		                     "nome": "SESC Santo Amaro",
		                     "endereco": "Rua Amador Bueno, 505, Santo Amaro SAO PAULO | CEP: 04752-005",
		                     "coords": {
		                         "lat": -23.6529,
		                         "lon": -46.7132
		                     }
		                 }
		             ]
		         };
	return unidadesJSON;
}

function getPath(unidade) {
	return 'rss/programacao/unidade/' + unidade + '.rss';
}

function getPathPorCategoria(categoria) {
	return 'rss/programacao/categoria/' + categoria + '.rss';
}
