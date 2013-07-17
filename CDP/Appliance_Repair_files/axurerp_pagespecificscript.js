for(var i = 0; i < 62; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '0');

	MoveWidgetTo('u34', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

});

function rdo3scrollLeft(e) {

if (true) {

	MoveWidgetBy('u34', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrollRight(e) {

if (true) {

	MoveWidgetBy('u34', GetNum('-160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrolls(e) {

if ((GetGlobalVariableValue('carouselOffset')) <= Number('0')) {

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('carouselOffset')) > Number('2')) {

	SetPanelState('u56', 'pd1u56','none','',500,'none','',500);

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}

}

var products = [
"Free-standing Window Air Conditioner (over 11,500 BTU)",
"Installed Window Air Conditioner",
"Camcorder",
"Trash Compactor",
"Cooktop",
"Dehumidifier",
"Portable Humidifier",
"Whole House Humidifier",
"Dishwasher",
"Garbage Disposal",
"Freezer",
"Home Theater Audio System",
"DVD Player",
"VCR",
"Freestanding Ice Maker",
"Chain Saw",
"Chipper or Shredder",
"Edger",
"Leaf Blower",
"Logsplitter",
"Tiller",
"Electric Dryer",
"Gas Dryer",
"Stacked Laundry Unit",
"Front Load Washer",
"Top Load Washer",
"Mounted Microwave with Hood",
"Mounted Microwave",
"Microwave",
"Double Oven",
"Single Oven",
"Pressure Washer",
"Range",
"Range Hood",
"Top Freezer Refrigerator",
"Bottom Freezer Refrigerator",
"Side-by-Side Refrigerator",
"Riding Mower or Garden Tractor",
"Sewing Machine",
"Snowblower over 9 HP",
"LCD TV",
"Plasma TV",
"Projection TV",
"DLP TV",
"LCD Projection TV",
"Small Tube Television (under 32in)",
"Medium Tube Television (over 32in)",
"TV-DVD Combo",
"TV-VCR Combo",
"Cannister Vacuum",
"Water Heater",
"Grill",
"Sony Digital Camera",
"Garage Door Opener",
"Walk Behind Mower",
"Elliptical Machine",
"Weight System",
"Stationary Bike",
"Stepper",
"Treadmill",
"Free-standing Window Air Conditioner (under 11, 000 BTU)",
"Counter-top Microwave",
"Panasonic LCD TV  (under 37in)",
"LCD TV  (under 32in)",
"Snowblower (under 9 HP)",
"Upright Vacuum",
"Boiler",
"Central Air",
"Furnace",
"Heat Pump",
"Dehumidifier",
"Window Air Conditioner Unit",
"Washer",
"Wide Deck Lawn Mower"
];

$(document).ready(function() {
  // Handler for .ready() called.

  	var options = {};
	options["source"] = products;
	options["minLength"] = 0;
	options["items"] = 6;

  	var $input = $("input[data-label=ApplianceProductField]");
		// set up the type-ahead menu / field
	$input.typeahead(options);      
	$input.on('focus', $input.typeahead.bind($input, 'lookup'));

  	console.log("blerg:" + $input);

  	$input.height(32);

});


gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u53'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetGlobalVariableValue('carouselOffset') - 1) + '');

rdo3scrollLeft(e);

rdo3scrolls(e);

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u58'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetNum(GetGlobalVariableValue('carouselOffset')) + 1) + '');

rdo3scrollRight(e);

rdo3scrolls(e);

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("An explanation…"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u60'] = 'center';
$axure.eventManager.click('u61', function(e) {

if (true) {

	MoveWidgetBy('u34', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u61', function(e) {

if (true) {

	MoveWidgetBy('u34', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u61', function(e) {

if (true) {

	MoveWidgetBy('u34', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});
u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Savvy."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Clever."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u35'));

}
});
gv_vAlignTable['u36'] = 'bottom';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u37'));

}
});
gv_vAlignTable['u38'] = 'bottom';document.getElementById('u39_img').tabIndex = 0;
HookHover('u39', false);

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u39'));

}
});
gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u42'] = 'bottom';gv_vAlignTable['u40'] = 'bottom';document.getElementById('u41_img').tabIndex = 0;
HookHover('u41', false);

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u41'));

}
});
document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u45'));

}
});
document.getElementById('u43_img').tabIndex = 0;
HookHover('u43', false);

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u43'));

}
});
gv_vAlignTable['u44'] = 'bottom';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u46'] = 'bottom';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u18'] = 'center';