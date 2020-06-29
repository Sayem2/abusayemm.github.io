const taka = document.getElementById('taka');
const euro = document.getElementById('euro');
const dollar = document.getElementById('dollar');
const indianRs = document.getElementById('indianRs');
const lankaRs = document.getElementById('lankaRs');

taka.addEventListener('input', takaToEuroToDollarToIndianRsToLankaRs);
function takaToEuroToDollarToIndianRsToLankaRs() {

	const tk = parseInt(taka.value);
	const eu = 0.0104935*tk;
	const dl = 0.0117887*tk;
	const ir = 0.890232*tk;
	const lr = 2.20*tk;
	euro.value = eu;
	dollar.value = dl;
	indianRs.value = ir;
	lankaRs.value = lr;

}
takaToEuroToDollarToIndianRsToLankaRs();

euro.addEventListener('input', euroToTakaToDollarToIndianRsToLankaRs);
function euroToTakaToDollarToIndianRsToLankaRs() {

	const eu = parseInt(euro.value);
	const tk = 95.2659*eu;
	const dl = 1.12323*eu;
	const ir = 84.7963*eu;
	const lr = 209.29*eu;
	taka.value = tk;
	dollar.value = dl;
	indianRs.value = ir;
	lankaRs.value = lr;

}
euroToTakaToDollarToIndianRsToLankaRs();

dollar.addEventListener('input', dollarToTakaToEuroToIndianRsToLankaRs);
function dollarToTakaToEuroToIndianRsToLankaRs() {

	const dl = parseInt(dollar.value);
	const tk = 84.8500*dl;
	const eu = 0.890453*dl;
	const ir = 75.5083*dl;
	const lr = 186.34*dl;
	taka.value = tk;
	euro.value = eu;
	indianRs.value = ir;
	lankaRs.value = lr;

}
euroToTakaToDollarToIndianRsToLankaRs();


indianRs.addEventListener('input', indianRsToTakaToEuroToDollarToLankaRs);
function indianRsToTakaToEuroToDollarToLankaRs() {

	const ir = parseInt(indianRs.value);
	const tk = 1.12348*ir;
	const eu = 0.0117895*ir;
	const dl = 0.0132449*ir;
	const lr = 2.47*ir;
	taka.value = tk;
	euro.value = eu;
	dollar.value = dl;
	lankaRs.value = lr;

}
indianRsToTakaToEuroToDollarToLankaRs();

lankaRs.addEventListener('input', lankaRsToTakaToEuroToDollarToIndianRs);
function lankaRsToTakaToEuroToDollarToIndianRs() {

	const lr = parseInt(lankaRs.value);
	const tk = 0.46*lr;
	const eu = 0.0048*lr;
	const dl = 0.0054*lr;
	const ir = 0.41*lr;
	taka.value = tk;
	euro.value = eu;
	dollar.value = dl;
	indianRs.value = ir;

}
lankaRsToTakaToEuroToDollarToIndianRs();



