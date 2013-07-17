for(var i = 0; i < 51; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '0');

	MoveWidgetTo('u18', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u35', 'pd1u35','none','',500,'none','',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

});

function rdo3scrollRight(e) {

if (true) {

	MoveWidgetBy('u18', GetNum('-304'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrollLeft(e) {

if (true) {

	MoveWidgetBy('u18', GetNum('304'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrolls(e) {

if ((GetGlobalVariableValue('carouselOffset')) <= Number('0')) {

	SetPanelState('u35', 'pd1u35','none','',500,'none','',500);

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('carouselOffset')) > Number('1')) {

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}

}
gv_vAlignTable['u20'] = 'center';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Appliance_v2.html');

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u23_img').tabIndex = 0;
HookHover('u23', false);

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Right!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u24'] = 'center';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Right!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Right!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Right!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u30'] = 'center';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Right away."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Smart."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Lucky!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u37'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetGlobalVariableValue('carouselOffset') - 1) + '');

rdo3scrollLeft(e);

rdo3scrolls(e);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u9'] = 'center';
$axure.eventManager.click('u45', function(e) {

if (true) {

	MoveWidgetBy('u18', GetNum('-304'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u45', function(e) {

if (true) {

	MoveWidgetBy('u18', GetNum('-304'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u45', function(e) {

if (true) {

	MoveWidgetBy('u18', GetNum('-304'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">carouselOffset = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u42'] = 'center';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetNum(GetGlobalVariableValue('carouselOffset')) + 1) + '');

rdo3scrollRight(e);

rdo3scrolls(e);

}
});
u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Savvy."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u47'] = 'center';u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Clever."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
