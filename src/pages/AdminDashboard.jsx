import React, { useState } from 'react'
import { Calendar, Package, ShoppingBag, Users, Plus } from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments')

  const tabs = [
    { id: 'appointments', label: 'Rendez-vous', icon: Calendar },
    { id: 'products', label: 'Produits', icon: Package },
    { id: 'orders', label: 'Commandes', icon: ShoppingBag },
    { id: 'customers', label: 'Clients', icon: Users }
  ]

  const mockAppointments = [
    {
      id: 1,
      customer: 'Jean Dupont',
      device: 'iPhone 15 Pro',
      repairs: ['Écran', 'Batterie'],
      date: '2024-01-15',
      time: '10:00',
      status: 'Confirmé',
      total: 148
    },
    {
      id: 2,
      customer: 'Marie Martin',
      device: 'Samsung Galaxy S24',
      repairs: ['Écran'],
      date: '2024-01-15',
      time: '14:30',
      status: 'En attente',
      total: 89
    }
  ]

  const mockProducts = [
    {
      id: 1,
      name: 'Coque iPhone 15',
      category: 'Protection',
      price: 24.99,
      stock: 45,
      status: 'En stock'
    },
    {
      id: 2,
      name: 'Chargeur USB-C 30W',
      category: 'Chargeurs',
      price: 19.99,
      stock: 12,
      status: 'Stock faible'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-8">Tableau de bord Admin</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-gray-600">Rendez-vous aujourd'hui</p>
          </div>
          <div className="card text-center">
            <Package className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">156</h3>
            <p className="text-gray-600">Produits en stock</p>
          </div>
          <div className="card text-center">
            <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">8</h3>
            <p className="text-gray-600">Commandes en cours</p>
          </div>
          <div className="card text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">342</h3>
            <p className="text-gray-600">Clients total</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-lg">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="card">
          {activeTab === 'appointments' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Rendez-vous</h2>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Nouveau rendez-vous</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Client</th>
                      <th className="text-left py-3">Appareil</th>
                      <th className="text-left py-3">Réparations</th>
                      <th className="text-left py-3">Date/Heure</th>
                      <th className="text-left py-3">Statut</th>
                      <th className="text-left py-3">Total</th>
                      <th className="text-left py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAppointments.map(appointment => (
                      <tr key={appointment.id} className="border-b">
                        <td className="py-3">{appointment.customer}</td>
                        <td className="py-3">{appointment.device}</td>
                        <td className="py-3">{appointment.repairs.join(', ')}</td>
                        <td className="py-3">{appointment.date} {appointment.time}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'Confirmé' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="py-3">€{appointment.total}</td>
                        <td className="py-3">
                          <button className="text-primary hover:underline mr-2">Modifier</button>
                          <button className="text-red-500 hover:underline">Annuler</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Produits</h2>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Nouveau produit</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Nom</th>
                      <th className="text-left py-3">Catégorie</th>
                      <th className="text-left py-3">Prix</th>
                      <th className="text-left py-3">Stock</th>
                      <th className="text-left py-3">Statut</th>
                      <th className="text-left py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockProducts.map(product => (
                      <tr key={product.id} className="border-b">
                        <td className="py-3">{product.name}</td>
                        <td className="py-3">{product.category}</td>
                        <td className="py-3">€{product.price}</td>
                        <td className="py-3">{product.stock}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.status === 'En stock' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-primary hover:underline mr-2">Modifier</button>
                          <button className="text-red-500 hover:underline">Supprimer</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Commandes</h2>
              <p className="text-gray-500">Gestion des commandes en cours de développement...</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Clients</h2>
              <p className="text-gray-500">Gestion des clients en cours de développement...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard