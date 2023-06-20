const openBtn = document.getElementById("openBtn");
    const mySidenav = document.getElementById("mySidenav");
    const closeBtn = document.getElementById("closeBtn");

    openBtn.addEventListener("click", function() {
        mySidenav.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        mySidenav.style.display = "none";
    });