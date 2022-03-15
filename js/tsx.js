//loading
const loader = document.querySelector('#load')

window.addEventListener('load', function () {
    loader.style.display = 'none';
});

// team menu
const team = document.querySelector('#team');
const teamList = document.querySelector('.team');

team.addEventListener('click', function () {
    if (teamList.style.transform == 'translateY(0%)') {
        teamList.style.transform = 'translateY(-100%)';
        teamList.style.zIndex = '-1';
    }
    else {
        teamList.style.transform = 'translateY(0%)'
        teamList.style.zIndex = '5';
    }
});

// team list item hover 
const listitems = document.querySelectorAll('.team-list');

for (listitem of listitems) {
    listitem.addEventListener('mouseenter', function () {
        this.style.background = "var(--foreground-color)";
    });
    listitem.addEventListener('mouseleave', function () {
        this.style.background = "var(--background-color)";
    });
}
const imglists = document.querySelectorAll('.team-list-img');
for (imglist of imglists) {
    imglist.addEventListener('mouseenter', function () {
        let imglink = this.getAttribute('src');
        let newLink = imglink.replace('White', 'Black');
        this.setAttribute('src', newLink);
    });
    imglist.addEventListener('mouseleave', function () {
        let imglink = this.getAttribute('src');
        let newLink = imglink.replace('Black', 'White');
        this.setAttribute('src', newLink);
    });
}