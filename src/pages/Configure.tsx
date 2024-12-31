import { Button } from "@/components/ui/button"
import { Monitor, Cpu, HardDrive, CircuitBoard, Battery, Fan } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import ComponentCard from "@/components/configurator/ComponentCard"
import PriceSummary from "@/components/configurator/PriceSummary"
import { componentOptions, componentPrices, componentDescriptions, componentNames } from "@/data/components"

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

  const componentIcons = {
    cpu: Cpu,
    motherboard: CircuitBoard,
    ram: Cpu,
    storage: HardDrive,
    psu: Battery,
    cooling: Fan
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Configurateur PC</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {(Object.keys(componentOptions) as Array<keyof typeof componentOptions>).map((component) => (
            <ComponentCard
              key={component}
              title={componentNames[component]}
              description={componentDescriptions[component]}
              icon={componentIcons[component]}
              options={componentOptions[component]}
              value={selectedComponents[component]}
              onChange={(value) => handleComponentChange(value, component)}
            />
          ))}

          <Button className="w-full" onClick={handleAddToCart}>
            Ajouter au panier
          </Button>
        </div>

        <div className="md:sticky md:top-8">
          <PriceSummary
            selectedComponents={selectedComponents}
            prices={componentPrices}
            componentNames={componentNames}
          />
        </div>
      </div>
    </div>
  )
}

export default Configure