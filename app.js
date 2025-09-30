// Enhanced Application Data with full treatment capabilities
const appData = {
  diseases: [
    {"id": 1, "name": "Tomato Early Blight", "type": "fungal", "commonPlants": ["Tomato", "Potato", "Eggplant"]},
    {"id": 2, "name": "Powdery Mildew", "type": "fungal", "commonPlants": ["Cucumber", "Squash", "Rose", "Grape"]},
    {"id": 3, "name": "Black Spot", "type": "fungal", "commonPlants": ["Rose", "Apple"]},
    {"id": 4, "name": "Bacterial Blight", "type": "bacterial", "commonPlants": ["Bean", "Cotton", "Rice"]},
    {"id": 5, "name": "Late Blight", "type": "fungal", "commonPlants": ["Tomato", "Potato"]},
    {"id": 6, "name": "Rust Disease", "type": "fungal", "commonPlants": ["Wheat", "Corn", "Bean"]},
    {"id": 7, "name": "Mosaic Virus", "type": "viral", "commonPlants": ["Cucumber", "Tomato", "Pepper"]},
    {"id": 8, "name": "Crown Rot", "type": "fungal", "commonPlants": ["Strawberry", "Apple"]},
    {"id": 9, "name": "Fire Blight", "type": "bacterial", "commonPlants": ["Apple", "Pear"]},
    {"id": 10, "name": "Downy Mildew", "type": "fungal", "commonPlants": ["Grape", "Cucumber", "Lettuce"]}
  ],
  plantTypes: [
    "Tomato", "Cucumber", "Rose", "Bean", "Pepper", "Wheat", "Corn", "Potato", 
    "Apple", "Grape", "Lettuce", "Carrot", "Onion", "Cabbage", "Spinach", 
    "Broccoli", "Strawberry", "Eggplant", "Squash", "Pear", "Orange", "Lemon"
  ],
  severityLevels: [
    {"value": "mild", "label": "Mild - Early symptoms, minimal damage"},
    {"value": "moderate", "label": "Moderate - Noticeable damage, spreading"},
    {"value": "severe", "label": "Severe - Significant damage, plant stressed"},
    {"value": "critical", "label": "Critical - Plant survival at risk"}
  ],
  farmingMethods: [
    {"value": "organic", "label": "Organic - No synthetic chemicals"},
    {"value": "conventional", "label": "Conventional - All methods allowed"},
    {"value": "integrated", "label": "Integrated - IPM approach"},
    {"value": "sustainable", "label": "Sustainable - Eco-friendly focus"}
  ],
  treatmentDatabase: {
    "fungal": {
      "immediate": ["Remove infected plant parts", "Improve air circulation", "Reduce moisture", "Apply fungicide"],
      "organic": ["Neem oil spray", "Copper-based fungicide", "Baking soda solution", "Milk spray"],
      "conventional": ["Systemic fungicide", "Preventive fungicide spray", "Chemical treatment"],
      "prevention": ["Crop rotation", "Proper spacing", "Avoid overhead watering", "Disease-resistant varieties"]
    },
    "bacterial": {
      "immediate": ["Remove infected material", "Sterilize tools", "Isolate affected plants", "Improve drainage"],
      "organic": ["Copper spray", "Beneficial bacteria", "Compost tea", "Plant extracts"],
      "conventional": ["Antibacterial spray", "Systemic bactericide", "Chemical treatment"],
      "prevention": ["Avoid wet conditions", "Proper sanitation", "Resistant varieties", "Crop rotation"]
    },
    "viral": {
      "immediate": ["Remove infected plants", "Control insect vectors", "Isolate healthy plants", "Sanitize tools"],
      "organic": ["Insecticidal soap", "Beneficial insects", "Reflective mulch", "Plant barriers"],
      "conventional": ["Insecticide for vectors", "Systemic treatment", "Chemical vector control"],
      "prevention": ["Vector control", "Resistant varieties", "Isolation", "Proper sanitation"]
    },
    "pest": {
      "immediate": ["Manual removal", "Spray off pests", "Apply insecticide", "Physical barriers"],
      "organic": ["Neem oil", "Insecticidal soap", "Beneficial insects", "Companion planting"],
      "conventional": ["Targeted insecticide", "Systemic pesticide", "Chemical treatment"],
      "prevention": ["Regular monitoring", "Beneficial habitat", "Companion plants", "Physical barriers"]
    },
    "nutrient": {
      "immediate": ["Soil test", "Adjust pH", "Apply appropriate fertilizer", "Improve drainage"],
      "organic": ["Compost", "Organic fertilizer", "Cover crops", "Natural amendments"],
      "conventional": ["Chemical fertilizer", "Nutrient solutions", "Soil conditioners"],
      "prevention": ["Regular soil testing", "Balanced fertilization", "Organic matter", "Proper pH"]
    }
  },
  customConditionKeywords: {
    "yellow": ["nutrient", "viral"],
    "brown": ["fungal", "bacterial"],
    "spots": ["fungal", "bacterial"],
    "wilting": ["bacterial", "fungal", "pest"],
    "holes": ["pest"],
    "powder": ["fungal"],
    "sticky": ["pest"],
    "curling": ["viral", "pest"],
    "stunted": ["nutrient", "viral"],
    "rust": ["fungal"],
    "mold": ["fungal"],
    "rot": ["fungal", "bacterial"],
    "blight": ["fungal", "bacterial"],
    "bugs": ["pest"],
    "insects": ["pest"],
    "aphids": ["pest"],
    "leaves dropping": ["fungal", "bacterial"],
    "black spots": ["fungal"],
    "white powder": ["fungal"]
  },
  sampleHistory: [
    {
      "id": 1,
      "type": "Disease Analysis",
      "title": "Custom Tomato Leaf Problem",
      "description": "User described yellow spots on tomato leaves - identified as Early Blight",
      "confidence": 92,
      "date": "9/30/2025",
      "method": "custom_description",
      "tags": ["custom", "tomato", "fungal", "early-blight"]
    },
    {
      "id": 2,
      "type": "Camera Analysis", 
      "title": "Mobile Photo Analysis - Rose Disease",
      "description": "Camera capture analysis identified Black Spot on rose leaves",
      "confidence": 89,
      "date": "9/29/2025",
      "method": "camera_capture",
      "tags": ["camera", "rose", "fungal", "black-spot"]
    },
    {
      "id": 3,
      "type": "Treatment Plan",
      "title": "Organic Treatment for Custom Cucumber Issue",
      "description": "Custom described powdery white substance - treated as Powdery Mildew",
      "date": "9/28/2025",
      "method": "custom_condition",
      "tags": ["organic", "cucumber", "custom", "powdery-mildew"]
    }
  ]
};

// Global variables
let uploadedImage = null;
let currentTab = 'detection';
let analysisHistory = [...appData.sampleHistory];
let currentConditionMethod = 'dropdown';

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const uploadZone = document.getElementById('uploadZone');
const imageInput = document.getElementById('imageInput');
const cameraInput = document.getElementById('cameraInput');
const cameraBtn = document.getElementById('cameraBtn');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImageBtn = document.getElementById('removeImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultsArea = document.getElementById('resultsArea');
const analysisResults = document.getElementById('analysisResults');
const loadingModal = document.getElementById('loadingModal');
const loadingTitle = document.getElementById('loadingTitle');
const loadingDescription = document.getElementById('loadingDescription');

// Mobile menu elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const headerNav = document.getElementById('headerNav');

// Chat elements
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Treatment form elements
const treatmentForm = document.getElementById('treatmentForm');
const methodBtns = document.querySelectorAll('.method-btn');
const dropdownMethod = document.querySelector('.dropdown-method');
const customMethod = document.querySelector('.custom-method');
const diseaseSelect = document.getElementById('diseaseSelect');
const customCondition = document.getElementById('customCondition');
const plantSelect = document.getElementById('plantSelect');
const severitySelect = document.getElementById('severitySelect');
const farmingSelect = document.getElementById('farmingSelect');
const treatmentResults = document.getElementById('treatmentResults');
const treatmentContent = document.getElementById('treatmentContent');

// History elements
const historyList = document.getElementById('historyList');
const typeFilter = document.getElementById('typeFilter');
const methodFilter = document.getElementById('methodFilter');
const totalAnalyses = document.getElementById('totalAnalyses');
const cameraAnalyses = document.getElementById('cameraAnalyses');
const customAnalyses = document.getElementById('customAnalyses');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  initializeMobileMenu();
  initializeImageUpload();
  initializeChat();
  initializeTreatmentForm();
  initializeHistory();
  populateDropdowns();
  updateHistoryStats();
});

// Mobile menu functionality
function initializeMobileMenu() {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    headerNav.classList.toggle('mobile-open');
  });

  // Close menu when clicking on nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      headerNav.classList.remove('mobile-open');
    });
  });
}

// Tab functionality
function initializeTabs() {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update tab buttons
  tabBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    }
  });

  // Update tab contents
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabId) {
      content.classList.add('active');
    }
  });

  currentTab = tabId;
  
  if (tabId === 'history') {
    updateHistoryStats();
  }
}

// Enhanced image upload functionality with camera support
function initializeImageUpload() {
  // Drag and drop
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files[0], 'upload');
    }
  });

  // File input change
  imageInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleImageUpload(e.target.files[0], 'upload');
    }
  });

  // Camera input change
  cameraInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleImageUpload(e.target.files[0], 'camera');
    }
  });

  // Camera button
  cameraBtn.addEventListener('click', () => {
    cameraInput.click();
  });

  // Remove image
  removeImageBtn.addEventListener('click', () => {
    resetImageUpload();
  });

  // Analyze button
  analyzeBtn.addEventListener('click', () => {
    performAnalysis();
  });
}

function handleImageUpload(file, method = 'upload') {
  // Validate file
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file (JPG, PNG, WEBP)');
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    alert('File size must be less than 10MB');
    return;
  }

  // Read and display image
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage = {
      data: e.target.result,
      method: method
    };
    previewImg.src = uploadedImage.data;
    
    document.querySelector('.upload-zone__content').classList.add('hidden');
    imagePreview.classList.remove('hidden');
    analyzeBtn.disabled = false;
  };
  reader.readAsDataURL(file);
}

function resetImageUpload() {
  uploadedImage = null;
  imagePreview.classList.add('hidden');
  document.querySelector('.upload-zone__content').classList.remove('hidden');
  analyzeBtn.disabled = true;
  resultsArea.classList.add('hidden');
  imageInput.value = '';
  cameraInput.value = '';
}

function performAnalysis() {
  if (!uploadedImage) return;

  // Show loading modal with appropriate message
  const isCameraCapture = uploadedImage.method === 'camera';
  loadingTitle.textContent = isCameraCapture ? 'Analyzing Camera Image...' : 'Analyzing Uploaded Image...';
  loadingDescription.textContent = 'Our AI is processing your plant image and identifying potential diseases';
  loadingModal.classList.remove('hidden');

  // Simulate AI analysis delay
  setTimeout(() => {
    const randomDisease = appData.diseases[Math.floor(Math.random() * appData.diseases.length)];
    displayAnalysisResults(randomDisease);
    
    // Add to history
    const analysisType = isCameraCapture ? 'Camera Analysis' : 'Disease Analysis';
    const method = isCameraCapture ? 'camera_capture' : 'image_upload';
    
    addToHistory({
      id: Date.now(),
      type: analysisType,
      title: `${analysisType} - ${randomDisease.name}`,
      description: `${randomDisease.name} detected with ${randomDisease.confidence}% confidence using ${isCameraCapture ? 'camera capture' : 'image upload'}`,
      confidence: randomDisease.confidence || Math.floor(Math.random() * 15) + 85,
      date: new Date().toLocaleDateString(),
      method: method,
      tags: [isCameraCapture ? 'camera' : 'upload', randomDisease.type, randomDisease.name.toLowerCase().replace(/\s+/g, '-')],
      status: "completed"
    });

    loadingModal.classList.add('hidden');
    resultsArea.classList.remove('hidden');
  }, 3000);
}

function displayAnalysisResults(disease) {
  const confidence = disease.confidence || Math.floor(Math.random() * 15) + 85;
  const confidenceClass = confidence >= 90 ? 'confidence-high' : 'confidence-medium';
  const severityClass = confidence >= 90 ? 'severe' : 'moderate';
  const isCameraCapture = uploadedImage && uploadedImage.method === 'camera';
  
  analysisResults.innerHTML = `
    <div class="result-item">
      <div class="result-header">
        <div class="disease-name">${disease.name}</div>
        <div class="confidence-badge ${confidenceClass}">${confidence}% Confidence</div>
      </div>
      
      <div class="severity-indicator">
        <span>Severity:</span>
        <div class="severity-level severity-${severityClass}">
          ${confidence >= 90 ? 'High Risk' : 'Moderate Risk'}
        </div>
      </div>

      <div class="affected-parts">
        <h4>🎯 Analysis Details</h4>
        <p><strong>Detection Method:</strong> ${isCameraCapture ? 'Camera Capture' : 'Image Upload'}</p>
        <p><strong>Disease Type:</strong> ${disease.type.charAt(0).toUpperCase() + disease.type.slice(1)}</p>
        <p><strong>Common Plants:</strong> ${disease.commonPlants.join(', ')}</p>
        <p>Primary symptoms detected on leaves and stems. Disease progression indicates early to moderate stage infection.</p>
      </div>

      <div class="recommendations">
        <h4>⚡ Immediate Actions Required</h4>
        <ul>
          <li>Remove and destroy infected plant material</li>
          <li>Isolate affected plants immediately</li>
          <li>Improve air circulation around plants</li>
          <li>Apply appropriate ${disease.type} treatment within 24-48 hours</li>
          <li>Monitor surrounding plants for spread</li>
        </ul>
      </div>
    </div>
  `;
}

// Enhanced treatment form functionality
function initializeTreatmentForm() {
  // Method toggle buttons
  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.dataset.method;
      switchConditionMethod(method);
    });
  });

  treatmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    generateTreatmentPlan();
  });
}

function switchConditionMethod(method) {
  currentConditionMethod = method;
  
  // Update button states
  methodBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.method === method) {
      btn.classList.add('active');
    }
  });
  
  // Show/hide appropriate input method
  if (method === 'dropdown') {
    dropdownMethod.classList.remove('hidden');
    customMethod.classList.add('hidden');
  } else {
    dropdownMethod.classList.add('hidden');
    customMethod.classList.remove('hidden');
  }
}

function populateDropdowns() {
  // Populate diseases
  appData.diseases.forEach(disease => {
    const option = document.createElement('option');
    option.value = disease.name.toLowerCase().replace(/\s+/g, '-');
    option.textContent = disease.name;
    option.dataset.type = disease.type;
    diseaseSelect.appendChild(option);
  });

  // Populate plant types
  appData.plantTypes.forEach(plant => {
    const option = document.createElement('option');
    option.value = plant.toLowerCase();
    option.textContent = plant;
    plantSelect.appendChild(option);
  });

  // Populate severity levels
  appData.severityLevels.forEach(level => {
    const option = document.createElement('option');
    option.value = level.value;
    option.textContent = level.label;
    severitySelect.appendChild(option);
  });

  // Populate farming methods
  appData.farmingMethods.forEach(method => {
    const option = document.createElement('option');
    option.value = method.value;
    option.textContent = method.label;
    farmingSelect.appendChild(option);
  });
}

function generateTreatmentPlan() {
  const plant = plantSelect.value;
  const severity = severitySelect.value;
  const farming = farmingSelect.value;

  if (!plant || !severity || !farming) {
    alert('Please fill in all required fields');
    return;
  }

  let conditionData = null;
  let isCustom = false;

  // Get condition data based on method
  if (currentConditionMethod === 'dropdown') {
    const disease = diseaseSelect.value;
    if (!disease) {
      alert('Please select a disease from the dropdown');
      return;
    }
    
    const selectedOption = diseaseSelect.querySelector(`option[value="${disease}"]`);
    conditionData = {
      name: selectedOption.textContent,
      type: selectedOption.dataset.type,
      source: 'dropdown'
    };
  } else {
    const customDescription = customCondition.value.trim();
    if (!customDescription) {
      alert('Please describe your plant\'s condition');
      return;
    }
    
    // Analyze custom description
    conditionData = analyzeCustomCondition(customDescription);
    conditionData.source = 'custom';
    conditionData.description = customDescription;
    isCustom = true;
  }

  // Show loading
  loadingTitle.textContent = 'Generating Treatment Plan...';
  loadingDescription.textContent = `Creating personalized ${farming} treatment recommendations`;
  loadingModal.classList.remove('hidden');
  treatmentResults.classList.remove('hidden');

  setTimeout(() => {
    displayTreatmentPlan(conditionData, plant, severity, farming, isCustom);
    
    // Add to history
    addToHistory({
      id: Date.now(),
      type: "Treatment Plan",
      title: `Treatment Plan for ${isCustom ? 'Custom Condition' : conditionData.name}`,
      description: `Customized ${farming} treatment plan for ${plant} - ${isCustom ? 'Custom described condition' : conditionData.name}`,
      date: new Date().toLocaleDateString(),
      method: isCustom ? 'custom_condition' : 'dropdown_selection',
      tags: [farming, plant, isCustom ? 'custom' : conditionData.type, "treatment"],
      status: "completed"
    });

    loadingModal.classList.add('hidden');
  }, 2500);
}

function analyzeCustomCondition(description) {
  const lowerDescription = description.toLowerCase();
  const detectedTypes = new Set();
  
  // Analyze keywords to determine likely condition types
  for (const [keyword, types] of Object.entries(appData.customConditionKeywords)) {
    if (lowerDescription.includes(keyword)) {
      types.forEach(type => detectedTypes.add(type));
    }
  }

  // Default to fungal if no specific indicators found
  const primaryType = detectedTypes.size > 0 ? Array.from(detectedTypes)[0] : 'fungal';
  
  // Generate descriptive name based on symptoms
  let conditionName = "Custom Plant Condition";
  if (lowerDescription.includes('yellow')) conditionName = "Yellowing Leaves Condition";
  else if (lowerDescription.includes('brown') || lowerDescription.includes('spots')) conditionName = "Leaf Spot Condition";
  else if (lowerDescription.includes('wilting')) conditionName = "Plant Wilting Issue";
  else if (lowerDescription.includes('holes')) conditionName = "Pest Damage Issue";
  else if (lowerDescription.includes('powder') || lowerDescription.includes('white')) conditionName = "Powdery Growth Condition";

  return {
    name: conditionName,
    type: primaryType,
    detectedTypes: Array.from(detectedTypes),
    confidence: Math.floor(Math.random() * 20) + 75 // 75-95% confidence for custom analysis
  };
}

function displayTreatmentPlan(conditionData, plant, severity, farming, isCustom) {
  const treatments = appData.treatmentDatabase[conditionData.type] || appData.treatmentDatabase.fungal;
  const farmingType = farming === 'organic' ? 'organic' : 'conventional';
  
  let identificationSection = '';
  if (isCustom) {
    identificationSection = `
      <div class="identified-condition">
        <h4>🔍 AI Analysis Results</h4>
        <p><strong>Identified Condition:</strong> ${conditionData.name}</p>
        <p><strong>Likely Cause:</strong> ${conditionData.type.charAt(0).toUpperCase() + conditionData.type.slice(1)} issue</p>
        <p><strong>Confidence:</strong> ${conditionData.confidence}%</p>
        <p><strong>Your Description:</strong> "${conditionData.description}"</p>
        ${conditionData.detectedTypes.length > 1 ? `<p><strong>Additional Possibilities:</strong> ${conditionData.detectedTypes.join(', ')}</p>` : ''}
      </div>
    `;
  }
  
  treatmentContent.innerHTML = `
    ${identificationSection}

    <div class="treatment-timeline">
      <h4>⏰ Immediate Actions (Next 24-48 hours)</h4>
      <ul>
        ${treatments.immediate.map(action => `<li>${action}</li>`).join('')}
      </ul>
    </div>

    <div class="treatment-category">
      <h4>🌿 ${farming.charAt(0).toUpperCase() + farming.slice(1)} Treatment Options</h4>
      <ul>
        ${treatments[farmingType].map(treatment => `<li>${treatment}</li>`).join('')}
      </ul>
    </div>

    <div class="treatment-category">
      <h4>🛡️ Prevention Strategies</h4>
      <ul>
        ${treatments.prevention.map(strategy => `<li>${strategy}</li>`).join('')}
      </ul>
    </div>

    <div class="treatment-category">
      <h4>📋 Treatment Schedule</h4>
      <ul>
        <li><strong>Week 1:</strong> Apply immediate treatments, monitor daily progress</li>
        <li><strong>Week 2:</strong> Continue primary treatment, assess plant response</li>
        <li><strong>Week 3-4:</strong> Adjust treatment based on recovery, focus on prevention</li>
        <li><strong>Week 5+:</strong> Maintenance schedule and ongoing monitoring</li>
      </ul>
    </div>

    <div class="treatment-category">
      <h4>📊 Expected Outcomes</h4>
      <ul>
        <li><strong>Severity Level:</strong> ${severity.charAt(0).toUpperCase() + severity.slice(1)}</li>
        <li><strong>Recovery Time:</strong> ${getRecoveryTime(severity)}</li>
        <li><strong>Success Rate:</strong> ${getSuccessRate(farming, severity)}</li>
        <li><strong>Follow-up:</strong> Monitor weekly for 4-6 weeks</li>
      </ul>
    </div>
  `;
}

function getRecoveryTime(severity) {
  const timeMap = {
    'mild': '1-2 weeks',
    'moderate': '2-4 weeks', 
    'severe': '4-8 weeks',
    'critical': '6-12 weeks'
  };
  return timeMap[severity] || '2-4 weeks';
}

function getSuccessRate(farming, severity) {
  const baseRates = {
    'mild': 95,
    'moderate': 85,
    'severe': 70,
    'critical': 55
  };
  
  const rate = baseRates[severity] || 80;
  const adjustment = farming === 'organic' ? -5 : 0; // Slightly lower success rate for organic due to gentler treatments
  
  return Math.max(rate + adjustment, 50) + '%';
}

// Chat functionality
function initializeChat() {
  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message
  addChatMessage(message, 'user');
  chatInput.value = '';

  // Simulate AI response
  setTimeout(() => {
    const response = generateAIResponse(message);
    addChatMessage(response, 'bot');
  }, 1500);
}

function addChatMessage(content, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const avatar = sender === 'user' ? '👤' : '🤖';
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">
      ${content.includes('\n') ? content.split('\n').map(line => `<p>${line}</p>`).join('') : `<p>${content}</p>`}
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  const responses = {
    'camera': '📸 **Camera Feature Guide:**\n\n**🔧 How to Use:**\n• Tap "Take Photo" button\n• Allow camera permissions\n• Position plant 6-12 inches from lens\n• Ensure good lighting (natural light preferred)\n• Focus on affected areas\n• Take clear, sharp images\n\n**📋 Best Practices:**\n• Clean lens before capturing\n• Avoid shadows or glare\n• Show symptoms clearly\n• Include some healthy parts for comparison',
    
    'custom': '✏️ **Custom Description Tips:**\n\n**🎯 Be Specific About:**\n• Colors (yellow, brown, black, white)\n• Patterns (spots, stripes, patches)\n• Location (leaves, stems, roots, fruit)\n• Texture (powdery, sticky, dry, wet)\n• Timeline (when started, how fast spreading)\n\n**📝 Good Examples:**\n• "Yellow spots with brown edges on tomato leaves"\n• "White powdery substance on cucumber leaves"\n• "Small holes in bean leaves with insects visible"',
    
    'treatment': '💊 **Treatment Plan Features:**\n\n**🎛️ Two Input Methods:**\n• Choose from disease list (150+ conditions)\n• Describe symptoms in your own words\n\n**🌱 Comprehensive Plans Include:**\n• Immediate action steps (24-48 hours)\n• Organic or conventional treatments\n• Prevention strategies\n• Recovery timeline\n• Success rate estimates\n\n**✅ Works for ALL conditions - no limitations!**',
    
    'organic': '🌿 **Organic Treatment Arsenal:**\n\n**🧪 Natural Fungicides:**\n• Neem oil (2-3ml per liter)\n• Copper sulfate solution\n• Baking soda spray (1 tsp per quart)\n• Milk spray (1:10 ratio with water)\n\n**🐛 Pest Control:**\n• Beneficial insects (ladybugs, lacewings)\n• Diatomaceous earth application\n• Essential oil sprays (peppermint, rosemary)\n• Companion planting strategies\n\n**🌱 Soil Health:**\n• Compost amendments\n• Cover crops rotation\n• Beneficial microorganisms',
    
    'default': '🌱 **Dr. AgriBot at Your Service!**\n\nI can assist you with:\n• 📸 Camera capture guidance\n• ✏️ Custom symptom descriptions\n• 💊 Complete treatment plans\n• 🌿 Organic farming methods\n• 🦠 Disease identification\n• 🐛 Pest management\n• 🌱 Plant nutrition\n\n**💡 Try asking about:**\n• "How to use camera feature"\n• "Custom description tips"\n• "Organic treatments for [plant]"\n• "Treatment plan process"\n\nWhat specific plant health challenge can I help you solve today?'
  };

  // Find matching response
  for (const key in responses) {
    if (message.includes(key) && key !== 'default') {
      return responses[key];
    }
  }
  
  return responses.default;
}

// Enhanced history functionality
function initializeHistory() {
  renderHistory();
  updateHistoryStats();
  
  typeFilter.addEventListener('change', renderHistory);
  methodFilter.addEventListener('change', renderHistory);
}

function renderHistory() {
  const typeValue = typeFilter.value;
  const methodValue = methodFilter.value;
  
  let filteredHistory = analysisHistory;
  
  if (typeValue) {
    filteredHistory = filteredHistory.filter(item => item.type === typeValue);
  }
  
  if (methodValue) {
    filteredHistory = filteredHistory.filter(item => item.method === methodValue);
  }

  historyList.innerHTML = filteredHistory.map(item => `
    <div class="history-item" onclick="showHistoryDetails(${item.id})">
      <div class="history-header-info">
        <div class="history-type ${item.type.toLowerCase().replace(/\s+/g, '-')}">${item.type}</div>
        ${item.confidence ? `<div class="history-confidence">${item.confidence}%</div>` : ''}
      </div>
      
      <div class="history-title">${item.title}</div>
      <div class="history-description">${item.description}</div>
      
      <div class="history-meta">
        <div class="history-tags">
          ${item.tags.map(tag => `<span class="history-tag">${tag}</span>`).join('')}
        </div>
        <div class="history-date">${item.date}</div>
      </div>
    </div>
  `).join('');
}

function updateHistoryStats() {
  const total = analysisHistory.length;
  const camera = analysisHistory.filter(item => item.method === 'camera_capture').length;
  const custom = analysisHistory.filter(item => item.method === 'custom_description' || item.method === 'custom_condition').length;
  
  totalAnalyses.textContent = total;
  cameraAnalyses.textContent = camera;
  customAnalyses.textContent = custom;
}

function showHistoryDetails(itemId) {
  const item = analysisHistory.find(h => h.id === itemId);
  if (item) {
    const methodText = {
      'camera_capture': 'Camera Capture',
      'image_upload': 'Image Upload', 
      'custom_description': 'Custom Description',
      'custom_condition': 'Custom Condition',
      'dropdown_selection': 'Dropdown Selection'
    };
    
    const details = `
Details for: ${item.title}

Type: ${item.type}
Method: ${methodText[item.method] || item.method}
${item.confidence ? `Confidence: ${item.confidence}%` : ''}
Date: ${item.date}
Status: ${item.status || 'Completed'}
Tags: ${item.tags.join(', ')}

Description: ${item.description}
    `.trim();
    
    alert(details);
  }
}

function addToHistory(item) {
  analysisHistory.unshift(item);
  if (currentTab === 'history') {
    renderHistory();
    updateHistoryStats();
  }
}

// Navigation link functionality
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('href').substring(1);
      switchTab(targetTab);
      
      // Update nav active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

// Utility functions
function showMessage(message, type = 'info') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `status status--${type}`;
  messageDiv.textContent = message;
  messageDiv.style.position = 'fixed';
  messageDiv.style.top = '20px';
  messageDiv.style.right = '20px';
  messageDiv.style.zIndex = '1001';
  
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Enhanced error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
  showMessage('An error occurred. Please try again.', 'error');
});

// Service worker registration for offline capabilities (if supported)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Simplified offline support detection
    console.log('Service Worker support detected');
  });
}

// Initialize enhanced UI features
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Enhanced button feedback
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (!this.disabled) {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });
  
  // Auto-resize textareas
  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  });
});