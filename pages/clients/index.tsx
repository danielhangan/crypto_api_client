import React from 'react';
import { ClientsView } from '../../components/Customers/ClientsView';
import { DashboardLayout } from '../../layouts/DashboardLayout';

export default function ClientDashboard () {

    return (
        <DashboardLayout>
            <ClientsView />
        </DashboardLayout>
    )
}