"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Download,
  Play,
  Code,
  Settings,
  BookOpen,
  AlertCircle,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import "./index.scss"

function App() {
  const [activeSection, setActiveSection] = useState("overview")
  const [openAccordions, setOpenAccordions] = useState({
    installation: false,
    features: false,
    usage: false,
    troubleshooting: false,
  })

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const openVSCodeExtension = () => {
    const vscodeUrl = 'vscode:extension/RaseAI.icdapp';

    window.open(vscodeUrl, '_blank');
  }

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "requirements", label: "Requirements", icon: Settings },
    { id: "installation", label: "Installation", icon: Download },
    { id: "features", label: "Features", icon: Code },
    { id: "usage", label: "Usage Guide", icon: Play },
    { id: "troubleshooting", label: "Troubleshooting", icon: AlertCircle },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="content-section">
            <div className="hero-banner">
              <h2 className="hero-title">icdApp VsCode Extension</h2>
              <p className="hero-description">
               icdApp is a VS Code extension that uses AI to build custom fullstack decentralised applications on Internet Computer(ICP). 
               Describe your app idea and it creates production-ready code with Motoko/Rust backends and React/Next.js frontends ready to deploy.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Key Benefits</h3>
                <ul className="feature-list">
                  <li className="feature-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>AI-powered code generation</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>One-click project scaffolding</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>

              <div className="feature-card">
                <h3 className="feature-title">Supported Technologies</h3>
                <div className="tech-grid">
                  <div className="tech-card tech-card--backend">
                    <div className="tech-title">Backend</div>
                    <div className="tech-subtitle">Motoko • Rust</div>
                  </div>
                  <div className="tech-card tech-card--frontend">
                    <div className="tech-title">Frontend</div>
                    <div className="tech-subtitle">React • Next.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "requirements":
        return (
          <div className="content-section">
            <h2 className="section-title">System Requirements</h2>

            <div className="requirements-grid">
              <div className="requirement-card">
                <h3 className="requirement-title">Operating System</h3>
                <ul className="requirement-list">
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>Windows 10/11 (64-bit)</span>
                  </li>
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>macOS 10.15 or later</span>
                  </li>
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>Linux (Ubuntu 18.04+)</span>
                  </li>
                </ul>
              </div>

              <div className="requirement-card">
                <h3 className="requirement-title">Hardware</h3>
                <ul className="requirement-list">
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>4GB RAM minimum (8GB recommended)</span>
                  </li>
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>2GB free disk space</span>
                  </li>
                  <li className="requirement-item">
                    <CheckCircle className="feature-icon feature-icon--success" />
                    <span>Internet connection required</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="software-requirements">
              <h3 className="requirement-title">Required Software</h3>
              <div className="software-grid">
                <div>
                  <h4 className="software-category">Essential Tools</h4>
                  <ul className="requirement-list">
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>Visual Studio Code 1.70+</span>
                    </li>
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>Node.js 16.0+ & npm</span>
                    </li>
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>DFINITY SDK (dfx)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="software-category">Optional Tools</h4>
                  <ul className="requirement-list">
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>Git (for version control)</span>
                    </li>
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>Docker (for containerization)</span>
                    </li>
                    <li className="requirement-item">
                      <CheckCircle className="feature-icon feature-icon--success" />
                      <span>Rust toolchain (for Rust development)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case "installation":
        return (
          <div className="content-section">
            <h2 className="section-title">Installation Guide</h2>

            <div className="quick-install">
              <h3 className="quick-install__title">Quick Installation</h3>
              <p className="quick-install__description">
                The fastest way to get started is through the VSCode Extension Marketplace.
              </p>
              <button onClick={openVSCodeExtension} className="btn btn--primary btn--with-icon">
                <ExternalLink className="btn__icon" />
                Open Extension in VSCode
              </button>
            </div>

            <div className="installation-steps">
              <div className="accordion" onClick={() => toggleAccordion("installation")}>
                <div className="accordion__header">
                  <h3 className="accordion__title">Step-by-Step Installation</h3>
                  {openAccordions.installation ? (
                    <ChevronDown className="accordion__icon" />
                  ) : (
                    <ChevronRight className="accordion__icon" />
                  )}
                </div>

                {openAccordions.installation && (
                  <div className="accordion__content">
                    <div className="step">
                      <div className="step__number">1</div>
                      <div className="step__content">
                        <h4 className="step__title">Install Prerequisites</h4>
                        <div className="code-block">
                          <code>
                            # Install Node.js and npm&lt;br/&gt; curl -fsSL https://deb.nodesource.com/setup_18.x | sudo
                            -E bash -&lt;br/&gt; sudo apt-get install -y nodejs&lt;br/&gt;&lt;br/&gt; # Install DFINITY
                            SDK&lt;br/&gt; sh -ci &quot;$(curl -fsSL https://sdk.dfinity.org/install.sh)&quot;
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="step">
                      <div className="step__number">2</div>
                      <div className="step__content">
                        <h4 className="step__title">Install VSCode Extension</h4>
                        <p className="step__description">
                          Open VSCode → Extensions → Search &quot;icdApp Builder&quot; → Install
                        </p>
                      </div>
                    </div>

                    <div className="step">
                      <div className="step__number">3</div>
                      <div className="step__content">
                        <h4 className="step__title">Configure Extension</h4>
                        <p className="step__description">
                          Open Command Palette (Ctrl+Shift+P) → &quot;icdApp: Configure API Settings&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="verification-section">
              <h3 className="verification__title">Verification</h3>
              <p className="verification__description">After installation, verify everything is working:</p>
              <div className="code-block">
                 <div class="code-block">
        <pre><span class="comment"># Check dfx version</span>
            <span class="command"> dfx --version</span>

<span class="comment"># Check Node.js version</span>
<span class="command"> node --version</span>

<span class="comment"># Test extension</span>
<span class="comment"># Open VSCode and use Ctrl+Shift+P → "icdApp: Build Fullstack ICP dApp"
</span>

</pre>
    </div>
              </div>
            </div>
          </div>
        )

      case "features":
        return (
          <div className="content-section">
            <h2 className="section-title">Extension Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-header">
                  <div className="feature-icon-wrapper feature-icon-wrapper--blue">
                    <Code className="feature-icon-large" />
                  </div>
                  <h3 className="feature-title">AI Code Generation</h3>
                </div>
                <ul className="feature-details">
                  <li>• Generate Motoko/Rust backend code</li>
                  <li>• Create React/Next.js frontend code</li>
                </ul>
              </div>

              <div className="feature-card">
                <div className="feature-header">
                  <div className="feature-icon-wrapper feature-icon-wrapper--green">
                    <Settings className="feature-icon-large" />
                  </div>
                  <h3 className="feature-title">Project Scaffolding</h3>
                </div>
                <ul className="feature-details">
                  <li>• Complete project structure</li>
                  <li>• Configured build tools</li>
                  <li>• Development environment setup</li>
                  <li>• Testing framework integration</li>
                </ul>
              </div>

            </div>

            <div className="command-palette">
              <h3 className="command-palette__title">Command Palette Integration</h3>
              <div className="command-grid">
                <div>
                  <h4 className="command-category">Project Commands</h4>
                  <ul className="command-list">
                    <li>
                      • <code>icdApp: Build Fullstack ICP dApp</code>
                    </li>
                    <li>
                      • <code>icdApp: Open icdApp Output</code>
                    </li>
                    <li>
                      • <code>icdApp: Show active build sessions</code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case "usage":
        return (
          <div className="content-section">
            <h2 className="section-title">Usage Guide</h2>

            <div className="usage-intro">
              <h3 className="usage-intro__title">Quick Start</h3>
              <p className="usage-intro__description">
                Follow these steps to create your first ICP dApp with the extension.
              </p>
            </div>

            <div className="usage-steps">
              <div className="step-card">
                <div className="step">
                  <div className="step__number">1</div>
                  <div className="step__content">
                    <h4 className="step__title">Create New Project</h4>
                    <p className="step__description">
                      Open VSCode and use the command palette to create a new ICP project.
                    </p>
                    <div className="code-block">
                      <code>Ctrl+Shift+P → "icdApp: Build Fullstack ICP dApp"</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step">
                  <div className="step__number">2</div>
                  <div className="step__content">
                    <h4 className="step__title">Configure Project Settings</h4>
                    <p className="step__description">Choose your preferred technologies and project configuration.</p>
                    <div className="config-options">
                      <div>
                        <h5 className="config-title">Backend Options</h5>
                        <ul className="config-list">
                          <li>• Motoko (Recommended)</li>
                          <li>• Rust</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="config-title">Frontend Options</h5>
                        <ul className="config-list">
                          <li>• React.js</li>
                          <li>• Next.js</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step">
                  <div className="step__number">3</div>
                  <div className="step__content">
                    <h4 className="step__title">Build fullstack dApp</h4>
                    <p className="step__description">
                      Use icdApp to build your fullstack dApp based on your project description.
                    </p>
                    <div className="code-block">
                      <code>
                        icdApp builds your ICP fullstack dApp using your description and framework options provided.
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step">
                  <div className="step__number">4</div>
                  <div className="step__content">
                    <h4 className="step__title">Build and Deploy</h4>
                    <p className="step__description">Build your project and deploy to ICP network.</p>
                    <div className="code-block">
                      <code>Build your project and deploy locally or to IC mainnet</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="best-practices">
              <h3 className="best-practices__title">Best Practices</h3>
              <ul className="best-practices__list">
                <li>• Always test your code locally before deploying to mainnet</li>
                <li>• Use version control (Git) to track your changes</li>
                <li>• Keep your project description detailed for better AI code generation</li>
                <li>• Review and customize generated code to match your requirements</li>
                <li>• Monitor your canister cycles and performance</li>
              </ul>
            </div>
          </div>
        )

      case "troubleshooting":
        return (
          <div className="content-section">
            <h2 className="section-title">Troubleshooting</h2>

            <div className="troubleshooting-accordion">
              <div className="accordion" onClick={() => toggleAccordion("troubleshooting")}>
                <div className="accordion__header">
                  <h3 className="accordion__title">Common Issues & Solutions</h3>
                  {openAccordions.troubleshooting ? (
                    <ChevronDown className="accordion__icon" />
                  ) : (
                    <ChevronRight className="accordion__icon" />
                  )}
                </div>

                {openAccordions.troubleshooting && (
                  <div className="accordion__content">
                    <div className="issue issue--error">
                      <h4 className="issue__title">Extension Not Loading</h4>
                      <p className="issue__description">If the extension doesn't appear in VSCode:</p>
                      <ul className="issue__solutions">
                        <li>• Restart VSCode completely</li>
                        <li>• Check if extension is enabled in Extensions panel</li>
                        <li>• Update VSCode to latest version</li>
                        <li>• Reinstall the extension</li>
                      </ul>
                    </div>

                    <div className="issue issue--warning">
                      <h4 className="issue__title">dfx Command Not Found</h4>
                      <p className="issue__description">If dfx commands fail:</p>
                      <div className="code-block">
                        <code>
                          # Reinstall DFINITY SDK&lt;br/&gt; sh -ci &quot;$(curl -fsSL
                          https://sdk.dfinity.org/install.sh)&quot;&lt;br/&gt;&lt;br/&gt; # Add to PATH&lt;br/&gt; echo
                          &apos;export PATH=&quot;$HOME/bin:$PATH&quot;&apos; &gt;&gt; ~/.bashrc&lt;br/&gt; source
                          ~/.bashrc
                        </code>
                      </div>
                    </div>

                    <div className="issue issue--info">
                      <h4 className="issue__title">AI Code Generation Fails</h4>
                      <p className="issue__description">If AI code generation doesn&apos;t work:</p>
                      <ul className="issue__solutions">
                        <li>• Check your internet connection</li>
                        <li>• Verify API configuration in extension settings</li>
                        <li>• Try with a simpler project description</li>
                        <li>• Check extension logs for error details</li>
                      </ul>
                    </div>

                    <div className="issue issue--purple">
                      <h4 className="issue__title">Deployment Errors</h4>
                      <p className="issue__description">If deployment fails:</p>
                      <ul className="issue__solutions">
                        <li>
                          • Ensure dfx is running: <code>dfx start</code>
                        </li>
                        <li>• Check canister cycles balance</li>
                        <li>• Verify network connectivity</li>
                        <li>• Review build logs for compilation errors</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="help-section">
              <h3 className="help-section__title">Getting Help</h3>
              <div className="help-grid">
                <div>
                  <h4 className="help-category">Documentation</h4>
                  <ul className="help-links">
                    <li>
                      <a href="#" className="help-link">
                        Official Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="help-link">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="#" className="help-link">
                        Video Tutorials
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="help-category">Community</h4>
                  <ul className="help-links">
                    <li>
                      <a href="#" className="help-link">
                        GitHub Issues
                      </a>
                    </li>
                    <li>
                      <a href="#" className="help-link">
                        Discord Community
                      </a>
                    </li>
                    <li>
                      <a href="#" className="help-link">
                        Stack Overflow
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="debug-section">
              <h3 className="debug-section__title">Debug Mode</h3>
              <p className="debug-section__description">
                Enable debug mode to get detailed logs and troubleshooting information:
              </p>
              <div className="code-block">
                <code>
                  # Open VSCode settings&lt;br/&gt; Ctrl+, → Search &quot;icdApp Debug&quot; → Enable Debug
                  Mode&lt;br/&gt;&lt;br/&gt; # View debug logs&lt;br/&gt; Ctrl+Shift+P → &quot;icdApp: Show Debug
                  Logs&quot;
                </code>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="app">
      <div className="header">
        <div className="header__container">
          <div className="header__content">
            <div className="header__brand">
              <div className="logo">
                <Code className="logo__icon" />
              </div>
              <div className="brand-info">
                <h1 className="brand-title">icdApp</h1>
                <p className="brand-subtitle">VSCode Extension Documentation</p>
              </div>
            </div>
            <div className="header__actions">
              <span className="version-badge">v1.0.0</span>
              <button onClick={openVSCodeExtension} className="btn btn--primary btn--small btn--with-icon">
                <ExternalLink className="btn__icon" />
                Open Extension
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main-content">
          <div className="sidebar">
            <div className="nav-card">
              <h2 className="nav-title">Navigation</h2>
              <nav className="nav-menu">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`nav-item ${activeSection === section.id ? "nav-item--active" : ""}`}
                    >
                      <Icon className="nav-icon" />
                      {section.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          <div className="content">
            <div className="content-card">{renderContent()}</div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__section">
              <h3 className="footer__title">Quick Links</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__title">Community</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__title">Support</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Report Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Feature Requests
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2025 icdApp. Built for the Internet Computer ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App