document.addEventListener('DOMContentLoaded', () => {
    const bus = document.getElementById('bus');
    const busStatus = document.getElementById('bus-status');
    const refreshBtn = document.getElementById('refresh-btn');

    let busPosition = 10; // Initial position in percentage

    function updateBusLocation() {
        // Simulate bus moving
        busPosition += 5;
        if (busPosition > 90) {
            busPosition = 10;
        }
        bus.style.left = `${busPosition}%`;
        busStatus.textContent = `En route, currently at ${busPosition}% of the journey.`;
    }

    refreshBtn.addEventListener('click', updateBusLocation);

    // Initial load
    updateBusLocation();
});