// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Navigation hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Product card hover animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const image = this.querySelector('.gallery-image');
            if (image) {
                image.style.transform = 'scale(1.05)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const image = this.querySelector('.gallery-image');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    // TV gallery hover effects
    const tvItems = document.querySelectorAll('.tv-item');
    tvItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const content = this.querySelector('.tv-content');
            if (content) {
                content.style.transform = 'translateY(-10px)';
                content.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const content = this.querySelector('.tv-content');
            if (content) {
                content.style.transform = 'translateY(0)';
            }
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, animationObserverOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.product-card, .gallery-item, .tv-item, .f1-container');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Hero iPhone animation
    const iphone = document.querySelector('.iphone-placeholder');
    if (iphone) {
        iphone.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(10deg) rotateX(5deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        iphone.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateY(0) rotateX(0)';
        });
    }

    // F1 poster hover effect
    const f1Poster = document.querySelector('.f1-poster');
    if (f1Poster) {
        f1Poster.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        f1Poster.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0)';
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });

    // Navigation bar background opacity on scroll
    const nav = document.querySelector('.global-nav');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 1);
        
        if (nav) {
            nav.style.backgroundColor = `rgba(255, 255, 255, ${0.8 + opacity * 0.2})`;
        }
    });

    // Add click handlers for demo purposes
    const demoButtons = document.querySelectorAll('.btn');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonText = this.textContent.trim();
            
            // Show a subtle notification
            showNotification(`${buttonText} clicked - This is a demo website`);
        });
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #1D1D1F;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // 부드러운 스크롤 함수
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // FAQ 아코디언 기능
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // 현재 열린 다른 FAQ 닫기
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 현재 FAQ 토글
            item.classList.toggle('active');
        });
    });

    // 스크롤 시 헤더 스타일 변경
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // 카운터 애니메이션
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number, .metric-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isNumeric = !isNaN(target.replace(/[^0-9]/g, ''));
            
            if (isNumeric) {
                const finalNumber = parseInt(target.replace(/[^0-9]/g, ''));
                const suffix = target.replace(/[0-9]/g, '');
                let current = 0;
                const increment = finalNumber / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        counter.textContent = finalNumber + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, 50);
            }
        });
    }

    // Intersection Observer로 요소가 보일 때 애니메이션 실행
    const animationObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // 카운터 애니메이션이 있는 섹션인 경우 실행
                if (entry.target.classList.contains('hero') || 
                    entry.target.classList.contains('results-section')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들 관찰
    const animateElements = document.querySelectorAll(`
        .hero, .problem-section, .solution-section, 
        .features-section, .results-section, .curriculum-section,
        .target-section, .instructor-section, .demo-section,
        .pricing-section, .faq-section, .cta-section
    `);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
    });

    // 데모 비디오 클릭 이벤트
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // 실제 비디오 URL로 교체하거나 모달 열기
            alert('데모 영상이 준비되면 여기에서 재생됩니다! 🎥');
        });
    }

    // 수강신청 버튼 클릭 이벤트
    const enrollButtons = document.querySelectorAll('.btn-primary');
    enrollButtons.forEach(button => {
        if (button.textContent.includes('수강하기') || button.textContent.includes('시작하기')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 실제 결제 시스템 연동 전까지 임시 알림
                const confirmed = confirm(`
🎉 세일즈 톡 강의 수강신청

💰 특가: 99,000원 (정가 199,000원에서 50% 할인)
⏰ 7일 무조건 환불 보장
🎁 추가 템플릿 무료 제공

지금 수강신청 하시겠습니까?
                `);
                
                if (confirmed) {
                    // 실제로는 결제 페이지로 이동
                    alert('결제 시스템 연동 중입니다. 곧 오픈됩니다! 😊\n\n관심 있으시면 이메일을 남겨주세요: support@salestalk.com');
                }
            });
        }
    });

    // 모바일 메뉴 토글 (필요시)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #374151;
                    cursor: pointer;
                    display: block;
                `;
                
                nav.appendChild(mobileToggle);
                
                mobileToggle.addEventListener('click', function() {
                    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.background = 'white';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.padding = '1rem';
                    navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                });
            }
        }
    };

    // 윈도우 리사이즈 시 모바일 메뉴 처리
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // 스크롤 진행률 표시 (선택사항)
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // 이메일 구독 폼 (있다면)
    const emailForms = document.querySelectorAll('form[data-type="email"]');
    emailForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (email) {
                // 실제 이메일 수집 API 호출
                alert(`이메일 ${email}이 등록되었습니다! 🎉\n강의 오픈 소식을 가장 먼저 알려드릴게요.`);
                form.reset();
            }
        });
    });

    // 페이지 로드 완료 후 초기 애니메이션
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    }, 100);

    // 키보드 네비게이션 지원
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모달 닫기 등
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
            }
        }
    });

    // 성능 최적화: 스크롤 이벤트 쓰로틀링
    let ticking = false;
    function updateScrollElements() {
        // 스크롤 관련 업데이트
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollElements);
            ticking = true;
        }
    });

    console.log('🚀 세일즈 톡 강의 사이트가 로드되었습니다!');
    console.log('💡 문의사항이 있으시면 support@salestalk.com으로 연락주세요.');
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    const scrolled = window.pageYOffset;
    const nav = document.querySelector('.global-nav');
    const heroImage = document.querySelector('.hero-image');
    
    if (nav) {
        const opacity = Math.min(scrolled / 100, 1);
        nav.style.backgroundColor = `rgba(255, 255, 255, ${0.8 + opacity * 0.2})`;
    }
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// 바이브 코딩 사이트 JavaScript

// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initScrollAnimations();
    initNewsletterForm();
    initCodeDemo();
    initToolCardAnimations();
});

// 부드러운 스크롤 기능
function initSmoothScroll() {
    // 네비게이션 링크들
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 섹션별 스크롤 함수 (버튼에서 호출)
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .tool-card, .example-card, .community-card, .step-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 뉴스레터 폼 처리
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // 로딩 상태
                submitButton.textContent = '구독 중...';
                submitButton.disabled = true;
                
                // 시뮬레이션: 2초 후 성공 메시지
                setTimeout(() => {
                    showNotification('🎉 뉴스레터 구독이 완료되었습니다!', 'success');
                    emailInput.value = '';
                    submitButton.textContent = '구독하기';
                    submitButton.disabled = false;
                }, 2000);
            } else {
                showNotification('❌ 유효한 이메일 주소를 입력해주세요.', 'error');
            }
        });
    }
}

// 이메일 유효성 검사
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 알림 메시지 표시
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // 애니메이션으로 표시
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 5초 후 제거
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// 코드 에디터 데모 애니메이션
function initCodeDemo() {
    const codeLines = [
        '# 바이브 코딩으로 웹 크롤러 만들기',
        'def create_web_scraper():',
        '    "네이버 뉴스를 크롤링하는 함수 만들어줘"',
        '    # AI가 자동으로 완성...',
        '',
        'import requests',
        'from bs4 import BeautifulSoup',
        '',
        'def scrape_news():',
        '    url = "https://news.naver.com"',
        '    response = requests.get(url)',
        '    soup = BeautifulSoup(response.content)',
        '    articles = soup.find_all("article")',
        '    return [article.text for article in articles]',
        '',
        '# 완성! 🎉'
    ];
    
    const editorContent = document.querySelector('.editor-content');
    if (!editorContent) return;
    
    let currentLine = 0;
    let isTyping = false;
    
    function typeCodeLine() {
        if (currentLine >= codeLines.length || isTyping) return;
        
        isTyping = true;
        const line = codeLines[currentLine];
        const lineElement = document.createElement('div');
        lineElement.className = 'code-line';
        
        // 기존 커서 제거
        const cursor = document.querySelector('.typing-cursor');
        if (cursor) cursor.remove();
        
        // 새 라인 추가
        editorContent.appendChild(lineElement);
        
        // 타이핑 애니메이션
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < line.length) {
                lineElement.innerHTML = highlightCode(line.substring(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                currentLine++;
                isTyping = false;
                
                // 새 커서 추가
                const newCursor = document.createElement('div');
                newCursor.className = 'typing-cursor';
                newCursor.textContent = '|';
                editorContent.appendChild(newCursor);
                
                // 다음 라인을 위한 딜레이
                setTimeout(() => {
                    if (currentLine < codeLines.length) {
                        typeCodeLine();
                    }
                }, 800);
            }
        }, 100);
    }
    
    // 에디터가 뷰포트에 들어올 때 시작
    const editorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && currentLine === 0) {
                setTimeout(typeCodeLine, 1000);
                editorObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    editorObserver.observe(editorContent);
}

// 코드 하이라이팅
function highlightCode(code) {
    return code
        .replace(/(#.*$)/gm, '<span class="comment">$1</span>')
        .replace(/\b(def|import|from|return)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="function">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
}

// 도구 카드 호버 애니메이션
function initToolCardAnimations() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

// 통계 카운터 애니메이션
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (numericTarget) {
            let current = 0;
            const increment = numericTarget / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericTarget) {
                    current = numericTarget;
                    clearInterval(timer);
                }
                counter.textContent = target.replace(/[0-9]+/, Math.floor(current));
            }, 50);
        }
    });
}

// 통계 섹션이 보일 때 카운터 시작
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.cta-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// 데모 비디오 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            showNotification('🎬 데모 비디오가 곧 공개될 예정입니다!', 'info');
        });
    }
});

// 툴 링크 클릭 트래킹
document.addEventListener('DOMContentLoaded', function() {
    const toolLinks = document.querySelectorAll('.tool-link, .start-button');
    toolLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const toolName = this.textContent.trim();
            console.log(`바이브 코딩 도구 클릭: ${toolName}`);
            
            // Google Analytics 등 트래킹 코드가 있다면 여기에 추가
            // gtag('event', 'tool_click', { tool_name: toolName });
        });
    });
});

// 모바일 메뉴 처리 (반응형)
function initMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #374151;
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    const nav = document.querySelector('.nav');
    const navMenu = document.querySelector('.nav-menu');
    
    if (nav && navMenu) {
        nav.insertBefore(mobileMenuButton, navMenu);
        
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-open');
        });
        
        // CSS 미디어 쿼리와 동기화
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleMediaQuery(e) {
            if (e.matches) {
                mobileMenuButton.style.display = 'block';
                navMenu.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    display: none;
                `;
            } else {
                mobileMenuButton.style.display = 'none';
                navMenu.style.cssText = '';
                navMenu.classList.remove('mobile-open');
            }
        }
        
        mediaQuery.addListener(handleMediaQuery);
        handleMediaQuery(mediaQuery);
        
        // 모바일 메뉴 토글 스타일
        const style = document.createElement('style');
        style.textContent = `
            .nav-menu.mobile-open {
                display: flex !important;
            }
            .nav-menu.mobile-open a {
                padding: 1rem;
                border-bottom: 1px solid #e2e8f0;
            }
        `;
        document.head.appendChild(style);
    }
}

// 모바일 메뉴 초기화
document.addEventListener('DOMContentLoaded', initMobileMenu);

// 페이지 로드 시 헤더 배경 투명도 조절
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.scrollY;
        const opacity = Math.min(scrolled / 100, 1);
        header.style.background = `rgba(255, 255, 255, ${0.95 + (opacity * 0.05)})`;
    }
});

// 부드러운 페이드인 효과
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 성능 최적화: 디바운스된 스크롤 리스너
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(function() {
        // 스크롤 관련 함수들을 여기에 추가
        updateScrollProgress();
    }, 16); // 60fps
});

// 스크롤 진행도 표시 (선택사항)
function updateScrollProgress() {
    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(45deg, #2563eb, #f59e0b);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = `${scrollProgress}%`;
} 