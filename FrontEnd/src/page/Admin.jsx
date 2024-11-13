import React from 'react'
import ProjectManagement from './components/ProjectManagement'
import ClientsManagement from './components/ClientsManagement'
import ContactForm from './components/ContactForm'
import SubscribeView from './components/SubscribeView'
import AdminNavbar from './components/AdminNavbar'
import Footer2 from './components/Footer2'

const Admin = () => {
  return (
    <div>
      <AdminNavbar />

      <div className="min-h-screen">
        <ProjectManagement />
        
<div className="border-t border-gray-400 my-6 w-[90%] mx-auto"></div>

        <ClientsManagement />
        <ContactForm />
        <SubscribeView />
      </div>
      <Footer2 />

    </div>
  )
}

export default Admin
