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
        console.log("jQuery loaded now [1], carry on!");
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

            var flashcard = $("#flashcard");

            if (flashcard.length > 0) {
				
				$("#flashcard").load( "http://dev.turforlag.dk/flashcards/index.html", function() {
						console.log("DONE LOADING");
				});
            } else {
                console.log("NOT FOUND");
                window.setTimeout(findElem, 800);
            }
        }  
    }); 
}