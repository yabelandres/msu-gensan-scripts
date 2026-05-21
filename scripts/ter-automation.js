const oldRating = document.querySelectorAll(".btn.btn-outline-secondary.active");
oldRating.forEach(old => {
    old.classList.remove("active");
});

const n = prompt("Rate your professor from 5-10: ");
 
const ratingsGroup = document.getElementsByClassName("btn-group btn-group-toggle btn-group-sm btn-block");
for(const i=0; i<ratingsGroup.length; i++) {
    nthLabel = ratingsGroup[i].children[n-5];
    nthLabel.classList.add("active");
    professorRating = nthLabel.children[0];
    professorRating.checked = true;
}
