document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const writeupContainer = document.getElementById('writeup-container');
    const writeupContent = document.getElementById('writeup-content');
    const backBtn = document.getElementById('back-btn');
    const navLinks = document.querySelectorAll('nav a');
    const pathSpan = document.getElementById('current-path');
    
    // Typewriter effect for initial load
    const typeWriterEl = document.getElementById('typewriter');
    const text = typeWriterEl.textContent;
    typeWriterEl.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typeWriterEl.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                renderHome();
            }, 500);
        }
    }
    
    typeWriter();

    // Navigation setup
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const target = link.getAttribute('data-target');
            pathSpan.textContent = `~/writeups/${target === 'home' ? '' : target}`;
            
            if (target === 'home') {
                renderHome();
            } else {
                renderCategory(target);
            }
        });
    });

    function renderHome() {
        closeWriteup();
        
        let latestHtml = '';
        if (siteData.latestWriteup) {
            latestHtml = `
                <div class="writeup-card" style="margin-bottom: 2rem; border-color: var(--highlight); background-color: rgba(0, 255, 0, 0.05); cursor: pointer;" onclick="document.querySelector('[data-target=\\'${siteData.latestWriteup.linkTarget}\\']').click()">
                    <p style="color: #00aaff; margin-bottom: 0.5rem; font-weight: bold;">[ SYSTEM ALERT: NEW INTELLIGENCE UPLOADED ]</p>
                    <span class="writeup-title">${siteData.latestWriteup.name}</span>
                    <div class="writeup-badges" style="margin-top: 10px;">
                        <span class="badge category">${siteData.latestWriteup.category}</span>
                        <span class="badge" style="border-color: #00aaff; color: #00aaff;">Platform: ${siteData.latestWriteup.platform}</span>
                    </div>
                </div>
            `;
        }

        contentDiv.innerHTML = `
            <div class="home-section">
                ${latestHtml}
                <h2>[ ${siteData.profile.name} ]</h2>
                <p>> ${siteData.profile.bio}</p>
                <h3 style="margin-top: 2rem;">[ Core Competencies ]</h3>
                <ul class="skills-list">
                    ${siteData.profile.skills.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    function renderCategory(category) {
        closeWriteup();
        const writeups = siteData.writeups[category];
        if (!writeups || writeups.length === 0) {
            contentDiv.innerHTML = `
                <h2>[ /${category} ] Directory Listing</h2>
                <div class="writeup-card" style="border-style: dashed; border-color: var(--alert); background-color: rgba(255, 170, 0, 0.05);">
                    <p style="color: var(--alert); text-align: center; margin-top: 1rem; font-weight: bold; font-size: 1.2rem;">
                        [!] STATUS: COMING SOON
                    </p>
                    <p style="text-align: center; margin-bottom: 1rem; color: #aaaaaa; margin-top: 0.5rem;">
                        > Data compilation in progress. Awaiting clearance... 
                        <span class="cursor">_</span>
                    </p>
                </div>
            `;
            return;
        }
        
        const html = writeups.map(w => `
            <div class="writeup-card">
                <div class="writeup-header" onclick="${w.markdownFile ? `openMarkdown('${w.markdownFile}')` : `alert('No markdown file specified')`}">
                    <span class="writeup-title">${w.name}</span>
                    <div class="writeup-badges">
                        <span class="badge ${w.difficulty.toLowerCase()}">${w.difficulty}</span>
                        <span class="badge category">${w.category}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        contentDiv.innerHTML = `
            <h2>[ /${category} ] Directory Listing</h2>
            <div class="writeup-list">
                ${html}
            </div>
        `;
    }

    window.openMarkdown = function(mdFile) {
        contentDiv.style.display = 'none';
        writeupContainer.style.display = 'block';
        writeupContent.innerHTML = '<p>> Fetching data stream...</p>';
        
        fetch(mdFile)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.text();
            })
            .then(text => {
                writeupContent.innerHTML = marked.parse(text);
            })
            .catch(err => {
                writeupContent.innerHTML = `<p style="color: var(--danger)">> ERROR: Could not fetch ${mdFile}. Please make sure you are running a local web server during development!</p>`;
            });
    }

    window.closeWriteup = function() {
        writeupContainer.style.display = 'none';
        contentDiv.style.display = 'block';
        writeupContent.innerHTML = '';
    }

    backBtn.addEventListener('click', closeWriteup);
});
