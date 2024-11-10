var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-showcase");
// Handle form Submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var profilePicture = (_a = document.getElementById("profile-picture").files) === null || _a === void 0 ? void 0 : _a[0];
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var aboutMe = document.getElementById("about").value;
    var skills = document.getElementById("skills").value;
    var language = document.getElementById("language").value;
    var education = document.getElementById("education").value.replace(/\n/g, "<br>");
    var experience = document.getElementById("experience").value.replace(/\n/g, "<br>");
    var project = document.getElementById("project").value.replace(/\n/g, "<br>");
    // Generate resume HTML with two-column layout and bordered sections
    var resumeHTML = "\n    <div class=\"resume-container\">\n        <div class=\"left-section\">\n            ".concat(profilePicture ? "<img id=\"profile-pic\" alt=\"Profile Picture\">" : "", "\n            <h2 contenteditable=\"true\">").concat(name, "</h2>\n            <p class=\"profession-cen\" contenteditable=\"true\"").concat(profession, "</p>\n            <h3 class=\"border\">CONTACT</h3>\n            <p class=\"text-color\" contenteditable=\"true\">\uD83D\uDCDE&nbsp;&nbsp;").concat(number, "</p>\n            <p class=\"text-color\" contenteditable=\"true\">\u2709\uFE0F&nbsp;&nbsp;").concat(email, "</p>\n            <p class=\"text-color\" contenteditable=\"true\">\uD83D\uDCCD&nbsp;&nbsp;").concat(location, "</p>\n            <h3 class=\"border\">ABOUT ME</h3>\n            <p class=\"text-color\" contenteditable=\"true\">").concat(aboutMe, "</p>\n            <h3 class=\"border\">SKILLS</h3>\n            <p class=\"text-color\" contenteditable=\"true\">").concat(skills, "</p>\n            <h3 class=\"border\">LANGUAGES</h3>\n            <p class=\"text-color\" contenteditable=\"true\">").concat(language, "</p>\n        </div>\n        \n        <div class=\"right-section\">\n            <div class=\"section-container\">\n                <h3>EDUCATION</h3>\n                <p contenteditable=\"true\">").concat(education, "</p>\n            </div>\n            <div class=\"section-container\">\n                <h3>EXPERIENCE</h3>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n            </div>\n            <div class=\"section-container\">\n                <h3>PROJECTS</h3>\n                <p contenteditable=\"true\">").concat(project, "</p>\n            </div>\n        </div>\n    </div>");
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            resumeHTML = resumeHTML.replace("<img id=\"profile-pic\" alt=\"Profile Picture\">", "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; border-radius:50%;\">"));
            displayResume(resumeHTML);
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        displayResume(resumeHTML);
    }
});
// Function to display the resume HTML
function displayResume(resumeHTML) {
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = "block"; // Show resume display
        document.body.style.backgroundColor = "#ffffff"; // Change body background on resume view
    }
    else {
        console.error("The resume display element is missing.");
    }
}
