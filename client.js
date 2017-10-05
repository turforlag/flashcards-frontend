/*************************************************************************
 *  [2016] - [2017] Turforlag.dk 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of Tur Forlag and its suppliers,
 * if any. The intellectual and technical concepts contained
 * herein are proprietary to Tur Forlag and its suppliers and
 * are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Tur Forlag Denmark.
 *
 * Version: 031017
 * Author: vanja@vanjapetrovic.com
 *
 */
 
 var debug = false;
 var endpoint = 'https://s3.eu-central-1.amazonaws.com/turforlag-flashcards-cdn/';
 if (localStorage.getItem("debug") != null){
	debug = localStorage.getItem("debug");
 }

function loadjQuery(url, success) {
    var script = document.createElement('script');
    script.src = url;
    var head = document.getElementsByTagName('head')[0],
    done = false;
    head.appendChild(script);
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
            success();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
}

if (typeof jQuery == 'undefined') {
    loadjQuery('https://code.jquery.com/jquery-3.2.1.min.js', function () {
        if (debug){console.log("jQuery loaded!");}
        GM_wait();
    });
}
else {
    GM_wait();
}

// Check if jQuery's loaded 
function GM_wait() {
    if (typeof jQuery == 'undefined') {
        window.setTimeout(GM_wait, 100);
    }
    else { 
		test();
    }
}

function test() {
    jQuery(document).ready(function ($) {
        window.setTimeout(findElem, 300);
        function findElem() {
			if (debug){console.log("Find element function start");	}
			var flashcard = $("#flashcard");

			if (flashcard.length > 0) {			
				$("#flashcard").load(endpoint+'index.html', function() {
					if (debug){console.log("Loading complete");}
				});
			} else {
				if (debug){console.log("Flashcard element not found");}
				window.setTimeout(findElem, 800);
			}
        }  
    }); 
}