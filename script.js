// Education data for modal
const educationData = {
    'hust': {
        title: 'Hanoi University of Science and Technology',
        subtitle: 'School of Electronics and Electrical Engineering',
        image: 'images/hust-university.jpg',
        description: 'Vietnam\'s leading technical university ("https://www.hust.edu.vn"), renowned for engineering excellence and innovation. HUST has been at the forefront of technological advancement in Southeast Asia, producing top-tier engineers and researchers.',
        details: [
            'Founded in 1956, HUST is Vietnam\'s premier technical institution',
            'School of Electronics and Electrical Engineering - one of the most prestigious faculties',
            'Strong focus on practical engineering skills and theoretical foundations',
            'Alumni network includes industry leaders and technology innovators',
            'Research-oriented curriculum with emphasis on emerging technologies',
            'International partnerships with leading universities worldwide'
        ]
    },
    'ai-research': {
        title: 'AI Research Publications',
        subtitle: 'Scientific Research in Artificial Intelligence',
        image: 'images/ai-research.jpg',
        description: 'Contributing to the advancement of artificial intelligence through rigorous research and academic publications. Focused on practical applications and theoretical foundations of modern AI systems.',
        details: [
            '2 published scientific research papers in AI field',
            'Research focus on machine learning algorithms and applications',
            'Peer-reviewed publications in academic journals',
            'Collaboration with research institutions and industry partners',
            'Contributing to open-source AI projects and community',
            'Bridging the gap between theoretical research and practical implementation'
        ]
    }
};

// Education modal functions
function openEducationModal(educationId) {
    const modal = document.getElementById('educationModal');
    const education = educationData[educationId];
    
    if (!education) {
        console.error('Education not found:', educationId);
        return;
    }
    
    // Populate modal content
    document.getElementById('educationModalTitle').textContent = education.title;
    document.getElementById('educationModalSubtitle').textContent = education.subtitle;
    document.getElementById('educationModalDescription').textContent = education.description;
    document.getElementById('educationModalImage').src = education.image;
    document.getElementById('educationModalImage').alt = education.title;
    
    // Education details
    const detailsContainer = document.getElementById('educationModalDetails');
    detailsContainer.innerHTML = `
        <h3>Key Highlights</h3>
        <ul>
            ${education.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('Education modal opened for:', educationId);
}

function closeEducationModal() {
    const modal = document.getElementById('educationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    console.log('Education modal closed');
}

// Project data for modal
const projectData = {
    'ssh-cli': {
        title: 'SSH CLI System',
        subtitle: 'Interactive System Management Interface',
        image: 'images/ssh-cli-system.png',
        description: 'Advanced SSH server enabling system operators to interact with infrastructure through command-line interface. Features intelligent tab-completion suggestions and seamless communication with manager servers for metric viewing and configuration management.',
        techStack: ['Go', 'SSH', 'CLI', 'System Admin', 'Tab Completion'],
        features: [
            'Real-time system metrics monitoring',
            'Intelligent tab completion for commands',
            'Secure SSH-based authentication',
            'Manager server integration',
            'Configuration management interface',
            'Multi-user session support'
        ]
    },
    'stock-predictor': {
        title: 'VN Stock Predictor',
        subtitle: 'Machine Learning Stock Analysis Platform',
        image: 'images/stock-predictor.png',
        description: 'Comprehensive web application for Vietnamese stock market prediction. Scrapes real-time data (prices, volatility) from 1-200 days and employs classical algorithms including Moving Average, ARIMA-GARCH, and LSTM Neural Networks for accurate forecasting.',
        techStack: ['Go', 'Machine Learning', 'LSTM', 'ARIMA-GARCH', 'Web Scraping', 'MySQL'],
        features: [
            'Real-time Vietnamese stock data scraping',
            'Multiple prediction algorithms (Moving Average, ARIMA-GARCH, LSTM)',
            'Historical data analysis (1-200 days)',
            'Interactive web dashboard',
            'MySQL database for data persistence',
            'Prediction accuracy tracking'
        ]
    },
    'golang-navigator': {
        title: 'Golang Navigator Extension',
        subtitle: 'VSCode Development Tool',
        image: 'images/vscode-extension.png',
        description: 'Intelligent VSCode extension designed for Go developers. Analyzes application logs and instantly navigates to the exact source code lines containing specific log statements, dramatically improving debugging efficiency and code exploration.',
        techStack: ['TypeScript', 'VSCode API', 'Go', 'Log Analysis', 'Developer Tools'],
        features: [
            'Log statement source code navigation',
            'Intelligent log pattern matching',
            'Quick jump to code functionality',
            'Go language optimized',
            'VSCode integration',
            'Developer productivity enhancement'
        ]
    },
    'pos-system': {
        title: 'POS Invoice System',
        subtitle: 'Enterprise Invoice Processing Module',
        image: 'images/pos-system.png',
        description: 'Critical module within a larger enterprise system responsible for invoice processing workflow. Parses invoice data into standardized templates, encodes information securely, and transmits to POS machines for physical receipt printing.',
        techStack: ['Go', 'Template Engine', 'Data Encoding', 'POS Integration', 'Enterprise'],
        features: [
            'Invoice data parsing and validation',
            'Template-based formatting system',
            'Secure data encoding protocols',
            'POS machine integration',
            'Enterprise-grade reliability',
            'Real-time printing workflow'
        ]
    }
};

// Modal functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    
    // Tech stack
    const techContainer = document.getElementById('modalTechStack');
    techContainer.innerHTML = project.techStack.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = `
        <h3>Key Features</h3>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('Modal opened for:', projectId);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    console.log('Modal closed');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const educationModal = document.getElementById('educationModal');
    
    if (event.target === projectModal) {
        closeProjectModal();
    }
    if (event.target === educationModal) {
        closeEducationModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
        closeEducationModal();
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // Add ripple effect to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Add interactive effects to tech items
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Mouse follow effect
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
    });

    console.log('Portfolio initialized successfully! 🚀');
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Scroll handler with throttling
const throttledScrollHandler = throttle(() => {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    // Header background change
    if (scrolled > 100) {
        header.style.background = 'rgba(15, 20, 25, 0.95)';
    } else {
        header.style.background = 'rgba(15, 20, 25, 0.9)';
    }
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Ripple effect function
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const half = size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - half) + 'px';
    ripple.style.top = (event.clientY - rect.top - half) + 'px';
    ripple.classList.add('ripple');
    
    // Ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

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

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('All assets loaded! 🎉');
});