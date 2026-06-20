/* ==========================================================================
   AETHER TECH PREMIUM — FUTURISTIC HUD PORTFOLIO JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Footer Year
  const yearEl = document.getElementById('hud-current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Hide Page Boot Loader on Load
  window.addEventListener('load', () => {
    const loader = document.getElementById('cyber-boot-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 1500); // 1.5 seconds loading sequence
    }
  });

  // Fallback loader close in case load event already fired
  setTimeout(() => {
    const loader = document.getElementById('cyber-boot-loader');
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 3500);

  // 3. Floating HUD Bottom Navigation Scroll Highlight
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.deck-item');

  const highlightNav = () => {
    let scrollPos = window.scrollY + window.innerHeight / 2.5;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav(); // Initialize

  // Smooth Scroll for Navigation Anchors
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSec = document.querySelector(targetId);
      if (targetSec) {
        targetSec.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });

  // 4. Live Telemetry Latency Simulator
  const latencyVal = document.getElementById('latency-val');
  if (latencyVal) {
    setInterval(() => {
      const ping = Math.floor(Math.random() * 21) + 8; // Random ping between 8ms and 28ms
      latencyVal.textContent = `${ping}ms`;
    }, 4000);
  }

  // 5. Technologies Parsing for Projects Pods
  const projectTagsContainers = document.querySelectorAll('.pod-tags');
  projectTagsContainers.forEach(container => {
    const rawTech = container.getAttribute('data-technologies');
    if (rawTech) {
      // Split comma separated list
      const techList = rawTech.split(',').map(tech => tech.trim()).filter(tech => tech.length > 0);
      container.innerHTML = ''; // Clear fallback
      techList.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'pod-tech-badge';
        badge.textContent = tech;
        container.appendChild(badge);
      });
    } else {
      container.innerHTML = '<span class="pod-tech-badge">System Core</span>';
    }
  });

  // 6. Staggered Fallback Data Logger (If arrays are empty in database)
  const experienceContainer = document.getElementById('experience-rack-list');
  if (experienceContainer) {
    const cards = experienceContainer.querySelectorAll('.server-rack-card');
    if (cards.length === 0) {
      experienceContainer.innerHTML = `
        <div class="server-rack-card">
          <div class="rack-status-light active"></div>
          <div class="rack-content">
            <div class="rack-header">
              <h4 class="rack-title">Senior Software Architect</h4>
              <span class="rack-tag cyan">Consultancy Core</span>
            </div>
            <div class="rack-meta">STREAM_PERIOD: 2023 - PRESENT</div>
            <p class="rack-desc">Designing, implementing, and deploying highly optimized, secure web platforms and distributed system architectures. Coordinating remote engineering processes.</p>
          </div>
        </div>
      `;
    }
  }

  const educationContainer = document.getElementById('education-rack-list');
  if (educationContainer) {
    const cards = educationContainer.querySelectorAll('.server-rack-card');
    if (cards.length === 0) {
      educationContainer.innerHTML = `
        <div class="server-rack-card">
          <div class="rack-status-light active-pink"></div>
          <div class="rack-content">
            <div class="rack-header">
              <h4 class="rack-title">Bachelor of Computer Science</h4>
              <span class="rack-tag pink">Tech Institute</span>
            </div>
            <div class="rack-meta">GRAD_YEAR: 2021</div>
            <p class="rack-desc">Specialized in algorithms, web architectures, and premium human-computer interface design paradigms.</p>
          </div>
        </div>
      `;
    }
  }

  const credentialsContainer = document.getElementById('credentials-wrapper');
  if (credentialsContainer) {
    const nodes = credentialsContainer.querySelectorAll('.credential-hud-node');
    if (nodes.length === 0) {
      credentialsContainer.innerHTML = `
        <div class="credential-hud-node">
          <div class="credential-node-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <div class="credential-node-content">
            <h4 class="credential-name">AWS Certified Cloud Practitioner</h4>
            <span class="credential-issuer">// AUTHORIZED: Amazon Web Services // 2023</span>
          </div>
          <div class="credential-actions">
            <span class="cred-verify-trigger" style="opacity: 0.5; cursor: not-allowed;">
              <span>SYSTEM_GEN</span>
            </span>
          </div>
        </div>
      `;
    }
  }

  // 7. Secure Transmission Terminal Form Handler
  const transmissionForm = document.getElementById('cyber-transmission-form');
  const feedConsole = document.getElementById('feed-console-logs');

  if (transmissionForm && feedConsole) {
    const appendFeedLine = (text, type = 'normal') => {
      const line = document.createElement('p');
      line.className = 'feed-line';
      if (type === 'error') line.style.color = '#ef4444';
      if (type === 'success') line.style.color = '#00ff66';
      if (type === 'warning') line.style.color = '#eab308';
      
      const timestamp = new Date().toLocaleTimeString();
      line.textContent = `[${timestamp}] ${text}`;
      feedConsole.appendChild(line);
      feedConsole.scrollTop = feedConsole.scrollHeight;
    };

    transmissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('sig-name').value;
      const email = document.getElementById('sig-email').value;
      const message = document.getElementById('sig-message').value;

      appendFeedLine(`[PAYLOAD_INIT] Compiling connection vector for ${name}...`, 'warning');
      
      setTimeout(() => {
        appendFeedLine(`[ENCRYPTING] Executing AES handshake with ${email}...`);
      }, 800);

      setTimeout(() => {
        appendFeedLine(`[DISPATCHING] Dispatched package of size ${message.length} bytes.`);
      }, 1600);

      setTimeout(() => {
        appendFeedLine(`[SUCCESS] Signal verified & stored! Connection Node: ${Math.random().toString(36).substring(7).toUpperCase()}`, 'success');
        
        // Reset Form Fields
        transmissionForm.reset();
        
        // Alert developer of success in interface
        alert('Signal transmitted successfully! Decryption handshake complete.');
      }, 2500);
    });
  }

});
