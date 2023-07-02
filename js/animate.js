const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animate-hidden');
hiddenElements.forEach((el) => observer.observe(el));

const msg = "Hi! If you're from DBTK or know someone from there, I would like to say I'm sorry I wasn't able to inform the company about this. This website is my project for one of our majors. We're suppose to imitate an e-commerce website and my eyes caught yours so I hope this won't create any issue. To attribute your products, in some manner, the items in 'Shop' page are directed to your website. Sorry for inconvenience!"

console.log(msg);