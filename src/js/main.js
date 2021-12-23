document.documentElement.className = "js-enabled";

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

function callback(entries, observer){
    entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        console.log(entry.isIntersecting);
        if (entry.isIntersecting){
            entry.target.classList.add("active");
        }else {
            entry.target.classList.remove("active");
        }
    });
}

let targets = document.querySelectorAll(".site-wrap img");
for (const target of targets) {
    observer.observe(target);
}
