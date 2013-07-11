
/* JavaScript content from js/SescFacil.js in folder common */
/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

var programacao;

function wlCommonInit(){

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	
	// Common initialization code goes here

}

function mostraDetalhe(index) {
	alert(programacao[index].title);
	$('#detalhesEvento').find('#titulo').text(programacao[index].title);
	$('#detalhesEvento').find('#data').text('Data: ' + programacao[index].date);
	$('#detalhesEvento').find('#descricao').html(programacao[index].description);
	
	$.mobile.changePage($("#detalhesEvento"));
}

function getProgramacao(procedureName, id) {	
	var sucessoProgramacao = function(result) {
		WL.Logger.debug("sucessoProgramacao: " + result.invocationResult);
		programacao = result.invocationResult.rss.channel.item;
		if(programacao.length > 0) {
			//Exibir programação na tela...
			//$('#menuInicial').hide();
			for(var i = 0; i < programacao.length; i++) { //onclick="mostraDetalhe(\'' + programacao[i].title + '\', \'' + programacao[i].date + '\', \' '+ programacao[i].description + '\')"
				$('#ulListaEventos').append('<li><a href="#detalheEvento" onclick="mostraDetalhe(' + i + ')">' + programacao[i].title + '</a></li>');
			}
			$('#ulListaEventos').listview('refresh');
			//$('#listaEventos').show();
			
			WL.Logger.debug("sucessoProgramacao: OK!\n" + programacao);
			
		} else {
			WL.Logger.error("ERRO sucessoProgramacao - rss.channel.item.length=" + result.invocationResult.rss.channel.item.length);
		}
	};
	
	var falhaProgramacao = function(result) {
		WL.Logger.debug("falhaProgramacao: " + result);
	};
	
	var invocationData = {
			adapter : 'SescRSS',
			procedure : procedureName, //getProgramacao ou getProgramacaoPorCategoria
			parameters : [id] //unidade ou categoria
	};
	
	var options = {
			onSuccess : sucessoProgramacao,
			onFailure : falhaProgramacao,
			invocationContext : {}
	};
	
	
	WL.Client.invokeProcedure(invocationData, options);
	alert('test');
}

$("li").bind('vclick', function(event)
		{
	alert(this.innerHTML);
		});

function getUnidades() {	
	var sucessoUnidades = function(result) {
		WL.Logger.debug("sucessoUnidades: " + result.invocationResult);
		var unidades = result.invocationResult.unidades;
		if(unidades.length > 0) {
			//Exibir unidades na tela...
			
			WL.Logger.debug("sucessoUnidades: OK!\n" + unidades);
			
		} else {
			WL.Logger.error("ERRO sucessoUnidades - unidades.length=" + result.invocationResult.unidades.length);
		}
	};
	
	var falhaUnidades = function(result) {
		WL.Logger.debug("falhaUnidades: " + result);
	};
	
	var invocationData = {
			adapter : 'SescRSS',
			procedure : 'getUnidades',
			parameters : []
	};
	
	var options = {
			onSuccess : sucessoUnidades,
			onFailure : falhaUnidades,
			invocationContext : {}
	};
	
	
	WL.Client.invokeProcedure(invocationData, options);
	alert('test unidades');
}

/* JavaScript content from js/SescFacil.js in folder iphone */
/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}