/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var confirmSetup = 
{
	_nodes: null,
	_choices: null,
	
	checkboxChange: function(event)
	{
		confirmSetup._choices[event.target.id]=event.target.checked;
	},
	
  init: function()
  {
 		window.addEventListener("dialogaccept",confirmSetup.revert,false);
    var strBundle=document.getElementById("prefDescriptions");
  	var preflist = document.getElementById("preflist");
  	confirmSetup._nodes=window.arguments[0];
  	confirmSetup._choices = new Array(confirmSetup._nodes.length);
		for (var i=0; i<confirmSetup._nodes.length; i++)
		{
			var prefname=confirmSetup._nodes[i].getAttribute("name");
			if (prefname.substring(0,5)!="pref.")
			{
	  		var checkbox = document.createElement("checkbox");
	  		checkbox.id=i;
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
	  		if (name.length>0)
	  		{
		  		checkbox.setAttribute("label",name);
		  		checkbox.setAttribute("checked","true");
      		checkbox.setAttribute("tooltiptext","Refers to preference "+prefname);
		  		preflist.appendChild(checkbox);
		  		checkbox.addEventListener("command",confirmSetup.checkboxChange,false);
					confirmSetup._choices[i]=true;		  		
		  	}
		  	else
		  	{
					confirmSetup._choices[i]=false;
		  	}
			}
			else
			{
				confirmSetup._choices[i]=false;
			}
		}
  },
  
  revert: function()
  {
		for (var i=0; i<confirmSetup._choices.length; i++)
		{
			if (confirmSetup._choices[i])
			{
				dump("Reverting "+confirmSetup._nodes[i].name+"\n");
        /*if (confirmSetup._nodes[i].hasUserValue)
        {
          confirmSetup._nodes[i].reset();
        }
        confirmSetup._nodes[i]._setValue(confirmSetup._nodes[i].valueFromPreferences,false);*/
			}
		}
  },
  
  selectAll: function()
  {
  	var preflist = document.getElementById("preflist");
  	var nodes = preflist.getElementsByTagName("checkbox");
  	for (var i=0; i<nodes.length; i++)
  	{
  		nodes[i].checked=true;
  	}
  },
  
  selectNone: function()
  {
  	var preflist = document.getElementById("preflist");
  	var nodes = preflist.getElementsByTagName("checkbox");
  	for (var i=0; i<nodes.length; i++)
  	{
  		nodes[i].checked=false;
  	}
  },
  
  selectInvert: function()
  {
  	var preflist = document.getElementById("preflist");
  	var nodes = preflist.getElementsByTagName("checkbox");
  	for (var i=0; i<nodes.length; i++)
  	{
  		nodes[i].checked=!nodes[i].checked;
  	}
  }
};
