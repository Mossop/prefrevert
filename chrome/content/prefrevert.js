/*
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

var prefRevert = 
{
  _prefWindow: null,
  _strBundle: null,
  
  init: function()
  {
    var strsvc = Components.classes["@mozilla.org/intl/stringbundle;1"]
                         .getService(Components.interfaces.nsIStringBundleService);
    prefRevert._strBundle = strsvc.createBundle("chrome://prefrevert/locale/prefrevert.properties");
    prefRevert._prefWindow = document.getElementById("BrowserPreferences");
    
    var hbox = document.getAnonymousElementByAttribute(prefRevert._prefWindow,"anonid","dlg-buttons");
    if (hbox)
    {
      var button = document.createElement("button");
      button.id="revertPrefs";
      button.setAttribute("label",prefRevert._strBundle.GetStringFromName("revertPrefs.label"));
      button.setAttribute("class","dialog-button");
      hbox.insertBefore(button,hbox.firstChild);
      button.addEventListener("command",prefRevert.revertPrefs,false);
      var nodes = hbox.getElementsByTagName("spacer");
      for (var i = 0; i<nodes.length; i++)
      {
        if (nodes[i].getAttribute("anonid")=="spacer")
        {
          nodes[i].hidden=false;
        }
      }
    }
    else
    {
      dump("Not Found\n");
    }
  },
  
  revertPrefs: function()
  {
		var pane = prefRevert._prefWindow.preferencePanes[prefRevert._prefWindow._paneDeck.getAttribute("selectedIndex")];
		var nodes = pane.getElementsByTagName("preference");

		var params = { nodes: nodes, results: new Array(nodes.length) }
		var dialog = openDialog("chrome://prefrevert/content/confirm.xul","","modal,dialog",params);
		nodes=dialog.getElementsByTagName("checkbox");
		for (var i=0; i<nodes.length; i++)
		{
			dump(nodes[i].id+"\n");
		}
  }
};

window.addEventListener("load",prefRevert.init,false);
