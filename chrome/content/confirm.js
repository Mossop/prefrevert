/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var confirmSetup = 
{
	_params: null,
	
  init: function()
  {
    var strBundle=document.getElementById("prefDescriptions");
  	var preflist = document.getElementById("preflist");
  	confirmSetup._params=windows.arguments[0];
  	var nodes = confirmSetup._params.nodes;
		for (var i=0; i<nodes.length; i++)
		{
			var prefname=nodes[i].getAttribute("name");
			if (prefname.substring(0,5)!="pref.")
			{
	  		var checkbox = document.createElement("checkbox");
	  		checkbox.id=prefname;
	  		var name;
	  		try
	  		{
	  			name = strBundle.getStringFromName(prefs[i]);
	  			if ((name==null)||(name.length==0))
	  				name=prefname;
	  		}
	  		catch (e)
	  		{
	  			name=prefname;
	  		}
	  		checkbox.setAttribute("label",name);
	  		checkbox.setAttribute("checked","true");
	  		preflist.appendChild(checkbox);
			}
		}
  }
};

window.addEventListener("load",confirmSetup.init,false);
