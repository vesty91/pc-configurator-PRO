import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Trash2, MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Cart = () => {
  const { toast } = useToast()
  // Pour l'instant, nous utilisons des données statiques
  const cartItems = [
    {
      id: 1,
      type: 'Configuration Gaming',
      quantity: 1,
      components: {
        cpu: 'AMD Ryzen 7 5800X',
        gpu: 'NVIDIA RTX 3080',
        ram: '32GB DDR4',
        storage: '1TB NVMe SSD',
        motherboard: 'MSI B550 TOMAHAWK',
        psu: 'Corsair RM850x',
        case: 'Phanteks P500A'
      },
      price: 2499.99
    }
  ]

  const handleQuantityChange = (itemId: number, change: number) => {
    toast({
      title: "Quantité mise à jour",
      description: "La quantité a été mise à jour avec succès.",
    })
  }

  const handleRemoveItem = (itemId: number) => {
    toast({
      title: "Article supprimé",
      description: "L'article a été supprimé de votre panier.",
      variant: "destructive",
    })
  }

  const handleCheckout = () => {
    toast({
      title: "Redirection vers le paiement",
      description: "Vous allez être redirigé vers la page de paiement.",
    })
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <ShoppingCart className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Mon Panier</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Votre panier est vide</p>
            <Button className="mt-4" variant="outline" onClick={() => window.history.back()}>
              Continuer mes achats
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="text-xl">{item.type}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Composant</TableHead>
                        <TableHead>Modèle</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(item.components).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium capitalize">{key}</TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-lg font-semibold">
                      {(item.price * item.quantity).toLocaleString('fr-FR')}€
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="lg:sticky lg:top-8 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString('fr-FR')}€</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>{total.toLocaleString('fr-FR')}€</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  Procéder au paiement
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart