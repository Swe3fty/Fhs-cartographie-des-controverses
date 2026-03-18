// Initialiser le graphique quand la page charge
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('priceChart');
    if (!ctx) return;

    const ctx2d = ctx.getContext('2d');
    
    new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: [
                'Café Robusta\nstandard',
                'Café Arabica\nqualité',
                'Café Arabica\nspécialité',
                'Kona\n(Hawaii)',
                'Kopi Luwak\n(exploité)'
            ],
            datasets: [{
                label: 'Prix par kg (USD)',
                data: [2, 5, 12, 25, 300],
                backgroundColor: [
                    '#A6937C',
                    '#D9B589',
                    '#B8860B',
                    '#6B8E23',
                    '#260801'
                ],
                borderColor: [
                    '#8B7355',
                    '#C9A977',
                    '#A67C00',
                    '#5A7A1C',
                    '#1a0500'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#1a1a1a',
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 350,
                    ticks: {
                        color: '#6B5A4B',
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    grid: {
                        color: 'rgba(166, 147, 124, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: '#3E3430',
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
});