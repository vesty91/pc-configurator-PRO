import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Monitor, Cpu, HardDrive, CircuitBoard, Battery, Fan } from "lucide-react"

const Configure = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Configurateur PC</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Component Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Processeur (CPU)</CardTitle>
              <CardDescription>Sélectionnez votre processeur</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <Cpu className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir un processeur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amd-5600x">AMD Ryzen 5 5600X</SelectItem>
                  <SelectItem value="amd-5800x">AMD Ryzen 7 5800X</SelectItem>
                  <SelectItem value="intel-12600k">Intel Core i5-12600K</SelectItem>
                  <SelectItem value="intel-12700k">Intel Core i7-12700K</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Carte Mère</CardTitle>
              <CardDescription>Sélectionnez votre carte mère</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <CircuitBoard className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir une carte mère" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="b550">MSI B550 TOMAHAWK</SelectItem>
                  <SelectItem value="x570">ASUS ROG X570</SelectItem>
                  <SelectItem value="z690">GIGABYTE Z690 AORUS</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mémoire RAM</CardTitle>
              <CardDescription>Sélectionnez votre mémoire vive</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <Cpu className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir la RAM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16gb-3200">Corsair 16GB DDR4 3200MHz</SelectItem>
                  <SelectItem value="32gb-3600">G.Skill 32GB DDR4 3600MHz</SelectItem>
                  <SelectItem value="64gb-3600">Crucial 64GB DDR4 3600MHz</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stockage</CardTitle>
              <CardDescription>Sélectionnez votre stockage</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <HardDrive className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir le stockage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ssd-500">Samsung 970 EVO 500GB NVMe</SelectItem>
                  <SelectItem value="ssd-1tb">Samsung 970 EVO 1TB NVMe</SelectItem>
                  <SelectItem value="ssd-2tb">Samsung 970 EVO 2TB NVMe</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alimentation</CardTitle>
              <CardDescription>Sélectionnez votre alimentation</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <Battery className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir l'alimentation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="650w">Corsair RM650x 650W</SelectItem>
                  <SelectItem value="750w">Corsair RM750x 750W</SelectItem>
                  <SelectItem value="850w">Corsair RM850x 850W</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refroidissement</CardTitle>
              <CardDescription>Sélectionnez votre système de refroidissement</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <Fan className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choisir le refroidissement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air">Noctua NH-D15</SelectItem>
                  <SelectItem value="aio-240">NZXT Kraken X53 240mm</SelectItem>
                  <SelectItem value="aio-360">NZXT Kraken X73 360mm</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Button className="w-full">
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
                  <span className="text-xl font-bold">0.00 €</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez vos composants pour voir le prix total
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Configure