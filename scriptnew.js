// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateUserProfile();
});

function updateUserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');

    if (currentUser && authButtons && userProfile) {
        authButtons.classList.add('hidden');
        userProfile.classList.add('active');
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    window.location.href = 'indexnew.html';
}
