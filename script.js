let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sectionBtns = document.querySelectorAll('.btn-nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

sectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sectionBtns.forEach((btn) => btn.classList.remove('nav-active'));
        btn.classList.add('nav-active');
    });
});



// Select the menu icon element
let menuIcon = document.getElementById('menu-icon');

// Select the first li element in the navbar
let firstNavItem = document.querySelector('.navbar li:first-child');

// Check if the first li element is visible
function isElementVisible(element) {
    return (element.offsetWidth > 0 || element.offsetHeight > 0);
}

// Toggle the menu icon visibility based on the visibility of the first li element
function toggleMenuIcon() {
    if (!isElementVisible(firstNavItem)) {
        menuIcon.style.display = 'block'; // Show the menu icon
    } else {
        menuIcon.style.display = 'none'; // Hide the menu icon
    }
}

// Call toggleMenuIcon initially and whenever the window is resized
toggleMenuIcon();
window.addEventListener('resize', toggleMenuIcon);


const allCard = Array.from(document.querySelectorAll('.card'));
		const container = document.querySelector('.card-wrapper');
		const indicator = document.querySelector('.indicator');

		const arrHeight = allCard.map(item=> {
			return item.offsetHeight
		})
		const maxHeight = Math.max(...arrHeight);

		allCard.forEach((item, idx)=> {
			item.style.height = maxHeight + 'px';
			item.id = 'card-' + idx;

			const a = document.createElement('a');
			a.href = '#' + item.id
			indicator.appendChild(a);
		})

		container.style.maxHeight = maxHeight + 'px';

		const allIndicator = document.querySelectorAll('.indicator a');

		allIndicator[0].classList.add('active');

		allIndicator.forEach(item=> {
			item.addEventListener('click', function () {
				allIndicator.forEach(i=> {
					i.classList.remove('active');
				})
				item.classList.add('active');
			})
		})

		container.addEventListener('scroll', function () {
			let linkActive;
			allCard.forEach(item=> {
				if(this.scrollTop >= item.offsetTop - (item.offsetHeight / 2) - 28 && this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
					linkActive = item.id
				}
			})
			allIndicator.forEach(item=> {
				if(item.getAttribute('href') === ("#" + linkActive)) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			})
		})