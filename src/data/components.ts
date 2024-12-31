export const componentPrices = {
  "amd-5600x": 299,
  "amd-5800x": 449,
  "intel-12600k": 319,
  "intel-12700k": 469,
  "b550": 169,
  "x570": 299,
  "z690": 329,
  "16gb-3200": 89,
  "32gb-3600": 179,
  "64gb-3600": 349,
  "ssd-500": 79,
  "ssd-1tb": 129,
  "ssd-2tb": 229,
  "650w": 89,
  "750w": 119,
  "850w": 149,
  "air": 89,
  "aio-240": 129,
  "aio-360": 179
}

export const componentOptions = {
  cpu: [
    { value: "amd-5600x", label: "AMD Ryzen 5 5600X", price: 299 },
    { value: "amd-5800x", label: "AMD Ryzen 7 5800X", price: 449 },
    { value: "intel-12600k", label: "Intel Core i5-12600K", price: 319 },
    { value: "intel-12700k", label: "Intel Core i7-12700K", price: 469 }
  ],
  motherboard: [
    { value: "b550", label: "MSI B550 TOMAHAWK", price: 169 },
    { value: "x570", label: "ASUS ROG X570", price: 299 },
    { value: "z690", label: "GIGABYTE Z690 AORUS", price: 329 }
  ],
  ram: [
    { value: "16gb-3200", label: "Corsair 16GB DDR4 3200MHz", price: 89 },
    { value: "32gb-3600", label: "G.Skill 32GB DDR4 3600MHz", price: 179 },
    { value: "64gb-3600", label: "Crucial 64GB DDR4 3600MHz", price: 349 }
  ],
  storage: [
    { value: "ssd-500", label: "Samsung 970 EVO 500GB NVMe", price: 79 },
    { value: "ssd-1tb", label: "Samsung 970 EVO 1TB NVMe", price: 129 },
    { value: "ssd-2tb", label: "Samsung 970 EVO 2TB NVMe", price: 229 }
  ],
  psu: [
    { value: "650w", label: "Corsair RM650x 650W", price: 89 },
    { value: "750w", label: "Corsair RM750x 750W", price: 119 },
    { value: "850w", label: "Corsair RM850x 850W", price: 149 }
  ],
  cooling: [
    { value: "air", label: "Noctua NH-D15", price: 89 },
    { value: "aio-240", label: "NZXT Kraken X53 240mm", price: 129 },
    { value: "aio-360", label: "NZXT Kraken X73 360mm", price: 179 }
  ]
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