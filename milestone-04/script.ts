const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-showcase") as HTMLDivElement;

// Handle form Submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const profilePicture = (document.getElementById("profile-picture") as HTMLInputElement).files?.[0];
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;
    const number = (document.getElementById("number") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const aboutMe = (document.getElementById("about") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const language = (document.getElementById("language") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value.replace(/\n/g, "<br>");
    const experience = (document.getElementById("experience") as HTMLInputElement).value.replace(/\n/g, "<br>");
    const project = (document.getElementById("project") as HTMLInputElement).value.replace(/\n/g, "<br>");

    // Generate resume HTML with two-column layout and bordered sections
    let resumeHTML = `
    <div class="resume-container">
        <div class="left-section">
            ${profilePicture ? `<img id="profile-pic" alt="Profile Picture">` : ""}
            <h2 contenteditable="true">${name}</h2>
            <p class="profession-cen" contenteditable="true"${profession}</p>
            <h3 class="border">CONTACT</h3>
            <p class="text-color" contenteditable="true">📞&nbsp;&nbsp;${number}</p>
            <p class="text-color" contenteditable="true">✉️&nbsp;&nbsp;${email}</p>
            <p class="text-color" contenteditable="true">📍&nbsp;&nbsp;${location}</p>
            <h3 class="border">ABOUT ME</h3>
            <p class="text-color" contenteditable="true">${aboutMe}</p>
            <h3 class="border">SKILLS</h3>
            <p class="text-color" contenteditable="true">${skills}</p>
            <h3 class="border">LANGUAGES</h3>
            <p class="text-color" contenteditable="true">${language}</p>
        </div>
        
        <div class="right-section">
            <div class="section-container">
                <h3>EDUCATION</h3>
                <p contenteditable="true">${education}</p>
            </div>
            <div class="section-container">
                <h3>EXPERIENCE</h3>
                <p contenteditable="true">${experience}</p>
            </div>
            <div class="section-container">
                <h3>PROJECTS</h3>
                <p contenteditable="true">${project}</p>
            </div>
        </div>
    </div>`;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target?.result as string;
            resumeHTML = resumeHTML.replace(
                `<img id="profile-pic" alt="Profile Picture">`,
                `<img src="${imageUrl}" alt="Profile Picture" style="width:150px; height:150px; border-radius:50%;">`
            );
            displayResume(resumeHTML);
        };
        reader.readAsDataURL(profilePicture);
    } else {
        displayResume(resumeHTML);
    }
});

// Function to display the resume HTML
function displayResume(resumeHTML: string) {
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = "block"; // Show resume display
        document.body.style.backgroundColor = "#ffffff"; // Change body background on resume view
    } else {
        console.error("The resume display element is missing.");
    }
}
