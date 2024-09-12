// Open 'About' and 'Contact' links in new tab
document.querySelectorAll('.menu a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
});
