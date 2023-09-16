        // Transaction data (replace with your actual data)
        const transactionData = {
            labels: ["Income", "Expenses"],
            datasets: [{
                data: [2000, -950], // Example values
                backgroundColor: ["#007bff", "#dc3545"]
            }]
        };

        // Function to create and update the Donut Chart
        function updateDonutChart() {
            const ctx = document.getElementById("donutChart").getContext("2d");
            const donutChart = new Chart(ctx, {
                type: 'doughnut',
                data: transactionData,
                options: {
                    responsive: false, // Disable responsiveness
                    cutoutPercentage: 70
                }
            });
        }

        // Call the updateDonutChart function to create the initial chart
        updateDonutChart();