// Add your javascript here
const check = document.querySelector(".checkbox");
const collapses = document.querySelectorAll(".collapse-icon");
const expands = document.querySelectorAll(".expand-icon");
const accordion = document.querySelectorAll(".accordion");
const descriptions = document.querySelectorAll(".description");
const titles = document.querySelectorAll(".title");

toggleTitle();
defaultState();
collapse();
expand();

function defaultState() {
  descriptions.forEach(function (description, index) {
    descriptions[index].style.display = "none";
    collapses[index].style.display = "none";
  });
  descriptions[0].style.display = "block";
  collapses[0].style.display = "block";
}

function collapse() {
    collapses.forEach(function (collapse, index) {
      collapse.addEventListener("click", function () {
        if (!check.checked) {
          descriptions.forEach(function (description, i) {
            if (i !== index) {
              description.style.display = "none";
              expands[i].style.display = "block";
              collapses[i].style.display = "none";
            }
          });
        }
        descriptions[index].style.display = "none";
        collapse.style.display = "none";
        expands[index].style.display = "block";
      });
    });
  }
  
  function expand() {
    expands.forEach(function (expand, index) {
      expand.addEventListener("click", function () {
        if (!check.checked) {
          descriptions.forEach(function (description, i) {
            if (i !== index) {
              description.style.display = "none";
              expands[i].style.display = "block";
              collapses[i].style.display = "none";
            }
          });
        }
        descriptions[index].style.display = "block";
        expand.style.display = "none";
        collapses[index].style.display = "block";
      });
    });
  }
  
  function toggleTitle() {
    titles.forEach(function (title, index) {
        title.addEventListener("click", function () {
            if (check.checked) {
                descriptions[index].style.display = descriptions[index].style.display === "none" ? "block" : "none";
                expands[index].style.display = expands[index].style.display === "none" ? "block" : "none";
                collapses[index].style.display = collapses[index].style.display === "none" ? "block" : "none";
            } else {
                descriptions.forEach(function (description, i) {
                    if (i !== index) {
                        description.style.display = "none";
                        expands[i].style.display = "block";
                        collapses[i].style.display = "none";
                    }
                });
                if (descriptions[index].style.display === "none") {
                    descriptions[index].style.display = "block";
                    expands[index].style.display = "none";
                    collapses[index].style.display = "block";
                } else {
                    descriptions[index].style.display = "none";
                    expands[index].style.display = "block";
                    collapses[index].style.display = "none";
                }
            }
        });
    });
}