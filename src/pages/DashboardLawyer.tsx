import React, { useState } from "react"
import {
  Users,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  DollarSign,
  CheckCircle,
  Clock
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

const DashboardLawyer: React.FC = () => {

  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", name: "Vue d'ensemble", icon: BarChart3 },
    { id: "clients", name: "Clients", icon: Users },
    { id: "cases", name: "Dossiers", icon: FileText },
    { id: "appointments", name: "Rendez-vous", icon: Calendar },
    { id: "messages", name: "Messages", icon: MessageSquare }
  ]

  const stats = [
    { label: "Clients actifs", value: "18", icon: Users },
    { label: "Dossiers en cours", value: "9", icon: FileText },
    { label: "Rendez-vous", value: "5", icon: Calendar },
    { label: "Revenus mensuels", value: "€4,200", icon: DollarSign }
  ]

  const clients = [
    { id: 1, name: "Jean Dupont", case: "Litige travail", status: "En cours" },
    { id: 2, name: "Marie Martin", case: "Divorce", status: "Nouveau" }
  ]

  const cases = [
    { id: 1, title: "Harcèlement moral", client: "Jean Dupont", status: "En cours" },
    { id: 2, title: "Litige commercial", client: "Entreprise X", status: "Terminé" }
  ]

  const appointments = [
    { id: 1, client: "Jean Dupont", date: "Demain - 14h", type: "Consultation" },
    { id: 2, client: "Marie Martin", date: "Vendredi - 10h", type: "Suivi" }
  ]

  const renderOverview = () => (
    <div className="space-y-8">

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <Card key={i}>
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold">{s.value}</p>
                </div>
                <Icon className="h-6 w-6 text-blue-600" />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* ACTIONS RAPIDES */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <Button variant="outline">Nouveau dossier</Button>
          <Button variant="outline">Ajouter client</Button>
          <Button variant="outline">Planifier RDV</Button>
          <Button variant="outline" onClick={() => (window.location.href = '/assistant')}>Assistance IA</Button>
        </CardContent>
      </Card>

    </div>
  )

  const renderClients = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Mes clients</h2>

      {clients.map(c => (
        <Card key={c.id}>
          <CardContent className="p-5 flex justify-between items-center">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.case}</p>
            </div>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              {c.status}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderCases = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dossiers</h2>

      {cases.map(c => (
        <Card key={c.id}>
          <CardContent className="p-5 flex justify-between">
            <div>
              <p className="font-semibold">{c.title}</p>
              <p className="text-sm text-gray-500">{c.client}</p>
            </div>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded">
              {c.status}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderAppointments = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Rendez-vous</h2>

      {appointments.map(a => (
        <Card key={a.id}>
          <CardContent className="p-5 flex justify-between">
            <div>
              <p className="font-semibold">{a.client}</p>
              <p className="text-sm text-gray-500">{a.type}</p>
            </div>
            <p className="text-sm">{a.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderMessages = () => (
    <div className="text-center py-12">
      <MessageSquare className="mx-auto h-10 w-10 text-gray-400 mb-4" />
      <p className="text-gray-500">Messagerie bientôt disponible</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Avocat</h1>
          <p className="text-gray-600">
            Gérez vos clients et dossiers efficacement
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <Card>
            <CardContent className="p-4 space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-2 p-2 rounded ${
                      activeTab === tab.id
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.name}
                  </button>
                )
              })}
            </CardContent>
          </Card>

          {/* CONTENT */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "clients" && renderClients()}
            {activeTab === "cases" && renderCases()}
            {activeTab === "appointments" && renderAppointments()}
            {activeTab === "messages" && renderMessages()}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardLawyer