document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const resumeIframe = document.getElementById("resumeIframe");
  
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeModalBtn.addEventListener("click", () => {
      resumeIframe.src = ""; // Clear the iframe source
      modal.style.display = "none";
    });
  
    // Automatically open the modal when the page loads
    //modal.style.display = "block";
  });
  