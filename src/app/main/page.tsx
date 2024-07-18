"use client"
import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm'
import Sidebar from '../components/Sidebar'
import { Box } from '@radix-ui/themes'
type Props = {}

const Main = (props: Props) => {
    const [formData, setFormData] = useState([]);
    const [events, setEvents] = useState([]);

    const handleFormSubmit = (newEvent) => {
       // setEvents([...events, newEvent]);
        setFormData(newEvent);
    };

    return (
        <>

        <Box width={{initial:'393px',sm:'1512px'}} >
            <Sidebar todayEvents={events} formData={formData}/>
            <EventForm onNewEvent={handleFormSubmit}  />

            </Box>
        </>
    )
}

export default Main


