document.onmousemove = animateCircles;

var colors = ['#7CFC00', '#FF00FF', '#40E0D0', '#FFFF00'];

function animateCircles () {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);
    
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    
    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;
    
    circle.style.transition = "all 0.5s linear 0s";
    
    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';
    
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderWidth = '5px';
    circle.style.opacity = 0;

}