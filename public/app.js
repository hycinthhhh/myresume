const { useState } = React;

const ResumeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  const sections = {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    awards: 'Awards'
  };

  return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" },
    // Navigation
    React.createElement('nav', { className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm" },
      React.createElement('div', { className: "max-w-6xl mx-auto px-4 py-4" },
        React.createElement('div', { className: "flex justify-between items-center" },
          React.createElement('h1', { className: "text-2xl font-bold text-sage-800" }, 'Mabuhay!'),
          
          // Desktop Navigation
          React.createElement('div', { className: "hidden md:flex gap-2" },
            Object.entries(sections).map(([key, label]) =>
              React.createElement('button', {
                key: key,
                onClick: () => {
                  setActiveSection(key);
                  setIsMenuOpen(false);
                },
                className: `px-4 py-2 rounded-full transition-all ${
                  activeSection === key ? 'bg-sage-600 text-white' : 'text-sage-700 hover:bg-sage-100'
                }`
              }, label)
            )
          ),
          
          // Mobile Menu Button
          React.createElement('button', {
            className: "md:hidden text-sage-700",
            onClick: () => setIsMenuOpen(!isMenuOpen)
          }, isMenuOpen ? '✕' : '☰')
        ),
        
        // Mobile Navigation
        isMenuOpen && React.createElement('div', { className: "md:hidden mt-4 flex flex-col gap-2" },
          Object.entries(sections).map(([key, label]) =>
            React.createElement('button', {
              key: key,
              onClick: () => {
                setActiveSection(key);
                setIsMenuOpen(false);
              },
              className: `px-4 py-2 rounded-full transition-all ${
                activeSection === key ? 'bg-sage-600 text-white' : 'text-sage-700 hover:bg-sage-100'
              }`
            }, label)
          )
        )
      )
    ),
    
    // Main Content
    React.createElement('main', { className: "max-w-6xl mx-auto px-4 py-12" },
      
      // About Section
      activeSection === 'about' && React.createElement('div', { className: "space-y-8" },
        React.createElement('div', { className: "flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-lg" },
          // Avatar Container
          React.createElement('div', { className: "w-48 h-48 rounded-full border-8 border-sage-200 shadow-xl bg-gradient-to-br from-teal-100 via-green-50 to-emerald-100 flex items-center justify-center overflow-visible relative" },
            React.createElement('div', { className: "avatar-3d" },
              React.createElement('div', { className: "hair-volume" }),
              React.createElement('div', { className: "head" },
                React.createElement('div', { className: "hair-top" }),
                React.createElement('div', { className: "hair-side left" }),
                React.createElement('div', { className: "hair-side right" }),
                React.createElement('div', { className: "face-3d" },
                  React.createElement('div', { className: "eyebrow left" }),
                  React.createElement('div', { className: "eyebrow right" }),
                  React.createElement('div', { className: "eye-3d left" },
                    React.createElement('div', { className: "eye-white" }),
                    React.createElement('div', { className: "iris" }),
                    React.createElement('div', { className: "pupil-3d" }),
                    React.createElement('div', { className: "eye-shine" }),
                    React.createElement('div', { className: "eyelid" })
                  ),
                  React.createElement('div', { className: "eye-3d right" },
                    React.createElement('div', { className: "eye-white" }),
                    React.createElement('div', { className: "iris" }),
                    React.createElement('div', { className: "pupil-3d" }),
                    React.createElement('div', { className: "eye-shine" }),
                    React.createElement('div', { className: "eyelid" })
                  ),
                  React.createElement('div', { className: "cheek left" }),
                  React.createElement('div', { className: "cheek right" }),
                  React.createElement('div', { className: "nose-3d" }),
                  React.createElement('div', { className: "mouth-3d" },
                    React.createElement('div', { className: "lips" })
                  )
                )
              ),
              React.createElement('div', { className: "shoulders" })
            )
          ),
          
          // Hero Info
          React.createElement('div', { className: "flex-1 text-center md:text-left" },
            React.createElement('h2', { className: "text-4xl font-bold text-sage-800 mb-2" }, 'Hycinth Mae G. Bagsac'),
            React.createElement('p', { className: "text-xl text-sage-600 mb-4" }, 'BS Information Technology - Major in Network Technology'),
            React.createElement('div', { className: "flex flex-wrap gap-4 justify-center md:justify-start text-sage-700" },
              React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement('span', null, '📍'),
                React.createElement('span', null, 'Sta. Maria, Sto. Tomas, Batangas')
              ),
              React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement('span', null, '📞'),
                React.createElement('span', null, '+63 9498339073')
              ),
              React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement('span', null, '✉️'),
                React.createElement('span', null, 'hycinthbagsac2003@gmail.com')
              )
            ),
            React.createElement('a', {
              href: "https://www.instagram.com/hyciieee/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 mt-4 px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all shadow-md hover:shadow-lg"
            }, 
              React.createElement('span', null ),
              'Follow on Instagram'
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-4" }, 'Introduction'),
          React.createElement('p', { className: "text-sage-700 leading-relaxed" },
            "I'm an IT student who loves exploring new things and meeting good people. When I'm not studying or working on projects, you'll probably find me playing PUBG, enjoying a good matcha, or traveling to new places. I believe in staying curious and open-minded, and I love connecting with others over shared passions. I enjoy learning how different systems work, but I also cherish simple moments like peaceful travels and a nice cup of matcha. I'm excited to grow, contribute, and see what life has in store."
          )
        )
      ),
      
      // Experience Section
      activeSection === 'experience' && React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-3xl font-bold text-sage-800 mb-6" }, 'Leadership & Experience'),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-6 shadow-lg" },
          React.createElement('div', { className: "flex justify-between items-start mb-3" },
            React.createElement('div', null,
              React.createElement('h3', { className: "text-xl font-bold text-sage-800" }, 'Junior Development Consultant'),
              React.createElement('p', { className: "text-sage-600" }, 'CICS Student Council')
            ),
            React.createElement('span', { className: "text-sage-500 text-sm" }, '2025 – 2026')
          ),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Provided strategic guidance on council initiatives and development projects'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Mentored incoming officers and ensured continuity of organizational programs'
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-6 shadow-lg" },
          React.createElement('div', { className: "flex justify-between items-start mb-3" },
            React.createElement('div', null,
              React.createElement('h3', { className: "text-xl font-bold text-sage-800" }, 'President'),
              React.createElement('p', { className: "text-sage-600" }, 'CICS Student Council')
            ),
            React.createElement('span', { className: "text-sage-500 text-sm" }, '2024 – 2025')
          ),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Led a team of 15+ council officers in planning and executing programs'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Managed multiple projects simultaneously while ensuring quality deliverables'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Collaborated with cross-functional committees and university administration'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Received Organization President Award and Service Award (5th Gawad Laurelian)'
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-6 shadow-lg" },
          React.createElement('div', { className: "flex justify-between items-start mb-3" },
            React.createElement('div', null,
              React.createElement('h3', { className: "text-xl font-bold text-sage-800" }, 'Executive Secretary'),
              React.createElement('p', { className: "text-sage-600" }, 'CICS Student Council')
            ),
            React.createElement('span', { className: "text-sage-500 text-sm" }, '2023 – 2024')
          ),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Managed organizational communications and maintained documentation systems'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Coordinated council activities, meetings, and event logistics'
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-6 shadow-lg" },
          React.createElement('div', { className: "flex justify-between items-start mb-3" },
            React.createElement('div', null,
              React.createElement('h3', { className: "text-xl font-bold text-sage-800" }, 'Assistant Director for eSports'),
              React.createElement('p', { className: "text-sage-600" }, 'Red Spartan Esports - Malvar Campus')
            ),
            React.createElement('span', { className: "text-sage-500 text-sm" }, '2023 – 2024')
          ),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Managed organizational communications and maintained documentation systems'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Coordinated council activities, meetings, and event logistics'
            )
          )
        )
      ),
      
      // Projects Section
      activeSection === 'projects' && React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-3xl font-bold text-sage-800 mb-6" }, 'Academic Projects'),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-2" }, 'SmartDrop: IoT-Enabled Smart Parcel Box'),
          React.createElement('p', { className: "text-sage-600 mb-4" }, 'November 2025'),
          React.createElement('p', { className: "text-sage-700 mb-4 leading-relaxed" }, 
            'Capstone project focused on secure and efficient parcel receiving and returning.'
          ),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Served as Project Manager, leading the team through all development phases'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Designed and developed an IoT-based smart parcel box system'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Integrated hardware (IoT sensors) with software components for real-time monitoring'
            ),
            React.createElement('li', { className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, 
              'Applied programming skills in system development and user interface design'
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-2" }, 'Learning EXpress Program 2024'),
          React.createElement('p', { className: "text-sage-600 mb-4" }, 'April 2024'),
          React.createElement('p', { className: "text-sage-700 leading-relaxed" }, 
            'Participated in a 12-day international community engagement program, collaborating with diverse, multicultural teams on development initiatives.'
          )
        )
      ),
      
      // Skills Section
      activeSection === 'skills' && React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-3xl font-bold text-sage-800 mb-6" }, 'Skills'),
        
        React.createElement('div', { className: "grid md:grid-cols-2 gap-6" },
          React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
            React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-4" }, 'Technical Skills'),
            React.createElement('div', { className: "space-y-3" },
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Programming & Web Development'),
                React.createElement('p', { className: "text-sage-600" }, 'HTML, CSS, JavaScript, Java, C++, C#, Flutter')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Database Management'),
                React.createElement('p', { className: "text-sage-600" }, 'MySQL, Microsoft Access')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Design & Multimedia'),
                React.createElement('p', { className: "text-sage-600" }, 'Canva, CapCut, Adobe Lightroom')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Development Tools'),
                React.createElement('p', { className: "text-sage-600" }, 'Visual Studio Code, Git, GitHub')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Cloud & Networking'),
                React.createElement('p', { className: "text-sage-600" }, 'AWS, Network configuration, RESTful APIs')
              )
            )
          ),
          
          React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
            React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-4" }, 'Personal Skills'),
            React.createElement('div', { className: "space-y-3" },
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Leadership & Management'),
                React.createElement('p', { className: "text-sage-600" }, 'Team leadership, mentoring, strategic planning, project management')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Communication'),
                React.createElement('p', { className: "text-sage-600" }, 'Effective verbal and written communication, interpersonal skills')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Work Ethic'),
                React.createElement('p', { className: "text-sage-600" }, 'Adaptability, attention to detail, time management')
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold text-sage-700 mb-2" }, 'Problem-Solving'),
                React.createElement('p', { className: "text-sage-600" }, 'Creative thinking, innovative solutions, critical analysis')
              )
            )
          )
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-4" }, 'Certification'),
          React.createElement('p', { className: "text-sage-700" },
            React.createElement('span', { className: "font-semibold" }, 'Information Technology Specialist in Networking'),
            React.createElement('br'),
            'MC Tech Training and Assessment Center Inc. | May 8, 2025'
          )
        )
      ),
      
      // Education Section
      activeSection === 'education' && React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-3xl font-bold text-sage-800 mb-6" }, 'Education'),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-2" }, 'Bachelor of Science in Information Technology'),
          React.createElement('p', { className: "text-sage-600 mb-2" }, 'Major in Network Technology'),
          React.createElement('p', { className: "text-sage-700 mb-1" }, 'Batangas State University – The NEU JPLPC Malvar Campus'),
          React.createElement('p', { className: "text-sage-500" }, '2022 - 2025')
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-2" }, 'Technical-Vocational-Livelihood Track'),
          React.createElement('p', { className: "text-sage-600 mb-2" }, 'Mobile App and Web Development'),
          React.createElement('p', { className: "text-sage-700 mb-1" }, 'STI College Tanauan'),
          React.createElement('p', { className: "text-sage-500" }, '2020 - 2022')
        ),
        
        React.createElement('div', { className: "bg-white rounded-3xl p-8 shadow-lg" },
          React.createElement('h3', { className: "text-2xl font-bold text-sage-800 mb-4" }, 'Seminars & Trainings'),
          React.createElement('div', { className: "space-y-3" },
            [
              'AI-gnite: Exploring the Role of AI for Economic Growth and Innovation',
              'Building a Connected Tomorrow: IoT Innovations and Beyond',
              'Introduction to Git and GitHub',
              'Data Analysis and Visualization using Excel',
              'Securing Web Applications',
              'Role of Cybersecurity in the Society',
              'The Future of HADR Landscape: Roles of ICT in Disaster Risk Management'
            ].map((seminar, idx) =>
              React.createElement('div', { key: idx, className: "text-sage-700 pl-4 border-l-2 border-sage-300" }, seminar)
            )
          )
        )
      ),
      
      // Awards Section
      activeSection === 'awards' && React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-3xl font-bold text-sage-800 mb-6" }, 'Honors & Awards'),
        
        React.createElement('div', { className: "grid md:grid-cols-2 gap-6" },
          [
            { award: 'Service Award', org: 'CICS Student Council', year: 'August 2025' },
            { award: 'Organization President Award', org: '5th Gawad Laurelian', year: 'July 2025' },
            { award: 'Loyalty Award', org: '5th Gawad Laurelian', year: 'July 2025' },
            { award: "President's Choice Award", org: '4th Gawad Laurelian', year: 'June 2024' },
            { award: 'Loyalty Award', org: '4th Gawad Laurelian', year: 'June 2024' },
            { award: 'Certificate of Service Excellence', org: 'CICS Student Council', year: 'August 2024' },
            { award: 'With Honors, Grade 12', org: 'STI College Tanauan', year: 'A.Y. 2021-2022' },
            { award: 'With Honors, Grade 11', org: 'STI College Tanauan', year: 'A.Y. 2020-2021' },
            { award: 'Innovative Thinker of the Year', org: 'STI College Tanauan', year: 'A.Y. 2021-2022' },
            { award: 'Most Active Student Award', org: 'STI College Tanauan', year: 'A.Y. 2020-2022' },
            { award: 'Best in Computer Web Programming 4 & 5', org: 'STI College Tanauan', year: 'A.Y. 2021-2022' },
            { award: 'ICT Team of the Year', org: 'STI College Tanauan', year: 'A.Y. 2021-2022' }
          ].map((item, idx) =>
            React.createElement('div', { key: idx, className: "bg-white rounded-3xl p-6 shadow-lg" },
              React.createElement('h3', { className: "text-lg font-bold text-sage-800 mb-1" }, item.award),
              React.createElement('p', { className: "text-sage-600" }, item.org),
              React.createElement('p', { className: "text-sage-500 text-sm mt-1" }, item.year)
            )
          )
        )
      )
    ),
    
    // Footer
    React.createElement('footer', { className: "bg-white/80 backdrop-blur-md mt-12 py-6" },
      React.createElement('div', { className: "max-w-6xl mx-auto px-4 text-center text-sage-600" },
        React.createElement('p', null, '© 2025 Hycinth Mae G. Bagsac. All rights reserved.')
      )
    )
  );
};

// Render the app
ReactDOM.render(React.createElement(ResumeWebsite), document.getElementById('root'));