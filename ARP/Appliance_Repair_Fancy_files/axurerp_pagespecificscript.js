for(var i = 0; i < 63; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '0');

	MoveWidgetTo('u35', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u52', 'pd1u52','none','',500,'none','',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

});

function rdo3scrollLeft(e) {

if (true) {

	MoveWidgetBy('u35', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrollRight(e) {

if (true) {

	MoveWidgetBy('u35', GetNum('-160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}

}

function rdo3scrolls(e) {

if ((GetGlobalVariableValue('carouselOffset')) <= Number('0')) {

	SetPanelState('u57', 'pd0u57','none','',500,'none','',500);

	SetPanelState('u52', 'pd1u52','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('carouselOffset')) > Number('2')) {

	SetPanelState('u57', 'pd1u57','none','',500,'none','',500);

	SetPanelState('u52', 'pd0u52','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u57', 'pd0u57','none','',500,'none','',500);

	SetPanelState('u52', 'pd0u52','none','',500,'none','',500);

}

}
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u54'] = 'center';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetGlobalVariableValue('carouselOffset') - 1) + '');

rdo3scrollLeft(e);

rdo3scrolls(e);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u59'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Whee!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u22'] = 'center';
$axure.eventManager.focus('u24', function(e) {

if ((GetWidgetValueLength('u24')) > Number('1')) {

	SetPanelVisibility('u26','','fade',200);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'top';u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("An explanation…"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u28'] = 'top';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetGlobalVariableValue('carouselOffset', '' + (GetNum(GetGlobalVariableValue('carouselOffset')) + 1) + '');

rdo3scrollRight(e);

rdo3scrolls(e);

}
});
gv_vAlignTable['u61'] = 'center';
$axure.eventManager.click('u62', function(e) {

if (true) {

	MoveWidgetBy('u35', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u62', function(e) {

if (true) {

	MoveWidgetBy('u35', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});

$axure.eventManager.click('u62', function(e) {

if (true) {

	MoveWidgetBy('u35', GetNum('160'), GetNum('0'),'swing',500);

SetWidgetRichText('u0', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">carouselOffsetDebug = ' + (GetGlobalVariableValue('carouselOffset')) + '</span></p>');

}
});
gv_vAlignTable['u30'] = 'center';u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Savvy."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Clever."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u36'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
gv_vAlignTable['u37'] = 'bottom';document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u38'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
gv_vAlignTable['u39'] = 'bottom';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u42'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u40'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
gv_vAlignTable['u41'] = 'bottom';gv_vAlignTable['u45'] = 'bottom';gv_vAlignTable['u43'] = 'bottom';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u44'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
document.getElementById('u46_img').tabIndex = 0;
HookHover('u46', false);

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

SetWidgetFormText('u24', GetWidgetText('u46'));

	var obj1 = document.getElementById("u24");
    obj1.focus();

}
});
gv_vAlignTable['u47'] = 'bottom';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u18'] = 'center';
$axure.eventManager.change('u19', function(e) {

if (true) {

                                EnableImageWidget('u21');
}
});
