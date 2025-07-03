// FORFX Dashboard Data
const dashboardData = {
  "global_metrics": {
    "market_size": "$200B",
    "total_tam": "$131.5B", 
    "global_firms": "2,000+",
    "interest_growth": "607%"
  },
  "regional_data": [
  {"region": "Asia-Pacific", "market_size": 57.8, "growth": 21.2, "priority_score": 32.6, "internet_penetration": 75.3, "cac": 42, "regulations": 7, "trust_level": 5, "brand_awareness": 7},
  {"region": "Latin America", "market_size": 32.1, "growth": 18.5, "priority_score": 23.9, "internet_penetration": 72.8, "cac": 35, "regulations": 6, "trust_level": 5, "brand_awareness": 6},
  {"region": "MENA", "market_size": 15.2, "growth": 16.3, "priority_score": 21.4, "internet_penetration": 69.2, "cac": 48, "regulations": 7, "trust_level": 6, "brand_awareness": 7},
  {"region": "Western Europe", "market_size": 45.2, "growth": 8.4, "priority_score": 28.1, "internet_penetration": 88.5, "cac": 78, "regulations": 8, "trust_level": 7, "brand_awareness": 8},
  {"region": "North America", "market_size": 51.3, "growth": 7.2, "priority_score": 26.8, "internet_penetration": 91.2, "cac": 89, "regulations": 9, "trust_level": 7, "brand_awareness": 9}
  ],
  "country_data": [
  {"rank": 1, "country": "India", "opportunity_score": 9.1, "market_size": 8.42, "entry_difficulty": 6.8, "time_to_market": "8 months", "region": "Asia-Pacific", "tier": "Tier 1", "avg_cac": 190, "competition_level": 9},
  {"rank": 2, "country": "Kenya", "opportunity_score": 8.8, "market_size": 0.85, "entry_difficulty": 4.1, "time_to_market": "5 months", "region": "Africa", "tier": "Tier 1", "avg_cac": 15, "competition_level": 6},
  {"rank": 3, "country": "Mexico", "opportunity_score": 8.7, "market_size": 2.8, "entry_difficulty": 5.2, "time_to_market": "4 months", "region": "Latin America", "tier": "Tier 1", "avg_cac": 4, "competition_level": 8},
  {"rank": 4, "country": "UAE", "opportunity_score": 8.6, "market_size": 0.68, "entry_difficulty": 3.8, "time_to_market": "3 months", "region": "MENA", "tier": "Tier 1", "avg_cac": 200, "competition_level": 8},
  {"rank": 5, "country": "Indonesia", "opportunity_score": 8.2, "market_size": 2.15, "entry_difficulty": 5.9, "time_to_market": "6 months", "region": "Asia-Pacific", "tier": "Tier 2", "avg_cac": 40, "competition_level": 7.5},
  {"rank": 6, "country": "Vietnam", "opportunity_score": 7.9, "market_size": 1.0, "entry_difficulty": 6.1, "time_to_market": "7 months", "region": "Asia-Pacific", "tier": "Tier 2", "avg_cac": 35, "competition_level": 6},
  {"rank": 7, "country": "Malaysia", "opportunity_score": 7.6, "market_size": 1.12, "entry_difficulty": 5.4, "time_to_market": "5 months", "region": "Asia-Pacific", "tier": "Tier 2", "avg_cac": 38, "competition_level": 6.5},
  {"rank": 8, "country": "Brazil", "opportunity_score": 8.9, "market_size": 1.8, "entry_difficulty": 5.8, "time_to_market": "7-9 months", "region": "Latin America", "tier": "Tier 1", "avg_cac": 90, "competition_level": 9},
  {"rank": 9, "country": "Colombia", "opportunity_score": 8.5, "market_size": 0.65, "entry_difficulty": 4.9, "time_to_market": "5-7 months", "region": "Latin America", "tier": "Tier 2", "avg_cac": 55, "competition_level": 7},
  {"rank": 10, "country": "Singapore", "opportunity_score": 8.1, "market_size": 1.4, "entry_difficulty": 6.9, "time_to_market": "8-12 months", "region": "Asia-Pacific", "tier": "Tier 1", "avg_cac": 200, "competition_level": 9},
  {"rank": 11, "country": "Switzerland", "opportunity_score": 7.4, "market_size": 0.95, "entry_difficulty": 7.2, "time_to_market": "12-15 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 200, "competition_level": 7.5},
  {"rank": 12, "country": "Germany", "opportunity_score": 7.1, "market_size": 1.9, "entry_difficulty": 6.8, "time_to_market": "9-12 months", "region": "Europe", "tier": "Tier 2", "avg_cac": 90, "competition_level": 8},
  {"rank": 13, "country": "United Kingdom", "opportunity_score": 8.5, "market_size": 40.7, "entry_difficulty": 4.0, "time_to_market": "4 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 200, "competition_level": 9},
  {"rank": 14, "country": "Netherlands", "opportunity_score": 7.8, "market_size": 48.0, "entry_difficulty": 4.2, "time_to_market": "4 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 150, "competition_level": 8.5},
  {"rank": 15, "country": "Hong Kong", "opportunity_score": 8.8, "market_size": 35.0, "entry_difficulty": 3.2, "time_to_market": "3 months", "region": "Asia-Pacific", "tier": "Tier 1", "avg_cac": 220, "competition_level": 8.8},
  {"rank": 16, "country": "Argentina", "opportunity_score": 8.2, "market_size": 6.8, "entry_difficulty": 5.9, "time_to_market": "6 months", "region": "Latin America", "tier": "Tier 2", "avg_cac": 80, "competition_level": 6.5},
  {"rank": 17, "country": "Egypt", "opportunity_score": 7.0, "market_size": 1.5, "entry_difficulty": 6.8, "time_to_market": "7 months", "region": "MENA", "tier": "Tier 2", "avg_cac": 65, "competition_level": 5.5},
  {"rank": 18, "country": "Morocco", "opportunity_score": 7.1, "market_size": 1.0, "entry_difficulty": 7.0, "time_to_market": "7 months", "region": "MENA", "tier": "Tier 2", "avg_cac": 70, "competition_level": 5},
  {"rank": 19, "country": "Nigeria", "opportunity_score": 8.5, "market_size": 0.31, "entry_difficulty": 7.2, "time_to_market": "7 months", "region": "Africa", "tier": "Tier 2", "avg_cac": 45, "competition_level": 6},
  {"rank": 20, "country": "Canada", "opportunity_score": 8.0, "market_size": 38.8, "entry_difficulty": 4.5, "time_to_market": "5 months", "region": "North America", "tier": "Tier 1", "avg_cac": 180, "competition_level": 8},
  {"rank": 21, "country": "Sweden", "opportunity_score": 7.8, "market_size": 25.0, "entry_difficulty": 3.5, "time_to_market": "4 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 165, "competition_level": 7.5},
  {"rank": 22, "country": "Hong Kong", "opportunity_score": 8.8, "market_size": 35.0, "entry_difficulty": 3.2, "time_to_market": "3 months", "region": "Asia-Pacific", "tier": "Tier 1", "avg_cac": 220, "competition_level": 8.8},
  {"rank": 23, "country": "Poland", "opportunity_score": 7.9, "market_size": 22.0, "entry_difficulty": 4.8, "time_to_market": "5 months", "region": "Europe", "tier": "Tier 2", "avg_cac": 135, "competition_level": 7.5},
  {"rank": 24, "country": "France", "opportunity_score": 7.4, "market_size": 22.3, "entry_difficulty": 4.5, "time_to_market": "5 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 155, "competition_level": 8.0},
  {"rank": 25, "country": "Italy", "opportunity_score": 7.5, "market_size": 20.8, "entry_difficulty": 4.8, "time_to_market": "5 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 150, "competition_level": 7.5},
  {"rank": 26, "country": "Switzerland", "opportunity_score": 7.4, "market_size": 0.95, "entry_difficulty": 7.2, "time_to_market": "12-15 months", "region": "Europe", "tier": "Tier 1", "avg_cac": 200, "competition_level": 7.5},
  {"rank": 27, "country": "Norway", "opportunity_score": 7.0, "market_size": 8.6, "entry_difficulty": 4.0, "time_to_market": "4 months", "region": "Europe", "tier": "Tier 2", "avg_cac": 145, "competition_level": 6.5},
  {"rank": 28, "country": "Belgium", "opportunity_score": 7.1, "market_size": 8.1, "entry_difficulty": 4.3, "time_to_market": "4 months", "region": "Europe", "tier": "Tier 2", "avg_cac": 140, "competition_level": 6.8},
  {"rank": 29, "country": "Russia", "opportunity_score": 6.5, "market_size": 19.0, "entry_difficulty": 8.5, "time_to_market": "9 months", "region": "Europe", "tier": "Tier 2", "avg_cac": 110, "competition_level": 8.0},
  {"rank": 30, "country": "Japan", "opportunity_score": 7.6, "market_size": 30.0, "entry_difficulty": 6.5, "time_to_market": "7 months", "region": "Asia-Pacific", "tier": "Tier 1", "avg_cac": 180, "competition_level": 8.5},
  {"rank": 31, "country": "South Korea", "opportunity_score": 7.4, "market_size": 12.0, "entry_difficulty": 6.0, "time_to_market": "6 months", "region": "Asia-Pacific", "tier": "Tier 2", "avg_cac": 170, "competition_level": 7.8},
  {"rank": 32, "country": "Taiwan", "opportunity_score": 7.2, "market_size": 8.2, "entry_difficulty": 5.8, "time_to_market": "6 months", "region": "Asia-Pacific", "tier": "Tier 2", "avg_cac": 160, "competition_level": 7.0},
  {"rank": 33, "country": "Armenia", "opportunity_score": 6.9, "market_size": 0.45, "entry_difficulty": 5.5, "time_to_market": "6 months", "region": "Europe", "tier": "Tier 3", "avg_cac": 60, "competition_level": 4.5},
  {"rank": 34, "country": "Ecuador", "opportunity_score": 6.7, "market_size": 0.85, "entry_difficulty": 5.7, "time_to_market": "6 months", "region": "Latin America", "tier": "Tier 3", "avg_cac": 75, "competition_level": 5.0}
  ],
  "competitor_data": [
    {"company": "DNA Funded", "challenge_fee": 49, "profit_split": 80, "max_funding": "$400K", "differentiator": "800 markets", "market_presence": 9.5},
    {"company": "FTMO", "challenge_fee": 155, "profit_split": 80, "max_funding": "$200K", "differentiator": "Global focus", "market_presence": 8.8},
    {"company": "Funded Next", "challenge_fee": 59, "profit_split": 95, "max_funding": "$4M", "differentiator": "Highest profit split", "market_presence": 8.0},
    {"company": "E8 Markets", "challenge_fee": 33, "profit_split": 80, "max_funding": "N/A", "differentiator": "Lowest challenge fee", "market_presence": 7.9},
    {"company": "Apex Trader", "challenge_fee": 167, "profit_split": 90, "max_funding": "N/A", "differentiator": "Premium positioning", "market_presence": 8.1}
  ],
  "budget_allocation": {
    "Asia Pacific": 40,
    "Latin America": 25,
    "Europe": 20,
    "Africa": 15
  }
};

// FORFX Brand Colors
const colors = {
  primary: '#8d40bc',
  secondary: '#9f65dc',
  tertiary: '#d1cbc7',
  background: '#1e1329',
  cardBg: 'rgba(141, 64, 188, 0.1)',
  borderColor: 'rgba(159, 101, 220, 0.3)',
  textPrimary: '#d1cbc7',
  textSecondary: 'rgba(209, 203, 199, 0.8)',
  gradients: [
    '#8d40bc', '#9f65dc', '#b584e6', '#cba3f0'
  ]
};

// Chart.js default configurations
Chart.defaults.color = colors.textPrimary;
Chart.defaults.backgroundColor = colors.primary;
Chart.defaults.borderColor = colors.borderColor;

// Global variables for charts
let charts = {};

// Debug logging function
function debugLog(message, data = null) {
  console.log(`[FORFX Dashboard] ${message}`, data || '');
}

// Navigation functionality
function initializeNavigation() {
  debugLog('Initializing navigation...');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      
      // Update active nav link
      navLinks.forEach(nl => nl.classList.remove('active'));
      link.classList.add('active');
      
      // Hide all sections first
      sections.forEach(section => {
        section.classList.remove('active');
      });
      
      // Show target section with smooth transition
      setTimeout(() => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
          debugLog(`Switched to section: ${targetId}`);
        }
      }, 100);
    });
  });
  debugLog('Navigation initialized successfully');
}

// Populate regional data table
function populateRegionalTable() {
  debugLog('Populating regional table...');
  const tableBody = document.getElementById('regionalTableBody');
  if (!tableBody) {
    debugLog('Regional table body not found');
    return;
  }
  
  tableBody.innerHTML = '';
  
  dashboardData.regional_data.forEach(region => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${region.region}</strong></td>
      <td>$${region.market_size}B</td>
      <td>${region.growth}%</td>
      <td>${region.priority_score}/40</td>
      <td>${region.internet_penetration}%</td>
      <td>$${region.cac}</td>
      <td>${region.regulations}/10</td>
      <td>${region.trust_level}/10</td>
      <td>${region.brand_awareness}/10</td>
    `;
    tableBody.appendChild(row);
  });
  debugLog('Regional table populated successfully');
}

// Populate countries table and cards
function populateCountriesData() {
  debugLog('Populating countries data...');
  populateCountriesTable();
  populateCountryCards();
}

function populateCountriesTable() {
  const tableBody = document.getElementById('countriesTableBody');
  if (!tableBody) {
    debugLog('Countries table body not found');
    return;
  }
  
  tableBody.innerHTML = '';
  
  dashboardData.country_data.forEach(country => {
    const row = document.createElement('tr');
    row.className = 'country-row';
    row.dataset.tier = country.tier;
    row.dataset.region = country.region;
    row.innerHTML = `
      <td><strong>${country.rank}</strong></td>
      <td><strong>${country.country}</strong></td>
      <td><span style="color: ${colors.secondary}; font-weight: 600;">${country.opportunity_score}/10</span></td>
      <td>$${country.market_size}B</td>
      <td>${country.entry_difficulty}/10</td>
      <td>${country.time_to_market}</td>
      <td>${country.region}</td>
      <td>$${country.avg_cac.toLocaleString()}</td>
      <td>${country.competition_level}/10</td>
    `;
    tableBody.appendChild(row);
  });
  debugLog('Countries table populated successfully');
}

function populateCountryCards() {
  const cardsContainer = document.getElementById('countryCards');
  if (!cardsContainer) {
    debugLog('Country cards container not found');
    return;
  }
  
  cardsContainer.innerHTML = '';
  
  dashboardData.country_data.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.dataset.tier = country.tier;
    card.dataset.region = country.region;
  card.innerHTML = `
    <div class="country-card-header">
      <div class="country-name">${country.country}</div>
      <div class="country-tier">${country.tier}</div>
    </div>
    <div class="country-metrics">
      <div class="country-metric">
        <div class="country-metric-label">Opportunity Score</div>
        <div class="country-metric-value">${country.opportunity_score}/10</div>
      </div>
      <div class="country-metric">
        <div class="country-metric-label">Market Size</div>
        <div class="country-metric-value">$${country.market_size.toFixed(1)}B</div>
      </div>
      <div class="country-metric">
        <div class="country-metric-label">Entry Difficulty</div>
        <div class="country-metric-value">${country.entry_difficulty}/10</div>
      </div>
      <div class="country-metric">
        <div class="country-metric-label">Time to Market</div>
        <div class="country-metric-value">${country.time_to_market}</div>
      </div>
      <div class="country-metric">
        <div class="country-metric-label">Avg CAC</div>
        <div class="country-metric-value">$${country.avg_cac.toLocaleString()}</div>
      </div>
      <div class="country-metric">
        <div class="country-metric-label">Competition Level</div>
        <div class="country-metric-value">${country.competition_level}/10</div>
      </div>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
  debugLog('Country cards populated successfully');
}

// Populate competitor table
function populateCompetitorTable() {
  debugLog('Populating competitor table...');
  const tableBody = document.getElementById('competitorTableBody');
  if (!tableBody) {
    debugLog('Competitor table body not found');
    return;
  }
  
  tableBody.innerHTML = '';
  
  dashboardData.competitor_data.forEach(competitor => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${competitor.company}</strong></td>
      <td>$${competitor.challenge_fee}</td>
      <td>${competitor.profit_split}%</td>
      <td>${competitor.max_funding}</td>
      <td>${competitor.differentiator}</td>
    `;
    tableBody.appendChild(row);
  });
  debugLog('Competitor table populated successfully');
}

// Filtering functionality
function initializeFilters() {
  debugLog('Initializing filters...');
  const tierFilter = document.getElementById('tierFilter');
  const regionFilter = document.getElementById('regionFilter');
  
  if (tierFilter) tierFilter.addEventListener('change', applyFilters);
  if (regionFilter) regionFilter.addEventListener('change', applyFilters);
  debugLog('Filters initialized successfully');
}

function applyFilters() {
  const tierFilter = document.getElementById('tierFilter');
  const regionFilter = document.getElementById('regionFilter');
  
  if (!tierFilter || !regionFilter) return;
  
  const tierValue = tierFilter.value;
  const regionValue = regionFilter.value;
  
  debugLog(`Applying filters - Tier: ${tierValue}, Region: ${regionValue}`);
  
  const countryRows = document.querySelectorAll('.country-row');
  const countryCards = document.querySelectorAll('.country-card');
  
  [...countryRows, ...countryCards].forEach(item => {
    const tierMatch = tierValue === 'all' || item.dataset.tier === tierValue;
    const regionMatch = regionValue === 'all' || item.dataset.region === regionValue;
    
    if (tierMatch && regionMatch) {
      item.classList.remove('hidden');
      item.style.display = '';
    } else {
      item.classList.add('hidden');
      item.style.display = 'none';
    }
  });
}

// Chart creation functions
function createRegionalMarketChart() {
  debugLog('Creating regional market chart...');
  const ctx = document.getElementById('regionalMarketChart');
  if (!ctx) {
    debugLog('Regional market chart canvas not found');
    return;
  }
  
  if (charts.regionalMarket) {
    charts.regionalMarket.destroy();
  }
  
  try {
    charts.regionalMarket = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: dashboardData.regional_data.map(d => d.region),
        datasets: [{
          label: 'Market Size ($B)',
          data: dashboardData.regional_data.map(d => d.market_size),
          backgroundColor: colors.gradients,
          borderColor: colors.primary,
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: colors.textPrimary,
              font: { family: 'Poppins', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: colors.cardBg,
            titleColor: colors.textPrimary,
            bodyColor: colors.textPrimary,
            borderColor: colors.borderColor,
            borderWidth: 1,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          },
          x: {
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          }
        }
      }
    });
    debugLog('Regional market chart created successfully');
  } catch (error) {
    debugLog('Error creating regional market chart:', error);
  }
}

function createGrowthPriorityChart() {
  debugLog('Creating growth priority chart...');
  const ctx = document.getElementById('growthPriorityChart');
  if (!ctx) {
    debugLog('Growth priority chart canvas not found');
    return;
  }
  
  if (charts.growthPriority) {
    charts.growthPriority.destroy();
  }
  
  try {
    charts.growthPriority = new Chart(ctx.getContext('2d'), {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Regions',
          data: dashboardData.regional_data.map(d => ({
            x: d.growth,
            y: d.priority_score,
            region: d.region
          })),
          backgroundColor: colors.secondary,
          borderColor: colors.primary,
          borderWidth: 2,
          pointRadius: 8,
          pointHoverRadius: 12
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: colors.textPrimary,
              font: { family: 'Poppins', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: colors.cardBg,
            titleColor: colors.textPrimary,
            bodyColor: colors.textPrimary,
            borderColor: colors.borderColor,
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              title: function(context) {
                const dataIndex = context[0].dataIndex;
                return dashboardData.regional_data[dataIndex].region;
              },
              label: function(context) {
                const point = context.parsed;
                return `Growth: ${point.x}%, Priority: ${point.y}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Growth Rate (%)',
              color: colors.textPrimary,
              font: { family: 'Poppins' }
            },
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          },
          y: {
            title: {
              display: true,
              text: 'Priority Score',
              color: colors.textPrimary,
              font: { family: 'Poppins' }
            },
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          }
        }
      }
    });
    debugLog('Growth priority chart created successfully');
  } catch (error) {
    debugLog('Error creating growth priority chart:', error);
  }
}

function createMarketPresenceChart() {
  debugLog('Creating market presence chart...');
  const ctx = document.getElementById('marketPresenceChart');
  if (!ctx) {
    debugLog('Market presence chart canvas not found');
    return;
  }
  
  if (charts.marketPresence) {
    charts.marketPresence.destroy();
  }
  
  try {
    charts.marketPresence = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: dashboardData.competitor_data.map(d => d.company),
        datasets: [{
          label: 'Market Presence Score',
          data: dashboardData.competitor_data.map(d => d.market_presence),
          backgroundColor: colors.gradients,
          borderColor: colors.primary,
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: colors.textPrimary,
              font: { family: 'Poppins', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: colors.cardBg,
            titleColor: colors.textPrimary,
            bodyColor: colors.textPrimary,
            borderColor: colors.borderColor,
            borderWidth: 1,
            cornerRadius: 8
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          },
          y: {
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          }
        }
      }
    });
    debugLog('Market presence chart created successfully');
  } catch (error) {
    debugLog('Error creating market presence chart:', error);
  }
}

function createFeePresenceChart() {
  debugLog('Creating fee presence chart...');
  const ctx = document.getElementById('feePresenceChart');
  if (!ctx) {
    debugLog('Fee presence chart canvas not found');
    return;
  }
  
  if (charts.feePresence) {
    charts.feePresence.destroy();
  }
  
  try {
    charts.feePresence = new Chart(ctx.getContext('2d'), {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Competitors',
          data: dashboardData.competitor_data.map(d => ({
            x: d.challenge_fee,
            y: d.market_presence,
            company: d.company
          })),
          backgroundColor: colors.secondary,
          borderColor: colors.primary,
          borderWidth: 2,
          pointRadius: 8,
          pointHoverRadius: 12
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: colors.textPrimary,
              font: { family: 'Poppins', size: 12 }
            }
          },
          tooltip: {
            backgroundColor: colors.cardBg,
            titleColor: colors.textPrimary,
            bodyColor: colors.textPrimary,
            borderColor: colors.borderColor,
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              title: function(context) {
                const dataIndex = context[0].dataIndex;
                return dashboardData.competitor_data[dataIndex].company;
              },
              label: function(context) {
                const point = context.parsed;
                return `Fee: $${point.x}, Presence: ${point.y}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Challenge Fee ($)',
              color: colors.textPrimary,
              font: { family: 'Poppins' }
            },
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          },
          y: {
            title: {
              display: true,
              text: 'Market Presence Score',
              color: colors.textPrimary,
              font: { family: 'Poppins' }
            },
            grid: { color: colors.borderColor },
            ticks: { color: colors.textPrimary, font: { family: 'Poppins' } }
          }
        }
      }
    });
    debugLog('Fee presence chart created successfully');
  } catch (error) {
    debugLog('Error creating fee presence chart:', error);
  }
}

// CRITICAL FIX: Budget Chart with comprehensive error handling and multiple attempts
function createBudgetChart(attempt = 1) {
  debugLog(`Creating budget chart - Attempt ${attempt}...`);
  
  const ctx = document.getElementById('budgetChart');
  if (!ctx) {
    debugLog('Budget chart canvas not found!');
    return;
  }

  debugLog('Canvas element found:', ctx);
  debugLog('Budget allocation data:', dashboardData.budget_allocation);

  // Destroy existing chart
  if (charts.budget) {
    debugLog('Destroying existing budget chart...');
    charts.budget.destroy();
    charts.budget = null;
  }

  // Prepare data
  const budgetData = dashboardData.budget_allocation;
  const labels = Object.keys(budgetData);
  const values = Object.values(budgetData);
  
  debugLog('Chart labels:', labels);
  debugLog('Chart values:', values);

  try {
    // Get 2D context
    const context = ctx.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas');
    }
    
    debugLog('2D context obtained successfully');

    // Create the chart
    charts.budget = new Chart(context, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors.gradients,
          borderColor: colors.primary,
          borderWidth: 2,
          hoverBorderWidth: 3,
          hoverBorderColor: colors.secondary
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: colors.textPrimary,
              font: { 
                family: 'Poppins', 
                size: 12,
                weight: 'bold'
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: colors.cardBg,
            titleColor: colors.textPrimary,
            bodyColor: colors.textPrimary,
            borderColor: colors.borderColor,
            borderWidth: 1,
            cornerRadius: 8,
            bodyFont: {
              family: 'Poppins',
              size: 14,
              weight: 'bold'
            },
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}%`;
              }
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true,
          duration: 1000
        }
      }
    });

    debugLog('Budget chart created successfully!');
    
    // Verify chart instance
    if (charts.budget && charts.budget.data) {
      debugLog('Chart verification successful - chart has data');
    } else {
      throw new Error('Chart created but verification failed');
    }

  } catch (error) {
    debugLog('Error creating budget chart:', error);
    
    // Retry logic - up to 3 attempts
    if (attempt < 3) {
      debugLog(`Retrying budget chart creation in 500ms... (attempt ${attempt + 1})`);
      setTimeout(() => createBudgetChart(attempt + 1), 500);
    } else {
      debugLog('CRITICAL: Budget chart creation failed after 3 attempts');
      
      // Fallback: Show error message in chart container
      const chartContainer = ctx.parentElement;
      if (chartContainer) {
        chartContainer.innerHTML = `
          <div style="text-align: center; color: ${colors.textSecondary}; padding: 2rem;">
            <p>Chart temporarily unavailable</p>
            <p style="font-size: 0.9rem; margin-top: 1rem;">Budget Allocation:</p>
            <ul style="list-style: none; margin-top: 1rem;">
              ${labels.map((label, i) => `<li style="margin: 0.5rem 0; color: ${colors.gradients[i]}">${label}: ${values[i]}%</li>`).join('')}
            </ul>
          </div>
        `;
      }
    }
  }
}

// Initialize all charts with proper sequencing
function initializeCharts() {
  debugLog('Starting chart initialization sequence...');
  
  // Ensure DOM is ready and wait for Chart.js
  if (typeof Chart === 'undefined') {
    debugLog('Chart.js not loaded yet, retrying...');
    setTimeout(initializeCharts, 200);
    return;
  }

  debugLog('Chart.js is available, proceeding with chart creation...');
  
  // Create charts with delays to ensure proper initialization
  setTimeout(() => createRegionalMarketChart(), 100);
  setTimeout(() => createGrowthPriorityChart(), 200);
  setTimeout(() => createMarketPresenceChart(), 300);
  setTimeout(() => createFeePresenceChart(), 400);
  
  // CRITICAL: Budget chart gets special treatment with extra delay and multiple attempts
  setTimeout(() => createBudgetChart(), 500);
  
  debugLog('Chart initialization sequence started');
}

// Initialize dashboard
function initializeDashboard() {
  debugLog('=== FORFX Dashboard Initialization Started ===');
  
  // Initialize navigation
  initializeNavigation();
  
  // Populate all data tables
  populateRegionalTable();
  populateCountriesData();
  populateCompetitorTable();
  
  // Initialize filters
  initializeFilters();
  
  // Create charts
  initializeCharts();
  
  debugLog('=== Dashboard initialization complete! ===');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  debugLog('DOM Content Loaded - Starting dashboard initialization...');
  
  // Small delay to ensure all resources are ready
  setTimeout(initializeDashboard, 100);
});

// Handle window resize for charts
window.addEventListener('resize', function() {
  debugLog('Window resized - updating charts...');
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.resize === 'function') {
      chart.resize();
    }
  });
});

// Additional error handling for Chart.js
window.addEventListener('error', function(e) {
  if (e.message && e.message.includes('Chart')) {
    debugLog('Chart.js error detected:', e.message);
  }
});

// Export for debugging
window.FORFX_DEBUG = {
  charts,
  dashboardData,
  colors,
  createBudgetChart,
  debugLog
};
