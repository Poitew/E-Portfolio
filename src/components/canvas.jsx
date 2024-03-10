import React, { useEffect } from "react"

function Particles(){

    useEffect(() => {
        const canvas = document.querySelector('#particles');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.clientHeight;
        
        let particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.speedX = (Math.random() - 0.5); 
                this.speedY = (Math.random() - 0.5); 
                this.size = Math.random() * 5 + 1;
                this.maxSize = 3;
                this.lifeSpan = 180;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if(this.lifeSpan > 0){
                    this.lifeSpan--;
                    this.size = (this.lifeSpan / 180) * this.maxSize;
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(246, 233, 59, 1)';
                ctx.strokeStyle = 'rgba(246, 233, 59, 0.8)';
                ctx.lineWidth = 2;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();

                ctx.fill();
                ctx.stroke();
            }
        }

        function createParticles() {
            if(particles.length < 50){
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i < particles.length; i++){
                particles[i].update();
                particles[i].draw();

                if(particles[i].size <= 0.2){
                    particles.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animateParticles);
        }

        setInterval(createParticles, 100);
        animateParticles();
    }, [])

    return(
        <canvas id="particles" />
    );
}

export default Particles;