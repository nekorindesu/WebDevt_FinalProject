// Web Development - Final Project || BSIT 3-1 || Magno, Katherine | Nilooban, Nathaniel | Tegio, Irish
function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        console.error('Section not found:', sectionId);
    }
}

// PERSONAL INFORMATION VALIDATION
let sAge = 0;
function validatePIForm() {
    // Check if name is in correct format
    // First Name
    var firstName = document.getElementById("fname").value;
    if (!isAlpha(firstName)) {
        alert("Invalid First Name! Name should contain only alphabetical characters.");
        return false;
    }
    // Middle Name
    var middleName = document.getElementById("mname").value;
    if(middleName !== ""){
        if(!isAlpha(middleName)){
            alert("Invalid Middle Name! Name should contain only alphabetical characters.");
            return false;
        }
    }
    // Surname
    var lastName = document.getElementById("sname").value;  
    if (!isAlpha(lastName)) {
        alert("Invalid Surname! Name should contain only alphabetical characters.");
        return false;
    }

    // Check if a gender is selected
    var genderMale = document.getElementById("m");
    var genderFemale = document.getElementById("f");
    if (!genderMale.checked && !genderFemale.checked) {
        alert("Please select a gender!");
        return false;
    }

    // Validate age and birthday
    var age = parseInt(document.getElementById("age").value, 10);
    sAge = age;
    var birthday = new Date(document.getElementById("bday").value);
    var today = new Date();

    // Check if the birthday is in the future
    if (birthday > today) {
        alert("Invalid birthday!");
        return false;
    }

    // Calculate age based on the difference in years
    var ageFromDate = today.getFullYear() - birthday.getFullYear();
    // Adjust age based on the birthdate in the current year
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        ageFromDate--;
    }

    // Check if the calculated age matches the entered age
    if (isNaN(age) || ageFromDate !== age) {
        alert("Age and birthday don't match! Please check and try again.");
        return false;
    }

    // Check if the place of birth is in correct format
    var birthplace = document.getElementById("bplace").value;
    if(!isValidAddress(birthplace)){
        alert("Please enter a valid place of birth address.");
        return false;
    }

    // Check if civil status has been selected
    var civStatus = document.getElementById("cstatus").value;
    if (civStatus == "Select") {
        alert("Please select your Civil Status.");
        return false;
    }

    // Check if religion is in correct format
    var religion = document.getElementById("religion").value;
    if (!isAlpha(religion)) {
        alert("Invalid Religion! Religion should contain only alphabetical characters.");
        return false;
    }

    // Validate course, year, and section input format
    // Course
    var course = document.getElementById("course").value;
    if(!isAlpha(course)){
        alert("Invalid Course! Course should contain only alphabetical characters.");
        return false;
    }
    // Year
    var year = document.getElementById("year").value;
    const yearRegex = /^[1-5](st|nd|rd|th)$/;
    if(!yearRegex.test(year)){
        alert("Invalid Year! Please follow the format (e.g., 1st, 2nd)");
        return false;
    }
    // Section
    var section = document.getElementById("section").value;
    const sectionRegex = /^[1-5](N)?$/;
    if(!sectionRegex.test(section)){
        alert("Invalid Section! Please follow the format (e.g., 1, 1N, 2N)");
        return false;
    }

    // Check if Complexion has been selected
    var complexion = document.getElementById("complexion").value;
    if (complexion == "Select") {
        alert("Please select your complexion.");
        return false;
    }

    // Check if addresses are in correct format
    var cityAdd = document.getElementById("cadd").value;
    // City Address
    if(!isValidAddress(cityAdd)){
        alert("Please enter a valid city address.");
        return false;
    }
    // Provincial Address
    var provAdd = document.getElementById("padd").value;
    if(provAdd !== ""){
        if(!isValidAddress(provAdd)){
            alert("Please enter a valid provincial address.");
            return false;
        }
    }

    // Check if email is in correct format
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    // Check if telephone number is in correct format
    var telephone = document.getElementById("telno").value;
    if(telephone !== ""){
        const telephoneRegex = /(\(\d{2}\)\s\d{4}-\d{4})/;
        if(!telephoneRegex.test(telephone)){
            alert("Invalid telephone number! Please follow the format ((xx) xxxx-xxxx)");
            return false;
        }
    }

    // Check if mobile number is in correct format
    var mobile = document.getElementById("mobno").value;
    const mobileRegex = /^09\d{9}$/;
    if(!mobileRegex.test(mobile)){
        alert("Invalid mobile number! Please follow the format (09xxxxxxxxx)");
        return false;
    }

    // Check if emergency contact name is in correct format
    var emercon = document.getElementById("emercon").value;
    if (!isAlpha(emercon)) {
        alert("Invalid Emergency Contact Name! Name should contain only alphabetical characters.");
        return false;
    }
    
    // Check if emergency contact address is in correct format
    var add = document.getElementById("add").value;
    if(!isValidAddress(add)){
        alert("Please enter a valid emergency contact address.");
        return false;
    }
    
    // Check if mobile number is in correct format
    var mob = document.getElementById("mobnum").value;
    const mobRegex = /^09\d{9}$/;
    if(!mobRegex.test(mob)){
        alert("Invalid mobile number! Please follow the format (09xxxxxxxxx)");
        return false;
    }

    // Check if relationship is in correct format
    var relationship = document.getElementById("rel").value;
    if (!isAlpha(relationship)) {
        alert("Invalid Relationship! Relationship should contain only alphabetical characters.");
        return false;
    }

    // If the optional fields are left blank, set their value as "N/A"
    // Middle Name
    if (middleName.trim() === "") {
        document.getElementById("mname").value = "N/A";
    }
    // Provincial Address
    if (provAdd.trim() === "") {
        document.getElementById("padd").value = "N/A";
    }
    // Telephone Number
    if (telephone.trim() === "") {
        document.getElementById("telno").value = "N/A";
    }

    return true;
}

// Helper function to check if a string contains only alphabetical characters
function isAlpha(str) {
    return /^[a-zA-Z\s'-]+$/.test(str);
}

// Helper function to check if the address is in the correct format
function isValidAddress(str) {
    return /^[a-zA-Z0-9\s.,'-]+$/.test(str);
}

function PIValidateAndRedirect() {
    if (validatePIForm()) {
        alert("Submitting form... please wait a second.");
        // Use AJAX to submit the form data
        var formData = new FormData(document.getElementById("pi"));
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbztJwM0ciJn3R-0Kfk-qMQ7NFDbcZxA1qSxisKwQtWgv9ZcZJLg1FUJc6c6Fz4ofzrV/exec");
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Assuming a successful response means the data was submitted
                alert("Congratulations! You have successfully submitted your Personal Information.");
                toggleSection('section2'); // Redirect to the next page (home and family background page)
            } else {
                // Handle errors here
                alert("Error submitting form. Please try again.");
            }
        };
        xhr.send(formData);
        // Prevent the default form submission
        return false;
    } else {
        // Prevent the form submission if validation fails
        return false;
    }
}

// Event listner to set the max for birthday as today
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("bday").setAttribute("max", today);
});

function validateHFBForm() {
    // Check if father's name is in correct format
    var fatherName = document.getElementById("father-name").value;
    if (!isAlpha(fatherName)) {
        alert("Invalid Father's Name! Name should contain only alphabetical characters.");
        return false;
    }

    // Check if father's age is valid
    var sAge = parseInt(document.getElementById("age").value);
    var fatherAge = parseInt(document.getElementById("father-age").value);
    if (sAge > fatherAge) {
        alert("Father's age cannot be lower than the Student's Age.");
        return false;
    }
    
    // Check if father's status has been checked
    var fatherLiving = document.getElementById("father-living");
    var fatherDeceased = document.getElementById("father-deceased");
    if (!fatherLiving.checked && !fatherDeceased.checked) {
        alert("Please select your Father's Status.");
        return false;
    }

    // Check if father's educational attainment has been selected
    var fatherStatus = document.getElementById("father-education").value;
    if (fatherStatus == "Select") {
        alert("Please select your father's educational attainment.");
        return false;
    }

    // Check if father's occupation is in correct format
    var fatherOccupation = document.getElementById("father-occupation").value;
    if (!isAlpha(fatherOccupation)) {
        alert("Invalid Father's Occupation! Occupation should contain only alphabetical characters.");
        return false;
    }

    // Check if mother's name is in correct format
    var motherName = document.getElementById("mother-name").value;
    if (!isAlpha(motherName)) {
        alert("Invalid Mother's Name! Name should contain only alphabetical characters.");
        return false;
    }

    // Check if mother's age is valid
    var motherAge = parseInt(document.getElementById("mother-age").value);
    if (sAge > motherAge) {
        alert("Mother's age cannot be lower than the Student's Age.");
        return false;
    }
    
    // Check if mother's status has been checked
    var motherLiving = document.getElementById("mother-living");
    var motherDeceased = document.getElementById("mother-deceased");
    if (!motherLiving.checked && !motherDeceased.checked) {
        alert("Please select your Mother's Status.");
        return false;
    }

    // Check if mother's educational attainment has been selected
    var motherStatus = document.getElementById("mother-education").value;
    if (motherStatus == "Select") {
        alert("Please select your mother's educational attainment.");
        return false;
    }

    // Check if mother's occupation is in correct format
    var motherOccupation = document.getElementById("mother-occupation").value;
    if (!isAlpha(motherOccupation)) {
        alert("Invalid Mother's Occupation! Occupation should contain only alphabetical characters.");
        return false;
    }
    
    // Check guardian's information
    // Check if the guardian name is not blank
    var guardianName = document.getElementById("guardian-name").value;
    if(guardianName !== ""){
        // Check if guardian's name is in correct format
        if (!isAlpha(guardianName)) {
            alert("Invalid Guardian's Name! Name should contain only alphabetical characters.");
            return false;
        } 

        // If there is a guardian name, send an alert to fill in all guardian-related fields if left blank
        var guardianAge = document.getElementById("guardian-age").value;
        var guardianRelation = document.getElementById("guardian-relation").value;
        var guardianEducation = document.getElementById("guardian-education").value;
        var guardianOccupation = document.getElementById("guardian-occupation").value;
        if (guardianAge === "" || guardianRelation === "" || guardianEducation === "" || guardianOccupation === "") {
            alert("Please fill in all guardian-related fields when the Guardian's Name is entered.");
            return false;
        }
    }

    // Check if guardian's age is valid
    var guardianAge = parseInt(document.getElementById("guardian-age").value);
    if(guardianAge !== ""){
        if (sAge > guardianAge) {
            alert("Guardian's age cannot be lower than the Student's Age.");
            return false;
        }
    }

    // Check if guardian's relation is in correct format
    var guardianRelation = document.getElementById("guardian-relation").value;
    if(guardianRelation !== ""){
        if (!isAlpha(guardianRelation)) {
            alert("Invalid Guardian's Relation! Relation should contain only alphabetical characters.");
            return false;
        }
    }

    // Check if guardian's occupation is in correct format
    var guardianOccupation = document.getElementById("guardian-occupation").value;
    if(guardianOccupation !== ""){
        if (!isAlpha(guardianOccupation)) {
            alert("Invalid Guardian's Occupation! Occupation should contain only alphabetical characters.");
            return false;
        }
    }

    // Check if parents' marital relationship has been selected
    var mrelationship = document.getElementById("mrelationship").value;
    if(mrelationship !== ""){
        if (mrelationship == "Select") {
            alert("Please select your Parents' Marital Relationship.");
            return false;
        }
    }

    // Check if number of children matches with number of brothers and sisters
    var children = parseInt(document.getElementById("total-children").value);
    var brothers = parseInt(document.getElementById("brothers-count").value);
    var sisters = parseInt(document.getElementById("sisters-count").value);
    if ((children - 1) != (brothers + sisters)) {
        alert("Number of children does not match number of brothers and sisters.");
        return false;
    }

    // Check if employed children is greater than the number of children
    var empsib = parseInt(document.getElementById("employed-siblings-count").value);
    if (empsib > (brothers + sisters)) {
        alert("Number of employed children does not match total number siblings.");
        return false;
    }

    // Check if ordinal position is in correct format
    var position = document.getElementById("ordinal-position").value;
    const positionRegex = /^[1-9]\d*(st|nd|rd|th) child$/i;
    if(!positionRegex.test(position)){
        alert("Invalid ordinal position! Please follow the format (1st child)");
        return false;
    }

    // If the optional fields are left blank, set their value as "N/A"
    // Guardian's Name
    if (guardianName.trim() == "") {
        document.getElementById("guardian-name").value = "N/A";
    }
    // Guardian's Age
    if (guardianAge == "") {
        document.getElementById("guardian-age").value = "N/A";
    }
    // Guardian's Relation
    if (guardianRelation.trim() == "") {
        document.getElementById("guardian-relation").value = "N/A";
    }
    // Guardian's Educational Attainment
    var guardianEducation = document.getElementById("guardian-education").value;
    if (guardianEducation === "Select") {
        document.getElementById("guardian-education").value = "N/A";
    }
    // Guardian's Occupation
    if (guardianOccupation.trim() == "") {
        document.getElementById("guardian-occupation").value = "N/A";
    }

    return true;
}


function HFBValidateAndRedirect() {
    if (validateHFBForm()) {
        alert("Submitting form... please wait a second."); // You can replace this with your loading indicator logic
        // Use AJAX to submit the form data
        var formData = new FormData(document.getElementById("hfb"));
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbztNAoIy1KPdlZ-3VkpAemI808aZ7uZJbNWNLxaV-GwtQdanmfIPUhUfx_0dSrSZyjP/exec");
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Assuming a successful response means the data was submitted
                alert("Congratulations! You have successfully submitted your Home and Family Background.");
                toggleSection('section3'); // Redirect to the next page (hobbies and interests page)
            } else {
                // Handle errors here
                alert("Error submitting form. Please try again.");
            }
        };
        xhr.send(formData);
        // Prevent the default form submission
        return false;
    } else {
        // Prevent the form submission if validation fails
        return false;
    }
}
 
function validateIHForm() {
    // Academic Part
    var mathClub = document.getElementById("math-club");
    var scienceClub = document.getElementById("science-club");
    var debatingClub = document.getElementById("debating-club");
    var quizzersClub = document.getElementById("quizzers-club");
    var otherClub = document.getElementById("others-club-text").value;
    if ((!mathClub.checked && !scienceClub.checked && !debatingClub.checked && !quizzersClub.checked) && otherClub == "") {
        alert("Please enter atleast one(1) input for the Academic Section");
        return false;
    }

    // Extra-curricular
    // Hobbies
    var hobby1 = document.getElementById("hobby1").value;
    if (hobby1 == "") {
        alert("Please input at least one(1) hobby");
        return false;
    }

    // Organizaitons
    var athletics = document.getElementById("athletics");
    var religiousOrg = document.getElementById("religious-org");
    var gleeClub = document.getElementById("glee-club");
    var dramatics = document.getElementById("dramatics");
    var chess = document.getElementById("chess-club");
    var scouting = document.getElementById("scouting");
    var otherOrgs = document.getElementById("others-org-text").value;
    if (!athletics.checked && !religiousOrg.checked && !gleeClub.checked && !dramatics.checked && !chess.checked && !scouting.checked && otherOrgs == "") {
        alert("Please pick or enter at least one(1) Organizations.");
        return false;
    }

    // Organization Position
    var orgOfficer = document.getElementById("org-officer");
    var orgMember = document.getElementById("org-member");
    var orgOtherPos = document.getElementById("others-org-position-text").value;
    if (!orgOfficer.checked && !orgMember.checked && orgOtherPos == "") {
        alert("Please pick or type in a Position.");
        return false;
    }

    // If others is not filled in
    if (otherClub.trim() == "") {
        document.getElementById("others-club-text").value = "N/A";
    }
    // Insert N/A for hobbies not filled in
    var hobby2 = document.getElementById("hobby2").value;
    var hobby3 = document.getElementById("hobby3").value;
    var hobby4 = document.getElementById("hobby4").value;
    if (hobby2.trim() == "") {
        document.getElementById("hobby2").value = "N/A";
    }
    if (hobby3.trim() == "") {
        document.getElementById("hobby3").value = "N/A";
    }
    if (hobby4.trim() == "") {
        document.getElementById("hobby4").value = "N/A";
    }
    // If others is not filled in
    if (otherOrgs.trim() == "") {
        document.getElementById("others-org-text").value = "N/A";
    }
    if (orgOtherPos.trim() == "") {
        document.getElementById("others-org-position-text").value = "N/A";
    }

    return true;
}

function IHValidateAndRedirect() {
    if (validateIHForm()) {
        alert("Submitting form... please wait a second.");
        // Use AJAX to submit the form data
        var formData = new FormData(document.getElementById("academic-extra"));
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbyGSD7czChhRkJpCjGKNODKdNnSVm_nGpF6fln4gMhbNR4myGYsL004Wkrpnqg3BU5l/exec");
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Assuming a successful response means the data was submitted
                alert("Congratulations! You have successfully submitted your Interests and Hobbies.");
                window.location.href = "index.html"; // redirect back to the home page
            } else {
                // Handle errors here
                alert("Error submitting form. Please try again.");
            }
        };
        xhr.send(formData);
        // Prevent the default form submission
        return false;
    } else {
        // Prevent the form submission if validation fails
        return false;
    }
}