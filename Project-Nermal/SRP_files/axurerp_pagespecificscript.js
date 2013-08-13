for(var i = 0; i < 375; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (((GetGlobalVariableValue('LocCity')) == ('')) || (((GetGlobalVariableValue('LocState')) == ('')) || ((GetGlobalVariableValue('LocZip')) == ('')))) {

SetGlobalVariableValue('LocCity', 'Columbus');

SetGlobalVariableValue('LocState', 'OH');

SetGlobalVariableValue('LocZip', '43222');

}

if (true) {

SetWidgetRichText('u54', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

SetGlobalVariableValue('FirstName', 'John');

SetGlobalVariableValue('LastName', 'Appleseed');

SetGlobalVariableValue('UserEmail', 'my@email.com');

SetGlobalVariableValue('UserPhone', '888-555-1212');

SetGlobalVariableValue('ProdBrand', 'Brand');

SetGlobalVariableValue('ProdService', 'Generic Dryer Repair');

SetGlobalVariableValue('ApptTime', '8:00 AM - 5:00 PM');

SetGlobalVariableValue('LocStreet', '123 Anystreet Dr');

}

});

widgetIdToPanelStateChangeFunction['u294'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u347', GetGlobalVariableValue('LocCity'));

SetSelectedOption('u348', GetGlobalVariableValue('LocState'));

SetWidgetFormText('u349', GetGlobalVariableValue('LocZip'));

}

}

widgetIdToPanelStateChangeFunction['u153'] = function() {
var e = windowEvent;

if ((GetPanelState('u153')) == ('pd2u153')) {

	MoveWidgetBy('u294', GetNum('0'), GetNum('-447'),'none',500);

	SetPanelState('u294', 'pd1u294','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('50'),'none',500);

}

}

widgetIdToPanelStateChangeFunction['u29'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u31', GetGlobalVariableValue('LocZip'));

}

}

widgetIdToMoveFunction['u362'] = function() {
var e = windowEvent;

if (((GetPanelState('u307')) == ('pd2u307')) && (((GetPanelState('u312')) == ('pd2u312')) && (((GetPanelState('u317')) == ('pd2u317')) && (((GetPanelState('u335')) == ('pd2u335')) && (((GetPanelState('u339')) == ('pd2u339')) && ((GetPanelState('u22')) == ('pd0u22'))))))) {

	SetPanelVisibility('u362','hidden','fade',200);

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

}

}

widgetIdToMoveFunction['u134'] = function() {
var e = windowEvent;

if ((GetPanelState('u148')) == ('pd3u148')) {

	SetPanelVisibility('u134','hidden','fade',200);

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

}
else
if (((GetPanelState('u103')) == ('pd1u103')) && (((GetPanelState('u138')) == ('pd2u138')) && (((GetPanelState('u143')) == ('pd2u143')) && ((GetPanelState('u148')) == ('pd2u148'))))) {

	SetPanelVisibility('u134','hidden','fade',200);

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}

}

widgetIdToPanelStateChangeFunction['u76'] = function() {
var e = windowEvent;

if ((GetPanelState('u76')) == ('pd2u76')) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('-390'),'none',500);

	MoveWidgetBy('u294', GetNum('0'), GetNum('45'),'none',500);

	SetPanelState('u153', 'pd1u153','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('50'),'none',500);

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

}

}

widgetIdToShowFunction['u1'] = function() {
var e = windowEvent;

if (true) {

	BringToFront("u1");

SetGlobalVariableValue('MTCState', 'visible');

}

}

widgetIdToHideFunction['u1'] = function() {
var e = windowEvent;

if (true) {

	SendToBack("u1");

SetGlobalVariableValue('MTCState', 'hidden');

}

}

widgetIdToMoveFunction['u286'] = function() {
var e = windowEvent;

if ((GetPanelState('u260')) == ('pd1u260')) {

	SetPanelVisibility('u286','hidden','fade',200);

	SetPanelState('u268', 'pd1u268','none','',500,'none','',500);

}

}

widgetIdToPanelStateChangeFunction['u46'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u48', GetGlobalVariableValue('LocZip'));

}

}

function rdo1regionChange(e) {

if (true) {

SetWidgetFormText('u347', GetGlobalVariableValue('LocCity'));

SetSelectedOption('u348', GetGlobalVariableValue('LocState'));

SetWidgetFormText('u349', GetGlobalVariableValue('LocZip'));

SetWidgetFormText('u31', GetGlobalVariableValue('LocZip'));

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

}

}

function rdo2regionChange(e) {

if (true) {

SetWidgetFormText('u347', GetGlobalVariableValue('LocCity'));

SetSelectedOption('u348', GetGlobalVariableValue('LocState'));

SetWidgetFormText('u349', GetGlobalVariableValue('LocZip'));

	SetPanelState('u22', 'pd1u22','none','',500,'swing','right',500);

}

}
gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u108'] = 'center';u258.tabIndex = 0;

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

$axure.eventManager.keyup('u351', function(e) {

if ((ValueContains(GetWidgetText('u351'), '@')) && (ValueContains(GetWidgetText('u351'), '.com'))) {

	SetPanelState('u335', 'pd2u335','none','',500,'none','',500);

	MoveWidgetBy('u362', GetNum('0'), GetNum('0'),'none',500);

}
});

$axure.eventManager.focus('u351', function(e) {

if ((GetWidgetText('u351')) == ('Email Address')) {

SetWidgetFormText('u351', '');

}
});

$axure.eventManager.blur('u351', function(e) {

if ((GetWidgetValueLength('u351')) == ('0')) {

SetWidgetFormText('u351', 'Email Address');

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u119'] = 'center';document.getElementById('u269_img').tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	SetPanelState('u153', 'pd2u153','none','',500,'none','',500);

}
});
gv_vAlignTable['u363'] = 'top';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	SetPanelState('u76', 'pd2u76','none','',500,'none','',500);

}
});
gv_vAlignTable['u91'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (((GetCheckState('u111')) == (false)) && (((GetCheckState('u113')) == (false)) && ((GetCheckState('u115')) == (false)))) {

	SetPanelState('u103', 'pd2u103','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u128')) == ('Brand')) {

	SetPanelState('u138', 'pd1u138','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u129')) == ('Nature of problem...')) {

	SetPanelState('u143', 'pd1u143','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u130')) == ('Warranty')) {

	SetPanelState('u148', 'pd1u148','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u126'] = 'top';
u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

SetWidgetRichText('u44', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Appliance Repair</span></p>');

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Appliance Repair</span></p>');

	SetPanelState('u94', 'pd1u94','none','',500,'none','',500);

}
});
$('#u128').attr('axSubmit', 'u90');

$axure.eventManager.change('u128', function(e) {

if (true) {

	SetPanelState('u138', 'pd2u138','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
});
$('#u129').attr('axSubmit', 'u90');

$axure.eventManager.change('u129', function(e) {

if (true) {

	SetPanelState('u143', 'pd2u143','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
});
u278.tabIndex = 0;

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Can you tell us more about why these might not work?"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u279'] = 'top';$('#u130').attr('axSubmit', 'u90');

$axure.eventManager.change('u130', function(e) {

if ((GetSelectedOption('u130')) == ('Warranty')) {

	SetPanelVisibility('u131','hidden','none',500);

	SetPanelState('u148', 'pd1u148','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
else
if (((GetSelectedOption('u130')) == ('No Coverage')) || ((GetSelectedOption('u130')) == ('Don\'t Know'))) {

	SetPanelVisibility('u131','hidden','none',500);

	SetPanelState('u148', 'pd2u148','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
else
if (true) {

	SetPanelVisibility('u131','','fade',250);

	SetPanelState('u148', 'pd3u148','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("You can get a technician's help to fix this over the phone if you have a warranty. "), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u305'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u293'] = 'center';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u275'] = 'center';gv_vAlignTable['u277'] = 'center';u72.tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	SetPanelVisibility('u1','toggle','fade',250);

}
});
gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u234'] = 'center';
u284.style.cursor = 'pointer';
$axure.eventManager.click('u284', function(e) {

if (true) {

	SetPanelState('u260', 'pd1u260','none','',500,'none','',500);

	MoveWidgetBy('u286', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

SetWidgetRichText('u28', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">2:00 PM - 5:00 PM</span></p>');

}
});
gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u287'] = 'top';document.getElementById('u360_img').tabIndex = 0;

u360.style.cursor = 'pointer';
$axure.eventManager.click('u360', function(e) {

if (true) {

	MoveWidgetBy('u294', GetNum('0'), GetNum('447'),'none',500);

	SetPanelState('u294', 'pd0u294','none','',500,'none','',500);

	SetPanelState('u153', 'pd1u153','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('-50'),'none',500);

}
});
gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u169'] = 'top';document.getElementById('u276_img').tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('390'),'none',500);

	MoveWidgetBy('u294', GetNum('0'), GetNum('-45'),'none',500);

	SetPanelState('u153', 'pd0u153','none','',500,'none','',500);

	SetPanelState('u76', 'pd0u76','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('-50'),'none',500);

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

}
});
gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u178'] = 'center';u252.tabIndex = 0;

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

u280.style.cursor = 'pointer';
$axure.eventManager.click('u280', function(e) {

if (true) {

	SetPanelState('u260', 'pd1u260','none','',500,'none','',500);

	MoveWidgetBy('u286', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

SetWidgetRichText('u28', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">8:00 AM - 12:00 PM</span></p>');

}
});
gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u214'] = 'center';document.getElementById('u354_img').tabIndex = 0;

u354.style.cursor = 'pointer';
$axure.eventManager.click('u354', function(e) {

if (true) {

SetGlobalVariableValue('FirstName', GetWidgetText('u343'));

SetGlobalVariableValue('LastName', GetWidgetText('u344'));

SetGlobalVariableValue('UserEmail', GetWidgetText('u351'));

SetGlobalVariableValue('UserPhone', GetWidgetText('u350'));

SetGlobalVariableValue('LocStreet', GetWidgetText('u345'));

SetGlobalVariableValue('ProdBrand', GetSelectedOption('u128'));

SetGlobalVariableValue('ProdService', GetWidgetText('u19'));

SetGlobalVariableValue('ApptTime', GetWidgetText('u28'));

SetGlobalVariableValue('ApptDate', GetWidgetText('u27'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SCP.html');

}
});
gv_vAlignTable['u355'] = 'center';document.getElementById('u356_img').tabIndex = 0;

u356.style.cursor = 'pointer';
$axure.eventManager.click('u356', function(e) {

if (true) {

	MoveWidgetBy('u294', GetNum('0'), GetNum('447'),'none',500);

	SetPanelState('u294', 'pd0u294','none','',500,'none','',500);

	SetPanelState('u153', 'pd1u153','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('-50'),'none',500);

}
});
gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u318'] = 'top';gv_vAlignTable['u319'] = 'top';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'center';
$axure.eventManager.change('u98', function(e) {

if (true) {

SetWidgetRichText('u44', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u98')) + ' Repair</span></p>');

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u98')) + ' Repair</span></p>');

}

if ((GetSelectedOption('u98')) == ('Dryer')) {

	SetPanelState('u94', 'pd0u94','none','',500,'none','',500);

}
});
gv_vAlignTable['u365'] = 'center';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u323'] = 'top';gv_vAlignTable['u324'] = 'top';gv_vAlignTable['u327'] = 'top';gv_vAlignTable['u328'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u372'] = 'center';gv_vAlignTable['u373'] = 'top';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u333'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u337'] = 'top';gv_vAlignTable['u370'] = 'center';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u298'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u1','hidden','fade',250);

SetGlobalVariableValue('MTCState', 'hidden');

}
});
gv_vAlignTable['u10'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelVisibility('u1','hidden','fade',250);

SetGlobalVariableValue('MTCState', 'hidden');

}
});
gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';
$axure.eventManager.keyup('u344', function(e) {

if ((GetWidgetValueLength('u344')) > Number('2')) {

	SetPanelState('u312', 'pd2u312','none','',500,'none','',500);

	MoveWidgetBy('u362', GetNum('0'), GetNum('0'),'none',500);

}
});

$axure.eventManager.focus('u344', function(e) {

if ((GetWidgetText('u344')) == ('Last Name')) {

SetWidgetFormText('u344', '');

}
});

$axure.eventManager.blur('u344', function(e) {

if ((GetWidgetValueLength('u344')) == ('0')) {

SetWidgetFormText('u344', 'Last Name');

}
});

$axure.eventManager.keyup('u345', function(e) {

if ((GetWidgetValueLength('u345')) > Number('2')) {

	SetPanelState('u317', 'pd2u317','none','',500,'none','',500);

	MoveWidgetBy('u362', GetNum('0'), GetNum('0'),'none',500);

}
});

$axure.eventManager.focus('u345', function(e) {

if ((GetWidgetText('u345')) == ('Street Address')) {

SetWidgetFormText('u345', '');

}
});

$axure.eventManager.blur('u345', function(e) {

if ((GetWidgetValueLength('u345')) == ('0')) {

SetWidgetFormText('u345', 'Street Address');

}
});

$axure.eventManager.focus('u346', function(e) {

if ((GetWidgetText('u346')) == ('Unit, Apt, Bldg')) {

SetWidgetFormText('u346', '');

}
});

$axure.eventManager.blur('u347', function(e) {

if (true) {

SetGlobalVariableValue('LocCity', GetWidgetText('u347'));

}
});

$axure.eventManager.change('u348', function(e) {

if ((GetSelectedOption('u348')) != (GetGlobalVariableValue('LocState'))) {

SetWidgetFormText('u349', 'Zip');

}
});

$axure.eventManager.blur('u348', function(e) {

if (true) {

SetGlobalVariableValue('LocState', GetSelectedOption('u348'));

}
});

$axure.eventManager.blur('u349', function(e) {

if ((GetWidgetText('u349')) != (GetGlobalVariableValue('LocZip'))) {

SetGlobalVariableValue('LocZip', GetWidgetText('u349'));

SetWidgetRichText('u54', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

                                DisableImageWidget('u354');
	SetPanelState('u22', 'pd1u22','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u341'] = 'top';
$axure.eventManager.keyup('u343', function(e) {

if ((GetWidgetValueLength('u343')) > Number('2')) {

	SetPanelState('u307', 'pd2u307','none','',500,'none','',500);

	MoveWidgetBy('u362', GetNum('0'), GetNum('0'),'none',500);

}
});

$axure.eventManager.focus('u343', function(e) {

if ((GetWidgetText('u343')) == ('First Name')) {

SetWidgetFormText('u343', '');

}
});

$axure.eventManager.blur('u343', function(e) {

if ((GetWidgetValueLength('u343')) == ('0')) {

SetWidgetFormText('u343', 'First Name');

}
});
gv_vAlignTable['u110'] = 'center';
u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

SetWidgetRichText('u44', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Gas Dryer Repair</span></p>');

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Gas Dryer Repair</span></p>');

	SetPanelState('u117', 'pd1u117','none','',500,'none','',500);

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

	MoveWidgetBy('u134', GetNum('0'), GetNum('0'),'none',500);

}
});
gv_vAlignTable['u112'] = 'top';
u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

SetWidgetRichText('u44', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Electric Dryer Repair</span></p>');

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Electric Dryer Repair</span></p>');

	SetPanelState('u117', 'pd2u117','none','',500,'none','',500);

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

}
});
gv_vAlignTable['u114'] = 'top';u250.tabIndex = 0;

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("No other views available in this demo."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetWidgetRichText('u44', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Stacked Laundry Unit Repair</span></p>');

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Stacked Laundry Unit Repair</span></p>');

	SetPanelState('u117', 'pd3u117','none','',500,'none','',500);

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'top';u254.tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Thanks, but selecting dates isnt important right now.&nbsp; <BR><BR>Please pretend your click selected an available date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if ((GetPanelState('u294')) == ('pd1u294')) {

	MoveWidgetBy('u294', GetNum('0'), GetNum('447'),'none',500);

	SetPanelState('u294', 'pd0u294','none','',500,'none','',500);

	SetPanelState('u153', 'pd1u153','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('-50'),'none',500);

}

if (true) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

SetWidgetRichText('u28', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;text-decoration:none;">&nbsp;</span></p>');

SetCheckState('u280', false);

SetCheckState('u282', false);

SetCheckState('u284', false);

	SetPanelState('u268', 'pd0u268','none','',500,'none','',500);

	SetPanelState('u260', 'pd0u260','none','',500,'none','',500);

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u208'] = 'center';document.getElementById('u358_img').tabIndex = 0;

u358.style.cursor = 'pointer';
$axure.eventManager.click('u358', function(e) {

if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelVisibility('u362','','none',500);

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u362', 'pd0u362','none','',500,'none','',500);

}

if (((GetWidgetText('u343')) == ('First Name')) || ((GetWidgetValueLength('u343')) < Number('2'))) {

	SetPanelState('u307', 'pd1u307','none','',500,'none','',500);

	SetPanelVisibility('u362','','none',500);

}

if (((GetWidgetText('u344')) == ('Last Name')) || ((GetWidgetValueLength('u344')) < Number('2'))) {

	SetPanelState('u312', 'pd1u312','none','',500,'none','',500);

	SetPanelVisibility('u362','','none',500);

}

if (((GetWidgetText('u345')) == ('Street Address')) || ((GetWidgetValueLength('u345')) < Number('2'))) {

	SetPanelState('u317', 'pd1u317','none','',500,'none','',500);

	SetPanelVisibility('u362','','none',500);

}

if (((GetWidgetText('u350')) == ('Phone')) || ((GetWidgetValueLength('u350')) < Number('2'))) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

	SetPanelVisibility('u362','','none',500);

}

if (((GetWidgetText('u351')) == ('Email Address')) || (((GetWidgetValueLength('u351')) < Number('2')) || ((ValueNotContains(GetWidgetText('u351'), '@')) || (ValueNotContains(GetWidgetText('u351'), '.com'))))) {

	SetPanelState('u335', 'pd1u335','none','',500,'none','',500);

	SetPanelVisibility('u362','','none',500);

}
});
gv_vAlignTable['u359'] = 'center';
$axure.eventManager.keyup('u350', function(e) {

if ((GetWidgetValueLength('u350')) > Number('2')) {

	SetPanelState('u339', 'pd2u339','none','',500,'none','',500);

	MoveWidgetBy('u362', GetNum('0'), GetNum('0'),'none',500);

}
});

$axure.eventManager.focus('u350', function(e) {

if ((GetWidgetText('u350')) == ('Phone')) {

SetWidgetFormText('u350', '');

}
});

$axure.eventManager.blur('u350', function(e) {

if ((GetWidgetValueLength('u350')) == ('0')) {

SetWidgetFormText('u350', 'Phone');

}
});
gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u30'] = 'top';$('#u31').attr('axSubmit', 'u32');
document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if ((GetWidgetText('u31')) == ('43222')) {

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Columbus, OH 43222</span></p>');

SetGlobalVariableValue('LocCity', 'Columbus');

SetGlobalVariableValue('LocZip', GetWidgetText('u31'));

SetGlobalVariableValue('LocState', 'OH');

}
else
if (ValueContains(GetWidgetText('u31'), '606')) {

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Chicago, IL ' + (GetWidgetText('u31')) + '</span></p>');

SetGlobalVariableValue('LocCity', 'Chicago');

SetGlobalVariableValue('LocZip', GetWidgetText('u31'));

SetGlobalVariableValue('LocState', 'IL');

}
else
if (true) {

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Cityville, ST ' + (GetWidgetText('u31')) + '</span></p>');

SetGlobalVariableValue('LocCity', 'Anytown');

SetGlobalVariableValue('LocZip', GetWidgetText('u31'));

SetGlobalVariableValue('LocState', 'State');

}

if (true) {

	SetPanelState('u29', 'pd0u29','swing','right',500,'swing','right',500);

rdo2regionChange(e);

}
});
gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	SetPanelState('u29', 'pd1u29','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u368'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u270'] = 'center';document.getElementById('u271_img').tabIndex = 0;

u271.style.cursor = 'pointer';
$axure.eventManager.click('u271', function(e) {

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('390'),'none',500);

	MoveWidgetBy('u294', GetNum('0'), GetNum('-45'),'none',500);

	SetPanelState('u153', 'pd0u153','none','',500,'none','',500);

	SetPanelState('u76', 'pd0u76','none','',500,'none','',500);

	MoveWidgetBy('u0', GetNum('0'), GetNum('-50'),'none',500);

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

}
});
u273.tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (((GetCheckState('u111')) == (false)) && (((GetCheckState('u113')) == (false)) && ((GetCheckState('u115')) == (false)))) {

	SetPanelState('u103', 'pd2u103','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u128')) == ('Brand')) {

	SetPanelState('u138', 'pd1u138','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u129')) == ('Nature of problem...')) {

	SetPanelState('u143', 'pd1u143','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}

if ((GetSelectedOption('u130')) == ('Warranty')) {

	SetPanelState('u148', 'pd1u148','none','',500,'none','',500);

	SetPanelVisibility('u134','','none',500);

}
else
if (true) {

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}
});
document.getElementById('u274_img').tabIndex = 0;

u274.style.cursor = 'pointer';
$axure.eventManager.click('u274', function(e) {

if (((GetCheckState('u280')) == (false)) && (((GetCheckState('u282')) == (false)) && ((GetCheckState('u284')) == (false)))) {

	SetPanelState('u260', 'pd2u260','none','',500,'none','',500);

	SetPanelVisibility('u286','','none',500);

}
});

$axure.eventManager.click('u40', function(e) {

if (true) {

SetWidgetFormText('u347', GetGlobalVariableValue('LocCity'));

SetSelectedOption('u348', GetGlobalVariableValue('LocState'));

SetWidgetFormText('u349', GetGlobalVariableValue('LocZip'));

	SetPanelState('u22', 'pd1u22','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u47'] = 'top';$('#u48').attr('axSubmit', 'u49');
document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if ((GetWidgetText('u48')) == ('43222')) {

SetWidgetRichText('u54', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Columbus, OH 43222</span></p>');

SetGlobalVariableValue('LocCity', 'Columbus');

SetGlobalVariableValue('LocZip', GetWidgetText('u48'));

SetGlobalVariableValue('LocState', 'OH');

}
else
if (ValueContains(GetWidgetText('u48'), '606')) {

SetWidgetRichText('u54', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Chicago, IL ' + (GetWidgetText('u48')) + '</span></p>');

SetGlobalVariableValue('LocCity', 'Chicago');

SetGlobalVariableValue('LocZip', GetWidgetText('u48'));

SetGlobalVariableValue('LocState', 'IL');

}
else
if (true) {

SetWidgetRichText('u54', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Cityville, ST ' + (GetWidgetText('u48')) + '</span></p>');

SetGlobalVariableValue('LocCity', 'Anytown');

SetGlobalVariableValue('LocZip', GetWidgetText('u48'));

SetGlobalVariableValue('LocState', 'State');

}

if (true) {

	SetPanelState('u46', 'pd0u46','swing','right',500,'swing','right',500);

rdo1regionChange(e);

}
});
gv_vAlignTable['u226'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u281'] = 'top';
u282.style.cursor = 'pointer';
$axure.eventManager.click('u282', function(e) {

if (true) {

	SetPanelState('u260', 'pd1u260','none','',500,'none','',500);

	MoveWidgetBy('u286', GetNum('0'), GetNum('0'),'none',500);

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

SetWidgetRichText('u28', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:15px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">10:00 AM - 2:00 PM</span></p>');

}
});
gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';u56.tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	SetPanelState('u46', 'pd1u46','swing','left',500,'swing','left',500);

}
});

$axure.eventManager.click('u57', function(e) {

if (true) {

SetWidgetFormText('u347', GetGlobalVariableValue('LocCity'));

SetSelectedOption('u348', GetGlobalVariableValue('LocState'));

SetWidgetFormText('u349', GetGlobalVariableValue('LocZip'));

SetWidgetFormText('u31', GetGlobalVariableValue('LocZip'));

SetWidgetRichText('u37', '<p style="text-align:left;"><span style="font-family:Open Sans;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('LocCity')) + ', ' + (GetGlobalVariableValue('LocState')) + ' ' + (GetGlobalVariableValue('LocZip')) + '</span></p>');

}
});
gv_vAlignTable['u59'] = 'bottom';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u340'] = 'top';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';
u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u246'] = 'top';u249.tabIndex = 0;

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("No other views available in this demo."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
