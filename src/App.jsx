import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Layers,
  Wifi,
  Terminal,
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  FolderGit2,
  Calendar,
  Calculator,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Activity,
  Sparkles,
  Binary,
  Server,
  Lock,
  GraduationCap,
  Microchip,
  Search,
  Check
} from 'lucide-react';

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCurriculumLevel, setActiveCurriculumLevel] = useState('300L');
  const [selectedTrackModal, setSelectedTrackModal] = useState(null);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [handbookModalOpen, setHandbookModalOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Contact Form State
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Interactive CGPA Calculator State
  const [courses, setCourses] = useState([
    { id: 1, name: 'CPE 301 - Microprocessor Architecture', units: 3, grade: 'A' },
    { id: 2, name: 'CPE 303 - Digital Logic Design Lab', units: 2, grade: 'A' },
    { id: 3, name: 'CPE 305 - Data Communications & Networks', units: 3, grade: 'B' },
    { id: 4, name: 'EEE 307 - Signals and Systems', units: 3, grade: 'B' }
  ]);
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseUnits, setNewCourseUnits] = useState(3);
  const [newCourseGrade, setNewCourseGrade] = useState('A');

  // Grade point mapping
  const gradePoints = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };
  const totalUnits = courses.reduce((acc, c) => acc + Number(c.units), 0);
  const totalPoints = courses.reduce((acc, c) => acc + (gradePoints[c.grade] || 0) * Number(c.units), 0);
  const currentGPA = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : '0.00';

  const getDegreeClass = (gpa) => {
    const score = parseFloat(gpa);
    if (score >= 4.5) return { label: 'First Class Honours', color: '#10b981' };
    if (score >= 3.5) return { label: 'Second Class Upper (2:1)', color: '#38bdf8' };
    if (score >= 2.4) return { label: 'Second Class Lower (2:2)', color: '#f59e0b' };
    if (score >= 1.5) return { label: 'Third Class Honours', color: '#fb923c' };
    return { label: 'Pass / Probation', color: '#ef4444' };
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    setCourses([
      ...courses,
      {
        id: Date.now(),
        name: newCourseName.trim(),
        units: Number(newCourseUnits),
        grade: newCourseGrade
      }
    ]);
    setNewCourseName('');
  };

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  // Specialization Tracks Data
  const tracks = [
    {
      id: 'embedded',
      title: 'Embedded Systems & IoT',
      icon: <Cpu size={28} className="text-blue-500" />,
      colorClass: 'strip-blue',
      description: 'Microcontroller programming, firmware architecture, RTOS, sensor telemetry, and smart cyber-physical devices.',
      skills: ['ARM Cortex', 'ESP32 / FreeRTOS', 'PCB Design', 'MQTT', 'Edge Computing'],
      tools: 'Keil µVision, STM32CubeIDE, KiCAD, Logic Analyzers',
      careers: 'Embedded Software Engineer, IoT Architect, Firmware Developer'
    },
    {
      id: 'software',
      title: 'Software Systems & Cloud',
      icon: <Terminal size={28} className="text-gold-500" />,
      colorClass: 'strip-gold',
      description: 'Full-stack software engineering, microservices, Linux kernels, cloud-native deployments, and distributed systems.',
      skills: ['C++ / Rust', 'Python / Go', 'Docker & Kubernetes', 'System Design', 'PostgreSQL'],
      tools: 'VS Code, Git, Docker, AWS/GCP, Linux Toolchain',
      careers: 'Systems Software Engineer, Backend Architect, DevOps Engineer'
    },
    {
      id: 'cybersecurity',
      title: 'Networks & Cybersecurity',
      icon: <Lock size={28} className="text-cyan-500" />,
      colorClass: 'strip-cyan',
      description: 'Computer network protocols, routing and switching, cryptography, industrial penetration testing, and security auditing.',
      skills: ['TCP/IP Stack', 'Cisco IOS', 'Wireshark', 'Cryptographic Proofs', 'Firewalls'],
      tools: 'Cisco Packet Tracer, GNS3, Wireshark, Kali Linux, Snort',
      careers: 'Network Infrastructure Engineer, Cyber Security Analyst, Security Architect'
    },
    {
      id: 'vlsi',
      title: 'Digital Logic & VLSI Design',
      icon: <Binary size={28} className="text-purple-500" />,
      colorClass: 'strip-purple',
      description: 'Hardware description languages (HDL), FPGA prototyping, digital integrated circuit design, and computer arithmetic units.',
      skills: ['Verilog / VHDL', 'FPGA (Xilinx/Altera)', 'RTL Synthesis', 'Timing Closure', 'ASIC Flow'],
      tools: 'Vivado Design Suite, ModelSim, Quartus Prime, EDA Playground',
      careers: 'VLSI Design Engineer, FPGA Specialist, ASIC Verification Engineer'
    },
    {
      id: 'ai-robotics',
      title: 'Applied AI & Edge Robotics',
      icon: <Sparkles size={28} className="text-emerald-500" />,
      colorClass: 'strip-emerald',
      description: 'Computer vision, embedded neural accelerators, kinematic robot arm modeling, autonomous mobile rovers, and sensor fusion.',
      skills: ['TensorFlow Lite', 'OpenCV', 'ROS (Robot OS)', 'TinyML', 'Kalman Filtering'],
      tools: 'PyTorch, ROS2, Jetson Nano, Gazebo Simulator',
      careers: 'Robotics Engineer, Computer Vision Engineer, Machine Learning Hardware Engineer'
    },
    {
      id: 'control-automation',
      title: 'Control Systems & Automation',
      icon: <Layers size={28} className="text-indigo-500" />,
      colorClass: 'strip-indigo',
      description: 'Industrial SCADA, programmable logic controllers (PLCs), PID loop tuning, and modern automated instrumentation.',
      skills: ['PLC Ladder Logic', 'MATLAB / Simulink', 'State-Space Modeling', 'SCADA', 'Feedback Control'],
      tools: 'MATLAB, Siemens TIA Portal, LabVIEW, Simulink',
      careers: 'Automation Engineer, Instrumentation Specialist, Control Systems Lead'
    }
  ];

  // Curriculum Data (100L - 500L)
  const curriculumByLevel = {
    '100L': {
      title: '100 Level: Engineering Foundations & Basic Sciences',
      totalCredits: '40 Units',
      courses: [
        { code: 'MTH 101', title: 'Elementary Mathematics I (Algebra & Trigonometry)', desc: 'Set theory, quadratic equations, progressions, matrices, binomial theorem.' },
        { code: 'PHY 101', title: 'General Physics I (Mechanics & Heat)', desc: 'Units, dimensional analysis, vectors, Newton laws, thermal dynamics.' },
        { code: 'CHM 101', title: 'General Chemistry I (Physical & Inorganic)', desc: 'Atomic structure, chemical bonding, periodic table, reaction kinetics.' },
        { code: 'CPE 102', title: 'Introduction to Computer Engineering & Society', desc: 'History of computing, computing ethics, roles of computer engineers in national growth.' }
      ]
    },
    '200L': {
      title: '200 Level: Engineering Principles & Applied Mathematics',
      totalCredits: '44 Units',
      courses: [
        { code: 'EEE 201', title: 'Applied Electricity I (Circuit Analysis)', desc: 'Kirchhoff laws, nodal and mesh analysis, Thévenin/Norton theorems, AC circuit fundamentals.' },
        { code: 'CPE 201', title: 'Computer Programming in C/C++', desc: 'Pointers, memory management, algorithmic problem-solving, structured programming.' },
        { code: 'MEE 205', title: 'Engineering Drawing & CAD', desc: 'Orthographic projections, isometric view, computer-aided drafting (CAD).' },
        { code: 'MAT 201', title: 'Mathematical Methods (Differential Equations)', desc: 'First and second order ODEs, Laplace transforms, Fourier series analysis.' }
      ]
    },
    '300L': {
      title: '300 Level: Digital Systems, Microprocessors & Networks',
      totalCredits: '42 Units',
      courses: [
        { code: 'CPE 301', title: 'Microprocessor Systems & Assembly Language', desc: '8086/ARM architecture, registers, instruction sets, interrupts, memory interfacing.' },
        { code: 'CPE 303', title: 'Digital Logic Design & Hardware Lab', desc: 'Karnaugh maps, combinational & sequential logic, flip-flops, counters, HDL simulation.' },
        { code: 'CPE 305', title: 'Data Communications & Computer Networks', desc: 'OSI 7-layer model, TCP/IP, IP subnetting, routing algorithms, medium access control.' },
        { code: 'EEE 307', title: 'Signals, Systems and Transforms', desc: 'Continuous and discrete time signals, z-transforms, frequency domain convolution.' }
      ]
    },
    '400L': {
      title: '400 Level: Embedded Systems & 6-Month SIWES Internship',
      totalCredits: '36 Units',
      courses: [
        { code: 'CPE 401', title: 'Embedded Systems Design & Microcontrollers', desc: 'Microcontroller peripherals (ADC, PWM, UART, SPI, I2C), RTOS, embedded hardware debugging.' },
        { code: 'CPE 403', title: 'Computer Architecture & Organization', desc: 'Pipelining, hazard detection, cache memory hierarchies, RISC vs CISC instruction sets.' },
        { code: 'CPE 405', title: 'Software Engineering Methodologies', desc: 'SDLC, Agile/Scrum, design patterns, UML modeling, software testing & quality assurance.' },
        { code: 'CPE 499', title: 'Students Industrial Work Experience Scheme (SIWES)', desc: '6 months of intensive practical engineering training in leading tech and industrial firms.' }
      ]
    },
    '500L': {
      title: '500 Level: Advanced VLSI, AI, Edge Systems & Capstone Project',
      totalCredits: '38 Units',
      courses: [
        { code: 'CPE 501', title: 'VLSI Design & Hardware Description Languages', desc: 'CMOS logic fabrication, VHDL/Verilog synthesis, FPGA floorplanning, timing analysis.' },
        { code: 'CPE 503', title: 'Artificial Intelligence & Robotics Engineering', desc: 'Machine learning fundamentals, edge computing inference, robotic kinematics and control.' },
        { code: 'CPE 505', title: 'Cybersecurity, Cryptography & Network Defense', desc: 'Public key infrastructure, AES/RSA, blockchain fundamentals, threat modeling, intrusion detection.' },
        { code: 'CPE 599', title: 'Final Year Capstone Engineering Project (I & II)', desc: 'Individual research and physical implementation of novel hardware/software engineering solutions.' }
      ]
    }
  };

  // Laboratories Data
  const laboratories = [
    {
      id: 'embed-lab',
      name: 'Embedded Systems & Microprocessor Lab',
      capacity: '45 Workstations',
      summary: 'Equipped with cutting-edge ARM Cortex development boards, Texas Instruments DSP kits, FPGA demo trainers, and multichannel digital storage oscilloscopes.',
      equipment: ['Xilinx Artix-7 FPGAs', 'STM32 Discovery Kits', 'Rigol 100MHz Oscilloscopes', 'Logic State Analyzers', 'ESP32 IoT Kits']
    },
    {
      id: 'cisco-lab',
      name: 'Cisco Networking & Cyber-Physical Security Lab',
      capacity: '50 Workstations',
      summary: 'Dedicated laboratory rack infrastructure featuring enterprise Cisco routers, Catalyst switches, hardware firewalls, and packet simulation terminals.',
      equipment: ['Cisco Catalyst 2960 Switches', 'Cisco 2901 Integrated Routers', 'Hardware Firewalls', 'Packet Sniffing Workstations', 'Fiber Optic Splicers']
    },
    {
      id: 'software-lab',
      name: 'Software Engineering & AI Simulation Studio',
      capacity: '60 High-Compute PCs',
      summary: 'High-performance computing cluster configured with Linux distributions, CUDA-enabled GPU acceleration workstations for deep learning and robotics simulation.',
      equipment: ['Intel Core i7/i9 Workstations', 'NVIDIA RTX GPUs', 'Dual 4K Displays', 'Local Private Cloud Server', 'Docker Container Cluster']
    },
    {
      id: 'pcb-lab',
      name: 'Hardware Prototyping & PCB Fabrication Workshop',
      capacity: '30 Technicians',
      summary: 'Specialized fabrication workshop for precision circuit prototyping, surface-mount soldering, CNC PCB milling, and 3D casing rapid fabrication.',
      equipment: ['CNC PCB Prototyping Mill', 'Hot Air SMD Rework Stations', 'Creality Ender 3D Printers', 'Digital Multimeters', 'UV Exposure Units']
    }
  ];

  // Faculty Members Data
  const facultyMembers = [
    {
      name: 'Dr. A. O. Oladipo',
      title: 'Associate Professor & Head of Department',
      qualifications: 'B.Tech, M.Sc, Ph.D. (FNSE, MNCS, R.Engr COREN)',
      focus: 'Embedded Systems Architecture, IoT Telemetry, Cyber-Physical Systems',
      initials: 'AO'
    },
    {
      name: 'Prof. K. A. Adebiyi',
      title: 'Professor of Computer Engineering',
      qualifications: 'B.Sc, M.Sc, Ph.D. (FNSE, FAEng)',
      focus: 'VLSI Systems, Hardware Reliability, Industrial Automation',
      initials: 'KA'
    },
    {
      name: 'Dr. (Mrs) F. M. Dahunsi',
      title: 'Senior Lecturer & Research Lead',
      qualifications: 'B.Tech, M.Eng, Ph.D. (MNSE, R.Engr COREN)',
      focus: 'Wireless Sensor Networks, Network Security & Edge Computing',
      initials: 'FD'
    },
    {
      name: 'Dr. O. J. Okesola',
      title: 'Senior Lecturer & Postgraduate Coordinator',
      qualifications: 'B.Tech, M.Sc, Ph.D. (MNCS, R.Engr COREN)',
      focus: 'Distributed Systems, Machine Learning in Hardware, Microelectronics',
      initials: 'OO'
    }
  ];

  // FAQ Items
  const faqItems = [
    {
      q: 'What degree is awarded by the Department of Computer Engineering at LAUTECH?',
      a: 'The undergraduate program awards a Bachelor of Technology (B.Tech) in Computer Engineering upon successful completion of the intensive 5-year curriculum, fully accredited by COREN and the NUC.'
    },
    {
      q: 'Is the Computer Engineering program fully accredited by COREN?',
      a: 'Yes, the program has consistently received full accreditation from both the Council for the Regulation of Engineering in Nigeria (COREN) and the National Universities Commission (NUC).'
    },
    {
      q: 'What is the duration and structure of the SIWES industrial internship?',
      a: 'Students undergo a 3-month Students Work Experience Programme (SWEP) during the 200 Level long vacation and a mandatory 6-month full-time Students Industrial Work Experience Scheme (SIWES) during the second semester of 400 Level in reputable tech and telecommunication engineering firms.'
    },
    {
      q: 'Can postgraduate students apply for M.Tech and Ph.D. programs?',
      a: 'Yes! The department offers Postgraduate Diploma (PGD), Master of Technology (M.Tech), and Doctor of Philosophy (Ph.D.) programs with research specializations in Embedded Systems, Computer Networks, and VLSI.'
    }
  ];

  return (
    <div className="site-wrapper">
      {/* 1. TOP NOTICE & UTILITY TICKER BAR */}
      <div className="top-notice-bar">
        <div className="container top-notice-inner">
          <div className="top-notice-left">
            <span className="pulse-dot"></span>
            <span><strong>LAUTECH Official Portal:</strong> Department of Computer Engineering • Faculty of Engineering & Technology</span>
          </div>
          <div className="top-notice-right">
            <span className="top-notice-link">
              <ShieldCheck size={14} className="text-emerald-400" /> COREN & NUC Accredited
            </span>
            <span className="top-notice-link">
              <MapPin size={14} /> Main Campus, Ogbomoso
            </span>
            <button
              onClick={() => setPortalModalOpen(true)}
              className="top-notice-link"
              style={{ cursor: 'pointer', background: 'none', border: 'none', font: 'inherit' }}
            >
              <Users size={14} /> Student Portal
            </button>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVIGATION BAR - Spacious & Less Compact */}
      <header className="site-header">
        <div className="container navbar-inner">
          {/* Brand Logo & Department Subtitle */}
          <a href="#" className="brand-container" id="brand-logo">
            <div className="brand-crest">
              <Cpu size={28} color="#f59e0b" />
            </div>
            <div className="brand-titles">
              <span className="brand-university">
                Ladoke Akintola University of Technology <span className="brand-acronym">(LAUTECH)</span>
              </span>
              <span className="brand-department">
                Department of Computer Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#specializations" className="nav-link">Programs</a></li>
            <li><a href="#curriculum" className="nav-link">Curriculum</a></li>
            <li><a href="#laboratories" className="nav-link">Laboratories</a></li>
            <li><a href="#faculty" className="nav-link">Faculty</a></li>
            <li><a href="#resources" className="nav-link">Student Hub</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <button
              onClick={() => setHandbookModalOpen(true)}
              className="btn btn-outline-light btn-sm"
              id="header-handbook-btn"
            >
              <BookOpen size={16} /> Handbook
            </button>
            <button
              onClick={() => setPortalModalOpen(true)}
              className="btn btn-primary btn-sm"
              id="header-portal-btn"
            >
              <Users size={16} /> Portal Login
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <ul className="mobile-nav-links">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">About Department</a></li>
              <li><a href="#specializations" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Specialization Programs</a></li>
              <li><a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Academic Curriculum</a></li>
              <li><a href="#laboratories" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Research Laboratories</a></li>
              <li><a href="#faculty" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Faculty Members</a></li>
              <li><a href="#resources" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Student Resources</a></li>
              <li><a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">CGPA Calculator</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Contact & Inquiries</a></li>
            </ul>
            <div className="mobile-nav-actions">
              <button
                onClick={() => { setMobileMenuOpen(false); setPortalModalOpen(true); }}
                className="btn btn-primary"
              >
                <Users size={18} /> Student Portal Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setHandbookModalOpen(true); }}
                className="btn btn-outline-light"
              >
                <Download size={18} /> Download Student Handbook
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION - SIMPLER, RELATABLE & WELCOMING */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-grid">
            {/* Left Hero Content */}
            <div className="hero-content">
              <div className="hero-badge-wrap">
                <span className="badge-tag gold-dark">
                  <Award size={14} /> Full COREN Accreditation
                </span>
                <span className="badge-tag blue">
                  <Cpu size={14} /> Code & Hardware Integration
                </span>
              </div>

              <h1 className="hero-heading">
                Where Curiosity Turns Into <span className="hero-heading-highlight">Real-World Innovation</span>.
              </h1>

              <p className="hero-description">
                Welcome to the Department of Computer Engineering at LAUTECH. We bridge the gap between physical silicon and intelligent software — empowering you to build smart devices, secure networks, and software solutions that power the future.
              </p>

              <div className="hero-buttons">
                <a href="#curriculum" className="btn btn-gold" id="hero-curriculum-cta">
                  Explore 5-Year Journey <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => setPortalModalOpen(true)}
                  className="btn btn-outline-light"
                  id="hero-portal-cta"
                >
                  <Users size={18} /> Student Portal
                </button>
                <a href="#calculator" className="btn btn-outline-light" id="hero-calc-cta">
                  <Calculator size={18} /> GPA Simulator
                </a>
              </div>

              {/* Department Key Metrics */}
              <div className="hero-stats-row">
                <div className="hero-stat-item">
                  <span className="hero-stat-number gold">5-Year</span>
                  <span className="hero-stat-label">B.Tech Honors Degree</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number">100%</span>
                  <span className="hero-stat-label">COREN & NUC Certified</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number gold">6 Months</span>
                  <span className="hero-stat-label">Paid Industry Internship</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number">1,200+</span>
                  <span className="hero-stat-label">Alumni Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Welcoming Department & Student Overview Card */}
            <div className="hero-welcome-card">
              <div className="welcome-card-header">
                <div className="welcome-tag">
                  <Sparkles size={16} />
                  <span>Department of Computer Engineering</span>
                </div>
                <span className="welcome-status-badge">
                  <span className="status-indicator"></span> 2026/2027 Active Session
                </span>
              </div>

              <div className="welcome-card-body">
                <h3 className="welcome-card-title">Where Innovation Meets Real-World Practice</h3>
                <p className="welcome-card-desc">
                  From programming smart microchips to developing cutting-edge software and artificial intelligence, LAUTECH empowers you to turn ideas into real technology.
                </p>

                <div className="welcome-highlights-list">
                  <div className="welcome-highlight-item">
                    <div className="highlight-icon-wrap blue">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-item-title">Hardware & Circuit Design</h4>
                      <p className="highlight-item-text">Microcontrollers, IoT sensor networks, FPGA systems, and electronics workbench practice.</p>
                    </div>
                  </div>

                  <div className="welcome-highlight-item">
                    <div className="highlight-icon-wrap gold">
                      <Terminal size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-item-title">Modern Software & Cloud</h4>
                      <p className="highlight-item-text">C/C++, Python, Linux systems, cloud backends, and artificial intelligence models.</p>
                    </div>
                  </div>

                  <div className="welcome-highlight-item">
                    <div className="highlight-icon-wrap emerald">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-item-title">6-Month Industry Attachment</h4>
                      <p className="highlight-item-text">Hands-on corporate internship (SIWES) in leading tech, telecom, and energy companies.</p>
                    </div>
                  </div>
                </div>

                <div className="welcome-shortcuts-row">
                  <button onClick={() => setHandbookModalOpen(true)} className="shortcut-btn">
                    <BookOpen size={15} /> Student Handbook
                  </button>
                  <a href="#calculator" className="shortcut-btn">
                    <Calculator size={15} /> GPA Calculator
                  </a>
                  <button onClick={() => setPortalModalOpen(true)} className="shortcut-btn primary">
                    <Users size={15} /> Student Portal <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. DEMYSTIFYING COMPUTER ENGINEERING: SIMPLE & RELATABLE EXPLAINER */}
      <section className="section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-tag gold">Computer Engineering in Plain English</span>
            <h2 className="section-title">What Exactly Is Computer Engineering?</h2>
            <p className="section-subtitle">
              People often ask: Is it coding or is it wiring circuits? The answer is <strong>both</strong>. We teach you how to build the physical computer brain and write the intelligent software that runs on it.
            </p>
          </div>

          <div className="demystify-grid">
            <div className="demystify-card">
              <div className="demystify-card-top" style={{ background: '#2563eb' }}></div>
              <div className="demystify-icon-box" style={{ background: '#eff6ff', color: '#2563eb' }}>
                <Cpu size={26} />
              </div>
              <h3 className="demystify-title">1. Physical Hardware</h3>
              <p className="demystify-desc">
                The body and senses of technology. You learn how microchips, circuit boards, processors, and sensors work together to interact with the physical world.
              </p>
              <ul className="demystify-topics-list">
                <li className="demystify-topic-pill">Microchips</li>
                <li className="demystify-topic-pill">Circuit Boards</li>
                <li className="demystify-topic-pill">Robotics Sensors</li>
                <li className="demystify-topic-pill">Arduino & ESP32</li>
              </ul>
            </div>

            <div className="demystify-card">
              <div className="demystify-card-top" style={{ background: '#f59e0b' }}></div>
              <div className="demystify-icon-box" style={{ background: '#fef3c7', color: '#d97706' }}>
                <Terminal size={26} />
              </div>
              <h3 className="demystify-title">2. Intelligent Software</h3>
              <p className="demystify-desc">
                The mind and logic. You write fast, reliable code that tells physical hardware what to do — from embedded C and Linux drivers to cloud web applications.
              </p>
              <ul className="demystify-topics-list">
                <li className="demystify-topic-pill">C / C++</li>
                <li className="demystify-topic-pill">Python & AI</li>
                <li className="demystify-topic-pill">Operating Systems</li>
                <li className="demystify-topic-pill">Cloud APIs</li>
              </ul>
            </div>

            <div className="demystify-card">
              <div className="demystify-card-top" style={{ background: '#10b981' }}></div>
              <div className="demystify-icon-box" style={{ background: '#ecfdf5', color: '#059669' }}>
                <Wifi size={26} />
              </div>
              <h3 className="demystify-title">3. Networks & Security</h3>
              <p className="demystify-desc">
                The nervous system. You connect devices across the internet, set up secure enterprise networks, and defend data against cyberattacks and breaches.
              </p>
              <ul className="demystify-topics-list">
                <li className="demystify-topic-pill">Computer Networks</li>
                <li className="demystify-topic-pill">Cybersecurity</li>
                <li className="demystify-topic-pill">Wi-Fi & 5G</li>
                <li className="demystify-topic-pill">Cryptography</li>
              </ul>
            </div>
          </div>

          {/* Quick Comparison Box: CS vs CPE */}
          <div className="cs-vs-cpe-box">
            <div className="cs-vs-cpe-header">
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Which Degree Is Right For You?
              </h4>
              <p style={{ color: '#93c5fd', fontSize: '0.88rem' }}>
                A quick comparison to help prospective students and parents decide.
              </p>
            </div>

            <div className="cs-vs-cpe-grid">
              <div className="cs-col">
                <span className="cs-col-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1' }}>
                  Software Pure Play
                </span>
                <h5 className="cs-col-title">Computer Science</h5>
                <p className="cs-col-desc">
                  Focuses predominantly on software algorithms, programming languages, mathematical data structures, and computational theory.
                </p>
                <div className="cs-col-focus">
                  <strong>Focus:</strong> ~90% Software & Theory, ~10% Hardware
                </div>
              </div>

              <div className="cs-col highlight-cpe">
                <span className="cs-col-badge" style={{ background: 'rgba(245, 158, 11, 0.25)', color: '#f59e0b' }}>
                  ★ Best of Both Worlds
                </span>
                <h5 className="cs-col-title">Computer Engineering (Us)</h5>
                <p className="cs-col-desc">
                  Combines electrical hardware with software systems. You build the device AND write the code: IoT, robotics, chips, firmware, and scalable apps.
                </p>
                <div className="cs-col-focus" style={{ color: '#93c5fd' }}>
                  <strong>Focus:</strong> 50% Hardware + 50% Software & Systems
                </div>
              </div>

              <div className="cs-col">
                <span className="cs-col-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1' }}>
                  Power & Electronics
                </span>
                <h5 className="cs-col-title">Electrical Engineering</h5>
                <p className="cs-col-desc">
                  Focuses on large-scale electrical power generation, transmission lines, high-voltage equipment, and electromagnetics.
                </p>
                <div className="cs-col-focus">
                  <strong>Focus:</strong> ~85% Power & High-Voltage Physics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE DEPARTMENT SECTION */}
      <section className="section section-alt" id="about">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Mission, Vision & Overview */}
            <div className="about-text-col">
              <span className="badge-tag gold">Department Overview</span>
              <h2 className="section-title">
                Excellence in Engineering Education Since Inception
              </h2>
              <p>
                The Department of Computer Engineering at Ladoke Akintola University of Technology (LAUTECH), Ogbomoso, is established under the Faculty of Engineering and Technology to provide comprehensive education in the design, development, and application of digital computer systems and cyber-physical technologies.
              </p>
              <p>
                Our curriculum strategically fuses rigorous physical hardware design—microprocessors, VLSI circuits, and FPGA architectures—with high-level software engineering, cybersecurity, and modern artificial intelligence.
              </p>

              <div className="vision-mission-cards">
                <div className="vm-card">
                  <div className="vm-icon-box blue">
                    <Sparkles size={22} />
                  </div>
                  <h4 className="vm-title">Our Vision</h4>
                  <p className="vm-text">
                    To be a globally recognized center of excellence in computer hardware and software engineering research, driving technological entrepreneurship and sustainable solutions for Africa and beyond.
                  </p>
                </div>

                <div className="vm-card">
                  <div className="vm-icon-box gold">
                    <Award size={22} />
                  </div>
                  <h4 className="vm-title">Our Mission</h4>
                  <p className="vm-text">
                    To produce high-caliber computer engineers with solid scientific principles, innovative problem-solving capability, ethical leadership, and extensive hands-on laboratory experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: HOD Welcome & Accreditation Credentials */}
            <div className="hod-card-wrapper">
              <div className="hod-profile-row">
                <div className="hod-avatar-frame">
                  AO
                </div>
                <div>
                  <h3 className="hod-name">Dr. A. O. Oladipo</h3>
                  <div className="hod-role">Head of Department (HOD)</div>
                  <div className="hod-qualifications">B.Tech, M.Sc, Ph.D. • FNSE, MNCS, R.Engr COREN</div>
                </div>
              </div>

              <blockquote className="hod-quote">
                "At LAUTECH Computer Engineering, our students do not merely learn concepts from textbooks; they fabricate circuits, program microchips, configure enterprise backbones, and engineer intelligent systems that solve real societal problems. We take pride in cultivating resilient problem-solvers who immediately excel in tech hubs and engineering industries across the globe."
              </blockquote>

              <div className="accreditation-pill-row">
                <div className="accredit-tag">
                  <CheckCircle2 size={16} /> COREN Full Accreditation
                </div>
                <div className="accredit-tag">
                  <CheckCircle2 size={16} /> NUC Approved Syllabus
                </div>
                <div className="accredit-tag">
                  <CheckCircle2 size={16} /> 6-Month SIWES Internship
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZATION TRACKS / FOCUS AREAS */}
      <section className="section" id="specializations">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag blue">Specialization Domains</span>
            <h2 className="section-title">Core Engineering Tracks & Focus Areas</h2>
            <p className="section-subtitle">
              Our 5-year B.Tech curriculum exposes undergraduates to vital technical domains, empowering students to specialize and conduct groundbreaking capstone research.
            </p>
          </div>

          <div className="tracks-grid">
            {tracks.map((track) => (
              <div key={track.id} className="track-card">
                <div className={`track-card-accent-strip ${track.colorClass}`}></div>
                <div className="track-icon-wrapper" style={{ background: '#f1f5f9' }}>
                  {track.icon}
                </div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-description">{track.description}</p>

                <div className="track-skills-tags">
                  {track.skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">{skill}</span>
                  ))}
                </div>

                <div className="track-footer-action">
                  <span
                    onClick={() => setSelectedTrackModal(track)}
                    className="track-action-link"
                  >
                    View Track Syllabus & Tools <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC CURRICULUM EXPLORER */}
      <section className="section section-alt" id="curriculum">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag gold">Undergraduate B.Tech</span>
            <h2 className="section-title">Interactive Curriculum Explorer</h2>
            <p className="section-subtitle">
              Navigate through the progressive 5-year degree plan from 100 Level fundamental sciences to 500 Level advanced VLSI synthesis and capstone innovation.
            </p>
          </div>

          {/* Level Switcher Pills */}
          <div className="curriculum-nav-pills">
            {['100L', '200L', '300L', '400L', '500L'].map((level) => (
              <button
                key={level}
                onClick={() => setActiveCurriculumLevel(level)}
                className={`pill-btn ${activeCurriculumLevel === level ? 'active' : ''}`}
                id={`curriculum-tab-${level}`}
              >
                {level} Program
              </button>
            ))}
          </div>

          {/* Active Level Content Display */}
          <div className="curriculum-content-card">
            <div className="level-meta-header">
              <div>
                <h3 className="level-headline">{curriculumByLevel[activeCurriculumLevel].title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  Department of Computer Engineering • Bachelor of Technology (Honours)
                </p>
              </div>
              <span className="level-badge-units">
                Expected: {curriculumByLevel[activeCurriculumLevel].totalCredits}
              </span>
            </div>

            <div className="courses-table-grid">
              {curriculumByLevel[activeCurriculumLevel].courses.map((course, idx) => (
                <div key={idx} className="course-item-box">
                  <div className="course-code-badge">{course.code}</div>
                  <div className="course-info">
                    <h5>{course.title}</h5>
                    <p className="course-desc">{course.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setHandbookModalOpen(true)}
                className="btn btn-outline btn-sm"
              >
                <Download size={16} /> Download Complete Course Synopsis (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LABORATORIES & RESEARCH FACILITIES */}
      <section className="section section-dark" id="laboratories">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag gold-dark">Practical Facilities</span>
            <h2 className="section-title light">World-Class Engineering Laboratories</h2>
            <p className="section-subtitle light">
              Engineering brilliance begins at the lab bench. Our department houses four specialized research and teaching laboratories equipped with industrial-grade instruments.
            </p>
          </div>

          <div className="labs-grid">
            {laboratories.map((lab) => (
              <div key={lab.id} className="lab-card">
                <div className="lab-header-row">
                  <div className="lab-icon-box">
                    <Microchip size={28} />
                  </div>
                  <span className="lab-capacity-tag">{lab.capacity}</span>
                </div>

                <h3 className="lab-title">{lab.name}</h3>
                <p className="lab-summary">{lab.summary}</p>

                <div className="lab-equipment-section">
                  <h6>Standard Instrumentation & Kits:</h6>
                  <ul className="lab-equip-list">
                    {lab.equipment.map((item, idx) => (
                      <li key={idx} className="lab-equip-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FACULTY & ACADEMIC LEADERSHIP */}
      <section className="section section-alt" id="faculty">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag blue">Academic Staff</span>
            <h2 className="section-title">Distinguished Faculty & Researchers</h2>
            <p className="section-subtitle">
              Learn from accomplished professors, researchers, and registered professional engineers dedicated to academic mentorship and industry impact.
            </p>
          </div>

          <div className="faculty-grid">
            {facultyMembers.map((fac, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-avatar-top">
                  <div className="faculty-img-placeholder">
                    {fac.initials}
                  </div>
                </div>

                <div className="faculty-details">
                  <h4 className="faculty-name">{fac.name}</h4>
                  <div className="faculty-designation">{fac.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.5rem' }}>
                    {fac.qualifications}
                  </div>
                  <p className="faculty-focus">
                    <strong>Research:</strong> {fac.focus}
                  </p>

                  <div className="faculty-contact-row">
                    <a href="#contact" className="faculty-social-btn" title="Contact via Department">
                      <Mail size={16} />
                    </a>
                    <a href="#about" className="faculty-social-btn" title="Academic Profile">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. QUICK RESOURCES & INTERACTIVE CGPA CALCULATOR */}
      <section className="section" id="resources">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag gold">Student Portal Hub</span>
            <h2 className="section-title">Quick Academic Resources</h2>
            <p className="section-subtitle">
              Direct access to essential student resources, academic documents, timetables, and project templates.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon blue">
                <BookOpen size={24} />
              </div>
              <div className="resource-body">
                <h5>Student Academic Handbook</h5>
                <p>Complete curriculum breakdown, academic ethics, grading policies, and departmental rules.</p>
                <span
                  onClick={() => setHandbookModalOpen(true)}
                  className="resource-action-link"
                >
                  View Handbook <ChevronRight size={14} />
                </span>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon gold">
                <Calendar size={24} />
              </div>
              <div className="resource-body">
                <h5>Lecture & Lab Timetables</h5>
                <p>2026/2027 Academic Session lecture timetables, laboratory practical batches, and venue schedule.</p>
                <a href="#curriculum" className="resource-action-link">
                  View Schedule <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon cyan">
                <FolderGit2 size={24} />
              </div>
              <div className="resource-body">
                <h5>Final Year Project (FYP) Hub</h5>
                <p>Guidelines, approved project proposal template, formatting instructions, and past project repository.</p>
                <a href="#specializations" className="resource-action-link">
                  Browse Topics <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon blue">
                <Award size={24} />
              </div>
              <div className="resource-body">
                <h5>SIWES & Internship Guidelines</h5>
                <p>Logbook templates, industrial attachment approval forms, and defense grading criteria.</p>
                <a href="#about" className="resource-action-link">
                  Download Forms <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon gold">
                <Users size={24} />
              </div>
              <div className="resource-body">
                <h5>LAUTECH Student Portal</h5>
                <p>Semester course registration, fee payment receipts, exam slips, and official transcript request.</p>
                <span
                  onClick={() => setPortalModalOpen(true)}
                  className="resource-action-link"
                >
                  Access Portal <ChevronRight size={14} />
                </span>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon cyan">
                <Terminal size={24} />
              </div>
              <div className="resource-body">
                <h5>Engineering Software Licenses</h5>
                <p>Access keys and setup guides for MATLAB, Cisco Packet Tracer, Autodesk, and Xilinx Vivado.</p>
                <a href="#laboratories" className="resource-action-link">
                  Lab Resources <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* INTERACTIVE CGPA CALCULATOR WIDGET */}
          <div className="calculator-banner" id="calculator">
            <div className="calc-grid">
              {/* Left Column: Input Form & Course List */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Calculator size={22} color="#f59e0b" />
                  <h3 style={{ color: '#ffffff', fontSize: '1.4rem' }}>Departmental CGPA & GPA Simulator</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
                  Interactive tool built for LAUTECH Computer Engineering undergraduates using the 5.0 Grading System (A=5, B=4, C=3, D=2, E=1, F=0).
                </p>

                <form onSubmit={handleAddCourse} style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    placeholder="e.g. CPE 307 Embedded C"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    className="calc-input"
                    style={{ flexGrow: 1, minWidth: '160px' }}
                  />
                  <select
                    value={newCourseUnits}
                    onChange={(e) => setNewCourseUnits(e.target.value)}
                    className="calc-select"
                    aria-label="Course Credit Units"
                  >
                    <option value="1">1 Unit</option>
                    <option value="2">2 Units</option>
                    <option value="3">3 Units</option>
                    <option value="4">4 Units</option>
                    <option value="6">6 Units</option>
                  </select>
                  <select
                    value={newCourseGrade}
                    onChange={(e) => setNewCourseGrade(e.target.value)}
                    className="calc-select"
                    aria-label="Grade Scored"
                  >
                    <option value="A">Grade A (5 Pts)</option>
                    <option value="B">Grade B (4 Pts)</option>
                    <option value="C">Grade C (3 Pts)</option>
                    <option value="D">Grade D (2 Pts)</option>
                    <option value="E">Grade E (1 Pt)</option>
                    <option value="F">Grade F (0 Pt)</option>
                  </select>
                  <button type="submit" className="btn btn-gold btn-sm">
                    + Add Course
                  </button>
                </form>

                <div className="calc-courses-list">
                  {courses.map((course) => (
                    <div key={course.id} className="calc-course-row">
                      <span style={{ fontSize: '0.82rem', color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {course.name}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        {course.units} Units
                      </span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 'bold', color: '#f59e0b' }}>
                        Grade: {course.grade}
                      </span>
                      <button
                        onClick={() => handleRemoveCourse(course.id)}
                        className="calc-remove-btn"
                        title="Remove course"
                        aria-label="Remove Course"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Calculated Grade Score */}
              <div className="calc-result-display">
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Simulated Semester GPA
                </span>
                <div className="calc-cgpa-score">{currentGPA}</div>
                <div style={{ marginBottom: '1rem' }}>
                  <span className="calc-class-badge" style={{ borderColor: getDegreeClass(currentGPA).color, color: getDegreeClass(currentGPA).color }}>
                    {getDegreeClass(currentGPA).label}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                  Total Registered Units: <strong>{totalUnits}</strong> • Quality Points: <strong>{totalPoints}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT, ADMISSIONS & FAQ SECTION */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Interactive Contact Form */}
            <div className="contact-card">
              <span className="badge-tag blue">Direct Contact</span>
              <h2 className="section-title">Send Departmental Inquiry</h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                Prospective students, transfer candidates, alumni, and industry partners are welcome to reach out to the departmental administrative desk.
              </p>

              {contactSubmitted && (
                <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>Thank you! Your message has been routed to the Departmental Secretary.</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Olumide Adeleke"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="e.g. name@student.lautech.edu.ng"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject / Purpose of Inquiry</label>
                  <select
                    className="form-control"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  >
                    <option value="">Select inquiry category</option>
                    <option value="admissions">Undergraduate B.Tech Admissions & Requirements</option>
                    <option value="postgraduate">Postgraduate (PGD, M.Tech, Ph.D.) Research</option>
                    <option value="transcript">Transcript & Academic Verification</option>
                    <option value="partnership">Industry Sponsorship & Capstone Partnership</option>
                    <option value="other">General Departmental Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    className="form-control"
                    placeholder="Provide details of your question or request..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry Message
                </button>
              </form>
            </div>

            {/* Right Column: Physical Address, Contacts & FAQ */}
            <div className="contact-info-panel">
              <span className="badge-tag gold">Campus Coordinates</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Visit the Department</h3>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-item-body">
                  <h6>Departmental Location</h6>
                  <p>
                    Faculty of Engineering and Technology Complex,<br />
                    Ladoke Akintola University of Technology (LAUTECH),<br />
                    Main Campus, P.M.B. 4000, Ogbomoso, Oyo State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-item-body">
                  <h6>Official Department Email</h6>
                  <p>
                    <a href="mailto:cpe@lautech.edu.ng" style={{ color: '#2563eb', fontWeight: 600 }}>
                      cpe@lautech.edu.ng
                    </a>
                    <br />
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>admissions@lautech.edu.ng (University Admissions)</span>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-item-body">
                  <h6>Official Office Hours</h6>
                  <p>
                    Monday to Friday: 8:00 AM – 4:00 PM (WAT)<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Frequently Asked Questions Accordion */}
              <div className="faq-box">
                <div style={{ padding: '1rem 1.25rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                  Frequently Asked Questions (FAQ)
                </div>
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="faq-item">
                    <button
                      className="faq-trigger"
                      onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                      aria-expanded={faqOpenIndex === idx}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: faqOpenIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>
                    {faqOpenIndex === idx && (
                      <div className="faq-content">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            {/* Col 1: Brand Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div className="brand-crest" style={{ width: '40px', height: '40px' }}>
                  <Cpu size={22} color="#f59e0b" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.2 }}>LAUTECH</h4>
                  <span style={{ color: '#93c5fd', fontSize: '0.78rem' }}>Department of Computer Engineering</span>
                </div>
              </div>

              <p className="footer-brand-desc">
                Committed to training world-class computer engineers equipped with solid hardware, firmware, network security, and intelligent software proficiency for global technological leadership.
              </p>

              <div className="footer-accredit-badge">
                <p>
                  <strong>Accreditation Notice:</strong> Fully accredited by the Council for the Regulation of Engineering in Nigeria (COREN) and the National Universities Commission (NUC).
                </p>
              </div>
            </div>

            {/* Col 2: Academic Links */}
            <div>
              <h5 className="footer-col-title">Academics</h5>
              <ul className="footer-links-list">
                <li><a href="#curriculum">B.Tech Program</a></li>
                <li><a href="#curriculum">Postgraduate (M.Tech/Ph.D)</a></li>
                <li><a href="#specializations">Embedded Systems Track</a></li>
                <li><a href="#specializations">VLSI & Digital Logic</a></li>
                <li><a href="#specializations">Cybersecurity & Networks</a></li>
                <li><a href="#laboratories">Research Labs</a></li>
              </ul>
            </div>

            {/* Col 3: Student Hub */}
            <div>
              <h5 className="footer-col-title">Student Portal</h5>
              <ul className="footer-links-list">
                <li><a href="#resources" onClick={() => setPortalModalOpen(true)}>Course Registration</a></li>
                <li><a href="#resources" onClick={() => setHandbookModalOpen(true)}>Student Handbook</a></li>
                <li><a href="#calculator">CGPA Calculator</a></li>
                <li><a href="#resources">SIWES Placement</a></li>
                <li><a href="#resources">Final Year Project Hub</a></li>
                <li><a href="#contact">Exam Schedule</a></li>
              </ul>
            </div>

            {/* Col 4: Location & Contact */}
            <div>
              <h5 className="footer-col-title">Main Campus</h5>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8' }}>
                Faculty of Engineering & Technology,<br />
                Ladoke Akintola University of Technology,<br />
                P.M.B. 4000, Ogbomoso, Oyo State, Nigeria.
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: '#cbd5e1' }}>
                <strong>Desk:</strong> cpe@lautech.edu.ng<br />
                <strong>Phone:</strong> +234 (0) 803 000 0000
              </p>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="footer-bottom-bar">
            <div>
              © 2026 Department of Computer Engineering, Ladoke Akintola University of Technology (LAUTECH). All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="#home">Back to Top</a>
              <a href="#about">About</a>
              <a href="#curriculum">Curriculum</a>
              <a href="#contact">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. INTERACTIVE STUDENT PORTAL DEMO MODAL */}
      {portalModalOpen && (
        <div className="modal-overlay" onClick={() => setPortalModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Users size={22} color="#2563eb" />
                <h4 className="modal-title">LAUTECH Student Portal Access</h4>
              </div>
              <button
                onClick={() => setPortalModalOpen(false)}
                className="modal-close-btn"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem' }}>
                Sign in with your University Matriculation Number and password to access course registration, fee receipts, results, and exam slips.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to the LAUTECH Computer Engineering Student Portal demo! You are successfully authenticated."); setPortalModalOpen(false); }}>
                <div className="form-group">
                  <label className="form-label">Matriculation Number / UTME Reg No</label>
                  <input
                    type="text"
                    required
                    defaultValue="2021/CPE/042"
                    placeholder="e.g. 2021/CPE/042"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password / PIN</label>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••"
                    placeholder="Enter password"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Academic Session</label>
                  <select className="form-control" defaultValue="2026/2027">
                    <option value="2026/2027">2026/2027 Academic Session (Rain Semester)</option>
                    <option value="2025/2026">2025/2026 Academic Session</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Secure Sign In to Portal
                </button>
              </form>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.8rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                <a href="#contact" onClick={() => setPortalModalOpen(false)} style={{ color: '#2563eb' }}>Forgot Password?</a>
                <span>ICT Support Desk: ict@lautech.edu.ng</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 13. SPECIALIZATION TRACK DETAIL MODAL */}
      {selectedTrackModal && (
        <div className="modal-overlay" onClick={() => setSelectedTrackModal(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ background: '#eff6ff', padding: '0.4rem', borderRadius: '8px' }}>
                  {selectedTrackModal.icon}
                </div>
                <div>
                  <h4 className="modal-title">{selectedTrackModal.title}</h4>
                  <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>LAUTECH Engineering Specialization</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTrackModal(null)}
                className="modal-close-btn"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {selectedTrackModal.description}
              </p>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '1.25rem' }}>
                <h6 style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Industry Software & Tools Mastered:
                </h6>
                <p style={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace', margin: 0 }}>
                  {selectedTrackModal.tools}
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '1.25rem' }}>
                <h6 style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Target Career Pathways:
                </h6>
                <p style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600, margin: 0 }}>
                  {selectedTrackModal.careers}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button
                  onClick={() => setSelectedTrackModal(null)}
                  className="btn btn-outline btn-sm"
                >
                  Close
                </button>
                <a
                  href="#curriculum"
                  onClick={() => setSelectedTrackModal(null)}
                  className="btn btn-primary btn-sm"
                >
                  View Related Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 14. STUDENT HANDBOOK MODAL */}
      {handbookModalOpen && (
        <div className="modal-overlay" onClick={() => setHandbookModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <BookOpen size={22} color="#f59e0b" />
                <h4 className="modal-title">Departmental Academic Handbook</h4>
              </div>
              <button
                onClick={() => setHandbookModalOpen(false)}
                className="modal-close-btn"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Award size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a' }}>2026 - 2030 Academic Edition</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b', maxWidth: '420px', margin: '0.5rem auto 1.5rem auto' }}>
                  Contains official rules, grading metrics, COREN graduation benchmarks, course synopsis from 100L to 500L, and laboratory safety codes.
                </p>

                <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', color: '#334155', textAlign: 'left', marginBottom: '1.5rem' }}>
                  <div><strong>Document:</strong> LAUTECH_CPE_Handbook_2026.pdf</div>
                  <div><strong>Accreditation:</strong> COREN & NUC Standard</div>
                  <div><strong>Pages:</strong> 124 Pages (Full Curriculum Breakdown)</div>
                </div>

                <button
                  onClick={() => { alert("Downloading LAUTECH Computer Engineering Academic Handbook (PDF)..."); setHandbookModalOpen(false); }}
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <Download size={18} /> Download Handbook (PDF, 4.2 MB)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
