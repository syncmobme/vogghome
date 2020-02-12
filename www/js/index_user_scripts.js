(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #voltar */
    $(document).on("click", "#voltar", function(evt)
    {
         activate_page("#mainpage"); 
    });
    
        /* button  #btn-lista */
    $(document).on("click", "#btn-lista", function(evt)
    {
         activate_page("#lista"); 
    });
    
        /* button  #volta2 */
    $(document).on("click", "#volta2", function(evt)
    {
         activate_page("#lista"); 
    });
    
        /* listitem  #ver */
    $(document).on("click", "#ver", function(evt)
    {
         activate_page("#view"); 
    });
    
        /* listitem  #ligar */
    $(document).on("click", "#ligar", function(evt)
    {
        activate_page("#lista"); 
    });
    
        /* button  #fone */
    $(document).on("click", "#fone", function(evt)
    {
       var fone = document.getElementById("fone").value;
       
       navigator.app.loadUrl(fone, { openExternal:true });
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
