import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div>
          <h2>VS Code setup process</h2>
          <div className="text-start py-4">
            <p>1. Download VS Code:</p>
            <p>
              <span>Installation of vs code</span> Windows: Run the downloaded
              .exe file. Follow the installation wizard. You can keep the
              default settings or customize the installation. Click on "Finish"
              when done.
            </p>
            <p>
              Step 2: Open VS Code After installation, open VS Code from your
              Start Menu, Applications folder, or using the terminal/command
              line.
            </p>
            <p>
              Step 3: Install Essential Extensions Extensions enhance the
              functionality of VS Code. Here are some commonly used extensions:
              Open Extensions View: Click on the Extensions icon in the Activity
              Bar on the side of the window. Alternatively, use the shortcut:
              Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (macOS). Search and
              Install Extensions: Prettier - Code Formatter: For automatic code
              formatting. Search for Prettier - Code formatter and click
              Install. ESLint: For identifying and fixing linting issues. Search
              for ESLint and click Install. Python: If you work with Python.
              Search for Python and click Install. GitLens: For enhanced Git
              capabilities. Search for GitLens and click Install. Live Server:
              For a quick local server for development. Search for Live Server
              and click Install.
            </p>
            <p>
              Step 4: Configure VS Code Open Settings: Click on the gear icon in
              the bottom left corner and select Settings. Alternatively, use the
              shortcut: Ctrl+Comma (Windows/Linux) or Cmd+Comma (macOS). Common
              Settings to Configure: Auto Save: Search for auto save and set it
              to afterDelay or onFocusChange based
            </p>
          </div>
        </div>
        <div>
          <h2>Github setup process</h2>
          <div className="text-start py-4">
            <p>
              Sign Up: Go to the GitHub website. Click on Sign up and follow the
              instructions to create a new account.
            </p>
            <p>
              Step 2: Install Git Download Git: Go to the Git downloads page.
              Download the appropriate version for your operating system.
              Install Git: Follow the installation instructions for your
              operating system. Windows: Run the downloaded .exe file and follow
              the setup instructions. macOS: You can use Homebrew: brew install
              git. Linux: Use your distributions package manager, for example,
              sudo apt install git for Debian-based distributions. Verify
              Installation: Open a terminal or command prompt. Run git --version
              to verify that Git is installed. Step 3: Configure Git Set Up User
              Information: Open a terminal or command prompt. Configure your
              username and email with the following commands:
            </p>
          </div>
        </div>
        <div>
          <h2>Python setup</h2>
          <div className="text-start py-4">
            <p>
              Step 1: Download Python Go to the Python Downloads Page: Visit the
              official Python website. Click on the "Downloads" menu and select
              "Windows". Download the Installer: Download the latest stable
              release of Python for Windows. This will usually be a file named
              something like python-3.x.x-amd64.exe.
            </p>
            <p>
              Step 2: Install Python Run the Installer: Locate the downloaded
              file and double-click it to start the installation process.
              Customize Installation: Check the Box to Add Python to PATH: At
              the bottom of the first installation screen, make sure to check
              the box that says "Add Python 3.x to PATH". Click on "Customize
              installation" if you want to customize the installation location
              or select optional features. Select Optional Features: By default,
              the installer will select some optional features. Ensure that
              "pip" and "IDLE" are checked. You can also check "Documentation"
              and "tcl/tk and IDLE" if you want to include these. Advanced
              Options: In the next screen, you can choose advanced options. By
              default, the options for installing Python for all users and
              associating .py files with Python are selected. Click on "Install"
              to begin the installation. Complete Installation: The installer
              will now install Python and its components. Once the installation
              is complete, click "Close".
            </p>
            <p>
              Step 3: Verify Installation Open Command Prompt: Press Win + R,
              type cmd, and press Enter to open the Command Prompt. Check Python
              Version: then check pip version
            </p>
            <p>
              Step 4: Set Up a Virtual Environment (Optional but Recommended)
              Create a Project Directory: Navigate to the directory where you
              want to create your project. Create a Virtual Environment,
              Activate the Virtual Environment,Deactivate the Virtual
              Environment
            </p>
            <p>
              Step 5: Install Packages Install Packages Using pip: With your
              virtual environment activated, you can install packages using pip
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
