<html>
  <head>
    <script>
      var tabprov=new Array();
      tabprov['Quebec']=new Array("Laval","Montreal","Sherbrooke");
      tabprov['Ontario']=new Array();
      tabprov['Ontario'][0]="Ottawa";
      tabprov['Ontario'][1]="Toronto";
      tabprov['Ontario'][2]="Kingston";
      tabprov['Colombie_Britanique']=new Array("Vancouver","Victoria","Nanaimo");
      function charger(){
        var selprov=document.getElementById('selprov');
        for(var pr in tabprov)
          selprov.options[selprov.options.length]=new Option(pr);
      }
      function listervilles(){
        var selprov=document.getElementById('selprov');
        var selvilles=document.getElementById('selvilles');
        var provchoisie=selprov.options[selprov.selectedIndex].text;
        var tabvilles=tabprov[provchoisie];
        selvilles.options.length=0;
        for(var i=0;i<tabvilles.length;i++)
          selvilles.options[selvilles.options.length]=new Option(tabvilles[i]);
        document.getElementById('divilles').style.visibility='visible';
      }
    
    </script>
  </head>
  <body onLoad="charger();">
  Provinces : <select id='selprov' name='selprov' onChange="listervilles();">
        </select>
  <div id="divilles" style="visibility:hidden">
       Villes : 	<select id='selvilles' name='selvilles' onChange="">
            </select>
  </div>
  </body>
</html>