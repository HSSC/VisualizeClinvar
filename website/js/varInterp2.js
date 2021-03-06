//gives browser instruction to run on load and adds it as a procedure so that other scripts will also run
if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            varInterp();
        };
        window.onload = newonload;
} else {
    window.onload = varInterp();
}
//taken from http://stackoverflow.com/questions/641857/javascript-window-resize-event I apologize for complexity
//
var addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};


function varInterp() {
//data/varInterp/
var var_Interp_tsv = ["varInterp", pageName].join('') // this takes care of null pageName
	d3.tsv("http://localhost:8080/"+var_Interp_tsv+".tsv", function(data) {
		return {
			label: data.label,
			value: +data.value,
			color: data.color
		};
		}, function(error, data) {
	//d3.tsv.parse("data/varType/"+var_interp_tsv+".tsv", function(error, data) { //pageName comes from the page: see html
	//	console.log(data);
	//	console.log("what is going on?");
var pie = new d3pie("varInterpGraphic", {
  "header": {
      "subtitle": {
          "color": "#999999",
          "fontSize": 12,
          "font": "helvetica"
      },
      "titleSubtitlePadding": 9
  },
  "footer": {
      "color": "#999999",
      "fontSize": 10,
      "font": "open sans",
      "location": "bottom-left"
  },
  "size": {
      "canvasWidth": parseInt(d3.select("#varInterpGraphic").style("width"),0),
      "canvasHeight": parseInt(d3.select("#varInterpGraphic").style("width"),0),
      "pieInnerRadius": "0%",
      "pieOuterRadius": "90%"
  },
  "data": {
      "sortOrder": "value-desc",
      "content": data
  },
  "labels": {
      "outer": {
          "pieDistance": 22
      },
      "inner": {
          "hideWhenLessThanPercentage": 3
      },
      "mainLabel": {
          "fontSize": 9
      },
      "percentage": {
          "color": "#ffffff",
          "decimalPlaces": 0
      },
      "value": {
          "color": "#adadad",
          "fontSize": 9
      },
      "lines": {
          "enabled": true
      }
  },
  "effects": {
      "pullOutSegmentOnClick": {
          "effect": "linear",
          "speed": 400,
          "size": 8
      }
  },
  "misc": {
      "gradient": {
          "enabled": true,
          "percentage": 100
      }
  }
})
})
}
