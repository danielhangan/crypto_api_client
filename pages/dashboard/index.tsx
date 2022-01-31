import React from 'react';
import { DashboardUI } from '../../components/Dashboard/Main';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Navbar } from '../../components/Navbar';


export default function Dashboard ({ userdata: object }) {
  return (
    <DashboardLayout>
      <DashboardUI />
    </DashboardLayout>
  )
};
