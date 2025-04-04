# Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, resume, and contact information. Built with HTML, Tailwind CSS, and JavaScript, this portfolio is designed to provide a professional online presence for developers, designers, or anyone looking to highlight their work.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
You can view a live demo of the portfolio [here](#) (replace with the actual URL if hosted online, e.g., on GitHub Pages, Netlify, or Vercel).

## Features
- **Responsive Design**: Fully responsive layout that works on desktops, tablets, and mobile devices.
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections.
- **Interactive Elements**:
  - Hover effects on navigation items, buttons, and project cards.
  - Animated text and project cards on scroll.
- **Sections**:
  - **Hero**: Introduction with a profile photo and a "Get in Touch" button.
  - **About**: Details about experience, education, interests, and skills with progress bars.
  - **Projects**: Filterable project cards with links to GitHub and live demos.
  - **Resume**: Timeline-style work experience and educational background, with certifications and a downloadable CV.
  - **Contact**: Contact information and a form for sending messages.
- **Downloadable CV**: Button to download a CV in `.doc` format.
- **Social Links**: Footer with links to LinkedIn, GitHub, and Twitter.

## Technologies Used
- **HTML5**: For the structure of the website.
- **Tailwind CSS (v2.2.19)**: For styling and responsive design.
- **JavaScript**: For interactivity (smooth scrolling, animations, CV download).
- **Feather Icons**: For lightweight icons in the navigation and footer.
- **Google Fonts (Poppins)**: For typography.

## Setup Instructions
Follow these steps to set up and run the portfolio on your local machine.

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local server to serve the files (e.g., `http-server` via Node.js, Python’s `http.server`, or a code editor like VS Code with a live server extension).

### Steps
1. **Clone or Download the Repository**:
   - If using Git, clone the repository:
     ```bash
     git clone https://github.com/bravonokoth/Hackathon_personal_portfolio
     ```
   - Alternatively, download the ZIP file and extract it to a folder (e.g., `Hackathon_personal_portfolio`).

2. **Navigate to the Project Folder**:
   - Open your terminal and navigate to the project directory:
     ```bash
     cd path/to/Hackathon_personal_portfolio
     ```

3. **Serve the Project**:
   - **Option 1: Using `http-server` (Node.js)**:
     - Install `http-server` globally if you haven’t already:
       ```bash
       npm install -g http-server
       ```
     - Start the server:
       ```bash
       http-server
       ```
     - Open your browser and go to `http://localhost:8080`.

   - **Option 2: Using Python**:
     - Start a local server using Python:
       ```bash
       python3 -m http.server 8080
       ```
     - Open your browser and go to `http://localhost:8080`.

   - **Option 3: Using VS Code Live Server**:
     - Open the project in VS Code.
     - Install the "Live Server" extension.
     - Right-click on `index.html` and select "Open with Live Server".

4. **View the Portfolio**:
   - The portfolio should now be running locally. Navigate through the sections using the menu at the top.

## Usage
- **Navigation**: Use the fixed navigation bar at the top to jump to different sections (Home, About, Projects, Resume, Contact).
- **Projects**: Click the filter buttons (All, Frontend, Backend, Fullstack) to view specific project categories (note: filtering functionality requires additional JavaScript implementation).
- **Resume**: View your work experience, educational background, and certifications. Click the "Download CV" button to download your CV (ensure `cv.doc` is in the project folder).
- **Contact**: Fill out the form to send a message (note: form submission requires a backend to handle the data).

## File Structure
Hackathon_personal_portfolio/
│
├── index.html         # Main HTML file containing the portfolio structure
├── style.css          # Project Style
├── script.js          # JavaScript file for interactivity (smooth scrolling, animations, CV download)
├── cv.doc             # Placeholder for the downloadable CV file (replace with your actual CV)
└── README.md          # Project documentation


- **External Dependencies** (loaded via CDN in `index.html`):
  - Tailwind CSS: `https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css`
  - Feather Icons: `https://unpkg.com/feather-icons`
  - Google Fonts (Poppins): `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap`

## Customization
To personalize the portfolio, you can modify the following:

1. **Update Personal Information**:
   - Replace `[Your Name]` in the Hero section with your actual name.
   - Update the About section with your experience, education, interests, and skills.
   - Add your projects in the Projects section with relevant details and links.
   - Update the Resume section with your work experience, educational background, and certifications.
   - Add your contact information in the Contact section.

2. **Replace the Profile Photo**:
   - Replace the placeholder image (`https://via.placeholder.com/300`) in the Hero section with your actual profile photo:
     ```html
     <img src="path/to/your-photo.jpg" alt="Profile Photo" class="w-full h-full object-cover">
     ```

3. **Update the CV File**:
   - Replace `cv.doc` with your actual CV file in the project folder.
   - Update the `script.js` file to point to the correct file name if necessary:
     ```javascript
     link.href = 'cv-file.doc';
     link.download = 'Name_CV.doc';
     ```

4. **Styling**:
   - Modify the colors, fonts, and spacing by adjusting the Tailwind classes in `index.html`.
   - Example: Change the Hero section’s gradient background:
     ```html
     <section id="hero" class="h-screen w-full flex items-center justify-center px-16 bg-gradient-to-r from-green-400 to-teal-500 text-white">
     ```

5. **Add More Features**:
   - Add a backend to handle form submissions in the Contact section (e.g., using Node.js, Express, and a service like SendGrid for emails).
   - Implement project filtering in the Projects section using JavaScript.

## Contributing
Contributions are welcome! If you’d like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.



## Contact
For questions, suggestions, or feedback, feel free to reach out:
- **Email**: bravonorwa@gmail.com
- **GitHub**: [Github/bravonokoth](#)

---

