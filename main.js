let chartsBox = document.querySelector(".body__charts");

// Fetch Data:
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((entry) => {
      let newChartBox = document.createElement("span");
      let chartData = document.createElement("span");
      let newChart = document.createElement("span");
      let chartDay = document.createElement("span");

      newChartBox.className = `chart-wrapper ${entry["day"]}`;
      chartData.setAttribute(
        "data-amount",
        +entry["amount"].toFixed(2)
      );
      chartData.className = "data";
      newChart.className = "chart";
      chartDay.className = "day";
      chartDay.innerHTML = entry["day"];
      newChart.style.minHeight = `${Math.ceil(
        entry["amount"] * 2.86
      )}px`;

      newChartBox.appendChild(chartData);
      newChartBox.appendChild(newChart);
      newChartBox.appendChild(chartDay);

      chartsBox.appendChild(newChartBox);
    });

    let compare = data.sort(
      (a, b) => b["amount"] - a["amount"]
    );

    document
      .querySelector(`.${compare[0]["day"]}`)
      .classList.add("highest");
  });
