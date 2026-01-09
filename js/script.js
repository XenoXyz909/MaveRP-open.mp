document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const body = document.body;
    
    setTimeout(function() {
        loadingProgress.style.animation = 'loading 1.5s ease-in-out forwards';
        
        setTimeout(function() {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
                body.style.overflow = 'auto';
                initAnimations();
            }, 600);
        }, 1500);
    }, 500);
    
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');
    
    function toggleMobileMenu() {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }
    
    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    function handleScroll() {
        const scrolled = window.scrollY > 100;
        navbar.classList.toggle('scrolled', scrolled);
        backToTop.classList.toggle('visible', scrolled);
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    backToTop.addEventListener('click', scrollToTop);
    
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const animatedElements = document.querySelectorAll('.feature-card, .team-member, .partner-card, .step, .discord-widget, .footer-content');
    const textReveals = document.querySelectorAll('.text-reveal');
    const linkItems = document.querySelectorAll('.link-group ul li');
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const current = parseInt(element.textContent.replace('+', '').replace('%', ''));
        if (isNaN(current)) return;
        
        const increment = target / 100;
        let count = 0;
        
        const timer = setInterval(function() {
            count += increment;
            if (count >= target) {
                element.textContent = element.textContent.includes('%') ? target + '%' : target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(count) + (element.textContent.includes('%') ? '%' : '+');
            }
        }, 20);
    }
    
    function checkVisibility() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
                element.classList.add('visible');
                
                if (element.classList.contains('feature-card') || element.classList.contains('team-member')) {
                    const numbers = element.querySelectorAll('.stat-number[data-count], .feature-number[data-count]');
                    numbers.forEach(number => {
                        if (!number.hasAttribute('data-animated')) {
                            number.setAttribute('data-animated', 'true');
                            animateCounter(number);
                        }
                    });
                }
            }
        });
        
        textReveals.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
        
        const footerContent = document.querySelector('.footer-content');
        const footerRect = footerContent.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (footerRect.top <= windowHeight * 0.8 && footerRect.bottom >= 0) {
            footerContent.classList.add('visible');
            
            linkItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
            
            const footerBottom = document.querySelector('.footer-bottom');
            setTimeout(() => {
                footerBottom.classList.add('visible');
            }, 500);
        }
        
        const aboutHeader = document.querySelector('.about-header');
        const aboutText = document.querySelector('.about-text');
        const aboutStats = document.querySelector('.about-stats');
        
        if (aboutHeader && aboutText && aboutStats) {
            const aboutRect = aboutHeader.getBoundingClientRect();
            
            if (aboutRect.top <= windowHeight * 0.8 && aboutRect.bottom >= 0) {
                aboutHeader.classList.add('visible');
                aboutText.classList.add('visible');
                aboutStats.classList.add('visible');
            }
        }
        
        const discordWidget = document.querySelector('.discord-widget');
        if (discordWidget) {
            const widgetRect = discordWidget.getBoundingClientRect();
            
            if (widgetRect.top <= windowHeight * 0.8 && widgetRect.bottom >= 0) {
                discordWidget.classList.add('visible');
            }
        }
    }
    
    function updateDiscordMembers() {
        const onlineCount = document.querySelector('.online-count');
        if (onlineCount) {
            const baseCount = 850;
            const randomChange = Math.floor(Math.random() * 50) - 25;
            const newCount = Math.max(800, baseCount + randomChange);
            onlineCount.textContent = newCount;
        }
    }
    
    function initAnimations() {
        handleScroll();
        checkVisibility();
        
        window.addEventListener('scroll', function() {
            handleScroll();
            checkVisibility();
        });
        
        setInterval(updateDiscordMembers, 30000);
        
        const trailerButton = document.querySelector('.action-button.secondary');
        if (trailerButton) {
            trailerButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.open('https://youtube.com/gta-southside', '_blank');
            });
        }
        
        const discordButton = document.querySelector('.discord-button');
        if (discordButton) {
            discordButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.open('https://discord.gg/gta-southside', '_blank');
            });
        }
        
        const partnerLinks = document.querySelectorAll('.partner-link');
        partnerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                window.open(href, '_blank');
            });
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    const hoverButtons = document.querySelectorAll('.action-button, .discord-button');
    hoverButtons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const hoverElement = this.querySelector('.button-hover') || this.querySelector('.button-wave');
            if (hoverElement) {
                hoverElement.style.left = x + 'px';
                hoverElement.style.top = y + 'px';
            }
        });
    });
    
    const navLinksWithData = document.querySelectorAll('.nav-link[data-text]');
    navLinksWithData.forEach(link => {
        link.setAttribute('data-text', link.textContent);
    });
});
