document.addEventListener('DOMContentLoaded', function () {
    var profileIcon = document.getElementById('profileIcon');
    var profileDropdown = document.getElementById('profileDropdown');
  
    profileIcon.addEventListener('click', function () {
      profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    window.addEventListener('click', function (event) {
      if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.style.display = 'none';
      }
    });
  });