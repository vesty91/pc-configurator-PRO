export const componentPrices = {
  "amd-5600x": 299,
  "amd-5800x": 449,
  "amd-5900x": 549,
  "amd-5950x": 799,
  "intel-12600k": 319,
  "intel-12700k": 469,
  "intel-12900k": 619,
  "intel-13900k": 789,
  "b550": 169,
  "x570": 299,
  "b660": 189,
  "z690": 329,
  "z790": 429,
  "16gb-3200": 89,
  "32gb-3600": 179,
  "32gb-4000": 249,
  "64gb-3600": 349,
  "64gb-4000": 449,
  "ssd-500": 79,
  "ssd-1tb": 129,
  "ssd-2tb": 229,
  "ssd-4tb": 429,
  "650w": 89,
  "750w": 119,
  "850w": 149,
  "1000w": 199,
  "1200w": 249,
  "air": 89,
  "air-premium": 119,
  "aio-240": 129,
  "aio-280": 149,
  "aio-360": 179,
  "aio-420": 229
}

export const componentOptions = {
  cpu: [
    { value: "amd-5600x", label: "AMD Ryzen 5 5600X", price: 299 },
    { value: "amd-5800x", label: "AMD Ryzen 7 5800X", price: 449 },
    { value: "amd-5900x", label: "AMD Ryzen 9 5900X", price: 549 },
    { value: "amd-5950x", label: "AMD Ryzen 9 5950X", price: 799 },
    { value: "intel-12600k", label: "Intel Core i5-12600K", price: 319 },
    { value: "intel-12700k", label: "Intel Core i7-12700K", price: 469 },
    { value: "intel-12900k", label: "Intel Core i9-12900K", price: 619 },
    { value: "intel-13900k", label: "Intel Core i9-13900K", price: 789 }
  ],
  motherboard: [
    { value: "b550", label: "MSI B550 TOMAHAWK", price: 169 },
    { value: "x570", label: "ASUS ROG X570", price: 299 },
    { value: "b660", label: "MSI PRO B660M-A", price: 189 },
    { value: "z690", label: "GIGABYTE Z690 AORUS", price: 329 },
    { value: "z790", label: "ASUS ROG MAXIMUS Z790", price: 429 }
  ],
  ram: [
    { value: "16gb-3200", label: "Corsair 16GB DDR4 3200MHz", price: 89 },
    { value: "32gb-3600", label: "G.Skill 32GB DDR4 3600MHz", price: 179 },
    { value: "32gb-4000", label: "G.Skill 32GB DDR4 4000MHz", price: 249 },
    { value: "64gb-3600", label: "Crucial 64GB DDR4 3600MHz", price: 349 },
    { value: "64gb-4000", label: "Corsair 64GB DDR4 4000MHz", price: 449 }
  ],
  storage: [
    { value: "ssd-500", label: "Samsung 970 EVO 500GB NVMe", price: 79 },
    { value: "ssd-1tb", label: "Samsung 970 EVO 1TB NVMe", price: 129 },
    { value: "ssd-2tb", label: "Samsung 970 EVO 2TB NVMe", price: 229 },
    { value: "ssd-4tb", label: "Samsung 990 PRO 4TB NVMe", price: 429 }
  ],
  psu: [
    { value: "650w", label: "Corsair RM650x 650W", price: 89 },
    { value: "750w", label: "Corsair RM750x 750W", price: 119 },
    { value: "850w", label: "Corsair RM850x 850W", price: 149 },
    { value: "1000w", label: "Corsair RM1000x 1000W", price: 199 },
    { value: "1200w", label: "Corsair AX1200i 1200W", price: 249 }
  ],
  cooling: [
    { value: "air", label: "Noctua NH-D15", price: 89 },
    { value: "air-premium", label: "be quiet! Dark Rock Pro 4", price: 119 },
    { value: "aio-240", label: "NZXT Kraken X53 240mm", price: 129 },
    { value: "aio-280", label: "NZXT Kraken X63 280mm", price: 149 },
    { value: "aio-360", label: "NZXT Kraken X73 360mm", price: 179 },
    { value: "aio-420", label: "Arctic Liquid Freezer II 420", price: 229 }
  ]
}

export const componentRecommendations = {
  "amd-5600x": ["Gaming 1080p", "Bureautique avancée"],
  "amd-5800x": ["Gaming 1440p", "Streaming", "Montage vidéo léger"],
  "amd-5900x": ["Gaming 4K", "Montage vidéo", "Rendu 3D"],
  "amd-5950x": ["Station de travail", "Rendu 3D professionnel"],
  "intel-12600k": ["Gaming 1440p", "Streaming", "Montage vidéo léger"],
  "intel-12700k": ["Gaming 4K", "Montage vidéo", "Rendu 3D"],
  "intel-12900k": ["Station de travail", "Gaming 4K+"],
  "intel-13900k": ["Station de travail", "Rendu 3D professionnel"],
}

export const componentPerformanceScores = {
  "amd-5600x": { gaming: 8, productivity: 7 },
  "amd-5800x": { gaming: 9, productivity: 8 },
  "amd-5900x": { gaming: 9, productivity: 9 },
  "amd-5950x": { gaming: 9, productivity: 10 },
  "intel-12600k": { gaming: 8, productivity: 7 },
  "intel-12700k": { gaming: 9, productivity: 8 },
  "intel-12900k": { gaming: 10, productivity: 9 },
  "intel-13900k": { gaming: 10, productivity: 10 },
}

export const componentDescriptions = {
  cpu: "Le cerveau de votre ordinateur, crucial pour les performances",
  motherboard: "La base qui relie tous vos composants",
  ram: "La mémoire vive pour le multitâche et les applications",
  storage: "Espace de stockage pour vos fichiers et applications",
  psu: "L'alimentation électrique de votre système",
  cooling: "Système de refroidissement pour votre processeur"
}

export const componentNames = {
  cpu: "Processeur",
  motherboard: "Carte mère",
  ram: "Mémoire RAM",
  storage: "Stockage",
  psu: "Alimentation",
  cooling: "Refroidissement"
}
