
function showImage(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
  
    modal.style.display = "block";
    modalImg.src = src;
  }
  

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  