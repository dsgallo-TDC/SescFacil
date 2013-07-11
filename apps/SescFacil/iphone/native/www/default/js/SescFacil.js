
/* JavaScript content from js/SescFacil.js in folder common */
/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

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
	
	//$("#botaoProgramacao").bind('click', getItens);

}

//var getItens = function() {
function getProgramacao() {	
	var sucessoProgramacao = function(result) {
		WL.Logger.debug("sucessoProgramacao: " + result.invocationResult);
		var programacao = result.invocationResult.rss.channel.item;
		if(programacao.length > 0) {
			//Exibir programação na tela...
			
			WL.Logger.debug("sucessoProgramacao: OK!\n" + programacao);
			
		} else {
			WL.Logger.error("ERRO sucessoProgramacao - Items.length=" + result.invocationResult.Items.length);
		}
	};
	
	var falhaProgramacao = function(result) {
		WL.Logger.debug("falhaProgramacao: " + result);
	};
	
	var invocationData = {
			adapter : 'SescRSS',
			procedure : 'getProgramacao',
			parameters : [13] //unidade
	};
	
	var options = {
			onSuccess : sucessoProgramacao,
			onFailure : falhaProgramacao,
			invocationContext : {}
	};
	
	
	WL.Client.invokeProcedure(invocationData, options);
	alert('test');
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