/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var confirmSetup = 
{
  init: function()
  {
    var strBundle=document.getElementById("prefDescriptions");
  	var preflist = document.getElementById("preflist");
  	var prefs = window.arguments[0].split(",");
  	for (var i=0; i<prefs.length; i++)
  	{
  		if (prefs[i].length>0)
  		{
	  		var checkbox = document.createElement("checkbox");
	  		checkbox.id=prefs[i];
	  		var name;
	  		try
	  		{
	  			name = strBundle.getString(prefs[i]);
	  			if ((name==null)||(name.length==0))
	  				name=prefs[i];
	  		}
	  		catch (e)
	  		{
	  			name=prefs[i];
	  		}
	  		checkbox.setAttribute("label",prefs[i]);
	  		checkbox.setAttribute("checked","true");
	  		preflist.appendChild(checkbox);
	  	}
  	}
  }
};

window.addEventListener("load",confirmSetup.init,false);
