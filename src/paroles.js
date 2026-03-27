function showParolesSection(name, btn) {
    document.querySelectorAll('.paroles-section').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.paroles-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('psec-' + name).classList.add('visible');
    btn.classList.add('active');
}

function toggleParolesInt(id) {
    document.getElementById(id).classList.toggle('open');
}