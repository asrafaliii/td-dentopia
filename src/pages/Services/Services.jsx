import React from 'react'
import PageHeader from '../../components/PageHeader'
import ServicesList from './section/ServicesList'

export const Services = () => {
  return (
    <div>
        <PageHeader title="Our Services"/>
        <ServicesList />
      
    </div>
  )
}
