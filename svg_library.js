<!-- hide script from old browsers




var color_q = 'rgb(165,104,104)';
var color_r = 'rgb(210,234,88)';
var color_c = 'rgb(158,227,116)';
var color_k = 'rgb(223,0,0)';

function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
		function(m,key,value) {
		vars[key] = value;
		});
		return vars;
		}


function urlparamteres2switchbuttons(){
	var vars = getUrlVars();
	var tm = vars['tm'];
	var cov = vars['cov'];
	var ali = vars['ali'];
	var seq = vars['seq'];
	var dom = vars['dom'];
	if(tm)
		{
		if (tm==1){$(".tm").show();$(".Stm").hide();$(".Htm").show();buttons=updatebuttons(buttons,"12222");}
		else{$(".tm").hide();$(".Stm").show();$(".Htm").hide();buttons=updatebuttons(buttons,"02222");}
		}
	if(cov)
		{
		if (cov==1){$(".coverage").show();$(".Scov").hide();$(".Hcov").show();buttons=updatebuttons(buttons,"21222");}
		else{$(".coverage").hide();$(".Scov").show();$(".Hcov").hide();buttons=updatebuttons(buttons,"20222");}
		}
	if(ali)
		{
		if (ali==1){$(".alignment").show();$(".Sali").hide();$(".Hali").show();buttons=updatebuttons(buttons,"22122");}
		else{$(".alignment").hide();$(".Sali").show();$(".Hali").hide();buttons=updatebuttons(buttons,"22022");}
		}
	if(seq)
		{
		if(seq==1){$(".sequence").show();$(".Sseq").hide();$(".Hseq").show();buttons=updatebuttons(buttons,"22212");}
		else{$(".sequence").hide();$(".Sseq").show();$(".Hseq").hide();buttons=updatebuttons(buttons,"22202");}
		}
	if(dom)
		{
		if(dom==1){$(".mainarch").show();$(".Sarc").hide();$(".Harc").show();buttons=updatebuttons(buttons,"22221");}
		else{$(".mainarch").hide();$(".Sarc").show();$(".Harc").hide();buttons=updatebuttons(buttons,"22220");}
		}
	}

var buttons = '10001';


		
function buttons2urlparameter(buttons) {
	bl = buttons.split("");
	return "@tm=" + bl[0] +",cov=" + bl[1] + ",ali=" + bl[2] + ",seq=" + bl[3] + ",dom=" + bl[4]; 
	}
	

function updatebuttons(thestring,requested)
	{
	//return 1;
	var li = requested.split("");
	var bl = thestring.split("");
	var newstring = '';
	for (i=0;i<li.length;i++){
		var newstatus = li[i];
		var oldstatus = bl[i];
		if(newstatus!=2){ 
			newstring += newstatus;
			}
		else{ 
			newstring += oldstatus;
			}
		}
	return newstring;
	}
		
function codostmenu(){
	var text = "";
	text += '<tr style="height:15px;">';
	text +=	'<td id="Ztitle" class="firstrow">CoDoST</td>';
			
	text +=	'<td class="Stm buttonon firstrow"><a  onclick=\'$(".tm").show();$(".Stm").hide();$(".Htm").show();buttons=updatebuttons(buttons,\"12222\");\'><b/>Transmembrane</a></td>';
	//text +=	'<td class="Stm buttonon firstrow"><a  onclick=\'$(".tm").show();$(".Stm").hide();$(".Htm").show();buttons=deneme(buttons,\"11111\");\'><b/>Transmembrane</a></td>';
	text +=	'<td class="Htm buttonoff firstrow"><a onclick=\'$(".tm").hide();$(".Stm").show();$(".Htm").hide();buttons=updatebuttons(buttons,\"02222\");\'><b/>Transmembrane</a></td>';
	//text +=	'<td class="Htm buttonoff firstrow"><a onclick=\'$(".tm").hide();$(".Stm").show();$(".Htm").hide();\'><b/>Transmembrane</a></td>';
				
	text +=	'<td class="Scov buttonon firstrow"><a onclick=\'$(".coverage").show();$(".Scov").hide();$(".Hcov").show();buttons=updatebuttons(buttons,\"21222\");\'><b/>Coverage</a></td>';
	text +=	'<td class="Hcov buttonoff firstrow"><a onclick=\'$(".coverage").hide();$(".Scov").show();$(".Hcov").hide();buttons=updatebuttons(buttons,\"20222\");\'><b/>Coverage</a></td>';
				
	text +=	'<td class="Sali buttonon firstrow"><a  onclick=\'$(".alignment").show();$(".Sali").hide();$(".Hali").show();buttons=updatebuttons(buttons,\"22122\");\'><b/>Alignment</a></td>';
	text +=	'<td class="Hali buttonoff firstrow"><a onclick=\'$(".alignment").hide();$(".Sali").show();$(".Hali").hide();buttons=updatebuttons(buttons,\"22022\");\'><b/>Alignment</a></td>';
				
	text +=	'<td class="Sseq buttonon firstrow"><a  onclick=\'$(".sequence").show();$(".Sseq").hide();$(".Hseq").show();buttons=updatebuttons(buttons,\"22212\");\'><b/>Sequence</a></td>';
	text +=	'<td class="Hseq buttonoff firstrow"><a onclick=\'$(".sequence").hide();$(".Sseq").show();$(".Hseq").hide();buttons=updatebuttons(buttons,\"22202\");\'><b/>Sequence</a></td>';
				
	text +=	'<td class="Sarc buttonon firstrow"><a  onclick=\'$(".mainarch").show();$(".Sarc").hide();$(".Harc").show();buttons=updatebuttons(buttons,\"22221\");\'><b/>Domains</a></td>';
	text +=	'<td class="Harc buttonoff firstrow"><a onclick=\'$(".mainarch").hide();$(".Sarc").show();$(".Harc").hide();buttons=updatebuttons(buttons,\"22220\");\'><b/>Domains</a></td>';
				
	text +=	'<!--<td><div  style="position: relative; left: 0px; top: 0px; width: 115px; height: 20px;" onclick=\'myreset();\'><b/>Reset</a></td>-->';
				
	text +=	'<td class="Sdra buttonon firstrow"><a onclick=\'drag();$(".Sdra").hide();$(".Sfix").show()\'><b/>Drag</a></td>';
	text +=	'<td class="Sfix buttonoff firstrow"><a onclick=\'dragfix();$(".Sdra").show();$(".Sfix").hide()\'><b/>Drag</a></td>';

	text +=	'<td class="Smet buttonon firstrow"><a onclick=\'$(".method").show();$(".Smet").hide();$(".Hmet").show()\'><b/>Method</a></td>';
	text +=	'<td class="Hmet buttonoff firstrow"><a onclick=\'$(".method").hide();$(".Smet").show();$(".Hmet").hide()\'><b/>Method</a></td>	<td class="firstrow" align="right">';

	return text;
	}

function exportPDF(buttons){
	var desiredURL = document.URL.replace("#","").split("?")[0]+buttons2urlparameter(buttons);
	window.open("http://leonidas.bio.utk.edu/cgi-bin/exportPDF.py?url="+desiredURL,"_self");
	}
	
function stableTopBar(){
var showStaticMenuBar = false;
$(window).scroll(function () {
//if the static menu is not yet visible...
	if (showStaticMenuBar == false) {
	//if I scroll more than 200px, I show it 
		if ($(window).scrollTop() >= 10) {
			//showing the static menu
			$('#header').addClass('fixed');
			showStaticMenuBar = true
			}
		}
	//if the static menu is already visible...
	else {
		if ($(window).scrollTop() <10) {
			$('#header').removeClass('fixed');
			//I define it as hidden
			showStaticMenuBar = false;
		}
	}
	});
}



function download_menu(){
	$(document).ready(function()
	{

	$(".download").click(function()
	{
	var X=$(this).attr('id');
	if(X==1)
	{
	$(".submenu").hide();
	$(this).attr('id', '0'); 
	}
	else
	{
	$(".submenu").show();
	$(this).attr('id', '1');
	}

	});

	//Mouse click on sub menu
	$(".submenu").mouseup(function()
	{
	return false
	});

	//Mouse click on my download link
	$(".download").mouseup(function()
	{
	return false
	});


	//Document Click
	$(document).mouseup(function()
	{
	$(".submenu").hide();
	$(".download").attr('id', '');
	});
	});
}

function myreset(){
	$(".coverage").hide();
	$(".alignment").hide();
	$(".sequence").hide();
	$(".play").hide();
    $(".Htm").show();
    $(".Stm").hide();
    $(".Scov").show();
    $(".Hcov").hide();
    $(".Sseq").show();
    $(".Hseq").hide();
    $(".Sali").show();
    $(".Hali").hide();
    $(".Harc").show();
    $(".Sarc").hide();
    $(".Sfix").hide();
    $(".Hmet").hide();
    $(".method").hide();
    $(".statusbars").hide();
    $(".statusbars").show("drop");
	urlparamteres2switchbuttons();

	}

	
function newpopup(addressinfo,yukseklik,genislik)
	{
	popupWindow = window.open(addressinfo,'popUpWindow', "height="+yukseklik+",width="+genislik+",left=10,top=10,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no,titlebar=no,directories=no")
	}
	
function drawBar(headers,values,startpoint){

	var euk = 336;
	var bac = 2931;
	var arc = 211;
	var themax = bac;
	var normalization = [];
	normalization[0] = themax/euk;
	normalization[1] = themax/bac;
	normalization[2] = themax/arc;
	
	
	y=0;
	//q=12;
	//r=7;
	//c=4;
	var color_list = new Array();
	color_list[0] = color_q;
	color_list[1] = color_r;
	color_list[2] = color_c;
	h=20;
	var full=500;
	var xprev=0;
	
	var total = 0;
	
	for (i=startpoint;i<values.length;i++){total += parseInt(values[i])*normalization[i-startpoint];}
	var ratio = total/full;
	var text='<svg width="'+full+'" height="20">';
	
	for (i=startpoint;i<values.length;i++){
		var c = i - startpoint;	
		var header = headers[i];
		var value = parseInt(values[i])*normalization[c];
		var xstart = xprev;
				if(value){
		text += '<rect x=' + xprev/ratio + ' y='+y+' width='+value/ratio+' height="'+h+'" style="fill:'+color_list[c]+';stroke-width:0;stroke:rgb(255,255,255)" />';
			if(value/ratio>50){
			text += '<text x='+(xprev+value/2)/ratio+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" s=10 text-anchor="middle" dominant-baseline="central">'+header+'</text>';
			}
		xprev += value;
		}
	}
		
	text += '</svg>';
	
	return text;
	}
	
function drawStatusBar(q,r,c,k){
	y=0;
	//q=12;
	//r=7;
	//c=4;
	t = q+r+c+k
	h=20;
	full=700
	mult = full/t
	var text='<svg width="'+full+'" height="20">';
	if(q){
	text += '<rect x=0 y='+y+' width='+q*mult+' height="'+h+'" style="fill:'+color_q+';stroke-width:0;stroke:rgb(255,0,0)" />';
		if(q*mult>100){
		text += '<text x='+q*mult/2+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" s=10 text-anchor="middle" dominant-baseline="central">queued('+q+')</text>';
		}
	}
	if(r){
	text += '<rect x='+q*mult+' y='+y+' width='+r*mult+' height="'+h+'" style="fill:'+color_r+';stroke-width:0;stroke:rgb(255,0,0)" />';
		if(r*mult>100){
			text += '<text x='+(q+r/2)*mult+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">running('+r+')</text>';
		}
	}
	if(c){
	text += '<rect x='+(q+r)*mult+' y='+y+' width='+c*mult+' height="'+h+'" style="fill:'+color_c+';stroke-width:0;stroke:rgb(255,0,0)" />';
		if(c*mult>100){
			text += '<text x='+(q+r+c/2)*mult+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">completed('+c+')</text>';
		}
	}
	if(k){
	text += '<rect x='+(q+r+c)*mult+' y='+y+' width='+k*mult+' height="'+h+'" style="fill:'+color_k+';stroke-width:0;stroke:rgb(255,0,0)" />';
		if(k*mult>100){
			text += '<text x='+(q+r+c+k/2)*mult+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">killed('+k+')</text>';
		}
	}
	
	text += '</svg>';
	var bar = document.getElementById('statusbar');
	bar.innerHTML = text;
	}

function drawSinlgeStatus(status){
	
	var barWidth = 300;
	
	if (status=="queued"){
	var text = '<svg width='+barWidth+' height="20">';
	text += '<rect x=0 y=0 width='+barWidth+' height=20 style="fill:'+color_q+';stroke-width:0;stroke:rgb(255,0,0)" />'
	text += '<text x='+barWidth/2+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">queued</text>';
	text += '</svg>';
	document.write(text);
	}
	else if (status=="running"){
	var text = '<svg width='+barWidth+' height="20">';
	text += '<rect x=0 y=0 width='+barWidth+' height=20 style="fill:'+color_r+';stroke-width:0;stroke:rgb(255,0,0)" />'
	text += '<text x='+barWidth/2+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">running</text>';
	text += '</svg>';
	document.write(text);
	}
	else if (status=="killed"){
	var text = '<svg width='+barWidth+' height="20">';
	text += '<rect x=0 y=0 width='+barWidth+' height=20 style="fill:'+color_k+';stroke-width:0;stroke:rgb(255,0,0)" />'
	text += '<text x='+barWidth/2+' y="10" fill="black" style="font-family: Arial" lengthAdjust="spacingAndGlyphs" font-size=10 text-anchor="middle" dominant-baseline="central">killed</text>';
	text += '</svg>';
	document.write(text);
	}
		

	}

function drag()
	{
	$(function() {
    $( ".draggable" ).draggable({ axis: 'x' });
	});
	}

function dragfix()
	{
	$(function() {
    $( ".draggable" ).draggable( "destroy" );
	});
	}
		


var dbs=new Object; //Database List for ColorCode
dbs[0]="Pfam27.0";
dbs[1]="pfam";
dbs[2]="cdd";
dbs[3]="pdb";
dbs[4]="scop";
dbs[5]="smart";
dbs[6]="tigr";
dbs[7]="pirsf";
// dbs[8]="pirsf";
// dbs[9]="scop";
// dbs[10]="smart";
// dbs[11]="supfam";
// dbs[12]="tigr";

function drawcolorcode() 
	{
	// var canv = document.getElementById('colorcode');
	// var figure = canv.getContext('2d');	

	leng=2
	heig=7
	st=40	
	ik=14
	ableng=st+leng
	var cctext=''
	for (var i=0;i<=100;i++)
		{
		color = dbandscore2color(dbs[0],i);
		begx=leng*i+st
		begy=3+heig*0
		hei=heig-2
		cctext=cctext+'<rect x='+begx+' y='+begy+' width='+leng+' height='+heig+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)" />'
		}
	
	font = "10px Arial";
	textAlign="right"; 	
	textBaseline ="top";
	var labels=''
	st2=st-3
	labels=labels+'<text x='+st2+' y="9" fill="black" style="font-family: Arial" font-size="8" text-anchor="end" dominant-baseline="top">pfam</text></a>';
	labels=labels+'<text x='+260+' y="9" fill="black" style="font-family: Arial" font-size="10" text-anchor="start" dominant-baseline="top">HMMsearch</text></a>';
	labels=labels+'<text x='+260+' y="24" fill="black" style="font-family: Arial" font-size="10" text-anchor="start" dominant-baseline="bottom">Probability</text></a>';
	labels=labels+'<text x='+40+' y="24" fill="black" style="font-family: Arial" font-size="8" text-anchor="middle" dominant-baseline="bottom">0%</text></a>';
	labels=labels+'<text x='+90+' y="24" fill="black" style="font-family: Arial" font-size="8" text-anchor="middle" dominant-baseline="bottom">25%</text></a>';
	labels=labels+'<text x='+140+' y="24" fill="black" style="font-family: Arial" font-size="8" text-anchor="middle" dominant-baseline="bottom">50%</text></a>';
	labels=labels+'<text x='+190+' y="24" fill="black" style="font-family: Arial" font-size="8" text-anchor="middle" dominant-baseline="bottom">75%</text></a>';
	labels=labels+'<text x='+240+' y="24" fill="black" style="font-family: Arial" font-size="8" text-anchor="middle" dominant-baseline="bottom">100%</text></a>';
	
	for (var j=1;j<8;j++)
		{
		
		for (var i=0;i<=100;i++)
			{
			color = dbandscore2color(dbs[j],i);
			x=st+leng*i
			y=ik+heig*j+5
			labels=labels+'<rect x='+x+' y='+y+' width='+leng+' height='+heig+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)" />'
			}
	yt=ik+heig*j+6.5+5
	st2=st-3
	labels=labels+'<text x='+st2+' y='+yt+' fill='+color+' style="font-family: Arial" font-size="8" text-anchor="end" dominant-baseline="top">'+dbs[j]+'</text></a>';
		
		}
	labels=labels+'<text x='+260+' y="45" fill="black" style="font-family: Arial" font-size="10" text-anchor="start" dominant-baseline="top">HHsearch</text></a>';
	//document.write(cctext)	
	//document.write(labels)
	var total = cctext + labels;
	return total;
	
	}
	
function drawParam(parameters)
	{
	fontsize = 16;
	document.write('<svg class="draggable" id="legend" baseProfile="full" height="430" version="1.1" width="900" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">')
	var text = '';
	
			

	leng=4;
	heig=14;
	st=60;
	ik=140;
	full = st + 400;

	function drawhmmer(text)
	{
	var db = "Pfam27.0";
	color = dbandscore2color(db,100);
	text += '<text x='+st+' y="20" fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">HMMsearch - Internal Cutoffs</text>'
	text += '<rect x='+st+' y='+30+' width='+full+' height='+heig+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)"></rect>'	
	

	return text;
	}


	function drawrps(text,cutoff,gap)
	{

	var db = "Cdd";
	color = dbandscore2color(db,100);
	text += '<text x='+st+' y="70" fill='+color+' style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">RPSBLAST - E-value \< '+cutoff+' - Gap Length=' + gap + 'aa</text>'
	text += '<rect x='+st+' y='+80+' width='+full+' height='+heig+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)"></rect>'	
	

	return text;
	}
	
	function drawhhsearch(hhsearchtext,text)
	{
	hhsearchtitle = 'HHsearch';
	var hhblits  = parameters.indexOf('-b');
	if (hhblits > -1)
		{
		var paramhhblits = parameters.substring(hhblits+3).split(" ")[0];
		bl = paramhhblits.split('_');
		bdb = bl[0];
		if(bdb=="both")
			{
			bdb = "NR and Uniprot"
			}
		bcutoff = parseFloat(bl[1]);
		bgap = bl[2];
		hhsearchtitle += ' + [HHblits - probability \> ' + bcutoff + ' - db=' + bdb + ']';  



		}
	footnotestart=400;
	ik0 = 140;
	HHsearch_title_y = ik0-20;

		var j = 0;
		pl = hhsearchtext.split('AND');
		for(var m=0; m<pl.length; m++)
		{
			pll = pl[m].split("_");
			var db = pll[0];
			if(db != "None")
			{
				cutoff = parseFloat(pll[1]);
				cutoffline = st+20+4*cutoff;
				bcutoffline =  st+21+4*bcutoff;
				gap = parseInt(pll[2]);
				color = dbandscore2color(db,100);
				y=ik+(heig+30)*j+30;
				texty = y-5;
				//draw here
				text += '<text x='+80+' y='+texty+' fill='+color+' style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">' + db + ' - Probability \> '+cutoff+' - Gap Length=' + gap + 'aa</text>'
				for (var i=0;i<=100;i++)
					{
					
					x=st+20+leng*i;
					color = dbandscore2color(db,i);
					text += '<rect x='+x+' y='+y+' width='+leng+' height='+heig+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)" />';
					}
				text += '<circle cx=' + bcutoffline + ' cy='+(y+8)+' r="3" stroke="black" stroke-width="0.1" fill=' + color + ' />'
				if (hhblits > -1)
				{
					text += '<rect x='+cutoffline+' y='+(y-4)+' width='+2+' height='+22+' style="fill:'+color+';stroke-width:0;stroke:rgb(100,100,100)" />';
				}
				j++;
			}

		
		}
	arrowtip = 360-(5-j)*30;
	footnotestart = footnotestart - (5-j)*30;
	arrowdepth = arrowtip - 20;
	text += '<path d=" M 25,25 L 25,' + arrowtip + ' L 15,' + arrowdepth + ' L 35,' + arrowdepth + ' L 25,' + arrowtip + '" fill="black" stroke="black" stroke-width="3.8"/>';
	if(j!=0)
	{
		text += '<text x='+st+' y='+HHsearch_title_y+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">' + hhsearchtitle + '</text></a>';
		text += '<text x='+80+' y='+ik0+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="middle" dominant-baseline="bottom">0%</text></a>';
		text += '<text x='+180+' y='+ik0+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="middle" dominant-baseline="bottom">25%</text></a>';
		text += '<text x='+280+' y='+ik0+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="middle" dominant-baseline="bottom">50%</text></a>';
		text += '<text x='+380+' y='+ik0+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="middle" dominant-baseline="bottom">75%</text></a>';
		text += '<text x='+480+' y='+ik0+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="middle" dominant-baseline="bottom">100%</text></a>';
	}	
	return text;
	}

	function drawdomainsplit(cutoff,text)
		{
		text += '<text x='+60+' y='+(footnotestart+20)+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">Domain Split Function applied with Cutoff = '+cutoff+'\%</text>'
		return text;
		}

	function drawTMmethod(tm,text)
		{
		text += '<text x='+60+' y='+footnotestart+' fill="black" style="font-family: Arial" font-size=' + fontsize + ' text-anchor="start" dominant-baseline="top">TM prediction method: '+tm+'</text>'
		return text;
		}


	var hmmer = parameters.indexOf('-nohmmer');
	
	if (hmmer == -1){text += drawhmmer(text);}
	
	var rps  = parameters.indexOf('-rpsblast');
	if (rps > -1)
	{
		var rpscutoff = parameters.substring(rps+10).split(" ")[0].split("_")[1];
		var gaplength = parameters.substring(rps+10).split(" ")[0].split("_")[2];
		text += drawrps(text,rpscutoff,gaplength);
	}
	
	
	hhsearchtext = parameters.substring(parameters.indexOf('-d')+3).split(" ")[0];
	text += drawhhsearch(hhsearchtext,text);
	
	domainsplit = parameters.indexOf('-splitdomain');
	if (domainsplit > -1)
	{
		//alert(parameters.substring(domainsplit + 13))
		var dscutoff =  parameters.substring(domainsplit + 13).split(" ")[0];
		text += drawdomainsplit(dscutoff,text);
	}

	tm = parameters.substring(parameters.indexOf('-tm')+4).split(" ")[0];
	text = drawTMmethod(tm,text)

//	alert(parameters.indexOf('-d'));

//	alert(parameters);
	document.write(text);
	document.write("</svg>");
}



//Accessory but MUST Functions////

function findlink(db,name){
	if ((db=='pfam')||(db=='Pfam27.0'))
		{
		thelink='http://pfam.sanger.ac.uk/family/'+name;
		}
	else if (db=='cdd')
		{
		thelink='http://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid='+name;
		}
	else if (db=='pdb')
		{
		thelink='http://www.rcsb.org/pdb/explore.do?structureId='+name.substring(0, name.length - 2);
		}
	else if (db=='cog')
		{
		thelink='http://www.ncbi.nlm.nih.gov/cdd/?term='+name;
		}
	else if (db=='smart')
		{
		thelink='http://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid='+name;
		}
	else if (db=='tigr')
		{
		thelink='http://www.jcvi.org/cgi-bin/tigrfams/HmmReportPage.cgi?acc='+name;
		}
	else if (db=='pirsf')
		{
		thelink='http://pir.georgetown.edu/cgi-bin/ipcSF?id='+name;
		}
	else
		{
		thelink='https://www.google.com/#q='+name;
		}
		
		
		
	return thelink;
	}
	
function db2method(db){
	if (db == "Pfam27.0"){method="hmmer";}
	else if (db == "Cdd"){method="rpsblast";}
	else {method="hhpred";}
	return method
}

function dbandscore2color (db,score){
	opacity=score/100
	
	var contourcode=new Object();
	contourcode["Pfam27.0"]="rgba(0,0,0,1)";
	contourcode["Cdd"]="rgba(60,30,30,1)";
	contourcode["pfam"]="rgba(150,0,0,"+opacity+")";
	contourcode["custompfam"]="rgba(150,0,0,"+opacity+")";
	contourcode["cdd"]="rgba(0,150,0,"+opacity+")";
	contourcode["pdb"]="rgba(0,0,150,"+opacity+")";		
	contourcode["cath"]="rgba(139,69,19,"+opacity+")";		
	contourcode["cog"]="rgba(205,133,0,"+opacity+")";		
	contourcode["kog"]="rgba(255,255,0,"+opacity+")";		
	contourcode["panther"]="rgba(128,128,0,"+opacity+")";		
	contourcode["pirsf"]="rgba(255,69,0,"+opacity+")";		
	contourcode["scop"]="rgba(135,38,87,"+opacity+")";		
	contourcode["smart"]="rgba(46,139,87,"+opacity+")";		
	contourcode["supfam"]="rgba(198,113,113,"+opacity+")";		
	contourcode["tigr"]="rgba(0,51,51,"+opacity+")";	
	
	return contourcode[db];
	}
	
function db2color (db){

	var contourcode=new Object();
	contourcode["Pfam27.0"]="rgb(0,0,0)";
	contourcode["Cdd"]="rgb(60,30,30)";
	contourcode["pfam"]="rgb(150,0,0)";
	contourcode["custompfam"]="rgb(150,0,0)";
	contourcode["cdd"]="rgb(0,150,0)";
	contourcode["pdb"]="rgb(0,0,150)";		
	contourcode["cath"]="rgb(139,69,19)";		
	contourcode["cog"]="rgb(205,133,0)";		
	contourcode["kog"]="rgb(255,255,0)";		
	contourcode["panther"]="rgb(128,128,0)";		
	contourcode["pirsf"]="rgb(255,69,0)";		
	contourcode["scop"]="rgb(135,38,87)";		
	contourcode["smart"]="rgb(46,139,87)";		
	contourcode["supfam"]="rgb(198,113,113)";		
	contourcode["tigr"]="rgb(0,51,51)";	
	
	return contourcode[db];
	}
	
function score2opacity (db,score){
	var opacity=score/100;
	
	var contourcode=new Object();
	contourcode["Pfam27.0"]=1;
	contourcode["Cdd"]=1;
	contourcode["pfam"]=opacity;
	contourcode["custompfam"]=opacity;
	contourcode["cdd"]= opacity;
	contourcode["pdb"]= opacity;
	contourcode["cath"]= opacity;	
	contourcode["cog"]= opacity;
	contourcode["kog"]= opacity;
	contourcode["panther"]= opacity;
	contourcode["pirsf"]= opacity;
	contourcode["scop"]= opacity;
	contourcode["smart"]= opacity;
	contourcode["supfam"]= opacity;
	contourcode["tigr"]= opacity;
	
	return contourcode[db];
	}
		

//The Core Domain Architecture Draw Functions//////


function drawbackbone(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext) {
	length=fullsequence.length;
	var backbonetext='<svg class="backbone" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + length + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
	backbonetext += '<rect x="0" y="17.5" width="'+length+'" height="2.5" style="fill:rgb(100,100,100);stroke-width:1;stroke:rgb(100,100,100)" />';
	backbonetext += '</svg>';
	//document.write(backbonetext);
	return backbonetext;
	
	}
			
function drawarch(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext) {
	var domaindrawtext;
	
	length=fullsequence.length;
	svglength = length + 2;
	domaindrawtext += '<svg class="mainarch" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + svglength.toString() + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
		

	
	domainlist=domaintext.split(';')
	locationlist=locationtext.split(';')
	scorelist=scoretext.split(';')
	dblist=dbtext.split(';')
	covlist=coveragetext.split(';')
	
	
	
	var renk ="rgb(200,0,40)";
	var opacity;
	
			
	for (var i=0;i<domainlist.length-1;i++)
		{
			
		var domainname=domainlist[i];
		var score=scorelist[i];
		var db=dblist[i];
		var cover=covlist[i];
		
		var interval=cover.split('_')[1];
		var modellength=parseInt(cover.split('_')[2]);
		
		themethod = db2method(db);
		if (db=='Pfam27.0')
			{
			var aliSE=cover.split('_')[0];
			var tooltip = "method="+themethod+",db=" + db + ", score="+score;
			}
		else if(db == "Cdd")
			{
			var aliSE='';
			var tooltip = "method="+themethod+",db=" + db + ", e-value="+score;
			} 
		else
			{
			var aliSE=''
			var tooltip = "method="+themethod+",db=" + db + ", probability="+score+"%";
			}
		
		
		var modelstart=parseInt(interval.split('-')[0]);
		var modelend=parseInt(interval.split('-')[1]);
			
		if (modellength-modelend)
			{
			if ((modellength-modelend)/modellength>0.1)
				{
				endexact=0
				}
			else
				{
				endexact=1
				}
			}
		else
			{
			endexact=1
			}
			
		if (modelstart)
			{
			if ((modelstart/modellength)>0.1)
				{
				startexact=0
				}
			else
				{
				startexact=1
				}
			}
		else
			{
			startexact=1
			}
			
			

		var domstart=parseInt(locationlist[i].split("-")[0])
		var domend=locationlist[i].split("-")[1]
		var domlength=domend-domstart;

		ybeg=9
		yend=28
		y1=ybeg+(yend-ybeg)/4
		y2=ybeg+2*((yend-ybeg)/4)
		y3=ybeg+3*((yend-ybeg)/4)
		
		
		
		domaindrawtext +='<path d=" M '+domstart+','+ybeg+' L '+domend+','+ybeg+' '
		
		
		
		
		
		
		if (endexact)
			{
			domaindrawtext=domaindrawtext+'L '+domend+','+yend;
			}
		else
			{
			domaindrawtext=domaindrawtext+'L '+(domend-3)+','+y1+' L '+domend+','+y2+' L '+(domend-3)+','+y3+' L '+domend+','+yend;
			}
		
		domaindrawtext=domaindrawtext+'L '+domstart+','+yend;
			
		if (startexact)
			{
			domaindrawtext=domaindrawtext+'L '+domstart+','+yend;
			}
		else
			{
			domaindrawtext=domaindrawtext+'L '+(domstart+3)+','+y3+' L '+domstart+','+y2+' L '+(domstart+3)+','+y1+' L '+(domstart)+','+ybeg;
			}
			
		domaindrawtext=domaindrawtext+'Z "';
		domaindrawtext=domaindrawtext+' fill="rgb(255,255,255)" fill-opacity="0.9"  stroke="'+db2color(db)+'" stroke-opacity="'+score2opacity(db,score)+'" stroke-width="1.5">'
		domaindrawtext += '<title>' + tooltip + '</title></path>';

		var len=domainname.length;
		var yaziboyu=16;
		var textstart=domstart+domlength/2;			

		if (len*10-domlength>29)
			{
			var yaziboyu=9;
			textwidth=len*7.5
			}
		else if (len*10-domlength>19)
			{
			var yaziboyu=10;
			textwidth=len*7.5
			}
		else if (len*10-domlength>0)
			{
			var yaziboyu=12;
			textwidth=len*7.5
			}
		else
			{
			var yaziboyu=15;
			textwidth=len*8.6
			}
		
		textwidth=Math.min(domlength-2,textwidth);
		textstart=textstart.toString();
		yaziboyu=yaziboyu.toString();
		
		domaindrawtext += '<a xlink:href="'+findlink(db,domainname)+'" target="_blank">'
		domaindrawtext += '<text x="'+textstart+'" y="19" fill="black" style="font-family: Arial"  textLength="'+textwidth+'" lengthAdjust="spacingAndGlyphs" font-size="'+yaziboyu+'" text-anchor="middle" dominant-baseline="central">'+domainname+'</text></a>';
		// var domaintext='<text x='+textstart+' y="19" fill="black" style="font-family: Arial"   lengthAdjust="spacingAndGlyphs" font-size='+yaziboyu+' text-anchor="middle" dominant-baseline="central">'+domainname+'</text>';
		
		

		}
	//document.write('<script>tooltip();</script>')
	domaindrawtext += '</svg>';
	//document.write(domaindrawtext)
	return domaindrawtext;
	}
		
function drawcoverage(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext){
	var cov = '';
	length=fullsequence.length
	cov += '<svg class="coverage" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + length + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
	domainlist=domaintext.split(';')
	locationlist=locationtext.split(';')
	scorelist=scoretext.split(';')
	dblist=dbtext.split(';')
	covlist=coveragetext.split(';')
	sequencelist=sequencetext.split(';')
	
	kale=44
	p=0;
		for (var i=0;i<domainlist.length-1;i++)
		{	
			
			var domainname=domainlist[i];
			var score=scorelist[i];
			var db=dblist[i];
			var cover=covlist[i];
			var sequencewithgaps=sequencelist[i];
			
			var interval=cover.split('_')[1];
			var modellength=parseInt(cover.split('_')[2]);
			
			if (db=='Pfam27.0')
				{
				var aliSE=cover.split('_')[0];
				}
			else
				{
				var aliSE=''
				}
				
				
				
				
			
			var modelstart=parseInt(interval.split('-')[0]);
			var modelend=parseInt(interval.split('-')[1]);
			var domstart=parseInt(locationlist[i].split("-")[0])
			var domend=locationlist[i].split("-")[1]
			var domlength=domend-domstart;
			var bottomlineposition=37;
			var dlen=domlength;
			var dend=domend;
			var dbeg=domstart;
			var mbeg=modelstart;
			var mend=modelend;
			var mtotal=modellength;
			
			
			var dlen=dend-dbeg;

			var mlen=mend-mbeg
			var abeg=dbeg+((mbeg/mtotal)*dlen)
			
			var aend=Math.round(abeg+((mlen/mtotal)*dlen))
			var alen=aend-abeg
			bottomline=38
			bl=bottomline+1.5
			dbb=29;
			pinde=-1;
			verticallimit=0;
			
			while (sequencewithgaps.indexOf('-')>-1)
				{				
				inde=sequencewithgaps.indexOf('-');
				place=dbeg+inde;
	
				if (inde==pinde)
					{
					verticallimit=verticallimit+1;
						if (verticallimit%8==0)
						{
						domainbottomborder=dbb;
						}
						else
						{
						domainbottomborder=domainbottomborder+1;
						}
					}
				else
					{
					domainbottomborder=dbb;
					pinde=inde;
					verticallimit=0;
					}
				
				
				place=dbeg+inde+Math.round(verticallimit/8-0.5);
			
				cov=cov+'<rect x="'+place+'" y="'+domainbottomborder+'" width="0.9" height="0.9" style="fill:'+db2color(db)+';fill-opacity:'+score2opacity(db,score)+';stroke-width:0;stroke:rgb(100,100,100)" />'
				sequencewithgaps=sequencewithgaps.substr(0,inde)+sequencewithgaps.substr(inde+1);                         
				}                              
				
			cov=cov+'<rect x="'+dbeg+'" y="'+bottomline+'" width="'+dlen+'" height="2" style="fill:rgb(100,100,100);fill-opacity:0.4;stroke-width:0;stroke:rgb(100,100,100)" />'
			cov=cov+'<rect x="'+abeg+'" y="'+bottomline+'" width="'+alen+'" height="2" style="fill:'+db2color(db)+'; fill-opacity:'+score2opacity(db,score)+';stroke-width:0;stroke:rgb(100,100,100)" />'
			cov=cov+'<path d=" M '+abeg+','+bl+' L '+dbeg+',27 M '+aend+','+bl+' L '+dend+',27" fill="rgb(255,255,255)" fill-opacity="0.1" stroke="'+db2color(db)+'" stroke-opacity="'+score2opacity(db,score)+ '" stroke-width="0.8"/>'
			
			                                                
		}		
	 cov += '</svg>';
	 //document.write(cov);
	 return cov;
}

function drawalignment(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext) {
	var ali='';
	length=fullsequence.length;
	ali += '<svg class="alignment" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + length + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
	domainlist=domaintext.split(';');
	locationlist=locationtext.split(';');
	scorelist=scoretext.split(';');
	dblist=dbtext.split(';');
	covlist=coveragetext.split(';');
	sequencelist=sequencetext.split(';');
	alignmentlist=alignmenttext.split(';');
	
	kale=44

	for (var i=0;i<domainlist.length-1;i++)
		{

	
		

		
		var domainname=domainlist[i];
		var score=scorelist[i];
		var db=dblist[i];
		
		var cover=covlist[i];
		

		var interval=cover.split('_')[1];
		var modellength=parseInt(cover.split('_')[2]);
		
		if (db=='Pfam27.0')
			{
			var aliSE=cover.split('_')[0];
			}
		else
			{
			var aliSE=''
			}
			
		var alignment=alignmentlist[i];
		
			
		var sequence=sequencelist[i];
		var modelstart=parseInt(interval.split('-')[0]);
		var modelend=parseInt(interval.split('-')[1]);
		var domstart=parseInt(locationlist[i].split("-")[0])
		var domend=locationlist[i].split("-")[1]
		var domlength=domend-domstart;
		var bottomlineposition=37;
		var dlen=domlength;
		var dend=domend;
		var dbeg=domstart;
		var mbeg=modelstart;
		var mend=modelend;
		var mtotal=modellength;
		alignmentcharacterlist=alignment.split("");
		sequencecharacterlist=sequence.split("");
		
		
		
			
		
		if (db == "Pfam27.0"){method="hmmer";}
		else if (db == "Cdd"){method="rpsblast";}
		else {method="hhpred";}
		alignment0=alignment;
		alignment='';
		sequence='';
			for (var c=0;c<sequencecharacterlist.length;c++)
			{
			scharacter=sequencecharacterlist[c];
			acharacter=alignmentcharacterlist[c]
			
				if (scharacter != '-')
				{
				sequence=sequence+scharacter;
				alignment=alignment+acharacter;
				}
			
			}
			
		alignmentcharacterlist=alignment.split("");
		sequencecharacterlist=sequence.split("");
		
		
		
		var dlen=dend-dbeg;

		var mlen=mend-mbeg
		var abeg=dbeg+((mbeg/mtotal)*dlen)
		var aend=Math.round(abeg+((mlen/mtotal)*dlen))
		var alen=aend-abeg
		bottomline=37
		bl=bottomline+1.5
		topline=3
		

		
		
		
			
			if (method=="hmmer")
			{
			aliS=aliSE.split("-")[0]-1;
			aliE=aliSE.split("-")[1];
			aliL=aliE-aliS;
			tl=aliL
			// ali=ali+'<text x='+aliS+' y="1" fill="black" style="font-family: Courier" textLength='+tl+' lengthAdjust="spacingAndGlyphs" font-size="2" text-anchor="start" dominant-baseline="central">'+alignment+'</text>'
		
				for (var c=0;c<alignmentcharacterlist.length;c++)
				{	
					acharacter=alignmentcharacterlist[c];
					scharacter=sequencecharacterlist[c];
					if (scharacter==scharacter.toLowerCase())
						{cheight=0;ystart=topline;}
					else
						{
						if (acharacter == '+'){cheight=2;ystart=topline-2;}
						else if (acharacter == '_'){cheight=1;ystart=topline-1;}
						else 
							{
							if (acharacter==acharacter.toLowerCase())
								{cheight=2.5;ystart=topline-2.5;}
							else
								{cheight=3;ystart=topline-3;}
							}
						}
					sbeg=parseInt(aliS)+c;
					sbeg=sbeg
					ali=ali+'<rect x="'+sbeg+'" y="'+ystart+'" width="0.9" height="'+cheight+'" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(100,100,100)" />'
				}
			}
			else if (method == "rpsblast")
			{
			tl=dlen;
			bp = alignmentcharacterlist;
				for (var c=0;c<alignmentcharacterlist.length;c++)
				{
							
					acharacter=alignmentcharacterlist[c];
					if (acharacter == '+'){cheight=2;ystart=topline-2;}
					else if (acharacter == '_'){cheight=0;ystart=topline;}
					else {cheight=3;ystart=topline-3;}

					sbeg=dbeg+c-1
					ali=ali+'<rect x="'+sbeg+'" y="'+ystart+'" width="0.9" height="'+cheight+'" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(100,100,100)" />'
				}
			}
			else if (method=="hhpred")
			{
			tl=dlen
			// ali=ali+'<text x='+dbeg+' y="7" fill="black" style="font-family: Courier" textLength='+tl+' lengthAdjust="spacingAndGlyphs" font-size="3" text-anchor="start" dominant-baseline="central">'+alignment+'</text>'
		
				for (var c=0;c<alignmentcharacterlist.length;c++)
				{	
					acharacter=alignmentcharacterlist[c];
					
					if (acharacter == '|'){cheight=3;ystart=topline-3;}
					else if (acharacter == '+'){cheight=2;ystart=topline-2;}
					else if (acharacter == '.'){cheight=1;ystart=topline-1;}
					else if (acharacter == '-'){cheight=1;ystart=topline;}
					else if (acharacter == '='){cheight=2;ystart=topline;}
					else if (acharacter == '_'){cheight=0;ystart=topline;}
					else {cheight=0;ystart=topline;}
					sbeg=dbeg+c-1
					
					ali=ali+'<rect x="'+sbeg+'" y="'+ystart+'" width="0.9" height="'+cheight+'" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(100,100,100)" />'
				}
			}
			else {ali="Problem!";}
		// ali=ali+'<text x='+aliS+' y="25" fill="black" style="font-family: Courier" textLength='+tl+' lengthAdjust="spacingAndGlyphs" font-size="3" text-anchor="start" dominant-baseline="central">'+sequence+'</text>'
			
		
		}
	ali += '</svg>';
	//document.write(ali);
	return ali;
	}
	  
function drawTM(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext){
	TMwrite='<svg class="tm" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + length + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
	// TMwrite='<text x='+50+' y="20" fill="black" style="font-family: Courier" lengthAdjust="spacingAndGlyphs" font-size="8" text-anchor="start" dominant-baseline="central">'+tag+'</text>'
	
	firsttwo=TMinfo.substring(0,2)
	if(firsttwo!="No")
	{
	TMtext=TMinfo.split('_')[2];
	
	
	TMlist=TMtext.split(/[oi]+/);
	// TMwrite='<text x='+50+' y="17" fill="black" style="font-family: Courier" lengthAdjust="spacingAndGlyphs" font-size="8" text-anchor="start" dominant-baseline="central">'+TMlist[1]+'</text>'
	
	ystart=7;
	height=23.5;
	// TMwrite=TMwrite+'<rect x='+1+' y='+1+' width='+100+' height='+10+' style="fill:rgba(0,0,0,1);stroke-width:0;stroke:rgb(100,100,100)" />'
	for (var i=0;i<TMlist.length;i++)
		{
		if (TMlist[i])
			{
			tminterval=TMlist[i];
			tbeg=tminterval.split('-')[0];
			tend=tminterval.split('-')[1];
			tlen=tend-tbeg;
			// TMwrite=TMwrite+'<rect x='+1+' y='+23+' width='+100+' height='+10+' style="fill:rgba(0,0,0,1);stroke-width:0;stroke:rgb(100,100,100)" />'
			TMwrite=TMwrite+'<rect x="'+tbeg+'" y="'+ystart+'" width="'+tlen+'" height="'+height+'" style="fill:rgb(50,50,50);fill-opacity:0.8;stroke-width:0;stroke:rgb(100,100,100)" />'
			}
		}
	}
	TMwrite += '</svg>'
	//document.write(TMwrite)
	return TMwrite;
	}
	
function drawsequence(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext){
	domainlist=domaintext.split(';')
	locationlist=locationtext.split(';')
	dblist=dbtext.split(';')
	scorelist=scoretext.split(';')
	length = fullsequence.length;
	svglength = length + 2;

	
	
	yaxis=6;
	var seqtext = '<svg class="sequence" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + svglength + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
	last_index = 0;
	for (var i=0;i<domainlist.length-1;i++)
		{
		db=dblist[i];
		score=scorelist[i];
		interval=locationlist[i];
		dbeg=interval.split("-")[0]-1;
		dend=interval.split("-")[1];
	
		partialsequence=fullsequence.substring(dbeg,dend);
		color=db2color(db);
		textwidth=dend-dbeg;
		greysequence = fullsequence.substring(last_index,dbeg)
		greywidth=greysequence.length;
		seqtext += '<text x="'+last_index+'" y="'+yaxis+'" fill="grey" style="font-family: Courier" textLength="'+greywidth+'" lengthAdjust="spacingAndGlyphs" font-size="3" text-anchor="start" dominant-baseline="central">'+greysequence+'</text>'
		seqtext=seqtext+'<text x="'+dbeg+'" y="'+yaxis+'" fill="'+color+'" fill-opacity="'+score2opacity(db,score)+'" style="font-family: Courier" textLength="'+textwidth+'" lengthAdjust="spacingAndGlyphs" font-size="3" text-anchor="start" dominant-baseline="central">'+partialsequence+'</text>';
		last_index = dend;
		}
		greysequence = fullsequence.substring(last_index)
		greywidth=greysequence.length;
		seqtext += '<text x="'+last_index+'" y="'+yaxis+'" fill="grey" style="font-family: Courier" textLength="'+greywidth+'" lengthAdjust="spacingAndGlyphs" font-size="3" text-anchor="start" dominant-baseline="central">'+greysequence+'</text>'
	seqtext += '</svg>'
	//document.write(seqtext);
	return seqtext;
	}
				
function drawall(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext,myreturn){
	if(typeof(myreturn)==='undefined') myreturn = 0;
	length = fullsequence.length;
	svglength = length + 2;
	var alltext = ''
	alltext += '<svg class="draggable" id="' + tag + '" baseProfile="full" height="40" version="1.1" width="' + svglength + '" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
	alltext += drawbackbone(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext);
	alltext += drawTM(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext);
	alltext += drawarch(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext);
	alltext += drawalignment(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext);
	alltext += drawsequence(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext);
	alltext += drawcoverage(tag,fullsequence,TMinfo,domaintext,locationtext,scoretext,dbtext,coveragetext,sequencetext,alignmenttext);
	alltext += '</svg>';
	if(myreturn == 0){document.write(alltext);}
	else{return alltext;}

	}


 	// end hiding script from old browsers -->