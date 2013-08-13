for(var i = 0; i < 165; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u139', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Thank you ' + (GetGlobalVariableValue('FirstName')) + '. Your service is scheduled!</span></p>');

SetWidgetRichText('u144', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('FirstName')) + ' ' + (GetGlobalVariableValue('LastName')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocStreet')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('UserEmail')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('UserPhone')) + '</span></p>');

SetWidgetRichText('u142', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">A confirmation email will be sent to your email address: </span><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('UserEmail')) + '</span><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">. If you need to change your appointment or have any questions, please call us at </span><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">1-800-940-1558</span></p>');

SetWidgetRichText('u145', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('ProdBrand')) + ' ' + (GetGlobalVariableValue('ProdService')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('ApptDate')) + ', ' + (GetGlobalVariableValue('ApptTime')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;text-decoration:none;">&nbsp;</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Minimum Trip Charge: &#36;89.00</span></p>');

}

});

widgetIdToShowFunction['u0'] = function() {
var e = windowEvent;

if (true) {

	BringToFront("u0");

SetGlobalVariableValue('MTCState', 'visible');

}

}

widgetIdToHideFunction['u0'] = function() {
var e = windowEvent;

if (true) {

	SendToBack("u0");

SetGlobalVariableValue('MTCState', 'hidden');

}

}

widgetIdToShowFunction['u14'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('ApptTime')) == (GetWidgetText('u31'))) {

SetCheckState('u31', true);

}

}
gv_vAlignTable['u156'] = 'top';
u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	SetPanelVisibility('u0','toggle','fade',250);

}
});
u161.tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Opens the print dialog for your browser."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u12'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','fade',150);
function waituc9e1d6e23b364f7b9549c50f6026a9ec1() {

	SendToBack("u14");

                                DisableImageWidget('u26');}
setTimeout(waituc9e1d6e23b364f7b9549c50f6026a9ec1, 150);

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','fade',200);
function waitu1a1016740052475d9dce71d45d77d7241() {

	SendToBack("u14");

SetWidgetRichText('u145', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('ProdBrand')) + ' ' + (GetGlobalVariableValue('ProdService')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Wednesday 08/14/13, ' + (GetGlobalVariableValue('ApptTime')) + '</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;text-decoration:none;">&nbsp;</span></p><p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Minimum Trip Charge: &#36;89.00</span></p>');

                                DisableImageWidget('u26');}
setTimeout(waitu1a1016740052475d9dce71d45d77d7241, 200);

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','fade',200);
function waitu440faa1d22ea4a05b15572dea133e2141() {

	SendToBack("u14");

                                DisableImageWidget('u26');}
setTimeout(waitu440faa1d22ea4a05b15572dea133e2141, 200);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';u127.tabIndex = 0;

u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u128.tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u129.tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u30'] = 'top';
u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

                                EnableImageWidget('u26');
SetGlobalVariableValue('ApptTime', GetWidgetText('u31'));

}
});
gv_vAlignTable['u32'] = 'top';
u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

                                EnableImageWidget('u26');
SetGlobalVariableValue('ApptTime', GetWidgetText('u33'));

}
});
gv_vAlignTable['u34'] = 'top';
u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

                                EnableImageWidget('u26');
SetGlobalVariableValue('ApptTime', GetWidgetText('u35'));

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("No other views available in this demo."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("No other views available in this demo."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','fade',250);

SetGlobalVariableValue('MTCState', 'hidden');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','fade',250);

SetGlobalVariableValue('MTCState', 'hidden');

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';document.getElementById('u150_img').tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	BringToFront("u14");

	SetPanelVisibility('u14','','fade',200);

}

if ((GetGlobalVariableValue('ApptTime')) == (GetWidgetText('u31'))) {

SetCheckState('u31', true);

}
else
if ((GetGlobalVariableValue('ApptTime')) == (GetWidgetText('u33'))) {

SetCheckState('u33', true);

}
else
if ((GetGlobalVariableValue('ApptTime')) == (GetWidgetText('u35'))) {

SetCheckState('u35', true);

}
});
gv_vAlignTable['u151'] = 'center';document.getElementById('u152_img').tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Ok. We'll cancel that right away. Thanks."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u153'] = 'center';