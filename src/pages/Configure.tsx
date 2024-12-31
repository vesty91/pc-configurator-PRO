import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Monitor, Cpu, HardDrive, CircuitBoard, Battery, Fan } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface ComponentPrice {
  [key: string]: number;
}

const Configure = () => {
  const { toast } = useToast()
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: "",
    motherboard: "",
    ram: "",
    storage: "",
    psu: "",
    cooling: ""
  })

  const prices: ComponentPrice = {
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

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, componentId) => {
      return total + (prices[componentId] || 0);
    }, 0);
  }

  const handleComponentChange = (value: string, component: keyof typeof selectedComponents) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component]: value
    }))
  }

  const handleAddToCart = () => {
    const missingComponents = Object.entries(selectedComponents).filter(([_, value]) => !value)
    
    if (missingComponents.length > 0) {
      toast({
        variant: "destructive",
        title: "Configuration incomplète",
        description: "Veuillez sélectionner tous les composants avant d'ajouter au panier."
      })
      return
    }

    toast({
      title: "Configuration ajoutée au panier",
      description: "Votre configuration personnalisée a été ajoutée au panier avec succès."
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Configurateur PC</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <CardTitle>Processeur (CPU)</CardTitle>
              </div>
              <CardDescription>Le cerveau de votre ordinateur, crucial pour les performances</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.cpu} onValueChange={(value) => handleComponentChange(value, 'cpu')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un processeur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amd-5600x">AMD Ryzen 5 5600X - 299€</SelectItem>
                  <SelectItem value="amd-5800x">AMD Ryzen 7 5800X - 449€</SelectItem>
                  <SelectItem value="intel-12600k">Intel Core i5-12600K - 319€</SelectItem>
                  <SelectItem value="intel-12700k">Intel Core i7-12700K - 469€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CircuitBoard className="h-5 w-5 text-primary" />
                <CardTitle>Carte Mère</CardTitle>
              </div>
              <CardDescription>La base qui relie tous vos composants</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.motherboard} onValueChange={(value) => handleComponentChange(value, 'motherboard')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une carte mère" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="b550">MSI B550 TOMAHAWK - 169€</SelectItem>
                  <SelectItem value="x570">ASUS ROG X570 - 299€</SelectItem>
                  <SelectItem value="z690">GIGABYTE Z690 AORUS - 329€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <CardTitle>Mémoire RAM</CardTitle>
              </div>
              <CardDescription>La mémoire vive pour le multitâche et les applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.ram} onValueChange={(value) => handleComponentChange(value, 'ram')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir la RAM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16gb-3200">Corsair 16GB DDR4 3200MHz - 89€</SelectItem>
                  <SelectItem value="32gb-3600">G.Skill 32GB DDR4 3600MHz - 179€</SelectItem>
                  <SelectItem value="64gb-3600">Crucial 64GB DDR4 3600MHz - 349€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-primary" />
                <CardTitle>Stockage</CardTitle>
              </div>
              <CardDescription>Espace de stockage pour vos fichiers et applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.storage} onValueChange={(value) => handleComponentChange(value, 'storage')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir le stockage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ssd-500">Samsung 970 EVO 500GB NVMe - 79€</SelectItem>
                  <SelectItem value="ssd-1tb">Samsung 970 EVO 1TB NVMe - 129€</SelectItem>
                  <SelectItem value="ssd-2tb">Samsung 970 EVO 2TB NVMe - 229€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-primary" />
                <CardTitle>Alimentation</CardTitle>
              </div>
              <CardDescription>L'alimentation électrique de votre système</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.psu} onValueChange={(value) => handleComponentChange(value, 'psu')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir l'alimentation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="650w">Corsair RM650x 650W - 89€</SelectItem>
                  <SelectItem value="750w">Corsair RM750x 750W - 119€</SelectItem>
                  <SelectItem value="850w">Corsair RM850x 850W - 149€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Fan className="h-5 w-5 text-primary" />
                <CardTitle>Refroidissement</CardTitle>
              </div>
              <CardDescription>Système de refroidissement pour votre processeur</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedComponents.cooling} onValueChange={(value) => handleComponentChange(value, 'cooling')}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir le refroidissement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air">Noctua NH-D15 - 89€</SelectItem>
                  <SelectItem value="aio-240">NZXT Kraken X53 240mm - 129€</SelectItem>
                  <SelectItem value="aio-360">NZXT Kraken X73 360mm - 179€</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={handleAddToCart}>
            Ajouter au panier
          </Button>
        </div>

        <div className="md:sticky md:top-8">
          <Card>
            <CardHeader>
              <CardTitle>Récapitulatif</CardTitle>
              <CardDescription>Votre configuration actuelle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Prix total estimé:</span>
                  <span className="text-xl font-bold">{calculateTotal().toLocaleString('fr-FR')} €</span>
                </div>
                <div className="space-y-2">
                  {Object.entries(selectedComponents).map(([component, value]) => (
                    value && (
                      <div key={component} className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{component}:</span>
                        <span>{prices[value]}€</span>
                      </div>
                    )
                  ))}
                </div>
                {Object.values(selectedComponents).some(value => !value) && (
                  <p className="text-sm text-muted-foreground">
                    Sélectionnez tous les composants pour voir le prix total
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Configure