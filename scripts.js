window.onload = function() {
  
  document.querySelector("#tunnelbkgd").style.color = "orange";
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }
    
  document.querySelector("#footer").innerHTML += "<p>I haven't tried this recipe yet.</p>";
} // end of window.onload